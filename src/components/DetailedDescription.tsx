
import React from 'react';
import type { Concept, Pose } from '@/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface DetailedDescriptionProps {
  content?: string;
  concepts: Concept[];
  poses: Pose[];
}

export default function DetailedDescription({ content, concepts, poses }: DetailedDescriptionProps) {
    if (!content) return null;
  
    const allItems = [
      ...concepts.map(c => ({ name: c.titulo, description: c.descripcion })),
      ...poses.map(p => ({ name: p.nombre.split('\n')[0], description: p.descripcion })),
      // We could add modifiers and asanas here in the future if needed
    ];
  
    const parts = content.trim().split(/(\*\*.*?\*\*)/g).filter(Boolean);
  
    return (
      <div className="whitespace-pre-wrap leading-relaxed">
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
                      <div className="font-bold text-primary mb-2">{item.name}</div>
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
      </div>
    );
}
