

'use client';

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { X, PlusCircle } from 'lucide-react';
import type { Pose } from '@/types';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

type NameDisplay = 'es' | 'en' | 'both';

export type SearchQuery = {
    query: string;
    mode: 'contains' | 'exact';
};

interface LevelFilterProps {
    allPoses: Pose[];
    searchQueries: SearchQuery[];
    setSearchQueries: (queries: SearchQuery[]) => void;
    selectedTags: string[];
    setSelectedTags: (tags: string[]) => void;
    originFilter: string | null;
    setOriginFilter: (poseId: string | null) => void;
    destinationFilter: string | null;
    setDestinationFilter: (poseId: string | null) => void;
    nameDisplay: NameDisplay;
}

type FilterStep = 'main' | 'name' | 'tag' | 'origin' | 'destination';

const getDisplayName = (pose: Pose, displayMode: NameDisplay): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1]?.replace(/[()]/g, '') || '';

    switch (displayMode) {
      case 'en':
        return enName || esName;
      case 'es':
      default:
        return esName;
    }
};

const getPoseFullName = (pose: Pose): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0] || '';
    const enName = parts[1]?.replace(/[()]/g, '') || '';
    return `${esName} ${enName}`.toLowerCase();
}


export default function LevelFilter({
    allPoses,
    searchQueries,
    setSearchQueries,
    selectedTags,
    setSelectedTags,
    originFilter,
    setOriginFilter,
    destinationFilter,
    setDestinationFilter,
    nameDisplay,
}: LevelFilterProps) {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<FilterStep>('main');
    const [localSearch, setLocalSearch] = useState('');
    const [exactMatch, setExactMatch] = useState(false);


    const allTags = useMemo(() => {
        const tags = new Set<string>();
        allPoses.forEach(pose => {
            pose.tags?.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [allPoses]);
    
    const originPose = allPoses.find(p => p.id === originFilter);
    const destinationPose = allPoses.find(p => p.id === destinationFilter);

    const clearAllFilters = () => {
        setSearchQueries([]);
        setSelectedTags([]);
        setOriginFilter(null);
        setDestinationFilter(null);
    }
    
    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (!isOpen) {
            setStep('main');
            setLocalSearch('');
            setExactMatch(false);
        }
    };
    
    const handleAddNameQuery = (query: string, mode: 'contains' | 'exact') => {
        if (query && !searchQueries.some(q => q.query === query && q.mode === mode)) {
            setSearchQueries([...searchQueries, { query: query.toLowerCase(), mode }]);
        }
        handleOpenChange(false);
    }

    const handleSelectPose = (setter: (id: string | null) => void, poseId: string) => {
        setter(poseId);
        handleOpenChange(false);
    };
    
    const handleSelectTag = (tag: string) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
        }
        handleOpenChange(false);
    }

    const hasActiveFilters = searchQueries.length > 0 || selectedTags.length > 0 || originFilter || destinationFilter;

    const renderFilterBody = () => {
        switch (step) {
            case 'name':
                return (
                    <div className="p-2 space-y-3">
                         <CommandInput 
                            placeholder="Buscar por nombre..." 
                            value={localSearch}
                            onValueChange={setLocalSearch}
                             onKeyDown={(e) => {
                                if (e.key === 'Enter' && localSearch) {
                                    handleAddNameQuery(localSearch, exactMatch ? 'exact' : 'contains');
                                }
                            }}
                        />
                        <div className="flex items-center space-x-2 px-1">
                            <Checkbox id="exact-match" checked={exactMatch} onCheckedChange={(checked) => setExactMatch(!!checked)} />
                            <Label htmlFor="exact-match" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Coincidencia exacta
                            </Label>
                        </div>
                    </div>
                );
            case 'tag':
                return (
                    <>
                        <CommandInput placeholder="Buscar familia..." value={localSearch} onValueChange={setLocalSearch} />
                        <CommandList>
                            <CommandEmpty>No se encontraron familias.</CommandEmpty>
                            <CommandGroup>
                            {allTags.filter(t => t.toLowerCase().includes(localSearch.toLowerCase())).map(tag => (
                                <CommandItem key={tag} onSelect={() => handleSelectTag(tag)}>
                                    {tag}
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                    </>
                );
            case 'origin':
            case 'destination':
                 const setter = step === 'origin' ? setOriginFilter : setDestinationFilter;
                return (
                    <>
                        <CommandInput placeholder="Buscar postura..." value={localSearch} onValueChange={setLocalSearch} />
                        <CommandList>
                            <CommandEmpty>No se encontraron posturas.</CommandEmpty>
                            <CommandGroup>
                                {allPoses.filter(p => getPoseFullName(p).includes(localSearch.toLowerCase())).map(pose => (
                                    <CommandItem key={pose.id} onSelect={() => handleSelectPose(setter, pose.id)}>
                                        {getDisplayName(pose, nameDisplay)}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </>
                );
            case 'main':
            default:
                return (
                    <CommandList>
                        <CommandGroup heading="Tipo de Filtro">
                            <CommandItem onSelect={() => setStep('name')}>Nombre</CommandItem>
                            <CommandItem onSelect={() => setStep('tag')}>Familia / Etiqueta</CommandItem>
                            <CommandItem onSelect={() => setStep('origin')}>Origen de Transición</CommandItem>
                            <CommandItem onSelect={() => setStep('destination')}>Destino de Transición</CommandItem>
                        </CommandGroup>
                    </CommandList>
                );
        }
    };


    return (
        <div className="p-4 border-b space-y-3 bg-secondary/30 rounded-lg">
            <div className="flex flex-wrap items-center gap-4">
                <Popover open={open} onOpenChange={handleOpenChange}>
                    <PopoverTrigger asChild>
                        <Button variant="outline">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Añadir Filtro
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-[300px]">
                        <Command>
                           {renderFilterBody()}
                        </Command>
                    </PopoverContent>
                </Popover>

                {hasActiveFilters && (
                     <div className="flex flex-wrap items-center gap-2 flex-1">
                        <span className="text-sm font-medium">Filtros activos:</span>
                        {searchQueries.map(sq => (
                             <Badge key={`${sq.query}-${sq.mode}`} variant="secondary">
                                Nombre ({sq.mode === 'exact' ? 'exacto' : 'contiene'}): {sq.query}
                                <button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2" onClick={() => setSearchQueries(searchQueries.filter(q => q.query !== sq.query || q.mode !== sq.mode))}><X className="h-3 w-3" /></button>
                            </Badge>
                        ))}
                        {selectedTags.map(tag => (
                            <Badge key={tag} variant="secondary">
                                Familia: {tag}
                                <button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2" onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}><X className="h-3 w-3" /></button>
                            </Badge>
                        ))}
                        {originPose && (
                             <Badge variant="secondary">
                                Origen: {getDisplayName(originPose, nameDisplay)}
                                <button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2" onClick={() => setOriginFilter(null)}><X className="h-3 w-3" /></button>
                            </Badge>
                        )}
                         {destinationPose && (
                             <Badge variant="secondary">
                                Destino: {getDisplayName(destinationPose, nameDisplay)}
                                <button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2" onClick={() => setDestinationFilter(null)}><X className="h-3 w-3" /></button>
                            </Badge>
                        )}
                        <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-primary hover:text-primary/80">Limpiar todos</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
