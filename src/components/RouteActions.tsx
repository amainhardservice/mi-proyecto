'use client';

import { Button } from '@/components/ui/button';
import { FileDown, Loader2, FilePlus, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import type { Pose } from '@/types';
import { exportRouteToPdf, exportVisualTreeToPdf } from '@/lib/pdf';
import { useAppContext } from '@/contexts/AppContext';

interface RouteActionsProps {
  title: string;
  poseIds: string[];
  allPoses: Pose[];
  onClear: () => void;
  onSubmit: () => void;
}

const RouteActions: React.FC<RouteActionsProps> = ({ 
    title, 
    poseIds,
    allPoses,
    onClear,
    onSubmit,
}) => {

  const handleAddToBuilder = () => {
    if (poseIds.length === 0) {
      toast({ title: 'Ruta Vacía', description: 'Por favor, selecciona al menos una postura para añadir.', variant: 'destructive' });
      return;
    }
    onSubmit();
    toast({ title: 'Ruta Añadida', description: `${poseIds.length} posturas han sido añadidas al constructor de secuencias.` });
  };

  return (
    <div className="flex items-center gap-2">
       <Button 
          variant="outline" 
          size="sm" 
          onClick={onClear} 
          disabled={poseIds.length === 0}
          aria-label="Limpiar Ruta"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Limpiar ({poseIds.length})
      </Button>
      <Button 
        variant="default" 
        size="sm" 
        onClick={handleAddToBuilder} 
        disabled={poseIds.length === 0}
        aria-label="Añadir al Constructor de Secuencias"
        className="bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <FilePlus className="mr-2 h-4 w-4" />
        Añadir al Constructor
      </Button>
    </div>
  );
};

export default RouteActions;
