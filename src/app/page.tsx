'use client';

import { useState, useEffect } from 'react';
import { getPoses, getConcepts, getPoseModifiers, getAsanas } from '@/lib/firestore';
import type { Pose, Concept, Asana, PoseModifier } from '@/types';
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

type View = 
  | { type: 'acro', levels: number[] }
  | { type: 'thai', levels: number[] }
  | { type: 'therapeutic', level: number }
  | { type: 'acro-glossary' }
  | { type: 'thai-glossary' }
  | { type: 'yoga-glossary' }
  | { type: 'what-is-acro' }
  | { type: 'what-is-thai' };


export default function Home() {
  const [poses, setPoses] = useState<Pose[]>([]);
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [modifiers, setModifiers] = useState<PoseModifier[]>([]);
  const [asanas, setAsanas] = useState<Asana[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<View>({ type: 'acro', levels: [1, 2, 4, 5] });

  useEffect(() => {
    async function fetchData() {
      const [posesData, conceptsData, modifiersData, asanasData] = await Promise.all([
        getPoses(),
        getConcepts(),
        getPoseModifiers(),
        getAsanas(),
      ]);
      setPoses(posesData);
      setConcepts(conceptsData);
      setModifiers(modifiersData);
      setAsanas(asanasData);
      setLoading(false);
    }
    fetchData();
  }, []);
  
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

  const handleTherapeuticClick = (level: number) => {
    setActiveView({ type: 'therapeutic', level });
  };
  
  // --- Data processing for Glossaries ---
  const acroConcepts = concepts.filter(c => c.category === 'Principios Fundamentales' || c.category === 'Dinámicas y Transiciones' || c.category === 'Roles y Estilos de Práctica' || c.category === 'Comunicación y Seguridad');
  const thaiConcepts = concepts.filter(c => c.category === 'Masaje Tailandés');
  const yogaConcepts = concepts.filter(c => c.category === 'Yoga');

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
        return <WhatIsAcroYoga />;
      case 'what-is-thai':
        return <WhatIsThaiMassage />;
      case 'acro': {
        const selectedPoses = poses.filter(p => 
          (p.type === 'L-Basing' || p.type === 'Icarian' || p.type === 'Standing' || p.type === 'Transition') &&
          activeView.levels.includes(p.nivel)
        );
        return <PoseExplorer poses={selectedPoses} allPoses={poses} concepts={concepts} />;
      }
      case 'thai':{
        const selectedPoses = poses.filter(p => p.type === 'Thai-Massage' && activeView.levels.includes(p.nivel));
        return <PoseExplorer poses={selectedPoses} allPoses={poses} concepts={concepts} />;
      }
      case 'therapeutic':
        return <PoseExplorer poses={poses.filter(p => p.type === 'Therapeutic' && p.nivel === activeView.level)} allPoses={poses} concepts={concepts} />;
      case 'acro-glossary':
        return (
          <div className="space-y-8">
            <div className="mb-4">
              <GlossaryExporter title="Glosario Completo de Acroyoga" content={getFullAcroGlossaryContent()} isGlobal={true} />
            </div>
            <PoseModifiers modifiers={modifiers} />
            {acroCategoryOrder.map(category => (
              acroConceptsByCategory[category] && <ConceptGlossary key={category} title={category} concepts={acroConceptsByCategory[category]} />
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
              thaiConceptsByCategory[category] && <ConceptGlossary key={category} title={category} concepts={thaiConceptsByCategory[category]} />
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
              yogaConceptsByCategory[category] && <ConceptGlossary key={category} title={category} concepts={yogaConceptsByCategory[category]} />
            ))}
            <AsanaGlossary asanas={asanas} />
          </div>
        );
      default:
        return <WhatIsAcroYoga />;
    }
  };

  const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 2.5: return "Transiciones";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Intermedio";
        case 5: return "Nivel 5: Washing Machines";
        case 6: return "Nivel 6: Icarian Básico";
        case 7: return "Nivel 7: Icarian Intermedio";
        case 8: return "Nivel 8: Standing Básico";
        case 9: return "Nivel 9: Standing Intermedio";
        case 10: return "Nivel 10: Standing Avanzado";
        default: return `Nivel ${level}`;
    }
  }
  
  const acroLevelsWithTransitions = Array.from(new Set(poses.filter(p => p.type !== 'Thai-Massage' && p.type !== 'Therapeutic').map(p => p.nivel)))
  .sort((a,b) => a - b);
  
  const transitionLevel = 2.5;
  const acroLevels = [
    ...acroLevelsWithTransitions.filter(l => l < 3 && l !== transitionLevel),
    transitionLevel,
    ...acroLevelsWithTransitions.filter(l => l >= 3)
  ].filter(l => acroLevelsWithTransitions.includes(l));


  const thaiLevels = Array.from(new Set(poses.filter(p => p.type === 'Thai-Massage').map(p => p.nivel))).sort((a,b) => a - b);
  const therapeuticLevels = Array.from(new Set(poses.filter(p => p.type === 'Therapeutic').map(p => p.nivel))).sort((a,b) => a - b);


  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <AcroYogaIcon className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold">Acro Companion</h1>
          </div>
        </SidebarHeader>
        <ScrollArea className="flex-1">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActiveView({ type: 'what-is-acro' })} isActive={activeView.type === 'what-is-acro'}>¿Qué es Acroyoga?</SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton>Niveles de Acroyoga</SidebarMenuButton>
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
                <SidebarMenuButton onClick={() => handleTherapeuticClick(11)} isActive={activeView.type === 'therapeutic'}>
                  Vuelo Terapéutico
                </SidebarMenuButton>
            </SidebarMenuItem>

             <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActiveView({ type: 'what-is-thai' })} isActive={activeView.type === 'what-is-thai'}>¿Qué es Masaje Tai?</SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>Niveles de Masaje Tai</SidebarMenuButton>
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
              <SidebarMenuButton>Glosarios</SidebarMenuButton>
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
           <header className="flex items-center justify-between mb-8">
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
  );
}
