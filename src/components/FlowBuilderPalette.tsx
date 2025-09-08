
'use client';

import React, { useState, useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GripVertical, Bot, Sparkles, Dumbbell, HeartHandshake, BrainCircuit, HeartPulse, GitCommit, Repeat, PersonStanding, Wind, Workflow, Star, Hand, Feather, Crown, ThumbsUp, GitBranch, ShieldQuestion } from 'lucide-react';
import type { Pose, Concept, Asana, PoseModifier, Exercise } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
  TRANSITION: 'transition'
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
          case 'both': return `${nombre_sans}\n(${nombre_es})`;
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
                if (item.nombre.toLowerCase().includes('estrella') || item.id.includes('star') || item.id === 'lb-9' || item.id === 'lb-12' || item.id === 'lb-18') return <Star className="h-4 w-4 text-muted-foreground" />;
                if (item.nombre.toLowerCase().includes('pajarito') || item.id === 'lb-baby-bird') return <Feather className="h-4 w-4 text-muted-foreground" />;
                if (item.nombre.toLowerCase().includes('pájaro')) return <Feather className="h-4 w-4 text-muted-foreground" />;
                if (item.nombre.toLowerCase().includes('trono')) return <Crown className="h-4 w-4 text-muted-foreground" />;
                if (item.nombre.toLowerCase().includes('murciélago')) return <ThumbsUp className="h-4 w-4 text-muted-foreground transform -scale-y-100" />;
                if (item.id.includes('h2h') || item.id.includes('handstand') || item.id.includes('croc') || item.id.includes('tripod') || item.id === 'lb-14' || item.id === 'lb-11' || item.id.includes('shoulderstand')) return <Hand className="h-4 w-4 text-muted-foreground" />;
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

const PaletteAccordion = ({ title, items, itemType, nameDisplay, defaultOpen = false }: { title: string, items: any[], itemType: string, nameDisplay: NameDisplay, defaultOpen?: boolean }) => {
  if (items.length === 0) return null;
  return (
    <Accordion type="multiple" className="w-full" defaultValue={defaultOpen ? [title] : []}>
        <AccordionItem value={title}>
            <AccordionTrigger>{title} ({items.length})</AccordionTrigger>
            <AccordionContent className="pl-2">
                {items.map(item => <DraggableItem key={`${itemType}-${item.id}`} item={item} type={itemType} nameDisplay={nameDisplay} />)}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );
};

const getItemType = (item: any): string => {
    if ('itemType' in item) return item.itemType;
    
    if(item.type === 'Transition') return ItemTypes.TRANSITION;
    if(item.type === 'Flow') return ItemTypes.FLOW;
    
    if ('nivel' in item) return ItemTypes.POSE;
    if ('enfasis' in item) return ItemTypes.EXERCISE;
    if ('nombre_sans' in item) return ItemTypes.ASANA;
    if ('category' in item) return ItemTypes.CONCEPT;
    if ('titulo' in item) return ItemTypes.MODIFIER;
    return 'unknown';
};


export default function FlowBuilderPalette({ poses, concepts, modifiers, asanas, exercises, nameDisplay }: PaletteProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const lowerCaseSearch = searchTerm.toLowerCase();

  const filterItem = (item: any) => {
    if (!lowerCaseSearch) return true;
    const name = getDisplayName(item, 'es') + getDisplayName(item, 'en');
    return name.toLowerCase().includes(lowerCaseSearch);
  };
  
 const categorizedPoses = useMemo(() => {
    const allFilteredItems = [
      ...poses.map(p => ({...p, itemType: getItemType(p)})),
      ...concepts.map(c => ({...c, itemType: 'concept'})),
      ...modifiers.map(m => ({...m, itemType: 'modifier'})),
      ...asanas.map(a => ({...a, itemType: 'asana'})),
      ...exercises.map(e => ({...e, itemType: 'exercise'})),
    ].filter(filterItem);

    const balanceIds = [
        'lb-9', 'lb-12', 'lb-18', 'lb-inside-star', 'lb-outside-side-star', 
        'lb-reverse-inside-star', 'lb-reverse-outside-star',
        'lb-10', 'lb-11', 'lb-croc', 'lb-14', 'lb-h2h', 
        'lb-shoulderstand-on-feet', 'lb-candlestick', 'lb-shoulderstand', 'lb-reverse-shoulderstand', 'lb-21'
    ];
    const dynamicTypes = ['Transition', 'Flow', 'Washing Machine', 'Whip', 'Icarian'];
    const isDynamic = (p: Pose) => dynamicTypes.includes(p.type) || p.nivel === 7 || (p.nivel >= 11 && p.nivel <= 13) || p.type === 'Transition' || p.type === 'Flow';


    const staticPoses = allFilteredItems.filter(p => 
        (p.itemType === 'pose' || p.itemType === 'L-Basing' || p.itemType === 'Therapeutic') &&
        (p.type === 'L-Basing' || p.type === 'Therapeutic') &&
        !isDynamic(p) &&
        !balanceIds.includes(p.id)
    ) as Pose[];
    
    const nonBalanceStatics = staticPoses;

    const birdFamily = nonBalanceStatics.filter(p => p.nombre.toLowerCase().includes('pájaro') || p.id === 'lb-baby-bird');
    const throneFamily = nonBalanceStatics.filter(p => p.nombre.toLowerCase().includes('trono'));
    const batFamily = nonBalanceStatics.filter(p => p.nombre.toLowerCase().includes('murciélago'));
    const therapeuticPoses = nonBalanceStatics.filter(p => p.type === 'Therapeutic');
    
    const familyIds = [
      ...birdFamily.map(p => p.id),
      ...throneFamily.map(p => p.id),
      ...batFamily.map(p => p.id),
      ...therapeuticPoses.map(p => p.id),
    ];
    const staticFundamentals = nonBalanceStatics.filter(p => !familyIds.includes(p.id));
    
    // --- Balances ---
    const balances = allFilteredItems.filter(p => p.itemType === 'pose' && balanceIds.includes(p.id)) as Pose[];
    const starFamily = balances.filter(p => p.id.includes('star') || p.id === 'lb-9' || p.id === 'lb-12' || p.id === 'lb-18');
    const shoulderstands = balances.filter(p => p.id.includes('shoulderstand') || p.id === 'lb-21' || p.id === 'lb-candlestick');
    const handstands = balances.filter(p => p.id.includes('h2h') || p.id.includes('handstand') || p.id.includes('croc') || p.id.includes('foot-to-hand') || p.id === 'lb-10' || p.id === 'lb-14' || p.id === 'lb-11');

    // --- Dynamic Poses ---
    const transitions = allFilteredItems.filter(p => p.itemType === 'transition') as Pose[];
    const flows = allFilteredItems.filter(p => p.itemType === 'flow') as Pose[];
    const washingMachines = allFilteredItems.filter(p => p.type === 'Washing Machine' || p.nivel === 7) as Pose[];
    const whips = allFilteredItems.filter(p => p.type === 'Whip' || (p.nivel >= 11 && p.nivel <= 13)) as Pose[];
    const icarian = allFilteredItems.filter(p => p.type === 'Icarian') as Pose[];
    const standing = allFilteredItems.filter(p => p.type === 'Standing') as Pose[];
    
    const transitionsAndFlows = [...transitions, ...flows];
    const transitionsByLevel = transitions.reduce((acc, p) => { (acc[p.nivel] = acc[p.nivel] || []).push(p); return acc; }, {} as Record<number, Pose[]>);
    const flowsBasic = flows.filter(p => p.nivel === 4);
    const flowsIntermediate = flows.filter(p => p.nivel === 6);
    const flowsAdvanced = flows.filter(p => p.nivel === 8);
    
    const filteredExercises = allFilteredItems.filter(item => item.itemType === 'exercise');
    const filteredConcepts = allFilteredItems.filter(item => item.itemType === 'concept');
    const filteredModifiers = allFilteredItems.filter(item => item.itemType === 'modifier');
    const filteredAsanas = allFilteredItems.filter(item => item.itemType === 'asana');
    const extras = [...filteredConcepts, ...filteredModifiers, ...filteredAsanas];

    return {
      allItems: allFilteredItems,
      staticPoses: [...staticFundamentals, ...throneFamily, ...birdFamily, ...batFamily, ...therapeuticPoses],
      staticFundamentals,
      throneFamily,
      birdFamily,
      batFamily,
      therapeuticPoses,
      balances,
      starFamily,
      shoulderstands,
      handstands,
      transitions,
      flows,
      washingMachines,
      whips,
      icarian,
      standing,
      transitionsAndFlows,
      transitionsByLevel,
      flowsBasic,
      flowsIntermediate,
      flowsAdvanced,
      filteredExercises,
      extras,
    };
  }, [poses, concepts, modifiers, asanas, exercises, lowerCaseSearch]);
  

  const getLevelTitle = (level: number) => {
      switch (level) {
          case 3: return "Transiciones Básicas";
          case 4: return "Flows Básicos";
          case 6: return "Flows Intermedios";
          case 8: return "Flows Avanzados";
          default: return `Nivel ${level}`;
      }
  }


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
        <Tabs defaultValue="statics" className="h-full flex flex-col">
          <TabsList className="w-full justify-start h-auto flex-wrap">
            <TabsTrigger value="all">Todos ({categorizedPoses.allItems.length})</TabsTrigger>
            <TabsTrigger value="statics">Estáticas ({categorizedPoses.staticPoses.length})</TabsTrigger>
            <TabsTrigger value="balances">Equilibrios ({categorizedPoses.balances.length})</TabsTrigger>
            <TabsTrigger value="transitions">Transiciones ({categorizedPoses.transitionsAndFlows.length})</TabsTrigger>
            <TabsTrigger value="wms">Lavadoras ({categorizedPoses.washingMachines.length})</TabsTrigger>
            <TabsTrigger value="whips">Whips ({categorizedPoses.whips.length})</TabsTrigger>
            <TabsTrigger value="icarian">Icarian ({categorizedPoses.icarian.length})</TabsTrigger>
            <TabsTrigger value="standing">Standing ({categorizedPoses.standing.length})</TabsTrigger>
            <TabsTrigger value="warmup">Calentamiento ({categorizedPoses.filteredExercises.length})</TabsTrigger>
            <TabsTrigger value="extras">Extras ({categorizedPoses.extras.length})</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-grow mt-2">
              <TabsContent value="all" className="h-full">
                 {categorizedPoses.allItems.map(item => {
                    const itemType = getItemType(item);
                    const uniqueKey = `${itemType}-${item.id}`;
                    return <DraggableItem key={uniqueKey} item={item} type={itemType} nameDisplay={nameDisplay} />;
                 })}
              </TabsContent>
              
              <TabsContent value="statics">
                <PaletteAccordion title="Fundamentales" items={categorizedPoses.staticFundamentals} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} defaultOpen={true} />
                <PaletteAccordion title="Familia Trono" items={categorizedPoses.throneFamily} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} />
                <PaletteAccordion title="Familia Pájaro" items={categorizedPoses.birdFamily} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} />
                <PaletteAccordion title="Familia Murciélago" items={categorizedPoses.batFamily} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} />
                <PaletteAccordion title="Vuelo Terapéutico" items={categorizedPoses.therapeuticPoses} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} />
              </TabsContent>

              <TabsContent value="balances">
                <PaletteAccordion title="Equilibrios de Estrella" items={categorizedPoses.starFamily} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} defaultOpen={true}/>
                <PaletteAccordion title="Inversiones sobre Hombros" items={categorizedPoses.shoulderstands} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} />
                <PaletteAccordion title="Inversiones sobre Manos" items={categorizedPoses.handstands} itemType={ItemTypes.POSE} nameDisplay={nameDisplay} />
              </TabsContent>

               <TabsContent value="transitions">
                {Object.keys(categorizedPoses.transitionsByLevel).sort((a,b) => Number(a) - Number(b)).map(level => (
                     <PaletteAccordion 
                        key={`trans-${level}`}
                        title={getLevelTitle(Number(level))}
                        items={categorizedPoses.transitionsByLevel[Number(level)]} 
                        itemType={ItemTypes.TRANSITION}
                        nameDisplay={nameDisplay} 
                        defaultOpen={true} />
                ))}
                 <PaletteAccordion 
                    key="flow-basic"
                    title={getLevelTitle(4)}
                    items={categorizedPoses.flowsBasic} 
                    itemType={ItemTypes.FLOW}
                    nameDisplay={nameDisplay} 
                    defaultOpen={true} />
                <PaletteAccordion 
                    key="flow-intermediate"
                    title={getLevelTitle(6)}
                    items={categorizedPoses.flowsIntermediate} 
                    itemType={ItemTypes.FLOW}
                    nameDisplay={nameDisplay} 
                    defaultOpen={true} />
                <PaletteAccordion 
                    key="flow-advanced"
                    title={getLevelTitle(8)}
                    items={categorizedPoses.flowsAdvanced} 
                    itemType={ItemTypes.FLOW}
                    nameDisplay={nameDisplay} 
                    defaultOpen={true} />
              </TabsContent>
              
               <TabsContent value="flows">
                 {Object.keys(categorizedPoses.flowsBasic).sort((a,b) => Number(a) - Number(b)).map(level => (
                     <PaletteAccordion 
                        key={`flow-${level}`}
                        title={getLevelTitle(Number(level))}
                        items={categorizedPoses.flowsBasic[Number(level)]} 
                        itemType={ItemTypes.FLOW}
                        nameDisplay={nameDisplay} 
                        defaultOpen={true} />
                ))}
              </TabsContent>

              <TabsContent value="wms">
                {categorizedPoses.washingMachines.map(pose => <DraggableItem key={pose.id} item={pose} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
              </TabsContent>

               <TabsContent value="whips">
                {categorizedPoses.whips.map(pose => <DraggableItem key={pose.id} item={pose} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
              </TabsContent>

              <TabsContent value="icarian">
                {categorizedPoses.icarian.map(pose => <DraggableItem key={pose.id} item={pose} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
              </TabsContent>

              <TabsContent value="standing">
                {categorizedPoses.standing.map(pose => <DraggableItem key={pose.id} item={pose} type={ItemTypes.POSE} nameDisplay={nameDisplay} />)}
              </TabsContent>

              <TabsContent value="warmup">
                {categorizedPoses.filteredExercises.map(ex => <DraggableItem key={ex.id} item={ex} type={ItemTypes.EXERCISE} nameDisplay={nameDisplay} />)}
              </TabsContent>

              <TabsContent value="extras">
                  <PaletteAccordion title="Modificadores" items={modifiers.filter(filterItem)} itemType={ItemTypes.MODIFIER} nameDisplay={nameDisplay} defaultOpen={true} />
                  <PaletteAccordion title="Conceptos" items={concepts.filter(filterItem)} itemType={ItemTypes.CONCEPT} nameDisplay={nameDisplay} />
                  <PaletteAccordion title="Asanas" items={asanas.filter(filterItem)} itemType={ItemTypes.ASANA} nameDisplay={nameDisplay} />
              </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
}


