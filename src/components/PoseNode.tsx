import type { Pose } from '@/types';
import { Button } from '@/components/ui/button';
import { Mountain, Feather, Snowflake, Waves, Zap, Leaf, Gem, Sun, Star, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type PoseNodeProps = {
  pose: Pose;
  displayName: string;
  onClick: () => void;
  onDoubleClick: () => void;
  isHighlighted: boolean;
  isSelected: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

// Simple hash function to get a deterministic icon for each pose
const getIconForPose = (poseName: string) => {
    const icons = [Mountain, Feather, Snowflake, Waves, Zap, Leaf, Gem, Sun, Star, Anchor];
    let hash = 0;
    for (let i = 0; i < poseName.length; i++) {
        const char = poseName.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    const index = Math.abs(hash) % icons.length;
    return icons[index];
}

export function PoseNode({ 
  pose, 
  displayName,
  onClick, 
  onDoubleClick,
  isHighlighted, 
  isSelected,
  onMouseEnter,
  onMouseLeave,
}: PoseNodeProps) {
  const Icon = getIconForPose(pose.nombre);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            data-pose-id={pose.id}
            className="w-full max-w-xs mx-auto mb-8 z-10 group"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
          >
            <Button
              variant="ghost"
              className={cn(
                  "w-full h-auto py-4 px-4 flex flex-col items-center justify-center text-center rounded-xl border-2 transition-all duration-300",
                  isSelected ? "border-primary bg-primary/20" : "border-primary/50 bg-secondary/30",
                  isHighlighted && !isSelected && "bg-accent/50 border-accent",
                  "hover:bg-accent/50 hover:border-accent"
              )}
            >
              <Icon className={cn(
                "h-8 w-8 mb-2 transition-colors",
                 isHighlighted || isSelected ? "text-primary group-hover:text-accent-foreground" : "text-primary"
              )} />
              <span className={cn(
                "font-semibold transition-colors",
                isHighlighted || isSelected ? "text-primary/90 group-hover:text-accent-foreground" : "text-primary/90"
              )}>
                {displayName.split('\n').map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </span>
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click para seleccionar, doble-click para abrir detalles.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
