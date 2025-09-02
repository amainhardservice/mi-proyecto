

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
import { Binary, Video, Image as ImageIcon, FileDown, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './ui/button';
import { exportPoseToPdf } from '@/lib/pdf';
import { toast } from '@/hooks/use-toast';


type PoseDetailDialogProps = {
  pose: PoseWithImage | null;
  allPoses: Pose[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  concepts: Concept[];
};

function ImageCarousel({ images, altPrefix }: { images?: string[], altPrefix: string }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg">
                   <Image
                      src={img}
                      alt={`${altPrefix} ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint="acroyoga pose"
                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}

function DetailedDescription({ content, concepts, poses }: { content?: string, concepts: Concept[], poses: Pose[] }) {
    if (!content) return null;
  
    const allItems = [
      ...concepts.map(c => ({ name: c.titulo, description: c.descripcion })),
      ...poses.map(p => ({ name: p.nombre.split('\n')[0], description: p.descripcion })),
    ];
  
    const parts = content.trim().split(/(\*\*.*?\*\*)/g).filter(Boolean);
  
    return (
      <p className="whitespace-pre-wrap leading-relaxed">
        <TooltipProvider>
          {parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              const term = part.substring(2, part.length - 2);
              const item = allItems.find(i => i.name.toLowerCase() === term.toLowerCase());
  
              if (item) {
                return (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <strong className="text-primary font-bold cursor-pointer underline decoration-dotted">
                        {term}
                      </strong>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-3 bg-card border-border shadow-lg rounded-md">
                      <p className="font-bold text-primary mb-2">{item.name}</p>
                      <p className="text-sm text-foreground/80">{item.description}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              } else {
                 return (
                  <strong key={index} className="font-bold text-foreground">
                    {term}
                  </strong>
                );
              }
            } else {
              return <React.Fragment key={index}>{part}</React.Fragment>;
            }
          })}
        </TooltipProvider>
      </p>
    );
}

export function PoseDetailDialog({
  pose,
  allPoses,
  open,
  onOpenChange,
  concepts,
}: PoseDetailDialogProps) {
  const [viewMode, setViewMode] = useState<'video' | 'image'>('image');
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (open && pose) {
      if (pose.url_video) {
        setViewMode('video');
      } else {
        setViewMode('image');
      }
    }
  }, [pose, open]);
  
  if (!pose) return null;

  const handleExport = async () => {
    if (!pose) return;
    setIsExporting(true);
    try {
        await exportPoseToPdf(pose);
    } catch(error) {
        console.error("Error exporting PDF:", error);
        toast({ title: 'Error de Exportación', description: 'Hubo un problema al generar el PDF. Por favor, inténtalo de nuevo.', variant: 'destructive' });
    } finally {
        setIsExporting(false);
    }
  };

  const isAcroPose = pose.type !== 'Thai-Massage';
  
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
        const urlObj = new URL(url);
        let videoId;
        if (urlObj.hostname === 'youtu.be') {
            videoId = urlObj.pathname.slice(1);
        } else if (urlObj.hostname.includes('youtube.com')) {
            videoId = urlObj.searchParams.get('v');
        }
        
        if (videoId) {
            const params = new URLSearchParams(urlObj.search);
            params.delete('v');
            return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
        }
    } catch (e) {
        console.error("Invalid video URL", e);
    }
    return '';
  };
  
  const videoEmbedUrl = pose.url_video ? getYouTubeEmbedUrl(pose.url_video) : '';
  const hasVideo = !!videoEmbedUrl;
  const hasImage = !!pose.url_imagen;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <DialogTitle className="text-3xl font-headline text-primary">
                {pose.nombre.split('\n').join(' / ')}
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
        </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-4 -mr-6">
           <div className="space-y-6">
              <section 
                className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center"
              >
                 {hasVideo && viewMode === 'video' ? (
                    <iframe 
                        className="w-full h-full"
                        src={videoEmbedUrl}
                        title={`Video de ${pose.nombre}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                 ) : hasImage ? (
                     <Image
                      src={pose.url_imagen!}
                      alt={`Postura de Acroyoga: ${pose.nombre}`}
                      fill
                      className="object-cover"
                      data-ai-hint="acroyoga pose"
                      unoptimized // Helps with some export scenarios
                    />
                 ) : (
                    <div className="text-center text-muted-foreground p-4">
                        <Binary size={48} className="mx-auto mb-2" />
                        <p>No hay contenido visual disponible.</p>
                    </div>
                 )}
                 {hasVideo && hasImage && (
                  <div className="absolute top-2 right-2 flex gap-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant={viewMode === 'video' ? 'secondary' : 'ghost'} size="icon" className="h-8 w-8 bg-black/30 hover:bg-black/50 text-white" onClick={() => setViewMode('video')}>
                            <Video className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ver Video</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant={viewMode === 'image' ? 'secondary' : 'ghost'} size="icon" className="h-8 w-8 bg-black/30 hover:bg-black/50 text-white" onClick={() => setViewMode('image')}>
                            <ImageIcon className="h-4 w-4" />
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ver Imagen</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                 )}
              </section>

              <Tabs defaultValue="description" className="w-full">
                 <TabsList className={cn("grid w-full", isAcroPose ? "grid-cols-3" : "grid-cols-1")}>
                  <TabsTrigger value="description">Descripción</TabsTrigger>
                  {isAcroPose && <TabsTrigger value="muscles">Músculos</TabsTrigger>}
                  {isAcroPose && <TabsTrigger value="calibration">Calibración</TabsTrigger>}
                </TabsList>
                <TabsContent value="description" className="mt-4 text-base text-foreground/90">
                   <p className="italic text-muted-foreground mb-4">{pose.descripcion}</p>
                   <DetailedDescription content={pose.narrativa_detallada} concepts={concepts} poses={allPoses} />
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
           </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
