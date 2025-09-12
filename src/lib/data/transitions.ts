
import type { Pose } from '@/types';

export const transitionPoses: Pose[] = [
  {
    id: 'tr-fp-th',
    nombre: 'Plancha Frontal → Trono\n(Front Plank → Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-1', 'lb-2'],
    originPoses: ['lb-1', 'lb-front-bird'],
    destinationPoses: ['lb-2'],
    tags: ['Transición', 'Básico'],
    url_video: 'https://youtu.be/P8PeQpYSlpg',
    descripcion: 'Una transición fundamental para pasar de una postura de equilibrio a una sentada.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-1** o **pose:lb-front-bird** estable. Si estás en Pájaro, vuelve a tomar las manos de la base.
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
    originPoses: ['lb-back-bird'],
    destinationPoses: ['lb-2'],
    tags: ['Transición', 'Básico'],
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
    id: 'tr-th-fp',
    nombre: 'Trono → Plancha Frontal\n(Throne → Front Plank)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['tr-fp-th'],
    originPoses: ['lb-2'],
    destinationPoses: ['lb-1'],
    tags: ['Transición', 'Básico'],
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
    originPoses: ['lb-2'],
    destinationPoses: ['lb-back-bird'],
    tags: ['Transición', 'Básico'],
    descripcion: 'Transición de una postura sentada a una apertura de pecho.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-2**.
**Desarrollo:**
* **Base:** Guía al volador para que se incline hacia atrás, deslizándose por tus piernas.
* **Volador:** A medida que te deslizas, arquea la espalda.
* **Base:** Mientras el volador se desliza, reposiciona tus pies desde sus glúteos a su espalda alta (zona de los omóplatos, nunca la espalda baja) para recibirlo.
**Culminación:** Estabilización en **pose:lb-back-bird**.`,
    musculos: {
      base: ['Control de piernas', 'Core'],
      volador: ['Flexibilidad de espalda', 'Confianza'],
    },
    calibracion: {
      base: ['Controla la velocidad del deslizamiento.', 'La colocación de los pies en la espalda alta debe ser precisa.'],
      volador: ['Confía en el deslizamiento.', 'Mantén el core ligeramente activo para no colapsar.'],
      observador: ['Vigila la cabeza del volador durante la transición.'],
    },
  },
  {
    id: 'tr-sb-fp',
    nombre: 'Pájaro Lateral → Plancha Frontal\n(Side Bird → Front Plank)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-side-bird', 'lb-1'],
    originPoses: ['lb-side-bird'],
    destinationPoses: ['lb-1'],
    tags: ['Transición', 'Básico'],
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
    originPoses: ['lb-21'],
    destinationPoses: ['lb-2'],
    tags: ['Transición', 'Básico'],
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
    nombre: 'Salida en Rueda Lateral\n(Cartwheel Exit)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-shoulderstand-on-feet', 'lb-21'],
    originPoses: ['lb-shoulderstand-on-feet', 'lb-11'],
    destinationPoses: [], // This is an exit, not a transition to another pose
    tags: ['Transición', 'Básico', 'Salida'],
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
    originPoses: ['lb-2'],
    destinationPoses: ['lb-7'],
    tags: ['Transición', 'Básico'],
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
    id: 'tr-st-rst',
    nombre: 'Trono a Horcajadas → Trono Invertido a Horcajadas\n(Straddle Throne → Reverse Straddle Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-7', 'lb-reverse-straddle-throne'],
    originPoses: ['lb-7'],
    destinationPoses: ['lb-reverse-straddle-throne'],
    tags: ['Transición', 'Básico', 'Rotación'],
    url_video: 'https://www.youtube.com/shorts/maMlOteWG90',
    descripcion: 'Una rotación de 180 grados que enseña al volador a cambiar su orientación mientras la base mantiene la misma plataforma de pies.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en un **pose:lb-7** estable, con un agarre de manos firme.

**Desarrollo (La Rotación):**
* **Volador:** Inicia el movimiento inclinando el torso hacia un lado (ej. izquierdo) y levantando ligeramente la cadera opuesta (derecha).
* **Base:** Siente el inicio de la rotación y la facilita. Usa tus manos para guiar las caderas del volador en un círculo. Tu plataforma de pies permanece en los muslos del volador, pero se ajusta para seguir el giro.
* **Volador:** Mantén las piernas en straddle y el core activo. Continúa la rotación hasta completar los 180 grados, quedando de espaldas a la base.
* **Base:** Una vez completado el giro, estabiliza las caderas del volador con tus manos para asegurar la postura de **pose:lb-reverse-straddle-throne**.

**Culminación:**
Estabilización en la postura de Trono Invertido a Horcajadas, listos para transicionar de vuelta o a otra postura como **pose:lb-16**.`,
    musculos: {
        base: ['Core', 'Oblicuos', 'Control de brazos para guiar'],
        volador: ['Core', 'Oblicuos', 'Conciencia espacial'],
    },
    calibracion: {
        base: ['Guía un camino circular claro con tus manos.', 'Mantén tus pies activos para ajustar el soporte durante el giro.', 'El movimiento debe ser continuo, no por partes.'],
        volador: ['Mantén las piernas en straddle para tener un centro de gravedad bajo y estable.', 'Sigue la guía de las manos de la base.', 'La mirada acompaña la rotación.'],
        observador: ['Muévete con la rotación.', 'Tu foco son las caderas del volador.', 'Prepárate para estabilizar al volador al final del giro.'],
    },
  },
  {
    id: 'tr-sbat-rst',
    nombre: 'Murciélago a Horcajadas → Trono Invertido a Horcajadas\n(Straddle Bat → Reverse Straddle Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-24', 'lb-reverse-straddle-throne'],
    originPoses: ['lb-24'],
    destinationPoses: ['lb-reverse-straddle-throne'],
    tags: ['Transición', 'Intermedio', 'Rotación'],
    url_video: 'https://www.youtube.com/watch?v=gaIcLjRULBw',
    descripcion: 'Una transición de rotación que enseña a usar el core para subir desde una inversión colgada a una postura sentada invertida, un movimiento clave en muchas lavadoras.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en una postura de **pose:lb-24** estable. La base sostiene firmemente los tobillos del volador.

**Desarrollo (La Subida y Giro):**
* **Volador:** Inicia el movimiento activando el core para levantar el torso. Usa los brazos para ayudar a tirar de los muslos de la base.
* **Base:** Siente la subida del volador. Ayúdalo tirando de sus tobillos y guiando su torso a una posición vertical.
* **Rotación:** A medida que el volador se sienta, la base y el volador coordinan una rotación suave de 180 grados para que el volador termine de espaldas a la base.
* **Base:** Una vez completado el giro, la base estabiliza las caderas del volador con las manos.

**Culminación:**
Estabilización en la postura de **pose:lb-reverse-straddle-throne**.`,
    musculos: {
        base: ['Core', 'Fuerza de brazos (tirón)', 'Control de piernas'],
        volador: ['Core (muy fuerte)', 'Flexores de cadera', 'Conciencia espacial'],
    },
    calibracion: {
        base: ['Coordina el tirón con la subida del volador.', 'Guía la rotación de manera clara y fluida.', 'Ten listas las manos para estabilizar las caderas.'],
        volador: ['El movimiento es una abdominal, no un tirón de brazos.', 'Mantén las piernas en straddle para la estabilidad.', 'Mira en la dirección del giro.'],
        observador: ['Colócate para poder asistir la subida del torso.', 'Tu principal objetivo es asegurar que el volador llegue a la posición sentada de forma segura.'],
    },
  },
  {
    id: 'tr-st-bat',
    nombre: 'Trono a Horcajadas → Murciélago\n(Straddle Throne → Bat)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-7', 'lb-16'],
    originPoses: ['lb-7'],
    destinationPoses: ['lb-16'],
    tags: ['Transición', 'Básico', 'Familia Murciélago'],
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
    id: 'tr-bat-st',
    nombre: 'Murciélago → Trono a Horcajadas\n(Bat → Straddle Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-16', 'lb-7'],
    originPoses: ['lb-16'],
    destinationPoses: ['lb-7'],
    tags: ['Transición', 'Básico', 'Familia Murciélago'],
    descripcion: 'La salida clásica de Murciélago. Enseña a usar la fuerza del core para volver a una posición sentada desde una inversión.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en la postura de **pose:lb-16**. La base vuelve a tomar las manos del volador.

**Desarrollo:**
* **Volador:** Desengancha los pies de las caderas de la base. Usa tu core para iniciar el movimiento de subida.
* **Base:** Tira suavemente de los brazos del volador y extiende las piernas para ayudarlo a subir.
* **Volador:** Mantén las piernas en straddle y vuelve a una posición sentada.

**Culminación:**
Estabilización en **pose:lb-7**.`,
    musculos: {
      base: ['Fuerza de brazos (tirón)', 'Fuerza de piernas (extensión)'],
      volador: ['Fuerza del core (concéntrica)', 'Control'],
    },
    calibracion: {
      base: ['Coordina tu tirón de brazos con la extensión de tus piernas.', 'El movimiento debe ser fluido.'],
      volador: ['El impulso viene de tu core, no de tus brazos.', 'Mantén las piernas abiertas para no chocar con la base.'],
      observador: ['Prepárate para asistir la subida si el volador se queda atascado.'],
    },
  },
  {
    id: 'tr-ss-st',
    nombre: 'Parada de Hombros → Trono a Horcajadas\n(Shoulderstand → Straddle Throne)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-shoulderstand', 'lb-7'],
    originPoses: ['lb-shoulderstand', 'lb-shoulderstand-on-feet'],
    destinationPoses: ['lb-7'],
    tags: ['Transición', 'Básico'],
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
    originPoses: ['lb-2'],
    destinationPoses: ['lb-shoulderstand', 'lb-shoulderstand-on-feet'],
    tags: ['Transición', 'Básico'],
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
  {
    id: 'tr-fp-ss',
    nombre: 'Plancha Frontal → Parada de Hombros\n(Front Plank → Shoulderstand)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-1', 'lb-shoulderstand'],
    originPoses: ['lb-1', 'lb-front-bird'],
    destinationPoses: ['lb-shoulderstand-on-feet', 'lb-shoulderstand'],
    tags: ['Transición', 'Básico'],
    descripcion: 'Una transición que enseña a pasar de una línea horizontal a una inversión vertical, fundamental para lavadoras.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en **pose:lb-1**.

**Desarrollo:**
* **Base:** Dobla las rodillas para bajar al volador.
* **Volador:** A medida que bajas, mantén la línea y permite que tus hombros se acerquen a los pies de la base.
* **Base:** Cuando el volador está cerca, mueve tus pies desde sus caderas a sus hombros.
* **Base y Volador:** La base extiende las piernas mientras el volador levanta las caderas, entrando en **pose:lb-shoulderstand**.

**Culminación:**
Estabilización en Parada de Hombros.`,
    musculos: {
      base: ['Core', 'Control de piernas'],
      volador: ['Core', 'Fuerza de hombros'],
    },
    calibracion: {
      base: ['Coordina tu flexión de rodillas con el movimiento de pies.', 'La transición debe ser fluida, no en dos pasos.'],
      volador: ['Mantén el cuerpo tenso y predecible.', 'Usa tu core para controlar el cambio de horizontal a vertical.'],
      observador: ['Vigila el espacio entre la cabeza del volador y el suelo.', 'Asiste en la alineación de la parada de hombros.'],
    },
  },
  {
    id: 'tr-fp-bat',
    nombre: 'Plancha Frontal → Murciélago\n(Front Plank → Bat)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['tr-fp-ss', 'tr-bat-st'],
    originPoses: ['lb-1', 'lb-front-bird'],
    destinationPoses: ['lb-16'],
    tags: ['Transición', 'Básico', 'Familia Murciélago'],
    descripcion: 'Una transición más dinámica y avanzada para entrar en una inversión colgada.',
    narrativa_detallada: `
**Inicio:**
1. Comiencen en **pose:lb-1**.

**Desarrollo:**
* **Base y Volador:** Realicen la transición a **pose:lb-shoulderstand** como se describe en **pose:tr-fp-ss**.
* **Base:** Desde Parada de Hombros, dobla las rodillas.
* **Volador:** Pasa tus piernas por fuera y engancha los pies en las caderas de la base.
* **Base:** Una vez que los pies están seguros, suelta las manos.

**Culminación:**
Estabilización en **pose:lb-16**.`,
    musculos: {
      base: ['Fuerza y control para gestionar múltiples transiciones'],
      volador: ['Core fuerte', 'Confianza en las inversiones'],
    },
    calibracion: {
      base: ['Cada paso debe ser deliberado y comunicado.', 'No apresures las transiciones.'],
      volador: ['Mantén la tensión y la forma en cada paso.', 'Sigue la guía de la base.'],
      observador: ['Un observador experimentado que entienda la secuencia completa es crucial.'],
    },
  },
  {
    id: 'tr-ss-bat',
    nombre: 'Parada de Hombros → Murciélago\n(Shoulderstand → Bat)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-shoulderstand', 'lb-16'],
    originPoses: ['lb-shoulderstand', 'lb-shoulderstand-on-feet'],
    destinationPoses: ['lb-16'],
    tags: ['Transición', 'Intermedio', 'Familia Murciélago'],
    descripcion: 'Una transición fluida que pasa de una inversión vertical a una inversión colgada.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-shoulderstand** estable.
**Desarrollo:**
* **Base:** Flexiona las rodillas para bajar al volador.
* **Volador:** En lugar de sentarte, mantén la inversión. Pasa las piernas por fuera de los brazos de la base y engancha los pies en las caderas de la base.
* **Base:** Mueve tus pies de los hombros del volador a una posición neutral, permitiendo que el volador cuelgue.
**Culminación:** Estabilización en **pose:lb-16**.`,
  },
  {
    id: 'tr-st-star',
    nombre: 'Trono a Horcajadas → Estrella\n(Straddle Throne → Star)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Básico', 'Familia Estrella'],
    prerequisites: ['lb-7', 'lb-9'],
    originPoses: ['lb-7'],
    destinationPoses: ['lb-9'],
    descripcion: 'Una de las entradas más comunes y seguras a Estrella. Enseña el cambio de peso lateral y el contrapeso desde una postura estable.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-7** estable, con agarre de manos.
**Desarrollo:**
* **Volador:** Comienza a transferir tu peso hacia un lado (ej. el derecho).
* **Base:** Siente el cambio de peso. Suelta tu pie izquierdo y cambia el agarre de manos para que sea mano izquierda con mano derecha del volador. Mueve tu pie derecho para que quede firmemente en la cadera derecha del volador.
* **Volador:** A medida que la base ajusta su soporte, inclínate lateralmente, usando **Contrapeso**. Extiende tu brazo y pierna libres para formar la estrella.
**Culminación:** Estabilización en **pose:lb-9**.`,
  },
  {
    id: 'tr-fb-star',
    nombre: 'Pájaro Frontal → Estrella\n(Front Bird → Star)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Básico', 'Familia Estrella'],
    prerequisites: ['lb-front-bird', 'lb-9'],
    originPoses: ['lb-1', 'lb-front-bird'],
    destinationPoses: ['lb-9'],
    descripcion: 'Una transición de rotación desde una postura de equilibrio frontal a una lateral.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-1** o **pose:lb-front-bird**. Si estás sin manos, vuelve a conectar el agarre.
**Desarrollo:**
* **Volador:** Inicia una rotación de cadera, girando el cuerpo como una unidad sólida hacia un lado.
* **Base:** Sigue la rotación, liberando un pie y cambiando el soporte al otro pie en la cadera del volador. Ajusta el agarre de manos a uno de contrapeso para **pose:lb-9**.
**Culminación:** Estabilización en **pose:lb-9**.`,
  },
  {
    id: 'tr-ss-star',
    nombre: 'Parada de Hombros → Estrella\n(Shoulderstand → Star)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella'],
    prerequisites: ['lb-shoulderstand', 'lb-9'],
    originPoses: ['lb-shoulderstand'],
    destinationPoses: ['lb-9'],
    descripcion: 'Una transición elegante que enseña a bajar de una inversión vertical a un equilibrio lateral.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-shoulderstand** estable.
**Desarrollo:**
* **Volador:** Comienza a inclinarse lateralmente desde la cadera.
* **Base:** Siente la inclinación. Baja una pierna y mueve el pie de apoyo a la cadera lateral del volador. Cambia el agarre de manos para el contrapeso de Estrella.
* **Volador:** Mantén el core fuerte mientras te mueves del plano vertical al lateral.
**Culminación:** Estabilización en **pose:lb-9**.`,
  },
  {
    id: 'tr-fl-bb',
    nombre: 'Plegaria Invertida → Pájaro de Espaldas\n(Folded Leaf → Back Bird)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Básico', 'Terapéutico'],
    prerequisites: ['th-folded-leaf', 'lb-back-bird'],
    originPoses: ['th-folded-leaf'],
    destinationPoses: ['lb-back-bird'],
    descripcion: 'Una transición terapéutica clave que enseña al volador a pasar de una inversión pasiva a una apertura de pecho activa.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:th-folded-leaf** estable, con el volador colgando relajadamente.
**Desarrollo:**
* **Volador:** Activa el core y comienza a levantar el torso, arqueando la espalda como si quisieras mirar hacia adelante.
* **Base:** Siente la intención del volador. Ayuda guiando sus hombros hacia arriba con tus manos. A medida que el volador se eleva, mueve tus pies desde sus caderas a su espalda alta (zona de los omóplatos).
* **Volador:** Extiende los brazos y activa toda la cadena posterior para entrar en un **pose:lb-back-bird** estable.
**Culminación:** Estabilización en la postura de Pájaro de Espaldas.`,
  },
  {
    id: 'tr-rst-ss',
    nombre: 'Trono Invertido a Horcajadas → Parada de Hombros\n(Reverse Straddle Throne → Shoulderstand)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Intermedio'],
    prerequisites: ['lb-reverse-straddle-throne', 'lb-shoulderstand'],
    originPoses: ['lb-reverse-straddle-throne'],
    destinationPoses: ['lb-shoulderstand'],
    descripcion: 'Una transición que enseña al volador a levantarse desde una postura sentada invertida a una inversión vertical, construyendo fuerza de core.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-reverse-straddle-throne**, con la base sujetando firmemente los tobillos o pantorrillas del volador.
**Desarrollo:**
* **Volador:** Inclínate hacia atrás y levanta las caderas, usando la fuerza de tu core.
* **Base:** Guía y apoya el levantamiento con tus brazos. A medida que las caderas del volador suben, mueve tus pies desde sus muslos a sus hombros.
* **Volador:** Junta las piernas y busca la línea vertical para entrar en **pose:lb-shoulderstand**.
**Culminación:** Estabilización en la Parada de Hombros, con la base aún sosteniendo los tobillos.`,
  },
  {
    id: 'tr-rst-bat',
    nombre: 'Trono Invertido a Horcajadas → Murciélago\n(Reverse Straddle Throne → Bat)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Murciélago'],
    prerequisites: ['lb-reverse-straddle-throne', 'lb-16'],
    originPoses: ['lb-reverse-straddle-throne'],
    destinationPoses: ['lb-16'],
    descripcion: 'Enseña una entrada diferente a Murciélago, desde una orientación ya invertida, requiriendo control y comunicación.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-reverse-straddle-throne**. La base sujeta los tobillos del volador.
**Desarrollo:**
* **Volador:** Suelta el agarre de manos si lo hubiera y pasa las piernas por fuera, buscando enganchar los pies en las caderas de la base.
* **Base:** Siente el movimiento. Suelta un tobillo a la vez para permitir que el volador enganche sus pies. Una vez que un pie está seguro, suelta el otro.
* **Volador:** Una vez que ambos pies están enganchados, relaja el torso hacia abajo.
**Culminación:** Estabilización en la postura de **pose:lb-16**.`,
  },
  {
    id: 'tr-bat-ss',
    nombre: 'Murciélago → Parada de Hombros\n(Bat → Shoulderstand)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Murciélago'],
    prerequisites: ['lb-16', 'lb-shoulderstand'],
    originPoses: ['lb-16'],
    destinationPoses: ['lb-shoulderstand'],
    descripcion: 'Una transición de core que requiere fuerza para pasar de una inversión colgada (pasiva) a una inversión vertical (activa).',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-16**.
**Desarrollo:**
* **Base:** Agarra los tobillos del volador.
* **Volador:** Desengancha los pies de las caderas de la base y usa la fuerza del core para levantar las caderas y el torso hacia la vertical.
* **Base:** Guía el movimiento con los brazos y mueve tus pies desde una posición neutral a los hombros del volador.
**Culminación:** Estabilización en **pose:lb-shoulderstand** con la base sosteniendo los tobillos.`,
  },
  {
    id: 'tr-star-th',
    nombre: 'Estrella → Trono a Horcajadas\n(Star → Straddle Throne)',
    nivel: 3,
    type: 'Transition',
    tags: ['Transición', 'Básico', 'Familia Estrella'],
    prerequisites: ['lb-9', 'lb-7'],
    originPoses: ['lb-9'],
    destinationPoses: ['lb-7'],
    descripcion: 'La salida más común y segura desde Estrella, enseñando cómo bajar de un equilibrio lateral complejo a una postura sentada estable.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-9** estable.
**Desarrollo:**
* **Volador:** Recoge tu brazo y pierna extendidos y comienza a girar las caderas para sentarte.
* **Base:** Siente la intención de bajar. Suelta el contrapeso y prepárate para recibir al volador con tu otra pierna. Cambia el agarre de manos.
* **Volador:** Baja el centro de gravedad y busca la posición sentada.
* **Base:** Mueve tus pies para recibir los muslos del volador en una plataforma de **pose:lb-7**.
**Culminación:** Estabilización en Trono a Horcajadas, listos para desmontar.`,
  },
   {
    id: 'tr-fp-bb',
    nombre: 'Plancha Frontal → Pájaro de Espaldas\n(Front Plank → Back Bird)',
    nivel: 3,
    type: 'Transition',
    prerequisites: ['lb-1', 'lb-back-bird'],
    originPoses: ['lb-1', 'lb-front-bird'],
    destinationPoses: ['lb-back-bird'],
    tags: ['Transición', 'Básico', 'Rotación'],
    url_video: 'https://www.youtube.com/watch?v=hRNM5ZdyjMc',
    descripcion: 'Una transición de rotación fundamental (Helicóptero) que enseña a pasar de una orientación frontal a una de espaldas manteniendo el contacto.',
    narrativa_detallada: `
**Esta transición es a menudo llamada "Helicóptero".**

**Inicio:**
1. Comiencen en una postura estable de **pose:lb-1**, con un agarre de manos firme.

**Desarrollo:**
* **Volador:** Inicia una rotación de 180 grados girando la cabeza y los hombros hacia un lado (ej. izquierdo). El cuerpo debe girar como una unidad sólida, manteniendo la **Línea**.
* **Base:** Sigue y facilita la rotación con tus pies. Tus pies actúan como un "plato giratorio" sobre el cual el volador gira. A medida que el volador gira, reposiciona tus pies desde sus caderas hasta su espalda alta.
* **Volador:** Continúa la rotación hasta quedar de espaldas a la base, arqueando el cuerpo para entrar en la forma de **Pájaro de Espaldas**.
* **Base:** Recibe al volador en **pose:lb-back-bird**, asegurando que tus pies estén en la espalda alta (zona de los omóplatos) para un soporte seguro.

**Culminación:**
Estabilización en la postura de **pose:lb-back-bird**, con o sin manos.`,
    musculos: {
      base: ['Core', 'Oblicuos', 'Control preciso de los pies'],
      volador: ['Core', 'Oblicuos', 'Conciencia corporal para mantener la línea durante la rotación'],
    },
    calibracion: {
      base: ['Mantén un punto de presión constante con tus pies.', 'Guía activamente la rotación; no seas pasivo.', 'Ajusta la posición de tus pies para seguir el centro de gravedad del volador.'],
      volador: ['Gira como un bloque, desde la cabeza hasta los pies.', 'Mantén la línea corporal tensa.', 'Confía en los pies de tu base como el eje de rotación.'],
      observador: ['Muévete alrededor de la pareja, siguiendo la rotación.', 'Tu principal preocupación es que el volador no se deslice de los pies de la base.', 'Prepárate para guiar las caderas del volador si pierde la línea.'],
    },
  },
  {
    id: 'tr-rb-bb',
    nombre: 'Pájaro Reverso → Pájaro de Espaldas\n(Reverse Bird → Back Bird)',
    nivel: 6,
    type: 'Transition',
    prerequisites: ['lb-reverse-bird', 'lb-back-bird'],
    originPoses: ['lb-reverse-bird'],
    destinationPoses: ['lb-back-bird'],
    tags: ['Transición', 'Intermedio', 'Rotación'],
    url_video: 'https://www.youtube.com/watch?v=EyX1aOzGPWg',
    descripcion: 'Una transición rotacional que enseña a pasar de un equilibrio invertido a una apertura de pecho, controlando un giro de 180 grados.',
    narrativa_detallada: `
**Esta es una rotación de 180 grados que requiere un control preciso del core y los pies.**

**Inicio:**
1. Comiencen en una postura estable de **pose:lb-reverse-bird**.

**Desarrollo:**
* **Volador:** Inicia una rotación de 180 grados, girando el cuerpo como una unidad. El movimiento se origina en el core y los oblicuos.
* **Base:** Facilita la rotación con los pies. A medida que el volador gira, debes mover tus pies desde su abdomen/caderas bajas hasta su espalda alta para la recepción.
* **Volador:** Mantén una línea de arco fuerte (**Arch**) durante toda la rotación para no colapsar.
* **Base:** Recibe al volador en **pose:lb-back-bird**, asegurando una plataforma estable.

**Culminación:**
Estabilización en la postura de **pose:lb-back-bird**.`,
    musculos: {
      base: ['Core', 'Control fino de los pies', 'Coordinación'],
      volador: ['Core', 'Oblicuos', 'Fuerza de la espalda para mantener el arco'],
    },
    calibracion: {
      base: ['Tus pies son el eje; permite que el volador gire sobre ellos.', 'Anticipa dónde necesitas colocar los pies para la recepción.', 'La comunicación no verbal es clave.'],
      volador: ['Mantén el arco activo durante todo el giro.', 'Gira desde el centro, no desde la cabeza o las piernas.', 'Confía en el soporte de la base.'],
      observador: ['Observa la rotación y prepárate para guiar las caderas.', 'El riesgo principal es que el volador se deslice durante el giro.'],
    },
  },
];
