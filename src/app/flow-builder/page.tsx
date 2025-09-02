
'use client';

import { useState, useEffect, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getPoses, getConcepts, getPoseModifiers, getAsanas } from '@/lib/firestore';
import type { Pose, Concept, Asana, PoseModifier, SequenceItem } from '@/types';
import FlowBuilderPalette from '@/components/FlowBuilderPalette';
import FlowBuilderCanvas from '@/components/FlowBuilderCanvas';
import FlowBuilderDetail from '@/components/FlowBuilderDetail';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar';
import { exportSequenceToPdf } from '@/lib/pdf';
import { toast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type NameDisplay = 'es' | 'en' | 'both';


export default function FlowBuilderPage() {
  const [loading, setLoading] = useState(true);
  const [allPoses, setAllPoses] = useState<Pose[]>([]);
  const [allConcepts, setAllConcepts] = useState<Concept[]>([]);
  const [allModifiers, setAllModifiers] = useState<PoseModifier[]>([]);
  const [allAsanas, setAllAsanas] = useState<Asana[]>([]);
  
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('es');


  useEffect(() => {
    async function fetchData() {
      const [posesData, conceptsData, modifiersData, asanasData] = await Promise.all([
        getPoses(),
        getConcepts(),
        getPoseModifiers(),
        getAsanas(),
      ]);
      setAllPoses(posesData);
      setAllConcepts(conceptsData);
      setAllModifiers(modifiersData);
      setAllAsanas(asanasData);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleDrop = useCallback((item: { id: string; type: string }) => {
    let newItem: SequenceItem | null = null;
    const uniqueId = `${item.type}-${item.id}-${Date.now()}`;
    
    if (item.type === 'pose') {
      const pose = allPoses.find(p => p.id === item.id);
      if (pose) newItem = { ...pose, uniqueId, itemType: 'pose', notes: '' };
    } else if (item.type === 'concept') {
      const concept = allConcepts.find(c => c.id === item.id);
      if (concept) newItem = { ...concept, uniqueId, itemType: 'concept', notes: '' };
    } else if (item.type === 'asana') {
      const asana = allAsanas.find(a => a.id === item.id);
      if (asana) newItem = { ...asana, uniqueId, itemType: 'asana', notes: '' };
    } else if (item.type === 'modifier') {
        const modifier = allModifiers.find(m => m.id === item.id);
        if (modifier) newItem = { ...modifier, uniqueId, itemType: 'modifier', notes: '' };
    }
    
    if (newItem) {
      setSequence(prev => [...prev, newItem!]);
      setSelectedItemId(uniqueId);
    }
  }, [allPoses, allConcepts, allAsanas, allModifiers]);

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

  const selectedItem = sequence.find(item => item.uniqueId === selectedItemId) || null;

  const handleExport = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "Añade al menos un elemento para exportar.", variant: "destructive" });
      return;
    }
    exportSequenceToPdf(sequence, "Mi Secuencia de Acroyoga");
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Cargando constructor...</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen p-4 gap-4">
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
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </header>
        <div className="flex flex-grow min-h-0 gap-4">
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
