
'use client';

import React, { useState, useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GripVertical, Bot, Sparkles, Dumbbell, HeartHandshake, BrainCircuit } from 'lucide-react';
import type { Pose, Concept, Asana, PoseModifier } from '@/types';

type NameDisplay = 'es' | 'en' | 'both';

interface PaletteProps {
  poses: Pose[];
  concepts: Concept[];
  modifiers: PoseModifier[];
  asanas: Asana[];
  nameDisplay: NameDisplay;
}

const ItemTypes = {
  POSE: 'pose',
  CONCEPT: 'concept',
  MODIFIER: 'modifier',
  ASANA: 'asana',
};

const getDisplayName = (item: any, displayMode: NameDisplay): string => {
    if ('nombre' in item) { // It's a Pose
        const parts = item.nombre.split('\n');
        const esName = parts[0];
        const enName = parts[1] || '';
        switch (displayMode) {
          case 'en': return enName.replace(/[()]/g, '') || esName;
          case 'es': return esName;
          case 'both': return item.nombre;
          default: return item.nombre;
        }
    }
    if ('nombre_sans' in item) { // It's an Asana
        const { nombre_sans, nombre_es } = item;
         switch (displayMode) {
          case 'en': return nombre_sans;
          case 'es': return nombre_es;
          case 'both': return `${nombre_sans}\n(${nombre_es})`;
          default: return nombre_sans;
        }
    }
    return item.titulo; // Concept or Modifier
};


const DraggableItem = ({ item, type, nameDisplay }: { item: any, type: string, nameDisplay: NameDisplay }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { id: item.id, type: type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const getTitle = () => {
    const displayName = getDisplayName(item, nameDisplay);
    return displayName.split('\n')[0];
  };
  
  const getIcon = () => {
      switch(type) {
          case 'pose': return <Dumbbell className="h-4 w-4 text-muted-foreground" />;
          case 'concept': return <Sparkles className="h-4 w-4 text-muted-foreground" />;
          case 'asana': return <BrainCircuit className="h-4 w-4 text-muted-foreground" />;
          case 'modifier': return <Bot className="h-4 w-4 text-muted-foreground" />;
          default: return <GripVertical className="h-5 w-5 text-muted-foreground" />;
      }
  }

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="p-2 border rounded-lg mb-2 flex items-center gap-2 bg-card hover:bg-accent/50 cursor-grab"
    >
      <div>
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex items-center gap-2">
         {getIcon()}
         <span className="text-sm font-medium">{getTitle()}</span>
      </div>
    </div>
  );
};

export default function FlowBuilderPalette({ poses, concepts, modifiers, asanas, nameDisplay }: PaletteProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPoses = useMemo(() => 
    poses.filter(p => p.nombre.toLowerCase().includes(searchTerm.toLowerCase())),
    [poses, searchTerm]
  );
  const filteredConcepts = useMemo(() =>
    concepts.filter(c => c.titulo.toLowerCase().includes(searchTerm.toLowerCase())),
    [concepts, searchTerm]
  );
  const filteredModifiers = useMemo(() =>
    modifiers.filter(m => m.titulo.toLowerCase().includes(searchTerm.toLowerCase())),
    [modifiers, searchTerm]
  );
  const filteredAsanas = useMemo(() =>
    asanas.filter(a => a.nombre_sans.toLowerCase().includes(searchTerm.toLowerCase()) || a.nombre_es.toLowerCase().includes(searchTerm.toLowerCase())),
    [asanas, searchTerm]
  );
  
  const allItems = useMemo(() => [
      ...filteredPoses.map(item => ({ ...item, itemType: ItemTypes.POSE })),
      ...filteredModifiers.map(item => ({ ...item, itemType: ItemTypes.MODIFIER })),
      ...filteredConcepts.map(item => ({ ...item, itemType: ItemTypes.CONCEPT })),
      ...filteredAsanas.map(item => ({ ...item, itemType: ItemTypes.ASANA }))
  ], [filteredPoses, filteredConcepts, filteredModifiers, filteredAsanas]);

  return (
    <Card className="w-1/3 flex flex-col">
      <CardHeader>
        <CardTitle>Elementos</CardTitle>
        <Input 
          placeholder="Buscar..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2"
        />
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <Tabs defaultValue="all" className="h-full flex flex-col">
          <TabsList className="w-full">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="poses">Posturas</TabsTrigger>
            <TabsTrigger value="modifiers">Modificadores</TabsTrigger>
            <TabsTrigger value="concepts">Conceptos</TabsTrigger>
            <TabsTrigger value="asanas">Asanas</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-grow mt-2">
              <TabsContent value="all" className="h-full">
                {allItems.map(item => <DraggableItem key={`${item.itemType}-${item.id}`} item={item} type={item.itemType} nameDisplay={nameDisplay} />)}
              </TabsContent>
              <TabsContent value="poses">
                {filteredPoses.map(pose => <DraggableItem key={pose.id} item={pose} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
              </TabsContent>
              <TabsContent value="modifiers">
                {filteredModifiers.map(mod => <DraggableItem key={mod.id} item={mod} type={ItemTypes.MODIFIER} nameDisplay={nameDisplay} />)}
              </TabsContent>
              <TabsContent value="concepts">
                {filteredConcepts.map(concept => <DraggableItem key={concept.id} item={concept} type={ItemTypes.CONCEPT} nameDisplay={nameDisplay} />)}
              </TabsContent>
              <TabsContent value="asanas">
                {filteredAsanas.map(asana => <DraggableItem key={asana.id} item={asana} type={ItemTypes.ASANA} nameDisplay={nameDisplay} />)}
              </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
}
