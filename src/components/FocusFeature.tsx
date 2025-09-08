
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import type { Pose, Concept, PoseWithImage } from '@/types';
import { PoseDetailDialog } from './PoseDetailDialog';
import { allPosesData, allConceptsData } from '@/lib/firestore-client';

type NameDisplay = 'es' | 'en' | 'both';

interface FocusFeatureProps {
  item: Pose | Concept;
  nameDisplay: NameDisplay;
}

const isPose = (item: Pose | Concept): item is Pose => {
  return 'nivel' in item;
};

export default function FocusFeature({ item, nameDisplay }: FocusFeatureProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPose, setSelectedPose] = useState<PoseWithImage | null>(null);

  const handleLearnMore = () => {
    if (isPose(item)) {
      setSelectedPose(item as PoseWithImage);
    } else {
      // For concepts, we might navigate or open a different kind of modal.
      // For now, let's just log it.
      console.log('Learn more about concept:', item.titulo);
      // Future: implement navigation to glossary section
    }
  };

  const title = isPose(item) ? item.nombre.split('\n').join(' / ') : item.titulo;
  const description = item.descripcion;
  const imageUrl = isPose(item) ? item.url_imagen : null;

  return (
    <>
      <Card className="w-full overflow-hidden border-accent/50 shadow-lg shadow-accent/10">
        <div className="grid md:grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Foco del Día</h3>
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
          {imageUrl ? (
            <div className="relative min-h-[200px] md:min-h-0">
              <Image 
                src={imageUrl} 
                alt={title} 
                fill 
                className="object-cover" 
                data-ai-hint="acroyoga pose"
              />
            </div>
          ) : (
            <div className="bg-secondary/50 flex items-center justify-center p-6">
              <div className="text-center text-muted-foreground">
                  <Sparkles size={48} className="mx-auto mb-2 text-accent/50" />
                  <p className="font-semibold">{item.category}</p>
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
            nameDisplay={nameDisplay}
        />
      )}
    </>
  );
}
