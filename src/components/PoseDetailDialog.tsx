

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
import DetailedDescription from './DetailedDescription';


type PoseDetailDialogProps = {
  pose: PoseWithImage | null;
  allPoses: Pose[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  concepts: Concept[];
};

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


function MediaCarousel({ images, videos, altPrefix }: { images: string[], videos: string[], altPrefix: string }) {
  if (images.length === 0 && videos.length === 0) {
    return (
        <div className="text-center text-muted-foreground p-4">
            <Binary size={48} className="mx-auto mb-2" />
            <p>No hay contenido visual disponible.</p>
        </div>
    );
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {videos.map((videoUrl, index) => {
            const embedUrl = getYouTubeEmbedUrl(videoUrl);
            if (!embedUrl) return null;
            return (
                <CarouselItem key={`video-${index}`}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg">
                        <iframe 
                            className="w-full h-full"
                            src={embedUrl}
                            title={`${altPrefix} Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
            );
        })}
        {images.map((img, index) => (
          <CarouselItem key={`image-${index}`}>
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
      {(images.length + videos.length) > 1 && (
        <>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </>
      )}
    </Carousel>
  );
}


export function PoseDetailDialog({
  pose,
  allPoses,
  open,
  onOpenChange,
  concepts,
}: PoseDetailDialogProps) {
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
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
    
  const allImages = [pose.url_imagen, ...(pose.gallery_images || [])].filter(Boolean) as string[];
  const allVideos = [pose.url_video, ...(pose.gallery_videos || [])].filter(Boolean) as string[];

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
                <MediaCarousel 
                    images={allImages}
                    videos={allVideos}
                    altPrefix={`Postura de Acroyoga: ${pose.nombre}`}
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
