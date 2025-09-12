'use client';

import { useState, useMemo, useCallback } from 'react';
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
import { HelpCircle, Video, Image as ImageIcon, Text, ChevronsDownUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';


type NameDisplay = 'es' | 'en' | 'both';
type InteractionMode = 'explore' | 'route';
type ExpandedView = 'video' | 'image' | 'description';

type LevelMapProps = {
  poses: Pose[];
  allPoses: Pose[];
  concepts: Concept[];
  nameDisplay: NameDisplay;
  setNameDisplay: (value: NameDisplay) => void;
};

export default function LevelMap({ 
  poses,
  allPoses,
  concepts, 
  nameDisplay,
  setNameDisplay
}: LevelMapProps) {
  
  const [selectedPoseForDialog, setSelectedPoseForDialog] = useState<PoseWithImage | null>(null);
  const [interactionMode, setInteractionMode] = useState<InteractionMode>('explore');
  
  const [hoveredPoseId, setHoveredPoseId] = useState<string | null>(null);
  const [fixedPoseId, setFixedPoseId] = useState<string | null>(null);
  const [selectedRoutePoseIds, setSelectedRoutePoseIds] = useState<string[]>([]);

  const [accordionValue, setAccordionValue] = useState<string[]>([]);
  const [expandedView, setExpandedView] = useState<ExpandedView>('description');
  
  const allPosesById = useMemo(() => {
    return allPoses.reduce((acc, pose) => {
      acc[pose.id] = pose;
      return acc;
    }, {} as Record<string, Pose>);
  }, [allPoses]);

  const getAllPrerequisites = useCallback((poseId: string, allPosesMap: Record<string, Pose>): string[] => {
    const pose = allPosesMap[poseId];
    if (!pose || !pose.prerequisites || pose.prerequisites.length === 0) {
      return [];
    }
    const prereqs = new Set<string>(pose.prerequisites);
    pose.prerequisites.forEach(pId => {
      if (allPosesMap[pId]) { // Check if prerequisite exists
          getAllPrerequisites(pId, allPosesMap).forEach(subP => prereqs.add(subP));
      }
    });
    return Array.from(prereqs);
  }, []);
  
  const activeHighlightId = fixedPoseId || hoveredPoseId;

  const highlightedPoseIds = useMemo(() => {
    if (interactionMode === 'route') {
      const allHighlighted = new Set<string>();
       selectedRoutePoseIds.forEach(id => {
         allHighlighted.add(id);
         getAllPrerequisites(id, allPosesById).forEach(pId => allHighlighted.add(pId));
       });
       return Array.from(allHighlighted);
    }
    if (activeHighlightId) {
      return [activeHighlightId, ...getAllPrerequisites(activeHighlightId, allPosesById)];
    }
    return [];
  }, [interactionMode, activeHighlightId, selectedRoutePoseIds, getAllPrerequisites, allPosesById]);


  const posesByLevel = useMemo(() => {
    const grouped = poses.reduce((acc, pose) => {
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
  }, [poses]);
  
  const handleSelectPoseForDialog = (pose: Pose) => {
    setSelectedPoseForDialog(pose as PoseWithImage);
  };
  
  const getDisplayName = (pose: Pose, displayMode: NameDisplay): string => {
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1] || '';

    switch (displayMode) {
      case 'en':
        return enName.replace(/[()]/g, '') || esName;
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
    if (interactionMode === 'explore') {
      setFixedPoseId(prevId => prevId === poseId ? null : poseId);
    }
  };
  
  const handleRouteChange = (poseId: string, checked: boolean) => {
    setSelectedRoutePoseIds(prev => 
      checked ? [...prev, poseId] : prev.filter(id => id !== poseId)
    );
  };
  
  const handleToggleView = (view: ExpandedView) => {
    const isAlreadyActive = accordionValue.length > 0 && expandedView === view;

    if (isAlreadyActive) {
      setAccordionValue([]);
    } else {
      setExpandedView(view);
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


  return (
    <Card>
       <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle>Mapa de Niveles</CardTitle>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroup 
              value={interactionMode} 
              onValueChange={(value) => {
                setInteractionMode(value as InteractionMode);
                setFixedPoseId(null);
                setHoveredPoseId(null);
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
                  <li><strong className="text-primary">Explorar:</strong> Pasa el ratón sobre una postura para ver sus prerrequisitos. Haz clic para fijar la selección.</li>
                  <li><strong className="text-primary">Ruta:</strong> Selecciona varias posturas para crear y exportar una ruta de aprendizaje personalizada.</li>
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
      <CardContent className="overflow-x-auto">
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
        {poses.length > 0 ? (
          <div className={cn(
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
                        <PoseNode
                          key={pose.id}
                          pose={pose}
                          displayName={getDisplayName(pose, nameDisplay)}
                          nameDisplay={nameDisplay}
                          onSelect={() => handleSelectPoseForDialog(pose)}
                          onMouseEnter={() => setHoveredPoseId(pose.id)}
                          onMouseLeave={() => setHoveredPoseId(null)}
                          onClick={() => handlePoseClick(pose.id)}
                          isDimmed={isAnyPoseHighlighted && !isHighlighted}
                          isHighlighted={isHighlighted}
                          isFixed={fixedPoseId === pose.id}
                          isSelected={selectedRoutePoseIds.includes(pose.id)}
                          showCheckbox={interactionMode === 'route'}
                          onCheckedChange={(checked) => handleRouteChange(pose.id, checked)}
                          allPoses={allPoses}
                          concepts={concepts}
                          allPosesMap={allPosesById}
                          initialDisplay={expandedView}
                          accordionValue={accordionValue}
                          onAccordionChange={setAccordionValue}
                        />
                        )
                     })}
                   </Accordion>
                </div>
              </div>
            ))}
          </div>
        ) : (
           <div className="text-center text-muted-foreground py-10">
             Selecciona uno o más niveles de Acroyoga en el menú lateral para comenzar a explorar.
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