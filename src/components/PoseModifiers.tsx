'use client';

import type { PoseModifier } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GlossaryExporter from './GlossaryExporter';

type PoseModifiersProps = {
  modifiers: PoseModifier[];
};

export default function PoseModifiers({ modifiers }: PoseModifiersProps) {
  const contentToExport = () => {
    let content = 'Modificadores de Postura\n\n';
    modifiers.forEach(modifier => {
      content += `**${modifier.titulo}**\n`;
      content += `${modifier.descripcion}\n\n`;
    });
    return content;
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Modificadores de Postura</CardTitle>
         <GlossaryExporter 
          title="Modificadores de Postura"
          content={contentToExport()} 
        />
      </CardHeader>
      <CardContent>
        {modifiers.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {modifiers.map((modifier) => (
              <AccordionItem value={modifier.id} key={modifier.id}>
                <AccordionTrigger className="text-lg hover:no-underline text-left">
                  {modifier.titulo}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap">
                  {modifier.descripcion}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-muted-foreground">
            No se encontraron modificadores de postura.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
