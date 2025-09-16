
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Star, Feather, Crown, ThumbsUp, Hand, GitBranch, Workflow, GitCommit, Repeat, Wind, PersonStanding, HeartHandshake, BookText, Bot, BrainCircuit, MessageSquare } from 'lucide-react';
import type { Pose, Concept, PoseWithImage } from '@/types';
import { PoseDetailDialog } from './PoseDetailDialog';
import { allPosesData, allConceptsData } from '@/lib/firestore-client';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { getYouTubeEmbedUrl, cn } from '@/lib/utils';
import { Badge } from './ui/badge';

interface FocusFeatureProps {
  item: Pose | Concept;
}

const isPose = (item: Pose | Concept): item is Pose => {
  return 'nivel' in item;
};

const getIcon = (item: Pose | Concept) => {
    if (isPose(item)) {
        switch(item.type) {
            case 'Flow': return <Workflow className="h-5 w-5 text-accent" />;
            case 'Transition': return <GitCommit className="h-5 w-5 text-accent" />;
            case 'Washing Machine': return <Repeat className="h-5 w-5 text-accent" />;
            case 'Whip': return <Wind className="h-5 w-5 text-accent" />;
            case 'Icarian': return <Sparkles className="h-5 w-5 text-accent" />;
            case 'Standing': return <PersonStanding className="h-5 w-5 text-accent" />;
            case 'Therapeutic': return <HeartHandshake className="h-5 w-5 text-accent" />;
            case 'L-Basing':
                if (item.tags?.includes('Familia Estrella')) return <Star className="h-5 w-5 text-accent" />;
                if (item.tags?.includes('Familia Pájaro')) return <Feather className="h-5 w-5 text-accent" />;
                if (item.tags?.includes('Familia Trono')) return <Crown className="h-5 w-5 text-accent" />;
                if (item.tags?.includes('Familia Murciélago')) return <ThumbsUp className="h-5 w-5 text-accent transform -scale-y-100" />;
                if (item.tags?.includes('Inversión sobre Manos') || item.tags?.includes('Inversión sobre Hombros')) return <Hand className="h-5 w-5 text-accent" />;
                return <GitBranch className="h-5 w-5 text-accent" />;
        }
    } else { // Concept
         switch (item.category) {
            case 'Principios Fundamentales': return <Sparkles className="h-5 w-5 text-accent" />;
            case 'Dinámicas y Transiciones': return <Bot className="h-5 w-5 text-accent" />;
            case 'Roles y Estilos de Práctica': return <HeartHandshake className="h-5 w-5 text-accent" />;
            case 'Comunicación y Seguridad': return <MessageSquare className="h-5 w-5 text-accent" />;
            case 'Masaje Tailandés': return <HeartHandshake className="h-5 w-5 text-accent" />;
            case 'Yoga': return <BrainCircuit className="h-5 w-5 text-accent" />;
            default: return <BookText className="h-5 w-5 text-accent" />;
        }
    }
    return <Sparkles className="h-5 w-5 text-accent" />;
}

const getFamilyTag = (item: Pose) => {
    if (!item.tags) return null;
    const familyTag = item.tags.find(tag => tag.startsWith('Familia'));
    if (familyTag) return familyTag;
    
    const typeMap: Record<string, string> = {
        'Flow': 'Flow',
        'Transition': 'Transición',
        'Washing Machine': 'Lavadora',
        'Whip': 'Whip',
        'Icarian': 'Icarian',
        'Standing': 'Standing',
        'Therapeutic': 'Terapéutico',
    };
    return typeMap[item.type] || null;
}

export default function FocusFeature({ item }: FocusFeatureProps) {
  const [selectedPose, setSelectedPose] = useState<PoseWithImage | null>(null);

  const handleLearnMore = () => {
    if (isPose(item)) {
      setSelectedPose(item as PoseWithImage);
    }
  };

  const title = isPose(item) ? item.nombre.split('\n').join(' / ') : item.titulo;
  const description = item.descripcion;

  const allImages = isPose(item) ? [item.url_imagen, ...(item.gallery_images || [])].filter(Boolean) as string[] : [];
  const allVideos = isPose(item) ? [item.url_video, ...(item.gallery_videos || [])].filter(Boolean) as string[] : [];

  const mediaItems = [
    ...allVideos.map((url, i) => ({ type: 'video' as const, src: url, id: `video-${i}` })),
    ...allImages.map((url, i) => ({ type: 'image' as const, src: url, id: `image-${i}` })),
  ];

  const Icon = getIcon(item);
  const familyTag = isPose(item) ? getFamilyTag(item) : item.category;

  return (
    <>
      <Card className="w-full overflow-hidden border-accent/50 shadow-lg shadow-accent/10">
        <div className="grid md:grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              {Icon}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{familyTag || 'Foco del Día'}</h3>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">{title}</h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {description}
            </p>
            {isPose(item) && (
              <Button onClick={handleLearnMore} className="self-start">
                Aprender Más
              </Button>
            )}
          </div>
          {mediaItems.length > 0 ? (
            <div className="relative min-h-[200px] md:min-h-0">
               <Carousel className="w-full h-full">
                  <CarouselContent>
                    {mediaItems.map((media, index) => (
                      <CarouselItem key={media.id}>
                        <Card className="h-full bg-black">
                          <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg h-full">
                             {media.type === 'image' ? (
                                <Image
                                    src={media.src}
                                    alt={`${title} media ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint="acroyoga pose"
                                />
                             ) : (
                                <iframe
                                    className="w-full h-full"
                                    src={getYouTubeEmbedUrl(media.src) || ''}
                                    title={`${title} video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                             )}
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {mediaItems.length > 1 && (
                    <>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                    </>
                  )}
                </Carousel>
            </div>
          ) : (
            <div className="bg-secondary/50 flex items-center justify-center p-6">
              <div className="text-center text-muted-foreground">
                  {Icon}
                  <p className="font-semibold mt-2">{familyTag}</p>
              </div>
            </div>
          )}
        </div>
      </Card>
      {isPose(item) && (
         <PoseDetailDialog
            pose={selectedPose}
            allPoses={allPosesData}
            open={!!selectedPose}
            onOpenChange={(open) => !open && setSelectedPose(null)}
            concepts={allConceptsData}
        />
      )}
    </>
  );
}
