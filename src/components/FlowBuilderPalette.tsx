
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { useDrag } from 'react-dnd';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GripVertical, Bot, Sparkles, Dumbbell, HeartHandshake, BrainCircuit, HeartPulse, GitCommit, Repeat, PersonStanding, Wind, Workflow, Star, Hand, Feather, Crown, ThumbsUp, GitBranch, ShieldQuestion } from 'lucide-react';
import type { Pose, Concept, Asana, PoseModifier, Exercise } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { getYouTubeThumbnailUrl } from '@/lib/utils';
import { useCategorizedPoses } from '@/hooks/use-categorized-poses';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';


interface PaletteProps {
  poses: Pose[];
  concepts: Concept[];
  modifiers: PoseModifier[];
  asanas: Asana[];
  exercises: Exercise[];
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
  L_BASING: 'l-basing',
  STANDING: 'standing',
  THAI_MASSAGE: 'thai-massage',
  THERAPEUTIC: 'therapeutic',
  WASHING_MACHINE: 'washing-machine',
};

const getDisplayName = (item: any, displayMode: 'es' | 'en' | 'both'): string => {
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
        const esTitle = parts[0];
        const enName = parts[1] || '';
        switch (displayMode) {
            case 'en': return enName.replace(/[()]/g, '') || esTitle;
            case 'es': return esTitle;
            case 'both': return item.titulo;
            default: return item.titulo;
        }
    }
    return item.titulo; // Concept or Modifier
};

const getItemType = (item: Pose): string => {
  return (item.type as string).toLowerCase().replace(' ', '-');
};


const DraggableItem = ({ item, type, nameDisplay }: { item: any, type: string, nameDisplay: 'es' | 'en' | 'both' }) => {
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

const PaletteAccordion = ({ title, items, children, value, onValueChange, type, defaultValue }: { title: string, items: any[], children: React.ReactNode, value: string[], onValueChange: (value: string[]) => void, type: "single" | "multiple", defaultValue: string[] | undefined }) => {
  if (!items || items.length === 0) return null;
  return (
    <Accordion type="multiple" className="w-full" value={value} onValueChange={onValueChange} defaultValue={defaultValue}>
        <AccordionItem value={title}>
            <AccordionTrigger>{title} ({items.length})</AccordionTrigger>
            <AccordionContent className="pl-2">
                {children}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );
};


export default function FlowBuilderPalette({ poses, concepts, modifiers, asanas, exercises }: PaletteProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { 
    nameDisplay,
    defaultDurationMode, setDefaultDurationMode,
    defaultSeconds, setDefaultSeconds,
    defaultQuantity, setDefaultQuantity,
    defaultSecondsPerRep, setDefaultSecondsPerRep,
  } = useAppContext();
  const isMobile = useIsMobile();
  const lowerCaseSearch = searchTerm.toLowerCase();

  const [openAccordion, setOpenAccordion] = useState<string[]>(isMobile ? [] : ['Fundamentales', 'Familia Trono', 'Familia Pájaro', 'Familia Murciélago', 'Vuelo Terapéutico', 'Modificadores']);

  useEffect(() => {
    if (isMobile) {
      setOpenAccordion([]);
    } else {
      setOpenAccordion(['Fundamentales', 'Familia Trono', 'Familia Pájaro', 'Familia Murciélago', 'Vuelo Terapéutico', 'Modificadores']);
    }
  }, [isMobile]);

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
    <Card className="w-full lg:w-1/3 flex flex-col">
      <CardHeader>
        <CardTitle>Elementos</CardTitle>
        <div className="space-y-4 pt-2">
          <Input 
            placeholder="Buscar en todas las categorías..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
           <div>
            <Label className="text-sm font-medium">Modo de Duración por Defecto</Label>
            <RadioGroup 
                value={defaultDurationMode} 
                onValueChange={(value) => setDefaultDurationMode(value as 'seconds' | 'quantity')} 
                className="flex items-center space-x-4 mt-1"
              >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="seconds" id="seconds-mode" />
                    <Label htmlFor="seconds-mode" className="text-sm font-normal">Por Segundos</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="quantity" id="quantity-mode" />
                    <Label htmlFor="quantity-mode" className="text-sm font-normal">Por Cantidad</Label>
                </div>
            </RadioGroup>
          </div>
          
           {defaultDurationMode === 'seconds' ? (
                <div>
                    <Label htmlFor="default-duration" className="text-sm font-medium">Duración (s)</Label>
                    <Input 
                    id="default-duration"
                    type="number"
                    value={defaultSeconds}
                    onChange={(e) => setDefaultSeconds(parseInt(e.target.value, 10) || 1)}
                    className="mt-1"
                    min="1"
                    />
                </div>
           ) : (
             <div className="grid grid-cols-2 gap-2">
                <div>
                    <Label htmlFor="default-quantity" className="text-sm font-medium">Cantidad</Label>
                    <Input 
                    id="default-quantity"
                    type="number"
                    value={defaultQuantity}
                    onChange={(e) => setDefaultQuantity(parseInt(e.target.value, 10) || 1)}
                    className="mt-1"
                    min="1"
                    />
                </div>
                 <div>
                    <Label htmlFor="default-secs-per-rep" className="text-sm font-medium">Segs/Rep</Label>
                    <Input 
                    id="default-secs-per-rep"
                    type="number"
                    value={defaultSecondsPerRep}
                    onChange={(e) => setDefaultSecondsPerRep(parseInt(e.target.value, 10) || 1)}
                    className="mt-1"
                    min="1"
                    />
                </div>
             </div>
           )}
        </div>
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
                <Accordion type="multiple" value={openAccordion} onValueChange={setOpenAccordion}>
                    <AccordionItem value="all-items">
                        <AccordionTrigger>Todos los elementos</AccordionTrigger>
                        <AccordionContent>
                           {allItems.map(item => {
                              const itemType = (item as any).itemType || 'pose';
                              const uniqueKey = `${itemType}-${item.id}`;
                              return <DraggableItem key={uniqueKey} item={item} type={itemType} nameDisplay={nameDisplay} />;
                           })}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="fundamentals">
                <PaletteAccordion title="Fundamentales" items={categorizedPoses.staticFundamentals} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Fundamentales']}>
                  {categorizedPoses.staticFundamentals.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Familia Trono" items={categorizedPoses.throneFamily} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Familia Trono']}>
                   {categorizedPoses.throneFamily.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Familia Pájaro" items={categorizedPoses.birdFamily} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Familia Pájaro']}>
                   {categorizedPoses.birdFamily.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Familia Murciélago" items={categorizedPoses.batFamily} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Familia Murciélago']}>
                   {categorizedPoses.batFamily.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Vuelo Terapéutico" items={categorizedPoses.therapeutic} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Vuelo Terapéutico']}>
                   {categorizedPoses.therapeutic.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
              </TabsContent>

              <TabsContent value="balances">
                <PaletteAccordion title="Familia Estrella" items={categorizedPoses.starFamily} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Familia Estrella']}>
                   {categorizedPoses.starFamily.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Inversiones sobre Hombros" items={categorizedPoses.shoulderstands} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Inversiones sobre Hombros']}>
                  {categorizedPoses.shoulderstands.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
                <PaletteAccordion title="Inversiones sobre Manos" items={categorizedPoses.handstands} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Inversiones sobre Manos']}>
                   {categorizedPoses.handstands.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
              </TabsContent>

               <TabsContent value="dynamics">
                  <PaletteAccordion title="Transiciones" items={categorizedPoses.transitions} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Transiciones']}>
                     {categorizedPoses.transitions.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Lavadoras" items={categorizedPoses.washingMachines} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Lavadoras']}>
                     {categorizedPoses.washingMachines.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Flujos" items={categorizedPoses.flows} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Flujos']}>
                     {categorizedPoses.flows.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Whips" items={categorizedPoses.whips} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Whips']}>
                     {categorizedPoses.whips.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Icarian" items={categorizedPoses.icarian} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Icarian']}>
                    {categorizedPoses.icarian.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
              </TabsContent>
              
              <TabsContent value="standing">
                <PaletteAccordion title="Standing Acro" items={categorizedPoses.standing} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Standing Acro']}>
                    {categorizedPoses.standing.map(item => <DraggableItem key={item.id} item={item} type={getItemType(item)} nameDisplay={nameDisplay} />)}
                </PaletteAccordion>
              </TabsContent>

              <TabsContent value="warmup">
                  <PaletteAccordion title="Ejercicios de Calentamiento" items={filteredExercises} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Ejercicios de Calentamiento']}>
                    {filteredExercises.map(ex => <DraggableItem key={ex.id} item={ex} type={ItemTypes.EXERCISE} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
              </TabsContent>

              <TabsContent value="extras">
                  <PaletteAccordion title="Modificadores" items={modifiers.filter(filterItem)} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Modificadores']}>
                    {modifiers.filter(filterItem).map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.MODIFIER} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Conceptos" items={concepts.filter(filterItem)} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Conceptos']}>
                     {concepts.filter(filterItem).map(item => <DraggableItem key={item.id} item={item} type={ItemTypes.CONCEPT} nameDisplay={nameDisplay} />)}
                  </PaletteAccordion>
                  <PaletteAccordion title="Asanas" items={asanas.filter(filterItem)} value={openAccordion} onValueChange={setOpenAccordion} type="multiple" defaultValue={isMobile ? [] : ['Asanas']}>
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

    