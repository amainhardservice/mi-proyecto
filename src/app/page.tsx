'use client';

import { useState, useEffect } from 'react';
import { getPoses, getConcepts, getPoseModifiers, getAsanas } from '@/lib/firestore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PoseExplorer from '@/components/PoseExplorer';
import ConceptGlossary from '@/components/ConceptGlossary';
import PoseModifiers from '@/components/PoseModifiers';
import WhatIsAcroYoga from '@/components/WhatIsAcroYoga';
import WhatIsThaiMassage from '@/components/WhatIsThaiMassage';
import { AcroYogaIcon } from '@/components/icons';
import type { Pose, Concept, Asana, PoseModifier } from '@/types';
import AsanaGlossary from '@/components/AsanaGlossary';
import GlossaryExporter from '@/components/GlossaryExporter';
import { FileDown, Loader2 } from 'lucide-react';
import ContentExporter from '@/components/ContentExporter';

export default function Home() {
  const [poses, setPoses] = useState<Pose[]>([]);
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [modifiers, setModifiers] = useState<PoseModifier[]>([]);
  const [asanas, setAsanas] = useState<Asana[]>([]);
  const [loading, setLoading] = useState(true);

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

  const lBasingPoses = poses.filter(p => p.type === 'L-Basing');
  const icarianPoses = poses.filter(p => p.type === 'Icarian');
  const standingAcroPoses = poses.filter(p => p.type === 'Standing');
  const thaiMassagePoses = poses.filter(p => p.type === 'Thai-Massage');
  
  const getFullAcroGlossaryContent = () => {
    let content = 'Glosario Completo de Acroyoga\n\n';
    
    // Pose Modifiers
    content += 'Modificadores de Postura\n\n';
    modifiers.forEach(modifier => {
      content += `**${modifier.titulo}**\n${modifier.descripcion}\n\n`;
    });
    
    // Concepts by category
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

  if (loading) {
     return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-5xl mb-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <AcroYogaIcon className="h-12 w-12 text-primary" />
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary tracking-tight">
            Acro Companion
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Tu guía interactiva de posturas y conceptos de Acroyoga.
        </p>
      </header>
      <main className="w-full max-w-5xl">
        <Tabs defaultValue="acroyoga" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/80">
            <TabsTrigger value="acroyoga">Acroyoga</TabsTrigger>
            <TabsTrigger value="thai-massage">Masaje Tailandés</TabsTrigger>
            <TabsTrigger value="concepts">Conceptos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="acroyoga" className="mt-6 space-y-8">
            <div id="acroyoga-content-to-export" className="space-y-8">
              <div className="flex justify-end">
                <ContentExporter elementId="acroyoga-content-to-export" title="Guía de Acroyoga" />
              </div>
              <WhatIsAcroYoga />
              <Tabs defaultValue="l-basing" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="l-basing">Acroyoga (L-Basing)</TabsTrigger>
                      <TabsTrigger value="icarian">Juegos Icarianos</TabsTrigger>
                      <TabsTrigger value="standing-acro">Acro de Pie (Standing)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="l-basing" className="mt-6">
                      <PoseExplorer 
                        poses={lBasingPoses} 
                        allPoses={poses}
                        concepts={concepts}
                      />
                  </TabsContent>
                  <TabsContent value="icarian" className="mt-6">
                      <PoseExplorer 
                        poses={icarianPoses} 
                        allPoses={poses}
                        concepts={concepts}
                      />
                  </TabsContent>
                   <TabsContent value="standing-acro" className="mt-6">
                      <PoseExplorer 
                        poses={standingAcroPoses} 
                        allPoses={poses}
                        concepts={concepts}
                      />
                  </TabsContent>
              </Tabs>
            </div>
          </TabsContent>

          <TabsContent value="thai-massage" className="mt-6 space-y-8">
            <div id="thai-massage-content-to-export" className="space-y-8">
              <div className="flex justify-end">
                  <ContentExporter elementId="thai-massage-content-to-export" title="Guía de Masaje Tailandés" />
              </div>
              <WhatIsThaiMassage />
              <PoseExplorer 
                poses={thaiMassagePoses}
                allPoses={poses}
                concepts={concepts}
                />
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="mt-6">
             <Tabs defaultValue="acro-concepts" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="acro-concepts">Glosario Acroyoga</TabsTrigger>
                    <TabsTrigger value="thai-concepts">Glosario Masaje Tailandés</TabsTrigger>
                    <TabsTrigger value="yoga-concepts">Glosario Yoga</TabsTrigger>
                </TabsList>
                <TabsContent value="acro-concepts" className="mt-6 space-y-8">
                    <div className="mb-4">
                      <GlossaryExporter 
                        title="Glosario Completo de Acroyoga" 
                        content={getFullAcroGlossaryContent()} 
                        isGlobal={true}
                      />
                    </div>
                    <PoseModifiers modifiers={modifiers} />
                    {acroCategoryOrder.map(category => (
                      acroConceptsByCategory[category] && (
                        <ConceptGlossary 
                          key={category}
                          title={category}
                          concepts={acroConceptsByCategory[category]} 
                        />
                      )
                    ))}
                </TabsContent>
                 <TabsContent value="thai-concepts" className="mt-6 space-y-8">
                    <div className="mb-4">
                        <GlossaryExporter 
                            title="Glosario Completo de Masaje Tailandés"
                            content={getFullThaiGlossaryContent()} 
                            isGlobal={true}
                        />
                    </div>
                    {thaiCategoryOrder.map(category => (
                      thaiConceptsByCategory[category] && (
                        <ConceptGlossary 
                          key={category}
                          title={category}
                          concepts={thaiConceptsByCategory[category]} 
                        />
                      )
                    ))}
                </TabsContent>
                 <TabsContent value="yoga-concepts" className="mt-6 space-y-8">
                    <div className="mb-4">
                        <GlossaryExporter 
                            title="Glosario Completo de Yoga"
                            content={getFullYogaGlossaryContent()} 
                            isGlobal={true}
                        />
                    </div>
                    {yogaCategoryOrder.map(category => (
                      yogaConceptsByCategory[category] && (
                        <ConceptGlossary 
                          key={category}
                          title={category}
                          concepts={yogaConceptsByCategory[category]} 
                        />
                      )
                    ))}
                    <AsanaGlossary asanas={asanas} />
                </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
