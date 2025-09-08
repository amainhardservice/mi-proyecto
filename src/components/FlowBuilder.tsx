
'use client';

import { useState } from 'react';
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

type NameDisplay = 'es' | 'en' | 'both';

interface FlowBuilderProps {
  allPoses: Pose[];
  allConcepts: Concept[];
  allModifiers: PoseModifier[];
  allAsanas: Asana[];
  allExercises: Exercise[];
  sequence: SequenceItem[];
  selectedItemId: string | null;
  nameDisplay: NameDisplay;
  setNameDisplay: (value: NameDisplay) => void;
  handleDrop: (item: { id: string; type: string }) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  handleSelectItem: (uniqueId: string) => void;
  updateNotes: (uniqueId: string, notes: string) => void;
  handleExportPdf: () => void;
  handleExportToText: () => void;
  handleCopyToClipboard: () => void;
  handleImportSequence: (text: string) => void;
  handleClearSequence: () => void;
  handleDeleteItem: (uniqueId: string) => void;
}

export default function FlowBuilder({
  allPoses,
  allConcepts,
  allModifiers,
  allAsanas,
  allExercises,
  sequence,
  selectedItemId,
  nameDisplay,
  setNameDisplay,
  handleDrop,
  moveItem,
  handleSelectItem,
  updateNotes,
  handleExportPdf,
  handleExportToText,
  handleCopyToClipboard,
  handleImportSequence,
  handleClearSequence,
  handleDeleteItem,
}: FlowBuilderProps) {
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const selectedItem = sequence.find(item => item.uniqueId === selectedItemId) || null;

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
