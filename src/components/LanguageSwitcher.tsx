'use client';

import { useAppContext } from '@/contexts/AppContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { nameDisplay, setNameDisplay } = useAppContext();

  return (
    <div className="p-2 group-data-[collapsible=icon]:hidden">
        <div className="flex items-center gap-2">
            <Languages className="h-4 w-4" />
            <Label htmlFor="lang-select" className="text-sm font-medium">Idioma</Label>
        </div>
      <Select value={nameDisplay} onValueChange={(value) => setNameDisplay(value as 'es' | 'en' | 'both')}>
        <SelectTrigger id="lang-select" className="w-full mt-1 h-9 text-sm">
          <SelectValue placeholder="Seleccionar Idioma" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">Inglés</SelectItem>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="both">Ambos</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
