'use client';

import type { Exercise, Pose, Concept } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import DetailedDescription from './DetailedDescription';

type ExerciseGlossaryProps = {
  title: string;
  exercises: Exercise[];
  allPoses: Pose[];
  allConcepts: Concept[];
};

export default function ExerciseGlossary({ title, exercises, allPoses, allConcepts }: ExerciseGlossaryProps) {
  if (exercises.length === 0) {
    return null;
  }

  const exercisesByEmphasis = exercises.reduce((acc, exercise) => {
    const { enfasis } = exercise;
    if (!acc[enfasis]) {
      acc[enfasis] = [];
    }
    acc[enfasis].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);

  const emphasisOrder = [
    'Conexión y Respiración',
    'Confianza',
    'Movilidad Articular',
    'Movilidad de Columna',
    'Movilidad de Hombros',
    'Movilidad de Cadera',
    'Estiramiento Dinámico',
    'Cardio Ligero',
    'Activación del Core',
    'Activación de Glúteos',
    'Activación de Piernas',
    'Activación de Espalda',
    'Activación de Hombros',
    'Activación de Cadena Posterior',
    'Fuerza Tren Superior',
    'Fuerza y Movilidad',
    'Fuerza y Coordinación',
    'Fuerza y Confianza',
    'Fuerza y Equilibrio',
    'Fuerza de Piernas',
    'Fuerza de Espalda',
    'Equilibrio',
    'Equilibrio y Conexión',
    'Equilibrio y Contrapeso',
    'Potencia',
    'Potencia y Juego',
    'Coordinación',
    'Coordinación y Core',
    'Contrapeso y Confianza',
    'Flexibilidad',
    'Flexibilidad y Equilibrio',
    'Masaje y Conexión',
    'Movilidad y Conexión',
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      {emphasisOrder.map(emphasis => (
        exercisesByEmphasis[emphasis] && (
          <Card key={emphasis}>
            <CardHeader>
              <CardTitle>{emphasis}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {exercisesByEmphasis[emphasis].map((exercise) => {
                  const nameParts = exercise.titulo.split('\n');
                  const esName = nameParts[0];
                  const enName = nameParts[1];

                  return (
                    <AccordionItem value={exercise.id} key={exercise.id}>
                      <AccordionTrigger className="text-lg hover:no-underline text-left">
                        <div className="flex flex-col items-start">
                          <span>{esName}</span>
                          {enName && <span className="text-sm font-normal text-muted-foreground">{enName}</span>}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap">
                        <DetailedDescription
                            content={exercise.descripcion}
                            concepts={allConcepts}
                            poses={allPoses}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        )
      ))}
    </div>
  );
}
