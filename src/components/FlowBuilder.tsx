
'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { Pose, Concept, Asana, PoseModifier, SequenceItem } from '@/types';
import FlowBuilderPalette from '@/components/FlowBuilderPalette';
import FlowBuilderCanvas from '@/components/FlowBuilderCanvas';
import FlowBuilderDetail from '@/components/FlowBuilderDetail';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@/components/ui/menubar';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type NameDisplay = 'es' | 'en' | 'both';

interface FlowBuilderProps {
  allPoses: Pose[];
  allConcepts: Concept[];
  allModifiers: PoseModifier[];
  allAsanas: Asana[];
  sequence: SequenceItem[];
  selectedItemId: string | null;
  nameDisplay: NameDisplay;
  setNameDisplay: (value: NameDisplay) => void;
  handleDrop: (item: { id: string; type: string }) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  handleSelectItem: (uniqueId: string) => void;
  updateNotes: (uniqueId: string, notes: string) => void;
  handleExport: () => void;
  handleClearSequence: () => void;
  handleDeleteItem: (uniqueId: string) => void;
}

export default function FlowBuilder({
  allPoses,
  allConcepts,
  allModifiers,
  allAsanas,
  sequence,
  selectedItemId,
  nameDisplay,
  setNameDisplay,
  handleDrop,
  moveItem,
  handleSelectItem,
  updateNotes,
  handleExport,
  handleClearSequence,
  handleDeleteItem,
}: FlowBuilderProps) {
  const selectedItem = sequence.find(item => item.uniqueId === selectedItemId) || null;

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
                  <MenubarItem disabled>Guardar Secuencia</MenubarItem>
                  <MenubarItem onClick={handleExport}>Exportar a PDF</MenubarItem>
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
          />
          <FlowBuilderDetail 
            item={selectedItem} 
            onUpdateNotes={updateNotes} 
            nameDisplay={nameDisplay}
          />
        </div>
      </div>
    </DndProvider>
  );
}
