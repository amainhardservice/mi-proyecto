'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import type { Pose, PoseWithImage, Concept } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PoseNode } from './PoseNode';
import { PoseDetailDialog } from './PoseDetailDialog';
import { Label } from '@/components/ui/label';
import RouteExporter from './RouteExporter';
import { Accordion } from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HelpCircle, Video, Image as ImageIcon, Text, Move, ArrowLeftRight, Filter, Volume2, FilePlus, LogIn, LogOut, ListTree } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn, getYouTubeThumbnailUrl } from '@/lib/utils';
import Image from 'next/image';
import LevelFilter, { type SearchQuery } from './LevelFilter';
import { useAppContext } from '@/contexts/AppContext';
import { Switch } from './ui/switch';
import { playSoundForPose } from '@/lib/sounds';
import { toast } from '@/hooks/use-toast';
import RouteActions from './RouteActions';


type InteractionMode = 'explore' | 'route';
type ExpandedView = 'video' | 'image' | 'description';
type ConnectionMode = 'off' | 'incoming' | 'outgoing' | 'prerequisites';

type Connection = {
  from: string;
  to: string;
  type: 'prerequisite' | 'transition' | 'route';
  transition?: Pose;
};

type LevelMapProps = {
  poses: Pose[];
  allPoses: Pose[];
  concepts: Concept[];
};

const getDisplayName = (pose: Pose, displayMode: 'es' | 'en' | 'both'): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1]?.replace(/[()]/g, '') || '';

    switch (displayMode) {
      case 'en':
        return enName || esName;
      case 'es':
      default:
        return esName;
    }
};

const getPoseFullName = (pose: Pose): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0] || '';
    const enName = parts[1]?.replace(/[()]/g, '') || '';
    return `${esName} ${enName}`.toLowerCase();
}


export default function LevelMap({ 
  poses,
  allPoses,
  concepts,
}: LevelMapProps) {
  
  const [selectedPoseForDialog, setSelectedPoseForDialog] = useState<PoseWithImage | null>(null);
  const [interactionMode, setInteractionMode] = useState<InteractionMode>('explore');
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const poseNodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { nameDisplay, soundsEnabled, setSoundsEnabled, soundEffectsVolume, setActiveView, setFlowBuilderSequence } = useAppContext();
  
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
    if (interactionMode !== 'explore' || !connectionState.poseId || (connectionState.mode !== 'incoming' && connectionState.mode !== 'outgoing')) return [];
    
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
     if (interactionMode !== 'explore' || !connectionState.poseId || connectionState.mode !== 'prerequisites') {
        // Also show prereqs on hover, but only if no pose is fixed
        if(interactionMode !== 'explore' || !hoveredPoseId || connectionState.poseId) return [];
        const pose = allPosesById[hoveredPoseId];
        if (!pose) return [];
        return (pose.prerequisites || [])
          .map(id => ({ from: id, to: hoveredPoseId, type: 'prerequisite' }));
     }
    
    const pose = allPosesById[connectionState.poseId];
    if (!pose) return [];
    return (pose.prerequisites || [])
      .map(id => ({ from: id, to: connectionState.poseId!, type: 'prerequisite' }));

  }, [hoveredPoseId, allPosesById, interactionMode, connectionState]);
  
  const routeConnections = useMemo((): Connection[] => {
    if (interactionMode !== 'route' || selectedRoutePoseIds.length < 2) return [];
    const connections: Connection[] = [];
    for (let i = 0; i < selectedRoutePoseIds.length - 1; i++) {
        const from = selectedRoutePoseIds[i];
        const to = selectedRoutePoseIds[i + 1];

        // Handle self-loops
        if (from === to) {
           connections.push({ from, to, type: 'route' });
           continue;
        }

        connections.push({
            from: selectedRoutePoseIds[i],
            to: selectedRoutePoseIds[i + 1],
            type: 'route',
        });
    }
    return connections;
  }, [interactionMode, selectedRoutePoseIds]);
  

  const highlightedPoseIds = useMemo(() => {
    if (interactionMode === 'route') {
      const allHighlighted = new Set<string>();
      selectedRoutePoseIds.forEach(id => {
        allHighlighted.add(id);
      });
      return Array.from(allHighlighted);
    }
  
    if (interactionMode === 'explore') {
      if (connectionState.mode !== 'off' && connectionState.poseId) {
        if (connectionState.mode === 'prerequisites') {
            return [connectionState.poseId, ...prerequisiteConnections.map(c => c.from)];
        }
        const connectedIds = transitionConnections.flatMap(c => [c.from, c.to]);
        return [connectionState.poseId, ...connectedIds];
      }
      if (hoveredPoseId && !connectionState.poseId) {
        return [hoveredPoseId, ...prerequisiteConnections.map(c => c.from)];
      }
    }
    return [];
  }, [interactionMode, selectedRoutePoseIds, transitionConnections, prerequisiteConnections, connectionState, hoveredPoseId]);


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
  
  const getDisplayNameForMap = (pose: Pose, displayMode: 'es' | 'en' | 'both'): string => {
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
        case 6: return "Nivel 6: Transiciones Intermedias";
        case 7: return "Nivel 7: Flow 2 – Intermedio";
        case 8: return "Nivel 8: Washing Machines";
        case 10: return "Nivel 10: Icarian Básico";
        case 11: return "Nivel 11: Icarian Intermedio";
        case 12: return "Nivel 12: Whips Básicos";
        case 13: return "Nivel 13: Whips Intermedios";
        case 14: return "Nivel 14: Whips Avanzados";
        case 15: return "Nivel 15: Standing Básico";
        case 16: return "Nivel 16: Standing Intermedio";
        case 17: return "Nivel 17: Standing Avanzado";
        default: return `Nivel ${level}`;
    }
  }

  const setConnectionMode = (pose: Pose, mode: ConnectionMode) => {
    const poseHasMedia = (pId: string) => {
      const poseData = allPosesById[pId];
      return poseData && (poseData.url_imagen || poseData.gallery_images?.length || poseData.url_video || poseData.gallery_videos?.length);
    };

    let newAccordionValue: string[] = [];
    if (mode !== 'off') {
        if (mode === 'outgoing') {
            const outgoingConnections = transitions
                .filter(t => t.originPoses?.includes(pose.id))
                .flatMap(t => t.destinationPoses || []);
            newAccordionValue = [pose.id, ...outgoingConnections].filter(poseHasMedia);
        } else if (mode === 'incoming') {
            const incomingConnections = transitions
                .filter(t => t.destinationPoses?.includes(pose.id))
                .flatMap(t => t.originPoses || []);
            newAccordionValue = [pose.id, ...incomingConnections].filter(poseHasMedia);
        } else if (mode === 'prerequisites') {
            const prereqConnections = (allPosesById[pose.id]?.prerequisites || []).filter(poseHasMedia);
            newAccordionValue = [pose.id, ...prereqConnections];
        }
    }
    
    setAccordionValue(newAccordionValue);
    setConnectionState(mode === 'off' ? { poseId: null, mode: 'off' } : { poseId: pose.id, mode });
  };

  const handlePoseClick = (pose: Pose) => {
    if (interactionMode === 'route') {
      if (soundsEnabled) playSoundForPose(pose, soundEffectsVolume);
      setSelectedRoutePoseIds(prev => [...prev, pose.id]);
      return;
    }

    if (soundsEnabled) playSoundForPose(pose, soundEffectsVolume);
    setExpandedView('image');

    const currentState = connectionState;
    let newMode: ConnectionMode;

    if (currentState.poseId !== pose.id || currentState.mode === 'off') {
      newMode = 'outgoing';
    } else if (currentState.mode === 'outgoing') {
      newMode = 'incoming';
    } else if (currentState.mode === 'incoming') {
      newMode = 'prerequisites';
    } else { // if mode is 'prerequisites'
      newMode = 'off';
    }

    setConnectionMode(pose, newMode);
  };
  
  const handleRouteChange = (poseId: string, checked: boolean) => {
    if (checked) {
      setSelectedRoutePoseIds(prev => [...prev, poseId]);
    } else {
      setSelectedRoutePoseIds(prev => {
        const newIds = [...prev];
        const lastIndex = newIds.lastIndexOf(poseId);
        if (lastIndex !== -1) {
          newIds.splice(lastIndex, 1);
        }
        return newIds;
      });
    }
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
  const allConnections = [...transitionConnections, ...prerequisiteConnections, ...routeConnections];

  const handleAddToBuilder = () => {
    if (selectedRoutePoseIds.length === 0) {
      toast({ title: 'Ruta Vacía', description: 'Por favor, selecciona al menos una postura para añadir.', variant: 'destructive' });
      return;
    }
    setFlowBuilderSequence(selectedRoutePoseIds);
    setActiveView({ type: 'flow-builder' });
    toast({ title: 'Ruta Añadida', description: `${selectedRoutePoseIds.length} posturas han sido añadidas al constructor de secuencias.` });
  };
  
  const handleClearRoute = () => {
    setSelectedRoutePoseIds([]);
  }

  return (
    <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-lg">
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
                  <li>- 1er Clic: Transiciones de Salida.</li>
                  <li>- 2º Clic: Transiciones de Llegada.</li>
                  <li>- 3er Clic: Prerrequisitos.</li>
                  <li>- 4º Clic: Limpiar selección.</li>
                  <li>- Hover: Muestra prerrequisitos si no hay nada fijado.</li>
                  <li>- Iconos en imagen: Acceso directo a cada vista.</li>
                  <li><strong className="text-primary">Ruta:</strong> Usa los checkboxes para crear una secuencia.</li>
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
                <div className="flex items-center space-x-2 pl-2 border-l">
                    <Label htmlFor="sound-switch" className="flex items-center gap-1 text-sm"><Volume2 className="h-4 w-4" /></Label>
                    <Switch id="sound-switch" checked={soundsEnabled} onCheckedChange={setSoundsEnabled} />
                </div>
              </TooltipProvider>
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
        />
      )}


      <CardContent className="relative overflow-x-auto" ref={containerRef}>
        <TooltipProvider>
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" style={{ overflow: 'visible' }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" stroke="white" strokeWidth="1" />
            </marker>
             <marker id="arrowhead-route" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--accent))" stroke="white" strokeWidth="1" />
            </marker>
          </defs>
          {allConnections.map(({ from, to, type }, index) => {
            const fromPos = nodePositions[from];
            const toPos = nodePositions[to];

            if (!fromPos || !toPos) return null;
            
            // Handle self-loops for route mode
            if (from === to && type === 'route') {
              const cx = fromPos.x;
              const cy = fromPos.y - 40; // Adjust position of the loop
              const r = 15; // Radius of the loop
              return (
                <circle
                  key={`loop-${index}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead-route)"
                />
              )
            }
            
            const dx = toPos.x - fromPos.x;
            const dy = toPos.y - fromPos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const padding = 15;
            
            const endX = toPos.x - (padding / dist) * dx;
            const endY = toPos.y - (padding / dist) * dy;
            
            const strokeColor = type === 'route' ? 'hsl(var(--accent))' : type === 'transition' ? 'hsl(var(--primary))' : 'hsl(var(--border))';
            const markerEnd = type === 'route' ? "url(#arrowhead-route)" : type === 'transition' ? "url(#arrowhead)" : "none";


            return (
              <g key={`line-group-${index}`}>
                 {type !== 'route' && <circle cx={fromPos.x} cy={fromPos.y} r="4" fill="white" />}
                 <line
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={endX}
                    y2={endY}
                    stroke={strokeColor}
                    strokeWidth="2"
                    strokeDasharray={type === 'prerequisite' ? "5,5" : "none"}
                    markerEnd={markerEnd}
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
                 <RouteActions 
                  title="Acciones de Ruta"
                  poseIds={selectedRoutePoseIds}
                  allPoses={allPoses}
                  onClear={handleClearRoute}
                  onSubmit={handleAddToBuilder}
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
                        const selectionCount = selectedRoutePoseIds.filter(id => id === pose.id).length;
                        return (
                        <div key={pose.id} ref={node => poseNodeRefs.current[pose.id] = node}>
                          <PoseNode
                            pose={pose}
                            displayName={getDisplayNameForMap(pose, nameDisplay)}
                            onSelect={() => handleSelectPoseForDialog(pose)}
                            onMouseEnter={() => setHoveredPoseId(pose.id)}
                            onMouseLeave={() => setHoveredPoseId(null)}
                            onClick={() => handlePoseClick(pose)}
                            isDimmed={isAnyPoseHighlighted && !isHighlighted}
                            isHighlighted={isHighlighted}
                            isFixed={connectionState.poseId === pose.id}
                            isSelected={selectionCount > 0}
                            selectionCount={selectionCount}
                            showCheckbox={interactionMode === 'route'}
                            onCheckedChange={(checked) => handleRouteChange(pose.id, checked)}
                            allPoses={allPoses}
                            concepts={concepts}
                            allPosesMap={allPosesById}
                            expandedView={expandedView}
                            onViewChange={setExpandedView}
                            accordionValue={accordionValue}
                            updatePositions={updateAllPositions}
                            onSetOutgoing={() => setConnectionMode(pose, 'outgoing')}
                            onSetIncoming={() => setConnectionMode(pose, 'incoming')}
                            onSetPrerequisites={() => setConnectionMode(pose, 'prerequisites')}
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
      />
    </div>
  );
}
