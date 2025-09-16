'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import type { SequenceItem, Pose, DurationMode } from '@/types';
import { allPosesData } from '@/lib/firestore-client';
import { toast } from '@/hooks/use-toast';

export type NameDisplay = 'es' | 'en' | 'both';

interface AppContextProps {
  nameDisplay: NameDisplay;
  setNameDisplay: (theme: NameDisplay) => void;
  soundsEnabled: boolean;
  setSoundsEnabled: (enabled: boolean) => void;
  soundEffectsVolume: number;
  setSoundEffectsVolume: (volume: number) => void;
  sequence: SequenceItem[];
  setSequence: React.Dispatch<React.SetStateAction<SequenceItem[]>>;
  addToSequence: (pose: Pose) => void;
  addWithPrerequisites: (pose: Pose) => void;
  addDirectPrerequisites: (pose: Pose) => void;
  defaultDurationMode: DurationMode;
  setDefaultDurationMode: (mode: DurationMode) => void;
  defaultSeconds: number;
  setDefaultSeconds: (duration: number) => void;
  defaultQuantity: number;
  setDefaultQuantity: (quantity: number) => void;
  defaultSecondsPerRep: number;
  setDefaultSecondsPerRep: (seconds: number) => void;
  forceEnglishNarration: boolean;
  setForceEnglishNarration: (force: boolean) => void;
  backgroundMusicEnabled: boolean;
  setBackgroundMusicEnabled: (enabled: boolean) => void;
  backgroundMusicVolume: number;
  setBackgroundMusicVolume: (volume: number) => void;
  setActiveView: (view: any) => void; // A bit generic, but needed for now.
  setFlowBuilderSequence: (poseIds: string[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

// Dummy setActiveView for now
const dummySetActiveView = (view: any) => {};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('en');
  const [soundsEnabled, setSoundsEnabled] = useState<boolean>(true);
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  
  const [defaultDurationMode, setDefaultDurationMode] = useState<DurationMode>('seconds');
  const [defaultSeconds, setDefaultSeconds] = useState(5);
  const [defaultQuantity, setDefaultQuantity] = useState(15);
  const [defaultSecondsPerRep, setDefaultSecondsPerRep] = useState(2);
  
  const [forceEnglishNarration, setForceEnglishNarration] = useState<boolean>(false);
  
  const [backgroundMusicEnabled, setBackgroundMusicEnabled] = useState(false);
  const [backgroundMusicVolume, setBackgroundMusicVolume] = useState(0.575);
  const [soundEffectsVolume, setSoundEffectsVolume] = useState(0.175);
  
  const [activeViewSetter, setActiveViewSetter] = useState<(view: any) => void>(() => dummySetActiveView);


  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedMusicVolume = localStorage.getItem('acro-companion-music-volume');
      if (storedMusicVolume) {
        setBackgroundMusicVolume(JSON.parse(storedMusicVolume));
      }
      const storedSfxVolume = localStorage.getItem('acro-companion-sfx-volume');
      if (storedSfxVolume) {
        setSoundEffectsVolume(JSON.parse(storedSfxVolume));
      }

      audioRef.current = new Audio('/sounds/background-music.mp3');
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = backgroundMusicVolume;
    }
    localStorage.setItem('acro-companion-music-volume', JSON.stringify(backgroundMusicVolume));
  }, [backgroundMusicVolume]);

  useEffect(() => {
    localStorage.setItem('acro-companion-sfx-volume', JSON.stringify(soundEffectsVolume));
  }, [soundEffectsVolume]);
  
  useEffect(() => {
    if (backgroundMusicEnabled && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Error playing background music:", e));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [backgroundMusicEnabled]);

  useEffect(() => {
    const storedSounds = localStorage.getItem('acro-companion-sounds');
    if (storedSounds !== null) {
      try {
        const parsedValue = JSON.parse(storedSounds);
        if (typeof parsedValue === 'boolean') {
          setSoundsEnabled(parsedValue);
          return;
        }
      } catch (e) {
        // Invalid JSON
      }
    }
    const randomInitialState = Math.random() < 0.5;
    setSoundsEnabled(randomInitialState);
    localStorage.setItem('acro-companion-sounds', JSON.stringify(randomInitialState));
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('acro-companion-language') as NameDisplay;
    if (storedLanguage) {
      setNameDisplay(storedLanguage);
    }
    const storedForceEnglish = localStorage.getItem('acro-companion-force-en-narration');
     if (storedForceEnglish) {
      setForceEnglishNarration(JSON.parse(storedForceEnglish));
    }
  }, []);

  const handleSetLanguage = (newLanguage: NameDisplay) => {
    localStorage.setItem('acro-companion-language', newLanguage);
    setNameDisplay(newLanguage);
  }
  
  const handleSetSounds = (enabled: boolean) => {
    localStorage.setItem('acro-companion-sounds', JSON.stringify(enabled));
    setSoundsEnabled(enabled);
  }
  
  const handleSetForceEnglish = (force: boolean) => {
    localStorage.setItem('acro-companion-force-en-narration', JSON.stringify(force));
    setForceEnglishNarration(force);
  };
  
  const createSequenceItems = (poses: Pose[]): SequenceItem[] => {
    return poses.map(p => {
        const itemType = (p.type.toLowerCase().replace(' ', '-') as SequenceItem['itemType']);
        const baseItem = {
            ...p,
            uniqueId: `${itemType}-${p.id}-${Date.now()}-${Math.random()}`,
            itemType: itemType,
            notes: '',
        };
        if (defaultDurationMode === 'quantity') {
            return {
                ...baseItem,
                durationMode: 'quantity',
                quantity: defaultQuantity,
                secondsPerRep: defaultSecondsPerRep,
            };
        }
        return {
            ...baseItem,
            durationMode: 'seconds',
            duration: defaultSeconds,
        };
    });
  }

  const addToSequence = (pose: Pose) => {
    if (!pose) return;
    const newItems = createSequenceItems([pose]);
    setSequence(prev => [...prev, ...newItems]);
    toast({ title: "Postura Añadida", description: `${pose.nombre.split('\n')[0]} ha sido añadida a tu secuencia.` });
  };
  
  const addDirectPrerequisites = (pose: Pose) => {
    if (!pose || !pose.prerequisites) return;
     const allPosesMap = allPosesData.reduce((acc, p) => {
        acc[p.id] = p;
        return acc;
    }, {} as Record<string, Pose>);

    const directPrereqPoses = pose.prerequisites
        .map(id => allPosesMap[id])
        .filter((p): p is Pose => !!p);
    
    if (directPrereqPoses.length === 0) {
      toast({ title: "Sin Prerrequisitos", description: "Esta postura no tiene prerrequisitos directos definidos.", variant: "default" });
      return;
    }
    
    const newItems = createSequenceItems(directPrereqPoses);
    setSequence(prev => [...prev, ...newItems]);
    toast({
        title: "Prerrequisitos Añadidos",
        description: `Se añadieron ${newItems.length} prerrequisitos directos a tu secuencia.`,
    });
  };

  const addWithPrerequisites = (pose: Pose) => {
    if (!pose) return;
    const allPosesMap = allPosesData.reduce((acc, p) => {
        acc[p.id] = p;
        return acc;
    }, {} as Record<string, Pose>);

    const getAllPrereqsRecursive = (poseId: string, processedIds = new Set<string>()): string[] => {
        if (processedIds.has(poseId)) return [];

        const currentPose = allPosesMap[poseId];
        if (!currentPose) return [];

        processedIds.add(poseId);
        
        const directPrereqs = (currentPose.prerequisites || []).filter(pId => allPosesMap[pId]);
        
        const nestedPrereqs = directPrereqs.flatMap(pId => 
            getAllPrereqsRecursive(pId, processedIds)
        );
        
        return [...nestedPrereqs, ...directPrereqs];
    };

    const prereqIds = getAllPrereqsRecursive(pose.id);
    const allIds = [...new Set([...prereqIds, pose.id])];
    
    const posesToAdd = allIds
        .map(id => allPosesMap[id])
        .filter((p): p is Pose => !!p)
        .sort((a, b) => a.nivel - b.nivel);

    const newItems = createSequenceItems(posesToAdd);

    setSequence(prev => [...prev, ...newItems]);
    toast({
        title: "Ruta de Aprendizaje Creada",
        description: `Se añadieron ${newItems.length} posturas a tu secuencia, incluyendo todos los prerrequisitos.`,
    });
  };
  
   const setFlowBuilderSequence = (poseIds: string[]) => {
    const allPosesMap = allPosesData.reduce((acc, p) => {
        acc[p.id] = p;
        return acc;
    }, {} as Record<string, Pose>);

    const posesToAdd = poseIds
        .map(id => allPosesMap[id])
        .filter((p): p is Pose => !!p);

    const newItems = createSequenceItems(posesToAdd);
    setSequence(newItems);
  };
  
  const value = {
      nameDisplay, setNameDisplay: handleSetLanguage, 
      soundsEnabled, setSoundsEnabled: handleSetSounds,
      soundEffectsVolume, setSoundEffectsVolume,
      sequence, setSequence,
      addToSequence,
      addWithPrerequisites,
      addDirectPrerequisites,
      defaultDurationMode, setDefaultDurationMode,
      defaultSeconds, setDefaultSeconds,
      defaultQuantity, setDefaultQuantity,
      defaultSecondsPerRep, setDefaultSecondsPerRep,
      forceEnglishNarration, setForceEnglishNarration: handleSetForceEnglish,
      backgroundMusicEnabled, setBackgroundMusicEnabled,
      backgroundMusicVolume, setBackgroundMusicVolume,
      setActiveView: activeViewSetter,
      setFlowBuilderSequence,
  };


  return (
    <AppContext.Provider value={value}>
      <AppContextSetterContext.Provider value={setActiveViewSetter}>
        {children}
      </AppContextSetterContext.Provider>
    </AppContext.Provider>
  );
}

// Separate context for the setter to avoid re-rendering consumers of the main context
const AppContextSetterContext = createContext<React.Dispatch<React.SetStateAction<(view: any) => void>> | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export function useSetActiveView() {
    const context = useContext(AppContextSetterContext);
    if (context === undefined) {
        throw new Error('useSetActiveView must be used within an AppProvider');
    }
    return context;
}
