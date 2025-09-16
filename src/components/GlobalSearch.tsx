
'use client';

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { allPosesData, allConceptsData, allAsanasData, allModifiersData, allExercisesData } from '@/lib/firestore-client';
import type { Pose, Concept, Asana, PoseModifier, Exercise } from '@/types';
import { useSidebar } from './ui/sidebar';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAppContext } from '@/contexts/AppContext';


type SearchResult = {
  id: string;
  name: string;
  type: 'Postura' | 'Concepto' | 'Asana' | 'Modificador' | 'Ejercicio';
  item: Pose | Concept | Asana | PoseModifier | Exercise;
};

interface GlobalSearchProps {
    onSelect: (item: Pose | Concept | Asana | PoseModifier | Exercise) => void;
}

const getDisplayName = (item: Pose | Concept | Asana | PoseModifier | Exercise, displayMode: 'es' | 'en' | 'both'): string => {
    if ('nombre' in item && 'nivel' in item) { // Pose
        const parts = item.nombre.split('\n');
        const esName = parts[0];
        const enName = parts[1]?.replace(/[()]/g, '') || esName;
        return displayMode === 'en' ? enName : esName;
    }
    if ('nombre_sans' in item) { // Asana
        const { nombre_sans, nombre_es } = item;
        return displayMode === 'en' ? nombre_sans : nombre_es;
    }
    if ('titulo' in item) { // Concept or Modifier or Exercise
        const parts = item.titulo.split('\n');
        const esName = parts[0];
        const enName = parts[1]?.replace(/[()]/g, '') || esName;
        return displayMode === 'en' ? enName : esName;
    }
    return '';
};


export default function GlobalSearch({ onSelect }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { setOpen, setOpenMobile, state } = useSidebar();
  const isMobile = useIsMobile();
  const { nameDisplay } = useAppContext();


  const allData = useMemo(() => [
    ...allPosesData.map(p => ({ ...p, resultType: 'Postura' as const })),
    ...allConceptsData.map(c => ({ ...c, resultType: 'Concepto' as const })),
    ...allAsanasData.map(a => ({ ...a, resultType: 'Asana' as const })),
    ...allModifiersData.map(m => ({ ...m, resultType: 'Modificador' as const })),
    ...allExercisesData.map(e => ({ ...e, resultType: 'Ejercicio' as const })),
  ], []);

  const results = useMemo(() => {
    if (!query) return [];
    const lowerCaseQuery = query.toLowerCase();
    
    return allData
      .map(item => {
        let nameMatch = false;

        if ('nombre' in item && 'nivel' in item) { // Pose
          nameMatch = item.nombre.toLowerCase().includes(lowerCaseQuery);
        } else if ('titulo' in item) { // Concept or Modifier or Exercise
          nameMatch = item.titulo.toLowerCase().includes(lowerCaseQuery);
        } else if ('nombre_sans' in item) { // Asana
          nameMatch = item.nombre_sans.toLowerCase().includes(lowerCaseQuery) || item.nombre_es.toLowerCase().includes(lowerCaseQuery);
        }

        if (nameMatch) {
          return {
            id: item.id,
            name: getDisplayName(item, nameDisplay),
            type: item.resultType,
            item: item,
          };
        }
        return null;
      })
      .filter((item): item is SearchResult => !!item);
  }, [query, allData, nameDisplay]);

  const handleSelect = (item: SearchResult) => {
    onSelect(item.item);
    setQuery('');
    setIsOpen(false);
    // Close mobile sidebar if open
    if(isMobile) {
      setOpenMobile(false);
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  if (state === 'collapsed' && !isMobile) {
    return (
        <Button 
            variant="ghost" 
            size="icon" 
            className="w-full" 
            onClick={() => setOpen(true)}
        >
            <Search/>
        </Button>
    )
  }

  return (
    <div ref={searchRef} className={cn("relative w-full", isMobile ? '' : "group-data-[collapsible=icon]:hidden")}>
      <Command className="rounded-lg border shadow-md">
        <CommandInput 
          placeholder="Buscar postura, concepto..."
          value={query}
          onValueChange={setQuery}
          onFocus={() => setIsOpen(true)}
        />
        {isOpen && results.length > 0 && (
          <CommandList className="absolute top-full mt-2 w-full bg-card border rounded-lg shadow-lg z-50">
            <CommandEmpty>No se encontraron resultados.</CommandEmpty>
            <CommandGroup>
              {results.map((result) => (
                <CommandItem
                  key={`${result.type}-${result.id}`}
                  onSelect={() => handleSelect(result)}
                  className="flex justify-between"
                >
                  <span>{result.name}</span>
                  <span className="text-xs text-muted-foreground">{result.type}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
