'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Clipboard, Play, Pause, Repeat, Languages } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface FlowNarrationControlsProps {
  isNarrating: boolean;
  onToggleNarration: () => void;
  repeat: boolean;
  onToggleRepeat: () => void;
  onCopyToClipboard: () => void;
  forceEnglishNarration: boolean;
  onToggleForceEnglishNarration: () => void;
  showForceEnglishNarrationSwitch: boolean;
}

export default function FlowNarrationControls({
  isNarrating,
  onToggleNarration,
  repeat,
  onToggleRepeat,
  onCopyToClipboard,
  forceEnglishNarration,
  onToggleForceEnglishNarration,
  showForceEnglishNarrationSwitch,
}: FlowNarrationControlsProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-end">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={onCopyToClipboard} aria-label="Copiar secuencia">
                <Clipboard className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copiar Secuencia</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      {showForceEnglishNarrationSwitch && (
        <div className="flex items-center space-x-2">
            <Switch id="force-en-switch" checked={forceEnglishNarration} onCheckedChange={onToggleForceEnglishNarration} />
            <Label htmlFor="force-en-switch" className="flex items-center gap-1 text-sm"><Languages className="h-4 w-4" /> Nombres en Inglés</Label>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Switch id="repeat-switch" checked={repeat} onCheckedChange={onToggleRepeat} />
        <Label htmlFor="repeat-switch" className="flex items-center gap-1 text-sm"><Repeat className="h-4 w-4" /> Repetir</Label>
      </div>
      
      <Button onClick={onToggleNarration} size="sm" className="w-[100px]">
        {isNarrating ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
        {isNarrating ? 'Pausar' : 'Narrar'}
      </Button>
    </div>
  );
}
