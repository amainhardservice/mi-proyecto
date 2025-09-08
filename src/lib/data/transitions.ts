
import type { Pose } from '@/types';

export const transitionPoses: Pose[] = [
  {
    id: 'tr-fb-th',
    nombre: 'Plancha Frontal → Trono\n(Front Plank → Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-1', 'lb-2'],
    url_video: 'https://youtu.be/P8PeQpYSlpg',
    descripcion: 'Una transición fundamental para pasar de una postura de equilibrio a una sentada.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-1** estable.
**Desarrollo:**
* **Base:** Dobla las rodillas para bajar al volador. Mientras baja, el volador se recoge (**Tuck (Recogido/Agrupado)**) y la base mueve sus pies desde las caderas del volador a sus glúteos.
* **Volador:** Al sentir el descenso, recoge las piernas hacia el pecho y prepárate para sentarte.
**Culminación:** La base estabiliza al volador en **pose:lb-2**.`,
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
    nombre: 'Pájaro de Espaldas → Trono\n(Back Bird → Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-back-bird', 'lb-2'],
    url_video: 'https://www.youtube.com/watch?v=08wQevc9ux4',
    descripcion: 'Transición desde una apertura de pecho a una postura sentada.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-back-bird**.
**Desarrollo:**
* **Base:** Dobla las rodillas y guía al volador hacia abajo. El volador se desliza por las piernas de la base.
* **Volador:** Usa el core para sentarte, mientras la base reposiciona los pies bajo tus glúteos.
**Culminación:** La base estabiliza al volador en **pose:lb-2**.`,
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
**Inicio:** Comienza en **pose:lb-2**.
**Desarrollo:**
* **Base:** Extiende las piernas para elevar al volador. Mueve los pies desde los glúteos del volador a sus caderas.
* **Volador:** Inclínate hacia adelante, coloca tus manos en las de la base y extiende tu cuerpo a una línea de **pose:lb-1**.
**Culminación:** Estabilización en **pose:lb-1**.`,
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
    nombre: 'Trono → Pájaro de Espaldas\n(Throne → Back Bird)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['tr-bb-th'],
    url_video: 'https://www.youtube.com/watch?v=08wQevc9ux4',
    descripcion: 'Transición de una postura sentada a una apertura de pecho.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-2**.
**Desarrollo:**
* **Base:** Guía al volador para que se incline hacia atrás. Mueve los pies desde los glúteos a la espalda alta del volador.
* **Volador:** Arquea la espalda y relájate en la postura, manteniendo el core ligeramente activo para la estabilidad.
**Culminación:** Estabilización en **pose:lb-back-bird**.`,
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
**Inicio:** Comienza en **pose:lb-side-bird** estable.
**Desarrollo:**
* **Base:** Inicia una rotación suave con tus piernas, girando al volador para que quede boca abajo. Reposiciona tus pies en sus caderas.
* **Volador:** Mantén el cuerpo como una unidad sólida y sigue la rotación guiada por la base.
**Culminación:** Estabilización en **pose:lb-1**.`,
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
**Inicio:** Comienza en la inversión de **pose:lb-21**.
**Desarrollo:**
* **Volador:** Baja las piernas lentamente y recoge las rodillas hacia el pecho.
* **Base:** Al mismo tiempo, flexiona las rodillas y mueve los pies desde la cabeza del volador a sus glúteos para recibirlo en **pose:lb-2**.
**Culminación:** Estabilización en **pose:lb-2**.`,
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
    {
    id: 'tr-cartwheel-exit',
    nombre: 'Transición: Rueda Lateral\n(Cartwheel)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-shoulderstand-on-feet', 'lb-21'],
    url_video: 'https://www.youtube.com/watch?v=ALaWGbiCIZA',
    url_imagen: 'https://i.ytimg.com/vi/ALaWGbiCIZA/maxresdefault.jpg',
    descripcion: 'Técnica de seguridad fundamental para desmontar de inversiones. Enseña control y conciencia corporal para caídas seguras.',
    narrativa_detallada: `
**Esto no es una postura, sino una habilidad de seguridad crucial.**

**Objetivo:** Aprender a salir de una inversión (como **pose:lb-shoulderstand-on-feet**) de forma controlada y predecible, aterrizando de pie.

**Técnica:**
1.  Desde una inversión estable (ej. **pose:lb-shoulderstand-on-feet**): En lugar de bajar hacia atrás, el volador elige un lado.
2.  **Volador:** Abre las piernas en **Straddle (A horcajadas/Abierto)** y comienza a girar las caderas hacia el lado elegido.
3.  **Volador:** Baja una pierna hacia el suelo, seguida por la otra, imitando el movimiento de una rueda lateral de gimnasia.
4.  **Base:** Sigue y apoya el movimiento, guiando al volador para que aterrice suavemente de pie al lado.
5.  **Observador:** El rol es vital. Guía las caderas del volador durante la rotación y asegura que aterrice de manera estable.

**Importancia:**
*   Dominar la Salida en Rueda elimina el miedo a las inversiones y es un prerrequisito absoluto para intentar posturas como la parada de manos.
`,
  },
  {
    id: 'tr-th-st',
    nombre: 'Trono → Trono a Horcajadas\n(Throne → Straddle Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-2', 'lb-7'],
    descripcion: 'Transición fundamental que enseña control en las posturas sentadas y sirve como puerta de entrada a muchas otras posturas.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en una postura estable de **pose:lb-2**, con un agarre de manos.
2. **Volador:** Se inclina ligeramente hacia adelante para señalar el inicio de la transición.
3. **Base:** Entiende la señal y prepara una pierna (ej. la derecha) para que se extienda.

**Desarrollo:**
* **Volador:** Levanta la pierna del mismo lado que la pierna extendida de la base (pierna derecha) y pásala por encima de la pierna de la base.
* **Base:** Extiende completamente la pierna derecha mientras mantienes la izquierda doblada para dar espacio. Una vez que la pierna del volador ha pasado, coloca ambos pies en la parte interna de los muslos del volador, en una posición de **pose:lb-7**.
* **Volador:** Termina el movimiento sentándote erguido en **Trono a Horcajadas**.

**Culminación:**
Estabilización en **pose:lb-7**, listos para la siguiente transición o para desmontar.`,
    musculos: {
      base: ['Control de piernas (una extendida, una flexionada)', 'Core', 'Fuerza de brazos para guiar'],
      volador: ['Flexores de cadera', 'Core', 'Aductores'],
    },
    calibracion: {
      base: ['El movimiento debe ser claro y espacioso.', 'Coloca los pies en una base ancha para la recepción en Straddle Throne.'],
      volador: ['Mantén el torso cerca de la base.', 'Usa el agarre de manos para mantenerte estable, no para colgarte.'],
      observador: ['Observa el equilibrio lateral durante el cambio de piernas.', 'Asegura que el volador no se vaya hacia un lado.'],
    },
  },
  {
    id: 'tr-st-bat',
    nombre: 'Trono a Horcajadas → Murciélago\n(Straddle Throne → Bat)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-7', 'lb-16'],
    descripcion: 'La entrada más clásica y segura a la postura de Murciélago. Enseña confianza en la inversión y control del descenso.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en un **pose:lb-7** estable, con un agarre de manos firme.

**Desarrollo:**
* **Volador:** Comunica que va a inclinarse hacia atrás. Mantén las piernas activas en straddle.
* **Base:** Flexiona las rodillas para bajar el centro de gravedad, controlando el descenso del volador con el agarre de manos y las piernas.
* **Volador:** A medida que te inclinas hacia atrás, pasas por una fase de **pose:lb-24**. Mantén la confianza y permite que tu torso cuelgue.
* **Volador:** Pasa tus piernas por fuera de los brazos de la base y engancha tus tobillos/empeines en los flexores de la cadera de la base.

**Culminación:**
Una vez que el volador ha enganchado firmemente los pies, la base puede soltar las manos. La postura final es **pose:lb-16**.`,
    musculos: {
      base: ['Fuerza de piernas (excéntrica)', 'Core', 'Fuerza de agarre'],
      volador: ['Core', 'Confianza', 'Relajación de la espalda'],
    },
    calibracion: {
      base: ['Controla la velocidad del descenso.', 'No sueltes las manos hasta que el volador confirme que está seguro.'],
      volador: ['Mantén el core activo hasta que tus pies estén enganchados.', 'Comunica claramente si necesitas volver a subir.'],
      observador: ['Colócate debajo de la cabeza/hombros del volador.', 'Protege la cabeza del volador del suelo.'],
    },
  },
  {
    id: 'tr-ss-st',
    nombre: 'Parada de Hombros → Trono a Horcajadas\n(Shoulderstand → Straddle Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-shoulderstand', 'lb-7'],
    descripcion: 'Una transición elegante que enseña al volador a bajar de una inversión vertical a una postura sentada con control del core.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en una postura de **pose:lb-shoulderstand** estable y alineada, con agarre de manos.

**Desarrollo:**
* **Volador:** Abre lentamente las piernas a una posición de **Straddle (A horcajadas/Abierto)**, manteniendo la cadera sobre los hombros.
* **Base:** Prepárate para el cambio de peso. Mantén la plataforma de los pies estable.
* **Volador:** Con control del core, flexiona las caderas y comienza a bajar el torso, como si te fueras a sentar en el aire.
* **Base:** En el momento preciso, mueve tus pies rápidamente desde los hombros del volador a la parte interna de sus muslos.

**Culminación:**
La base recibe al volador en sus pies, estabilizando la postura de **pose:lb-7**.`,
    musculos: {
      base: ['Precisión y velocidad de pies', 'Core', 'Comunicación no verbal'],
      volador: ['Core (control excéntrico)', 'Flexibilidad de isquiotibiales', 'Aductores'],
    },
    calibracion: {
      base: ['Anticipa el movimiento del volador.', 'El cambio de pies debe ser un movimiento rápido y seguro.'],
      volador: ['Baja con control, no te dejes caer.', 'Mantén las piernas en straddle activas durante toda la transición.'],
      observador: ['Observa el descenso.', 'Asegura que la recepción de la base sea limpia y el volador quede estable.'],
    },
  },
  {
    id: 'tr-th-ss',
    nombre: 'Trono → Parada de Hombros\n(Throne → Shoulderstand)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-2', 'lb-shoulderstand'],
    descripcion: 'Transición que desarrolla la fuerza y confianza para entrar en inversiones desde una postura sentada estable.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en **pose:lb-2** con un agarre de manos firme y los brazos de la base extendidos.

**Desarrollo:**
* **Volador:** Inicia el movimiento empujando desde las manos de la base y levantando activamente las caderas.
* **Base:** Siente la intención del volador y ayuda con una pequeña elevación. Mientras las caderas suben, mueve tus pies rápidamente desde los glúteos del volador a sus hombros.
* **Volador:** Mantén el core fuerte y busca la línea vertical llevando las caderas sobre los hombros. Puedes mantener las piernas en **Tuck (Recogido/Agrupado)** inicialmente para mayor control.

**Culminación:**
Estabilización en **pose:lb-shoulderstand**, ya sea con las piernas recogidas, en carpa o extendidas.`,
    musculos: {
      base: ['Velocidad y precisión de pies', 'Fuerza de brazos y core para estabilizar'],
      volador: ['Fuerza de Core y brazos para iniciar el levantamiento', 'Control corporal'],
    },
    calibracion: {
      base: ['La clave es la velocidad y precisión de tus pies.', 'Siente el momento exacto en que el peso se aligera para mover los pies.'],
      volador: ['Empuja, no solo tires. Usa la fuerza de todo tu cuerpo.', 'Mantén una forma compacta para facilitar la subida.'],
      observador: ['Colócate para poder guiar las caderas del volador hacia la vertical.', 'Asegura que la colocación de los pies de la base en los hombros sea correcta.'],
    },
  },
];
