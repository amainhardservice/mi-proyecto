
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useDrag } from 'react-dnd';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GripVertical, Bot, Sparkles, Dumbbell, HeartHandshake, BrainCircuit, HeartPulse, GitCommit, Repeat, PersonStanding, Wind, Workflow, Star, Hand, Feather, Crown, ThumbsUp, GitBranch, ShieldQuestion } from 'lucide-react';
import type { Pose, Concept, Asana, PoseModifier, Exercise } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { getYouTubeThumbnailUrl } from '@/lib/utils';
import { useCategorizedPoses } from '@/hooks/use-categorized-poses';


type NameDisplay = 'es' | 'en' | 'both';

interface PaletteProps {
  poses: Pose[];
  concepts: Concept[];
  modifiers: PoseModifier[];
  asanas: Asana[];
  exercises: Exercise[];
  nameDisplay: NameDisplay;
}

const ItemTypes = {
  POSE: 'pose',
  CONCEPT: 'concept',
  MODIFIER: 'modifier',
  ASANA: 'asana',
  EXERCISE: 'exercise',
  FLOW: 'flow',
  TRANSITION: 'transition',
  WHIP: 'whip',
  ICARIAN: 'icarian',
};

const getDisplayName = (item: any, displayMode: NameDisplay): string => {
    if (('nombre' in item && 'nivel' in item)) { // Pose
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
    if ('nombre_sans' in item) { // Asana
        const { nombre_sans, nombre_es } = item;
         switch (displayMode) {
          case 'en': return nombre_sans;
          case 'es': return nombre_es;
          case 'both': `${nombre_sans}\n(${nombre_es})`;
          default: return nombre_sans;
        }
    }
    if ('categoria' in item && 'enfasis' in item) { // Exercise
        const parts = item.titulo.split('\n');
        const esName = parts[0];
        const enName = parts[1] || '';
        switch (displayMode) {
            case 'en': return enName.replace(/[()]/g, '') || esName;
            case 'es': return esName;
            case 'both': return item.titulo;
            default: return item.titulo;
        }
    }
    return item.titulo; // Concept or Modifier
};

const getItemType = (item: any): string => {
    if ('nivel' in item) {
        if (item.type === 'Flow') return ItemTypes.FLOW;
        if (item.type === 'Transition') return ItemTypes.TRANSITION;
        if (item.type === 'Washing Machine') return ItemTypes.POSE; // Treat as pose for now
        if (item.type === 'Whip') return ItemTypes.WHIP;
        if (item.type === 'Icarian') return ItemTypes.ICARIAN;
        return ItemTypes.POSE;
    }
    if ('enfasis' in item) return ItemTypes.EXERCISE;
    if ('nombre_sans' in item) return ItemTypes.ASANA;
    if (item.category) return ItemTypes.CONCEPT;
    
    // Default fallback
    return ItemTypes.MODIFIER;
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
      if ('nivel' in item) { // It's a Pose
        switch(item.type) {
            case 'Flow': return <Workflow className="h-4 w-4 text-muted-foreground" />;
            case 'Transition': return <GitCommit className="h-4 w-4 text-muted-foreground" />;
            case 'Washing Machine': return <Repeat className="h-4 w-4 text-muted-foreground" />;
            case 'Whip': return <Wind className="h-4 w-4 text-muted-foreground" />;
            case 'Icarian': return <Sparkles className="h-4 w-4 text-muted-foreground" />;
            case 'Standing': return <PersonStanding className="h-4 w-4 text-muted-foreground" />;
            case 'Therapeutic': return <HeartHandshake className="h-4 w-4 text-muted-foreground" />;
            case 'L-Basing':
                if (item.tags?.includes('Familia Estrella')) return <Star className="h-4 w-4 text-muted-foreground" />;
                if (item.tags?.includes('Familia Pájaro')) return <Feather className="h-4 w-4 text-muted-foreground" />;
                if (item.tags?.includes('Familia Trono')) return <Crown className="h-4 w-4 text-muted-foreground" />;
                if (item.tags?.includes('Familia Murciélago')) return <ThumbsUp className="h-4 w-4 text-muted-foreground transform -scale-y-100" />;
                if (item.tags?.includes('Inversión sobre Manos') || item.tags?.includes('Inversión sobre Hombros')) return <Hand className="h-4 w-4 text-muted-foreground" />;
                return <GitBranch className="h-4 w-4 text-muted-foreground" />;
        }
      }
      
      switch(type) {
          case ItemTypes.CONCEPT: return <Sparkles className="h-4 w-4 text-muted-foreground" />;
          case ItemTypes.ASANA: return <BrainCircuit className="h-4 w-4 text-muted-foreground" />;
          case ItemTypes.MODIFIER: return <Bot className="h-4 w-4 text-muted-foreground" />;
          case ItemTypes.EXERCISE: return <HeartPulse className="h-4 w-4 text-muted-foreground" />;
          default: return <ShieldQuestion className="h-4 w-4 text-muted-foreground" />;
      }
  }

  const itemContent = (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="p-2 border rounded-lg mb-2 flex items-center gap-2 bg-card hover:bg-accent/50 cursor-grab w-full"
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

  const imageUrl = item.url_imagen || getYouTubeThumbnailUrl(item.url_video);
  const hasImage = !!imageUrl;

  if (hasImage) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>{itemContent}</TooltipTrigger>
          <TooltipContent side="right" align="center" className="ml-2 w-[250px] p-0">
             <Card className="border-primary shadow-lg">
                <CardContent className="p-0">
                    <div className="relative aspect-video w-full rounded-t-lg overflow-hidden">
                         <Image
                          src={imageUrl}
                          alt={getDisplayName(item, nameDisplay)}
                          fill
                          className="object-cover"
                        />
                    </div>
                </CardContent>
                <CardHeader className="p-2">
                    <CardTitle className="text-sm text-center">{getTitle()}</CardTitle>
                </CardHeader>
             </Card>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return itemContent;
};

const PaletteAccordion = ({ title, items, children }: { title: string, items: any[], children: React.ReactNode }) => {
  if (!items || items.length === 0) return null;
  return (
    <Accordion type="multiple" className="w-full" defaultValue={[title]}>
        <AccordionItem value={title}>
            <AccordionTrigger>{title} ({items.length})</AccordionTrigger>
            <AccordionContent className="pl-2">
                {children}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );
};


export default function FlowBuilderPalette({ poses, concepts, modifiers, asanas, exercises, nameDisplay }: PaletteProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const lowerCaseSearch = searchTerm.toLowerCase();

  const filterItem = (item: any) => {
    if (!lowerCaseSearch) return true;
    const name = getDisplayName(item, 'es') + getDisplayName(item, 'en');
    return name.toLowerCase().includes(lowerCaseSearch);
  };
  
 const allItems = useMemo(() => [
    ...poses.map(p => ({...p, itemType: getItemType(p) })),
    ...concepts.map(c => ({...c, itemType: 'concept'})),
    ...modifiers.map(m => ({...m, itemType: 'modifier'})),
    ...asanas.map(a => ({...a, itemType: 'asana'})),
    ...exercises.map(e => ({...e, itemType: 'exercise'})),
  ].filter(filterItem), [poses, concepts, modifiers, asanas, exercises, lowerCaseSearch]);

 const categorizedPoses = useCategorizedPoses(poses, filterItem);
 const filteredExercises = allItems.filter(item => item.itemType === 'exercise');
 const extras = allItems.filter(item => ['concept', 'modifier', 'asana'].includes(item.itemType));
  
  return (
    <Card className="w-full md:w-1/3 flex flex-col">
      <CardHeader>
        <CardTitle>Elementos</CardTitle>
        <Input 
          placeholder="Buscar en todas las categorías..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2"
        />
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <Tabs defaultValue="fundamentals" className="h-full flex flex-col">
          <TabsList className="w-full justify-start h-auto flex-wrap">
            <TabsTrigger value="all">Todos ({allItems.length})</TabsTrigger>
            <TabsTrigger value="fundamentals">Fundamentales ({categorizedPoses.allFundamentals.length})</TabsTrigger>
            <TabsTrigger value="balances">Equilibrios ({categorizedPoses.allBalances.length})</TabsTrigger>
            <TabsTrigger value="dynamics">Dinámicas ({categorizedPoses.allDynamics.length})</TabsTrigger>
            <TabsTrigger value="standing">Standing ({categorizedPoses.allStanding.length})</TabsTrigger>
            <TabsTrigger value="warmup">Calentamiento ({filteredExercises.length})</TabsTrigger>
            <TabsTrigger value="extras">Extras ({extras.length})</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-grow mt-2">
            <div className="pr-4">
              <TabsContent value="all" className="h-full">
                 {allItems.map(item => {
                    const itemType = getItemType(item);
                    const uniqueKey = `${itemType}-${item.id}`;
                    return <DraggableItem key={uniqueKey} item={item} type={itemType} nameDisplay={nameDisplay} />;
                 })}
              </TabsContent>
              
              <TabsContent value="fundamentals">
                <PaletteAccordion title="Fundamentales" items={categorizedPoses.staticFundamentals}>
                  {categorizedPoses.staticFundamentals.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Familia Trono" items={categorizedPoses.throneFamily}>
                   {categorizedPoses.throneFamily.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Familia Pájaro" items={categorizedPoses.birdFamily}>
                   {categorizedPoses.birdFamily.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Familia Murciélago" items={categorizedPoses.batFamily}>
                   {categorizedPoses.batFamily.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Vuelo Terapéutico" items={categorizedPoses.therapeutic}>
                   {categorizedPoses.therapeutic.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
              </TabsContent>

              <TabsContent value="balances">
                <PaletteAccordion title="Familia Estrella" items={categorizedPoses.starFamily}>
                   {categorizedPoses.starFamily.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Inversiones sobre Hombros" items={categorizedPoses.shoulderstands}>
                  {categorizedPoses.shoulderstands.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Inversiones sobre Manos" items={categorizedPoses.handstands}>
                   {categorizedPoses.handstands.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
              </TabsContent>

               <TabsContent value="dynamics">
                  <PaletteAccordion title="Transiciones" items={categorizedPoses.transitions}>
                     {categorizedPoses.transitions.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.TRANSITION} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Lavadoras" items={categorizedPoses.washingMachines}>
                     {categorizedPoses.washingMachines.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Flujos" items={categorizedPoses.flows}>
                     {categorizedPoses.flows.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.FLOW} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Whips" items={categorizedPoses.whips}>
                     {categorizedPoses.whips.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.WHIP} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Icarian" items={categorizedPoses.icarian}>
                    {categorizedPoses.icarian.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.ICARIAN} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
              </TabsContent>
              
              <TabsContent value="standing">
                <PaletteAccordion title="Standing Acro" items={categorizedPoses.standing}>
                    {categorizedPoses.standing.map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
              </TabsContent>

              <TabsContent value="warmup">
                {filteredExercises.map(ex => <DraggableItem key={ex.id} item={ex} type={ItemTypes.EXERCISE} nameDisplay={nameDisplay} />)}
              </TabsContent>

              <TabsContent value="extras">
                  <PaletteAccordion title="Modificadores" items={modifiers.filter(filterItem)} defaultOpen>
                    {modifiers.filter(filterItem).map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.MODIFIER} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Conceptos" items={concepts.filter(filterItem)}>
                     {concepts.filter(filterItem).map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.CONCEPT} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Asanas" items={asanas.filter(filterItem)}>
                     {asanas.filter(filterItem).map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.ASANA} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
}
