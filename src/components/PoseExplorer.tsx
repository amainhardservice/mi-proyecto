'use client';

import { useState, useMemo } from 'react';
import type { Pose, PoseWithImage, Concept } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PoseNode } from './PoseNode';
import { PoseDetailDialog } from './PoseDetailDialog';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import ContentExporter from './ContentExporter';
import RouteExporter from './RouteExporter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type PoseExplorerProps = {
  poses: Pose[];
  allPoses: Pose[];
  concepts: Concept[];
  highlightedPoseIds?: string[]; // Prop to control highlighting from outside
};

export default function PoseExplorer({ 
  poses,
  allPoses,
  concepts, 
  highlightedPoseIds: externalHighlightedPoseIds,
}: PoseExplorerProps) {
  
  const [selectedPose, setSelectedPose] = useState<PoseWithImage | null>(null);
  const [hoveredPoseId, setHoveredPoseId] = useState<string | null>(null);
  const [pinnedPoseIds, setPinnedPoseIds] = useState<string[]>([]);
  
  const [exploreMode, setExploreMode] = useState(true);
  const [routeMode, setRouteMode] = useState(false);
  const [prereqMode, setPrereqMode] = useState(false);

  type NameDisplay = 'es' | 'en' | 'both';
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('en');

  const posesById = useMemo(() => {
    return allPoses.reduce((acc, pose) => {
      acc[pose.id] = pose;
      return acc;
    }, {} as Record<string, Pose>);
  }, [allPoses]);

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
  
  const cardId = useMemo(() => `learning-tree-card-${Math.random().toString(36).substring(2, 9)}`, []);


  const handleSelectPoseForDialog = (pose: Pose) => {
    setSelectedPose(pose as PoseWithImage);
  };

  const handleNodeClick = (pose: Pose) => {
    if (routeMode || prereqMode) {
       setPinnedPoseIds(prev => 
        prev.includes(pose.id) 
          ? prev.filter(id => id !== pose.id) 
          : [...prev, pose.id]
      );
    } else if (exploreMode) {
      handleSelectPoseForDialog(pose);
    } else {
      // Single pin mode
      setPinnedPoseIds(prev => (prev.length === 1 && prev[0] === pose.id) ? [] : [pose.id]);
    }
  };
  
  const getAllPrerequisites = (poseId: string, allPosesMap: Record<string, Pose>): string[] => {
    const pose = allPosesMap[poseId];
    if (!pose || !pose.prerequisites || pose.prerequisites.length === 0) {
      return [];
    }
    
    const prereqs = new Set<string>(pose.prerequisites);
    pose.prerequisites.forEach(pId => {
      getAllPrerequisites(pId, allPosesMap).forEach(subP => prereqs.add(subP));
    });
    
    return Array.from(prereqs);
  };

  const highlightedPoseIds = useMemo(() => {
    if (externalHighlightedPoseIds) {
      return externalHighlightedPoseIds;
    }
    if (exploreMode) {
      if (hoveredPoseId) {
        return [hoveredPoseId, ...getAllPrerequisites(hoveredPoseId, posesById)];
      }
      return [];
    }
    
    if (prereqMode && pinnedPoseIds.length > 0) {
      const lastPinnedId = pinnedPoseIds[pinnedPoseIds.length - 1];
      return [lastPinnedId, ...getAllPrerequisites(lastPinnedId, posesById)];
    }
    
    if (!exploreMode && !routeMode && !prereqMode && pinnedPoseIds.length === 1) {
       return [pinnedPoseIds[0], ...getAllPrerequisites(pinnedPoseIds[0], posesById)];
    }

    return [];
  }, [externalHighlightedPoseIds, exploreMode, prereqMode, routeMode, hoveredPoseId, pinnedPoseIds, posesById]);


  const handleModeChange = (mode: 'explore' | 'route' | 'prereq', checked: boolean) => {
    setPinnedPoseIds([]);
    setHoveredPoseId(null);

    if (mode === 'explore') {
        setExploreMode(checked);
        if (checked) {
            setRouteMode(false);
            setPrereqMode(false);
        }
    }
    if (mode === 'route') {
        setRouteMode(checked);
        if (checked) {
            setExploreMode(false);
            setPrereqMode(false);
        } else if (!prereqMode) {
            setExploreMode(true);
        }
    }
    if (mode === 'prereq') {
        setPrereqMode(checked);
        if (checked) {
            setExploreMode(false);
            setRouteMode(false);
        } else if (!routeMode) {
            setExploreMode(true);
        }
    }
  }

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

  return (
    <Card id={cardId}>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle>Explorador de Posturas</CardTitle>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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

          <div className="flex items-center space-x-2">
            <Switch 
              id="explore-mode" 
              checked={exploreMode}
              onCheckedChange={(checked) => handleModeChange('explore', checked)}
            />
            <Label htmlFor="explore-mode" className="text-sm font-medium">Modo Explorar</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="route-mode" 
              checked={routeMode}
              onCheckedChange={(checked) => handleModeChange('route', checked)}
            />
            <Label htmlFor="route-mode" className="text-sm font-medium">Modo Ruta</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="prereq-mode" 
              checked={prereqMode}
              onCheckedChange={(checked) => handleModeChange('prereq', checked)}
            />
            <Label htmlFor="prereq-mode" className="text-sm font-medium">Modo Prerreq.</Label>
          </div>
          
          {routeMode && pinnedPoseIds.length > 0 && (
            <RouteExporter 
              elementId={cardId} 
              title="Mi Ruta de Aprendizaje" 
              posesToExport={pinnedPoseIds}
              allPoses={allPoses}
              buttonText="Exportar Ruta"
              nameDisplay={nameDisplay}
            />
          )}

          {prereqMode && pinnedPoseIds.length > 0 && (
             <RouteExporter 
              elementId={cardId} 
              title="Análisis de Prerrequisitos" 
              posesToExport={pinnedPoseIds}
              allPoses={allPoses}
              separateTrees={true}
              buttonText="Exportar Prerreq."
              nameDisplay={nameDisplay}
            />
          )}

          {!routeMode && !prereqMode && (
            <ContentExporter 
              elementId={cardId}
              title="Mapa de Posturas"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        {poses.length > 0 ? (
          <div className="flex space-x-8 pb-4">
            {Object.entries(posesByLevel).map(([level, posesInLevel]) => (
              <div key={level} className="w-64 flex-shrink-0">
                <h3 className="text-lg font-semibold mb-4 text-center text-primary">{getAcroLevelTitle(Number(level))}</h3>
                <div className="space-y-3">
                   {posesInLevel.map((pose) => (
                      <PoseNode
                        key={pose.id}
                        pose={pose}
                        displayName={getDisplayName(pose, nameDisplay)}
                        onClick={() => handleNodeClick(pose)}
                        onDoubleClick={() => handleSelectPoseForDialog(pose)}
                        isHighlighted={highlightedPoseIds.includes(pose.id)}
                        isSelected={pinnedPoseIds.includes(pose.id)}
                        onMouseEnter={() => exploreMode && setHoveredPoseId(pose.id)}
                        onMouseLeave={() => exploreMode && setHoveredPoseId(null)}
                      />
                    ))}
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
        pose={selectedPose}
        allPoses={allPoses}
        open={!!selectedPose}
        onOpenChange={(open) => !open && setSelectedPose(null)}
        concepts={concepts}
      />
    </Card>
  );
}
