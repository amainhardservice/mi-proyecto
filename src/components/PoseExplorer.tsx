'use client';

import { useState, useMemo } from 'react';
import type { Pose, PoseWithImage, Concept } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PoseNode } from './PoseNode';
import { PoseDetailDialog } from './PoseDetailDialog';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
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

  type NameDisplay = 'en' | 'es' | 'both';
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('en');

  const posesById = useMemo(() => {
    return allPoses.reduce((acc, pose) => {
      acc[pose.id] = pose;
      return acc;
    }, {} as Record<string, Pose>);
  }, [allPoses]);

  const posesByLevel = useMemo(() => {
    return poses.reduce((acc, pose) => {
      const level = pose.nivel;
      if (!acc[level]) {
        acc[level] = [];
      }
      acc[level].push(pose);
      return acc;
    }, {} as Record<number, Pose[]>);
  }, [poses]);
  
  const levelKeys = Object.keys(posesByLevel).map(Number).sort((a, b) => a - b);
  const levelCount = levelKeys.length;
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


  return (
    <Card id={cardId}>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle>Árbol de Aprendizaje</CardTitle>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
           <div className="flex items-center space-x-2">
            <Label htmlFor="name-display-select" className="text-sm">Mostrar Nombres:</Label>
            <Select value={nameDisplay} onValueChange={(value: NameDisplay) => setNameDisplay(value)}>
              <SelectTrigger id="name-display-select" className="w-[180px] h-9 text-sm">
                <SelectValue placeholder="Seleccionar formato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">Solo en Inglés</SelectItem>
                <SelectItem value="es">Solo en Español</SelectItem>
                <SelectItem value="both">Ambos Idiomas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch 
              id="explore-mode" 
              checked={exploreMode}
              onCheckedChange={(checked) => handleModeChange('explore', checked)}
            />
            <Label htmlFor="explore-mode" className="text-sm">Modo Explorar</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="route-mode" 
              checked={routeMode}
              onCheckedChange={(checked) => handleModeChange('route', checked)}
            />
            <Label htmlFor="route-mode" className="text-sm">Modo Ruta</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="prereq-mode" 
              checked={prereqMode}
              onCheckedChange={(checked) => handleModeChange('prereq', checked)}
            />
            <Label htmlFor="prereq-mode" className="text-sm">Modo Prerrequisitos</Label>
          </div>
          
          {routeMode && pinnedPoseIds.length > 0 && (
            <RouteExporter 
              elementId={cardId} 
              title="Mi Ruta de Aprendizaje" 
              posesToExport={pinnedPoseIds}
              allPoses={allPoses}
              buttonText="Imprimir Ruta"
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
              buttonText="Imprimir Prerrequisitos"
              nameDisplay={nameDisplay}
            />
          )}

          {!routeMode && !prereqMode && (
            <ContentExporter 
              elementId={cardId}
              title="Árbol de Aprendizaje de Acroyoga"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        {poses.length > 0 ? (
          <div className={cn(
            "grid grid-cols-1 gap-x-8 gap-y-4",
            levelCount <= 2 && "md:grid-cols-2",
            levelCount === 3 && "md:grid-cols-3",
            levelCount === 4 && "md:grid-cols-4",
            levelCount === 5 && "md:grid-cols-5",
            levelCount >= 6 && "md:grid-cols-6",
          )}>
            {levelKeys.map(level => (
              <div key={level}>
                <h3 className="text-2xl font-bold text-center mb-6 text-primary border-b-2 border-primary/30 pb-2">
                  Nivel {level}
                </h3>
                <div className="relative flex flex-col items-center">
                   <div className="absolute top-0 left-1/2 w-0.5 h-full bg-border -z-10"></div>
                   
                   {posesByLevel[level].map((pose) => (
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
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(level => (
              <div key={level} className="space-y-4">
                <Skeleton className="h-8 w-1/2 mx-auto" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
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
