

'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import type { Pose, PoseWithImage, Concept } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PoseNode } from './PoseNode';
import { PoseDetailDialog } from './PoseDetailDialog';
import { Label } from '@/components/ui/label';
import RouteExporter from './RouteExporter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion } from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HelpCircle, Video, Image as ImageIcon, Text, Move, ArrowLeftRight, Filter } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn, getYouTubeThumbnailUrl } from '@/lib/utils';
import Image from 'next/image';
import LevelFilter, { type SearchQuery } from './LevelFilter';


type NameDisplay = 'es' | 'en' | 'both';
type InteractionMode = 'explore' | 'route';
type ExpandedView = 'video' | 'image' | 'description';
type ConnectionMode = 'off' | 'incoming' | 'outgoing';

type Connection = {
  from: string;
  to: string;
  type: 'prerequisite' | 'transition';
  transition?: Pose;
};

type LevelMapProps = {
  poses: Pose[];
  allPoses: Pose[];
  concepts: Concept[];
  nameDisplay: NameDisplay;
  setNameDisplay: (value: NameDisplay) => void;
};

const getDisplayName = (pose: Pose, displayMode: NameDisplay): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1]?.replace(/[()]/g, '') || '';

    switch (displayMode) {
      case 'en':
        return enName || esName;
      case 'es':
        return esName;
      case 'both':
      default:
        return pose.nombre;
    }
};

const getPoseFullName = (pose: Pose, displayMode: NameDisplay): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0] || '';
    const enName = parts[1]?.replace(/[()]/g, '') || '';
    
    if (displayMode === 'en') {
      return enName.toLowerCase() || esName.toLowerCase();
    }
    return esName.toLowerCase();
}


export default function LevelMap({ 
  poses,
  allPoses,
  concepts, 
  nameDisplay,
  setNameDisplay
}: LevelMapProps) {
  
  const [selectedPoseForDialog, setSelectedPoseForDialog] = useState<PoseWithImage | null>(null);
  const [interactionMode, setInteractionMode] = useState<InteractionMode>('explore');
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const poseNodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  const [hoveredPoseId, setHoveredPoseId] = useState<string | null>(null);
  const [selectedRoutePoseIds, setSelectedRoutePoseIds] = useState<string[]>([]);

  const [accordionValue, setAccordionValue] = useState<string[]>([]);
  const [expandedView, setExpandedView] = useState<ExpandedView>('image');
  
  const [connectionState, setConnectionState] = useState<{poseId: string | null, mode: ConnectionMode}>({ poseId: null, mode: 'off' });

  // Filter states
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchQueries, setSearchQueries] = useState<SearchQuery[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [originFilter, setOriginFilter] = useState<string | null>(null);
  const [destinationFilter, setDestinationFilter] = useState<string | null>(null);


  const updateAllPositions = useCallback(() => {
    const newPositions: Record<string, { x: number; y: number }> = {};
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    for (const poseId in poseNodeRefs.current) {
      const node = poseNodeRefs.current[poseId];
      if (node) {
        const rect = node.getBoundingClientRect();
        newPositions[poseId] = {
          x: rect.left - containerRect.left + container.scrollLeft + rect.width / 2,
          y: rect.top - containerRect.top + container.scrollTop + rect.height / 2,
        };
      }
    }
    setNodePositions(newPositions);
  }, []);

  const filteredPoses = useMemo(() => {
    // If no filters, show all poses for the level
    if (searchQueries.length === 0 && selectedTags.length === 0 && !originFilter && !destinationFilter) {
      return poses;
    }

    let relevantPoseIds = new Set<string>();
    const posesInView = new Set(poses.map(p => p.id));

    // Phase 1: Filter by name and/or tags (OR logic)
    const hasNameOrTagFilter = searchQueries.length > 0 || selectedTags.length > 0;
    if (hasNameOrTagFilter) {
        allPoses.forEach(pose => {
            const nameMatches = searchQueries.length === 0 || searchQueries.some(sq => {
                const esName = pose.nombre.split('\n')[0].toLowerCase();
                const enName = (pose.nombre.split('\n')[1] || '').replace(/[()]/g, '').toLowerCase() || esName;
                if (sq.mode === 'exact') {
                    return esName === sq.query || enName === sq.query;
                }
                return esName.includes(sq.query) || enName.includes(sq.query);
            });
            const tagMatches = selectedTags.length === 0 || selectedTags.some(tag => pose.tags?.includes(tag));
            
            if ((searchQueries.length > 0 && nameMatches) || (selectedTags.length > 0 && tagMatches)) {
                relevantPoseIds.add(pose.id);
            }
        });
    }

    // Phase 2: Connection filters (Origin/Destination) - this adds poses to the view
    if (originFilter || destinationFilter) {
        const relevantTransitions = allPoses.filter(p => {
            if (p.type !== 'Transition' && p.type !== 'Flow' && p.type !== 'Whip') return false;
            
            const originMatch = !originFilter || (p.originPoses?.includes(originFilter));
            const destinationMatch = !destinationFilter || (p.destinationPoses?.includes(destinationFilter));
            
            return originMatch && destinationMatch;
        });

        if (originFilter) relevantPoseIds.add(originFilter);
        if (destinationFilter) relevantPoseIds.add(destinationFilter);
        relevantTransitions.forEach(t => {
            relevantPoseIds.add(t.id);
            t.originPoses?.forEach(id => relevantPoseIds.add(id));
            t.destinationPoses?.forEach(id => relevantPoseIds.add(id));
        });
    }
  
    // If we only have connection filters, we show all relevant poses from those connections
    if (!hasNameOrTagFilter && (originFilter || destinationFilter)) {
        return allPoses.filter(p => relevantPoseIds.has(p.id) && posesInView.has(p.id));
    }
    
    // If we have name/tag filters, we only show poses that match those filters.
    // If there are also connection filters, we show the intersection.
    return allPoses.filter(p => relevantPoseIds.has(p.id) && posesInView.has(p.id));

  }, [poses, allPoses, searchQueries, selectedTags, originFilter, destinationFilter]);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(updateAllPositions);
    resizeObserver.observe(container);

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(updateAllPositions);
    }, 50); // Initial delay to allow for rendering

    container.addEventListener('scroll', updateAllPositions);
    window.addEventListener('resize', updateAllPositions);

    return () => {
      clearTimeout(timeoutId);
      if (container) {
        resizeObserver.unobserve(container);
        container.removeEventListener('scroll', updateAllPositions);
      }
      window.removeEventListener('resize', updateAllPositions);
    };
  }, [poses, updateAllPositions, filteredPoses]);


  const allPosesById = useMemo(() => {
    return allPoses.reduce((acc, pose) => {
      acc[pose.id] = pose;
      return acc;
    }, {} as Record<string, Pose>);
  }, [allPoses]);

  const transitions = useMemo(() => allPoses.filter(p => p.type === 'Transition' || p.type === 'Flow'), [allPoses]);
  
  const getAllPrerequisites = useCallback((poseId: string): string[] => {
    const pose = allPosesById[poseId];
    if (!pose || !pose.prerequisites || pose.prerequisites.length === 0) {
      return [];
    }
    const prereqs = new Set<string>();
    pose.prerequisites.forEach(pId => {
      if (allPosesById[pId]) {
          prereqs.add(pId);
      }
    });
    return Array.from(prereqs);
  }, [allPosesById]);


  const transitionConnections = useMemo((): Connection[] => {
    if (interactionMode !== 'explore' || connectionState.mode === 'off' || !connectionState.poseId) return [];
    
    const poseId = connectionState.poseId;
    
    if (connectionState.mode === 'outgoing') {
      return transitions
        .filter(t => t.originPoses?.includes(poseId))
        .flatMap(t => (t.destinationPoses || []).map(destId => ({
            from: poseId,
            to: destId,
            type: 'transition' as const,
            transition: t,
        })));
    }
    
    if (connectionState.mode === 'incoming') {
      return transitions
        .filter(t => t.destinationPoses?.includes(poseId))
        .flatMap(t => (t.originPoses || []).map(originId => ({
            from: originId,
            to: poseId,
            type: 'transition' as const,
            transition: t,
        })));
    }
    
    return [];
  }, [connectionState, transitions, interactionMode]);


  const prerequisiteConnections = useMemo((): Connection[] => {
     if(interactionMode !== 'explore' || !hoveredPoseId || connectionState.poseId) return [];
    const pose = allPosesById[hoveredPoseId];
    if (!pose) return [];
    
    return (pose.prerequisites || [])
      .map(id => ({ from: id, to: hoveredPoseId, type: 'prerequisite' }));

  }, [hoveredPoseId, allPosesById, interactionMode, connectionState.poseId]);
  

  const highlightedPoseIds = useMemo(() => {
    if (interactionMode === 'route') {
      const allHighlighted = new Set<string>();
      selectedRoutePoseIds.forEach(id => {
        allHighlighted.add(id);
        getAllPrerequisites(id).forEach(pId => allHighlighted.add(pId));
      });
      return Array.from(allHighlighted);
    }
  
    if (interactionMode === 'explore') {
      if (hoveredPoseId && !connectionState.poseId) {
        return [hoveredPoseId, ...getAllPrerequisites(hoveredPoseId)];
      }
      if (connectionState.mode !== 'off' && connectionState.poseId) {
        const connectedIds = transitionConnections.flatMap(c => [c.from, c.to]);
        return [connectionState.poseId, ...connectedIds];
      }
    }
    return [];
  }, [interactionMode, selectedRoutePoseIds, transitionConnections, connectionState, hoveredPoseId, getAllPrerequisites]);


  const posesByLevel = useMemo(() => {
    const posesToDisplay = filteredPoses;
    
    const grouped = posesToDisplay.reduce((acc, pose) => {
      const level = pose.nivel;
      if (!acc[level]) {
        acc[level] = [];
      }
      acc[level].push(pose);
      return acc;
    }, {} as Record<number, Pose[]>);

    return Object.keys(grouped).sort((a,b) => Number(a) - Number(b)).reduce((acc, key) => {
        acc[Number(key)] = grouped[Number(key)];
        return acc;
    }, {} as Record<number, Pose[]>);
  }, [filteredPoses]);
  
  const handleSelectPoseForDialog = (pose: Pose) => {
    setSelectedPoseForDialog(pose as PoseWithImage);
  };
  
  const getDisplayNameForMap = (pose: Pose, displayMode: NameDisplay): string => {
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1]?.replace(/[()]/g, '') || '';

    switch (displayMode) {
      case 'en':
        return enName || esName;
      case 'es':
        return esName;
      case 'both':
      default:
        return pose.nombre;
    }
  };

  const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 0: return "Nivel 0: Vuelo Terapéutico";
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Flow 1 – Básico";
        case 5: return "Nivel 5: Intermedio";
        case 6: return "Nivel 6: Flow 2 – Intermedio";
        case 7: return "Nivel 7: Washing Machines";
        case 8: return "Nivel 8: Flow 3 – Avanzado";
        case 9: return "Nivel 9: Icarian Básico";
        case 10: return "Nivel 10: Icarian Intermedio";
        case 11: return "Nivel 11: Whips Básicos";
        case 12: return "Nivel 12: Whips Intermedios";
        case 13: return "Nivel 13: Whips Avanzados";
        case 14: return "Nivel 14: Standing Básico";
        case 15: return "Nivel 15: Standing Intermedio";
        case 16: return "Nivel 16: Standing Avanzado";
        default: return `Nivel ${level}`;
    }
  }

  const handlePoseClick = (poseId: string) => {
    if (interactionMode !== 'explore') return;

    setExpandedView('image'); // Force image view on transition click
    
    const poseHasMedia = (pId: string) => {
        const pose = allPosesById[pId];
        return pose && (pose.url_imagen || pose.gallery_images?.length || pose.url_video || pose.gallery_videos?.length);
    };

    setConnectionState(prevState => {
        let newMode: ConnectionMode = 'off';
        let newAccordionValue: string[] = [];

        if (prevState.poseId !== poseId || prevState.mode === 'off') {
            newMode = 'outgoing';
            const outgoingConnections = transitions
                .filter(t => t.originPoses?.includes(poseId))
                .flatMap(t => t.destinationPoses || []);
            newAccordionValue = [poseId, ...outgoingConnections].filter(poseHasMedia);
        } else if (prevState.mode === 'outgoing') {
            newMode = 'incoming';
             const incomingConnections = transitions
                .filter(t => t.destinationPoses?.includes(poseId))
                .flatMap(t => t.originPoses || []);
            newAccordionValue = [poseId, ...incomingConnections].filter(poseHasMedia);
        } else if (prevState.mode === 'incoming') {
            newMode = 'off';
            newAccordionValue = [];
        }

        setAccordionValue(newAccordionValue);
        if (newMode === 'off') {
          return { poseId: null, mode: 'off' };
        }
        return { poseId: poseId, mode: newMode };
    });
  };
  
  const handleRouteChange = (poseId: string, checked: boolean) => {
    setSelectedRoutePoseIds(prev => 
      checked ? [...prev, poseId] : prev.filter(id => id !== poseId)
    );
  };
  
  const handleToggleView = (view: ExpandedView) => {
    const isAlreadyActive = accordionValue.length > 0 && expandedView === view;
    setExpandedView(view);
    if (isAlreadyActive) {
      setAccordionValue([]);
    } else {
      let relevantPoseIds: string[] = [];
      if (view === 'video') {
        relevantPoseIds = poses.filter(p => p.url_video || (p.gallery_videos && p.gallery_videos.length > 0)).map(p => p.id);
      } else if (view === 'image') {
        relevantPoseIds = poses.filter(p => p.url_imagen || (p.gallery_images && p.gallery_images.length > 0)).map(p => p.id);
      } else { // description
        relevantPoseIds = poses.map(p => p.id);
      }
      setAccordionValue(relevantPoseIds);
    }
  };
  
  const isAnyPoseHighlighted = highlightedPoseIds.length > 0;
  const allConnections = [...transitionConnections, ...prerequisiteConnections];


  return (
    <Card>
       <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle>Mapa de Niveles</CardTitle>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
           <Button variant="outline" size="sm" onClick={() => setIsFilterVisible(!isFilterVisible)}>
              <Filter className="mr-2 h-4 w-4" />
              Filtros
          </Button>
          <div className="flex items-center space-x-2">
            <RadioGroup 
              value={interactionMode} 
              onValueChange={(value) => {
                setInteractionMode(value as InteractionMode);
                setHoveredPoseId(null);
                setConnectionState({ poseId: null, mode: 'off' });
              }} 
              className="flex items-center space-x-2"
            >
                <div className="flex items-center space-x-1">
                    <RadioGroupItem value="explore" id="explore" />
                    <Label htmlFor="explore" className="text-sm font-medium">Explorar</Label>
                </div>
                <div className="flex items-center space-x-1">
                    <RadioGroupItem value="route" id="route" />
                    <Label htmlFor="route" className="text-sm font-medium">Ruta</Label>
                </div>
            </RadioGroup>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6"><HelpCircle className="h-4 w-4"/></Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 text-sm">
                <ul className="space-y-2">
                  <li><strong className="text-primary">Explorar:</strong></li>
                  <li>- 1er Clic: Muestra transiciones de salida (flecha) y expande las fotos.</li>
                  <li>- 2º Clic: Muestra transiciones de llegada (flecha) y expande las fotos.</li>
                  <li>- 3er Clic: Limpia la selección.</li>
                  <li><strong className="text-primary">Ruta:</strong> Selecciona posturas para crear y exportar una ruta de aprendizaje.</li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => handleToggleView('video')}><Video className="h-4 w-4" /></Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Expandir/Colapsar Videos</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => handleToggleView('image')}><ImageIcon className="h-4 w-4" /></Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Expandir/Colapsar Imágenes</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <Button variant="outline" size="icon" onClick={() => handleToggleView('description')}><Text className="h-4 w-4" /></Button>
                  </TooltipTrigger>
                   <TooltipContent>
                    <p>Expandir/Colapsar Contenido</p>
                  </TooltipContent>
                </Tooltip>
                 <Tooltip>
                  <TooltipTrigger asChild>
                     <Button variant={connectionState.mode !== 'off' ? "secondary" : "outline"} size="icon" onClick={() => {
                        setConnectionState({ poseId: null, mode: 'off' });
                        setAccordionValue([]);
                     }}><Move className="h-4 w-4" /></Button>
                  </TooltipTrigger>
                   <TooltipContent>
                    <p>Limpiar Líneas de Transición</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </div>
           <div className="flex items-center space-x-2">
            <Label htmlFor="name-display-select" className="text-sm font-medium">Nombres:</Label>
            <Select value={nameDisplay} onValueChange={(value: NameDisplay) => setNameDisplay(value)}>
              <SelectTrigger id="name-display-select" className="w-[150px] h-9 text-sm">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">En Español</SelectItem>
                <SelectItem value="en">En Inglés</SelectItem>
                <SelectItem value="both">Ambos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      {isFilterVisible && (
        <LevelFilter 
            allPoses={allPoses}
            searchQueries={searchQueries}
            setSearchQueries={setSearchQueries}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            originFilter={originFilter}
            setOriginFilter={setOriginFilter}
            destinationFilter={destinationFilter}
            setDestinationFilter={setDestinationFilter}
            nameDisplay={nameDisplay}
        />
      )}


      <CardContent className="relative overflow-x-auto" ref={containerRef}>
        <TooltipProvider>
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" style={{ overflow: 'visible' }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" stroke="white" strokeWidth="1" />
            </marker>
          </defs>
          {allConnections.map(({ from, to, type }, index) => {
            const fromPos = nodePositions[from];
            const toPos = nodePositions[to];

            if (!fromPos || !toPos) return null;
            
            const dx = toPos.x - fromPos.x;
            const dy = toPos.y - fromPos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const padding = 15;
            
            const endX = toPos.x - (padding / dist) * dx;
            const endY = toPos.y - (padding / dist) * dy;


            return (
              <g key={`line-group-${index}`}>
                 <circle cx={fromPos.x} cy={fromPos.y} r="4" fill="white" />
                 <line
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={endX}
                    y2={endY}
                    stroke={type === 'transition' ? 'hsl(var(--primary))' : 'hsl(var(--border))'}
                    strokeWidth="2"
                    strokeDasharray={type === 'prerequisite' ? "5,5" : "none"}
                    markerEnd={type === 'transition' ? "url(#arrowhead)" : "none"}
                 />
              </g>
            );
          })}
        </svg>

        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
          {transitionConnections.filter(c => c.type === 'transition' && c.transition).map(({ from, to, transition }, index) => {
            const fromPos = nodePositions[from];
            const toPos = nodePositions[to];

            if (!fromPos || !toPos || !transition) return null;
            
            const midX = (fromPos.x + toPos.x) / 2;
            const midY = (fromPos.y + toPos.y) / 2;
            
            let tooltipText = getDisplayNameForMap(transition, nameDisplay);
            const videoUrl = transition.url_video;
            const thumbnailUrl = videoUrl ? getYouTubeThumbnailUrl(videoUrl) : null;

            return (
              <Tooltip key={`tooltip-${index}`} delayDuration={100}>
                <TooltipTrigger asChild>
                   <div
                    className="absolute w-6 h-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer pointer-events-auto shadow-lg border-2 border-background"
                    style={{ 
                        left: `${midX - 12}px`, 
                        top: `${midY - 12}px`, 
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleSelectPoseForDialog(transition);
                    }}
                  >
                    <ArrowLeftRight className="h-4 w-4"/>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="p-2">
                  {thumbnailUrl && (
                      <div className="relative w-48 h-auto aspect-video rounded-md overflow-hidden mb-2">
                          <Image src={thumbnailUrl} alt={`Video de ${tooltipText}`} fill className="object-cover"/>
                      </div>
                  )}
                  <p className="font-bold">{tooltipText}</p>
                  <p className="text-sm text-muted-foreground">{getAcroLevelTitle(transition.nivel)}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
        </TooltipProvider>

        {interactionMode === 'route' && (
          <div className="flex items-center justify-end gap-4 p-4 border-b mb-4">
              <RouteExporter 
                  title="Ruta de Aprendizaje"
                  posesToExport={selectedRoutePoseIds}
                  allPoses={allPoses}
                  nameDisplay={nameDisplay}
                  exportMode="visual"
                  buttonText="Imprimir Ruta Visual"
                />
               <RouteExporter 
                  title="Análisis de Ruta"
                  posesToExport={selectedRoutePoseIds}
                  allPoses={allPoses}
                  nameDisplay={nameDisplay}
                  exportMode="detailed"
                  buttonText="Imprimir Contenido Detallado"
                />
          </div>
        )}
        {Object.keys(posesByLevel).length > 0 ? (
          <div 
            className={cn(
              "flex space-x-8 pb-4 transition-opacity",
              isAnyPoseHighlighted && "opacity-100"
          )}>
            {Object.entries(posesByLevel).map(([level, posesInLevel]) => (
              <div key={level} className="w-64 flex-shrink-0">
                <h3 className="text-lg font-semibold mb-4 text-center text-primary">{getAcroLevelTitle(Number(level))}</h3>
                <div className="space-y-3">
                   <Accordion 
                      type="multiple"
                      className="w-full space-y-3"
                      value={accordionValue}
                      onValueChange={setAccordionValue}
                    >
                     {posesInLevel.map((pose) => {
                        const isHighlighted = highlightedPoseIds.includes(pose.id);
                        return (
                        <div key={pose.id} ref={node => poseNodeRefs.current[pose.id] = node}>
                          <PoseNode
                            pose={pose}
                            displayName={getDisplayNameForMap(pose, nameDisplay)}
                            nameDisplay={nameDisplay}
                            onSelect={() => handleSelectPoseForDialog(pose)}
                            onMouseEnter={() => setHoveredPoseId(pose.id)}
                            onMouseLeave={() => setHoveredPoseId(null)}
                            onClick={() => handlePoseClick(pose.id)}
                            isDimmed={isAnyPoseHighlighted && !isHighlighted}
                            isHighlighted={isHighlighted}
                            isFixed={connectionState.poseId === pose.id}
                            isSelected={selectedRoutePoseIds.includes(pose.id)}
                            showCheckbox={interactionMode === 'route'}
                            onCheckedChange={(checked) => handleRouteChange(pose.id, checked)}
                            allPoses={allPoses}
                            concepts={concepts}
                            allPosesMap={allPosesById}
                            expandedView={expandedView}
                            onViewChange={setExpandedView}
                            accordionValue={accordionValue}
                            updatePositions={updateAllPositions}
                          />
                        </div>
                        )
                     })}
                   </Accordion>
                </div>
              </div>
            ))}
          </div>
        ) : (
           <div className="text-center text-muted-foreground py-10">
             {searchQueries.length > 0 || selectedTags.length > 0 || originFilter || destinationFilter 
              ? "No se encontraron posturas que coincidan con los filtros aplicados."
              : "Selecciona uno o más niveles de Acroyoga en el menú lateral para comenzar a explorar."
             }
           </div>
        )}
      </CardContent>
      <PoseDetailDialog
        pose={selectedPoseForDialog}
        allPoses={allPoses}
        open={!!selectedPoseForDialog}
        onOpenChange={(open) => !open && setSelectedPoseForDialog(null)}
        concepts={concepts}
        nameDisplay={nameDisplay}
      />
    </Card>
  );
}
