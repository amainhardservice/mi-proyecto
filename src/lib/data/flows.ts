
import type { Pose } from '@/types';

export const flowPoses: Pose[] = [
  // FLOW 1: BÁSICO (NIVEL 4)
  {
    id: 'flow-basic-1',
    nombre: 'Pájaro Frontal → Trono → Pájaro Lateral → Plegaria Invertida\n(Front Bird → Throne → Side Bird → Folded Leaf)',
    nivel: 4,
    type: 'Flow',
    tags: ['Flow', 'Básico'],
    prerequisites: ['tr-fp-th', 'lb-side-bird', 'th-folded-leaf'],
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
    type: 'Flow',
    tags: ['Flow', 'Básico'],
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
    type: 'Flow',
    tags: ['Flow', 'Básico'],
    prerequisites: ['th-sofa', 'lb-fish-on-shins', 'tr-fp-th'],
    descripcion: 'Un flujo con enfoque terapéutico que progresa desde la relajación hacia posturas de equilibrio activo.',
    narrativa_detallada: `
**Objetivo:** Experimentar una progresión desde una postura completamente pasiva a una activa.

**Secuencia del Flow:**
1.  **Inicio:** Comienza en la postura relajada de **pose:th-sofa**.
2.  **Transición a Pez sobre Espinillas:** El volador se desliza hacia adelante, y la base coloca sus espinillas bajo la espalda alta del volador para **pose:lb-fish-on-shins**.
3.  **Transición a Pájaro Frontal:** El volador se incorpora, la base levanta las piernas y mueve los pies a las caderas del volador para entrar en **pose:lb-front-bird**.
4.  **Transición a Trono:** Se realiza la transición estándar de **pose:tr-fp-th**.
5.  **Culminación:** Se desmonta desde Trono.
`,
  },

  // FLOW 2: INTERMEDIO (NIVEL 7)
  {
    id: 'flow-intermediate-1',
    nombre: 'Estrella → Estrella Lateral → Estrella Invertida → Plancha sobre Manos\n(Star → Side Star → Reverse Star → Free Bird)',
    nivel: 7,
    type: 'Flow',
    tags: ['Flow', 'Intermedio'],
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
    nivel: 7,
    type: 'Flow',
    tags: ['Flow', 'Intermedio'],
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
];
