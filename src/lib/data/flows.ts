
import type { Pose } from '@/types';

export const flowPoses: Pose[] = [
  // FLOW 1: BÁSICO (NIVEL 4)
  {
    id: 'flow-basic-1',
    nombre: 'Pájaro Frontal → Trono → Pájaro Lateral → Plegaria Invertida\n(Front Bird → Throne → Side Bird → Folded Leaf)',
    nivel: 4,
    type: 'Transition',
    prerequisites: ['tr-fb-th', 'lb-side-bird', 'th-folded-leaf'],
    descripcion: 'Una secuencia fluida y fundamental que conecta cuatro posturas básicas, enseñando transiciones suaves y control corporal.',
    narrativa_detallada: `
**Objetivo:** Conectar posturas básicas en un flujo continuo, enfocándose en la comunicación y la suavidad de las transiciones.

**Secuencia del Flow:**
1.  **Inicio:** Comienza en **pose:lb-front-bird**. Mantén el equilibrio y la conexión.
2.  **Transición a Trono:** La base dobla las rodillas, el volador se recoge y la base mueve los pies a los glúteos para aterrizar en **pose:lb-2**.
3.  **Transición a Pájaro Lateral:** Desde Trono, la base extiende una pierna y coloca el pie en la cadera del volador. El volador se inclina lateralmente para entrar en **pose:lb-side-bird**.
4.  **Transición a Plegaria Invertida:** Desde Pájaro Lateral, el volador rota para quedar boca abajo, la base recibe las caderas del volador en ambos pies y el volador se pliega en **pose:th-folded-leaf**.
5.  **Culminación:** Desde Plegaria Invertida, se desmonta de forma segura al suelo.

**Puntos Clave:** La respiración, la comunicación no verbal y el ritmo constante son esenciales.
`,
  },
  {
    id: 'flow-basic-2',
    nombre: 'Pajarito → Trono → Murciélago → Pájaro de Espaldas\n(Baby Bird → Throne → Bat → Back Bird)',
    nivel: 4,
    type: 'Transition',
    prerequisites: ['lb-baby-bird', 'lb-16', 'tr-bb-th'],
    descripcion: 'Un flujo juguetón que explora diferentes orientaciones y transiciones, desde una postura frontal a una de inversión.',
    narrativa_detallada: `
**Objetivo:** Jugar con diferentes orientaciones y desarrollar confianza en las transiciones invertidas.

**Secuencia del Flow:**
1.  **Inicio:** Comienza en la postura juguetona de **pose:lb-baby-bird**.
2.  **Transición a Trono:** El volador se desliza hacia atrás para sentarse en los pies de la base, entrando en **pose:lb-2**.
3.  **Transición a Murciélago:** Desde Trono, el volador se reclina hacia atrás y engancha los pies en las caderas de la base para entrar en **pose:lb-16**.
4.  **Transición a Pájaro de Espaldas:** Desde Murciélago, el volador desengancha los pies, y la base lo guía para arquearse en **pose:lb-back-bird**.
5.  **Culminación:** Desde Pájaro de Espaldas, se puede volver a Trono (**pose:tr-bb-th**) o desmontar de forma segura.
`,
  },
  {
    id: 'flow-basic-3',
    nombre: 'Sofá → Pez sobre Espinillas → Pájaro Frontal → Trono\n(Couch → Fish on Shins → Front Bird → Throne)',
    nivel: 4,
    type: 'Transition',
    prerequisites: ['th-sofa', 'lb-fish-on-shins', 'tr-fb-th'],
    descripcion: 'Un flujo con enfoque terapéutico que progresa desde la relajación hacia posturas de equilibrio activo.',
    narrativa_detallada: `
**Objetivo:** Experimentar una progresión desde una postura completamente pasiva a una activa.

**Secuencia del Flow:**
1.  **Inicio:** Comienza en la postura relajada de **pose:th-sofa**.
2.  **Transición a Pez sobre Espinillas:** El volador se desliza hacia adelante, y la base coloca sus espinillas bajo la espalda alta del volador para **pose:lb-fish-on-shins**.
3.  **Transición a Pájaro Frontal:** El volador se incorpora, la base levanta las piernas y mueve los pies a las caderas del volador para entrar en **pose:lb-front-bird**.
4.  **Transición a Trono:** Se realiza la transición estándar de **pose:tr-fb-th**.
5.  **Culminación:** Se desmonta desde Trono.
`,
  },

  // FLOW 2: INTERMEDIO (NIVEL 6)
  {
    id: 'flow-intermediate-1',
    nombre: 'Estrella → Estrella Lateral → Estrella Invertida → Plancha sobre Manos\n(Star → Side Star → Reverse Star → Free Bird)',
    nivel: 6,
    type: 'Transition',
    prerequisites: ['lb-9', 'lb-12', 'lb-18', 'lb-10'],
    descripcion: 'Un flujo avanzado que conecta varias posturas de equilibrio asimétrico y de inversión, requiriendo un gran control.',
    narrativa_detallada: `
**Objetivo:** Dominar el equilibrio en diferentes planos y transiciones complejas sin tocar el suelo.

**Secuencia del Flow:**
1.  **Inicio:** Establecer un **pose:lb-9** sólido.
2.  **Transición a Estrella Lateral:** Rotación controlada para entrar en **pose:lb-12**.
3.  **Transición a Estrella Invertida:** Continuar la rotación para entrar en **pose:lb-18**.
4.  **Transición a Plancha sobre Manos (Free Bird):** Desde Estrella Invertida, una transición avanzada que requiere que la base cambie el soporte a ambas manos para recibir al volador en **pose:lb-10**.
5.  **Culminación:** Desmontar de forma segura desde Free Bird.
`,
  },
  {
    id: 'flow-intermediate-2',
    nombre: 'Cocodrilo → Pies a Mano → Trono\n(Croc → Foot-to-Hand → Throne)',
    nivel: 6,
    type: 'Transition',
    prerequisites: ['lb-croc', 'lb-14', 'lb-2'],
    descripcion: 'Un flujo de fuerza y equilibrio que combina posturas de inversión sobre manos y pies.',
    narrativa_detallada: `
**Objetivo:** Desarrollar la fuerza y la confianza para las inversiones más avanzadas.

**Secuencia del Flow:**
1.  **Inicio:** Establecer la postura de fuerza **pose:lb-croc**.
2.  **Transición a Pies a Mano:** Desde Croc, la base suelta los pies de apoyo y el volador extiende el cuerpo a una parada de manos mientras la base atrapa los pies para entrar en **pose:lb-14**.
3.  **Transición a Trono:** Desde Pies a Mano, el volador se recoge (**Tuck**) y la base lo baja de forma controlada para que aterrice sentado en **pose:lb-2**.
4.  **Culminación:** Desmontar desde Trono.
`,
  },
  {
    id: 'flow-intermediate-3',
    nombre: 'Rueda Lateral → Estrella → Trono a Horcajadas\n(Cartwheel → Star → Straddle Throne)',
    nivel: 6,
    type: 'Transition',
    prerequisites: ['tr-cartwheel-exit', 'lb-9', 'lb-7'],
    descripcion: 'Un flujo que integra una entrada dinámica con posturas de equilibrio asimétrico.',
    narrativa_detallada: `
**Objetivo:** Combinar una entrada dinámica con posturas de equilibrio que requieren control lateral.

**Secuencia del Flow:**
1.  **Inicio:** El volador entra con una **pose:tr-cartwheel-exit** para aterrizar directamente en **pose:lb-9**.
2.  **Transición a Trono a Horcajadas:** Desde Estrella, el volador se incorpora y la base mueve su pie de apoyo para que el volador aterrice en **pose:lb-7**.
3.  **Culminación:** Desmontar desde Trono a Horcajadas.
`,
  },

  // FLOW 3: AVANZADO (NIVEL 8)
  {
    id: 'flow-advanced-1',
    nombre: 'Rueda Lateral → Estrella → Parada de Manos → Trono a Horcajadas\n(Cartwheel → Star → Handstand → Straddle Throne)',
    nivel: 8,
    type: 'Transition',
    prerequisites: ['flow-intermediate-3', 'lb-11'],
    descripcion: 'Un flujo maestro que combina entradas dinámicas, equilibrios asimétricos e inversiones verticales.',
    narrativa_detallada: `
**Objetivo:** Demostrar el dominio de múltiples disciplinas del L-Basing en una secuencia continua.

**Secuencia del Flow:**
1.  **Inicio:** Entrada dinámica con **pose:tr-cartwheel-exit** a **pose:lb-9**.
2.  **Transición a Parada de Manos:** Desde Estrella, el volador pivota y la base cambia el soporte para entrar en **pose:lb-11**.
3.  **Transición a Trono a Horcajadas:** Desde Parada de Manos, el volador baja a través de una parada de hombros y la base lo recibe en **pose:lb-7**.
4.  **Culminación:** Desmontar desde Trono a Horcajadas.
`,
  },
  {
    id: 'flow-advanced-2',
    nombre: 'Cocodrilo → Pies a Mano → Mano a Mano → Trono\n(Croc → Foot-to-Hand → Hand-to-Hand → Throne)',
    nivel: 8,
    type: 'Transition',
    prerequisites: ['flow-intermediate-2', 'lb-h2h'],
    descripcion: 'La secuencia definitiva de equilibrios sobre manos, mostrando una fuerza, confianza y control excepcionales.',
    narrativa_detallada: `
**Objetivo:** Conectar las posturas de equilibrio sobre manos más desafiantes.

**Secuencia del Flow:**
1.  **Inicio:** Establecer **pose:lb-croc**.
2.  **Transición a Pies a Mano:** Transición fluida a **pose:lb-14**.
3.  **Transición a Mano a Mano (H2H):** Desde Pies a Mano, la base y el volador cambian el agarre para entrar en el pináculo del equilibrio, **pose:lb-h2h**.
4.  **Transición a Trono:** Desde H2H, una bajada controlada a **pose:lb-10**, y luego a **pose:lb-2**.
5.  **Culminación:** Desmontar desde Trono.
`,
  },
  {
    id: 'flow-advanced-3',
    nombre: 'Plancha sobre Manos → Estrella → Estrella Invertida → Mano a Mano\n(Free Bird → Star → Reverse Star → Hand-to-Hand)',
    nivel: 8,
    type: 'Transition',
    prerequisites: ['flow-intermediate-1', 'lb-h2h'],
    descripcion: 'Un flujo que demuestra la maestría en el equilibrio, moviéndose entre posturas asimétricas y la parada de manos sobre manos.',
    narrativa_detallada: `
**Objetivo:** Combinar el equilibrio lateral y el contrapeso con el equilibrio vertical puro.

**Secuencia del Flow:**
1.  **Inicio:** Establecer **pose:lb-10**.
2.  **Transición a Estrella:** El volador gira para entrar en **pose:lb-9**.
3.  **Transición a Estrella Invertida:** Continuar la rotación para entrar en **pose:lb-18**.
4.  **Transición a Mano a Mano (H2H):** Desde Estrella Invertida, una transición altamente compleja para entrar en **pose:lb-h2h**.
5.  **Culminación:** Bajar de H2H a Plancha sobre Manos y luego al suelo.
`,
  },
];
