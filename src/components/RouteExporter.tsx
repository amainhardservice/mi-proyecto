'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import type { Pose } from '@/types';
import { exportRouteToPdf, exportVisualTreeToPdf } from '@/lib/pdf';
import { useAppContext } from '@/contexts/AppContext';

interface RouteExporterProps {
  title: string;
  posesToExport: string[];
  allPoses: Pose[];
  nameDisplay: 'es' | 'en' | 'both';
  exportMode: 'visual' | 'detailed';
  buttonText: string;
}

const RouteExporter: React.FC<RouteExporterProps> = ({ 
    title, 
    posesToExport, 
    allPoses,
    nameDisplay,
    exportMode,
    buttonText,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const { setSequence, setActiveView } = useAppContext();

  const handleExport = async () => {
    if (posesToExport.length === 0) {
      toast({ title: 'Ruta Vacía', description: 'Por favor, selecciona al menos una postura para exportar.', variant: 'destructive' });
      return;
    }
    
    setIsExporting(true);
    const poses = posesToExport.map(id => allPoses.find(p => p.id === id)).filter((p): p is Pose => !!p);
    
    try {
        if (exportMode === 'visual') {
            await exportVisualTreeToPdf(poses, nameDisplay, title);
        } else {
            await exportRouteToPdf(poses, title, nameDisplay);
        }
    } catch(error) {
        console.error("PDF Export Error:", error);
        toast({ title: 'Error de Exportación', description: 'Hubo un problema al generar el PDF.', variant: 'destructive' });
    } finally {
        setIsExporting(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleExport} 
      disabled={isExporting || posesToExport.length === 0}
      aria-label={buttonText}
    >
      {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
      {buttonText}
    </Button>
  );
};

export default RouteExporter;
