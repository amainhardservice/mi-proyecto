'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { Pose, Concept, Asana, PoseModifier, SequenceItem, Exercise, DurationMode } from '@/types';
import FlowBuilderPalette from '@/components/FlowBuilderPalette';
import FlowBuilderCanvas from '@/components/FlowBuilderCanvas';
import FlowBuilderDetail from '@/components/FlowBuilderDetail';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@/components/ui/menubar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { allPosesData, allConceptsData, allAsanasData, allModifiersData, allExercisesData } from '@/lib/firestore-client';
import { exportSequenceToPdf } from '@/lib/pdf';
import { useAppContext } from '@/contexts/AppContext';

interface FlowBuilderProps {
  allPoses: Pose[];
  allConcepts: Concept[];
  allModifiers: PoseModifier[];
  allAsanas: Asana[];
  allExercises: Exercise[];
}

const getNarrationName = (item: SequenceItem, lang: 'es' | 'en'): string => {
    let name: string = '';
    
    if (['pose', 'transition', 'flow', 'whip', 'icarian', 'l-basing', 'standing', 'thai-massage', 'therapeutic', 'washing-machine'].includes(item.itemType)) {
      const parts = item.nombre.split('\n');
      const esName = parts[0];
      const enName = parts[1] ? parts[1].replace(/[()]/g, '') : esName;
      name = lang === 'en' ? enName : esName;
    } else if (item.itemType === 'asana') {
      name = lang === 'en' ? item.nombre_sans : item.nombre_es;
    } else if (item.itemType === 'exercise' || item.itemType === 'concept' || item.itemType === 'modifier') {
      const parts = item.titulo.split('\n');
      const esName = parts[0];
      const enName = parts[1] ? parts[1].replace(/[()]/g, '') : esName;
      name = lang === 'en' ? enName : esName;
    }
    return name;
};


export default function FlowBuilder({
  allPoses,
  allConcepts,
  allModifiers,
  allAsanas,
  allExercises,
}: FlowBuilderProps) {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [sequenceTitle, setSequenceTitle] = useState('Mi Secuencia');
  const { nameDisplay, sequence, setSequence, addToSequence, forceEnglishNarration, setForceEnglishNarration, defaultDurationMode, defaultSeconds, defaultQuantity, defaultSecondsPerRep } = useAppContext();

  const [isNarrating, setIsNarrating] = useState(false);
  const [repeatNarration, setRepeatNarration] = useState(false);
  const [narratedItemId, setNarratedItemId] = useState<string | null>(null);
  const [narrationProgress, setNarrationProgress] = useState({
    currentItemTimeLeft: 0,
    repetitionCount: 0,
    totalPracticeTime: 0,
  });
  
  const narrationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const narrationIntervalRef = useRef<NodeJS.Timer | null>(null);
  const narrationIndexRef = useRef(0);
  
  const selectedItem = sequence.find(item => item.uniqueId === selectedItemId) || null;

  // Refs to hold the most current default duration values
  const defaultDurationModeRef = useRef<DurationMode>(defaultDurationMode);
  const defaultSecondsRef = useRef(defaultSeconds);
  const defaultQuantityRef = useRef(defaultQuantity);
  const defaultSecondsPerRepRef = useRef(defaultSecondsPerRep);

  useEffect(() => {
    defaultDurationModeRef.current = defaultDurationMode;
    defaultSecondsRef.current = defaultSeconds;
    defaultQuantityRef.current = defaultQuantity;
    defaultSecondsPerRepRef.current = defaultSecondsPerRep;
  }, [defaultDurationMode, defaultSeconds, defaultQuantity, defaultSecondsPerRep]);
  
  const getItemDuration = (item: SequenceItem) => {
    if (item.durationMode === 'quantity') {
        return item.quantity * item.secondsPerRep;
    }
    return item.duration;
  };

  useEffect(() => {
    const totalDuration = sequence.reduce((acc, item) => acc + getItemDuration(item), 0);
    setNarrationProgress(prev => ({ ...prev, totalPracticeTime: totalDuration }));
  }, [sequence, repeatNarration]);


  const handleDrop = useCallback((item: { id: string; type: string }) => {
    let newItem: SequenceItem | null = null;
    const uniqueId = `${item.type}-${item.id}-${Date.now()}`;
    const itemType = item.type as SequenceItem['itemType'];

    let foundItem: any = null;
      if (['pose', 'transition', 'flow', 'whip', 'icarian', 'l-basing', 'standing', 'thai-massage', 'therapeutic', 'washing-machine'].includes(item.type)) {
        foundItem = allPoses.find(p => p.id === item.id);
      } else if (item.type === 'concept') {
        foundItem = allConcepts.find(c => c.id === item.id);
      } else if (item.type === 'asana') {
        foundItem = allAsanas.find(a => a.id === item.id);
      } else if (item.type === 'modifier') {
        foundItem = allModifiers.find(m => m.id === item.id);
      } else if (item.type === 'exercise') {
        foundItem = allExercises.find(e => e.id === item.id);
      }
    
    if (foundItem) {
        const baseItem = { ...foundItem, uniqueId, itemType, notes: '' };
        if (defaultDurationModeRef.current === 'quantity') {
            newItem = {
                ...baseItem,
                durationMode: 'quantity',
                quantity: defaultQuantityRef.current,
                secondsPerRep: defaultSecondsPerRepRef.current,
            };
        } else {
            newItem = {
                ...baseItem,
                durationMode: 'seconds',
                duration: defaultSecondsRef.current,
            };
        }

        setSequence(currentSequence => [...currentSequence, newItem!]);
        setSelectedItemId(uniqueId);
    }
  }, [allPoses, allConcepts, allAsanas, allModifiers, allExercises, setSequence]);


  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setSequence(prev => {
      const newSequence = [...prev];
      const [draggedItem] = newSequence.splice(dragIndex, 1);
      newSequence.splice(hoverIndex, 0, draggedItem);
      return newSequence;
    });
  }, [setSequence]);

  const handleSelectItem = (uniqueId: string) => {
    setSelectedItemId(uniqueId);
  };
  
  const updateItem = (uniqueId: string, updates: Partial<SequenceItem>) => {
    setSequence(seq => seq.map(item => item.uniqueId === uniqueId ? { ...item, ...updates } : item));
  };
  
  const handleExportPdf = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "Añade al menos un elemento para exportar.", variant: "destructive" });
      return;
    }
    exportSequenceToPdf(sequence, sequenceTitle, nameDisplay);
  };

  const handleClearSequence = () => {
    setSequence([]);
    setSelectedItemId(null);
    toast({ title: "Secuencia Limpiada", description: "Se ha vaciado el constructor de secuencias." });
  };

  const handleDeleteItem = (uniqueId: string) => {
    setSequence(prev => prev.filter(item => item.uniqueId !== uniqueId));
    if (selectedItemId === uniqueId) {
      setSelectedItemId(null);
    }
    toast({ title: "Elemento Eliminado", description: "El elemento ha sido eliminado de la secuencia." });
  };
  
  const getEnglishName = (item: SequenceItem) => {
    if (['pose', 'transition', 'flow', 'whip', 'icarian', 'l-basing', 'standing', 'thai-massage', 'therapeutic', 'washing-machine'].includes(item.itemType)) {
        return item.nombre.split('\n')[1]?.replace(/[()]/g, '') || item.nombre.split('\n')[0];
    }
    if (item.itemType === 'asana') {
        return item.nombre_sans;
    }
    if (item.itemType === 'exercise') {
        return item.titulo.split('\n')[1]?.replace(/[()]/g, '') || item.titulo.split('\n')[0];
    }
    return item.titulo;
  };

  const generateSequenceText = () => {
    return sequence.map(item => {
      const name = getEnglishName(item);
      const note = item.notes ? ` :: ${item.notes.replace(/\n/g, ' ')}` : '';
      if (item.durationMode === 'quantity') {
          return `${name} :: ${item.quantity} :: ${item.secondsPerRep}${note}`;
      }
      return `${name} :: ${item.duration}${note}`;
    }).join('\n');
  };
  
  const handleExportToText = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "Añade al menos un elemento para exportar.", variant: "destructive" });
      return;
    }
    const textContent = generateSequenceText();
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'acro_sequence.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast({ title: "Exportación Exitosa", description: "La secuencia ha sido exportada como archivo de texto." });
  };

  
  const handleCopyToClipboard = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "No hay nada que copiar.", variant: "destructive" });
      return;
    }
    const textContent = generateSequenceText();
    navigator.clipboard.writeText(textContent).then(() => {
      toast({ title: "¡Copiado!", description: "La secuencia ha sido copiada al portapapeles." });
    }, (err) => {
      toast({ title: "Error al Copiar", description: "No se pudo copiar la secuencia.", variant: "destructive" });
      console.error('Could not copy text: ', err);
    });
  };

const handleImportSequence = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) {
        toast({ title: "Importación Vacía", description: "No se encontró contenido para importar.", variant: "destructive" });
        return;
    }

    let itemsAddedCount = 0;
    const newSequenceItems: SequenceItem[] = [];

    const allSearchableItems = [
        ...allPosesData,
        ...allAsanasData,
        ...allConceptsData,
        ...allModifiersData,
        ...allExercisesData,
    ];

    lines.forEach(line => {
        const parts = line.split('::').map(p => p.trim());
        const nameToFind = parts[0].toLowerCase();
        
        let param1: number | undefined;
        let param2: number | undefined;
        const notes: string[] = [];

        parts.slice(1).forEach(part => {
            const partAsNumber = parseInt(part, 10);
            if (!isNaN(partAsNumber)) {
                if (param1 === undefined) {
                    param1 = partAsNumber;
                } else if (param2 === undefined) {
                    param2 = partAsNumber;
                } else {
                    notes.push(part);
                }
            } else if (part) {
                notes.push(part);
            }
        });
        
        const foundItem: any = allSearchableItems.find(item => {
            let names: string[] = [];
             if ('nombre' in item && 'nivel' in item) { // Pose
                names = item.nombre.split('\n').flatMap(n => n.split('/')).map(n => n.replace(/[()]/g, '').trim().toLowerCase());
            } else if ('titulo' in item) { // Concept, Modifier, Exercise
                names = item.titulo.split('\n').flatMap(n => n.split('/')).map(n => n.replace(/[()]/g, '').trim().toLowerCase());
            } else if ('nombre_sans' in item) { // Asana
                names = [item.nombre_es.trim().toLowerCase(), item.nombre_sans.trim().toLowerCase()];
            }
            return names.includes(nameToFind);
        });
        
        if (foundItem) {
            let itemType: SequenceItem['itemType'];
            if ('nivel' in foundItem && 'type' in foundItem) itemType = (foundItem.type as string).toLowerCase().replace(' ', '-') as SequenceItem['itemType'];
            else if ('enfasis' in foundItem) itemType = 'exercise';
            else if ('nombre_sans' in foundItem) itemType = 'asana';
            else if ('category' in foundItem) itemType = 'concept';
            else itemType = 'modifier';

            const baseItem = {
                ...foundItem,
                uniqueId: `${itemType}-${foundItem.id}-${Date.now()}-${Math.random()}`,
                itemType: itemType,
                notes: notes.join(' :: '),
            };

            let newItem: SequenceItem;

            if (param1 !== undefined && param2 !== undefined) {
                // Formato: :: cantidad :: segs/rep
                newItem = { ...baseItem, durationMode: 'quantity', quantity: param1, secondsPerRep: param2 };
            } else if (param1 !== undefined) {
                 // Formato: :: numero (interpretado según el modo global)
                if (defaultDurationMode === 'quantity') {
                    newItem = { ...baseItem, durationMode: 'quantity', quantity: param1, secondsPerRep: defaultSecondsPerRep };
                } else {
                    newItem = { ...baseItem, durationMode: 'seconds', duration: param1 };
                }
            } else {
                 // Formato: sin numero (usa valores globales)
                 if (defaultDurationMode === 'quantity') {
                    newItem = { ...baseItem, durationMode: 'quantity', quantity: defaultQuantity, secondsPerRep: defaultSecondsPerRep };
                } else {
                    newItem = { ...baseItem, durationMode: 'seconds', duration: defaultSeconds };
                }
            }
            itemsAddedCount++;
            newSequenceItems.push(newItem);
        }
    });

    if (newSequenceItems.length > 0) {
        setSequence(prev => [...prev, ...newSequenceItems]);
    }
    
    toast({ 
        title: "Importación Completa", 
        description: `Se añadieron ${itemsAddedCount} de ${lines.length} elementos a la secuencia.` 
    });
};

  const onImport = () => {
    handleImportSequence(importText);
    setIsImportDialogOpen(false);
    setImportText('');
  };

  const speak = (text: string, lang: 'es' | 'en') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const targetLang = lang === 'es' ? 'es' : 'en';
    
    let voice = voices.find(v => v.lang.startsWith(targetLang));
    
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = lang === 'es' ? 'es-ES' : 'en-US';
      console.warn(`No voice found for language: ${lang}. Using browser default: ${utterance.lang}`);
    }

    window.speechSynthesis.speak(utterance);
  };
  
  const narrateNext = useCallback(() => {
    if (narrationIntervalRef.current) clearInterval(narrationIntervalRef.current);
    
    const totalItems = sequence.length;
    if (narrationIndexRef.current >= totalItems) {
      if (repeatNarration && totalItems > 0) {
        const lang = nameDisplay === 'en' ? 'en' : 'es';
        const textToSpeak = lang === 'es' ? "Repitiendo secuencia." : "Repeating sequence.";
        speak(textToSpeak, lang);
        narrationIndexRef.current = 0;
        setNarrationProgress(prev => ({...prev, repetitionCount: prev.repetitionCount + 1}));
        narrationTimeoutRef.current = setTimeout(narrateNext, 1000); 
      } else {
        const lang = nameDisplay === 'en' ? 'en' : 'es';
        const textToSpeak = lang === 'es' ? "Secuencia terminada." : "Sequence finished.";
        speak(textToSpeak, lang);
        setIsNarrating(false);
        setNarratedItemId(null);
        setNarrationProgress({ currentItemTimeLeft: 0, repetitionCount: 0, totalPracticeTime: sequence.reduce((acc, item) => acc + getItemDuration(item), 0) });
      }
      return;
    }
    
    const item = sequence[narrationIndexRef.current];
    if (!item) {
        setIsNarrating(false);
        return;
    }
    
    const itemDuration = getItemDuration(item);
    setNarratedItemId(item.uniqueId);
    setSelectedItemId(item.uniqueId);
    setNarrationProgress(prev => ({...prev, currentItemTimeLeft: itemDuration}));

    narrationIntervalRef.current = setInterval(() => {
      setNarrationProgress(prev => ({...prev, currentItemTimeLeft: Math.max(0, prev.currentItemTimeLeft - 1)}));
    }, 1000);

    const mainLang = nameDisplay === 'en' ? 'en' : 'es';
    const nameLang = (mainLang === 'es' && forceEnglishNarration) ? 'en' : mainLang;

    const name = getNarrationName(item, nameLang);
    let introText = '';

    if (narrationIndexRef.current === 0) {
      introText = mainLang === 'es' ? 'La secuencia inicia con' : 'The sequence starts with';
    } else if (narrationIndexRef.current === totalItems - 1 && !repeatNarration) {
      introText = mainLang === 'es' ? 'y para terminar' : 'and to finish with';
    } else {
      introText = mainLang === 'es' ? 'luego viene' : 'next is';
    }
    
    speak(`${introText} ${name}`, mainLang);
    
    narrationIndexRef.current++;
    narrationTimeoutRef.current = setTimeout(narrateNext, itemDuration * 1000);
  }, [sequence, nameDisplay, repeatNarration, forceEnglishNarration]);


  const stopNarration = useCallback(() => {
    if (narrationTimeoutRef.current) {
        clearTimeout(narrationTimeoutRef.current);
        narrationTimeoutRef.current = null;
    }
    if (narrationIntervalRef.current) {
        clearInterval(narrationIntervalRef.current);
        narrationIntervalRef.current = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    setIsNarrating(false);
    setNarratedItemId(null);
    setNarrationProgress({ currentItemTimeLeft: 0, repetitionCount: 0, totalPracticeTime: sequence.reduce((acc, item) => acc + getItemDuration(item), 0) });
  }, [sequence]);

  const handleToggleNarration = () => {
    if (isNarrating) {
      stopNarration();
    } else {
      if (sequence.length > 0) {
        setIsNarrating(true);
        narrationIndexRef.current = 0;
        setNarrationProgress(prev => ({...prev, repetitionCount: 0}));
        setTimeout(() => {
          narrateNext();
        }, 100);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopNarration();
    }
  }, [stopNarration]);
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-full flex-col gap-4 lg:flex-row">
        <FlowBuilderPalette 
            poses={allPoses}
            concepts={allConcepts}
            modifiers={allModifiers}
            asanas={allAsanas}
            exercises={allExercises}
          />
        <div className="flex h-full min-h-0 w-full flex-col gap-4 lg:w-2/3">
            <header className="flex-shrink-0">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-primary">Constructor de Secuencias</h1>
                <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Archivo</MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem onClick={() => setIsImportDialogOpen(true)}>Importar Secuencia...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem onClick={handleExportPdf}>Exportar a PDF</MenubarItem>
                    <MenubarItem onClick={handleExportToText}>Exportar como Texto</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem onClick={handleCopyToClipboard}>Copiar al Portapapeles</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem onClick={handleClearSequence} className="text-destructive focus:text-destructive">Limpiar Secuencia</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                </Menubar>
            </div>
            </header>
            <div className="flex flex-grow flex-col gap-4 min-h-0 md:flex-row">
                <FlowBuilderCanvas 
                    sequence={sequence}
                    onDrop={handleDrop}
                    onSelectItem={handleSelectItem}
                    selectedItemId={selectedItemId}
                    moveItem={moveItem}
                    nameDisplay={nameDisplay}
                    onDeleteItem={handleDeleteItem}
                    onCopyToClipboard={handleCopyToClipboard}
                    isNarrating={isNarrating}
                    onToggleNarration={handleToggleNarration}
                    repeatNarration={repeatNarration}
                    setRepeatNarration={setRepeatNarration}
                    narratedItemId={narratedItemId}
                    forceEnglishNarration={forceEnglishNarration}
                    setForceEnglishNarration={setForceEnglishNarration}
                    showForceEnglishNarrationSwitch={nameDisplay === 'es'}
                    narrationProgress={narrationProgress}
                    getItemDuration={getItemDuration}
                    sequenceTitle={sequenceTitle}
                    setSequenceTitle={setSequenceTitle}
                />
                <FlowBuilderDetail 
                    item={selectedItem} 
                    onUpdateItem={updateItem} 
                    allPoses={allPoses}
                    allConcepts={allConcepts}
                />
            </div>
        </div>
      </div>

      <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Importar Secuencia</DialogTitle>
            <DialogDescription>
              Pega el contenido de una secuencia de texto. El formato es: Nombre :: duración :: Notas (opcional).
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              id="import-text"
              placeholder="Pega tu secuencia aquí..."
              className="min-h-[150px]"
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setIsImportDialogOpen(false)}>Cancelar</Button>
            <Button type="submit" onClick={onImport}>Importar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DndProvider>
  );

    