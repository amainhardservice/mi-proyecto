'use client';

import type { Concept, Pose } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion } from '@/components/ui/accordion';
import { ConceptCard } from './ConceptCard';
import GlossaryExporter from './GlossaryExporter';

type NameDisplay = 'es' | 'en' | 'both';

type ConceptGlossaryProps = {
  title: string;
  concepts: Concept[];
  allPoses: Pose[];
  allConcepts: Concept[];
  nameDisplay: NameDisplay;
};

export default function ConceptGlossary({ title, concepts, allPoses, allConcepts, nameDisplay }: ConceptGlossaryProps) {
  if (concepts.length === 0) {
    return null; 
  }
  
  const contentToExport = () => {
    let content = `${title}\n\n`;
    concepts.forEach(concept => {
      content += `**${concept.titulo}**\n`;
      content += `${concept.descripcion}\n\n`;
    });
    return content;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <GlossaryExporter title={title} content={contentToExport()} />
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {concepts.map((concept) => (
            <ConceptCard 
                key={concept.id} 
                concept={concept}
                allPoses={allPoses}
                allConcepts={allConcepts}
                nameDisplay={nameDisplay}
             />
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
