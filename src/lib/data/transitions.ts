
import type { Pose } from '@/types';

export const transitionPoses: Pose[] = [
  {
    id: 'tr-fb-th',
    nombre: 'Plancha Frontal → Trono\n(Front Plank → Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-1', 'lb-2'],
    url_video: 'https://www.youtube.com/watch?v=ItPTGnBL2tI',
    descripcion: 'Una transición fundamental para pasar de una postura de equilibrio a una sentada.',
    narrativa_detallada: `
**Inicio:** Comienza en Plancha Frontal estable.
**Desarrollo:**
* **Base:** Dobla las rodillas para bajar al volador. Mientras baja, el volador se recoge (**Tuck**) y la base mueve sus pies desde las caderas del volador a sus glúteos.
* **Volador:** Al sentir el descenso, recoge las piernas hacia el pecho y prepárate para sentarte.
**Culminación:** La base estabiliza al volador en Trono.`,
    musculos: {
      base: ['Control de piernas', 'Core'],
      volador: ['Core', 'Conciencia corporal'],
    },
    calibracion: {
      base: ['Movimiento de pies rápido y preciso.', 'Comunicación clara.'],
      volador: ['Mantente compacto en la transición.', 'Confía en el movimiento.'],
      observador: ['Asegura una transición suave.', 'Vigila el equilibrio.'],
    },
  },
  {
    id: 'tr-bb-th',
    nombre: 'Pájaro Inverso → Trono\n(Back Bird → Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-back-bird-acro', 'lb-2'],
    url_video: 'https://www.youtube.com/watch?v=08wQevc9ux4',
    descripcion: 'Transición desde una apertura de pecho a una postura sentada.',
    narrativa_detallada: `
**Inicio:** Comienza en Pájaro Inverso Acrobático.
**Desarrollo:**
* **Base:** Dobla las rodillas y guía al volador hacia abajo. El volador se desliza por las piernas de la base.
* **Volador:** Usa el core para sentarte, mientras la base reposiciona los pies bajo tus glúteos.
**Culminación:** La base estabiliza al volador en Trono.`,
    musculos: {
      base: ['Control de piernas', 'Fuerza de brazos'],
      volador: ['Core', 'Flexibilidad'],
    },
    calibracion: {
      base: ['Guía el deslizamiento suavemente.', 'Reposiciona los pies rápidamente.'],
      volador: ['Activa el core para sentarte.', 'Sigue la guía de la base.'],
      observador: ['Asiste al volador a sentarse si es necesario.'],
    },
  },
  {
    id: 'tr-th-fb',
    nombre: 'Trono → Plancha Frontal\n(Throne → Front Plank)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['tr-fb-th'],
    url_video: 'https://www.youtube.com/watch?v=ItPTGnBL2tI',
    descripcion: 'La transición inversa, pasando de una postura sentada a una de equilibrio.',
    narrativa_detallada: `
**Inicio:** Comienza en Trono.
**Desarrollo:**
* **Base:** Extiende las piernas para elevar al volador. Mueve los pies desde los glúteos del volador a sus caderas.
* **Volador:** Inclínate hacia adelante, coloca tus manos en las de la base y extiende tu cuerpo a una línea de Plancha Frontal.
**Culminación:** Estabilización en Plancha Frontal.`,
    musculos: {
      base: ['Fuerza y control de piernas', 'Core'],
      volador: ['Core', 'Glúteos', 'Espalda'],
    },
    calibracion: {
      base: ['Extensión suave y controlada.', 'Comunicación sobre el cambio de pies.'],
      volador: ['Mantén una línea fuerte.', 'Confía en la plataforma de la base.'],
      observador: ['Vigila el equilibrio durante la extensión.'],
    },
  },
  {
    id: 'tr-th-bb',
    nombre: 'Trono → Pájaro Inverso\n(Throne → Back Bird)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['tr-bb-th'],
    url_video: 'https://www.youtube.com/watch?v=08wQevc9ux4',
    descripcion: 'Transición de una postura sentada a una apertura de pecho.',
    narrativa_detallada: `
**Inicio:** Comienza en Trono.
**Desarrollo:**
* **Base:** Guía al volador para que se incline hacia atrás. Mueve los pies desde los glúteos a la espalda alta del volador.
* **Volador:** Arquea la espalda y relájate en la postura, manteniendo el core ligeramente activo para la estabilidad.
**Culminación:** Estabilización en Pájaro Inverso.`,
    musculos: {
      base: ['Control de piernas', 'Core'],
      volador: ['Flexibilidad de espalda', 'Confianza'],
    },
    calibracion: {
      base: ['Colocación precisa de los pies.', 'Controla el arco con tus rodillas.'],
      volador: ['Comunica tu nivel de comodidad.', 'Relájate en el estiramiento.'],
      observador: ['Vigila la cabeza del volador.'],
    },
  },
  {
    id: 'tr-sb-fb',
    nombre: 'Pájaro Lateral → Plancha Frontal\n(Side Bird → Front Plank)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-side-bird', 'lb-1'],
    descripcion: 'Una rotación controlada desde un equilibrio lateral a uno frontal.',
    narrativa_detallada: `
**Inicio:** Comienza en Pájaro Lateral estable.
**Desarrollo:**
* **Base:** Inicia una rotación suave con tus piernas, girando al volador para que quede boca abajo. Reposiciona tus pies en sus caderas.
* **Volador:** Mantén el cuerpo como una unidad sólida y sigue la rotación guiada por la base.
**Culminación:** Estabilización en Plancha Frontal.`,
    musculos: {
      base: ['Oblicuos', 'Control de rotación de piernas'],
      volador: ['Oblicuos', 'Core'],
    },
    calibracion: {
      base: ['Rotación lenta y controlada.', 'Comunicación constante.'],
      volador: ['Mantén el cuerpo tenso.', 'Sigue el movimiento de la base.'],
      observador: ['Prepárate para estabilizar las caderas durante la rotación.'],
    },
  },
  {
    id: 'tr-tp-th',
    nombre: 'Trípode → Trono\n(Tripod → Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-21', 'lb-2'],
    descripcion: 'Transición desde una inversión sobre la cabeza a una postura sentada.',
    narrativa_detallada: `
**Inicio:** Comienza en la inversión de Trípode.
**Desarrollo:**
* **Volador:** Baja las piernas lentamente y recoge las rodillas hacia el pecho.
* **Base:** Al mismo tiempo, flexiona las rodillas y mueve los pies desde la cabeza del volador a sus glúteos para recibirlo en Trono.
**Culminación:** Estabilización en Trono.`,
    musculos: {
      base: ['Control de piernas', 'Core'],
      volador: ['Hombros', 'Core', 'Control en el descenso'],
    },
    calibracion: {
      base: ['Movimiento de pies rápido y preciso.', 'Coordina con el descenso del volador.'],
      volador: ['Baja con control, sin colapsar.', 'Activa el core para sentarte.'],
      observador: ['Protege el cuello y la cabeza del volador.', 'Asiste en la transición a sentado.'],
    },
  },
];
