import type { Concept, Pose } from '@/types';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { LucideIcon, Aperture, Dna, Anchor, Heart, MessageCircle, Brain, Crown, Zap } from 'lucide-react';
import DetailedDescription from './DetailedDescription';

type NameDisplay = 'es' | 'en' | 'both';

type ConceptCardProps = {
  concept: Concept;
  allPoses: Pose[];
  allConcepts: Concept[];
  nameDisplay: NameDisplay;
};

// Map string names to actual Lucide components
const iconMap: { [key: string]: LucideIcon } = {
  Aperture,
  Dna,
  Anchor,
  Heart,
  MessageCircle,
  Brain,
  Crown,
  Zap,
};

export function ConceptCard({ concept, allPoses, allConcepts, nameDisplay }: ConceptCardProps) {
  const Icon = concept.simbolo ? iconMap[concept.simbolo] : undefined;
  
  return (
    <AccordionItem value={concept.id}>
      <AccordionTrigger className="text-lg hover:no-underline text-left">
        <div className="flex items-center gap-3">
          {Icon && concept.color && (
            <div className="flex items-center gap-2">
               <div 
                 className="h-3 w-3 rounded-full" 
                 style={{ backgroundColor: `hsl(${concept.color})` }}
               />
               <Icon className="h-5 w-5" style={{ color: `hsl(${concept.color})` }} />
            </div>
          )}
          <span>{concept.titulo}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap">
        <DetailedDescription 
            content={concept.descripcion} 
            concepts={allConcepts} 
            poses={allPoses} 
            nameDisplay={nameDisplay}
        />
      </AccordionContent>
    </AccordionItem>
  );
}
