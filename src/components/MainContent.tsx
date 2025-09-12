
'use client';

import type { Pose, Concept, Asana, PoseModifier, Exercise } from '@/types';
import type { View, NameDisplay } from '@/app/page';

import LevelMap from '@/components/LevelMap';
import ConceptGlossary from '@/components/ConceptGlossary';
import PoseModifiers from '@/components/PoseModifiers';
import WhatIsAcroYoga from '@/components/WhatIsAcroYoga';
import WhatIsThaiMassage from '@/components/WhatIsThaiMassage';
import AsanaGlossary from '@/components/AsanaGlossary';
import GlossaryExporter from './GlossaryExporter';
import FlowBuilder from '@/components/FlowBuilder';
import AcroVideos from '@/components/AcroVideos';
import ExerciseGlossary from '@/components/ExerciseGlossary';
import { allConceptsData, allAsanasData, allModifiersData } from '@/lib/data/glossary';
import { allExercisesData } from '@/lib/data/warmup';
import { 
  getFullAcroGlossaryContent, 
  getFullThaiGlossaryContent, 
  getFullYogaGlossaryContent 
} from '@/lib/glossary';

interface MainContentProps {
  loading: boolean;
  activeView: View;
  featuredItem: Pose | Concept | null;
  poses: Pose[];
  concepts: Concept[];
  modifiers: PoseModifier[];
  asanas: Asana[];
  exercises: Exercise[];
  nameDisplay: NameDisplay;
  setNameDisplay: (value: NameDisplay) => void;
}

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

export default function MainContent({
  loading,
  activeView,
  featuredItem,
  poses,
  concepts,
  modifiers,
  asanas,
  exercises,
  nameDisplay,
  setNameDisplay,
}: MainContentProps) {

  // --- Data processing for Glossaries ---
  const acroConcepts = allConceptsData.filter(c => c.category === 'Principios Fundamentales' || c.category === 'Dinámicas y Transiciones' || c.category === 'Roles y Estilos de Práctica' || c.category === 'Comunicación y Seguridad');
  const thaiConcepts = allConceptsData.filter(c => c.category === 'Masaje Tailandés');
  const yogaConcepts = allConceptsData.filter(c => c.category === 'Yoga');
  const individualWarmups = allExercisesData.filter(e => e.categoria === 'Individual');
  const partnerWarmups = allExercisesData.filter(e => e.categoria === 'En Pareja');
  
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
      return <LevelMap 
                poses={selectedPoses} 
                allPoses={poses} 
                concepts={concepts} 
                nameDisplay={nameDisplay} 
                setNameDisplay={setNameDisplay} 
              />;
    }
    case 'thai':{
      const selectedPoses = poses.filter(p => p.type === 'Thai-Massage' && activeView.levels.includes(p.nivel));
      return <LevelMap 
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
            <GlossaryExporter title="Glosario Completo de Acroyoga" content={getFullAcroGlossaryContent(modifiers, acroConceptsByCategory, acroCategoryOrder)} isGlobal={true} />
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
            <GlossaryExporter title="Glosario Completo de Masaje Tailandés" content={getFullThaiGlossaryContent(thaiConceptsByCategory, thaiCategoryOrder)} isGlobal={true} />
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
            <GlossaryExporter title="Glosario Completo de Yoga" content={getFullYogaGlossaryContent(asanas, yogaConceptsByCategory, yogaCategoryOrder)} isGlobal={true} />
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
        />
      );
     case 'acro-videos':
      return <AcroVideos videos={acroVideos} />;
    default:
      return <WhatIsAcroYoga featuredItem={featuredItem} nameDisplay={nameDisplay} />;
  }
}
