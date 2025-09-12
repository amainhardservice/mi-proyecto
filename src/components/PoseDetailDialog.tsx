

'use client';

import Image from 'next/image';
import React, { useState, useEffect, useId } from 'react';
import type { Pose, PoseWithImage, Concept } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Binary, Video, Image as ImageIcon, FileDown, Loader2, Tags, ArrowRight, ArrowLeft, FlipHorizontal } from 'lucide-react';
import { cn, getYouTubeEmbedUrl } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './ui/button';
import { exportPoseToPdf } from '@/lib/pdf';
import { toast } from '@/hooks/use-toast';
import DetailedDescription from './DetailedDescription';

type NameDisplay = 'es' | 'en' | 'both';

type PoseDetailDialogProps = {
  pose: PoseWithImage | null;
  allPoses: Pose[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  concepts: Concept[];
  nameDisplay: NameDisplay;
};

const getDisplayName = (pose: Pose, displayMode: NameDisplay): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts.length > 1 ? parts[1].replace(/[()]/g, '') : esName;
    
    switch (displayMode) {
      case 'en': 
        return enName || esName;
      case 'es': 
        return esName;
      case 'both':
        if (enName && enName !== esName) {
          return `${esName} / ${enName}`;
        }
        return esName;
      default:
        return esName;
    }
};


function MediaCarouselItem({
  type,
  src,
  alt,
}: {
  type: 'image' | 'video';
  src: string;
  alt: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  if (type === 'video') {
    const embedUrl = getYouTubeEmbedUrl(src);
    if (!embedUrl) return null;
    return (
      <CarouselItem>
        <div className="p-1">
          <Card>
            <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title={alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    );
  }

  // type === 'image'
  return (
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg group">
            <Image
              src={src}
              alt={alt}
              fill
              className={cn(
                'object-cover transition-transform duration-300',
                isFlipped && 'transform -scale-x-100'
              )}
              data-ai-hint="acroyoga pose"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
              onClick={toggleFlip}
            >
              <FlipHorizontal className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}


function MediaCarousel({ images, videos, altPrefix }: { images: string[], videos: string[], altPrefix: string }) {
  if (images.length === 0 && videos.length === 0) {
    return (
        <div className="text-center text-muted-foreground p-4">
            <Binary size={48} className="mx-auto mb-2" />
            <p>No hay contenido visual disponible.</p>
        </div>
    );
  }

  const mediaItems = [
    ...videos.map((url, i) => ({ type: 'video' as const, src: url, id: `video-${i}` })),
    ...images.map((url, i) => ({ type: 'image' as const, src: url, id: `image-${i}` })),
  ];


  return (
    <Carousel className="w-full">
      <CarouselContent>
        {mediaItems.map((item, index) => (
           <MediaCarouselItem 
                key={item.id}
                type={item.type}
                src={item.src}
                alt={`${altPrefix} ${item.type} ${index + 1}`}
           />
        ))}
      </CarouselContent>
      {mediaItems.length > 1 && (
        <>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </>
      )}
    </Carousel>
  );
}

const ConnectedTransitions = ({ pose, allPoses, nameDisplay, onSelectTransition }: { pose: Pose, allPoses: Pose[], nameDisplay: NameDisplay, onSelectTransition: (pose: Pose) => void }) => {
    const transitions = allPoses.filter(p => p.type === 'Transition' || p.type === 'Flow');

    const outgoing = transitions.filter(t => t.originPoses?.includes(pose.id));
    const incoming = transitions.filter(t => t.destinationPoses?.includes(pose.id));

    if (outgoing.length === 0 && incoming.length === 0) return null;

    return (
        <section className="mt-6">
            <h3 className="font-semibold text-xl text-primary mb-4">Transiciones Conectadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold flex items-center gap-2 mb-2">
                        <ArrowRight className="h-4 w-4 text-accent" />
                        De Salida
                    </h4>
                    {outgoing.length > 0 ? (
                        <div className="space-y-2">
                            {outgoing.map(t => (
                                <Button key={t.id} variant="secondary" className="w-full justify-start" onClick={() => onSelectTransition(t)}>
                                    {getDisplayName(t, nameDisplay)}
                                </Button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">No hay transiciones de salida definidas.</p>
                    )}
                </div>
                <div>
                     <h4 className="font-semibold flex items-center gap-2 mb-2">
                        <ArrowLeft className="h-4 w-4 text-primary" />
                        De Llegada
                    </h4>
                    {incoming.length > 0 ? (
                         <div className="space-y-2">
                            {incoming.map(t => (
                                <Button key={t.id} variant="outline" className="w-full justify-start" onClick={() => onSelectTransition(t)}>
                                    {getDisplayName(t, nameDisplay)}
                                </Button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">No hay transiciones de llegada definidas.</p>
                    )}
                </div>
            </div>
        </section>
    );
};


export function PoseDetailDialog({
  pose,
  allPoses,
  open,
  onOpenChange,
  concepts,
  nameDisplay,
}: PoseDetailDialogProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [selectedTransition, setSelectedTransition] = useState<PoseWithImage | null>(null);

  useEffect(() => {
    // When the main dialog closes, also close the transition dialog
    if (!open) {
      setSelectedTransition(null);
    }
  }, [open]);
  
  if (!pose) return null;

  const handleExport = async () => {
    if (!pose) return;
    setIsExporting(true);
    try {
        await exportPoseToPdf(pose, nameDisplay);
    } catch(error) {
        console.error("Error exporting PDF:", error);
        toast({ title: 'Error de Exportación', description: 'Hubo un problema al generar el PDF. Por favor, inténtalo de nuevo.', variant: 'destructive' });
    } finally {
        setIsExporting(false);
    }
  };

  const handleSelectTransition = (transitionPose: Pose) => {
      setSelectedTransition(transitionPose as PoseWithImage);
  }

  const isAcroPose = pose.type !== 'Thai-Massage';
  const isStaticPose = !['Transition', 'Flow', 'Washing Machine'].includes(pose.type);
    
  const allImages = [pose.url_imagen, ...(pose.gallery_images || [])].filter(Boolean) as string[];
  const allVideos = [pose.url_video, ...(pose.gallery_videos || [])].filter(Boolean) as string[];

  const MainDialogContent = (
    <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col">
      <DialogHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <DialogTitle className="text-3xl font-headline text-primary">
              {getDisplayName(pose, nameDisplay)}
            </DialogTitle>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleExport} 
                disabled={isExporting}
                aria-label="Export to PDF"
              >
                {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
                Exportar PDF
              </Button>
          </div>
          <Badge variant="secondary" className="bg-accent text-accent-foreground text-sm shrink-0">
            Nivel {pose.nivel}
          </Badge>
        </div>
         {pose.tags && pose.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <Tags className="h-4 w-4 text-muted-foreground" />
                  {pose.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal">{tag}</Badge>
                  ))}
              </div>
          )}
      </DialogHeader>
      <div className="flex-1 overflow-y-auto pr-4 -mr-6">
         <div className="space-y-6">
            <section 
              className="relative w-full rounded-lg bg-muted/50 flex items-center justify-center"
            >
              <MediaCarousel 
                  images={allImages}
                  videos={allVideos}
                  altPrefix={pose.id}
               />
            </section>

            <Tabs defaultValue="description" className="w-full">
               <TabsList className={cn("grid w-full", isAcroPose ? "grid-cols-3" : "grid-cols-1")}>
                <TabsTrigger value="description">Descripción</TabsTrigger>
                {isAcroPose && <TabsTrigger value="muscles">Músculos</TabsTrigger>}
                {isAcroPose && <TabsTrigger value="calibration">Calibración</TabsTrigger>}
              </TabsList>
              <TabsContent value="description" className="mt-4 text-base text-foreground/90">
                 <div className="italic text-muted-foreground mb-4">{pose.descripcion}</div>
                 <DetailedDescription content={pose.narrativa_detallada} concepts={concepts} poses={allPoses} nameDisplay={nameDisplay}/>
              </TabsContent>
               {isAcroPose && (
                  <>
                      <TabsContent value="muscles" className="mt-4">
                          <div className="space-y-4">
                          {pose.musculos?.base && pose.musculos.base.length > 0 && (
                              <div>
                                  <h4 className="font-semibold text-primary">Base:</h4>
                                  <ul className="list-disc list-inside text-muted-foreground">
                                  {pose.musculos.base.map((m, i) => <li key={i}>{m}</li>)}
                                  </ul>
                              </div>
                          )}
                          {pose.musculos?.volador && pose.musculos.volador.length > 0 && (
                              <div>
                                  <h4 className="font-semibold text-primary">Volador:</h4>
                                  <ul className="list-disc list-inside text-muted-foreground">
                                  {pose.musculos.volador.map((m, i) => <li key={i}>{m}</li>)}
                                  </ul>
                              </div>
                          )}
                          </div>
                      </TabsContent>
                      <TabsContent value="calibration" className="mt-4">
                      <div className="space-y-4">
                          {pose.calibracion?.base && pose.calibracion.base.length > 0 && (
                              <div>
                              <h4 className="font-semibold text-primary">Base:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {pose.calibracion.base.map((c, i) => <li key={i}>{c}</li>)}
                              </ul>
                              </div>
                          )}
                          {pose.calibracion?.volador && pose.calibracion.volador.length > 0 && (
                              <div>
                              <h4 className="font-semibold text-primary">Volador:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {pose.calibracion.volador.map((c, i) => <li key={i}>{c}</li>)}
                              </ul>
                              </div>
                          )}
                          {pose.calibracion?.observador && pose.calibracion.observador.length > 0 && (
                              <div>
                              <h4 className="font-semibold text-primary">Observador:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {pose.calibracion.observador.map((c, i) => <li key={i}>{c}</li>)}
                              </ul>
                              </div>
                          )}
                      </div>
                      </TabsContent>
                  </>
              )}
            </Tabs>
            {isStaticPose && (
                <ConnectedTransitions 
                    pose={pose}
                    allPoses={allPoses}
                    nameDisplay={nameDisplay}
                    onSelectTransition={handleSelectTransition}
                />
            )}
         </div>
      </div>
    </DialogContent>
  );

  return (
    <>
      <Dialog open={open && !selectedTransition} onOpenChange={onOpenChange}>
        {MainDialogContent}
      </Dialog>

      {/* This is a nested dialog for showing transition details */}
      <PoseDetailDialog
        pose={selectedTransition}
        allPoses={allPoses}
        open={!!selectedTransition}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedTransition(null);
          }
        }}
        concepts={concepts}
        nameDisplay={nameDisplay}
      />
    </>
  );
}
