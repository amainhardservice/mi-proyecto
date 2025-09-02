import React, { useState, useEffect } from 'react';
import type { Pose } from '@/types';
import { Button } from '@/components/ui/button';
import { Video, Image as ImageIcon } from 'lucide-react';
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
  initialDisplay?: 'description' | 'video' | 'image';
  accordionValue: string | string[];
  onAccordionChange: (value: string[]) => void;
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
  initialDisplay = 'description',
  accordionValue,
  onAccordionChange
}: PoseNodeProps) {
  const [activeView, setActiveView] = useState<ActiveView>('description');
  const hasVideo = !!pose.url_video;
  const hasImage = !!pose.url_imagen;
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
            return `https://www.youtube.com/embed/${videoId}?${params.toString()}&autoplay=1`;
        }
    } catch (e) {
        console.error("Invalid video URL", e);
    }
    return '';
  };
  
  const videoEmbedUrl = pose.url_video ? getYouTubeEmbedUrl(pose.url_video) : '';
  
  const handleIconClick = (view: ActiveView, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isExpanded) {
      if (activeView === view) {
        // If it's expanded and showing the content for this icon, collapse it.
        onAccordionChange(accordionValue.filter(id => id !== pose.id));
      } else {
        // If it's expanded but showing different content, just switch the view.
        setActiveView(view);
      }
    } else {
      // If it's not expanded, set the view and expand it.
      setActiveView(view);
      onAccordionChange([...accordionValue, pose.id]);
    }
  };


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
                if (isExpanded) {
                    setActiveView('description');
                }
             }} 
             className="p-2 hover:no-underline" 
           />
        </div>
      </div>
      <AccordionContent className="p-0 pt-2">
          {activeView === 'video' && videoEmbedUrl ? (
            <div className="p-1">
                <div className="aspect-video rounded-md overflow-hidden">
                    <iframe
                        src={videoEmbedUrl}
                        title={`Video de ${pose.nombre}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
           ) : activeView === 'image' && hasImage ? (
             <div className="p-1">
                <div className="relative aspect-video rounded-md overflow-hidden">
                    <Image
                        src={pose.url_imagen!}
                        alt={`Imagen de ${pose.nombre}`}
                        fill
                        className="object-cover"
                        data-ai-hint="acroyoga pose"
                    />
                </div>
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
                              <span className="text-primary/80 cursor-pointer hover:text-primary underline decoration-dotted">
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
                  <p className="whitespace-pre-wrap">{pose.narrativa_detallada.replace(/\*\*/g, '')}</p>
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
    </AccordionItem>
  );
}
