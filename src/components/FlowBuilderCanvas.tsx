
'use client';

import React, { useRef } from 'react';
import { useDrop, useDrag, DropTargetMonitor } from 'react-dnd';
import type { XYCoord } from 'dnd-core';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GripVertical, Trash2 } from 'lucide-react';
import type { SequenceItem } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

type NameDisplay = 'es' | 'en' | 'both';

interface CanvasProps {
  sequence: SequenceItem[];
  onDrop: (item: { id: string; type: string }) => void;
  onSelectItem: (uniqueId: string) => void;
  selectedItemId: string | null;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  nameDisplay: NameDisplay;
  onDeleteItem: (uniqueId: string) => void;
}

const ItemTypes = {
  CARD: 'card',
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
          case 'both': return esName; // Just show spanish in the list
          default: return item.nombre;
        }
    }
    if ('nombre_sans' in item) { // It's an Asana
        const { nombre_sans, nombre_es } = item;
         switch (displayMode) {
          case 'en': return nombre_sans;
          case 'es': return nombre_es;
          case 'both': return nombre_sans; // Just show sanskrit in the list
          default: return nombre_sans;
        }
    }
    return item.titulo; // Concept or Modifier
};


const CanvasItem = ({ item, index, onSelectItem, selectedItemId, moveItem, nameDisplay, onDeleteItem }: { item: SequenceItem, index: number, onSelectItem: (id: string) => void, selectedItemId: string | null, moveItem: (dragIndex: number, hoverIndex: number) => void, nameDisplay: NameDisplay, onDeleteItem: (id: string) => void }) => {
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

  return (
    <div
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      className={cn(
        "mb-2 p-2 border rounded-lg cursor-pointer flex items-center gap-2 group",
        item.uniqueId === selectedItemId ? 'border-primary ring-2 ring-primary' : 'border-border bg-card'
      )}
      onClick={() => onSelectItem(item.uniqueId)}
    >
      <div ref={preview} className="flex-grow">
          <div className="flex items-center">
            <GripVertical className="h-5 w-5 text-muted-foreground mr-2" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{getTitle()}</span>
              <span className="text-xs text-muted-foreground capitalize">{item.itemType}</span>
            </div>
          </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
            e.stopPropagation();
            onDeleteItem(item.uniqueId);
        }}
      >
        <Trash2 className="h-4 w-4 text-destructive" />
      </Button>
    </div>
  );
};


export default function FlowBuilderCanvas({ sequence, onDrop, onSelectItem, selectedItemId, moveItem, nameDisplay, onDeleteItem }: CanvasProps) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.POSE, ItemTypes.CONCEPT, ItemTypes.ASANA, ItemTypes.MODIFIER],
    drop: (item: { id: string; type: string }) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <Card ref={drop} className={cn("w-full md:w-1/3 flex flex-col", isActive ? "bg-accent/20" : "")}>
      <CardHeader>
        <CardTitle>Mi Secuencia</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full">
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
              />
            ))
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
