import React, { useState, useEffect } from 'react';
import type { Pose, Concept, PoseWithImage } from '@/types';
import { Button } from '@/components/ui/button';
import { Video, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from './ui/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image';
import DetailedDescription from './DetailedDescription';
import { PoseDetailDialog } from './PoseDetailDialog';


type NameDisplay = 'es' | 'en' | 'both';
type ActiveView = 'description' | 'video' | 'image';

type PoseNodeProps = {
  pose: Pose;
  displayName: string;
  nameDisplay: NameDisplay;
  onSelect: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isHighlighted: boolean;
  isFixed: boolean;
  isSelected: boolean;
  showCheckbox: boolean;
  onCheckedChange: (checked: boolean) => void;
  allPosesMap: Record<string, Pose>;
  allPoses: Pose[];
  concepts: Concept[];
  initialDisplay?: 'description' | 'video' | 'image';
  accordionValue: string | string[];
  onAccordionChange: (value: string[]) => void;
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


const ImageCarouselNode = ({ images, alt, onImageClick }: { images: string[], alt: string, onImageClick: (e: React.MouseEvent) => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative aspect-video rounded-md overflow-hidden group/carousel" onClick={onImageClick}>
            <Image
                src={images[currentIndex]}
                alt={`${alt} ${currentIndex + 1}`}
                fill
                className="object-cover"
                data-ai-hint="acroyoga pose"
            />
            {images.length > 1 && (
                <>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute left-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        onClick={nextImage}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </>
            )}
        </div>
    );
};

const VideoCarouselNode = ({ videos, title }: { videos: string[], title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const nextVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const embedUrl = getYouTubeEmbedUrl(videos[currentIndex]);
    
    if (!embedUrl) return null;

    return (
        <div className="relative aspect-video rounded-md overflow-hidden group/carousel">
            <iframe
                src={`${embedUrl}&autoplay=1`}
                title={`Video de ${title}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {videos.length > 1 && (
                 <>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute left-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        onClick={prevVideo}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        onClick={nextVideo}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </>
            )}
        </div>
    );
};


export function PoseNode({ 
  pose, 
  displayName, 
  nameDisplay,
  onSelect, 
  onMouseEnter, 
  onMouseLeave,
  onClick,
  isHighlighted,
  isFixed,
  isSelected,
  showCheckbox,
  onCheckedChange,
  allPosesMap,
  allPoses,
  concepts,
  initialDisplay = 'description',
  accordionValue,
  onAccordionChange
}: PoseNodeProps) {
  const [activeView, setActiveView] = useState<ActiveView>('description');
  const [selectedPrereq, setSelectedPrereq] = useState<PoseWithImage | null>(null);
  
  const allVideos = [pose.url_video, ...(pose.gallery_videos || [])].filter(Boolean) as string[];
  const allImages = [pose.url_imagen, ...(pose.gallery_images || [])].filter(Boolean) as string[];
  
  const hasVideo = allVideos.length > 0;
  const hasImage = allImages.length > 0;
  
  const prerequisites = pose.prerequisites.map(id => allPosesMap[id]).filter(Boolean);

  const isExpanded = Array.isArray(accordionValue) && accordionValue.includes(pose.id);

  useEffect(() => {
    if (isExpanded) {
      if (initialDisplay !== 'description') {
        setActiveView(initialDisplay);
      }
    } else {
      setActiveView('description');
    }
  }, [isExpanded, initialDisplay]);
    
  const handleIconClick = (view: ActiveView, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (view === 'description' && !isExpanded) {
        onAccordionChange([...(accordionValue as string[]), pose.id]);
        return;
    }

    if (isExpanded) {
      if (activeView === view) {
        onAccordionChange((accordionValue as string[]).filter(id => id !== pose.id));
      } else {
        setActiveView(view);
      }
    } else {
      setActiveView(view);
      onAccordionChange([...(accordionValue as string[]), pose.id]);
    }
  };
  
  const handlePrereqClick = (prereq: Pose, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedPrereq(prereq as PoseWithImage);
  }


  return (
    <AccordionItem 
      value={pose.id} 
      className="border-b-0"
    >
      <div 
        className={cn(
            "flex items-center w-full bg-card rounded-lg border shadow-sm px-2 py-1.5 transition-all duration-300",
            isFixed && 'border-primary/80 shadow-lg',
            isHighlighted && !isFixed && 'border-primary/50 bg-primary/10',
            isSelected && 'border-accent shadow-md',
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {showCheckbox && <Checkbox checked={isSelected} onCheckedChange={onCheckedChange} className="mr-2" />}
        <div
          className={cn(
            "flex-1 text-left text-sm font-semibold cursor-pointer",
             isHighlighted ? 'text-primary' : 'text-foreground/80'
          )}
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          {displayName.split('\n').map((line, index) => (
            <span key={index} className={cn(
              'block',
              index === 1 && 'text-xs opacity-70'
            )}>
              {line}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 pl-2">
          {hasImage && (
              <Button
                variant="ghost"
                size="icon"
                className={cn("h-8 w-8", activeView === 'image' && isExpanded ? 'text-accent bg-accent/10' : 'text-primary')}
                onClick={(e) => handleIconClick('image', e)}
                aria-label="Show image"
              >
                <ImageIcon className="h-5 w-5" />
              </Button>
          )}
          {hasVideo && (
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8", activeView === 'video' && isExpanded ? 'text-accent bg-accent/10' : 'text-primary')}
              onClick={(e) => handleIconClick('video', e)}
              aria-label="Play video preview"
            >
              <Video className="h-5 w-5" />
            </Button>
          )}
          <AccordionTrigger 
             onClick={(e) => {
                e.stopPropagation();
                if (isExpanded && activeView !== 'description') {
                    setActiveView('description');
                } else if(isExpanded) {
                    onAccordionChange((accordionValue as string[]).filter(id => id !== pose.id));
                } else {
                    setActiveView('description');
                    onAccordionChange([...(accordionValue as string[]), pose.id]);
                }
             }} 
             className="p-2 hover:no-underline" 
           />
        </div>
      </div>
      <AccordionContent className="p-0 pt-2">
          {activeView === 'video' && hasVideo ? (
            <div className="p-1">
                <VideoCarouselNode videos={allVideos} title={pose.nombre} />
            </div>
           ) : activeView === 'image' && hasImage ? (
             <div className="p-1">
                <ImageCarouselNode images={allImages} alt={`Imagen de ${pose.nombre}`} onImageClick={(e) => {e.stopPropagation(); onSelect();}} />
             </div>
           ) : (
             <div className="text-sm text-muted-foreground p-3 space-y-4">
              <p className="whitespace-pre-wrap">{pose.descripcion}</p>
              
               {prerequisites.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {nameDisplay === 'en' ? 'Prerequisites:' : 'Prerrequisitos:'}
                  </h4>
                   <TooltipProvider>
                    <ul className="space-y-1">
                      {prerequisites.map(prereq => (
                        <li key={prereq.id}>
                           <Tooltip>
                            <TooltipTrigger asChild>
                              <span 
                                className="text-primary/80 cursor-pointer hover:text-primary underline decoration-dotted"
                                onClick={(e) => handlePrereqClick(prereq, e)}
                              >
                                {prereq.nombre.split('\n')[nameDisplay === 'es' ? 0 : 1] || prereq.nombre.split('\n')[0]}
                              </span>
                            </TooltipTrigger>
                             <TooltipContent className="max-w-xs p-3 bg-card border-border shadow-lg rounded-md">
                              <p className="font-bold text-primary mb-2">{prereq.nombre.split('\n').join(' / ')}</p>
                              <p className="text-sm text-foreground/80">{prereq.descripcion}</p>
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </TooltipProvider>
                </div>
              )}
             
              {pose.narrativa_detallada && (
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Narrativa Detallada</h4>
                  <DetailedDescription content={pose.narrativa_detallada} concepts={concepts} poses={allPoses} nameDisplay={nameDisplay} />
                </div>
              )}

              {pose.musculos && (pose.musculos.base.length > 0 || pose.musculos.volador.length > 0) && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Músculos</h4>
                  {pose.musculos.base.length > 0 && (
                    <div className="mb-1">
                      <h5 className="font-semibold text-primary/80 text-xs">Base:</h5>
                      <p className="text-xs">{pose.musculos.base.join(', ')}</p>
                    </div>
                  )}
                  {pose.musculos.volador.length > 0 && (
                     <div className="mb-1">
                      <h5 className="font-semibold text-primary/80 text-xs">Volador:</h5>
                      <p className="text-xs">{pose.musculos.volador.join(', ')}</p>
                    </div>
                  )}
                </div>
              )}

              {pose.calibracion && (pose.calibracion.base.length > 0 || pose.calibracion.volador.length > 0 || pose.calibracion.observador.length > 0) && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Calibración</h4>
                  {pose.calibracion.base.length > 0 && (
                     <div className="mb-1">
                      <h5 className="font-semibold text-primary/80 text-xs">Base:</h5>
                      <p className="text-xs">{pose.calibracion.base.join(' ')}</p>
                    </div>
                  )}
                   {pose.calibracion.volador.length > 0 && (
                     <div className="mb-1">
                      <h5 className="font-semibold text-primary/80 text-xs">Volador:</h5>
                      <p className="text-xs">{pose.calibracion.volador.join(' ')}</p>
                    </div>
                  )}
                   {pose.calibracion.observador.length > 0 && (
                    <div className="mb-1">
                      <h5 className="font-semibold text-primary/80 text-xs">Observador:</h5>
                      <p className="text-xs">{pose.calibracion.observador.join(' ')}</p>
                    </div>
                  )}
                </div>
              )}

            </div>
           )}
      </AccordionContent>
      <PoseDetailDialog
        pose={selectedPrereq}
        allPoses={allPoses}
        open={!!selectedPrereq}
        onOpenChange={(open) => !open && setSelectedPrereq(null)}
        concepts={concepts}
      />
    </AccordionItem>
  );
}
