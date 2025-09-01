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
            className="w-full max-w-xs mx-auto z-10 group"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
          >
            <Button
              variant="outline"
              className={cn(
                  "w-full h-auto py-3 px-3 flex flex-col items-center justify-center text-center rounded-lg border-2 transition-all duration-200 shadow-sm hover:shadow-md",
                  isSelected 
                    ? "border-primary bg-primary/10" 
                    : "border-border bg-card",
                  isHighlighted && !isSelected && "bg-accent/20 border-accent",
                  "hover:bg-accent/10 hover:border-accent"
              )}
            >
              <Icon className={cn(
                "h-6 w-6 mb-2 transition-colors text-muted-foreground",
                 (isHighlighted || isSelected) ? "text-accent" : ""
              )} />
              <div className={cn(
                "font-semibold text-sm transition-colors text-foreground/80",
                (isHighlighted || isSelected) ? "text-foreground" : ""
              )}>
                {displayName.split('\n').map((line, index) => (
                  <span key={index} className={cn("block", index === 1 && "text-xs opacity-70")}>{line}</span>
                ))}
              </div>
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click para seleccionar, doble-click para detalles.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
