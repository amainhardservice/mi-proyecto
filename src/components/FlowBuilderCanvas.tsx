'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useDrop, useDrag, DropTargetMonitor } from 'react-dnd';
import type { XYCoord } from 'dnd-core';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GripVertical, Trash2, Pencil } from 'lucide-react';
import type { SequenceItem } from '@/types';
import { cn } from '@/lib/utils';
import FlowNarrationControls from './FlowNarrationControls';
import { Input } from './ui/input';

type NameDisplay = 'es' | 'en' | 'both';

interface CanvasProps {
  sequence: SequenceItem[];
  onDrop: (item: { id: string; type: string }) => void;
  onSelectItem: (uniqueId: string) => void;
  selectedItemId: string | null;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  nameDisplay: NameDisplay;
  onDeleteItem: (uniqueId: string) => void;
  onCopyToClipboard: () => void;
  isNarrating: boolean;
  onToggleNarration: () => void;
  repeatNarration: boolean;
  setRepeatNarration: (repeat: boolean) => void;
  narratedItemId: string | null;
  forceEnglishNarration: boolean;
  setForceEnglishNarration: (force: boolean) => void;
  showForceEnglishNarrationSwitch: boolean;
  narrationProgress: {
    currentItemTimeLeft: number;
    repetitionCount: number;
    totalPracticeTime: number;
  };
  getItemDuration: (item: SequenceItem) => number;
  sequenceTitle: string;
  setSequenceTitle: (title: string) => void;
}

const ItemTypes = {
  CARD: 'card',
  POSE: 'pose',
  CONCEPT: 'concept',
  MODIFIER: 'modifier',
  ASANA: 'asana',
  EXERCISE: 'exercise',
  TRANSITION: 'transition',
  FLOW: 'flow',
  WHIP: 'whip',
  ICARIAN: 'icarian',
  L_BASING: 'l-basing',
  STANDING: 'standing',
  THAI_MASSAGE: 'thai-massage',
  THERAPEUTIC: 'therapeutic',
  WASHING_MACHINE: 'washing-machine',
};

const getDisplayName = (item: any, displayMode: NameDisplay): string => {
    if (['pose', 'transition', 'flow', 'whip', 'icarian', 'l-basing', 'standing', 'thai-massage', 'therapeutic', 'washing-machine'].includes(item.itemType)) {
        const parts = item.nombre.split('\n');
        const esName = parts[0];
        const enName = parts[1] || '';
        switch (displayMode) {
          case 'en': return enName.replace(/[()]/g, '') || esName;
          case 'es': return esName;
          case 'both': return esName; // Just show spanish in the list
          default: return item.nombre;
        }
    }
    if (item.itemType === 'asana') { // It's an Asana
        const { nombre_sans, nombre_es } = item;
         switch (displayMode) {
          case 'en': return nombre_sans;
          case 'es': return nombre_es;
          case 'both': return nombre_sans; // Just show sanskrit in the list
          default: return nombre_sans;
        }
    }
     if (item.itemType === 'exercise') {
        const titleParts = item.titulo.split('\n');
        const esTitle = titleParts[0];
        const enTitle = titleParts[1] || '';
         switch (displayMode) {
            case 'en': return enTitle.replace(/[()]/g, '') || esTitle;
            case 'es': return esTitle;
            case 'both': return esTitle; // Just show spanish in the list
            default: return esTitle;
        }
    }
    // Concept or Modifier
    return item.titulo;
};

const getItemTotalDuration = (item: SequenceItem) => {
    if (item.durationMode === 'quantity') {
        return item.quantity * item.secondsPerRep;
    }
    return item.duration;
};


const CanvasItem = ({ item, index, onSelectItem, selectedItemId, moveItem, nameDisplay, onDeleteItem, isNarrated }: { item: SequenceItem, index: number, onSelectItem: (id: string) => void, selectedItemId: string | null, moveItem: (dragIndex: number, hoverIndex: number) => void, nameDisplay: NameDisplay, onDeleteItem: (id: string) => void, isNarrated: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.CARD,
    item: () => ({ id: item.uniqueId, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  
  const getTitle = () => {
    return getDisplayName(item, nameDisplay);
  };
  
  const durationText = item.durationMode === 'quantity'
    ? `${item.quantity} x ${item.secondsPerRep}s`
    : `${item.duration}s`;

  return (
    <div
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      className={cn(
        "mb-2 p-2 border rounded-lg cursor-pointer flex items-center gap-2 group transition-all duration-300",
        isNarrated ? 'border-accent ring-2 ring-accent shadow-lg' :
        item.uniqueId === selectedItemId ? 'border-primary ring-2 ring-primary' : 'border-border bg-card'
      )}
      onClick={() => onSelectItem(item.uniqueId)}
    >
      <div ref={preview} className="flex-grow">
          <div className="flex items-center">
            <span className="font-mono text-sm text-muted-foreground w-6 text-center">{index + 1}.</span>
            <GripVertical className="h-5 w-5 text-muted-foreground mr-2" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{getTitle()}</span>
              <span className="text-xs text-muted-foreground capitalize">{item.itemType} - {durationText}</span>
            </div>
          </div>
      </div>
      <button 
        className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity p-1 flex items-center justify-center rounded hover:bg-destructive/10"
        onClick={(e) => {
            e.stopPropagation();
            onDeleteItem(item.uniqueId);
        }}
      >
        <Trash2 className="h-4 w-4 text-destructive" />
      </button>
    </div>
  );
};


export default function FlowBuilderCanvas({ 
    sequence, 
    onDrop, 
    onSelectItem, 
    selectedItemId, 
    moveItem, 
    nameDisplay, 
    onDeleteItem, 
    onCopyToClipboard, 
    isNarrating, 
    onToggleNarration, 
    repeatNarration, 
    setRepeatNarration, 
    narratedItemId, 
    forceEnglishNarration, 
    setForceEnglishNarration, 
    showForceEnglishNarrationSwitch, 
    narrationProgress, 
    getItemDuration,
    sequenceTitle,
    setSequenceTitle,
}: CanvasProps) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: Object.values(ItemTypes).filter(t => t !== 'card'),
    drop: (item: { id: string; type: string }) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditingTitle) {
      titleInputRef.current?.focus();
      titleInputRef.current?.select();
    }
  }, [isEditingTitle]);

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
    if (!sequenceTitle.trim()) {
      setSequenceTitle("Mi Secuencia");
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTitleBlur();
    }
    if (e.key === 'Escape') {
      setIsEditingTitle(false);
      // Optionally reset title to original if needed
    }
  };


  const isActive = canDrop && isOver;

  const totalDuration = sequence.reduce((sum, item) => sum + getItemDuration(item), 0);
  const narratedItem = sequence.find(i => i.uniqueId === narratedItemId);
  const narratedItemDuration = narratedItem ? getItemDuration(narratedItem) : 0;


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  const totalPracticeTimeMinutes = Math.ceil(narrationProgress.totalPracticeTime * (narrationProgress.repetitionCount + 1) / 60);

  return (
    <Card ref={drop} className={cn(
        "w-full md:w-1/3 flex flex-col h-[520px] md:h-auto lg:flex-grow",
        isActive ? "bg-accent/20" : ""
    )}>
      <CardHeader className="flex flex-row items-center justify-between">
          <div className="group relative">
            {isEditingTitle ? (
              <Input
                ref={titleInputRef}
                type="text"
                value={sequenceTitle}
                onChange={(e) => setSequenceTitle(e.target.value)}
                onBlur={handleTitleBlur}
                onKeyDown={handleTitleKeyDown}
                className="text-lg font-bold p-0 border-0 shadow-none focus-visible:ring-0 h-auto"
              />
            ) : (
              <CardTitle
                className="text-lg font-bold cursor-pointer"
                onClick={() => setIsEditingTitle(true)}
              >
                {sequenceTitle}
                <Pencil className="h-3 w-3 absolute top-0.5 -right-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardTitle>
            )}
          </div>
          <FlowNarrationControls 
            isNarrating={isNarrating}
            onToggleNarration={onToggleNarration}
            repeat={repeatNarration}
            onToggleRepeat={() => setRepeatNarration(!repeatNarration)}
            onCopyToClipboard={onCopyToClipboard}
            forceEnglishNarration={forceEnglishNarration}
            onToggleForceEnglishNarration={() => setForceEnglishNarration(!forceEnglishNarration)}
            showForceEnglishNarrationSwitch={showForceEnglishNarrationSwitch}
          />
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        {isNarrating && (
          <div className="text-xs text-muted-foreground mb-2 p-2 bg-secondary/50 rounded-md grid grid-cols-2 gap-x-4 gap-y-1">
              <div>
                <span>Progreso: </span>
                <span className="font-mono font-semibold text-foreground">{narrationProgress.currentItemTimeLeft}s / {narratedItemDuration}s</span>
              </div>
              <div>
                <span>Repetición: </span>
                <span className="font-mono font-semibold text-foreground">{narrationProgress.repetitionCount + 1}</span>
              </div>
               <div>
                <span>Práctica Total: </span>
                <span className="font-mono font-semibold text-foreground">~{totalPracticeTimeMinutes} min</span>
              </div>
          </div>
        )}
        <ScrollArea className="h-full pr-2">
          {sequence.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-center p-4">
              Arrastra y suelta elementos aquí para construir tu secuencia.
            </div>
          ) : (
            sequence.map((item, index) => (
              <CanvasItem 
                key={item.uniqueId} 
                item={item} 
                index={index}
                onSelectItem={onSelectItem}
                selectedItemId={selectedItemId}
                moveItem={moveItem}
                nameDisplay={nameDisplay}
                onDeleteItem={onDeleteItem}
                isNarrated={narratedItemId === item.uniqueId}
              />
            ))
          )}
        </ScrollArea>
      </CardContent>
       {sequence.length > 0 && (
         <CardFooter className="p-2 border-t text-xs text-muted-foreground justify-end gap-4">
            <div className="font-medium">
              <span>Total: </span>
              <span className="font-semibold text-foreground">{sequence.length} elementos</span>
            </div>
            <div className="font-medium">
              <span>Duración: </span>
               <span className="font-semibold text-foreground">{totalDuration}s ({formatTime(totalDuration)})</span>
            </div>
         </CardFooter>
      )}
    </Card>
  );
}

    