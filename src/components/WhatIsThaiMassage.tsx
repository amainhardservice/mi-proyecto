import { HeartHandshake, Heart, Zap, Waves, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';

const pillars = [
  { icon: Heart, title: 'Metta (Bondad Amorosa)', description: 'La intención de compasión y cuidado que guía cada movimiento del dador.' },
  { icon: Zap, title: 'Líneas Sen', description: 'Canales de energía vital (Prana) que recorren el cuerpo y que se desbloquean con el masaje.' },
  { icon: Waves, title: 'Ritmo y Fluidez', description: 'La práctica se asemeja a una danza meditativa, con transiciones suaves y un ritmo constante.' },
  { icon: Leaf, title: 'Uso del Peso Corporal', description: 'El dador usa su propio peso para aplicar presión, logrando profundidad sin esfuerzo muscular.' },
];

export default function WhatIsThaiMassage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-primary flex items-center gap-3">
          <HeartHandshake /> ¿Qué es el Masaje Tailandés?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground">
            El Masaje Tradicional Tailandés, o "Nuad Boran", es un arte curativo ancestral con raíces en el yoga, la medicina ayurvédica y las prácticas espirituales budistas. A menudo se le llama "yoga para perezosos", ya que el dador guía al receptor a través de una serie de estiramientos similares al yoga, mientras aplica presión en puntos y líneas de energía.
          </p>
        </section>

        <Separator />
        
        <section>
          <h3 className="text-xl font-semibold mb-4">Los Pilares de la Práctica</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4">
                <pillar.icon className="h-8 w-8 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">{pillar.title}</h4>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <Separator />

        <section className="p-6 bg-secondary/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Beneficios Principales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="p-3 bg-card rounded-lg shadow-sm">Reduce el estrés y la ansiedad</div>
            <div className="p-3 bg-card rounded-lg shadow-sm">Aumenta la flexibilidad</div>
            <div className="p-3 bg-card rounded-lg shadow-sm">Alivia la tensión muscular</div>
            <div className="p-3 bg-card rounded-lg shadow-sm">Mejora la circulación</div>
            <div className="p-3 bg-card rounded-lg shadow-sm">Equilibra el flujo de energía</div>
            <div className="p-3 bg-card rounded-lg shadow-sm">Promueve la relajación profunda</div>
            <div className="p-3 bg-card rounded-lg shadow-sm">Mejora el rango de movimiento</div>
            <div className="p-3 bg-card rounded-lg shadow-sm">Fomenta la conciencia corporal</div>
          </div>
        </section>
        
      </CardContent>
    </Card>
  );
}
