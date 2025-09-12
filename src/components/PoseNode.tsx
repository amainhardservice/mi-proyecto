

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import type { Pose, Concept, PoseWithImage } from '@/types';
import { Button } from '@/components/ui/button';
import { Video, Image as ImageIcon, ChevronLeft, ChevronRight, Tags, Workflow, GitCommit, Repeat, Wind, Sparkles, PersonStanding, HeartHandshake, Star, Feather, Crown, ThumbsUp, Hand, GitBranch, Text, FlipHorizontal } from 'lucide-react';
import { cn, getYouTubeEmbedUrl } from '@/lib/utils';
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
import { Badge } from './ui/badge';


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
  isDimmed: boolean;
  isHighlighted: boolean;
  isFixed: boolean;
  isSelected: boolean;
  showCheckbox: boolean;
  onCheckedChange: (checked: boolean) => void;
  allPosesMap: Record<string, Pose>;
  allPoses: Pose[];
  concepts: Concept[];
  expandedView: ActiveView;
  onViewChange: (view: ActiveView) => void;
  accordionValue: string[];
  updatePositions: () => void;
};

const ImageCarouselNode = ({ images, alt, onImageClick }: { images: string[], alt: string, onImageClick: (e: React.MouseEvent) => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
        setIsFlipped(false); // Reset flip on image change
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev - 1));
        setIsFlipped(false); // Reset flip on image change
    };
    
    const toggleFlip = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFlipped(prev => !prev);
    };

    const imageUrl = `/api/image-proxy?url=${encodeURIComponent(images[currentIndex])}`;

    return (
        <div className="relative aspect-video rounded-md overflow-hidden group/carousel cursor-pointer" onClick={onImageClick}>
            <Image
                src={imageUrl}
                alt={`${alt} ${currentIndex + 1}`}
                fill
                className={cn("object-cover transition-transform duration-300", isFlipped && "transform -scale-x-100")}
                data-ai-hint="acroyoga pose"
            />
             <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-7 w-7 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                onClick={toggleFlip}
            >
                <FlipHorizontal className="h-5 w-5" />
            </Button>
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

export const PoseNode = ({ 
  pose, 
  displayName, 
  nameDisplay,
  onSelect, 
  onMouseEnter, 
  onMouseLeave,
  onClick,
  isDimmed,
  isHighlighted,
  isFixed,
  isSelected,
  showCheckbox,
  onCheckedChange,
  allPosesMap,
  allPoses,
  concepts,
  expandedView,
  onViewChange,
  accordionValue,
  updatePositions,
}: PoseNodeProps) => {
  const [selectedPrereq, setSelectedPrereq] = useState<PoseWithImage | null>(null);
  const wasOpen = useRef(accordionValue.includes(pose.id));

  useEffect(() => {
    const isOpen = accordionValue.includes(pose.id);
    if (isOpen !== wasOpen.current) {
      setTimeout(() => {
        updatePositions();
      }, 250); // Duration of accordion animation is 200ms
    }
    wasOpen.current = isOpen;
  }, [accordionValue, pose.id, updatePositions]);
  
  const allVideos = [pose.url_video, ...(pose.gallery_videos || [])].filter(Boolean) as string[];
  const allImages = [pose.url_imagen, ...(pose.gallery_images || [])].filter(Boolean) as string[];
  
  const hasVideo = allVideos.length > 0;
  const hasImage = allImages.length > 0;
  
  const prerequisites = (pose.prerequisites || []).map(id => allPosesMap[id]).filter(Boolean);

  const handleIconClick = (view: ActiveView, e: React.MouseEvent) => {
    e.stopPropagation();
    onViewChange(view);
  };
  
  const handlePrereqClick = (prereq: Pose, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedPrereq(prereq as PoseWithImage);
  }

  const getIcon = (item: Pose) => {
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
    return <GitBranch className="h-4 w-4 text-muted-foreground" />;
  }


  const renderAccordionContent = () => {
    if (expandedView === 'image' && hasImage) {
      return (
        <div className="p-1">
          <ImageCarouselNode images={allImages} alt={`Imagen de ${pose.nombre}`} onImageClick={(e) => { e.stopPropagation(); onClick(); }} />
        </div>
      );
    }

    if (expandedView === 'video' && hasVideo) {
      const embedUrl = getYouTubeEmbedUrl(allVideos[0]);
      if (embedUrl) {
        return (
          <div className="p-1 relative aspect-video rounded-md overflow-hidden">
            <iframe
              src={embedUrl}
              title={`Video de ${displayName}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
    }

    // Default to description view
    return (
      <div className="text-sm text-muted-foreground p-3 space-y-4">
        <p className="whitespace-pre-wrap">{pose.descripcion}</p>

        {pose.tags && pose.tags.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Tags className="h-4 w-4" />
              Etiquetas
            </h4>
            <div className="flex flex-wrap gap-1">
              {pose.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>
        )}

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
    );
  };


  return (
    <AccordionItem 
      value={pose.id} 
      className={cn(
        "border-b-0 transition-opacity duration-300",
        isDimmed && "opacity-40"
        )}
    >
      <div 
        className={cn(
            "flex items-center w-full bg-card rounded-lg border shadow-sm px-2 py-1.5 transition-all duration-300",
            isFixed && 'border-primary ring-2 ring-primary ring-offset-2 shadow-lg',
            isHighlighted && !isFixed && 'border-primary/50 bg-primary/5 shadow-md',
            isSelected && 'border-accent shadow-md',
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {showCheckbox && <Checkbox checked={isSelected} onCheckedChange={onCheckedChange} className="mr-2" />}
        
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mr-2 cursor-pointer" onClick={onClick}>
            {getIcon(pose)}
        </div>
        
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
           <AccordionTrigger 
             onClick={(e) => handleIconClick('description', e)}
             className={cn("p-2 hover:no-underline [&>svg]:size-5", expandedView === 'description' ? 'text-accent' : 'text-primary')} 
           >
              <Text />
           </AccordionTrigger>
          {hasImage && (
              <AccordionTrigger 
                onClick={(e) => handleIconClick('image', e)}
                className={cn("p-2 hover:no-underline [&>svg]:size-5", expandedView === 'image' ? 'text-accent' : 'text-primary')}
                aria-label="Show image"
              >
                <ImageIcon />
              </AccordionTrigger>
          )}
          {hasVideo && (
              <AccordionTrigger
                onClick={(e) => handleIconClick('video', e)}
                className={cn("p-2 hover:no-underline [&>svg]:size-5", expandedView === 'video' ? 'text-accent' : 'text-primary')}
                aria-label="Play video"
              >
                <Video />
              </AccordionTrigger>
          )}
        </div>
      </div>
      <AccordionContent className="p-0 pt-2">
        {renderAccordionContent()}
      </AccordionContent>
      <PoseDetailDialog
        pose={selectedPrereq}
        allPoses={allPoses}
        open={!!selectedPrereq}
        onOpenChange={(open) => !open && setSelectedPrereq(null)}
        concepts={concepts}
        nameDisplay={nameDisplay}
      />
    </AccordionItem>
  );
};
PoseNode.displayName = 'PoseNode';



