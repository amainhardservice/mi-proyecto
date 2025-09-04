
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
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HelpCircle, Rows3, Video, Image as ImageIcon } from 'lucide-react';


type NameDisplay = 'es' | 'en' | 'both';
type InteractionMode = 'explore' | 'route';
type ExpandedView = 'video' | 'image';

type PoseExplorerProps = {
  poses: Pose[];
  allPoses: Pose[];
  concepts: Concept[];
};

export default function PoseExplorer({ 
  poses,
  allPoses,
  concepts, 
}: PoseExplorerProps) {
  
  const [selectedPoseForDialog, setSelectedPoseForDialog] = useState<PoseWithImage | null>(null);
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('en');
  const [interactionMode, setInteractionMode] = useState<InteractionMode>('explore');
  
  const [hoveredPoseId, setHoveredPoseId] = useState<string | null>(null);
  const [fixedPoseId, setFixedPoseId] = useState<string | null>(null);
  const [selectedRoutePoseIds, setSelectedRoutePoseIds] = useState<string[]>([]);

  const [accordionValue, setAccordionValue] = useState<string[]>([]);
  const [initialDisplay, setInitialDisplay] = useState<ExpandedView | 'description'>('description');
  
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
        return enName.replace(/[()]/g, '');
      case 'es':
        return esName;
      case 'both':
      default:
        return pose.nombre;
    }
  };

  const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 2.5: return "Transiciones";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Intermedio";
        case 5: return "Nivel 5: Washing Machines";
        case 6: return "Nivel 6: Icarian Básico";
        case 7: return "Nivel 7: Icarian Intermedio";
        case 8: return "Nivel 8: Standing Básico";
        case 9: return "Nivel 9: Standing Intermedio";
        case 10: return "Nivel 10: Standing Avanzado";
        case 11: return "Posturas Terapéuticas";
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
  
  const handleExpandAll = (view: ExpandedView) => {
    setInitialDisplay(view);
    setAccordionValue(poses.map(p => p.id));
  };
  
  const handleCollapseAll = () => {
    setAccordionValue([]);
    setInitialDisplay('description');
  };

  return (
    <Card>
       <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle>Explorador de Posturas</CardTitle>
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
              <Button variant="outline" size="sm" onClick={() => handleExpandAll('video')}><Video className="mr-2 h-4 w-4" /> Expandir (Video)</Button>
              <Button variant="outline" size="sm" onClick={() => handleExpandAll('image')}><ImageIcon className="mr-2 h-4 w-4" /> Expandir (Imagen)</Button>
              <Button variant="outline" size="sm" onClick={handleCollapseAll}><Rows3 className="mr-2 h-4 w-4" /> Colapsar</Button>
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
          <div className="flex space-x-8 pb-4">
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
                     {posesInLevel.map((pose) => (
                        <PoseNode
                          key={pose.id}
                          pose={pose}
                          displayName={getDisplayName(pose, nameDisplay)}
                          nameDisplay={nameDisplay}
                          onSelect={() => handleSelectPoseForDialog(pose)}
                          onMouseEnter={() => setHoveredPoseId(pose.id)}
                          onMouseLeave={() => setHoveredPoseId(null)}
                          onClick={() => handlePoseClick(pose.id)}
                          isHighlighted={highlightedPoseIds.includes(pose.id)}
                          isFixed={fixedPoseId === pose.id}
                          isSelected={selectedRoutePoseIds.includes(pose.id)}
                          showCheckbox={interactionMode === 'route'}
                          onCheckedChange={(checked) => handleRouteChange(pose.id, checked)}
                          allPoses={allPoses}
                          concepts={concepts}
                          allPosesMap={allPosesById}
                          initialDisplay={initialDisplay}
                          accordionValue={accordionValue}
                          onAccordionChange={setAccordionValue}
                        />
                      ))}
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
      />
    </Card>
  );
}
