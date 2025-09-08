

'use client';

import { useState, useEffect, useCallback } from 'react';
import { getPoses, getConcepts, getPoseModifiers, getAsanas, getExercises } from '@/lib/firestore';
import type { Pose, Concept, Asana, PoseModifier, SequenceItem, Exercise } from '@/types';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarInset } from '@/components/ui/sidebar';
import PoseExplorer from '@/components/PoseExplorer';
import ConceptGlossary from '@/components/ConceptGlossary';
import PoseModifiers from '@/components/PoseModifiers';
import WhatIsAcroYoga from '@/components/WhatIsAcroYoga';
import WhatIsThaiMassage from '@/components/WhatIsThaiMassage';
import AsanaGlossary from '@/components/AsanaGlossary';
import GlossaryExporter from '@/components/GlossaryExporter';
import { AcroYogaIcon } from '@/components/icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Workflow, Video, BookOpen, Layers, HeartHandshake, BookCopy, Dumbbell } from 'lucide-react';
import FlowBuilder from '@/components/FlowBuilder';
import { exportSequenceToPdf } from '@/lib/pdf';
import { toast } from '@/hooks/use-toast';
import { allPosesData, allConceptsData, allAsanasData, allModifiersData, allExercisesData } from '@/lib/firestore-client';
import AcroVideos from '@/components/AcroVideos';
import GlobalSearch from '@/components/GlobalSearch';
import { PoseDetailDialog } from '@/components/PoseDetailDialog';
import ExerciseGlossary from '@/components/ExerciseGlossary';


type View = 
  | { type: 'acro', levels: number[] }
  | { type: 'thai', levels: number[] }
  | { type: 'therapeutic', level: number }
  | { type: 'acro-glossary' }
  | { type: 'thai-glossary' }
  | { type: 'yoga-glossary' }
  | { type: 'warmup-individual' }
  | { type: 'warmup-partner' }
  | { type: 'what-is-acro' }
  | { type: 'what-is-thai' }
  | { type: 'flow-builder' }
  | { type: 'acro-videos' };

type NameDisplay = 'es' | 'en' | 'both';

const acroVideos = [
  {
    title: "50 ACROYOGA POPS. 😱 Pops for beginners and experts",
    url: "https://www.youtube.com/watch?v=JmImpFX8srE"
  },
  {
    title: "ACROYOGA - SIMPLE AND BEAUTIFUL FLOW FOR BEGINNERS",
    url: "https://www.youtube.com/watch?v=sYM4GrsJcRo"
  },
  {
    title: "72 acroyoga pops. Acroyoga pops collection. 🍄 Acroyoga pops for beginners and experts",
    url: "https://www.youtube.com/watch?v=-LgvinTYuco"
  },
  {
    title: "Acroyoga Washing Machine Tutorial - 'Back-to-Front'",
    url: "https://www.youtube.com/watch?v=SZr5YMVHGpk&t=7s"
  }
];


export default function Home() {
  const [poses, setPoses] = useState<Pose[]>([]);
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [modifiers, setModifiers] = useState<PoseModifier[]>([]);
  const [asanas, setAsanas] = useState<Asana[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<View>({ type: 'acro', levels: [1, 2, 5, 7] });
  const [featuredItem, setFeaturedItem] = useState<Pose | Concept | null>(null);
  const [searchSelectedItem, setSearchSelectedItem] = useState<Pose | null>(null);
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('en');


  // --- State for Flow Builder ---
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const [posesData, conceptsData, modifiersData, asanasData, exercisesData] = await Promise.all([
        getPoses(),
        getConcepts(),
        getPoseModifiers(),
        getAsanas(),
        getExercises(),
      ]);
      setPoses(posesData);
      setConcepts(conceptsData);
      setModifiers(modifiersData);
      setAsanas(asanasData);
      setExercises(exercisesData);
      setLoading(false);
      
      const allItems = [...posesData, ...conceptsData];
      const randomIndex = Math.floor(Math.random() * allItems.length);
      setFeaturedItem(allItems[randomIndex]);
    }
    fetchData();
  }, []);
  
  // --- Handlers for Pose Explorer ---
  const handleAcroLevelClick = (level: number) => {
    setActiveView(prevView => {
      if (prevView.type === 'acro') {
        const newLevels = prevView.levels.includes(level)
          ? prevView.levels.filter(l => l !== level)
          : [...prevView.levels, level].sort((a, b) => a - b);
        
        if (newLevels.length === 0) {
           return { type: 'acro', levels: [] };
        }
        return { ...prevView, levels: newLevels };
      }
      return { type: 'acro', levels: [level] };
    });
  };

  const handleThaiLevelClick = (level: number) => {
    const allLevels = Array.from({ length: level }, (_, i) => i + 1);
    setActiveView({ type: 'thai', levels: allLevels });
  };
  
  const handleResetAcroView = () => {
    setActiveView({ type: 'acro', levels: [1, 2, 5, 7] });
  };
  
  const handleResetThaiView = () => {
    const allThaiLevels = Array.from(new Set(poses.filter(p => p.type === 'Thai-Massage').map(p => p.nivel))).sort((a,b) => a - b);
    setActiveView({ type: 'thai', levels: allThaiLevels });
  }

  // --- Handlers for Flow Builder ---
  const handleDrop = useCallback((item: { id: string; type: string }) => {
    let newItem: SequenceItem | null = null;
    const uniqueId = `${item.type}-${item.id}-${Date.now()}`;
    
    if (item.type === 'pose' || item.type === 'transition' || item.type === 'flow') {
      const pose = allPosesData.find(p => p.id === item.id);
      if (pose) newItem = { ...pose, uniqueId, itemType: 'pose', notes: '' };
    } else if (item.type === 'concept') {
      const concept = concepts.find(c => c.id === item.id);
      if (concept) newItem = { ...concept, uniqueId, itemType: 'concept', notes: '' };
    } else if (item.type === 'asana') {
      const asana = asanas.find(a => a.id === item.id);
      if (asana) newItem = { ...asana, uniqueId, itemType: 'asana', notes: '' };
    } else if (item.type === 'modifier') {
        const modifier = modifiers.find(m => m.id === item.id);
        if (modifier) newItem = { ...modifier, uniqueId, itemType: 'modifier', notes: '' };
    } else if (item.type === 'exercise') {
        const exercise = exercises.find(e => e.id === item.id);
        if (exercise) newItem = { ...exercise, uniqueId, itemType: 'exercise', notes: '' };
    }
    
    if (newItem) {
      setSequence(prev => [...prev, newItem!]);
      setSelectedItemId(uniqueId);
    }
  }, [poses, concepts, asanas, modifiers, exercises]);

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setSequence(prev => {
      const newSequence = [...prev];
      const [draggedItem] = newSequence.splice(dragIndex, 1);
      newSequence.splice(hoverIndex, 0, draggedItem);
      return newSequence;
    });
  }, []);

  const handleSelectItem = (uniqueId: string) => {
    setSelectedItemId(uniqueId);
  };
  
  const updateNotes = (uniqueId: string, notes: string) => {
    setSequence(seq => seq.map(item => item.uniqueId === uniqueId ? { ...item, notes } : item));
  };
  
  const handleExportPdf = () => {
    if (sequence.length === 0) {
      toast({ title: "Secuencia Vacía", description: "Añade al menos un elemento para exportar.", variant: "destructive" });
      return;
    }
    exportSequenceToPdf(sequence, "Mi Secuencia de Acroyoga");
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
    if (item.itemType === 'pose') {
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
      return `${name}${note}`;
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
    const lines = text.split('\n').filter(Boolean);
    if (lines.length === 0) {
        toast({ title: "Importación Vacía", description: "No se encontró contenido para importar.", variant: "destructive" });
        return;
    }

    let itemsAddedCount = 0;
    const newSequenceItems: SequenceItem[] = [];

    lines.forEach(line => {
        const parts = line.split(' :: ');
        const name = parts[0].trim().toLowerCase();
        const notes = parts.length > 1 ? parts.slice(1).join(' :: ').trim() : '';

        let foundItem: any = null;
        let itemType: SequenceItem['itemType'] | null = null;

        // Search in poses
        foundItem = allPosesData.find(item => {
            const enName = (item.nombre.split('\n')[1]?.replace(/[()]/g, '') || item.nombre.split('\n')[0]).toLowerCase();
            const esName = item.nombre.split('\n')[0].toLowerCase();
            return enName === name || esName === name;
        });
        if (foundItem) itemType = 'pose';
        
        // Search in asanas
        if (!foundItem) {
            foundItem = allAsanasData.find(item => item.nombre_sans.toLowerCase() === name || item.nombre_es.toLowerCase() === name);
            if (foundItem) itemType = 'asana';
        }

        // Search in concepts
        if (!foundItem) {
            foundItem = allConceptsData.find(item => item.titulo.toLowerCase() === name);
            if (foundItem) itemType = 'concept';
        }
        
        // Search in modifiers
        if (!foundItem) {
            foundItem = allModifiersData.find(item => item.titulo.toLowerCase() === name);
            if (foundItem) itemType = 'modifier';
        }
        
        // Search in exercises
        if (!foundItem) {
            foundItem = allExercisesData.find(item => {
                const enName = (item.titulo.split('\n')[1]?.replace(/[()]/g, '') || item.titulo.split('\n')[0]).toLowerCase();
                const esName = item.titulo.split('\n')[0].toLowerCase();
                return enName === name || esName === name;
            });
            if (foundItem) itemType = 'exercise';
        }

        if (foundItem && itemType) {
            itemsAddedCount++;
            newSequenceItems.push({
                ...foundItem,
                uniqueId: `${itemType}-${foundItem.id}-${Date.now()}-${Math.random()}`,
                itemType: itemType as SequenceItem['itemType'],
                notes: notes
            });
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

  const handleSearchResultSelect = (item: Pose | Concept | Asana | PoseModifier | Exercise) => {
    if ('nivel' in item) { // It's a Pose
      setActiveView({ type: 'acro', levels: [item.nivel] });
      setSearchSelectedItem(item);
    } else if ('nombre_sans' in item) { // It's an Asana
      setActiveView({ type: 'yoga-glossary' });
    } else if ('enfasis' in item) { // It's an Exercise
      if (item.categoria === 'Individual') {
        setActiveView({ type: 'warmup-individual' });
      } else {
        setActiveView({ type: 'warmup-partner' });
      }
    } else if ('titulo' in item && 'category' in item) { // It's a Concept
      if (item.category === 'Masaje Tailandés') {
        setActiveView({ type: 'thai-glossary' });
      } else if (item.category === 'Yoga') {
        setActiveView({ type: 'yoga-glossary' });
      } else {
        setActiveView({ type: 'acro-glossary' });
      }
    }
  };


  // --- Data processing for Glossaries ---
  const acroConcepts = concepts.filter(c => c.category === 'Principios Fundamentales' || c.category === 'Dinámicas y Transiciones' || c.category === 'Roles y Estilos de Práctica' || c.category === 'Comunicación y Seguridad');
  const thaiConcepts = concepts.filter(c => c.category === 'Masaje Tailandés');
  const yogaConcepts = concepts.filter(c => c.category === 'Yoga');
  const individualWarmups = exercises.filter(e => e.categoria === 'Individual');
  const partnerWarmups = exercises.filter(e => e.categoria === 'En Pareja');

  const acroConceptsByCategory = acroConcepts.reduce((acc, concept) => {
    const { category } = concept;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(concept);
    return acc;
  }, {} as Record<string, Concept[]>);

  const thaiConceptsByCategory = thaiConcepts.reduce((acc, concept) => {
    const { subCategory } = concept;
    if (subCategory && !acc[subCategory]) {
      acc[subCategory] = [];
    }
    if (subCategory) {
      acc[subCategory].push(concept);
    }
    return acc;
  }, {} as Record<string, Concept[]>);

  const yogaConceptsByCategory = yogaConcepts.reduce((acc, concept) => {
    const { subCategory } = concept;
    if (subCategory && !acc[subCategory]) {
      acc[subCategory] = [];
    }
    if (subCategory) {
      acc[subCategory].push(concept);
    }
    return acc;
  }, {} as Record<string, Concept[]>);

  const acroCategoryOrder: (keyof typeof acroConceptsByCategory)[] = [
    'Comunicación y Seguridad',
    'Principios Fundamentales',
    'Dinámicas y Transiciones',
    'Roles y Estilos de Práctica',
  ];

  const thaiCategoryOrder: (keyof typeof thaiConceptsByCategory)[] = [
    'Principios Fundamentales y Filosofía',
    'Contexto Cultural y Ritual',
    'Anatomía Energética',
    'Las 10 Líneas Sen Principales',
    'Técnicas de Aplicación de Presión',
    'Técnicas de Movimiento y Estiramiento',
    'Posiciones del Receptor',
    'Los Cuatro Estados Sublimes (Bhavana)',
    'Herramientas y Entorno',
  ];

 const yogaCategoryOrder: (keyof typeof yogaConceptsByCategory)[] = [
    'Filosofía y Conceptos Clave',
    'El Ciclo de Samsara y la Liberación',
    'Términos Comunes',
    'Tipos de Yoga',
    'Los 8 Miembros del Yoga (Ashtanga)',
    'Pranayama y Energía Sutil',
    'Los 7 Chakras',
    'Técnicas y Enfoques',
  ];

  const getFullAcroGlossaryContent = () => {
    let content = 'Glosario Completo de Acroyoga\n\n';
    content += 'Modificadores de Postura\n\n';
    modifiers.forEach(modifier => {
      content += `**${modifier.titulo}**\n${modifier.descripcion}\n\n`;
    });
    acroCategoryOrder.forEach(category => {
      if (acroConceptsByCategory[category]) {
        content += `${category}\n\n`;
        acroConceptsByCategory[category].forEach(concept => {
          content += `**${concept.titulo}**\n${concept.descripcion}\n\n`;
        });
      }
    });
    return content;
  };
  
  const getFullThaiGlossaryContent = () => {
    let content = 'Glosario Completo de Masaje Tailandés\n\n';
    thaiCategoryOrder.forEach(category => {
      if (thaiConceptsByCategory[category]) {
        content += `${category}\n\n`;
        thaiConceptsByCategory[category].forEach(concept => {
          content += `**${concept.titulo}**\n${concept.descripcion}\n\n`;
        });
      }
    });
    return content;
  };

  const getFullYogaGlossaryContent = () => {
    let content = 'Glosario Completo de Yoga\n\n';
    yogaCategoryOrder.forEach(category => {
      if (yogaConceptsByCategory[category]) {
        content += `${category}\n\n`;
        yogaConceptsByCategory[category].forEach(concept => {
          content += `**${concept.titulo}**\n${concept.descripcion}\n\n`;
        });
      }
    });
    content += 'Glosario de Asanas\n\n';
    asanas.forEach(asana => {
      content += `**${asana.nombre_sans} (${asana.nombre_es})**\n${asana.descripcion}\n\n`;
    });
    return content;
  };
  
  const renderContent = () => {
    if (loading) {
      return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
    }

    switch (activeView.type) {
      case 'what-is-acro':
        return <WhatIsAcroYoga featuredItem={featuredItem} nameDisplay={nameDisplay} />;
      case 'what-is-thai':
        return <WhatIsThaiMassage />;
      case 'acro': {
        const selectedPoses = poses.filter(p => 
          activeView.levels.includes(p.nivel) && 
          p.type !== 'Thai-Massage'
        );
        return <PoseExplorer 
                  poses={selectedPoses} 
                  allPoses={poses} 
                  concepts={concepts} 
                  nameDisplay={nameDisplay} 
                  setNameDisplay={setNameDisplay} 
                />;
      }
      case 'thai':{
        const selectedPoses = poses.filter(p => p.type === 'Thai-Massage' && activeView.levels.includes(p.nivel));
        return <PoseExplorer 
                  poses={selectedPoses} 
                  allPoses={poses} 
                  concepts={concepts} 
                  nameDisplay={nameDisplay} 
                  setNameDisplay={setNameDisplay} 
                />;
      }
      case 'acro-glossary':
        return (
          <div className="space-y-8">
            <div className="mb-4">
              <GlossaryExporter title="Glosario Completo de Acroyoga" content={getFullAcroGlossaryContent()} isGlobal={true} />
            </div>
            <PoseModifiers modifiers={modifiers} poses={poses} concepts={concepts} nameDisplay={nameDisplay} />
            {acroCategoryOrder.map(category => (
              acroConceptsByCategory[category] && <ConceptGlossary key={category} title={category} concepts={acroConceptsByCategory[category]} allPoses={poses} allConcepts={concepts} nameDisplay={nameDisplay} />
            ))}
          </div>
        );
      case 'thai-glossary':
        return (
          <div className="space-y-8">
            <div className="mb-4">
              <GlossaryExporter title="Glosario Completo de Masaje Tailandés" content={getFullThaiGlossaryContent()} isGlobal={true} />
            </div>
            {thaiCategoryOrder.map(category => (
              thaiConceptsByCategory[category] && <ConceptGlossary key={category} title={category} concepts={thaiConceptsByCategory[category]} allPoses={poses} allConcepts={concepts} nameDisplay={nameDisplay}/>
            ))}
          </div>
        );
      case 'yoga-glossary':
        return (
          <div className="space-y-8">
            <div className="mb-4">
              <GlossaryExporter title="Glosario Completo de Yoga" content={getFullYogaGlossaryContent()} isGlobal={true} />
            </div>
            {yogaCategoryOrder.map(category => (
              yogaConceptsByCategory[category] && <ConceptGlossary key={category} title={category} concepts={yogaConceptsByCategory[category]} allPoses={poses} allConcepts={concepts} nameDisplay={nameDisplay}/>
            ))}
            <AsanaGlossary asanas={asanas} allPoses={poses} allConcepts={concepts} nameDisplay={nameDisplay}/>
          </div>
        );
       case 'warmup-individual':
        return <ExerciseGlossary title="Ejercicios de Calentamiento Individual" exercises={individualWarmups} allPoses={poses} allConcepts={concepts} nameDisplay={nameDisplay} />;
      case 'warmup-partner':
        return <ExerciseGlossary title="Ejercicios de Calentamiento en Pareja" exercises={partnerWarmups} allPoses={poses} allConcepts={concepts} nameDisplay={nameDisplay}/>;
      case 'flow-builder':
        return (
          <FlowBuilder
            allPoses={poses}
            allConcepts={concepts}
            allModifiers={modifiers}
            allAsanas={asanas}
            allExercises={exercises}
            sequence={sequence}
            selectedItemId={selectedItemId}
            nameDisplay={nameDisplay}
            setNameDisplay={setNameDisplay}
            handleDrop={handleDrop}
            moveItem={moveItem}
            handleSelectItem={handleSelectItem}
            updateNotes={updateNotes}
            handleExportPdf={handleExportPdf}
            handleExportToText={handleExportToText}
            handleImportSequence={handleImportSequence}
            handleCopyToClipboard={handleCopyToClipboard}
            handleClearSequence={handleClearSequence}
            handleDeleteItem={handleDeleteItem}
          />
        );
       case 'acro-videos':
        return <AcroVideos videos={acroVideos} />;
      default:
        return <WhatIsAcroYoga featuredItem={featuredItem} nameDisplay={nameDisplay} />;
    }
  };

  const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 0: return "Nivel 0: Vuelo Terapéutico";
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Flow 1 – Básico";
        case 5: return "Nivel 5: Intermedio";
        case 6: return "Nivel 6: Flow 2 – Intermedio";
        case 7: return "Nivel 7: Washing Machines";
        case 8: return "Nivel 8: Flow 3 – Avanzado";
        case 9: return "Nivel 9: Icarian Básico";
        case 10: return "Nivel 10: Icarian Intermedio";
        case 11: return "Nivel 11: Whips Básicos";
        case 12: return "Nivel 12: Whips Intermedios";
        case 13: return "Nivel 13: Whips Avanzados";
        case 14: return "Nivel 14: Standing Básico";
        case 15: return "Nivel 15: Standing Intermedio";
        case 16: return "Nivel 16: Standing Avanzado";
        default: return `Nivel ${level}`;
    }
  }
  
  const acroLevels = Array.from(new Set(poses.filter(p => p.type !== 'Thai-Massage').map(p => p.nivel)))
    .sort((a, b) => a - b);
  
  const thaiLevels = Array.from(new Set(poses.filter(p => p.type === 'Thai-Massage').map(p => p.nivel))).sort((a,b) => a - b);


  return (
    <>
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AcroYogaIcon className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-semibold group-data-[collapsible=icon]:hidden">Acro Companion</h1>
            </div>
            <SidebarTrigger className="hidden md:flex" />
          </div>
           <GlobalSearch onSelect={handleSearchResultSelect} nameDisplay={nameDisplay} />
        </SidebarHeader>
        <ScrollArea className="flex-1">
          <SidebarMenu>
             <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveView({ type: 'what-is-acro' })} 
                  isActive={activeView.type === 'what-is-acro'}
                  tooltip="¿Qué es Acroyoga?"
                >
                  <BookOpen />
                  <span>¿Qué es Acroyoga?</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Niveles de Acroyoga" onClick={handleResetAcroView}>
                <Layers />
                <span>Niveles de Acroyoga</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {acroLevels.map(level => (
                  <SidebarMenuSubItem key={`acro-${level}`}>
                    <SidebarMenuSubButton 
                      onClick={() => handleAcroLevelClick(level)} 
                      isActive={activeView.type === 'acro' && activeView.levels.includes(level)}
                    >
                      {getAcroLevelTitle(level)}
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={() => setActiveView({ type: 'flow-builder' })} 
                isActive={activeView.type === 'flow-builder'}
                tooltip="Constructor de Secuencias"
              >
                <Workflow />
                <span>Constructor de Secuencias</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

             <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveView({ type: 'acro-videos' })} 
                  isActive={activeView.type === 'acro-videos'}
                  tooltip="Videos de Acro"
                >
                  <Video/>
                  <span>Videos Acro</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

             <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveView({ type: 'what-is-thai' })} 
                  isActive={activeView.type === 'what-is-thai'}
                  tooltip="¿Qué es Masaje Tai?"
                >
                  <HeartHandshake />
                  <span>¿Qué es Masaje Tai?</span>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Niveles de Masaje Tai" onClick={handleResetThaiView}>
                <Layers />
                <span>Niveles de Masaje Tai</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {thaiLevels.map(level => (
                   <SidebarMenuSubItem key={`thai-${level}`}>
                      <SidebarMenuSubButton onClick={() => handleThaiLevelClick(level)} isActive={activeView.type === 'thai' && activeView.levels.includes(level)}>
                       Nivel {level}
                      </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Calentamiento">
                <Dumbbell />
                <span>Calentamiento</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton onClick={() => setActiveView({ type: 'warmup-individual' })} isActive={activeView.type === 'warmup-individual'}>
                      Individual
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton onClick={() => setActiveView({ type: 'warmup-partner' })} isActive={activeView.type === 'warmup-partner'}>
                      En Pareja
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>

             <SidebarMenuItem>
              <SidebarMenuButton tooltip="Glosarios">
                <BookCopy />
                <span>Glosarios</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton onClick={() => setActiveView({ type: 'acro-glossary' })} isActive={activeView.type === 'acro-glossary'}>
                      Glosario Acroyoga
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton onClick={() => setActiveView({ type: 'thai-glossary' })} isActive={activeView.type === 'thai-glossary'}>
                      Glosario Masaje Tai
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton onClick={() => setActiveView({ type: 'yoga-glossary' })} isActive={activeView.type === 'yoga-glossary'}>
                      Glosario Yoga
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </ScrollArea>
      </Sidebar>
      <SidebarInset>
        <div className="p-4 sm:p-6 lg:p-8 flex-1 w-full">
           <header className="flex items-center justify-between mb-8 md:hidden">
              <div className="flex items-center gap-2">
                 <h1 className="text-2xl font-bold text-primary tracking-tight">Acro Companion</h1>
              </div>
              <SidebarTrigger className="md:hidden"/>
           </header>
          <main>
            {renderContent()}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
     <PoseDetailDialog
        pose={searchSelectedItem}
        allPoses={poses}
        open={!!searchSelectedItem}
        onOpenChange={(open) => !open && setSearchSelectedItem(null)}
        concepts={concepts}
        nameDisplay={nameDisplay}
      />
    </>
  );
}
