
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import type { SequenceItem, Pose, Concept, Exercise, PoseWithImage } from '@/types';
import { BookText, Bot, BrainCircuit, HeartHandshake, Dumbbell, Sparkles, Scale, MessageSquare, HeartPulse } from 'lucide-react';
import { getYouTubeEmbedUrl, cn } from '@/lib/utils';
import DetailedDescription from './DetailedDescription';
import { PoseDetailDialog } from './PoseDetailDialog';


type NameDisplay = 'es' | 'en' | 'both';

interface FlowBuilderDetailProps {
    item: SequenceItem | null;
    onUpdateNotes: (uniqueId: string, notes: string) => void;
    nameDisplay: NameDisplay;
    allPoses: Pose[];
    allConcepts: Concept[];
}

const getDisplayName = (item: any, displayMode: NameDisplay): string[] => {
    if (item.itemType === 'pose' || item.itemType === 'transition' || item.itemType === 'flow') {
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
    if (item.itemType === 'asana') { // It's an Asana
        const { nombre_sans, nombre_es } = item;
         switch (displayMode) {
          case 'en': return [nombre_sans];
          case 'es': return [nombre_es];
          case 'both': return [nombre_sans, `(${nombre_es})`];
          default: return [nombre_sans];
        }
    }
     if (item.itemType === 'exercise') { // It's an Exercise
        const parts = item.titulo.split('\n');
        const esName = parts[0];
        const enName = parts[1] || '';
        switch (displayMode) {
          case 'en': return [enName.replace(/[()]/g, '') || esName];
          case 'es': return [esName];
          case 'both': return [esName, enName];
          default: return [item.titulo];
        }
    }
    return [item.titulo]; // Concept or Modifier
};


export default function FlowBuilderDetail({ item, onUpdateNotes, nameDisplay, allPoses, allConcepts }: FlowBuilderDetailProps) {
  const [selectedPose, setSelectedPose] = useState<PoseWithImage | null>(null);
  
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

  const handleTitleClick = () => {
    if (item.itemType === 'pose') {
        setSelectedPose(item as PoseWithImage);
    }
  }

  const renderContent = () => {
    const videoUrl = ('url_video' in item && item.url_video) ? getYouTubeEmbedUrl(item.url_video) : null;

    switch(item.itemType) {
      case 'pose':
      case 'transition':
      case 'flow':
        const pose = item as import('@/types').Pose;
        return (
          <>
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                   <button onClick={handleTitleClick} className="text-left">
                     <CardTitle className="text-2xl font-bold text-primary mb-1 hover:underline underline-offset-4 decoration-dotted">
                        {titleParts[0]}
                     </CardTitle>
                   </button>
                  {titleParts.length > 1 && <p className="text-sm text-muted-foreground">{titleParts[1]}</p>}
                </div>
                <Badge variant="secondary">Nivel {pose.nivel}</Badge>
            </div>
            {pose.url_imagen && (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden my-4">
                <Image src={pose.url_imagen} alt={titleParts.join(' ')} fill className="object-cover" />
              </div>
            )}
            <p className="text-muted-foreground italic mb-4">{pose.descripcion}</p>
            {pose.narrativa_detallada && (
              <DetailedDescription 
                content={pose.narrativa_detallada} 
                concepts={allConcepts} 
                poses={allPoses} 
                nameDisplay={nameDisplay} 
              />
            )}
            
            {videoUrl && (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden my-4">
                <iframe
                    src={videoUrl}
                    title={`Video de ${titleParts[0]}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
              </div>
            )}

            {pose.musculos && (
                <div className="mt-4">
                    <h4 className="font-semibold text-lg text-primary mb-2">Músculos</h4>
                    {pose.musculos.base.length > 0 && <p><strong className="font-medium">Base:</strong> {pose.musculos.base.join(', ')}</p>}
                    {pose.musculos.volador.length > 0 && <p><strong className="font-medium">Volador:</strong> {pose.musculos.volador.join(', ')}</p>}
                </div>
            )}
            {pose.calibracion && (
                <div className="mt-4">
                    <h4 className="font-semibold text-lg text-primary mb-2">Calibración</h4>
                    {pose.calibracion.base.length > 0 && <p><strong className="font-medium">Base:</strong> {pose.calibracion.base.join(' ')}</p>}
                    {pose.calibracion.volador.length > 0 && <p><strong className="font-medium">Volador:</strong> {pose.calibracion.volador.join(' ')}</p>}
                    {pose.calibracion.observador.length > 0 && <p><strong className="font-medium">Observador:</strong> {pose.calibracion.observador.join(' ')}</p>}
                </div>
            )}
          </>
        );
      case 'concept':
        const concept = item as import('@/types').Concept;
        return (
            <>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">{titleParts[0]}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-2">
                        {getCategoryIcon(concept.category)}
                        <span>{concept.category}</span>
                    </Badge>
                </div>
                 <DetailedDescription 
                    content={concept.descripcion} 
                    concepts={allConcepts} 
                    poses={allPoses} 
                    nameDisplay={nameDisplay} 
                />
            </>
        )
      case 'asana':
        const asana = item as import('@/types').Asana & { notes: string };
        const asanaVideoUrl = asana.url_video ? getYouTubeEmbedUrl(asana.url_video) : null;
        return (
            <>
                <div className="flex flex-col">
                  <CardTitle className="text-2xl font-bold text-primary mb-1">{titleParts[0]}</CardTitle>
                  {titleParts.length > 1 && <p className="text-sm text-muted-foreground">{titleParts[1]}</p>}
                </div>
                <p className="whitespace-pre-wrap mt-4">{asana.descripcion}</p>
                 {asanaVideoUrl && (
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden my-4">
                    <iframe
                        src={asanaVideoUrl}
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
                 <DetailedDescription 
                    content={item.descripcion} 
                    concepts={allConcepts} 
                    poses={allPoses} 
                    nameDisplay={nameDisplay} 
                />
            </>
        )
       case 'exercise':
        const exercise = item as Exercise;
        return (
            <>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-2xl font-bold text-primary mb-1">{titleParts[0]}</CardTitle>
                        {titleParts.length > 1 && <p className="text-sm text-muted-foreground">{titleParts[1]}</p>}
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-2">
                        <HeartPulse className="h-4 w-4" />
                        <span>{exercise.enfasis}</span>
                    </Badge>
                </div>
                <p className="whitespace-pre-wrap mt-4">{exercise.descripcion}</p>
            </>
        )
      default:
        return <p>Detalles no disponibles.</p>
    }
  }

  return (
    <>
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
      <PoseDetailDialog
        pose={selectedPose}
        allPoses={allPoses}
        open={!!selectedPose}
        onOpenChange={(open) => !open && setSelectedPose(null)}
        concepts={allConcepts}
        nameDisplay={nameDisplay}
      />
    </>
  );
}
