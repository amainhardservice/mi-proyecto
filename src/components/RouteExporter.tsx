
'use client';

import { useState, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import type { Pose } from '@/types';
import { toast } from '@/hooks/use-toast';
import { exportRouteToPdf, exportVisualTreeToPdf } from '@/lib/pdf';

type NameDisplay = 'es' | 'en' | 'both';

interface RouteExporterProps {
  title: string;
  posesToExport: string[];
  allPoses: Pose[];
  nameDisplay: NameDisplay;
  exportMode: 'visual' | 'detailed';
  buttonText: string;
}

const RouteExporter: React.FC<RouteExporterProps> = ({ 
    title, 
    posesToExport,
    allPoses,
    nameDisplay,
    exportMode,
    buttonText
}) => {
  const [isExporting, setIsExporting] = useState(false);

  const allPosesById = useMemo(() => allPoses.reduce((acc, pose) => {
      acc[pose.id] = pose;
      return acc;
  }, {} as Record<string, Pose>), [allPoses]);

  const getAllPrerequisites = useCallback((poseId: string): string[] => {
    const memo = new Map<string, string[]>();
    const calculatePrereqs = (id: string): string[] => {
        if (memo.has(id)) return memo.get(id)!;
        
        const pose = allPosesById[id];
        if (!pose || !pose.prerequisites || pose.prerequisites.length === 0) return [];
        
        const prereqs = new Set<string>(pose.prerequisites);
        pose.prerequisites.forEach(pId => {
            if (allPosesById[pId]) {
                calculatePrereqs(pId).forEach(subP => prereqs.add(subP));
            }
        });
        
        const result = Array.from(prereqs);
        memo.set(id, result);
        return result;
    };
    return calculatePrereqs(poseId);
  }, [allPosesById]);


  const handleExport = async () => {
    if (posesToExport.length === 0) {
      toast({ title: 'Selección Vacía', description: 'Por favor, selecciona al menos una postura para exportar.', variant: 'destructive' });
      return;
    }
    setIsExporting(true);
    
    try {
      if (exportMode === 'visual') {
        const allPrereqs = new Set(posesToExport);
        posesToExport.forEach(id => {
            getAllPrerequisites(id).forEach(pId => allPrereqs.add(pId));
        });
        const posesForTree = Array.from(allPrereqs).map(id => allPosesById[id]).filter(Boolean);
        await exportVisualTreeToPdf(posesForTree, nameDisplay, title);
      } else if (exportMode === 'detailed') {
        const selectedPoses = posesToExport.map(id => allPosesById[id]).filter(Boolean);
        await exportRouteToPdf(selectedPoses, title, nameDisplay);
      }
    } catch (error) {
        console.error("Error exporting PDF:", error);
        toast({ title: 'Error de Exportación', description: 'Hubo un problema al generar el PDF. Por favor, inténtalo de nuevo.', variant: 'destructive' });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button 
      variant="default" 
      size="sm" 
      onClick={handleExport} 
      disabled={isExporting || posesToExport.length === 0}
      aria-label="Export to PDF"
      className="bg-accent text-accent-foreground hover:bg-accent/90"
    >
      {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
      {buttonText}
    </Button>
  );
};

export default RouteExporter;
