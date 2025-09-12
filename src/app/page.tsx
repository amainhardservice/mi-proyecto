

'use client';

import { useState, useEffect } from 'react';
import { getPoses, getConcepts, getPoseModifiers, getAsanas, getExercises } from '@/lib/firestore';
import type { Pose, Concept, Asana, PoseModifier, Exercise } from '@/types';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarInset } from '@/components/ui/sidebar';
import MainContent from '@/components/MainContent';
import { AcroYogaIcon } from '@/components/icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Workflow, Video, BookOpen, Layers, HeartHandshake, BookCopy, Dumbbell, Star } from 'lucide-react';
import GlobalSearch from '@/components/GlobalSearch';
import { PoseDetailDialog } from '@/components/PoseDetailDialog';


export type View = 
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

export type NameDisplay = 'es' | 'en' | 'both';


export default function Home() {
  const [poses, setPoses] = useState<Pose[]>([]);
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [modifiers, setModifiers] = useState<PoseModifier[]>([]);
  const [asanas, setAsanas] = useState<Asana[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<View>({ type: 'acro', levels: [1, 2, 5, 8] });
  const [featuredItem, setFeaturedItem] = useState<Pose | Concept | null>(null);
  const [searchSelectedItem, setSearchSelectedItem] = useState<Pose | null>(null);
  const [nameDisplay, setNameDisplay] = useState<NameDisplay>('en');
  const [openMenus, setOpenMenus] = useState<string[]>([]);

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
  
  const toggleMenu = (menuId: string) => {
    setOpenMenus(prev => 
      prev.includes(menuId) ? prev.filter(id => id !== menuId) : [...prev, menuId]
    );
  };
  
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
    setActiveView({ type: 'acro', levels: [1, 2, 5, 8] });
    if (!openMenus.includes('acro-levels')) {
      toggleMenu('acro-levels');
    }
  };
  
  const handleResetThaiView = () => {
    const allThaiLevels = Array.from(new Set(poses.filter(p => p.type === 'Thai-Massage').map(p => p.nivel))).sort((a,b) => a - b);
    setActiveView({ type: 'thai', levels: allThaiLevels });
     if (!openMenus.includes('thai-levels')) {
      toggleMenu('thai-levels');
    }
  }

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

  const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 0: return "Nivel 0: Vuelo Terapéutico";
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Flow 1 – Básico";
        case 5: return "Nivel 5: Intermedio";
        case 6: return "Nivel 6: Transiciones Intermedias";
        case 7: return "Nivel 7: Flow 2 – Intermedio";
        case 8: return "Nivel 8: Washing Machines";
        case 9: return "Nivel 9: Flow 3 – Avanzado";
        case 10: return "Nivel 10: Icarian Básico";
        case 11: return "Nivel 11: Icarian Intermedio";
        case 12: return "Nivel 12: Whips Básicos";
        case 13: return "Nivel 13: Whips Intermedios";
        case 14: return "Nivel 14: Whips Avanzados";
        case 15: return "Nivel 15: Standing Básico";
        case 16: return "Nivel 16: Standing Intermedio";
        case 17: return "Nivel 17: Standing Avanzado";
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
              <SidebarMenuButton 
                tooltip="Niveles de Acroyoga" 
                onClick={handleResetAcroView} 
                onToggle={() => toggleMenu('acro-levels')}
                isCollapsible={true}
                isExpanded={openMenus.includes('acro-levels')}
              >
                <Layers />
                <span>Niveles de Acroyoga</span>
              </SidebarMenuButton>
              {openMenus.includes('acro-levels') && (
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
              )}
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
              <SidebarMenuButton 
                tooltip="Niveles de Masaje Tai" 
                onClick={handleResetThaiView}
                onToggle={() => toggleMenu('thai-levels')}
                isCollapsible={true}
                isExpanded={openMenus.includes('thai-levels')}
              >
                <Layers />
                <span>Niveles de Masaje Tai</span>
              </SidebarMenuButton>
              {openMenus.includes('thai-levels') && (
                <SidebarMenuSub>
                  {thaiLevels.map(level => (
                    <SidebarMenuSubItem key={`thai-${level}`}>
                        <SidebarMenuSubButton onClick={() => handleThaiLevelClick(level)} isActive={activeView.type === 'thai' && activeView.levels.includes(level)}>
                        Nivel {level}
                        </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Calentamiento"
                onToggle={() => toggleMenu('warmup')}
                isCollapsible={true}
                isExpanded={openMenus.includes('warmup')}
              >
                <Dumbbell />
                <span>Calentamiento</span>
              </SidebarMenuButton>
              {openMenus.includes('warmup') && (
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
              )}
            </SidebarMenuItem>

             <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Glosarios"
                onToggle={() => toggleMenu('glossaries')}
                isCollapsible={true}
                isExpanded={openMenus.includes('glossaries')}
              >
                <BookCopy />
                <span>Glosarios</span>
              </SidebarMenuButton>
              {openMenus.includes('glossaries') && (
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
              )}
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
            <MainContent
              loading={loading}
              activeView={activeView}
              featuredItem={featuredItem}
              poses={poses}
              concepts={concepts}
              modifiers={modifiers}
              asanas={asanas}
              exercises={exercises}
              nameDisplay={nameDisplay}
              setNameDisplay={setNameDisplay}
            />
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
