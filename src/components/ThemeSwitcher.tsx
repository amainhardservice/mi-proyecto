'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Palette } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-2 group-data-[collapsible=icon]:hidden">
        <div className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <Label htmlFor="theme-select" className="text-sm font-medium">Tema</Label>
        </div>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger id="theme-select" className="w-full mt-1 h-9 text-sm">
          <SelectValue placeholder="Seleccionar Tema" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="theme-earth">Tierra</SelectItem>
          <SelectItem value="theme-ocean">Océano</SelectItem>
          <SelectItem value="theme-forest">Bosque</SelectItem>
          <SelectItem value="theme-fire">Fuego</SelectItem>
          <SelectItem value="theme-air">Aire</SelectItem>
          <SelectItem value="theme-snow">Nieve</SelectItem>
          <SelectItem value="theme-nevando">Nevando</SelectItem>
          <SelectItem value="theme-universe">Universo</SelectItem>
          <SelectItem value="theme-constelacion">Constelación</SelectItem>
          <SelectItem value="theme-sunset">Atardecer</SelectItem>
          <SelectItem value="theme-jungle">Jungla</SelectItem>
          <SelectItem value="theme-aurora">Aurora</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
