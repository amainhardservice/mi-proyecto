
'use client';

import React, { useState } from 'react';
import type { Concept, Pose, PoseWithImage } from '@/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { PoseDetailDialog } from './PoseDetailDialog';

type NameDisplay = 'es' | 'en' | 'both';

const getDisplayName = (pose: Pose, displayMode: NameDisplay): string => {
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1] || '';

    switch (displayMode) {
      case 'en':
        return enName.replace(/[()]/g, '') || esName;
      case 'es':
      default:
        return esName;
    }
};

interface DetailedDescriptionProps {
  content?: string;
  concepts: Concept[];
  poses: Pose[];
  nameDisplay: NameDisplay;
}

export default function DetailedDescription({ content, concepts, poses, nameDisplay }: DetailedDescriptionProps) {
    const [selectedPose, setSelectedPose] = useState<PoseWithImage | null>(null);

    if (!content) return null;

    const allConceptsByName = concepts.reduce((acc, c) => {
        acc[c.titulo.toLowerCase()] = c;
        return acc;
    }, {} as Record<string, Concept>);
    
    const allPosesById = poses.reduce((acc, p) => {
        acc[p.id] = p;
        return acc;
    }, {} as Record<string, Pose>);
    
    const allPosesByName = poses.reduce((acc, p) => {
        acc[p.nombre.split('\n')[0].toLowerCase()] = p; // Spanish name is the key
        return acc;
    }, {} as Record<string, Pose>);


    const parts = content.trim().split(/(\*\*.*?\*\*)/g).filter(Boolean);

    const handlePoseClick = (pose: Pose, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedPose(pose as PoseWithImage);
    }
  
    return (
        <div className="whitespace-pre-wrap leading-relaxed">
            <TooltipProvider>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                const term = part.substring(2, part.length - 2);
                let item: Pose | Concept | undefined;
                let displayTerm: string = term;

                if (term.startsWith('pose:')) {
                    const poseId = term.substring(5);
                    item = allPosesById[poseId];
                    if (item) {
                        displayTerm = getDisplayName(item, nameDisplay);
                    }
                } else {
                    item = allPosesByName[term.toLowerCase()] || allConceptsByName[term.toLowerCase()];
                }
    
                if (item) {
                    const isPose = 'prerequisites' in item; // Simple check to differentiate Pose from Concept
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <strong 
                                    className="text-primary font-bold cursor-pointer underline decoration-dotted"
                                    onClick={(e) => isPose && handlePoseClick(item as Pose, e)}
                                >
                                    {displayTerm}
                                </strong>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs p-3 bg-card border-border shadow-lg rounded-md">
                                <div className="font-bold text-primary mb-2">{'nombre' in item ? item.nombre.split('\n')[0] : item.titulo}</div>
                                <p className="text-sm text-foreground/80">{item.descripcion}</p>
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
            <PoseDetailDialog
                pose={selectedPose}
                allPoses={poses}
                open={!!selectedPose}
                onOpenChange={(open) => !open && setSelectedPose(null)}
                concepts={concepts}
            />
        </div>
    );
}
