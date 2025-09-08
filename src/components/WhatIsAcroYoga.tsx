import {
  Users,
  Dumbbell,
  Scale,
  HeartHandshake,
  PersonStanding,
  Bird,
  Eye,
  ShieldCheck,
  MessageSquare,
  Dot,
  Check,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';
import type { Pose, Concept } from '@/types';
import FocusFeature from './FocusFeature';

const benefits = [
  { icon: Users, text: 'Confianza y comunicación' },
  { icon: Dumbbell, text: 'Desarrollo de fuerza' },
  { icon: Scale, text: 'Mejora del equilibrio' },
  { icon: HeartHandshake, text: 'Conexión interpersonal' },
];

const roles = [
  {
    icon: PersonStanding,
    title: 'Base',
    description:
      'Persona que se encuentra en contacto con el suelo y proporciona estabilidad y soporte. Utiliza principalmente las piernas y brazos para sostener al volador.',
  },
  {
    icon: Bird,
    title: 'Volador (Flyer)',
    description:
      'Persona que es elevada y sostenida por la base. Requiere confianza, equilibrio y comunicación constante con la base.',
  },
  {
    icon: Eye,
    title: 'Observador (Spotter)',
    description:
      'Persona que garantiza la seguridad de la práctica. Guía, corrige y está preparada para asistir en caso de desequilibrio o caída.',
  },
];

const calibrationPoints = [
  {
    icon: Scale,
    title: 'Equilibrio',
    description: 'Encontrar el centro de gravedad compartido entre ambos cuerpos.',
  },
  {
    icon: Dot,
    title: 'Puntos de contacto',
    description: 'Identificar y ajustar las zonas de apoyo para distribuir el peso correctamente.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    description: 'Una calibración adecuada previene lesiones y caídas durante la práctica.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicación',
    description: 'Requiere diálogo constante entre los participantes para ajustar posiciones.',
  },
];

type NameDisplay = 'es' | 'en' | 'both';

interface WhatIsAcroYogaProps {
  featuredItem: Pose | Concept | null;
  nameDisplay: NameDisplay;
}

export default function WhatIsAcroYoga({ featuredItem, nameDisplay }: WhatIsAcroYogaProps) {
  return (
    <div className="space-y-8">
      {featuredItem && <FocusFeature item={featuredItem} nameDisplay={nameDisplay}/>}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">¿Qué es el Acroyoga?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <section>
            <p className="text-lg text-muted-foreground">
              El Acroyoga es una práctica que combina la sabiduría del yoga, la fuerza dinámica de las acrobacias y el arte curativo del masaje tailandés. Es una disciplina que se practica en parejas o grupos, fomentando la conexión y la confianza mutua.
            </p>
          </section>

          <section>
              <h3 className="text-xl font-semibold mb-4">Beneficios principales</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg">
                    <benefit.icon className="h-8 w-8 mb-2 text-accent" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
          </section>

          <Separator />

          <section>
            <h3 className="text-xl font-semibold mb-4">Roles Fundamentales</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="p-4 rounded-lg border">
                  <div className="flex items-center gap-3 mb-2">
                    <role.icon className="h-6 w-6 text-primary" />
                    <h4 className="font-bold text-lg">{role.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />
          
          <section className="p-6 bg-secondary/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">La Importancia de la Calibración</h3>
              <p className="text-center text-muted-foreground mb-6">La calibración en acroyoga es el proceso de ajuste mutuo entre la base y el volador para encontrar el equilibrio óptimo y los puntos de contacto adecuados.</p>
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {calibrationPoints.map((point) => (
                       <div key={point.title} className="flex items-start gap-3">
                          <point.icon className="h-5 w-5 mt-1 text-accent shrink-0" />
                          <div>
                              <h4 className="font-semibold">{point.title}</h4>
                              <p className="text-sm text-muted-foreground">{point.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
