

'use client';

import { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { Pose, Concept, Asana, PoseModifier, SequenceItem, Exercise } from '@/types';
import FlowBuilderPalette from '@/components/FlowBuilderPalette';
import FlowBuilderCanvas from '@/components/FlowBuilderCanvas';
import FlowBuilderDetail from '@/components/FlowBuilderDetail';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@/components/ui/menubar';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { allPosesData, allConceptsData, allAsanasData, allModifiersData, allExercisesData } from '@/lib/firestore-client';
import { exportSequenceToPdf } from '@/lib/pdf';

type NameDisplay = 'es' | 'en' | 'both';

interface FlowBuilderProps {
  allPoses: Pose[];
  allConcepts: Concept[];
  allModifiers: PoseModifier[];
  allAsanas: Asana[];
  allExercises: Exercise[];
}

export default function FlowBuilder({
  allPoses,
  allConcepts,
  allModifiers,
  allAsanas,
  allExercises,
}: FlowBuilderProps) {
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('en');
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);
  const [importText, setImportText] = useState('');
  
  const selectedItem = sequence.find(item => item.uniqueId === selectedItemId) || null;

  const handleDrop = useCallback((item: { id: string; type: string }) => {
    let newItem: SequenceItem | null = null;
    const uniqueId = `${item.type}-${item.id}-${Date.now()}`;
    const itemType = item.type as SequenceItem['itemType'];

    let foundItem: any = null;
    if (['pose', 'transition', 'flow', 'whip', 'icarian'].includes(item.type)) {
      foundItem = allPosesData.find(p => p.id === item.id);
    } else if (item.type === 'concept') {
      foundItem = allConceptsData.find(c => c.id === item.id);
    } else if (item.type === 'asana') {
      foundItem = allAsanasData.find(a => a.id === item.id);
    } else if (item.type === 'modifier') {
      foundItem = allModifiersData.find(m => m.id === item.id);
    } else if (item.type === 'exercise') {
      foundItem = allExercisesData.find(e => e.id === item.id);
    }
    
    if (foundItem) {
      newItem = { ...foundItem, uniqueId, itemType, notes: '' };
      setSequence(prev => [...prev, newItem!]);
      setSelectedItemId(uniqueId);
    }
  }, []);

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setSequence(prev => {
      const newSequence = [...prev];
      const [draggedItem] = newSequence.splice(dragIndex, 1);
      newSequence.splice(hoverIndex, 0, draggedItem);
      return newSequence;
    });
  }, []);

  const handleSelectItem = (uniqueId: string) => {
    setSelectedItemId(uniqueId);
  };
  
  const updateNotes = (uniqueId: string, notes: string) => {
    setSequence(seq => seq.map(item => item.uniqueId === uniqueId ? { ...item, notes } : item));
  };
  
  const handleExportPdf = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "Añade al menos un elemento para exportar.", variant: "destructive" });
      return;
    }
    exportSequenceToPdf(sequence, "Mi Secuencia de Acroyoga");
  };

  const handleClearSequence = () => {
    setSequence([]);
    setSelectedItemId(null);
    toast({ title: "Secuencia Limpiada", description: "Se ha vaciado el constructor de secuencias." });
  };

  const handleDeleteItem = (uniqueId: string) => {
    setSequence(prev => prev.filter(item => item.uniqueId !== uniqueId));
    if (selectedItemId === uniqueId) {
      setSelectedItemId(null);
    }
    toast({ title: "Elemento Eliminado", description: "El elemento ha sido eliminado de la secuencia." });
  };
  
  const getEnglishName = (item: SequenceItem) => {
    if (['pose', 'transition', 'flow', 'whip', 'icarian'].includes(item.itemType)) {
        return item.nombre.split('\n')[1]?.replace(/[()]/g, '') || item.nombre.split('\n')[0];
    }
    if (item.itemType === 'asana') {
        return item.nombre_sans;
    }
    if (item.itemType === 'exercise') {
        return item.titulo.split('\n')[1]?.replace(/[()]/g, '') || item.titulo.split('\n')[0];
    }
    return item.titulo;
  };

  const generateSequenceText = () => {
    return sequence.map(item => {
      const name = getEnglishName(item);
      const note = item.notes ? ` :: ${item.notes.replace(/\n/g, ' ')}` : '';
      return `${name}${note}`;
    }).join('\n');
  };

  const handleExportToText = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "Añade al menos un elemento para exportar.", variant: "destructive" });
      return;
    }
    const textContent = generateSequenceText();
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'acro_sequence.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast({ title: "Exportación Exitosa", description: "La secuencia ha sido exportada como archivo de texto." });
  };
  
  const handleCopyToClipboard = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "No hay nada que copiar.", variant: "destructive" });
      return;
    }
    const textContent = generateSequenceText();
    navigator.clipboard.writeText(textContent).then(() => {
      toast({ title: "¡Copiado!", description: "La secuencia ha sido copiada al portapapeles." });
    }, (err) => {
      toast({ title: "Error al Copiar", description: "No se pudo copiar la secuencia.", variant: "destructive" });
      console.error('Could not copy text: ', err);
    });
  };

  const handleImportSequence = (text: string) => {
    const lines = text.split('\n').filter(Boolean);
    if (lines.length === 0) {
        toast({ title: "Importación Vacía", description: "No se encontró contenido para importar.", variant: "destructive" });
        return;
    }

    let itemsAddedCount = 0;
    const newSequenceItems: SequenceItem[] = [];

    lines.forEach(line => {
        const parts = line.split(' :: ');
        const name = parts[0].trim().toLowerCase();
        const notes = parts.length > 1 ? parts.slice(1).join(' :: ').trim() : '';

        let foundItem: any = null;
        let itemType: SequenceItem['itemType'] | null = null;

        // Search in poses
        foundItem = allPosesData.find(item => {
            const enName = (item.nombre.split('\n')[1]?.replace(/[()]/g, '') || item.nombre.split('\n')[0]).toLowerCase();
            const esName = item.nombre.split('\n')[0].toLowerCase();
            return enName === name || esName === name;
        });
        if (foundItem) itemType = foundItem.type.toLowerCase() as SequenceItem['itemType'];
        
        // Search in asanas
        if (!foundItem) {
            foundItem = allAsanasData.find(item => item.nombre_sans.toLowerCase() === name || item.nombre_es.toLowerCase() === name);
            if (foundItem) itemType = 'asana';
        }

        // Search in concepts
        if (!foundItem) {
            foundItem = allConceptsData.find(item => item.titulo.toLowerCase() === name);
            if (foundItem) itemType = 'concept';
        }
        
        // Search in modifiers
        if (!foundItem) {
            foundItem = allModifiersData.find(item => item.titulo.toLowerCase() === name);
            if (foundItem) itemType = 'modifier';
        }
        
        // Search in exercises
        if (!foundItem) {
            foundItem = allExercisesData.find(item => {
                const enName = (item.titulo.split('\n')[1]?.replace(/[()]/g, '') || item.titulo.split('\n')[0]).toLowerCase();
                const esName = item.titulo.split('\n')[0].toLowerCase();
                return enName === name || esName === name;
            });
            if (foundItem) itemType = 'exercise';
        }

        if (foundItem && itemType) {
            itemsAddedCount++;
            newSequenceItems.push({
                ...foundItem,
                uniqueId: `${itemType}-${foundItem.id}-${Date.now()}-${Math.random()}`,
                itemType: itemType as SequenceItem['itemType'],
                notes: notes
            });
        }
    });

    if (newSequenceItems.length > 0) {
        setSequence(prev => [...prev, ...newSequenceItems]);
    }
    
    toast({ 
        title: "Importación Completa", 
        description: `Se añadieron ${itemsAddedCount} de ${lines.length} elementos a la secuencia.` 
    });
  };

  const onImport = () => {
    handleImportSequence(importText);
    setIsImportDialogOpen(false);
    setImportText('');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-full gap-4">
        <header className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <h1 className="text-2xl font-bold text-primary">Constructor de Secuencias</h1>
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
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Archivo</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => setIsImportDialogOpen(true)}>Importar Secuencia...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={handleExportPdf}>Exportar a PDF</MenubarItem>
                  <MenubarItem onClick={handleExportToText}>Exportar como Texto</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={handleClearSequence} className="text-destructive focus:text-destructive">Limpiar Secuencia</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </header>
        <div className="flex flex-col md:flex-row flex-grow min-h-0 gap-4">
          <FlowBuilderPalette 
            poses={allPoses}
            concepts={allConcepts}
            modifiers={allModifiers}
            asanas={allAsanas}
            exercises={allExercises}
            nameDisplay={nameDisplay}
          />
          <FlowBuilderCanvas 
            sequence={sequence}
            onDrop={handleDrop}
            onSelectItem={handleSelectItem}
            selectedItemId={selectedItemId}
            moveItem={moveItem}
            nameDisplay={nameDisplay}
            onDeleteItem={handleDeleteItem}
            onCopyToClipboard={handleCopyToClipboard}
          />
          <FlowBuilderDetail 
            item={selectedItem} 
            onUpdateNotes={updateNotes} 
            nameDisplay={nameDisplay}
            allPoses={allPoses}
            allConcepts={allConcepts}
          />
        </div>
      </div>

      <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Importar Secuencia</DialogTitle>
            <DialogDescription>
              Pega el contenido de una secuencia de texto. Cada nombre de postura o elemento debe estar en una nueva línea.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              id="import-text"
              placeholder="Pega tu secuencia aquí..."
              className="min-h-[150px]"
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setIsImportDialogOpen(false)}>Cancelar</Button>
            <Button type="submit" onClick={onImport}>Importar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DndProvider>
  );
}
