
'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import type { SequenceItem } from '@/types';
import { BookText, Bot, BrainCircuit, HeartHandshake, Dumbbell, Sparkles, Scale, MessageSquare } from 'lucide-react';
import { getYouTubeEmbedUrl } from '@/lib/utils';


type NameDisplay = 'es' | 'en' | 'both';

interface FlowBuilderDetailProps {
    item: SequenceItem | null;
    onUpdateNotes: (uniqueId: string, notes: string) => void;
    nameDisplay: NameDisplay;
}

const getDisplayName = (item: any, displayMode: NameDisplay): string[] => {
    if ('nombre' in item) { // It's a Pose
        const parts = item.nombre.split('\n');
        const esName = parts[0];
        const enName = parts[1] || '';
        switch (displayMode) {
          case 'en': return [enName.replace(/[()]/g, '') || esName];
          case 'es': return [esName];
          case 'both': return [esName, enName];
          default: return [item.nombre];
        }
    }
    if ('nombre_sans' in item) { // It's an Asana
        const { nombre_sans, nombre_es } = item;
         switch (displayMode) {
          case 'en': return [nombre_sans];
          case 'es': return [nombre_es];
          case 'both': return [nombre_sans, `(${nombre_es})`];
          default: return [nombre_sans];
        }
    }
    return [item.titulo]; // Concept or Modifier
};


export default function FlowBuilderDetail({ item, onUpdateNotes, nameDisplay }: FlowBuilderDetailProps) {
  
  if (!item) {
    return (
      <Card className="w-full md:w-1/3 flex-col hidden md:flex">
        <CardHeader>
          <CardTitle>Detalles</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full text-muted-foreground">
          Selecciona un elemento de tu secuencia para ver sus detalles.
        </CardContent>
      </Card>
    );
  }

  const titleParts = getDisplayName(item, nameDisplay);

  const getCategoryIcon = (category?: string) => {
    switch (category) {
        case 'Principios Fundamentales': return <Sparkles className="h-4 w-4" />;
        case 'Dinámicas y Transiciones': return <Bot className="h-4 w-4" />;
        case 'Roles y Estilos de Práctica': return <HeartHandshake className="h-4 w-4" />;
        case 'Comunicación y Seguridad': return <MessageSquare className="h-4 w-4" />;
        case 'Masaje Tailandés': return <HeartHandshake className="h-4 w-4" />;
        case 'Yoga': return <BrainCircuit className="h-4 w-4" />;
        default: return <BookText className="h-4 w-4" />;
    }
  }

  const renderContent = () => {
    switch(item.itemType) {
      case 'pose':
        return (
          <>
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <CardTitle className="text-2xl font-bold text-primary mb-1">{titleParts[0]}</CardTitle>
                  {titleParts.length > 1 && <p className="text-sm text-muted-foreground">{titleParts[1]}</p>}
                </div>
                <Badge variant="secondary">Nivel {item.nivel}</Badge>
            </div>
            {item.url_imagen && (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden my-4">
                <Image src={item.url_imagen} alt={titleParts.join(' ')} fill className="object-cover" />
              </div>
            )}
            <p className="text-muted-foreground italic mb-4">{item.descripcion}</p>
            {item.narrativa_detallada && <p className="whitespace-pre-wrap">{item.narrativa_detallada.replace(/\*\*/g, '')}</p>}
             {item.musculos && (
                <div className="mt-4">
                    <h4 className="font-semibold text-lg text-primary mb-2">Músculos</h4>
                    {item.musculos.base.length > 0 && <p><strong className="font-medium">Base:</strong> {item.musculos.base.join(', ')}</p>}
                    {item.musculos.volador.length > 0 && <p><strong className="font-medium">Volador:</strong> {item.musculos.volador.join(', ')}</p>}
                </div>
            )}
            {item.calibracion && (
                <div className="mt-4">
                    <h4 className="font-semibold text-lg text-primary mb-2">Calibración</h4>
                    {item.calibracion.base.length > 0 && <p><strong className="font-medium">Base:</strong> {item.calibracion.base.join(' ')}</p>}
                    {item.calibracion.volador.length > 0 && <p><strong className="font-medium">Volador:</strong> {item.calibracion.volador.join(' ')}</p>}
                    {item.calibracion.observador.length > 0 && <p><strong className="font-medium">Observador:</strong> {item.calibracion.observador.join(' ')}</p>}
                </div>
            )}
          </>
        );
      case 'concept':
        return (
            <>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">{titleParts[0]}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-2">
                        {getCategoryIcon(item.category)}
                        <span>{item.category}</span>
                    </Badge>
                </div>
                <p className="whitespace-pre-wrap">{item.descripcion}</p>
            </>
        )
      case 'asana':
        const asana = item as import('@/types').Asana & { notes: string };
        const embedUrl = asana.url_video ? getYouTubeEmbedUrl(asana.url_video) : null;
        return (
            <>
                <div className="flex flex-col">
                  <CardTitle className="text-2xl font-bold text-primary mb-1">{titleParts[0]}</CardTitle>
                  {titleParts.length > 1 && <p className="text-sm text-muted-foreground">{titleParts[1]}</p>}
                </div>
                <p className="whitespace-pre-wrap mt-4">{asana.descripcion}</p>
                 {embedUrl && (
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden my-4">
                    <iframe
                        src={embedUrl}
                        title={`Video de ${asana.nombre_es}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                  </div>
                )}
            </>
        )
       case 'modifier':
        return (
            <>
                <CardTitle className="text-2xl font-bold text-primary mb-2">{titleParts[0]}</CardTitle>
                <p className="whitespace-pre-wrap">{item.descripcion}</p>
            </>
        )
      default:
        return <p>Detalles no disponibles.</p>
    }
  }

  return (
    <Card className="w-full md:w-1/3 flex-col hidden md:flex">
      <CardHeader>
        <CardTitle>Detalles</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {renderContent()}
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-primary mb-2">Notas Personales</h4>
              <Textarea 
                placeholder="Añade tus propios consejos, recordatorios o puntos de enfoque aquí..."
                value={item.notes}
                onChange={(e) => onUpdateNotes(item.uniqueId, e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
