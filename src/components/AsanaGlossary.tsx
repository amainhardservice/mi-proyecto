'use client';

import type { Asana, Pose, Concept } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion } from '@/components/ui/accordion';
import { AsanaCard } from './AsanaCard';
import GlossaryExporter from './GlossaryExporter';

type NameDisplay = 'es' | 'en' | 'both';

type AsanaGlossaryProps = {
  asanas: Asana[];
  allPoses: Pose[];
  allConcepts: Concept[];
  nameDisplay: NameDisplay;
};

export default function AsanaGlossary({ asanas, allPoses, allConcepts, nameDisplay }: AsanaGlossaryProps) {
  if (asanas.length === 0) {
    return null;
  }
  
  const contentToExport = () => {
    let content = 'Glosario de Asanas\n\n';
    asanas.forEach(asana => {
      content += `**${asana.nombre_sans} (${asana.nombre_es})**\n`;
      content += `${asana.descripcion}\n\n`;
    });
    return content;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Glosario de Asanas</CardTitle>
        <GlossaryExporter 
          title="Glosario de Asanas"
          content={contentToExport()} 
        />
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {asanas.map((asana) => (
            <AsanaCard 
                key={asana.id} 
                asana={asana}
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
