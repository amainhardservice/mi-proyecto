

'use server';

import type { Asana, Pose, Concept, PoseModifier } from '@/types';
// No longer importing icons here, they are handled client-side.


// No longer importing AI flows here, they are called from server actions in page.tsx/PoseExplorer.tsx

const allPosesData: Pose[] = [
  // L-BASING: NIVEL 1
  {
    id: '25',
    nombre: 'Sofá\n(Couch)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    descripcion: 'Una postura terapéutica relajante donde el volador se sienta cómodamente en la plataforma de las piernas de la base.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate boca arriba, levanta las piernas y dobla las rodillas para que tus espinillas estén paralelas al suelo, creando una plataforma.
2.  **Volador:** Párate de espaldas a la base, entre sus pies.
3.  **Base:** Guía al volador para que se siente en tus espinillas, como si fuera un sofá. Tus pies pueden cruzarse debajo del volador para mayor comodidad.
4.  **Volador:** Siéntate cómodamente, con la espalda apoyada en los muslos de la base.

**Desarrollo:**
*   **Base:** Esta es una postura de descanso para ti. Ajusta la altura de tus piernas para la comodidad del volador. Mantén el **Core** ligeramente activo para la estabilidad.
*   **Volador:** Es una postura puramente receptiva. Relájate, respira. Puedes dejar que tu cabeza descanse en los hombros o el pecho de la base.
*   **Puntos de Contacto:** La espalda y los glúteos del volador descansan sobre las espinillas y los muslos de la base.
*   **Transición a Trono:** Desde esta postura, la base puede bajar sus piernas, el volador se pone de pie brevemente y pueden entrar directamente en **Trono (Throne)**. Esta es una transición fundamental.

**Culminación:**
1.  **Volador:** Inclínate hacia adelante.
2.  **Base:** Guía al volador con las manos para que se ponga de pie de forma segura.
`,
  },
  {
    id: '15',
    nombre: 'Plancha Frontal\nsobre Espinillas',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['25'],
    descripcion: 'El volador se equilibra en plancha sobre las espinillas de la base. Enseña la línea corporal y la activación del core.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate boca arriba, levanta las piernas y dobla las rodillas para que tus espinillas estén paralelas al suelo, creando una plataforma estable, como en **Sofá (Couch)**.
2.  **Volador:** Colócate en posición de plancha en el suelo, con los pies apuntando hacia la base.
3.  **Base:** Guía al volador para que coloque sus caderas sobre tus espinillas.
4.  **Volador:** Con el **Core** muy activo, levanta los pies del suelo para que tu cuerpo forme una línea recta desde los hombros hasta los talones, sostenida por la base.

**Desarrollo:**
*   **Base:** Mantén tus espinillas como una plataforma sólida. Debes resistir el peso del volador. Es un gran ejercicio de fuerza para ti también.
*   **Volador:** Mantén la tensión en todo el cuerpo, especialmente en el **Core** y los glúteos, para evitar que tus caderas se caigan. Esta es la esencia de la **Línea** y el **Hollow Body**.
*   **Puntos de Contacto:** Las caderas y el abdomen bajo del volador descansan sobre las espinillas de la base.

**Culminación:**
1.  **Volador:** Comunica la bajada. Baja un pie y luego el otro al suelo de forma controlada.
2.  **Base:** Mantén la plataforma estable hasta que el volador esté seguro en el suelo.
`,
    musculos: {
      base: ["Core", "Cuádriceps (isométrico)"],
      volador: ["Core", "Glúteos", "Hombros", "Espalda"],
    },
    calibracion: {
      base: ["Mantén las espinillas paralelas al suelo.", "Ofrece una base ancha y estable.", "Comunica tu estabilidad."],
      volador: ["Activa todo tu cuerpo para mantener la línea.", "No dejes que las caderas caigan.", "Respira de manera constante."],
      observador: ["Vigila la línea del volador.", "Ayuda a corregir si las caderas están muy altas o muy bajas.", "Asegura una salida controlada."],
    },
  },
  {
    id: 'fish-on-shins',
    nombre: 'Pez en Espinillas\n(Fish on Shins)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['15'],
    descripcion: 'Una apertura de pecho terapéutica que sirve como excelente preparación para posturas como Pájaro Inverso y Ballena.',
    narrativa_detallada: `
**Inicio:**
1. **Base:** Comienza como si fueras a hacer una **Plancha Frontal sobre Espinillas (Front Plank on Shins)**, con tus espinillas paralelas al suelo.
2. **Volador:** En lugar de colocarte en plancha, siéntate de espaldas a la base, entre sus pies.
3. **Volador:** Con la guía de la base, acuéstate hacia atrás, colocando tu espalda alta (zona de los omóplatos) sobre las espinillas de la base.
4. **Base:** Ajusta la altura de tus espinillas para la comodidad del volador. Puedes sujetar sus manos o hombros para dar seguridad.

**Desarrollo:**
* **Base:** Mantén una plataforma estable. Puedes ofrecer un suave balanceo para relajar al volador.
* **Volador:** Relaja tu cabeza y cuello hacia atrás, permitiendo que tu pecho se abra. Mantén las rodillas dobladas con los pies en el suelo o extiéndelas si te sientes cómodo.

**Culminación:**
1. **Volador:** Usa tu core para levantar la cabeza primero.
2. **Base:** Ayuda al volador a sentarse y luego a ponerse de pie.
`,
    musculos: {
      base: ["Core", "Cuádriceps (isométrico)"],
      volador: ["Estiramiento de pectorales y abdomen"],
    },
    calibracion: {
      base: ["Ofrece una base cómoda y estable.", "Comunica constantemente.", "Guía la salida con cuidado."],
      volador: ["Relájate y respira en la apertura.", "Comunica cualquier incomodidad.", "Muévete lentamente."],
      observador: ["Vigila la cabeza del volador.", "Asegura una salida suave."],
    },
  },
  {
    id: 'shoulderstand-on-shins',
    nombre: 'Parada de Hombros\nsobre Espinillas',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['15'],
    descripcion: 'Una inversión segura sobre las espinillas de la base. Enseña la alineación de caderas sobre hombros en una plataforma estable.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Comienza con la misma plataforma de **Plancha Frontal sobre Espinillas**, espinillas paralelas al suelo.
2.  **Volador:** De espaldas a la base, coloca tus manos en el suelo y tus hombros sobre las espinillas de la base.
3.  **Base:** Sujeta los hombros del volador con tus manos para estabilizar.
4.  **Volador:** Camina con los pies hacia la base y levanta las caderas, entrando en una parada de hombros con el peso distribuido entre tus manos y la plataforma de la base.

**Desarrollo:**
*   **Base:** Mantén la plataforma fuerte y estable. La mayor parte del peso del volador está en tus espinillas.
*   **Volador:** Mantén el core activo y busca la línea vertical con tus caderas sobre los hombros. Es un excelente preparativo para inversiones más avanzadas.

**Culminación:**
1.  **Volador:** Baja una pierna y luego la otra de forma controlada.
2.  **Base:** Mantén la estabilidad hasta que el volador esté seguro en el suelo.
`,
    musculos: {
      base: ["Core", "Cuádriceps"],
      volador: ["Hombros", "Core", "Conciencia de inversión"],
    },
    calibracion: {
      base: ["Proporciona una plataforma sólida y predecible.", "Usa tus manos para dar confianza."],
      volador: ["Mantén el cuello largo y protegido.", "Sube y baja con control."],
      observador: ["Asegura que el volador no ponga demasiado peso en su cabeza.", "Guía las caderas a la vertical."],
    },
  },
  {
    id: '1',
    nombre: 'Pájaro Frontal\n(Front Bird)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    descripcion: 'Postura fundamental. El volador se equilibra sobre los pies de la base, construyendo confianza y comunicación.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate boca arriba. Levanta las piernas y flexiona las rodillas para que tus espinillas queden paralelas al suelo. Coloca tus pies en las caderas delanteras del volador (los huesos de la cadera). Tus pies deben estar paralelos y a la anchura de las caderas.
2.  **Volador:** Colócate de pie frente a los pies de la base. Toma las manos de la base con un agarre de "muñeca con muñeca" (**Hand-to-Hand grip**). Transfiere tu peso hacia adelante, manteniendo los brazos rectos.
3.  **Base:** A medida que sientes el peso del volador, extiende lentamente las piernas hasta que estén rectas, a 90 grados del suelo. Los brazos del volador y los tuyos deben estar rectos, formando pilares.

**Desarrollo:**
*   **Base:** Mantén las piernas verticales y activas. Tus pies son el volante; úsalos para hacer microajustes y mantener el equilibrio del volador. El contacto principal es en la parte media de tus pies con las crestas ilíacas (huesos de la cadera) del volador.
*   **Volador:** Mantén tu cuerpo en una línea recta y tensa (**Hollow Body**), desde los talones hasta la cabeza. El **Core** debe estar muy activo. La mirada puede ir hacia tus manos o hacia adelante.
*   **Variaciones de Confianza:** Una vez estable, puedes soltar las manos y extender los brazos hacia los lados como un pájaro. Practicar esta variación **sin manos** es crucial para desarrollar la confianza y el control necesarios para posturas más avanzadas.

**Culminación:**
1.  **Volador:** Si soltaron las manos, vuelvan a conectarlas.
2.  **Base:** Dobla lentamente las rodillas, trayendo al volador hacia abajo con control.
3.  **Volador:** Mantén el cuerpo tenso y aterriza sobre tus pies de manera suave, un pie a la vez.
`,
    musculos: { base: ['Cuádriceps', 'Isquiotibiales', 'Core'], volador: ['Core', 'Glúteos', 'Espalda'] },
    calibracion: {
      base: ['Piernas a 90 grados', 'Usa los pies para dirigir', 'Comunicación verbal'],
      volador: ['Cuerpo como una tabla (línea)', 'Mirada en un punto fijo', 'Confianza'],
      observador: ['Cerca de las caderas del volador', 'Asegura un descenso seguro'],
    },
  },
  {
    id: '2',
    nombre: 'Trono\n(Throne)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    descripcion: 'La base crea un asiento para el volador. Postura estable y cómoda para conectar.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo. Extiende los brazos hacia arriba.
2.  **Volador:** Párate de espaldas a la base, entre sus pies. Lentamente, inclínate hacia atrás y siéntate sobre los pies de la base, que estarán flexionados para crear un "asiento".
3.  **Base:** Coloca tus pies flexionados (dedos apuntando hacia arriba) justo debajo de los glúteos del volador. A medida que el volador se sienta, levanta tus pies del suelo hasta que tus espinillas estén paralelas al suelo. Toma las manos del volador para mayor estabilidad.

**Desarrollo:**
*   **Base:** Mantén tus espinillas como una plataforma estable. Puedes ajustar la altura flexionando o extendiendo un poco más las rodillas. Para un **Trono Alto**, extiende las piernas casi por completo.
*   **Volador:** Mantén la espalda recta y el **Core** activo. El peso debe estar centrado. Puedes soltar las manos y probar diferentes variaciones de brazos.
*   **Transición a Sofá:** Desde esta postura, el volador puede inclinarse hacia atrás y la base levanta más las piernas para entrar en **Sofá (Couch)**, creando un mini-flujo terapéutico.

**Culminación:**
1.  **Volador:** Inclínate hacia adelante.
2.  **Base:** Baja lentamente los pies hacia el suelo mientras guías al volador con las manos para que se ponga de pie de forma segura.
`,
    musculos: { base: ['Cuádriceps', 'Core', 'Flexores de cadera'], volador: ['Core', 'Glúteos'] },
    calibracion: {
      base: ['Rodillas flexionadas para crear una "silla"', 'Ofrece las manos para seguridad'],
      volador: ['Siéntate lentamente', 'Espalda recta y core activo'],
      observador: ['Ayuda al volador a sentarse', 'Ofrece un punto de equilibrio'],
    },
  },
  {
    id: 'baby-bird',
    nombre: 'Pajarito\n(Baby Bird)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['1', '2'],
    descripcion: 'Una postura de equilibrio juguetona donde el volador se equilibra en las rodillas de la base, fomentando la conexión y el juego.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Comienza en la misma posición que para un **Trono (Throne)**, sentado con las rodillas dobladas y los pies en el suelo.
2.  **Volador:** En lugar de sentarse en los pies, colócate de frente a la base, y siéntate en las rodillas de la base, de cara a ella.
3.  **Base:** Agarra las manos del volador para dar estabilidad. Lentamente levanta los pies del suelo.

**Desarrollo:**
*   **Base:** Tu estabilidad viene de tu core. Puedes balancearte suavemente.
*   **Volador:** Es una postura de equilibrio activo. Usa tu core y mantén una sonrisa.

**Culminación:**
1.  **Base:** Baja lentamente los pies al suelo.
2.  **Volador:** Ponte de pie con la ayuda de la base.
`,
    musculos: {
      base: ["Core", "Flexores de cadera"],
      volador: ["Core", "Equilibrio"],
    },
    calibracion: {
      base: ["Mantén el core fuerte.", "Usa el agarre de manos para comunicarte."],
      volador: ["Juega con tu equilibrio.", "Mantén el contacto visual."],
      observador: ["Asegura un ambiente de juego seguro.", "Ayuda a la estabilidad si es necesario."],
    },
  },
  {
    id: '3',
    nombre: 'Plegaria Invertida\nTerapéutica',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    descripcion: 'Postura terapéutica. La base sostiene al volador por las caderas para una inversión suave y relajante.',
     narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta las piernas, flexionadas.
2.  **Volador:** Párate frente a la base, de espaldas. La base colocará sus pies en tu ingle/pliegue de la cadera.
3.  **Base:** Toma las manos del volador. Este se inclinará hacia atrás, manteniendo la confianza en ti.
4.  **Volador:** A medida que te inclinas, deja que tu cuerpo se pliegue hacia adelante, como una hoja.
5.  **Base:** Extiende tus piernas lentamente, levantando las caderas del volador. El volador quedará colgado, con la parte superior del cuerpo relajada hacia el suelo.

**Desarrollo:**
*   **Base:** Mantén los pies firmes en el pliegue de la cadera del volador. Puedes ofrecer un suave masaje en la espalda del volador. Tus manos pueden sostener sus hombros o brazos para dar seguridad.
*   **Volador:** Relájate por completo. Suelta la cabeza, el cuello y los hombros. Permite que la gravedad cree una suave tracción en tu columna vertebral. Respira profundamente. Es una postura de recepción y confianza.

**Culminación:**
1.  **Base:** Comunica al volador que lo vas a bajar. Flexiona lentamente las rodillas.
2.  **Volador:** Activa ligeramente el **Core** y prepárate para que tus manos toquen el suelo.
3.  **Base:** Una vez que las manos del volador estén firmes en el suelo, baja un poco más hasta que pueda apoyar los pies y ponerse de pie.
`,
    musculos: { base: ['Isquiotibiales', 'Glúteos', 'Core'], volador: ['Relajación de la espalda'] },
    calibracion: {
      base: ['Pies en la cadera del volador', 'Extiende las piernas lentamente', 'Manos en los hombros del volador'],
      volador: ['Déjate caer con confianza', 'Relaja cuello y hombros'],
      observador: ['Junto a la cabeza del volador', 'Asegura que la cabeza no toque el suelo'],
    },
  },
  {
    id: '5',
    nombre: 'Pájaro Inverso\nTerapéutico',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['1', '3', 'fish-on-shins'],
    descripcion: 'Estiramiento terapéutico de espalda. El volador se arquea sobre los pies de la base, abriendo pecho y hombros.',
     narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta las piernas. El volador se para de espaldas a ti.
2.  **Volador:** Inclínate hacia atrás. La base colocará sus pies en tu espalda alta, justo debajo de los omóplatos. Los dedos de los pies de la base deben apuntar hacia los hombros del volador.
3.  **Base y Volador:** Tómense de las manos. El volador debe confiar y dejarse caer hacia atrás.
4.  **Base:** A medida que el volador se inclina, dobla tus rodillas para recibir su peso y luego extiende las piernas para levantarlo, creando un arco en su espalda.

**Desarrollo:**
*   **Base:** El control está en tus rodillas. Para un arco más profundo, extiende más las piernas. Para menos arco, flexiónalas. Mantén el agarre de manos o puedes colocar tus manos en sus hombros para un estiramiento más profundo.
*   **Volador:** ¡Comunica! Dile a la base si el estiramiento es demasiado intenso. Relaja la cabeza y el cuello. Respira profundamente para abrir el pecho. Es una postura muy vulnerable y de gran apertura.
*   **Puntos de Contacto:** Los pies de la base en la espalda torácica del volador.

**Culminación:**
1.  **Base:** Avisa que vas a bajar. Dobla las rodillas de manera controlada.
2.  **Volador:** Mantén el contacto visual y la confianza. A medida que la base te baja, busca el suelo con tus pies.
3.  **Base:** Guía al volador hasta que esté de pie de forma segura.
`,
    musculos: { base: ['Isquiotibiales', 'Glúteos', 'Core'], volador: ['Pectorales (estiramiento)', 'Hombros (estiramiento)'] },
    calibracion: {
      base: ['Pies en la parte alta de la espalda', 'Controla el arco con las rodillas', 'Ofrece tus manos para seguridad'],
      volador: ['Comunica tu comodidad', 'Relaja el cuerpo y la cabeza', 'Respira profundo'],
      observador: ['Cerca de la cabeza del volador', 'Guía la comunicación'],
    },
  },
  {
    id: '17',
    nombre: 'Ballena\n(Whale)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['5'],
    descripcion: 'Una versión más avanzada y profunda del pájaro inverso terapéutico, donde la base extiende completamente las piernas, elevando más al volador para un estiramiento máximo.',
     narrativa_detallada: `
**Inicio:**
La entrada es idéntica al **Pájaro Inverso Terapéutico (Back Bird)**.
1.  **Base y Volador:** Establezcan un **Pájaro Inverso Terapéutico (Back Bird)** estable, con las rodillas de la base flexionadas.
2.  **Base:** Comunica que vas a extender las piernas. Lentamente y con mucho control, comienza a estirar tus piernas hacia el cielo.
3.  **Volador:** Mantén la confianza y la comunicación. Sentirás que el arco se profundiza.

**Desarrollo:**
*   **Base:** Requiere más flexibilidad en los isquiotibiales. Mantén las piernas lo más rectas posible. El agarre de manos es crucial para la estabilidad.
*   **Volador:** La comunicación es vital. Indica si el estiramiento es demasiado. Mantén el cuerpo relajado pero con una ligera activación para no perder la forma. Disfruta de la sensación de volar más alto.
*   **Puntos de Contacto:** Idéntico al **Pájaro Inverso Terapéutico**, pero la dinámica de fuerzas cambia con la altura.

**Culminación:**
1.  **Base:** Para salir, flexiona las rodillas de manera controlada para volver a la altura del **Pájaro Inverso Terapéutico (Back Bird)** normal.
2.  Desde ahí, sigue el procedimiento de culminación del Pájaro Inverso Terapéutico para llevar al volador al suelo de forma segura.
`,
    musculos: {
      base: ["Isquiotibiales", "Glúteos", "Core"],
      volador: ["Relajación y confianza", "Apertura de pecho y hombros"],
    },
    calibracion: {
      base: ["Requiere más flexibilidad y fuerza en las piernas.", "Controla la subida y bajada con precisión.", "Mantén un agarre de manos seguro."],
      volador: ["Comunica la intensidad del estiramiento.", "Mantente relajado pero con el core ligeramente activo para la estabilidad.", "Disfruta de la altura."],
      observador: ["Especial atención a la cabeza del volador.", "Prepárate para guiar una salida rápida si es necesario."],
    },
  },

  // L-BASING: NIVEL 2
  {
    id: 'shoulderstand',
    nombre: 'Parada de Hombros\nsobre Pies',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['1', 'shoulderstand-on-shins'],
    descripcion: 'Una inversión fundamental donde el volador se apoya en los pies de la base, desarrollando equilibrio y alineación.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta las piernas a 90 grados. Tus pies deben formar una plataforma plana y estable.
2.  **Volador:** De pie, de espaldas a la base, coloca tus hombros sobre los pies de la base.
3.  **Base y Volador:** Tómense de las manos con un agarre firme.
4.  **Volador:** Con la ayuda de la base, levanta una pierna y luego la otra, llevando las caderas sobre los hombros para entrar en una posición de parada de hombros.

**Desarrollo:**
*   **Base:** Mantén las piernas firmes y a 90 grados. Usa tus pies para sentir y ajustar el equilibrio del volador. Tus brazos ayudan a estabilizar.
*   **Volador:** Mantén el cuerpo en una línea recta desde los hombros hasta los pies. Activa el **Core**. La mirada puede ir hacia tus pies o hacia el techo. Puedes probar variaciones como **Straddle (A horcajadas/Abierto)** o **Tuck (Recogido/Agrupado)**.
*   **Puntos de Contacto:** Los pies de la base en los hombros del volador.

**Culminación:**
1.  **Volador:** Baja una pierna y luego la otra de forma controlada.
2.  **Base:** Guía al volador hacia el suelo, flexionando las rodillas si es necesario para un aterrizaje suave.
`,
    musculos: {
      base: ["Piernas (isométrico)", "Core"],
      volador: ["Core", "Hombros", "Espalda"],
    },
    calibracion: {
      base: ["Plataforma de pies estable y nivelada.", "Usa los brazos para guiar y estabilizar.", "Comunica sobre el equilibrio."],
      volador: ["Mantén el cuerpo alineado y activo.", "El core es tu centro de equilibrio.", "Entra y sal con control."],
      observador: ["Vigila la alineación del volador.", "Asegura que el cuello del volador no esté comprometido.", "Asiste en la salida."],
    },
  },
  {
    id: 'side-bird',
    nombre: 'Pájaro Lateral\n(Side Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['1'],
    descripcion: 'Una variación asimétrica del Pájaro Frontal. El volador se equilibra de lado sobre los pies de la base, preparando el cuerpo para Estrella Lateral.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta las piernas.
2.  **Volador:** Párate al lado de las caderas de la base.
3.  **Base y Volador:** La base coloca sus pies en la cadera y la caja torácica del volador. Tomen un agarre de manos.
4.  **Volador:** Transfiere tu peso a la base, manteniendo el cuerpo en una línea lateral fuerte.

**Desarrollo:**
*   **Base:** Usa tus pies para estabilizar el plano lateral del volador.
*   **Volador:** Mantén los oblicuos y el core activos para evitar la flexión lateral.

**Culminación:**
1.  **Base:** Dobla las rodillas para bajar al volador de manera controlada al suelo.
`,
    musculos: {
      base: ["Oblicuos", "Core", "Control de piernas"],
      volador: ["Oblicuos", "Core"],
    },
    calibracion: {
      base: ["Usa tus pies para crear un estante.", "Comunica sobre el equilibrio."],
      volador: ["Mantén el cuerpo como una tabla lateral.", "Activa el lado del cuerpo que está hacia arriba."],
      observador: ["Colócate en el lado abierto del volador.", "Asegura que el volador mantenga su alineación."],
    },
  },
  {
    id: 'back-bird-acro',
    nombre: 'Pájaro Inverso\n(Back Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['5', '17'],
    descripcion: 'La versión acrobática del Pájaro Inverso. El volador mantiene una línea corporal activa y arqueada, sin agarre de manos.',
    narrativa_detallada: `
**Inicio:**
1.  Entra en un **Pájaro Inverso Terapéutico** o **Ballena** con un agarre de manos seguro.
2.  **Base y Volador:** Una vez estables, comuniquen para soltar el agarre.

**Desarrollo:**
*   **Base:** Mantén tus pies firmes en la espalda alta del volador. El control del equilibrio ahora reside completamente en tus piernas y core.
*   **Volador:** Activa la espalda, los glúteos y las piernas para mantener un arco fuerte y estable. Extiende los brazos hacia los lados o hacia atrás.

**Culminación:**
1.  **Base y Volador:** Vuelvan a conectar las manos.
2.  Desmonten de forma segura como en la versión terapéutica.
`,
    musculos: {
      base: ["Isquiotibiales", "Glúteos", "Core"],
      volador: ["Músculos de la espalda", "Glúteos", "Core"],
    },
    calibracion: {
      base: ["Sé una plataforma sólida y predecible.", "Realiza microajustes para mantener el equilibrio."],
      volador: ["Mantén una línea arqueada activa.", "Comunica tu nivel de comodidad."],
      observador: ["Observa atentamente, especialmente durante la liberación y reconexión de las manos."],
    },
  },
  {
    id: 'monkey',
    nombre: 'Mono\n(Monkey)',
    nivel: 2,
    type: 'Standing',
    prerequisites: ['standing-high-bird'],
    descripcion: 'Una transición clásica de standing acro donde el volador se mueve entre los hombros y los pies de la base.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** De pie, con el volador sentado en sus hombros.
2.  **Transición:** El volador se inclina hacia adelante, la base lo atrapa en **High Bird**.
3.  **Movimiento:** Desde High Bird, la base puede guiar al volador a una posición de **Foot-to-Foot** (de pie sobre los pies de la base).
4.  **Regreso:** Se puede revertir la secuencia para volver a los hombros.`,
    musculos: {
      base: ["Fuerza y equilibrio de piernas", "Core"],
      volador: ["Control del core", "Agilidad"],
    },
    calibracion: {
      base: ["Mantén una base sólida y estable.", "Guía las transiciones con claridad."],
      volador: ["Mantente compacto y ligero.", "Sigue la guía de la base en todo momento."],
      observador: ["Permanece cerca y atento durante las transiciones de peso."],
    },
  },
  {
    id: '7',
    nombre: 'Trono a Horcajadas\n(Straddle Throne)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['2'],
    descripcion: 'Variación del Trono donde el volador se sienta a horcajadas. Es una transición común a otras posturas.',
     narrativa_detallada: `
**Inicio:**
Puede iniciarse desde el suelo o como una transición desde **Trono (Throne)**.
1.  **Base:** Acuéstate y levanta las piernas. Las rodillas pueden estar flexionadas.
2.  **Volador:** Párate frente a la base, mirando hacia sus pies. Tomen un agarre de manos.
3.  **Base:** Coloca tus pies en la parte interna de los muslos del volador, cerca de la ingle.
4.  **Volador:** Inclínate hacia adelante, poniendo peso en las manos de la base. Salta ligeramente para que la base pueda recibir tus muslos en sus pies.
5.  **Base:** Recibe al volador y extiende las piernas hasta que el volador esté sentado a horcajadas ("straddle") sobre tus pies, con su torso erguido.

**Desarrollo:**
*   **Base:** Mantén las piernas fuertes. Puedes jugar con el ángulo de las piernas para la comodidad de ambos. Tus pies deben estar flexionados para crear una plataforma.
*   **Volador:** Mantén las piernas activas y abiertas. La espalda recta. Es una postura muy activa. Desde aquí se puede transitar a muchas otras posturas como **Murciélago (Bat)** o **Trono Invertido (Reverse Throne)**.
*   **Puntos de Contacto:** Las plantas de los pies de la base en la parte interna de los muslos del volador.

**Culminación:**
1.  **Volador:** Comunica la salida. Inclínate hacia adelante.
2.  **Base:** Flexiona las rodillas para bajar al volador de forma controlada.
3.  **Volador:** Aterriza suavemente sobre tus pies.
`,
    musculos: { base: ['Cuádriceps', 'Aductores', 'Core'], volador: ['Core', 'Flexibilidad de cadera'] },
    calibracion: {
      base: ['Base de pies ancha y estable', 'Manos en las caderas del volador para guiar', 'Mantén la espalda del volador cerca de tus piernas'],
      volador: ['Mantén las piernas abiertas y activas', 'Usa las manos de la base para estabilizarte', 'Core activo'],
      observador: ['Asegura que la transición sea suave', 'Vigila el equilibrio lateral'],
    },
  },
  {
    id: '16',
    nombre: 'Murciélago\n(Bat)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['7'],
    descripcion: 'Postura de inversión donde el volador cuelga de las piernas de la base, sostenido por la cadera.',
     narrativa_detallada: `
**Inicio:**
Se puede entrar desde **Trono a Horcajadas (Straddle Throne)**.
1.  **Base y Volador:** En **Trono a Horcajadas (Straddle Throne)**, establezcan un agarre de manos firme.
2.  **Volador:** Inclínate hacia atrás, permitiendo que tu torso y cabeza cuelguen.
3.  **Base:** Al mismo tiempo, flexiona las rodillas para permitir que el volador se incline.
4.  **Volador:** Pasa tus piernas por fuera de los brazos de la base y engancha tus pies en la parte delantera de sus muslos/caderas.
5.  **Base:** Una vez que los pies del volador estén seguros, puedes soltar las manos.

**Desarrollo:**
*   **Base:** Mantén las piernas flexionadas en un ángulo cómodo. Tu estabilidad proviene del **Core**.
*   **Volador:** Cuelga relajadamente. Esta es una postura de inversión pasiva. Puedes extender los brazos hacia el suelo. Siente el estiramiento en los hombros y la espalda.
*   **Puntos de Contacto:** El empeine y tobillos del volador se enganchan en los flexores de la cadera de la base.

**Culminación:**
1.  **Base y Volador:** Vuelvan a tomarse de las manos.
2.  **Volador:** Desengancha los pies y usa el **Core** y la ayuda de la base para volver a la posición de **Trono a Horcajadas (Straddle Throne)**.
3.  Desmonten desde allí.
`,
    musculos: {
      base: ["Isquiotibiales", "Core"],
      volador: ["Fuerza de agarre", "Estiramiento de hombros y espalda"],
    },
    calibracion: {
      base: ["Dobla las rodillas para recibir al volador.", "Asegura un agarre firme en los tobillos del volador.", "Extiende las piernas para levantar."],
      volador: ["Agarra firmemente los tobillos de la base.", "Mantén el cuerpo en una línea hueca.", "Comunica para bajar."],
      observador: ["Colócate debajo de los hombros del volador.", "Protege la cabeza y el cuello.", "Guía en el desmontaje."],
    },
  },
  {
    id: '24',
    nombre: 'Murciélago a Horcajadas\n(Straddle Bat)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['7', '16'],
    descripcion: 'Una variación de Murciélago donde el volador mantiene las piernas abiertas en straddle, colgando de los pies de la base.',
    narrativa_detallada: `
**Inicio:**
Se entra desde **Trono a Horcajadas (Straddle Throne)**.
1.  **Base y Volador:** Desde una posición estable de **Trono a Horcajadas (Straddle Throne)**, tomen un agarre de manos.
2.  **Volador:** Manteniendo las piernas abiertas, inclínate hacia atrás.
3.  **Base:** Flexiona las rodillas para recibir al volador, permitiendo que su torso cuelgue.
4.  **Volador:** Desliza tus pies por las piernas de la base hasta que tus tobillos queden enganchados en sus manos/muñecas. La base te sostiene por los tobillos.

**Desarrollo:**
*   **Base:** Mantén un agarre firme en los tobillos del volador. Tus piernas sostienen la mayor parte del peso en la parte interna de los muslos del volador, como en Trono a Horcajadas.
*   **Volador:** Relájate y cuelga. Es una inversión y estiramiento de hombros. Mantén las piernas activas en **Straddle** para la estética y la estabilidad.
*   **Puntos de Contacto:** Las plantas de los pies de la base en los muslos internos del volador. Las manos de la base agarrando los tobillos del volador.

**Culminación:**
1.  **Base y Volador:** El volador usa su **Core** y la ayuda de la base para volver a la posición de **Trono a Horcajadas (Straddle Throne)**.
2.  Desmontar desde Trono a Horcajadas.
`,
    musculos: {
      base: ['Cuádriceps', 'Aductores', 'Fuerza de agarre'],
      volador: ['Core', 'Estiramiento de hombros', 'Flexibilidad de cadera'],
    },
    calibracion: {
      base: ['Pies firmes en los muslos del volador.', 'Agarre seguro en los tobillos.', 'Controla la transición con tus piernas.'],
      volador: ['Mantén las piernas abiertas y activas.', 'Comunica sobre la comodidad del agarre.', 'Relaja la parte superior del cuerpo.'],
      observador: ['Posiciónate debajo de los hombros/cabeza del volador.', 'Asegura que la transición de vuelta a sentado sea suave.'],
    },
  },
  {
    id: 'reverse-throne',
    nombre: 'Trono Invertido\n(Reverse Throne)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['2', '7', '16'],
    descripcion: 'Una variante del Trono donde el volador invierte su orientación. Es un puente hacia transiciones y lavadoras más complejas.',
    narrativa_detallada: `
**Inicio:**
Generalmente se llega a esta postura a través de una transición, como en la **Lavadora: Rueda de Catalina (Catherine's Wheel)**. Una entrada directa es más avanzada.
1.  **Base:** Acuéstate y levanta las piernas, con las rodillas flexionadas.
2.  **Volador:** De espaldas a la base, colócate sobre ella.
3.  **Base y Volador:** Con la ayuda del **Observador**, el volador se sienta a horcajadas en los pies de la base. La base debe tomar los tobillos o las pantorrillas del volador para estabilizarlo.

**Desarrollo:**
*   **Base:** Mantén los pies flexionados y activos para crear una plataforma sólida. Tus manos en los tobillos del volador son clave para la estabilidad.
*   **Volador:** Mantén la espalda recta, el **Core** activo y las piernas abiertas. El peso debe estar centrado para no caer hacia adelante o hacia atrás. Puedes soltar las manos de la base y extender los brazos.
*   **Puntos de Contacto:** Las plantas de los pies de la base en la parte interna de los muslos del volador. Las manos de la base en los tobillos/pantorrillas del volador.

**Culminación:**
1.  **Volador:** Vuelve a tomar las manos de la base.
2.  **Base:** Con un movimiento controlado, guía al volador para que se deslice hacia adelante y aterrice de pie.
`,
    musculos: { base: ['Cuádriceps', 'Core', 'Fuerza de brazos'], volador: ['Core', 'Glúteos', 'Espalda'] },
    calibracion: {
      base: ['Pies activos y flexionados.', 'Agarre firme en los tobillos del volador.', 'Usa la comunicación verbal.'],
      volador: ['Mantén el torso erguido.', 'Activa el core y las piernas.', 'Confía en el agarre de la base.'],
      observador: ['Esencial para la entrada y salida.', 'Ayuda a estabilizar las caderas del volador.'],
    },
  },
  {
    id: '21',
    nombre: 'Inversión: Trípode\n(Tripod)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['15', 'shoulderstand'],
    descripcion: 'Una inversión fundamental donde el volador se equilibra sobre la cabeza y las manos, usando los pies de la base como apoyo.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta las piernas, creando una plataforma estable con tus pies.
2.  **Volador:** Colócate frente a la base, de espaldas. Pon tus manos en el suelo, a los lados de las caderas de la base, creando la base de tu trípode.
3.  **Volador:** Inclina la cabeza hacia adelante y apoya la coronilla en los pies de la base. ¡Comunica constantemente sobre la posición y la presión! El peso principal debe estar en las manos para proteger el cuello.
4.  **Base:** Asegúrate de que tus pies sostengan la cabeza del volador de manera segura y cómoda.
5.  **Volador:** Con el peso distribuido, levanta lentamente las caderas y luego las piernas, entrando en una inversión de trípode.

**Desarrollo:**
*   **Base:** Mantén las piernas muy estables. Tus pies son el punto de equilibrio clave para el volador. Haz microajustes para ayudarle a encontrar la vertical.
*   **Volador:** Mantén el cuello fuerte y la alineación. El peso principal debe estar en tus manos. Activa el **Core** para controlar las piernas. Se pueden probar variantes como **Tuck (Recogido/Agrupado)** o **Straddle (A horcajadas/Abierto)** con las piernas.
*   **Puntos de Contacto:** Las plantas de los pies de la base en la coronilla del volador. Las manos del volador en el suelo.

**Culminación:**
1.  **Volador:** Baja lentamente una pierna y luego la otra, con control.
2.  **Base:** Mantén la plataforma estable hasta que los pies del volador estén seguros en el suelo.
`,
    musculos: {
      base: ["Core", "Piernas (isométrico)"],
      volador: ["Hombros", "Brazos", "Cuello (estabilizadores)", "Core"],
    },
    calibracion: {
      base: ["Ofrece una plataforma estable y predecible.", "Usa tus pies para ayudar a alinear al volador.", "Comunica constantemente."],
      volador: ["Distribuye el peso correctamente entre manos y cabeza.", "Mantén el cuello largo y protegido.", "Sube y baja con control."],
      observador: ["Indispensable para proteger el cuello del volador.", "Ayuda a guiar las caderas a la vertical.", "Asegura una salida sin colapso."],
    },
  },
  {
    id: 'cathedral',
    nombre: 'Catedral\n(Cathedral)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: [],
    descripcion: 'Una postura de apertura de pecho donde la base sostiene al volador por los hombros, creando una forma de arco elevado.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate con las rodillas dobladas y los pies en el suelo.
2.  **Volador:** Siéntate en los pies de la base, de cara a ella.
3.  **Base:** Agarra los hombros del volador.
4.  **Volador:** Inclínate hacia atrás, arqueando la espalda, mientras la base extiende las piernas y los brazos.

**Desarrollo:**
*   **Base:** Mantén los brazos rectos y las piernas extendidas. Eres un pilar de soporte.
*   **Volador:** Abre el pecho y relaja la cabeza hacia atrás. Mantén el core activo para la estabilidad.

**Culminación:**
1.  **Base:** Dobla las rodillas y los codos para bajar al volador.
2.  **Volador:** Usa tu core para sentarte y desmontar.
`,
    musculos: {
      base: ["Hombros", "Pecho", "Core"],
      volador: ["Estiramiento de pecho y abdomen", "Core"],
    },
    calibracion: {
      base: ["Sé un marco fuerte y estable.", "Comunica durante la subida y bajada."],
      volador: ["Confía en el agarre de la base.", "Respira para profundizar la apertura."],
      observador: ["Vigila la cabeza y el cuello del volador."],
    },
  },

  // L-BASING: NIVEL 3
  {
    id: 'cartwheel-exit',
    nombre: 'Transición: Rueda Lateral\n(Cartwheel)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['shoulderstand', '21'],
    descripcion: 'Técnica de seguridad fundamental para desmontar de inversiones. Enseña control y conciencia corporal para caídas seguras.',
    narrativa_detallada: `
**Esto no es una postura, sino una habilidad de seguridad crucial.**

**Objetivo:** Aprender a salir de una inversión (como Parada de Manos sobre Pies) de forma controlada y predecible, aterrizando de pie.

**Técnica:**
1.  **Desde una inversión estable (ej. Parada de Hombros):** En lugar de bajar hacia atrás, el volador elige un lado.
2.  **Volador:** Abre las piernas en **Straddle** y comienza a girar las caderas hacia el lado elegido.
3.  **Volador:** Baja una pierna hacia el suelo, seguida por la otra, imitando el movimiento de una rueda lateral de gimnasia.
4.  **Base:** Sigue y apoya el movimiento, guiando al volador para que aterrice suavemente de pie al lado.
5.  **Observador:** El rol es vital. Guía las caderas del volador durante la rotación y asegura que aterrice de manera estable.

**Importancia:**
*   Dominar la **Salida en Rueda** elimina el miedo a las inversiones y es un prerrequisito absoluto para intentar posturas como la parada de manos.
`,
  },
  {
    id: '9',
    nombre: 'Equilibrio: Estrella\n(Star)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['shoulderstand', '7', 'side-bird'],
    descripcion: 'Postura avanzada de equilibrio sobre un pie y una mano de la base. Requiere alineación y fuerza de ambos.',
     narrativa_detallada: `
**Inicio:**
Se entra desde un **Trono a Horcajadas (Straddle Throne)** modificado.
1.  **Base:** Desde la posición acostada, levanta solo tu pierna derecha y tu brazo izquierdo (o viceversa). Tu pie derecho debe estar listo para recibir la cadera derecha del volador. Tu mano izquierda está lista para el agarre.
2.  **Volador:** Párate del lado izquierdo de la base. Coloca tu cadera derecha sobre el pie derecho de la base. Agarra la mano izquierda de la base con tu mano derecha.
3.  **Base y Volador:** Usando un **Contrapeso**, el volador levanta los pies del suelo. El volador colocará su mano izquierda en el hombro izquierdo de la base para estabilizarse.
4.  **Volador:** Una vez estable, extiende la pierna y el brazo libres para formar la estrella.

**Desarrollo:**
*   **Base:** Apila tu hombro sobre tu codo y muñeca (**Apilamiento (Stacking)**). La pierna de apoyo debe estar fuerte. Usa tu **Core** y tu pierna libre como contrapeso. El pie de apoyo debe estar firme en la cadera del volador, no en el glúteo.
*   **Volador:** Mantén todo el cuerpo tenso (tensión activa). El equilibrio es lateral. Empuja activamente contra el pie y la mano de la base. La mirada puede ir hacia la mano extendida.
*   **Puntos de Contacto:** Pie derecho de la base en la cadera derecha del volador. Mano izquierda de la base con mano derecha del volador.

**Culminación:**
1.  **Volador:** Recoge lentamente la pierna y el brazo extendidos, volviendo a la posición inicial compacta.
2.  **Base:** Flexiona la rodilla de apoyo para bajar al volador suavemente al suelo.
`,
    musculos: { base: ['Todo el cuerpo, esp. Core, Oblicuos, Piernas'], volador: ['Todo el cuerpo, esp. Core, Hombros'] },
    calibracion: {
      base: ['Apilamiento sólido sobre una pierna', 'Agarre firme', 'Contrapeso activo'],
      volador: ['Tensión corporal completa', 'Distribuye el peso entre el pie y la mano', 'Comunicación inmediata'],
      observador: ['Es crucial. Anticipa la caída', 'Prepárate para soportar el peso de ambos'],
    },
  },
  {
    id: '12',
    nombre: 'Equilibrio: Estrella Lateral\n(Side Star)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['9'],
    descripcion: 'Una variación de la Estrella donde el volador está de lado a la base, creando un plano de equilibrio diferente.',
     narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate de lado, por ejemplo, sobre tu lado derecho, apoyado en tu codo y antebrazo derecho. Levanta tu pierna izquierda (la de arriba) y tu brazo izquierdo, listos para recibir al volador.
2.  **Volador:** Párate frente a la base. Conécta tu mano derecha con la mano izquierda de la base. Coloca tu cadera derecha sobre el pie izquierdo de la base.
3.  **Base y Volador:** Usando **Contrapeso** y confianza, el volador levanta los pies del suelo, manteniendo el cuerpo en un solo plano lateral.

**Desarrollo:**
*   **Base:** Mantén el **Core** y los oblicuos muy fuertes. Tu antebrazo en el suelo te da la estabilidad. La pierna de apoyo debe estar fuerte.
*   **Volador:** El cuerpo debe estar como una tabla lateral (Vasisthasana). Activa los oblicuos. Mantén la cadera elevada. La mirada puede ir hacia la mano de la base.
*   **Puntos de Contacto:** Pie izquierdo de la base en la cadera/oblicuo derecho del volador. Mano izquierda de la base con mano derecha del volador.

**Culminación:**
1.  **Volador:** Comunica la salida. Contrae el cuerpo y busca el suelo con los pies.
2.  **Base:** Ayuda en el descenso controlado, flexionando la rodilla y guiando con la mano.
`,
    musculos: { base: ['Oblicuos', 'Glúteo medio', 'Hombros'], volador: ['Oblicuos', 'Core', 'Aductores y abductores'] },
    calibracion: {
      base: ['Fuerte anclaje al suelo', 'El agarre de manos es crucial para el equilibrio', 'Usa tu core para estabilizar'],
      volador: ['Mantén el cuerpo en un solo plano', 'Activa los costados del cuerpo', 'La mirada puede ayudar al equilibrio'],
      observador: ['Posiciónate para poder frenar la rotación', 'Guía las caderas para mantener el plano'],
    },
  },
  {
    id: '18',
    nombre: 'Equilibrio: Estrella Invertida\n(Reverse Star)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['12'],
    descripcion: 'Variación avanzada de la Estrella donde el volador mira en dirección opuesta a la base. Exige un contrapeso y confianza inmensos.',
     narrativa_detallada: `
**Inicio:**
Similar a la **Estrella (Star)**, pero la conexión es espalda con espalda.
1.  **Base:** Desde la posición acostada, levanta tu pierna derecha y tu brazo izquierdo.
2.  **Volador:** De espaldas a la base, colócate de manera que la base pueda poner su pie derecho en tu sacro/espalda baja. Con tu mano derecha, busca hacia atrás y agarra la mano izquierda de la base.
3.  **Base y Volador:** Con mucha comunicación y **Contrapeso**, el volador se inclina hacia adelante, levantando los pies del suelo.
4.  **Volador:** Una vez en el aire, arquea la espalda y extiende el brazo y la pierna libres.

**Desarrollo:**
*   **Base:** El **Contrapeso** es todo aquí. Inclínate lejos del volador para mantener la tensión. La pierna de apoyo debe estar muy fuerte.
*   **Volador:** Esta postura requiere una gran confianza y apertura de pecho. Arquea la espalda y mantén la tensión en todo el cuerpo.
*   **Puntos de Contacto:** Pie derecho de la base en el sacro del volador. Mano izquierda de la base con mano derecha del volador.

**Culminación:**
1.  **Volador:** Recoge las extremidades extendidas y busca el suelo con tus pies.
2.  **Base:** Ayuda al volador a aterrizar de forma segura flexionando la pierna de apoyo.
`,
    musculos: {
      base: ["Todo el cuerpo, especialmente espalda y core"],
      volador: ["Todo el cuerpo, especialmente espalda y hombros"],
    },
    calibracion: {
      base: ["El contrapeso es clave; inclínate lejos del volador.", "Requiere un agarre muy seguro.", "Comunica constantemente sobre el equilibrio."],
      volador: ["Confía plenamente en el agarre de la base.", "Mantén una línea corporal fuerte y arqueada.", "Abre el pecho y mira hacia arriba."],
      observador: ["Observador muy experimentado.", "Debe entender las fuerzas de la postura.", "Prepárate para una caída inesperada."],
    },
  },
  {
    id: '10',
    nombre: 'Inversión: Plancha\nsobre Manos',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['1', '15'],
    descripcion: 'Equilibrio sobre las manos de la base, también conocido como "Free Bird". Exige gran fuerza de la base y control del core del volador.',
     narrativa_detallada: `
Esta postura es también conocida como **Free Bird**.

**Inicio:**
1.  **Base:** Acuéstate y extiende los brazos rectos hacia el cielo, como dos pilares. Los hombros bien conectados al suelo.
2.  **Volador:** Párate frente a las manos de la base. Coloca tus hombros sobre sus manos. El agarre es con los dedos de la base apuntando hacia los hombros del volador.
3.  **Volador:** Transfiere tu peso hacia adelante, como si hicieras una plancha. La base te ayudará a encontrar el punto de equilibrio.
4.  **Base:** Mantén los brazos completamente rectos y bloqueados (**Apilamiento (Stacking)**). El equilibrio se maneja con microajustes de los dedos y la presión de las palmas.
5.  **Volador:** Levanta un pie y luego el otro, manteniendo una **Línea** corporal de plancha perfecta.

**Desarrollo:**
*   **Base:** Tus brazos son la plataforma. No deben flexionarse. Piensa en "hombros sobre codos sobre muñecas". La estabilidad viene de tu conexión con el suelo.
*   **Volador:** Tu cuerpo es una tabla. **Core**, glúteos y piernas súper activas. No dejes que tus caderas caigan. Es una parada de manos horizontal.
*   **Puntos de Contacto:** Las manos de la base en la parte delantera de los hombros del volador.

**Culminación:**
1.  **Volador:** Comunica la bajada. Baja un pie y luego el otro, con control.
2.  **Base:** Mantén la plataforma estable hasta que el volador esté seguro en el suelo.
`,
    musculos: { base: ['Hombros', 'Tríceps', 'Pecho', 'Core'], volador: ['Core', 'Hombros', 'Glúteos'] },
    calibracion: {
      base: ['Brazos rectos y hombros apilados', 'Microajustes con los dedos', 'Comunica tu estabilidad'],
      volador: ['Línea corporal perfecta', 'Distribuye el peso uniformemente', 'Entra y sal con control'],
      observador: ['Cerca de las caderas del volador', 'Guía al volador hacia abajo de forma segura'],
    },
  },
  {
    id: '11',
    nombre: 'Inversión: Parada de Manos\nsobre Pies',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['shoulderstand', '21', 'cartwheel-exit'],
    descripcion: 'Postura icónica. El volador realiza una parada de manos sobre los pies de la base.',
     narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta las piernas a 90 grados, creando una plataforma plana y nivelada con las plantas de tus pies.
2.  **Volador:** De espaldas a la base, colócate para una parada de manos, poniendo tus manos en el suelo a unos centímetros de los glúteos de la base.
3.  **Volador:** Levanta las caderas y coloca tus hombros sobre los pies de la base.
4.  **Base:** Asegúrate de que tus pies estén bien colocados en la parte carnosa de los hombros del volador.
5.  **Volador:** Transfiere el peso a los pies de la base y sube a una parada de manos, manteniendo las piernas juntas o en **Straddle**.

**Desarrollo:**
*   **Base:** Tus piernas son la plataforma. Deben estar a 90 grados exactos. Absorbe y neutraliza los movimientos del volador. Flexiona los tobillos para dirigir.
*   **Volador:** Encuentra tu **Línea** de parada de manos. Empuja activamente el suelo. El **Core** es el centro de tu equilibrio. Mantén la mirada entre tus manos.
*   **Puntos de Contacto:** Los pies de la base en los hombros del volador. Las manos del volador en el suelo.

**Culminación:**
1.  **Volador:** La salida más segura es hacer una **Salida en Rueda (Cartwheel Exit)**, bajando una pierna hacia un lado.
2.  **Observador:** Debe estar preparado para guiar esta salida lateral y asegurar que el volador aterrice de pie.
`,
    musculos: { base: ['Piernas', 'Core', 'Flexibilidad de isquiotibiales'], volador: ['Hombros', 'Brazos', 'Core', 'Espalda'] },
    calibracion: {
      base: ['Piernas a 90 grados como plataforma', 'Absorbe y redirige el movimiento', 'Contacto constante'],
      volador: ['Encuentra tu línea de parada de manos', 'Empuja desde los hombros', 'Ajustes desde el core'],
      observador: ['Indispensable. Asiste a ambos', 'Tu objetivo es evitar caídas, no salvar la postura'],
    },
  },
  {
    id: 'croc',
    nombre: 'Inversión: Cocodrilo\n(Croc)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['10', '11'],
    descripcion: 'Un ejercicio clave para desarrollar la fuerza y alineación de la parada de manos. El volador sostiene una plancha baja sobre las manos de la base.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta los brazos, como para un **Free Bird**.
2.  **Volador:** Coloca tus manos en las de la base, pero en lugar de tus hombros, es un agarre mano a mano.
3.  **Volador:** Salta a una posición de plancha, con los pies en el suelo.

**Desarrollo:**
*   **Base:** Coloca tus pies en las caderas o en la parte baja del abdomen del volador para darle soporte.
*   **Volador:** Baja a una posición de chaturanga (flexión baja), manteniendo los codos pegados al cuerpo y una línea recta. Esto es "Croc". Sostener esta postura es un gran entrenamiento de fuerza para **H2H**.
*   **Base:** Mantén los brazos estables. El desafío es sostener al volador en esta posición baja.

**Culminación:**
1.  **Volador:** Sube de nuevo a la plancha alta y baja los pies al suelo.`,
    musculos: { base: ['Hombros', 'Pecho', 'Core'], volador: ['Tríceps', 'Pecho', 'Core', 'Hombros'] },
    calibracion: {
      base: ['Ofrece una plataforma sólida con pies y manos.', 'Comunica sobre la estabilidad.'],
      volador: ['Mantén la forma de chaturanga estricta.', 'El core es vital para evitar que la espalda se arquee.'],
      observador: ['Vigila la alineación del volador, especialmente la zona lumbar.', 'Asegura una salida controlada.'],
    },
  },
  {
    id: '14',
    nombre: 'Inversión: Pies a Mano\n(Foot-to-Hand)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['11'],
    descripcion: 'El volador se equilibra en una mano, con los pies en las manos de la base. Requiere un equilibrio y confianza excepcionales.',
     narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y extiende los brazos hacia el cielo, con las palmas hacia arriba, listos para recibir los pies del volador.
2.  **Volador:** Párate cerca de la cabeza de la base. Colócate para una parada de manos, pero en lugar de poner las manos en el suelo, las pones en las rodillas de la base para un montaje inicial.
3.  **Base y Volador:** El volador levanta un pie y la base lo agarra firmemente con su mano del mismo lado (pie derecho del volador a mano derecha de la base). Luego, repiten con el otro lado.
4.  **Volador:** Una vez que la base tiene un agarre seguro de ambos pies, el volador transfiere el peso y se levanta en una parada de manos, soportado por las manos de la base.

**Desarrollo:**
*   **Base:** Mantén los brazos rectos y los hombros conectados al suelo. El agarre en los pies del volador debe ser como una garra, muy seguro. El equilibrio se gestiona con la fuerza de tus brazos y **Core**.
*   **Volador:** Encuentra tu **Línea** de parada de manos. Empuja hacia arriba desde los hombros de la base. Mantén el **Core** y las piernas activas. Es una de las posturas de equilibrio más desafiantes.
*   **Puntos de Contacto:** Las manos de la base agarrando los pies del volador.

**Culminación:**
1.  **Volador:** Comunica la bajada. La salida más común y segura es flexionando las caderas y haciendo un "roll" hacia adelante para aterrizar sentado en el suelo.
2.  **Base:** Guía y controla la velocidad del descenso soltando los pies en el momento adecuado.
`,
    musculos: {
      base: ["Hombros", "Core", "Fuerza de agarre"],
      volador: ["Equilibrio en una mano", "Core", "Flexibilidad"],
    },
    calibracion: {
      base: ["Mantén un agarre firme en los pies del volador.", "Apila los hombros sobre las muñecas.", "Realiza microajustes para mantener el equilibrio."],
      volador: ["Encuentra tu centro de equilibrio sobre una mano.", "Mantén el core apretado y las piernas activas.", "La mirada es clave."],
      observador: ["Rol muy activo y necesario.", "Sitúate para soportar al volador en caso de caída.", "La comunicación es vital."],
    },
  },
  {
    id: 'h2h',
    nombre: 'Inversión: Parada de Manos\nsobre Manos (H2H)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['14', 'croc'],
    descripcion: 'El pináculo del equilibrio L-Basing. El volador hace una parada de manos sobre las manos de la base.',
     narrativa_detallada: `
**Inicio:**
Se puede entrar desde **Plancha sobre Manos (Free Bird)** extendida.
1.  **Base y Volador:** Establezcan una **Plancha sobre Manos (Free Bird)** muy estable.
2.  **Base:** Flexiona los codos lentamente, bajando al volador hacia ti, como una flexión de brazos.
3.  **Volador:** Mantén tu **Línea** de plancha y la confianza mientras la base te baja.
4.  **Base:** Cuando los hombros del volador están cerca de tus rodillas, este puede usar tus piernas para caminar hacia arriba.
5.  **Volador:** Camina con tus manos sobre las piernas de la base hasta que tus caderas estén sobre tus hombros, buscando la línea de parada de manos.
6.  **Base:** Extiende los brazos para levantar al volador en la parada de manos final.

**Desarrollo:**
*   **Base:** Mantén los brazos perfectamente rectos (**Apilamiento (Stacking)**). Los hombros deben estar apilados sobre los codos y muñecas. El equilibrio se controla con microajustes de los dedos y las muñecas, no doblando los codos.
*   **Volador:** Encuentra tu **Línea** de parada de manos. Aprieta todo el cuerpo: piernas juntas, pies en punta, **Core** activo. La mirada puede estar en las manos de la base.
*   **Puntos de Contacto:** Manos de la base agarrando las manos del volador (**Hand-to-Hand grip**).

**Culminación:**
1.  La salida más segura es revertir la entrada.
2.  **Base:** Dobla los codos lentamente.
3.  **Volador:** Mantén la **Línea** mientras bajas, y luego camina con las manos por las piernas de la base para aterrizar suavemente.
`,
    musculos: {
      base: ['Hombros', 'Tríceps', 'Pecho', 'Core'],
      volador: ['Hombros', 'Core', 'Sentido del equilibrio'],
    },
    calibracion: {
      base: ['Brazos rectos como columnas.', 'El apilamiento es la clave, no la fuerza bruta.', 'La comunicación es constante y sutil.'],
      volador: ['Encontrar tu línea es tu responsabilidad.', 'Confía en tu base, pero mantén tu propio equilibrio.', 'Mantén el cuerpo como una sola unidad.'],
      observador: ['Observador muy experimentado y atento.', 'Sabe cómo guiar una caída de H2H.', 'No toca, a menos que sea absolutamente necesario.'],
    },
  },
  
  // L-BASING: NIVEL 4 (LAVADORAS)
  {
    id: 'around-the-world',
    nombre: 'Lavadora: Alrededor\ndel Mundo',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['1', '2', '3', '5'],
    descripcion: 'Una de las primeras lavadoras que se aprenden, conectando Pájaro Frontal, Plegaria Invertida y Pájaro Invertido en un flujo circular.',
    narrativa_detallada: `
**Secuencia:**
1.  **Inicio:** Empieza en **Pájaro Frontal (Front Bird)**, con manos conectadas.
2.  **Transición a Plegaria Invertida:** La base dobla las rodillas, el volador se pliega hacia adelante hasta que sus manos tocan el suelo y la base mueve los pies a las caderas para **Plegaria Invertida (Folded Leaf)**.
3.  **Transición a Pájaro Invertido:** Desde Plegaria Invertida, el volador se endereza, la base mueve los pies a la espalda alta para **Pájaro Invertido (Back Bird)**.
4.  **Regreso a Pájaro Frontal:** Desde Pájaro Invertido, se baja al suelo para reiniciar en Pájaro Frontal, o para practicantes avanzados, se puede intentar una transición directa.`,
    musculos: {
      base: ["Control de piernas", "Transiciones suaves"],
      volador: ["Conciencia corporal", "Core"],
    },
    calibracion: {
      base: ["Guía cada transición claramente.", "Asegura la colocación de los pies."],
      volador: ["Sigue la guía de la base.", "Mantén el core activo."],
      observador: ["Sigue el flujo, prestando especial atención a las transiciones cerca del suelo."],
    },
  },
  {
    id: 'four-step',
    nombre: 'Lavadora: Cuatro Pasos\n(Four-Step)',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['7', 'back-bird-acro'],
    descripcion: 'Un flujo clásico que conecta Pájaro Frontal, Pájaro Invertido y Trono a Horcajadas, pasando por el suelo.',
    narrativa_detallada: `
**Secuencia:**
1.  **Inicio:** En **Pájaro Frontal (Front Bird)**, sin manos. El volador salta hacia atrás.
2.  **Paso 2:** Base y volador giran. Entran en **Pájaro Invertido (Back Bird)**.
3.  **Paso 3:** Desde Pájaro Invertido, el volador se desliza hacia abajo para sentarse en **Trono a Horcajadas (Straddle Throne)**.
4.  **Paso 4:** Desde Trono a Horcajadas, el volador se desmonta hacia adelante para reiniciar la secuencia.`,
    musculos: {
      base: ["Ritmo y fluidez", "Control"],
      volador: ["Agilidad", "Conciencia espacial"],
    },
    calibracion: {
      base: ["Mantén el ritmo.", "Cada movimiento debe fluir al siguiente."],
      volador: ["Sé ligero en tus pies.", "Confía en el ritmo de la secuencia."],
      observador: ["Observa el flujo completo, estate listo para intervenir si el ritmo se rompe."],
    },
  },
  {
    id: 'corkscrew',
    nombre: 'Lavadora: Sacacorchos\n(Corkscrew)',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['7', '16', 'reverse-throne', 'back-bird-acro'],
    descripcion: 'Una lavadora clásica que implica una rotación completa del volador alrededor de las piernas de la base.',
    narrativa_detallada: `
**Esta es una **Lavadora (Washing Machine)**, una secuencia fluida.**

**Inicio:**
1.  Comienza en un **Trono a Horcajadas (Straddle Throne)** estable, con las manos conectadas.

**Desarrollo (La Lavadora):**
2.  **Giro a Pájaro Invertido:** El volador se inclina hacia un lado, la base baja la pierna de ese lado y sube la otra, guiando al volador a través de una transición de cadera hasta que queda en un **Pájaro Invertido Terapéutico (Back Bird)**.
3.  **Transición a Trono:** Desde Pájaro Invertido, la base dobla las rodillas, el volador se recoge (**Tuck**) y pasa a **Trono (Throne)**.
4.  **Regreso:** Desde Trono, se puede transicionar de nuevo a **Trono a Horcajadas (Straddle Throne)** para completar el ciclo. El movimiento es como un tornillo o sacacorchos.

**Culminación:**
*   La secuencia se puede detener en cualquier postura estática y desmontar de forma segura. La clave es la fluidez y la comunicación constante.
`,
    musculos: {
      base: ["Coordinación", "Control de piernas", "Core"],
      volador: ["Conciencia espacial", "Core", "Capacidad de fluir"],
    },
    calibracion: {
      base: ["Guía las caderas del volador en todo momento.", "Movimientos suaves y circulares.", "Mantén un ritmo constante."],
      volador: ["Mantén la tensión corporal pero sin rigidez.", "Confía en la guía de la base.", "Mantente orientado durante las rotaciones."],
      observador: ["Sigue el flujo de la lavadora.", "Prepárate para intervenir en las transiciones clave, como de invertido a sentado."],
    },
  },
  {
    id: 'high-barrel-roll',
    nombre: 'Lavadora:High Barrel Roll',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['1', 'back-bird-acro'],
    descripcion: 'Una lavadora rotacional donde el volador "rueda" sobre el torso de la base, pasando por Pájaro Frontal y Pájaro Invertido.',
    narrativa_detallada: `
**Inicio:**
1.  Comienza en **Pájaro Frontal (Front Bird)**, manos conectadas.

**Desarrollo (La Lavadora):**
2.  **Giro a Pájaro Invertido:** El volador se inclina hacia un lado. La base baja esa pierna y sube la otra, ayudando al volador a rodar sobre su torso para aterrizar en **Pájaro Invertido (Back Bird)** del otro lado de las piernas de la base.
3.  **Giro de vuelta:** Se revierte el movimiento para volver a Pájaro Frontal, completando el "barrel roll".

**Culminación:**
*   Se detiene en Pájaro Frontal o Pájaro Invertido y se desmonta de forma segura.
`,
    musculos: {
      base: ["Core", "Control de piernas", "Fuerza de brazos"],
      volador: ["Core", "Conciencia espacial"],
    },
    calibracion: {
      base: ["Guía la rotación con las piernas y los brazos.", "Mantén un movimiento fluido."],
      volador: ["Mantén el cuerpo como un bloque sólido.", "Permite que la base te guíe a través del giro."],
      observador: ["Muévete con la rotación.", "Asegura que el volador no se deslice del torso de la base."],
    },
  },
  {
    id: '13',
    nombre: "Lavadora: Rueda de Catalina\n(Catherine's Wheel)",
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['corkscrew'],
    descripcion: 'Una lavadora (washing machine) o transición fluida donde el volador gira alrededor de la base como una rueda.',
     narrativa_detallada: `
Esta es una secuencia dinámica (**Lavadora (Washing Machine)**), no una postura estática. Comienza en **Trono a Horcajadas (Straddle Throne)** y transita por **Murciélago (Bat)** y **Trono Invertido (Reverse Throne)**.

**Inicio:**
1.  Empieza en un **Trono a Horcajadas (Straddle Throne)** estable.
2.  **Transición 1 (a Bat):** Desde **Trono a Horcajadas**, el volador se reclina hacia atrás para entrar en **Murciélago (Bat)**, enganchando los pies en las caderas de la base.

**Desarrollo:**
3.  **Transición 2 (Giro):** Desde **Bat**, el volador suelta un pie (ej. el derecho), y la base lo guía para girar lateralmente. El volador pasa por una posición similar a una estrella lateral colgada. La base usa sus manos para guiar las caderas del volador.
4.  **Transición 3 (a Reverse Straddle Throne):** El volador continúa girando hasta que queda sentado a horcajadas sobre los pies de la base, en la postura **Trono Invertido (Reverse Throne)**.
5.  **Continuación:** Desde **Trono Invertido (Reverse Throne)**, se puede revertir el movimiento para volver a **Bat** y luego a **Trono a Horcajadas**, completando el ciclo de la "rueda".

**Culminación:**
*   La secuencia se puede detener en cualquier postura estática (**Trono a Horcajadas**, **Bat**) y desmontar desde allí como se describe en esas posturas. La comunicación y el **Tempo** constante son claves.
`,
    musculos: { base: ['Core', 'Coordinación', 'Fuerza de piernas'], volador: ['Core', 'Confianza', 'Relajación en movimiento'] },
    calibracion: {
      base: ['Movimientos suaves y controlados', 'Mantén un ritmo constante', 'Anticipa la siguiente posición del volador'],
      volador: ['Mantén la tensión y la forma', 'Confía en el movimiento y fluye con él', 'Respira'],
      observador: ['Observa toda la secuencia', 'Prepárate para intervenir en los puntos de transición clave'],
    },
  },
  {
    id: 'tick-tock',
    nombre: 'Lavadora: Tick-Tock',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['9', '18'],
    descripcion: 'Un flujo dinámico que transita entre Estrella y Estrella Invertida, enseñando el control del contrapeso y el equilibrio lateral.',
    narrativa_detallada: `
**Secuencia:**
1.  **Inicio:** Comienza en **Estrella (Star)**.
2.  **Transición a Inversa:** La base y el volador rotan, el volador da la espalda a la base y cambian a **Estrella Invertida (Reverse Star)**. El agarre de manos y el pie de la base pueden necesitar cambiar.
3.  **Transición de vuelta a Estrella:** Revierten el movimiento para volver a la Estrella original. El movimiento de vaivén es el "Tick-Tock".`,
    musculos: {
      base: ["Oblicuos", "Core", "Fuerza de contrapeso"],
      volador: ["Oblicuos", "Core", "Confianza en el agarre"],
    },
    calibracion: {
      base: ["Usa tu cuerpo como un ancla de contrapeso.", "El control del tempo es clave."],
      volador: ["Mantén la tensión corporal.", "Siente el cambio de peso y fluye con él."],
      observador: ["Este es un flujo avanzado. Prepárate para soportar el peso de ambos si el contrapeso falla."],
    },
  },
  {
    id: '22',
    nombre: 'Lavadora: Ninja Star',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['tick-tock', 'cartwheel-exit'],
    descripcion: 'Una lavadora icónica y dinámica que fluye a través de diferentes posturas de estrella, requiriendo una comunicación y fluidez impecables.',
     narrativa_detallada: `
**Esta es una **Lavadora (Washing Machine)**, una secuencia fluida, no una postura estática.**

**Inicio:**
La lavadora generalmente comienza desde una **Estrella Invertida (Reverse Star)** estable.
1.  **Base y Volador:** Establezcan una **Estrella Invertida (Reverse Star)** sobre la pierna derecha y mano izquierda de la base.

**Desarrollo (La Lavadora):**
2.  **De Reverse Star a Side Star:** La base y el volador rotan sus caderas. La base baja su pierna derecha y el volador gira para enfrentar a la base, aterrizando en una **Estrella Lateral (Side Star)**. El volador ahora se apoya en la mano izquierda y el pie izquierdo de la base. La conexión de manos no se ha soltado.
3.  **De Side Star a Reverse Star (otro lado):** Desde la **Estrella Lateral**, el volador continúa la rotación, dando la espalda a la base. La base cambia el soporte a su pierna derecha y mano izquierda para recibir al volador en una **Estrella Invertida (Reverse Star)** en el lado opuesto. La **Transición: Rueda Lateral (Cartwheel)** es el motor de este movimiento.
4.  **Repetir el ciclo:** La secuencia se repite en la dirección opuesta, fluyendo de una estrella a otra, creando un movimiento continuo y circular.

**Culminación:**
*   La lavadora puede detenerse en cualquier punto (por ejemplo, en una de las Estrellas Laterales) y desmontar desde allí de forma segura como se describe en la postura estática correspondiente. El **Tempo** y la comunicación no verbal son cruciales.
`,
    musculos: {
      base: ["Core, Oblicuos, Piernas, Coordinación"],
      volador: ["Core, Oblicuos, Confianza en el movimiento"],
    },
    calibracion: {
      base: ["Mantén el movimiento fluido y constante.", "Anticipa el peso del volador en cada transición.", "Usa tu respiración para marcar el ritmo."],
      volador: ["Mantén tu cuerpo tenso y predecible.", "No intentes 'ayudar', solo fluye con la guía de la base.", "Mantén el contacto visual cuando sea posible."],
      observador: ["Un observador experimentado es esencial.", "Muévete alrededor de la pareja, anticipando las transiciones.", "Tu objetivo es la seguridad, no salvar la lavadora."],
    },
  },
  {
    id: 'ninja-star-reverse',
    nombre: 'Lavadora: Ninja Star Inversa',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['22'],
    descripcion: 'La versión inversa de la Ninja Star. Enseña a controlar la rotación en la dirección opuesta.',
    narrativa_detallada: `
**Secuencia:**
Esta lavadora sigue la misma trayectoria que la Ninja Star, pero en la dirección opuesta.
1. **Inicio:** Comienza en una **Estrella Lateral (Side Star)**.
2. **Transición a Estrella:** El volador continúa la rotación para llegar a una **Estrella (Star)** frontal.
3. **Transición a Estrella Lateral (otro lado):** Desde la Estrella, el flujo continúa hacia la Estrella Lateral del otro lado.
4. **Regreso:** Se revierte el camino para completar el ciclo.`,
    musculos: {
      base: ["Control de rotación", "Coordinación"],
      volador: ["Conciencia espacial", "Core"],
    },
    calibracion: {
      base: ["Requiere la misma precisión que la Ninja Star, pero invirtiendo los patrones."],
      volador: ["Puede ser desorientador al principio. Confía en la guía de la base."],
      observador: ["Observa con la misma atención que en la Ninja Star."],
    },
  },

  // Icarian Games: NIVEL 1
  {
    id: '27',
    nombre: 'Pop: Trono a Trono',
    nivel: 1,
    type: 'Icarian',
    prerequisites: ['2'],
    descripcion: 'El ejercicio fundamental de Icarian. La base usa solo los pies para lanzar y recibir al volador en la misma posición de Trono, sin usar las manos.',
    narrativa_detallada: `
**¡Bienvenido a Icarian! Aquí la base usa solo los pies.**

**Inicio:**
1.  **Base y Volador:** Comiencen en una postura de **Trono (Throne)** muy baja, con las rodillas de la base bien flexionadas cerca de su pecho. No hay agarre de manos.
2.  **Volador:** Mantén una posición de **Tuck (Recogido/Agrupado)** muy compacta, con las manos en las espinillas o rodillas.
3.  **Comunicación:** La base dice "listo" y el volador responde "listo". Luego la base cuenta "1, 2, 3...".

**Desarrollo (El Pop):**
*   **Base:** En el "3", realiza un movimiento explosivo pero controlado con tus piernas, extendiéndolas hacia arriba para lanzar al volador directamente hacia el techo. ¡El movimiento es una patada, no un empujón! Inmediatamente después del lanzamiento, vuelve a flexionar las rodillas para prepararte para la recepción.
*   **Volador:** En el momento del lanzamiento, mantén tu forma de "bola" (**Tuck**) lo más apretada posible. No intentes saltar. Tu trabajo es ser un proyectil predecible. Mantén la mirada en la base.
*   **Recepción:** La base "atrapa" al volador con los pies en el mismo lugar (los isquiotibiales/glúteos), absorbiendo el impacto al flexionar las rodillas.

**Culminación:**
*   Después de una o varias repeticiones exitosas, el volador se inclina hacia adelante y la base lo guía para que aterrice de pie en el suelo.
`,
    musculos: {
      base: ['Fuerza explosiva de piernas (Cuádriceps, Glúteos)', 'Core'],
      volador: ['Core (muy fuerte)', 'Confianza', 'Mantener la forma de Tuck'],
    },
    calibracion: {
      base: ['El timing es todo.', 'La patada debe ser recta hacia arriba.', 'Absorbe la recepción con las piernas.'],
      volador: ['Mantente compacto y no cambies de forma.', 'Confía en el lanzamiento de la base.', 'Mantén la calma en el aire.'],
      observador: ['Indispensable. Permanece cerca y atento.', 'No intentes "salvar" el pop, guía una caída segura si es necesario.', 'Observa la trayectoria.'],
    },
  },
  {
    id: '28',
    nombre: 'Pop: Trono a Pájaro Frontal',
    nivel: 1,
    type: 'Icarian',
    prerequisites: ['27'],
    descripcion: 'El volador es lanzado desde Trono y cambia de forma en el aire para ser recibido en Pájaro Frontal.',
    narrativa_detallada: `
**Este ejercicio introduce el cambio de forma en el aire.**

**Inicio:**
1.  **Base y Volador:** Igual que en **Pop: Trono a Trono**. Comiencen en un Trono bajo y compacto.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y la Transición):**
*   **Base:** El lanzamiento es idéntico al de **Pop: Trono a Trono**. La diferencia está en la recepción. Debes prepararte para recibir al volador en la posición de **Pájaro Frontal (Front Bird)**, moviendo tus pies desde debajo de sus glúteos a sus caderas.
*   **Volador:** En el punto más alto del lanzamiento, cuando sientas la ingravidez, abre rápidamente tu cuerpo desde la posición de **Tuck (Recogido/Agrupado)** a una línea de **Layout / Straight (Recto/Plancha)**. Extiende los brazos y las piernas para crear la forma de **Pájaro Frontal**.
*   **Recepción:** La base recibe los huesos de la cadera del volador en las plantas de sus pies, extendiendo las piernas a 90 grados para estabilizar la postura de **Pájaro Frontal**.

**Culminación:**
*   Una vez estable en **Pájaro Frontal**, se puede desmontar como un Pájaro Frontal normal, o la base puede flexionar las rodillas para recibir al volador de nuevo en **Trono** para la siguiente repetición.
`,
    musculos: {
      base: ['Igual que Trono a Trono, más precisión en la recepción.'],
      volador: ['Control del core para cambiar de forma.', 'Conciencia corporal en el aire.'],
    },
    calibracion: {
      base: ['Anticipa el cambio de forma para la recepción.', 'Sé preciso con la colocación de los pies.'],
      volador: ['El cambio de forma debe ser rápido y en el punto más alto.', 'Mantén la línea una vez que te extiendes.'],
      observador: ['Observa tanto el lanzamiento como la recepción.', 'Prepárate para guiar las caderas del volador si la recepción no es limpia.'],
    },
  },
  {
    id: '29',
    nombre: 'Pop: Pájaro a Horcajadas',
    nivel: 1,
    type: 'Icarian',
    prerequisites: ['28'],
    descripcion: 'Pop que enseña el control de las caderas y la apertura de piernas en el aire.',
    narrativa_detallada: `
**Este ejercicio refina el cambio de forma en el aire.**

**Inicio:**
1.  **Base y Volador:** Comiencen en una postura de **Pájaro Frontal (Front Bird)** baja y estable.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y la Transición):**
*   **Base:** Lanza verticalmente. Debes prepararte para recibir al volador en **Trono a Horcajadas (Straddle Throne)**, moviendo los pies desde sus caderas hasta la parte interna de sus muslos.
*   **Volador:** En el punto más alto, pasa de una línea recta a una posición sentada con las piernas abiertas (**Straddle**). Mantén el torso erguido.
*   **Recepción:** La base recibe al volador en sus pies, estabilizando la postura de **Trono a Horcajadas**.

**Culminación:**
*   Desde **Trono a Horcajadas**, se puede volver a Pájaro Frontal o desmontar.
`,
    musculos: {
      base: ['Precisión en la recepción.'],
      volador: ['Control del core y flexibilidad de cadera.'],
    },
    calibracion: {
      base: ['El movimiento de pies debe ser rápido y preciso.', 'Ofrece una plataforma estable para la recepción.'],
      volador: ["Mantén el 'Straddle' activo y las piernas fuertes.", 'Mantén el torso erguido en la recepción.'],
      observador: ['Vigila el equilibrio lateral en la recepción en Straddle.'],
    },
  },
  
  // Icarian Games: NIVEL 2
  {
    id: '31',
    nombre: 'Pop: Pájaro a Pájaro Invertido',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['28'],
    descripcion: 'El volador es lanzado desde Pájaro Frontal y ejecuta un giro de 180° en el aire para ser recibido en Pájaro Invertido.',
    narrativa_detallada: `
**Este es el primer pop con rotación de 180 grados.**

**Inicio:**
1.  **Base y Volador:** Comiencen en **Pájaro Frontal (Front Bird)** bajo y estable.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y el Giro):**
*   **Base:** El lanzamiento es similar a otros pops, pero aquí el 'timing' es aún más crítico. Debes anticipar la rotación del volador y preparar tus pies para recibirlo en la posición de **Pájaro Invertido (Reverse Bird)** (en su abdomen bajo/caderas).
*   **Volador:** En el punto más alto del lanzamiento, mantén tu cuerpo en **Layout / Straight (Recto/Plancha)** y simultáneamente inicia un giro de 180 grados. Este giro se genera desde el **Core** y los hombros.
*   **Recepción:** La base recibe al volador, ahora de cara a sus pies, absorbiendo el impacto y estabilizando la postura.

**Culminación:**
*   Desde **Pájaro Invertido**, se puede transicionar a otros pops o desmontar.
`,
    musculos: {
      base: ['Precisión y timing para la recepción en un nuevo punto.'],
      volador: ['Core y oblicuos para la rotación.', 'Mantener la línea durante el giro.'],
    },
    calibracion: {
      base: ['Un buen lanzamiento vertical es clave para dar tiempo al giro.', 'Visualiza la recepción antes de lanzar.'],
      volador: ['El giro debe ser rápido y completado en el punto más alto.', 'Apunta a aterrizar con tus caderas en los pies de la base.'],
      observador: ['Observa la rotación y prepárate para guiar las caderas si el giro es incompleto.', 'La seguridad en la recepción es clave.'],
    },
  },
  {
    id: 'throne-shoulderstand-pop',
    nombre: 'Pop: Trono <> Parada de Hombros',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['27', 'shoulderstand'],
    descripcion: 'Una transición fundamental para controlar el eje vertical. Se lanza de Trono a Parada de Hombros y viceversa.',
    narrativa_detallada: `
**Este pop es crucial para desarrollar el control del eje vertical.**

**Inicio (Trono a Parada de Hombros):**
1. Comiencen en **Trono (Throne)** bajo y compacto.
2. **Base:** Lanza al volador verticalmente. Debes mover tus pies rápidamente para recibir los hombros del volador.
3. **Volador:** En el aire, pasa de **Tuck (Recogido/Agrupado)** a una línea vertical (**Tuck** o **Pike**), preparándote para aterrizar sobre tus hombros.

**Regreso (Parada de Hombros a Trono):**
1. Desde **Parada de Hombros**, la base lanza verticalmente.
2. **Volador:** Recoge las rodillas al pecho (**Tuck**) para volver a la posición de **Trono**.
3. **Base:** Mueve los pies desde los hombros del volador a sus glúteos para la recepción.
`,
    musculos: {
      base: ["Precisión extrema en el cambio de pies."],
      volador: ["Control del core para mantener el eje vertical.", "Conciencia de la posición de hombros y caderas."],
    },
    calibracion: {
      base: ["Los pies deben moverse como un relámpago.", "La recepción debe ser suave y precisa."],
      volador: ["No te pases de la vertical.", "Aprende a sentir dónde están tus hombros en el aire."],
      observador: ["Fundamental para guiar la verticalidad y asegurar recepciones limpias."],
    },
  },
  {
    id: '32',
    nombre: 'Voltereta: Hacia Atrás a Trono',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['31'],
    descripcion: 'Un movimiento icónico. El volador es lanzado desde Pájaro Invertido y realiza una voltereta hacia atrás para ser recibido en Trono.',
    narrativa_detallada: `
**Este es uno de los primeros 'flips' que se aprenden en Icarian.**

**Inicio:**
1.  **Base y Volador:** Comiencen en una posición de **Pájaro Invertido (Reverse Bird)** baja y estable.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y el Flip):**
*   **Base:** El lanzamiento debe tener una ligera trayectoria hacia ti para facilitar la rotación hacia atrás del volador. Después de lanzar, prepara tus pies para recibirlo en **Trono (Throne)**.
*   **Volador:** En el lanzamiento, recoge tus rodillas hacia el pecho (**Tuck (Recogido/Agrupado)**) muy rápidamente. Esta acción de 'tuck' es lo que genera la rotación hacia atrás. Mantén la mirada en la base el mayor tiempo posible.
*   **Recepción:** La base recibe al volador en sus pies en la posición de **Trono**, absorbiendo el impacto con las piernas.

**Culminación:**
*   Después de una o varias repeticiones exitosas, el volador se inclina hacia adelante y la base lo guía para que aterrice de pie en el suelo.
`,
    musculos: {
      base: ['Control de la trayectoria del lanzamiento.', 'Recepción precisa.'],
      volador: ["Fuerza abdominal para un 'Tuck' rápido.", 'Confianza y conciencia espacial.'],
    },
    calibracion: {
      base: ['No lances demasiado lejos.', 'El pop es más un "empujón guiado" que una patada vertical.'],
      volador: ["Cuanto más apretado sea tu 'tuck', más rápido girarás.", "Abre el 'tuck' justo antes de la recepción para prepararte."],
      observador: ['Permanece muy cerca. Guía la espalda y caderas del volador durante el giro.', 'Tu rol es fundamental para la seguridad en este movimiento.'],
    },
  },
  {
    id: '35',
    nombre: 'Voltereta: Hacia Adelante a Trono',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['32'],
    descripcion: 'El volador es lanzado desde Trono y realiza una voltereta hacia adelante para ser recibido de nuevo en Trono.',
    narrativa_detallada: `
**Este es el reverso del Backflip y a menudo se considera más desafiante.**

**Inicio:**
1.  **Base y Volador:** Comiencen en un **Trono** bajo y compacto.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y el Flip):**
*   **Base:** El lanzamiento debe tener una trayectoria ligeramente alejada de ti para dar espacio a la voltereta hacia adelante. La recepción será de nuevo en **Trono (Throne)**.
*   **Volador:** En el momento del lanzamiento, el volador se abre ligeramente y luego se recoge de nuevo en un **Tuck (Recogido/Agrupado)**, pero esta vez iniciando la rotación hacia adelante. Es un movimiento de "látigo" con el cuerpo.
*   **Recepción:** La base recibe al volador en **Trono**, con cuidado de no recibir los pies del volador en su cara.

**Culminación:**
*   Este es un truco cumbre. Después de un aterrizaje exitoso, la celebración es obligatoria.
`,
    musculos: {
      base: ['Control de la distancia del lanzamiento.', 'Confianza total en el volador.'],
      volador: ['Control abdominal excepcional para iniciar el flip.', 'Valentía y conciencia espacial.'],
    },
    calibracion: {
      base: ["El espacio es clave. Lanza lo suficientemente lejos para el giro, pero no tanto como para perder la recepción.", 'Mantén tus pies listos.'],
      volador: ["El 'timing' del 'tuck' es crucial.", 'Mantén la vista en un punto el mayor tiempo posible antes de girar.'],
      observador: ['Este es un truco para observadores muy experimentados.', 'Tu trabajo es guiar la rotación y proteger la cabeza y el cuello de ambos participantes.'],
    },
  },
  {
    id: '36',
    nombre: 'Pop: Trípode a Trono',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['21', 'throne-shoulderstand-pop'],
    descripcion: 'Una transición desde un equilibrio sobre la cabeza del volador. Añade un elemento de parada de cabeza a los pops de Icarian.',
    narrativa_detallada: `
**Este pop introduce un nuevo punto de equilibrio: la cabeza.**

**Inicio:**
1.  **Base:** Acuéstate y prepara tus pies como una plataforma.
2.  **Volador:** Entra en la postura de **Trípode (Tripod)**, con tu cabeza en los pies de la base y las manos en el suelo.
3.  **Base:** Con un movimiento controlado, levanta al volador en esta posición de trípode invertido.

**Desarrollo (El Pop):**
*   **Base:** Desde la posición de trípode, realiza un lanzamiento controlado. El movimiento es complejo porque el peso está distribuido de manera diferente.
*   **Volador:** En el lanzamiento, empuja con tus brazos y recoge tus piernas (**Tuck (Recogido/Agrupado)**) para transicionar a una posición sentada en el aire.
*   **Recepción:** La base mueve rápidamente sus pies desde la cabeza del volador hasta debajo de sus glúteos para recibirlo en la postura de **Trono (Throne)**.

**Culminación:**
*   Esta es una transición avanzada que demuestra un gran control. Se suele desmontar desde **Trono**.
`,
    musculos: {
      base: ['Fuerza y estabilidad para soportar el trípode.', 'Un pop muy técnico y preciso.'],
      volador: ['Fuerza de cuello y hombros.', 'Gran control del core para la transición en el aire.'],
    },
    calibracion: {
      base: ['La comunicación debe ser extremadamente clara.', 'El lanzamiento es más un "levantamiento y empujón" que una patada.'],
      volador: ['Asegúrate de tener un trípode fuerte y estable en el suelo antes de intentarlo.', 'La transición de trípode a tuck debe ser rápida.'],
      observador: ['Protege el cuello del volador en todo momento.', 'Este es un ejercicio avanzado que requiere un observador experimentado.'],
    },
  },
  {
    id: 'corkscrew-pop',
    nombre: 'Lavadora Pop: Sacacorchos',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['31', '32'],
    descripcion: 'Una secuencia de Icarian que fluye de Pájaro Invertido a Trono (usando una voltereta hacia atrás) y de vuelta a Pájaro.',
    narrativa_detallada: `
**Esta lavadora icariana combina una voltereta con un pop de rotación.**

**Secuencia:**
1.  **Inicio:** Comiencen en **Pájaro Invertido**.
2.  **Flip:** La base lanza al volador a una **Voltereta: Hacia Atrás a Trono**.
3.  **Recepción y Pop:** La base recibe en **Trono** e inmediatamente, sin pausa, lanza al volador a un **Pop: Pájaro a Pájaro Invertido**.
4.  **Recepción:** La base recibe al volador de nuevo en **Pájaro Invertido**, completando el ciclo.

**Desarrollo:**
*   Esta secuencia requiere una resistencia y un control del tempo excepcionales. La fluidez es clave.

**Culminación:**
*   Se detiene en una de las posturas estables (Trono o Pájaro Invertido) y se desmonta.
`,
    musculos: {
      base: ["Resistencia, ritmo, precisión."],
      volador: ["Resistencia, conciencia espacial, control de múltiples rotaciones."],
    },
    calibracion: {
      base: ["Cada recepción debe ser una preparación para el siguiente lanzamiento.", "Mantén la energía fluyendo."],
      volador: ["Prepárate mentalmente para el siguiente movimiento antes de aterrizar.", "Mantén la calma y la forma."],
      observador: ["Observador muy experimentado que entienda los flujos de Icarian.", "Anticipa la fatiga y posibles errores."],
    },
  },
  {
    id: '34',
    nombre: 'Lavadora Pop: Rueda de Catalina',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['29', '31'],
    descripcion: 'La versión icariana y dinámica de la lavadora clásica. El volador es lanzado de Pájaro a Straddle y de vuelta.',
    narrativa_detallada: `
**Esta es una "lavadora" de Icarian, enlazando dos pops avanzados.**

**Secuencia:**
1.  **Inicio:** Comiencen en **Pájaro Frontal (Front Bird)**.
2.  **Pop 1 (Pájaro a Straddle):** La base lanza al volador. En el aire, el volador abre las piernas a **Straddle**. La base lo recibe en **Trono a Horcajadas (Straddle Throne)**.
3.  **Pop 2 (Straddle a Pájaro):** Sin pausa, la base lanza de nuevo al volador desde **Trono a Horcajadas**. El volador junta las piernas y extiende el cuerpo a una línea recta. La base lo recibe de nuevo en **Pájaro Frontal (Front Bird)**.

**Desarrollo:**
*   La clave aquí es el **Tempo** y la fluidez. No hay pausas entre la recepción y el siguiente lanzamiento.
*   Requiere una resistencia, concentración y comunicación no verbal excepcionales de ambos.

**Culminación:**
*   La secuencia termina cuando ambos deciden detenerse, generalmente aterrizando en **Trono** o desmontando desde **Pájaro Frontal**.
`,
    musculos: {
      base: ['Resistencia, precisión y ritmo.'],
      volador: ['Resistencia del core, conciencia espacial continua.'],
    },
    calibracion: {
      base: ['Mantén un ritmo constante.', 'Cada lanzamiento prepara la siguiente recepción.'],
      volador: ['Mantén la línea y el control en todo momento.', 'Anticipa el siguiente movimiento.'],
      observador: ['Permanece alerta y en movimiento durante toda la secuencia.', 'La fatiga puede llevar a errores, así que mantente enfocado.'],
    },
  },
   {
    id: 'ninja-star-pop',
    nombre: 'Lavadora Pop: Ninja Star',
    nivel: 2,
    type: 'Icarian',
    prerequisites: ['corkscrew-pop'],
    descripcion: 'Una lavadora Icariana muy fluida y rotacional que conecta Pájaro Invertido, Estrella Lateral y Trono.',
    narrativa_detallada: `
**Una secuencia dinámica que enseña el control de la rotación y el cambio de plano.**

**Secuencia de ejemplo:**
1.  **Inicio:** Comiencen en **Pájaro Invertido**.
2.  **Pop 1 (a Side Star):** La base lanza al volador con una ligera rotación. El volador gira 90 grados para ser recibido en una **Estrella Lateral (Side Star)** sostenida solo por los pies de la base.
3.  **Pop 2 (a Trono):** Desde la Estrella Lateral, la base lanza al volador, quien se recoge (**Tuck**) para ser recibido en **Trono**.
4.  **Pop 3 (de vuelta a Pájaro Invertido):** Desde Trono, la base puede lanzar al volador a un **Pop: Pájaro a Pájaro Invertido** para reiniciar el ciclo.

**Desarrollo:**
*   Esta lavadora es menos sobre altura y más sobre control rotacional y precisión en la recepción.

**Culminación:**
*   Se puede detener la secuencia en **Trono** para un desmontaje seguro.
`,
    musculos: {
      base: ['Control de la rotación con los pies.', 'Timing preciso.'],
      volador: ['Oblicuos y core para los giros.', 'Mantenerse compacto en las transiciones.'],
    },
    calibracion: {
      base: ['Los lanzamientos son más "guiados" que una patada explosiva.', 'Usa toda la superficie de tus pies para dirigir.'],
      volador: ['Mantén el contacto visual con la base siempre que sea posible.', 'Confía en la trayectoria que te da la base.'],
      observador: ['Muévete constantemente alrededor de la pareja.', 'Prepárate para guiar las caderas en las rotaciones.'],
    },
  },
  
  // Masaje Tailandés: NIVEL 1 - Secuencia Supina (Boca Arriba)
  {
    id: 'thai-supine-01',
    nombre: 'Presión Palmar en los Pies\n(Foot Palming)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: [],
    descripcion: 'Técnica inicial para conectar con el receptor, calentar los pies y empezar a trabajar las líneas Sen de las piernas.',
    narrativa_detallada: `
**Posición:** Receptor acostado boca arriba (supino). Dador sentado a los pies.
**Técnica:**
1. El dador coloca las palmas de sus manos sobre las plantas de los pies del receptor.
2. Usando el peso corporal, aplica una presión rítmica y alternada, como si caminara en el lugar.
3. Esto establece la comunicación (Metta) y prepara al receptor para el masaje.`,
  },
  {
    id: 'thai-supine-04',
    nombre: 'Movilización de Tobillos\n(Ankle Rotations)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-01'],
    descripcion: 'Técnica suave para liberar la tensión y mejorar la movilidad en la articulación del tobillo.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a los pies.
**Técnica:**
1. El dador sostiene el pie del receptor con una mano y el tobillo con la otra para estabilizar.
2. Realiza rotaciones lentas y controladas del pie en ambas direcciones.
3. Presta atención a cualquier chasquido o limitación en el movimiento.`,
  },
  {
    id: 'thai-supine-02',
    nombre: 'Estiramiento de Piernas\n(Single Leg Stretch)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-04'],
    descripcion: 'Técnica fundamental para liberar la tensión en los isquiotibiales y la espalda baja del receptor.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a los pies.
**Técnica:**
1. El dador levanta una pierna del receptor y coloca el pie en su hombro o pecho, usando su cuerpo como palanca.
2. Con las manos, aplica una presión suave y constante sobre el muslo del receptor para profundizar el estiramiento, manteniendo la pierna recta.
3. Se mantiene durante varias respiraciones antes de cambiar de lado.`,
  },
  {
    id: 'thai-supine-06',
    nombre: 'Apertura de Cadera\ncon una Pierna',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-02'],
    descripcion: 'Aísla el estiramiento en los rotadores externos de la cadera (como el piriforme) y los glúteos.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a un lado.
**Técnica:**
1. El dador dobla una rodilla del receptor y coloca el tobillo sobre la rodilla opuesta (formando un "4").
2. Con una mano en el tobillo y otra en la rodilla doblada, aplica una suave presión para abrir la cadera.
3. Se puede profundizar levantando la pierna de apoyo hacia el pecho.`,
  },
  {
    id: 'thai-supine-03',
    nombre: 'Estiramiento de la Mariposa\n(Butterfly Stretch)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-06'],
    descripcion: 'Abre ambas caderas y la ingle simultáneamente, aliviando la tensión en la zona pélvica.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a los pies.
**Técnica:**
1. El dador junta las plantas de los pies del receptor y acerca los talones a la ingle.
2. Colocando las manos o antebrazos en la parte interna de los muslos, el dador aplica una presión suave y constante hacia el suelo.
3. Se puede añadir un ligero balanceo (rocking) para relajar más la zona.`,
  },
  {
    id: 'thai-supine-07',
    nombre: 'Presión Palmar en Brazos\ny Manos',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-01'],
    descripcion: 'Extiende el trabajo de calentamiento y energía a las extremidades superiores.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado al lado.
**Técnica:**
1. El dador toma un brazo del receptor y lo coloca extendido a su lado.
2. Usando la presión palmar (palming), el dador camina rítmicamente desde el hombro hasta la mano.
3. Termina con una suave presión y masaje en la palma de la mano del receptor.`,
  },
  {
    id: 'thai-supine-05',
    nombre: 'Apertura de Pecho\ncon Brazos en Cruz',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-07'],
    descripcion: 'Un estiramiento pasivo para los músculos pectorales y la parte delantera de los hombros, fomentando una respiración más profunda.',
    narrativa_detallada: `
**Posición:** Receptor supino, con los brazos extendidos en forma de cruz.
**Técnica:**
1. El dador se arrodilla o sienta junto a la cabeza del receptor.
2. Coloca las palmas de sus manos sobre los hombros o antebrazos del receptor.
3. Inclinando su peso corporal hacia adelante, el dador aplica una presión suave y sostenida, permitiendo que la gravedad abra el pecho del receptor.`,
  },
  {
    id: 'thai-supine-08',
    nombre: 'Torsión Espinal Supina\n(Jathara Parivartanasana)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-02'],
    descripcion: 'Una torsión suave que libera la tensión en la espalda baja, los glúteos y mejora la digestión.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador arrodillado a un lado.
**Técnica:**
1. El dador dobla una rodilla del receptor hacia el pecho y la guía cruzando el cuerpo hacia el lado opuesto.
2. Con una mano en la rodilla y otra en el hombro opuesto del receptor (para mantenerlo en el suelo), el dador profundiza suavemente la torsión.
3. El receptor gira la cabeza en dirección opuesta a la rodilla.`,
  },
  {
    id: 'thai-supine-09',
    nombre: 'Estiramiento del Psoas\nAsistido',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-02'],
    descripcion: 'Libera la tensión en el psoas, un músculo profundo que conecta la columna con las piernas, a menudo acortado por estar sentado.',
    narrativa_detallada: `
**Posición:** Receptor supino, cerca del borde del futón.
**Técnica:**
1. El dador deja que una pierna del receptor cuelgue fuera del borde del futón.
2. La otra rodilla se lleva hacia el pecho del receptor para estabilizar la pelvis.
3. La gravedad crea un estiramiento suave en el flexor de la cadera (psoas) de la pierna que cuelga. El dador puede añadir una presión suave.`,
  },
  {
    id: 'thai-supine-10',
    nombre: 'Masaje de Cuello\ny Liberación Occipital',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: [],
    descripcion: 'Técnica para aliviar la tensión en el cuello y en la base del cráneo, una zona común de dolores de cabeza tensionales.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado detrás de la cabeza.
**Técnica:**
1. El dador levanta suavemente la cabeza del receptor y la apoya en su regazo.
2. Con los pulgares, aplica presión en los músculos a los lados del cuello.
3. Con los dedos, realiza una suave tracción y presión en la base del cráneo (línea occipital).`,
  },

  // Masaje Tailandés: NIVEL 2 - Secuencia Lateral y Sentada
  {
    id: 'thai-side-01',
    nombre: 'Estiramiento Lateral\nde Cadera',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-06', 'thai-supine-08'],
    descripcion: 'Técnica efectiva para estirar los glúteos y el piriforme, a menudo una fuente de dolor lumbar.',
    narrativa_detallada: `
**Posición:** Receptor acostado de lado. Dador arrodillado detrás.
**Técnica:**
1. El dador dobla la pierna superior del receptor y coloca el pie delante de la rodilla de la pierna inferior.
2. Con una mano en el hombro y otra en la cadera, el dador aplica una suave torsión, empujando el hombro hacia atrás y la cadera hacia adelante.
3. Esto crea un estiramiento profundo en la zona del glúteo.`,
  },
  {
    id: 'thai-side-02',
    nombre: 'Llave de Hombro\nen Posición Lateral',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-05'],
    descripcion: 'Permite un acceso profundo y seguro a la articulación del hombro, liberando la tensión en los rotadores.',
    narrativa_detallada: `
**Posición:** Receptor de lado. Dador arrodillado detrás.
**Técnica:**
1. El dador sostiene el brazo superior del receptor y lo lleva suavemente hacia atrás, doblándolo por el codo.
2. Estabilizando el omóplato con una mano, el dador usa la otra para guiar el movimiento, explorando el rango de movilidad.
3. El movimiento es lento y se detiene ante cualquier resistencia.`,
  },
  {
    id: 'thai-side-03',
    nombre: 'Estiramiento del Cuádriceps\nen Posición Lateral',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-09'],
    descripcion: 'Una forma segura y efectiva de estirar la parte frontal del muslo (cuádriceps).',
    narrativa_detallada: `
**Posición:** Receptor de lado, con la pierna inferior estirada y la superior ligeramente doblada.
**Técnica:**
1. El dador se arrodilla detrás del receptor.
2. Dobla la rodilla inferior del receptor y agarra el tobillo.
3. Tira suavemente del talón hacia el glúteo hasta que el receptor sienta un estiramiento en la parte frontal del muslo.`,
  },
  {
    id: 'thai-side-04',
    nombre: 'Trabajo en la Banda\nIliotibial Lateral',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-side-01'],
    descripcion: 'Técnica para liberar la tensión en la banda iliotibial (IT), un tejido conectivo grueso en el costado de la pierna.',
    narrativa_detallada: `
**Posición:** Receptor de lado. Dador arrodillado al lado.
**Técnica:**
1. El dador apoya la pierna superior del receptor sobre su propio muslo para mayor estabilidad.
2. Usando presión palmar, antebrazo o codo, el dador aplica presión a lo largo de la banda IT, desde la cadera hasta justo por encima de la rodilla.`,
  },
  {
    id: 'thai-seated-01',
    nombre: 'Masaje de Cuello y Hombros\n(Sentado)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-10'],
    descripcion: 'Técnicas clásicas para aliviar la tensión acumulada en el cuello y los trapecios, una zona común de estrés.',
    narrativa_detallada: `
**Posición:** Receptor sentado con las piernas cruzadas. Dador arrodillado detrás.
**Técnica:**
1. El dador utiliza sus pulgares para aplicar presión en los puntos a lo largo de los hombros y la base del cráneo.
2. Se pueden realizar suaves estiramientos de cuello, inclinando la cabeza hacia un lado mientras se estabiliza el hombro opuesto.
3. La sesión a menudo termina con un suave masaje en la cabeza.`,
  },
  {
    id: 'thai-seated-02',
    nombre: 'Giro Espinal Sentado\n(Seated Spinal Twist)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-side-01', 'thai-seated-01'],
    descripcion: 'Una torsión asistida que mejora la flexibilidad de la columna vertebral y estimula los órganos internos.',
    narrativa_detallada: `
**Posición:** Receptor sentado. Dador arrodillado detrás.
**Técnica:**
1. El dador coloca una rodilla en la espalda del receptor para estabilizar.
2. El dador guía al receptor en una torsión, colocando una mano en el hombro opuesto y la otra en la cadera.
3. Se anima al receptor a exhalar mientras profundiza en la torsión.`,
  },
   {
    id: 'thai-seated-03',
    nombre: 'Apertura de Pecho\nSentado',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-seated-01'],
    descripcion: 'Ayuda a liberar la tensión en los hombros y el pecho, contrarrestando los efectos de pasar mucho tiempo sentado.',
    narrativa_detallada: `
**Posición:** Receptor sentado. Dador arrodillado detrás.
**Técnica:**
1. El dador coloca sus rodillas en la espalda media-baja del receptor para dar soporte.
2. El dador toma las muñecas o antebrazos del receptor y tira suavemente hacia atrás y hacia arriba.
3. El dador puede usar su peso corporal inclinándose hacia atrás para aumentar el estiramiento.`,
  },
  {
    id: 'thai-seated-04',
    nombre: 'Masaje de Espalda\ncon Codo (Sentado)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-seated-01'],
    descripcion: 'Técnica de presión profunda para liberar la tensión en los músculos alrededor de los omóplatos.',
    narrativa_detallada: `
**Posición:** Receptor sentado, a menudo inclinado hacia adelante y apoyado.
**Técnica:**
1. El dador se posiciona detrás o al lado.
2. Con cuidado, utiliza el codo para aplicar una presión lenta y profunda en los músculos trapecio y romboides.
3. Requiere mucha sensibilidad y comunicación para no ser demasiado intenso.`,
  },
  {
    id: 'thai-seated-05',
    nombre: 'Estiramiento de Hombro\nSentado con Entrelazado',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['thai-seated-03'],
    descripcion: 'Una apertura de hombros y pecho que se puede realizar en la posición sentada.',
    narrativa_detallada: `
**Posición:** Receptor sentado. Dador detrás.
**Técnica:**
1. El receptor entrelaza sus manos detrás de la espalda.
2. El dador se arrodilla, coloca sus rodillas en la espalda media para dar soporte.
3. El dador toma los antebrazos entrelazados del receptor y los levanta suavemente, creando un estiramiento en la parte frontal de los hombros.`,
  },

  // Masaje Tailandés: NIVEL 3 - Secuencia Prona y Técnicas Avanzadas
  {
    id: 'thai-prone-01',
    nombre: 'Caminata en la Espalda\n(Back Walking)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-side-01', 'thai-seated-02'],
    descripcion: 'Una técnica icónica y avanzada. El dador usa sus pies para aplicar una presión amplia y profunda a lo largo de la espalda del receptor.',
    narrativa_detallada: `
**Posición:** Receptor acostado boca abajo (prono). Dador de pie, a menudo usando cuerdas o una barra para mantener el equilibrio.
**Técnica:**
1. El dador camina lentamente sobre la espalda del receptor, aplicando presión con las plantas de los pies a los lados de la columna vertebral (nunca sobre ella).
2. Requiere un inmenso control, equilibrio y sensibilidad por parte del dador.`,
  },
  {
    id: 'thai-prone-06',
    nombre: 'Estiramiento de Isquiotibiales\nen Posición Prona (Medio Arco)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-02'],
    descripcion: 'Permite estirar la parte posterior de la pierna mientras el receptor está cómodamente boca abajo.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado al lado.
**Técnica:**
1. El dador dobla la rodilla de una pierna del receptor.
2. Colocando su hombro debajo de la rodilla doblada, el dador levanta la pierna.
3. Con las manos, el dador sostiene el tobillo y aplica una suave presión para estirar el isquiotibial.`,
  },
  {
    id: 'thai-prone-07',
    nombre: 'Presión en Glúteos\ncon Talón o Rodilla',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-side-01'],
    descripcion: 'Técnica para aplicar una presión profunda y liberadora en los músculos grandes de los glúteos.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado o de pie al lado.
**Técnica:**
1. El dador localiza el centro del músculo del glúteo.
2. Usando su talón o rodilla, aplica una presión lenta, profunda y sostenida, a menudo pidiendo al receptor que respire en la zona.
3. Se debe evitar la zona del nervio ciático.`,
  },
  {
    id: 'thai-prone-02',
    nombre: 'Transición de la Cobra\n(Cobra Transition)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-seated-03', 'thai-prone-01'],
    descripcion: 'Un estiramiento dinámico que abre toda la parte frontal del cuerpo del receptor, imitando la postura de la cobra en yoga.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador de pie, a horcajadas sobre las piernas del receptor.
**Técnica:**
1. El dador engancha sus pies debajo de los muslos del receptor.
2. Tomando las manos o muñecas del receptor, el dador se inclina hacia atrás, levantando el torso del receptor del suelo en un arco.
3. El movimiento debe ser fluido y requiere fuerza y confianza.`,
  },
  {
    id: 'thai-prone-08',
    nombre: 'Liberación de Omóplatos\nen Posición Prona',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-side-02'],
    descripcion: 'Trabajo detallado para liberar la tensión alrededor del omóplato, una zona común de rigidez.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado al lado.
**Técnica:**
1. El dador coloca el brazo del receptor en una posición de "escorpión" (doblado y llevado hacia la espalda).
2. Esto hace que el omóplato sobresalga.
3. El dador utiliza los pulgares para presionar y "excavar" suavemente debajo del borde del omóplato.`,
  },
  {
    id: 'thai-prone-09',
    nombre: 'Tracción de Brazo\nen Posición Prona',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-prone-08'],
    descripcion: 'Un estiramiento final para el hombro, pectoral y bíceps.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado a la altura de la cabeza.
**Técnica:**
1. El dador extiende un brazo del receptor hacia un lado en forma de T.
2. El dador estabiliza el hombro del receptor con una mano.
3. El dador guía al receptor para que ruede ligeramente sobre ese hombro, creando un estiramiento profundo.`,
  },
  {
    id: 'thai-prone-04',
    nombre: 'Elevación de Caderas\n(Hip Lift)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-prone-02'],
    descripcion: 'Una elevación terapéutica que descomprime la espalda baja y estira los flexores de la cadera.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador de pie en la cabeza del receptor.
**Técnica:**
1. El dador coloca sus pies firmemente en la parte superior de los glúteos del receptor.
2. El dador toma las manos del receptor y, usando un movimiento de palanca, levanta las caderas del receptor del suelo.
3. Esto crea una tracción suave en toda la columna vertebral.`,
  },
  {
    id: 'thai-prone-03',
    nombre: 'Arado Asistido\n(Assisted Plough)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-prone-04', 'thai-supine-02'],
    descripcion: 'Una inversión terapéutica avanzada que descomprime profundamente la columna vertebral.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador de pie sobre el receptor.
**Técnica:**
1. El dador se para sobre los muslos del receptor.
2. Levantando las piernas del receptor, el dador las guía por encima de la cabeza del receptor hasta que los pies tocan el suelo por detrás.
3. Esta postura requiere mucha flexibilidad del receptor y habilidad del dador.`,
  },
  {
    id: 'thai-prone-05',
    nombre: 'Trabajo de Hara\n(Abdomen)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['thai-supine-09'],
    descripcion: 'El "Hara" es el centro energético. Esta técnica se enfoca en liberar la tensión abdominal y mejorar el flujo de energía.',
    narrativa_detallada: `
**Posición:** Receptor supino, con las rodillas dobladas. Dador al lado.
**Técnica:**
1. El dador coloca las palmas en el abdomen del receptor, debajo del ombligo.
2. Usando un movimiento rítmico y circular, aplica una presión suave pero profunda.
3. Se sincroniza la presión con la exhalación del receptor. Requiere sensibilidad y confianza.`,
  },

  // Standing Acro: NIVEL 1
  {
    id: 'standing-high-bird',
    nombre: 'Standing: Pájaro Alto\n(High Bird)',
    nivel: 1,
    type: 'Standing',
    prerequisites: ['1', 'h2h'],
    descripcion: 'Una postura de Acro de Pie (Standing Acro) fundamental. Es una transición desde L-Basing hacia acrobacias de pie.',
    narrativa_detallada: `
**Esta postura es el puente principal hacia el Standing Acro.**

**Inicio:**
1. **Base:** De pie, con una postura sólida, pies a la anchura de los hombros.
2. **Volador:** De pie, frente a la base. Coloca tus manos en los hombros de la base.
3. **Entrada:** El volador da un pequeño salto, llevando las rodillas al pecho, mientras la base se agacha ligeramente para recibir las caderas del volador en sus manos. La base coloca sus manos como un "asiento" debajo de la cadera del volador.

**Desarrollo:**
* **Base:** Levántate usando la fuerza de tus piernas, no de tu espalda. Extiende los brazos, levantando al volador sobre tu cabeza. Encuentra el **Apilamiento (Stacking)**: las caderas del volador sobre tus hombros, y tus hombros sobre tus caderas.
* **Volador:** Mantén una línea corporal fuerte (**Hollow Body**), similar a un **Pájaro Frontal (Front Bird)**. Mantén el core activo para ayudar a la base a encontrar el equilibrio.

**Culminación:**
1. **Base:** Flexiona las rodillas para bajar al volador de manera controlada.
2. **Volador:** Prepárate para aterrizar de pie, absorbiendo el impacto con las rodillas.
`,
    musculos: {
      base: ["Piernas", "Core", "Hombros"],
      volador: ["Core", "Confianza", "Línea Corporal"],
    },
    calibracion: {
      base: ["Usa las piernas para levantar, no la espalda.", "Encuentra el apilamiento vertical.", "La comunicación es clave."],
      volador: ["Mantente apretado y predecible.", "No hagas movimientos bruscos.", "Apunta a aterrizar suavemente."],
      observador: ["Esencial para aprender Standing Acro.", "Permanece cerca y prepárate para soportar el peso de ambos."],
    },
  },
  
  // Standing Acro: NIVEL 2
  {
    id: 'standing-f2h',
    nombre: 'Standing: Pie a Mano\n(Foot-to-Hand)',
    nivel: 2,
    type: 'Standing',
    prerequisites: ['standing-high-bird', '14'],
    descripcion: 'Una postura icónica de Acro de Pie. La base sostiene los pies del volador en una parada de manos.',
    narrativa_detallada: `
**Esta es una habilidad avanzada de Standing Acro.**

**Inicio:**
Se puede entrar desde el suelo o desde **High Bird**.
1. **Base:** De pie, en una postura muy sólida. Extiende los brazos hacia arriba, listos para recibir.
2. **Volador:** El volador se coloca frente a la base. Se requiere una entrada dinámica. A menudo, el volador salta a una parada de manos mientras la base, en una sentadilla profunda, atrapa los pies del volador.

**Desarrollo:**
* **Base:** Levántate lentamente, usando la fuerza de las piernas, extendiendo los brazos por completo. El equilibrio es extremadamente delicado. Requiere microajustes constantes.
* **Volador:** Mantén una línea de parada de manos perfecta y un core muy activo. Confía en el agarre de la base y en sus ajustes.

**Culminación:**
* La salida es tan compleja como la entrada. A menudo, la base baja al volador a sus hombros, o lo baja de manera controlada al suelo.
`,
    musculos: {
      base: ["Fuerza total del cuerpo", "Equilibrio", "Concentración"],
      volador: ["Equilibrio en parada de manos", "Core", "Confianza absoluta"],
    },
    calibracion: {
      base: ["El agarre de los pies es todo.", "El movimiento de subida y bajada debe ser lento y controlado.", "Comunicación constante."],
      volador: ["Tu línea es tu estabilidad.", "No hagas movimientos bruscos.", "Respira."],
      observador: ["Observador extremadamente experimentado y fuerte.", "Debe saber cómo guiar una caída desde esta altura y peso."],
    },
  },
  {
    id: 'monkey-standing',
    nombre: 'Standing: Mono\n(Monkey)',
    nivel: 2,
    type: 'Standing',
    prerequisites: ['standing-high-bird'],
    descripcion: 'Una transición clásica de standing acro donde el volador se mueve entre los hombros y los pies de la base.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** De pie, con el volador sentado en sus hombros.
2.  **Transición:** El volador se inclina hacia adelante, la base lo atrapa en **High Bird**.
3.  **Movimiento:** Desde High Bird, la base puede guiar al volador a una posición de **Foot-to-Foot** (de pie sobre los pies de la base).
4.  **Regreso:** Se puede revertir la secuencia para volver a los hombros.`,
    musculos: {
      base: ["Fuerza y equilibrio de piernas", "Core"],
      volador: ["Control del core", "Agilidad"],
    },
    calibracion: {
      base: ["Mantén una base sólida y estable.", "Guía las transiciones con claridad."],
      volador: ["Mantente compacto y ligero.", "Sigue la guía de la base en todo momento."],
      observador: ["Permanece cerca y atento durante las transiciones de peso."],
    },
  },

  // Standing Acro: NIVEL 3
  {
    id: 'standing-h2h',
    nombre: 'Standing: Mano a Mano\n(H2H)',
    nivel: 3,
    type: 'Standing',
    prerequisites: ['standing-f2h', 'h2h', 'monkey-standing'],
    descripcion: 'El pináculo del Standing Acro. La base sostiene al volador en una parada de manos, mano con mano.',
    narrativa_detallada: `
**El pináculo de la confianza y el equilibrio en pareja.**

**Inicio:**
La entrada más común es desde **High Bird**.
1. **Base y Volador:** En una posición estable de **High Bird**, el volador baja la cabeza hacia la base.
2. **Conexión:** Base y volador conectan su agarre **Hand-to-Hand grip**.
3. **Transición:** El volador lleva las caderas hacia arriba, entrando en una parada de manos mientras la base ajusta su equilibrio para sostener la postura.

**Desarrollo:**
* **Base:** El **Apilamiento (Stacking)** es perfecto: manos sobre codos, hombros, caderas y pies. La base debe estar inmóvil.
* **Volador:** La línea de parada de manos debe ser perfecta. El más mínimo movimiento afecta a la base.

**Culminación:**
* Se sale de la misma manera que se entró, revirtiendo el movimiento para volver a **High Bird** y luego al suelo.
`,
    musculos: {
      base: ["Todo el cuerpo trabajando en perfecta sinergia."],
      volador: ["Control absoluto del cuerpo y la mente."],
    },
    calibracion: {
      base: ["Conviértete en una estatua.", "El equilibrio está en los dedos.", "Respira."],
      volador: ["Conviértete en una pluma.", "Cada músculo está activo.", "La confianza es total."],
      observador: ["La presencia más importante en la sala.", "No toca a menos que sea absolutamente necesario para prevenir una lesión grave."],
    },
  },
  {
    id: 'two-high',
    nombre: 'Standing: Dos Alturas\n(Two-High)',
    nivel: 3,
    type: 'Standing',
    prerequisites: ['standing-high-bird'],
    descripcion: 'Una postura icónica de Acro de Pie donde el volador se para sobre los hombros de la base.',
    narrativa_detallada: `
**Una postura fundamental y un pilar del acro en grupo.**

**Inicio:**
1. **Base:** En una posición de sentadilla fuerte y estable.
2. **Volador:** Se coloca frente a la base, pone los pies en los muslos de la base y las manos en sus hombros.
3. **Entrada:** Con un pequeño salto y la ayuda de la base, el volador sube hasta pararse en los hombros de la base. La base se levanta simultáneamente.

**Desarrollo:**
* **Base:** Mantén una postura fuerte con el core activo. Los hombros deben estar firmes para proporcionar una plataforma estable.
* **Volador:** Mantén el equilibrio con el core y las piernas activas. La mirada al frente. Los brazos pueden extenderse para mayor estética y equilibrio.

**Culminación:**
* La salida es la inversa de la entrada. El volador se agacha y la base lo guía suavemente hacia abajo, a menudo atrapándolo en un abrazo o en sus muslos.
`,
    musculos: {
      base: ["Piernas, core y hombros muy fuertes."],
      volador: ["Equilibrio, core y confianza."],
    },
    calibracion: {
      base: ["Mantén el pecho erguido y la espalda recta.", "La comunicación verbal es clave para la subida."],
      volador: ["Coloca los pies cerca del cuello de la base para mayor estabilidad.", "Mantén el cuerpo en una línea vertical."],
      observador: ["Indispensable. Se coloca detrás de la base, listo para estabilizar a ambos."],
    },
  },
];

export async function getPoses(): Promise<Pose[]> {
  // We are simulating fetching data from a database.
  // In a real app, this would be a database query.
  // We return the raw data without images, as they will be generated on demand.
  return Promise.resolve(allPosesData);
}

const allModifiersData: PoseModifier[] = [
    {
      id: '1',
      titulo: 'Tuck (Recogido/Agrupado)',
      descripcion: 'Una posición compacta donde las rodillas se flexionan y se llevan hacia el pecho. Esta forma crea un centro de gravedad estable y controlado, ideal para equilibrios y rotaciones.',
    },
    {
      id: '2',
      titulo: 'Straddle (A horcajadas/Abierto)',
      descripcion: 'Las piernas están rectas y separadas, formando una "V". Esta posición es fundamental para muchas transiciones y posturas sentadas. Baja el centro de gravedad y ofrece estabilidad lateral.',
    },
    {
      id: '3',
      titulo: 'Pike (Carpa)',
      descripcion: 'Las piernas están rectas y juntas, con una flexión profunda en las caderas (el cuerpo forma una "L"). Esta forma requiere una buena compresión y flexibilidad de los isquiotibiales. Es usada en muchas entradas a inversiones.',
    },
     {
      id: '6',
      titulo: 'Pike Straddle (Carpa Abierta)',
      descripcion: 'Una combinación de Pike y Straddle. Las piernas están rectas y separadas (Straddle), y hay una flexión en la cadera (Pike). Es una forma corporal muy común en muchas transiciones y flujos dinámicos.',
    },
    {
      id: '4',
      titulo: 'Layout / Straight (Recto/Plancha)',
      descripcion: 'El cuerpo se mantiene en una línea perfectamente recta desde los talones hasta la cabeza, como una tabla. Requiere una activación total del core y los glúteos. Es la base de posturas como **Pájaro Frontal (Front Bird)** y **Plancha sobre Manos (Free Bird)**.',
    },
    {
      id: '5',
      titulo: 'Open Tuck (Recogido Abierto)',
      descripcion: 'Una variación de la posición recogida donde se mantiene la flexión de las rodillas pero se permite que la espalda se arquee y el pecho se abra. Es una postura común en posturas terapéuticas y de apertura de pecho.',
    },
];

export async function getPoseModifiers(): Promise<PoseModifier[]> {
    return Promise.resolve(allModifiersData);
}

const allConceptsData: Concept[] = [
    // --- ACROYOGA ---
    
    // -- Categoría: Comunicación y Seguridad --
    {
      id: 'ac-cs-01',
      titulo: 'Consentimiento',
      descripcion: 'Pedir permiso antes de tocar, observar o dar consejos. Es la base de una práctica respetuosa y segura.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-04',
      titulo: '"Abajo"',
      descripcion: 'La palabra de seguridad universal. Cuando alguien la dice, la postura o transición se detiene y se desmonta de la forma más segura posible, sin hacer preguntas.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '4',
      titulo: 'Observador (Spotter)',
      descripcion: 'El rol más importante para la seguridad. Previene caídas y asegura un desmontaje seguro. Su foco principal son las caderas del volador.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '48',
      titulo: 'Caída Controlada (Bail Out)',
      descripcion: 'Una forma predeterminada y segura de salir de una postura cuando se pierde el equilibrio. Es una habilidad tan importante como hacer la postura misma.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-dt-11',
      titulo: 'Entradas y Salidas',
      descripcion: 'Las técnicas para entrar (Mount) y salir (Dismount) de una postura. Dominar las salidas seguras es tan crucial como la postura misma. Una habilidad clave es la **Salida en Rueda (Cartwheel Exit)**, que consiste en salir de una inversión girando lateralmente para aterrizar de pie. Esta misma habilidad evoluciona a la **Transición: Rueda Lateral (Cartwheel)**, usada para entrar dinámicamente en posturas y lavadoras avanzadas.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-cs-08',
      titulo: 'Calentamiento (Warm-up)',
      descripcion: 'Movimientos y ejercicios realizados al inicio de la práctica para preparar el cuerpo, aumentar el flujo sanguíneo y prevenir lesiones.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '31',
      titulo: 'Comunicación Verbal',
      descripcion: 'Usar palabras claras y concisas para coordinar. Ej: "Listo", "Abajo", "Espera". Fundamental para la seguridad y el aprendizaje.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '33',
      titulo: 'Comunicación No Verbal',
      descripcion: 'Sentir y responder a los cambios de peso y presión del compañero. Es la forma de comunicación más importante una vez en la postura.',
      category: 'Comunicación y Seguridad',
    },
     {
      id: '32',
      titulo: 'Comunicación: "Más peso / Menos peso"',
      descripcion: 'Instrucciones del volador a la base para ajustar la distribución del peso, especialmente en agarres de manos. Ayuda a encontrar el punto de equilibrio.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-11',
      titulo: 'Contacto Visual',
      descripcion: 'Una poderosa herramienta de comunicación no verbal que ayuda a construir confianza y a sincronizar movimientos.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '47',
      titulo: 'Escuchar',
      descripcion: 'No solo con los oídos, sino sentir activamente los movimientos y las necesidades del compañero a través de los puntos de contacto.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-02',
      titulo: 'Límites (Boundaries)',
      descripcion: 'Reconocer y comunicar los propios límites físicos y emocionales, y respetar los límites de los demás.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '34',
      titulo: 'Confianza',
      descripcion: 'La fe en uno mismo, en el compañero y en el observador. Es la base emocional sobre la que se construye toda la práctica.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-03',
      titulo: 'Vulnerabilidad',
      descripcion: 'La cualidad de estar abierto y expuesto. La práctica de Acroyoga requiere vulnerabilidad y fomenta un espacio para gestionarla de forma segura.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '28',
      titulo: 'Propiocepción',
      descripcion: 'La conciencia de la posición y el movimiento del cuerpo en el espacio. Es una habilidad que se desarrolla intensamente con la práctica del Acroyoga.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '49',
      titulo: 'Intención',
      descripcion: 'Establecer una meta o enfoque claro antes de intentar una postura. Puede ser la diversión, la conexión, la perfección técnica o simplemente respirar.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '50',
      titulo: 'Rango de Movimiento (Range of Motion)',
      descripcion: 'La amplitud de movimiento de una articulación. Es crucial conocer y respetar los límites propios y del compañero para prevenir lesiones.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '35',
      titulo: 'Juego (Play)',
      descripcion: 'La actitud de explorar, reír y no tomarse la práctica demasiado en serio. El juego fomenta la creatividad y fortalece la conexión.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '43',
      titulo: 'Jam',
      descripcion: 'Un encuentro informal donde la comunidad de Acroyoga se reúne para practicar, compartir y jugar juntos en un ambiente seguro y colaborativo.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-06',
      titulo: 'Ritual de Inicio y Cierre',
      descripcion: 'Una forma de comenzar y terminar la práctica de manera consciente, a menudo con una calibración de pie, estableciendo una intención o compartiendo gratitud.',
      category: 'Comunicación y Seguridad',
    },
     {
      id: 'ac-cs-07',
      titulo: 'Celebración',
      descripcion: 'El acto de reconocer y celebrar los éxitos, por pequeños que sean. Fomenta un ambiente positivo y de apoyo.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-09',
      titulo: 'Enfriamiento (Cool-down)',
      descripcion: 'Estiramientos suaves y movimientos relajantes al final de la práctica para ayudar al cuerpo a recuperarse y volver a un estado de calma.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-05',
      titulo: 'Postura de Descanso (Resting Pose)',
      descripcion: 'Una postura simple y estable (como Sofá o Pájaro) a la que se puede volver para descansar, recalibrar y comunicarse entre secuencias más difíciles.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-10',
      titulo: 'Acro Comunitario',
      descripcion: 'El espíritu de colaboración, inclusión y apoyo mutuo que define a la comunidad de Acroyoga.',
      category: 'Comunicación y Seguridad',
    },
    
    // -- Categoría: Principios Fundamentales --
    {
      id: '5',
      titulo: 'Calibración',
      descripcion: 'Proceso de ajuste mutuo al inicio de una postura para encontrar el equilibrio y los puntos de contacto correctos antes de añadir peso completo.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-09',
      titulo: 'Progresiones de Carga',
      descripcion: 'Aumentar gradualmente la cantidad de peso que el volador pone sobre la base, permitiendo que ambos se acostumbren a la carga de forma segura.',
      category: 'Principios Fundamentales',
    },
    {
      id: '1',
      titulo: 'Apilamiento (Stacking)',
      descripcion: 'Técnica fundamental. Alinear las articulaciones (tobillos, rodillas, caderas, hombros) de la base y el volador para crear una estructura ósea estable y eficiente, reduciendo el esfuerzo muscular.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-01',
      titulo: 'Estructura Ósea',
      descripcion: 'Confiar en el esqueleto y el apilamiento de los huesos para soportar el peso, en lugar de la fuerza muscular. Es la clave de la eficiencia y la longevidad en la práctica.',
      category: 'Principios Fundamentales',
    },
    {
      id: '6',
      titulo: 'Línea',
      descripcion: 'Mantener el cuerpo tenso y en una línea (recta o curva) suave y predecible. Esencial para el volador. Se logra activando el core, glúteos y piernas.',
      category: 'Principios Fundamentales',
    },
    {
      id: '7',
      titulo: 'Hollow Body',
      descripcion: 'Una posición corporal con el core activo para crear una ligera curva cóncava, manteniendo el cuerpo tenso y conectado. Es una "línea" fundamental para el volador.',
      category: 'Principios Fundamentales',
    },
    {
      id: '20',
      titulo: 'Core',
      descripcion: 'El centro del cuerpo (abdominales, lumbares, pélvicos). Es la fuente de estabilidad tanto para la base como para el volador.',
      category: 'Principios Fundamentales',
    },
    {
      id: '8',
      titulo: 'Contrapeso (Counterbalance)',
      descripcion: 'Usar el propio peso para equilibrar al compañero. Ambas personas se inclinan lejos la una de la otra, creando una tensión que genera estabilidad.',
      category: 'Principios Fundamentales',
    },
    {
      id: '19',
      titulo: 'Punto de Equilibrio (Balance Point)',
      descripcion: 'El punto donde el peso del volador está perfectamente equilibrado sobre la base, requiriendo un mínimo esfuerzo para mantener la postura.',
      category: 'Principios Fundamentales',
    },
    {
      id: '29',
      titulo: 'Centro de Gravedad',
      descripcion: 'El punto imaginario donde se concentra la masa de un cuerpo. El objetivo es alinear el centro de gravedad combinado del dúo sobre la base de soporte.',
      category: 'Principios Fundamentales',
    },
    {
      id: '30',
      titulo: 'Base de Soporte',
      descripcion: 'El área formada por los puntos de contacto con el suelo. Una base de soporte más amplia ofrece más estabilidad.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-08',
      titulo: 'Punto de Contacto',
      descripcion: 'Cualquier lugar donde los cuerpos de la base y el volador se tocan. La calidad y precisión de estos puntos son cruciales para la estabilidad.',
      category: 'Principios Fundamentales',
    },
    {
      id: '26',
      titulo: 'Compresión',
      descripcion: 'La acción de juntar y apretar el cuerpo, acercando las rodillas al pecho. Aumenta la estabilidad y facilita ciertas transiciones.',
      category: 'Principios Fundamentales',
    },
    {
      id: '27',
      titulo: 'Extensión',
      descripcion: 'La acción de alargar el cuerpo, creando espacio entre las articulaciones. Es lo opuesto a la compresión.',
      category: 'Principios Fundamentales',
    },
    {
      id: '39',
      titulo: 'Pies Flex',
      descripcion: 'Posición del pie donde los dedos se tiran hacia la espinilla. La base a menudo usa pies en flex para crear una plataforma más estable.',
      category: 'Principios Fundamentales',
    },
    {
      id: '40',
      titulo: 'Pies en Punta',
      descripcion: 'Posición del pie donde se extienden los dedos y el empeine. El volador a menudo usa pies en punta para mantener una línea larga y activa.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-03',
      titulo: 'Vector de Fuerza',
      descripcion: 'La dirección en la que se aplica la fuerza. Comprender los vectores ayuda a la base a dirigir y sostener al volador con un esfuerzo mínimo.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-02',
      titulo: 'Tensegridad',
      descripcion: 'Un principio de la arquitectura que se aplica al cuerpo. Es la integridad generada por la tensión balanceada entre músculos y fascias, creando una estructura fuerte pero flexible.',
      category: 'Principios Fundamentales',
    },
     {
      id: '57',
      titulo: 'Apilamiento Inverso (Reverse Stacking)',
      descripcion: 'Principio de alineación para posturas terapéuticas como el Pájaro Inverso. La base usa sus piernas para sostener la espalda del volador, permitiendo que la gravedad abra el pecho del volador de forma segura.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-07',
      titulo: 'Conexión a Tierra (Grounding)',
      descripcion: 'La sensación de estar conectado y estable con el suelo. Es fundamental para la base, pero también para el volador antes y después de volar.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-10',
      titulo: 'Reciprocidad',
      descripcion: 'La idea de que la práctica es un intercambio mutuo. Ambos roles, base y volador, dan y reciben energía, apoyo y confianza.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-11',
      titulo: 'Inteligencia Kinestésica',
      descripcion: 'La capacidad de ser consciente del propio cuerpo en el espacio y en relación con los demás. Se desarrolla intensamente en Acroyoga.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-04',
      titulo: 'Entrenamiento de Resistencia',
      descripcion: 'La capacidad de mantener una postura estática durante un período prolongado, desarrollando fuerza y resistencia mental.',
      category: 'Principios Fundamentales',
    },
     {
      id: '46',
      titulo: 'Respiración (Breath)',
      descripcion: 'La respiración consciente y sincronizada puede calmar el sistema nervioso y mejorar la conexión y el ritmo entre los practicantes.',
      category: 'Principios Fundamentales',
    },
   
    // -- Categoría: Dinámicas y Transiciones --
    {
      id: '44',
      titulo: 'Prerrequisitos',
      descripcion: 'Las habilidades o posturas fundamentales que se recomienda dominar antes de intentar una postura más avanzada.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '45',
      titulo: 'Progresión',
      descripcion: 'Una serie de pasos o posturas más simples que construyen la fuerza, el equilibrio y la confianza necesarios para una postura más compleja.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '12',
      titulo: 'Transición (Transition)',
      descripcion: 'El movimiento o la secuencia de movimientos que conectan una postura estática con otra.',
      category: 'Dinámicas y Transiciones',
    },
     {
      id: '10',
      titulo: 'Tempo',
      descripcion: 'La velocidad y el ritmo con que se ejecutan las transiciones. Un tempo constante y predecible es clave para la fluidez y la seguridad.',
      category: 'Dinámicas y Transiciones',
    },
     {
      id: 'ac-pf-05',
      titulo: 'Equilibrio Estático',
      descripcion: 'Mantener el equilibrio en una postura fija. Requiere microajustes constantes y una comunicación sutil.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-pf-06',
      titulo: 'Equilibrio Dinámico',
      descripcion: 'Mantener el equilibrio mientras se está en movimiento, como durante una transición o una lavadora.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '9',
      titulo: 'Lavadora (Washing Machine)',
      descripcion: 'Una secuencia de posturas que fluyen continuamente una en la otra, formando un ciclo que puede repetirse varias veces sin detenerse.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '36',
      titulo: 'Flow',
      descripcion: 'Una secuencia de movimientos y posturas que se enlazan de forma fluida y creativa, a menudo con música.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '11',
      titulo: 'Pop',
      descripcion: 'Un pequeño salto o impulso dinámico utilizado para transicionar entre posturas, donde el volador pierde brevemente el contacto con la base.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-06',
      titulo: 'Tuck Pop / Pike Pop / Straddle Pop',
      descripcion: 'Tipos de "pops" (saltos) dinámicos que se nombran según la forma que el volador adopta en el aire (recogido, carpado o a horcajadas).',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '58',
      titulo: 'Whip-Pops',
      descripcion: 'Un tipo avanzado de transición dinámica que utiliza un movimiento de "látigo" para generar impulso y rotación. Es común en transiciones que requieren un cambio rápido de dirección, como de lado a lado. Requiere una conexión y tempo precisos.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-01',
      titulo: 'Helicóptero',
      descripcion: 'Una transición donde el volador gira horizontalmente sobre la base, a menudo pasando de Pájaro Frontal a Pájaro Invertido sin perder el contacto.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-05',
      titulo: 'Spin (Giro)',
      descripcion: 'Una rotación del volador sobre un eje vertical, a menudo sostenido por un solo pie o mano de la base.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-09',
      titulo: 'Switch (Cambio)',
      descripcion: 'Cualquier movimiento que implique un cambio de agarre de manos o pies durante una transición.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-02',
      titulo: 'Freefall',
      descripcion: 'Una transición avanzada donde el volador cae controladamente desde una postura alta (como una parada de manos) a una más baja (como pájaro inverso).',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-10',
      titulo: 'Drop (Caída)',
      descripcion: 'Una transición controlada que implica un descenso rápido pero seguro de una postura a otra, a menudo usando la gravedad a favor.',
     },
     {
      id: 'ac-dt-03',
      titulo: 'Relevé',
      descripcion: 'Término de ballet que se usa para describir cuando la base se eleva sobre los omóplatos, levantando la cadera del suelo para dar más altura o rango de movimiento al volador.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '51',
      titulo: 'Ninja Star',
      descripcion: 'Una lavadora (washing machine) avanzada y dinámica que fluye continuamente entre variaciones de Estrella Invertida (Reverse Star) y Estrella Lateral (Side Star).',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '52',
      titulo: 'Ninja Bat',
      descripcion: 'Una entrada dinámica a la postura de Murciélago (Bat), que generalmente implica un pequeño salto o "pop" desde los pies de la base.',
      category: 'Dinámicas y Transiciones',
    },
     {
      id: 'ac-dt-04',
      titulo: 'Cascade',
      descripcion: 'Una secuencia fluida de movimientos que a menudo involucra a más de dos personas, pasándose el volador de una base a otra.',
      category: 'Dinámicas y Transiciones',
    },
   
    // -- Categoría: Roles y Estilos de Práctica --
    {
      id: '2',
      titulo: 'Base',
      descripcion: 'La persona con más puntos de contacto con el suelo, proporcionando la plataforma. Requiere fuerza, estabilidad y sensibilidad.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '3',
      titulo: 'Volador (Flyer)',
      descripcion: 'La persona que es elevada del suelo. Requiere confianza, equilibrio, control del core y comunicación.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '16',
      titulo: 'Solar Acro',
      descripcion: 'La parte acrobática y dinámica de la práctica, que desarrolla fuerza, confianza y habilidad. Se asocia con la energía del Sol, activa y enérgica.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '17',
      titulo: 'Lunar Acro',
      descripcion: 'La parte terapéutica y relajante de la práctica (Vuelo Terapéutico, Masaje Tailandés). Se asocia con la energía de la Luna, calmada y receptiva.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '15',
      titulo: 'Vuelo Terapéutico (Therapeutic Flying)',
      descripcion: 'Rama del Acroyoga enfocada en la relajación y el estiramiento. El volador permanece pasivo, mientras la base lo guía a través de estiramientos y masajes en el aire.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '54',
      titulo: 'Masaje Tailandés',
      descripcion: 'Componente de la práctica lunar del Acroyoga, que implica estiramientos asistidos, acupresión y trabajo de líneas energéticas, realizado en el suelo.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '13',
      titulo: 'L-Basing',
      descripcion: 'Un tipo de Acroyoga donde la base está acostada en el suelo ("L" shape), usando tanto sus manos como sus pies para sostener al volador. Es la forma más común y accesible para empezar.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '14',
      titulo: 'Standing Acro',
      descripcion: 'Una forma más avanzada de Acroyoga donde la base está de pie, sosteniendo al volador. Requiere mucha más fuerza, equilibrio y experiencia.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '53',
      titulo: 'Icarian',
      descripcion: 'Un estilo de acrobacias en pareja donde la base usa solo sus pies para lanzar y hacer girar al volador en el aire, a menudo sin conexión de manos. Es extremadamente dinámico.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-07',
      titulo: 'Pitching',
      descripcion: 'Un estilo de acrobacia en el que una o más personas lanzan a un volador al aire para que realice una habilidad (como un salto mortal) y sea atrapado por un receptor.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '18',
      titulo: 'Agarre (Grip)',
      descripcion: 'El tipo de conexión de manos. Diferentes agarres (ej. muñeca con muñeca, palma con palma) ofrecen diferentes niveles de soporte y control.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '23',
      titulo: 'H2H (Hand-to-Hand)',
      descripcion: 'Acrónimo de "Mano a Mano". Posturas avanzadas donde las manos de la base sostienen las manos del volador en equilibrio.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '24',
      titulo: 'F2H (Foot-to-Hand)',
      descripcion: 'Acrónimo de "Pie a Mano". Posturas donde los pies del volador se equilibran sobre las manos de la base.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '55',
      titulo: 'Postura Estática (Static Pose)',
      descripcion: 'Una postura que se mantiene fija por un período de tiempo, enfocándose en el equilibrio, la alineación y la resistencia.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: '25',
      titulo: 'Inversión',
      descripcion: 'Cualquier postura donde la cabeza del volador está por debajo de su corazón.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: '37',
      titulo: 'Simétrico',
      descripcion: 'Una postura donde la forma y la distribución del peso son iguales en ambos lados del cuerpo.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: '38',
      titulo: 'Asimétrico',
      descripcion: 'Una postura donde la forma y la distribución del peso son diferentes en cada lado, lo que a menudo presenta un mayor desafío para el equilibrio.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: 'ac-rp-05',
      titulo: 'Líneas Limpias (Clean Lines)',
      descripcion: 'Un objetivo estético en la práctica, donde las formas del cuerpo son precisas, las extremidades están extendidas y las posturas se ven nítidas y definidas.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '41',
      titulo: 'Receptor',
      descripcion: 'En el vuelo terapéutico y el masaje, se refiere a la persona que está en un estado pasivo recibiendo los beneficios del estiramiento y la manipulación.',
      category: 'Roles y Estilos de Práctica',
      },
    {
      id: '42',
      titulo: 'Dador',
      descripcion: 'En el vuelo terapéutico y el masaje, se refiere a la persona que está activamente moviendo, estirando y aplicando presión al receptor.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '59',
      titulo: 'Sofá de Vishnu (Vishnu\'s Couch)',
      descripcion: 'Una postura de vuelo terapéutico profundamente relajante. El volador descansa de lado sobre las piernas de la base, permitiendo una suave apertura de la cadera y la caja torácica. Es el epítome del cuidado y la relajación en Acroyoga.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-01',
      titulo: 'Trío',
      descripcion: 'Una práctica con tres personas, que a menudo implica dos bases y un volador, o una base, un volador intermedio y un volador superior.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-06',
      titulo: 'Middler (Volador Intermedio)',
      descripcion: 'En una postura de trío o grupo, es la persona que está siendo sostenida por la base y, al mismo tiempo, sostiene a otro volador encima.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-02',
      titulo: 'Grupo',
      descripcion: 'Acrobacias que involucran a cuatro o más personas, a menudo formando pirámides humanas o patrones complejos.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-03',
      titulo: 'Adagio',
      descripcion: 'Un estilo de acrobacia en pareja que se enfoca en movimientos lentos, controlados y fluidos, a menudo con un componente de danza.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-04',
      titulo: 'Dance Lifts (Portés)',
      descripcion: 'Levantamientos y movimientos acrobáticos inspirados en la danza, que a menudo se realizan en una secuencia coreografiada.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-08',
      titulo: 'Acro Danza',
      descripcion: 'Una fusión de la acrobacia con diferentes estilos de danza, creando una forma de arte expresiva que combina la fuerza con la gracia.',
      category: 'Roles y Estilos de Práctica',
    },
   
    // --- MASAJE TAILANDÉS ---
    
    // -- Subcategoría: Principios Fundamentales y Filosofía --
    {
      id: 'thai-p-01',
      titulo: 'Presencia',
      descripcion: 'La cualidad de estar completamente enfocado y consciente en el momento presente, atento a las necesidades del receptor sin distracciones mentales.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-02',
      titulo: 'Meditación en Movimiento',
      descripcion: 'Un estado mental en el que el dador practica. La mente está enfocada, presente y tranquila, convirtiendo el masaje en una práctica meditativa tanto para el dador como para el receptor.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-03',
      titulo: 'Flow (Fluidez)',
      descripcion: 'La cualidad de una continuidad armónica y sin interrupciones entre las técnicas, permitiendo que la sesión se sienta como un único movimiento largo y meditativo.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-04',
      titulo: 'Grounding (Enraizamiento)',
      descripcion: 'La práctica del dador de mantenerse conectado a la tierra, estable física y energéticamente en cada movimiento para proporcionar un toque seguro y contenido.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-05',
      titulo: 'Balance (Equilibrio)',
      descripcion: 'El principio de trabajar ambos lados del cuerpo del receptor de una manera que se sienta completa y equilibrada, promoviendo la simetría energética y física.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-04',
      titulo: 'No Fuerza (Effortless Effort)',
      descripcion: 'Principio clave donde el dador utiliza su propio peso corporal, la gravedad y la palanca para aplicar presión de manera eficiente y profunda, en lugar de usar fuerza muscular. Esto protege al dador y permite una presión más sostenida y relajada.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-09',
      titulo: 'Respiración Sincronizada',
      descripcion: 'El dador intenta sincronizar su respiración con la del receptor, a menudo aplicando presión durante la exhalación del receptor para profundizar la relajación.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-18',
      titulo: 'Escucha Táctil',
      descripcion: 'La habilidad de "escuchar" con las manos, sintiendo la calidad del tejido, la tensión, el ritmo respiratorio y la respuesta energética del receptor.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-14',
      titulo: 'Autoposicionamiento (Dador)',
      descripcion: 'La importancia de que el dador mantenha uma postura ergonômica e consciente (espalda recta, articulaciones apiladas) para proteger su propio cuerpo y canalizar la energía de manera efectiva.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-28',
      titulo: 'Contraindicaciones',
      descripcion: 'Condiciones o situaciones en las que ciertas técnicas de masaje no deben aplicarse o deben modificarse (ej. lesiones agudas, fiebre, embarazo, osteoporosis).',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-33',
      titulo: 'Integración',
      descripcion: 'El período de quietud al final de la sesión, donde se realizan movimientos suaves o simplemente se permite descansar, para que el cuerpo y la mente integren los beneficios del masaje.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },

    // -- Subcategoría: Contexto Cultural y Ritual --
    {
      id: 'thai-01',
      titulo: 'Nuad Boran',
      descripcion: 'El término tradicional para el Masaje Tailandés, que se traduce como "masaje antiguo". Representa un linaje de sabiduría curativa transmitida a través de generaciones.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-01',
      titulo: 'Jivaka Komarabhacca',
      descripcion: 'Considerado el padre de la medicina tailandesa. Fue el médico personal del Buda y de la comunidad monástica. El Wai Khru a menudo se dirige a él.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-02',
      titulo: 'Wai Khru (Respeto al Maestro)',
      descripcion: 'Un rezo o canto tradicional en Pali que se realiza antes del masaje para mostrar respeto a los maestros del linaje y centrar la intención del dador en la compasión y la curación.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-03',
      titulo: 'Mantras',
      descripcion: 'Cantos o recitaciones sagradas, a menudo en Pali o Sánscrito, que se utilizan al inicio de una sesión para centrar la mente, invocar bendiciones y conectar con el linaje de maestros.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-04',
      titulo: 'Gestos de Mudra',
      descripcion: 'El uso de gestos simbólicos con las manos, especialmente al principio o al final del masaje, como una forma de sellar la intención, mostrar respeto u honrar el espacio sagrado de la práctica.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-05',
      titulo: 'Los 4 Elementos (Dhātu)',
      descripcion: 'Un concepto de la medicina tradicional tailandesa donde la salud es un equilibrio de los cuatro elementos en el cuerpo: Tierra (partes sólidas), Agua (fluidos), Fuego (calor/metabolismo) y Aire (movimiento/respiración).',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-06',
      titulo: 'Ritual de Cierre',
      descripcion: 'Técnicas suaves y conscientes al final de la sesión para "sellar" la energía, ayudar al receptor a regresar suavemente a la plena conciencia y expresar gratitud.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },

    // -- Subcategoría: Anatomía Energética --
    {
      id: 'thai-prana',
      titulo: 'Prana',
      descripcion: 'El concepto de "fuerza vital" o "energía vital" (Lom Pran en tailandés) que fluye a través del cuerpo. El objetivo del masaje es equilibrar el flujo de Prana.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-31',
      titulo: 'Vayus (Vientos Energéticos)',
      descripcion: 'Los "vientos" o corrientes de energía vital (Prana) que gobiernan diferentes funciones fisiológicas. El masaje tailandés busca equilibrar el flujo de estos Vayus.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-11',
      titulo: 'Hara',
      descripcion: 'El centro energético y físico del cuerpo, ubicado en el abdomen, aproximadamente tres dedos por debajo del ombligo. Considerado el origen de la energía vital.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-ae-01',
      titulo: 'Puntos de Acupresión (Marma Points)',
      descripcion: 'Puntos específicos en las líneas Sen donde la energía puede estancarse o concentrarse. La aplicación de presión en estos puntos puede liberar bloqueos.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-ae-02',
      titulo: 'Puntos de Puerta de Viento',
      descripcion: 'Puntos de acupresión importantes, a menudo ubicados en las articulaciones, que se consideran "puertas" donde el viento (Lom o Prana) puede quedar atrapado, causando dolor o rigidez.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },

    // -- Subcategoría: Las 10 Líneas Sen Principales --
    {
      id: 'thai-03',
      titulo: 'Sen Sib (Líneas de Energía)',
      descripcion: 'Las diez líneas de energía principales (similares a los Nadis del yoga) que recorren el cuerpo por donde fluye el Prana. El masaje se centra en desbloquear estas líneas. Se dice que en total existen más de 72,000 líneas Sen.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-01',
      titulo: '1. Sen Sumana',
      descripcion: 'La línea central. Comienza dos pulgadas por encima del ombligo, sube por el centro del torso hasta el esternón, recorre el cuello y termina en la punta de la lengua. Gobierna el habla y el gusto.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-02',
      titulo: '2. Sen Ittha (Izquierda) y 3. Sen Pingkhala (Derecha)',
      descripcion: 'Similares a Ida y Pingala en yoga. Ittha (lunar) comienza en la fosa nasal izquierda, recorre el lado izquierdo de la cabeza, cuello y espalda, y baja por la pierna izquierda. Pingkhala (solar) hace lo mismo en el lado derecho. Gobiernan la energía, la respiración y los sentidos.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-03',
      titulo: '4. Sen Kalathari',
      descripcion: 'Controla la circulación de la energía en los brazos, las manos y los dedos. Comienza cerca del ombligo y se ramifica hacia arriba, pasando por el pecho, los hombros y bajando por el interior de los brazos hasta los dedos. También baja por las piernas.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-04',
      titulo: '5. Sen Sahatsarangsi (Ojos) y 6. Sen Thawari (Ojos)',
      descripcion: 'Estas dos líneas controlan la energía en los ojos. Sahatsarangsi (izquierda) y Thawari (derecha) comienzan cerca del ombligo, suben por el torso y la cara hasta terminar en los ojos. Trabajar estas líneas puede aliviar dolores de cabeza y tensión ocular.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-05',
      titulo: '7. Sen Lawusang (Oídos) y 8. Sen Ulangka (Oídos)',
      descripcion: 'Controlan la energía en los oídos. Lawusang (izquierda) y Ulangka (derecha) también comienzan cerca del ombligo y ascienden por el costado del cuerpo y el cuello hasta los oídos. Están asociadas con la audición y el equilibrio.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-06',
      titulo: '9. Sen Nanthakrawat',
      descripcion: 'Gobierna la eliminación. Comienza cerca del ombligo, desciende hasta la vejiga y los órganos excretores, y luego sube por la espalda hasta el cuello. También conocido como Sen Sikhini.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-07',
      titulo: '10. Sen Khitchanna',
      descripcion: 'Gobierna los órganos reproductivos. Comienza cerca del ombligo, desciende a la zona genital y luego sube por el interior de las piernas. También conocido como Sen Sukhumang.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },


    // -- Subcategoría: Técnicas de Aplicación de Presión --
    {
      id: 'thai-palming',
      titulo: 'Palming (Presión Palmar)',
      descripcion: 'Una de las técnicas más básicas y versátiles. Se aplica presión con toda la palma de la mano para calentar los tejidos, trabajar áreas amplias (espalda, piernas, pies, glúteos) y evaluar la tensión general del cuerpo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-06',
      titulo: 'Thumb Pressing (Presión con Pulgar)',
      descripcion: 'Técnica para aplicar presión más específica y profunda en puntos a lo largo de las líneas Sen, utilizando la yema del pulgar. Requiere cuidado para no sobrecargar la articulación del dador.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-17',
      titulo: 'Foot Pressing (Presión con Pie)',
      descripcion: 'El dador utiliza sus pies para aplicar una presión amplia y fuerte sobre el receptor, especialmente en las piernas y la espalda. Permite un gran uso del peso corporal.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-tap-01',
      titulo: 'Knee Pressing (Presión con Rodilla)',
      descripcion: 'El dador utiliza su rodilla para aplicar una presión amplia y sostenida, a menudo en los isquiotibiales o la espalda del receptor, mientras tiene las manos libres para otras técnicas.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-16',
      titulo: 'Elbow Pressing (Presión con Codo)',
      descripcion: 'Una técnica para aplicar una presión muy profunda y específica en áreas densas como los glúteos o la espalda, utilizando la punta del codo. Permite ahorrar energía al dador.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-tap-05',
      titulo: 'Static Pressure (Presión Estática)',
      descripcion: 'Mantener una presión constante y sostenida en un punto de acupresión durante varias respiraciones para permitir que el tejido se relaje y libere profundamente.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-tap-04',
      titulo: 'Leverage (Uso de Palanca)',
      descripcion: 'El uso inteligente del propio cuerpo (brazos, piernas) como palancas para aplicar presión o facilitar un estiramiento con un mínimo esfuerzo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },

    // -- Subcategoría: Técnicas de Movimiento y Estiramiento --
    {
      id: 'thai-07',
      titulo: 'Estiramientos Asistidos',
      descripcion: 'Una característica distintiva del Masaje Tailandés, a menudo llamado "yoga para perezosos". El dador guía suavemente al receptor a través de estiramientos pasivos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-12',
      titulo: 'Movilización Articular',
      descripcion: 'Técnicas suaves de rotación y movimiento para mejorar la movilidad y lubricar las articulaciones (tobillos, muñecas, caderas, hombros).',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-13',
      titulo: 'Tracción',
      descripcion: 'La acción de tirar suavemente de una extremidad o la columna para crear espacio en las articulaciones y descomprimir los tejidos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-27',
      titulo: 'Rocking (Mecer)',
      descripcion: 'Un movimiento rítmico de mecer el cuerpo del receptor para calmar el sistema nervioso, inducir una relajación profunda y liberar la tensión superficial.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-tms-01',
      titulo: 'Shaking (Sacudir)',
      descripcion: 'Una técnica vigorizante en la que se sacuden suavemente las extremidades para liberar la tensión estancada y estimular el flujo de energía.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-01',
      titulo: 'Percusión (Tapotement)',
      descripcion: 'Golpes rítmicos y ligeros con las manos ahuecadas o los puños sueltos para estimular los músculos y la energía, a menudo al final de una sección de trabajo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-02',
      titulo: 'Apertura de la palma',
      descripcion: 'Una serie de estiramientos y presiones específicas aplicadas a la palma, los dedos y la muñeca para liberar la tensión del uso repetitivo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-03',
      titulo: 'Estiramiento de los dedos del pie',
      descripcion: 'Movimientos de flexión, extensión y rotación de cada dedo del pie para liberar la tensión y estimular las terminaciones de las líneas Sen.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-04',
      titulo: 'Balanceo de piernas',
      descripcion: 'Una técnica de movimiento pasivo en la que el dador balancea suavemente las piernas del receptor de lado a lado para relajar las caderas y la zona lumbar.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-05',
      titulo: 'Tracción de brazo en cruz',
      descripcion: 'Con el receptor en supino, se lleva un brazo cruzado sobre el pecho para estirar el deltoides posterior y los músculos alrededor del omóplato.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-06',
      titulo: 'Doble estiramiento de isquiotibiales',
      descripcion: 'El dador levanta ambas piernas del receptor juntas para un estiramiento simétrico y profundo de la parte posterior de las piernas y la espalda baja.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-07',
      titulo: 'Estiramiento del cuádriceps prono',
      descripcion: 'Con el receptor boca abajo, el dador dobla la rodilla y lleva el talón hacia el glúteo para estirar la parte frontal del muslo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-08',
      titulo: 'Apertura de cadera con pierna de loto',
      descripcion: 'Una técnica avanzada en la que se guía la pierna del receptor a una posición de medio loto para una apertura profunda de la cadera.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-09',
      titulo: 'Flexión lateral del cuello',
      descripcion: 'Un estiramiento suave en el que el dador inclina la cabeza del receptor hacia un hombro mientras estabiliza el hombro opuesto.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-10',
      titulo: 'Rotación del torso sentado',
      descripcion: 'El dador guía al receptor en una torsión espinal mientras está sentado, utilizando las piernas como anclaje.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-11',
      titulo: 'Elevación de hombros sentado',
      descripcion: 'El dador se coloca detrás del receptor sentado y levanta suavemente los hombros hacia las orejas y luego los libera para aliviar la tensión del trapecio.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-12',
      titulo: 'Estiramiento de la ingle en supino',
      descripcion: 'Con una pierna estirada, la otra se abre hacia un lado (en abducción) para estirar la cara interna del muslo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-13',
      titulo: 'Rastrillar (Raking)',
      descripcion: 'Técnica en la que se usan los dedos juntos y ligeramente curvados para "rastrillar" o peinar los músculos, a menudo a lo largo de la espalda o las piernas.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-14',
      titulo: 'Estiramiento de la fascia plantar',
      descripcion: 'Aplicar presión y estiramiento a lo largo de la planta del pie, desde el talón hasta los dedos, para aliviar la fascitis plantar y la tensión general.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-15',
      titulo: 'Circunducción de cadera',
      descripcion: 'El dador sostiene una pierna del receptor y la mueve en círculos grandes y lentos para lubricar y liberar la articulación de la cadera.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-16',
      titulo: 'Deslizamiento del antebrazo',
      descripcion: 'Uso del antebrazo para aplicar una presión amplia y deslizante a lo largo de grandes grupos musculares como los cuádriceps, isquiotibiales o la espalda.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-17',
      titulo: 'Plegado de la hoja (Leaf Fold)',
      descripcion: 'Con el receptor sentado, el dador lo guía en una flexión hacia adelante sobre las piernas, aplicando una suave presión en la espalda.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-18',
      titulo: 'Estiramiento del Gato (Cat Stretch)',
      descripcion: 'En posición de cuatro apoyos, el dador aplica presión en la espalda del receptor mientras este arquea y redondea la columna, similar a la postura gato-vaca del yoga.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-19',
      titulo: 'Tracción de la columna vertebral prono',
      descripcion: 'Mientras el receptor está boca abajo, el dador tira suavemente de los tobillos para crear una ligera descompresión en la columna lumbar.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-20',
      titulo: 'Estiramiento del Pectoral en la pared (Asistido)',
      descripcion: 'El dador utiliza una pared o su propio cuerpo para estabilizar el brazo del receptor y facilitar un estiramiento profundo del pectoral.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-21',
      titulo: 'Masaje en los músculos intercostales',
      descripcion: 'Con el receptor de lado, se aplica una presión suave y cuidadosa entre las costillas para liberar la tensión respiratoria.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-22',
      titulo: 'Estiramiento del Piriforme en posición supina',
      descripcion: 'Una variación de la apertura de cadera en "4", enfocada específicamente en estirar el músculo piriforme, a menudo implicado en la ciática.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-23',
      titulo: 'Movilización del omóplato',
      descripcion: 'Técnicas para levantar y mover suavemente el omóplato, liberándolo de la caja torácica para mejorar la movilidad del hombro.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-24',
      titulo: 'Torsión con las piernas de águila',
      descripcion: 'Con el receptor en supino, se cruzan las piernas en la postura del águila (Garudasana) y luego se lleva a una torsión para intensificar el estiramiento en la cadera y la banda IT.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-25',
      titulo: 'Estiramiento de la pantorrilla y el tendón de Aquiles',
      descripcion: 'Aplicar presión con el pie flexionado del receptor para estirar los músculos de la pantorrilla (gastrocnemio y sóleo) y el tendón de Aquiles.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-26',
      titulo: 'Masaje del cuero cabelludo',
      descripcion: 'Técnicas de presión y masaje circular en todo el cuero cabelludo para liberar la tensión mental, a menudo realizadas al final de la sesión.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-27',
      titulo: 'Presión en el punto de la vesícula biliar 21',
      descripcion: 'Una presión específica en la parte superior del músculo trapecio, conocida por aliviar la tensión del cuello y los hombros y los dolores de cabeza.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-28',
      titulo: 'Apertura de la línea del brazo interior',
      descripcion: 'Estirar el brazo del receptor y aplicar presión con el pulgar a lo largo de la cara interna del brazo, desde la axila hasta la muñeca, para trabajar las líneas Sen del corazón y el pulmón.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-29',
      titulo: 'Pisotón en los isquiotibiales',
      descripcion: 'Con el receptor en prono, el dador utiliza su pie para aplicar una presión amplia y profunda sobre los isquiotibiales.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-30',
      titulo: 'Flexión hacia adelante con bloqueo de rodillas',
      descripcion: 'En posición sentada, el dador coloca sus pies contra la espalda baja del receptor y tira de sus manos para facilitar una flexión hacia adelante profunda y segura.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-31',
      titulo: 'Estiramiento de la mariposa reclinada',
      descripcion: 'Una versión pasiva de Baddha Konasana donde el receptor está tumbado y el dador aplica una suave presión en los muslos internos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-24',
      titulo: 'Bloqueo (Lock)',
      descripcion: 'El uso de las piernas o los brazos del dador para estabilizar una parte del cuerpo del receptor, permitiendo un estiramiento más profundo y específico en otra parte.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-23',
      titulo: 'Elevaciones Terapéuticas',
      descripcion: 'Técnicas donde el dador levanta una parte significativa del cuerpo del receptor para aplicar tracción profunda, como en la "Elevación de Caderas".',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-22',
      titulo: 'Transiciones Dinámicas',
      descripcion: 'Mover al receptor de una posición a otra de manera fluida y consciente, como parte de una danza terapéutica.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-tms-02',
      titulo: 'Blood Stop (Parada de Sangre)',
      descripcion: 'Una técnica avanzada en la que se aplica presión a una arteria principal (generalmente la femoral o la braquial) durante un corto período de tiempo y luego se libera, creando una oleada de sangre fresca y energía en la extremidad.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-tms-03',
      titulo: 'Twisting (Torsión)',
      descripcion: 'Técnicas que aplican una torsión suave a la columna vertebral o a las caderas para liberar la tensión, mejorar la flexibilidad espinal y estimular los órganos internos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },

    // -- Subcategoría: Posiciones del Receptor --
    {
      id: 'thai-10',
      titulo: 'Posición Supina',
      descripcion: 'El receptor está acostado boca arriba. Es la posición más común y permite trabajar la parte frontal del cuerpo, las piernas y los brazos.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-20',
      titulo: 'Posición Lateral',
      descripcion: 'El receptor está acostado de lado. Permite un excelente acceso a las caderas, los hombros, la espalda y la banda iliotibial.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-19',
      titulo: 'Posición Prona',
      descripcion: 'El receptor está acostado boca abajo. Esta posición es ideal para trabajar la espalda, los glúteos y la parte posterior de las piernas.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-pr-01',
      titulo: 'Posición Sentada',
      descripcion: 'El receptor está sentado, a menudo con las piernas cruzadas. Es la posición tradicional para trabajar el cuello, los hombros, la cabeza y la cara.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-pr-02',
      titulo: 'Secuencia (Sequence)',
      descripcion: 'Una serie predefinida de movimientos y técnicas que se aplican en una de las posiciones. Un masaje completo fluye a través de secuencias en las cuatro posiciones.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    
    // -- Subcategoría: Los Cuatro Estados Sublimes (Bhavana) --
     {
      id: 'thai-bhavana-intro',
      titulo: 'Los Cuatro Estados Sublimes (Bhavana)',
      descripcion: 'Son cuatro cualidades mentales virtuosas y el ideal de la práctica budista theravada. En el contexto del Masaje Tailandés, cultivar estos estados convierte la técnica en una práctica espiritual profunda. Se cultivan en orden: Metta es la base de Karuna y Mudita, y Upekkha es la culminación de los tres.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-metta-reordered', // Renamed id to avoid conflict
      titulo: '1. Metta (Amor Benevolente)',
      descripcion: 'El primer estado sublime. La intención incondicional de desear la felicidad y el bienestar a todos los seres. En el masaje, es el acto de tocar con una intención de cuidado puro y benevolencia, y es la base de los demás estados.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-karuna',
      titulo: '2. Karuna (Compasión)',
      descripcion: 'El segundo estado sublime. El deseo activo de aliviar el sufrimiento de los demás. Nace de Metta cuando se encuentra con el dolor.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-mudita',
      titulo: '3. Mudita (Alegría Empática)',
      descripcion: 'El tercer estado sublime. La capacidad de sentir alegría por la felicidad y la fortuna de los demás, sin envidia ni comparación. Es el antídoto contra los celos.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-upekkha',
      titulo: '4. Upekkha (Ecuanimidad)',
      descripcion: 'El cuarto estado sublime. La capacidad de mantener la calma, la imparcialidad y la estabilidad mental ante las fluctuaciones de la vida. Es aceptar la realidad tal como es, sin apego ni aversión.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },

    // -- Subcategoría: Herramientas y Entorno --
    {
      id: 'thai-he-01',
      titulo: 'Futón de Masaje',
      descripcion: 'La superficie tradicional para el masaje tailandés. Es un colchón firme pero cómodo en el suelo, que permite al dador usar su peso corporal y moverse libremente alrededor del receptor.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-02',
      titulo: 'Ropa Cómoda',
      descripcion: 'A diferencia de otros masajes, el masaje tailandés se realiza con ropa. Tanto el dador como el receptor deben usar ropa suelta y cómoda que permita el movimiento y el estiramiento.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-05',
      titulo: 'Espacio Sagrado',
      descripcion: 'Crear un entorno tranquilo, limpio y respetuoso que invite a la relajación y la confianza. Esto puede incluir música suave, iluminación tenue y una temperatura agradable.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-03',
      titulo: 'Compresas Herbales (Luk Pra Kob)',
      descripcion: 'Bolsas de tela llenas de una mezcla de hierbas aromáticas y medicinales que se calientan al vapor y se aplican sobre el cuerpo para aliviar el dolor, la inflamación y relajar los músculos.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-04',
      titulo: 'Herramientas de Madera',
      descripcion: 'En algunas variantes, se utilizan pequeñas herramientas de madera para aplicar presión muy precisa en puntos de los pies o las manos (Reflexología Tailandesa).',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-25',
      titulo: 'Wuotai',
      descripcion: 'Un estilo derivado del masaje tailandés y la osteopatía, que introduce movimientos circulares, en espiral y ondulatorios, enfocándose en la fascia y la fluidez. Es como una danza terapéutica.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },

    // --- YOGA ---

    // -- Subcategoría: Filosofía y Conceptos Clave --
    {
      id: 'yoga-01',
      titulo: 'Yoga',
      descripcion: 'Del sánscrito "yuj", que significa "unión". Es una disciplina física, mental y espiritual originaria de la India. Busca la unión del cuerpo, la mente y el espíritu, y en última instancia, la unión de la conciencia individual con la conciencia universal.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-hinduism-buddhism',
        titulo: 'Hinduismo y Budismo: Orígenes Compartidos',
        descripcion: 'El Yoga tiene sus raíces en las tradiciones védicas del Hinduismo, mientras que el Masaje Tailandés está profundamente influenciado por el Budismo. Ambas tradiciones nacieron en la India y comparten conceptos fundamentales como Karma, Dharma, Samsara (el ciclo de renacimiento) y la importancia de la meditación y la liberación del sufrimiento. La principal diferencia filosófica radica en el concepto del "Ser": el Hinduismo postula la existencia de un alma eterna e individual (Atman), mientras que el Budismo enseña la doctrina del "no-ser" (Anatta). Esta conexión/distinción enriquece la práctica, viendo el Yoga como un camino hacia la unión con el Ser y el Masaje Tailandés como una práctica de compasión (Karuna) y amor benevolente (Metta) hacia todos los seres.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-shiva',
        titulo: 'Shiva (El Adi Yogi)',
        descripcion: 'En la mitología hindú, Shiva es una de las deidades principales, conocido como "el destructor" de la ignorancia y el ego. En el contexto del yoga, es venerado como el Adi Yogi, el primer yogui y el primer gurú. Representa la conciencia pura (Purusha), el principio masculino, inmutable y trascendente. En textos como el Shiva Samhita, Él transmite la sabiduría del yoga a Parvati.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-shakti-parvati',
        titulo: 'Shakti/Parvati (Energía Divina Femenina)',
        descripcion: 'Shakti es la energía cósmica, dinámica y creativa que anima el universo. Es el principio femenino (Prakriti), la contraparte de la conciencia pura (Shiva). Parvati es una de las manifestaciones más conocidas de Shakti, la consorte de Shiva. La unión de Shiva y Shakti simboliza la meta del yoga: la integración de la conciencia y la energía, lo estático y lo dinámico, para alcanzar la totalidad y la iluminación.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-05',
      titulo: 'Yoga Sutras de Patanjali',
      descripcion: 'Un texto fundamental del yoga, compuesto por 196 aforismos o "sutras" que describen el camino del yoga a través de los ocho miembros (Ashtanga).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-shiva-samhita',
        titulo: 'Shiva Samhita',
        descripcion: 'Un texto clásico y antiguo de yoga, presentado como un diálogo entre el dios Shiva y su consorte Parvati. Detalla el conocimiento y las prácticas del yoga, incluyendo la importancia de la purificación de los nadis a través del pranayama.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-52',
      titulo: 'Advaita Vedanta',
      descripcion: 'Una de las escuelas filosóficas más influyentes del hinduismo, que postula la no-dualidad: la identidad esencial del Ser individual (Atman) y la Realidad Última (Brahman).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-46',
      titulo: 'Atman',
      descripcion: 'El "Ser" individual o el alma; la esencia divina, inmutable y eterna de una persona.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-47',
      titulo: 'Brahman',
      descripcion: 'La realidad última o la conciencia universal; el principio divino que lo impregna todo en el universo. La unión de Atman con Brahman es el objetivo del yoga.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-54',
      titulo: 'Satchitananda',
      descripcion: 'Un término sánscrito que describe la naturaleza de la realidad última (Brahman): Sat (ser, existencia), Chit (consciencia) y Ananda (dicha, felicidad absoluta).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-02',
      titulo: 'Dharma',
      descripcion: 'A menudo traducido como "deber", "propósito" o "ley cósmica". Se refiere al camino correcto o al propósito de vida de un individuo, en armonía con el orden universal.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-03',
      titulo: 'Karma',
      descripcion: 'La ley de causa y efecto. Cada acción, palabra y pensamiento genera una consecuencia que moldea el futuro del individuo. No es un castigo, sino un principio de equilibrio.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-10',
      titulo: 'Maya',
      descripcion: 'La ilusión cósmica; la percepción del mundo material como la única realidad, velando la verdadera naturaleza del Ser (Atman).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-55',
      titulo: 'Purusha',
      descripcion: 'En la filosofía Samkhya (base del yoga), Purusha es la conciencia pura, el espectador inmutable y eterno.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-56',
      titulo: 'Prakriti',
      descripcion: 'La contraparte de Purusha. Es la naturaleza primordial, la materia, la fuente de todo el mundo fenoménico y sus cualidades (las Gunas).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-09',
      titulo: 'Las Gunas (Sattva, Rajas, Tamas)',
      descripcion: 'Las tres cualidades o energías fundamentales de la naturaleza (Prakriti): Sattva (pureza, equilibrio), Rajas (actividad, pasión) y Tamas (inercia, oscuridad).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-06',
      titulo: 'Gurú',
      descripcion: 'Un maestro espiritual que guía al estudiante en el camino del yoga, disipando la oscuridad de la ignorancia (de "gu", oscuridad, y "ru", el que la disipa).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },

    // -- Subcategoría: El Ciclo de Samsara y la Liberación --
    {
        id: 'yoga-samsara-intro',
        titulo: 'Samsara',
        descripcion: `El ciclo de nacimiento, muerte y renacimiento, caracterizado por el sufrimiento (Dukkha), que se perpetúa por el Karma generado a partir de la Ignorancia (Avidya). El objetivo del yoga es la liberación (Moksha) de este ciclo.

**Diagrama del Ciclo:**

      ┌─────────────────┐
      │  Ignorancia (Avidya)  │
      └─────────┬─────────┘
                │ (Causa)
                ▼
      ┌─────────────────┐
      │   Acciones (Karma)  │
      └─────────┬─────────┘
                │ (Generan)
                ▼
┌───►  Ciclo de Renacimiento (Samsara)  ◄───┐
│     └─────────┬─────────┘             │
│               │ (Resulta en)            │
│               ▼                       │
│     ┌─────────────────┐             │
│     │ Sufrimiento (Dukkha)│             │
└─────└─────────────────┘─────────────┘
          (Perpetúa la Ignorancia)

**El Camino a la Liberación (Moksha):**

      ┌──────────────────┐
      │   Práctica (Abhyasa) │
      └─────────┬──────────┘
                │
                ▼
      ┌──────────────────┐
      │ Desapego (Vairagya) │
      └─────────┬──────────┘
                │ (Conducen a)
                ▼
      ┌──────────────────┐
      │   Liberación (Moksha)  │
      └──────────────────┘`,
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-avidya',
        titulo: 'Avidya (Ignorancia)',
        descripcion: 'La ignorancia metafísica, la raíz del sufrimiento. Es la incapacidad de ver la realidad tal como es, confundiendo lo impermanente con lo permanente y el no-ser con el verdadero Ser (Atman). Es la causa principal que nos mantiene atrapados en el ciclo de Samsara.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-53',
        titulo: 'Dukkha (Sufrimiento)',
        descripcion: 'Un concepto central en el budismo y el yoga que se refiere al sufrimiento, la insatisfacción o el estrés inherente a la vida no examinada, surgido de la ignorancia y el apego.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-51',
        titulo: 'Abhyasa (Práctica)',
        descripcion: 'La práctica persistente, disciplinada y dedicada a lo largo del tiempo. Es el esfuerzo consciente para alcanzar y mantener un estado de calma mental. Es uno de los dos pilares para la liberación.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-50',
        titulo: 'Vairagya (Desapego)',
        descripcion: 'El desapego o la no-adherencia a los deseos, los resultados de las acciones y los objetos materiales. Es la capacidad de permanecer ecuánime. Es el segundo pilar para la liberación.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-08',
        titulo: 'Moksha (Liberación)',
        descripcion: 'La liberación final del ciclo de Samsara. Es el estado de emancipación, autorrealización e iluminación, alcanzado a través de la sabiduría que erradica la ignorancia (Avidya). Es el objetivo último del yoga.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    
    // -- Subcategoría: Términos Comunes --
    {
      id: 'yoga-34',
      titulo: 'Namaste',
      descripcion: 'Un saludo tradicional que significa "lo divino en mí se inclina ante lo divino en ti". A menudo se dice al principio o al final de la clase.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-35',
      titulo: 'Om (Aum)',
      descripcion: 'Se considera el sonido primordial del universo. Cantarlo al principio o al final de la práctica simboliza la conexión con todo lo que existe.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-36',
      titulo: 'Mantra',
      descripcion: 'Una palabra, sonido o frase sagrada que se repite para enfocar la mente durante la meditación.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-37',
      titulo: 'Mudra',
      descripcion: 'Un gesto simbólico o "sello" realizado con las manos y los dedos. Cada mudra tiene un propósito específico para canalizar la energía.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-38',
      titulo: 'Sánscrito',
      descripcion: 'La antigua lengua litúrgica de la India, en la que se escribieron los textos clásicos del yoga. Los nombres de las posturas suelen estar en sánscrito.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-pali-lang',
      titulo: 'Pali',
      descripcion: 'Una lengua prácrita o vernácula de la India antigua, estrechamente relacionada con el sánscrito. Es el idioma litúrgico del budismo Theravada, y muchos términos del Masaje Tailandés, como "Metta", provienen de él.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-39',
      titulo: 'Shanti',
      descripcion: 'Significa "paz" en sánscrito. A menudo se canta tres veces al final de una práctica ("Om shanti, shanti, shanti") para invocar la paz en el cuerpo, la palabra y la mente.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-40',
      titulo: 'Yogui / Yoguini',
      descripcion: 'Un practicante masculino (yogui) o femenino (yoguini) de yoga.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-41',
      titulo: 'Drishti',
      descripcion: 'Un punto de enfoque para la mirada durante la práctica de asanas. Ayuda a mejorar la concentración y el equilibrio.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-66',
      titulo: 'Asana',
      descripcion: 'Término sánscrito para una postura física de yoga. Aunque es solo uno de los 8 miembros, es el aspecto más conocido del yoga en Occidente.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-42',
      titulo: 'Savasana (Postura del Cadáver)',
      descripcion: 'La postura de relajación final. El practicante se tumba boca arriba en quietud total para integrar los beneficios de la práctica.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-67',
      titulo: 'Props (Soportes)',
      descripcion: 'Accesorios utilizados para ayudar en la práctica de asanas, como bloques, cinturones, mantas y bolsters. Son fundamentales en estilos como Iyengar y Restaurativo.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },

    // -- Subcategoría: Tipos de Yoga --
    {
      id: 'yoga-26',
      titulo: 'Hatha Yoga',
      descripcion: 'A menudo se usa como un término general para el yoga físico. Tradicionalmente, se refiere a un sistema que equilibra las energías opuestas (Ha-sol, Tha-luna). Generalmente son clases de ritmo más lento, enfocadas en la alineación.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-27',
      titulo: 'Vinyasa Yoga',
      descripcion: 'Un estilo dinámico donde las posturas (asanas) se enlazan fluidamente con la respiración (pranayama), creando una secuencia continua de movimientos.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-28',
      titulo: 'Ashtanga Yoga',
      descripcion: 'Un sistema riguroso y físicamente exigente. Aunque su nombre se inspira en los "ocho miembros" de Patanjali, el término se refiere al método de Vinyasa fundado por K. Pattabhi Jois, que sigue una serie de posturas predefinidas y progresivas.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-29',
      titulo: 'Iyengar Yoga',
      descripcion: 'Un estilo que enfatiza la precisión y la alineación detallada en cada postura. Utiliza props (soportes) como bloques, cinturones y mantas para ayudar a los estudiantes a lograr la postura correcta.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-30',
      titulo: 'Bikram Yoga',
      descripcion: 'Una serie fija de 26 posturas y 2 ejercicios de respiración, practicada en una habitación calentada a unos 40°C. Fundado por Bikram Choudhury.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-31',
      titulo: 'Kundalini Yoga',
      descripcion: 'Un estilo que se enfoca en despertar la energía Kundalini a través de kriyas (conjuntos de posturas), pranayama, mantras y meditación.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-32',
      titulo: 'Yin Yoga',
      descripcion: 'Un estilo lento y meditativo donde las posturas se mantienen durante largos períodos (varios minutos) para trabajar los tejidos conectivos profundos (fascia, ligamentos).',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-33',
      titulo: 'Yoga Restaurativo',
      descripcion: 'Una práctica suave y terapéutica que utiliza props para sostener el cuerpo completamente, permitiendo una relajación profunda y la sanación del sistema nervioso.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-64',
      titulo: 'Anusara Yoga',
      descripcion: 'Un estilo moderno de Hatha Yoga que enfatiza los "Principios Universales de Alineación" y una filosofía tántrica que celebra el corazón y la bondad intrínseca.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-65',
      titulo: 'Jivamukti Yoga',
      descripcion: 'Un estilo de Vinyasa que integra enseñanzas espirituales, canto, meditación, lecturas y música, junto con un enfoque en el veganismo y el activismo.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },

    // -- Subcategoría: Los 8 Miembros del Yoga (Ashtanga) --
    {
      id: 'yoga-11',
      titulo: 'Los 8 Miembros del Yoga (Ashtanga)',
      descripcion: 'El marco filosófico del yoga clásico, descrito por Patanjali en los Yoga Sutras. "Ashtanga" significa literalmente "ocho miembros" y es la base del Raja Yoga. No debe confundirse con el estilo de yoga físico del mismo nombre fundado por K. Pattabhi Jois.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-ahimsa',
      titulo: '1. Yama: Ahimsa (No Violencia)',
      descripcion: 'El principio de "no dañar", tanto en acción, palabra como pensamiento, hacia uno mismo y hacia todos los seres vivos.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-satya',
      titulo: '1. Yama: Satya (Veracidad)',
      descripcion: 'La honestidad y la verdad en pensamiento, palabra y obra. Comunicarse de manera auténtica y sin intención de engañar.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-asteya',
      titulo: '1. Yama: Asteya (No Robar)',
      descripcion: 'No tomar lo que no nos ha sido dado libremente, incluyendo propiedades, tiempo, ideas o energía de otros.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-brahmacharya',
      titulo: '1. Yama: Brahmacharya (Continencia)',
      descripcion: 'Originalmente interpretado como celibato, modernamente se entiende como el uso responsable y consciente de nuestra energía, especialmente la sexual.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-aparigraha',
      titulo: '1. Yama: Aparigraha (No Codicia)',
      descripcion: 'La ausencia de avaricia y la capacidad de tomar solo lo que es necesario, sin acumular posesiones o aferrarse a ellas.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
     {
      id: 'yoga-niyama-saucha',
      titulo: '2. Niyama: Saucha (Limpieza)',
      descripcion: 'La pureza y limpieza del cuerpo (externa) y de la mente (interna), incluyendo pensamientos y emociones.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-santosha',
      titulo: '2. Niyama: Santosha (Contento)',
      descripcion: 'Cultivar la satisfacción y la aceptación de lo que tenemos y de nuestra situación actual, sin anhelar constantemente más.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-tapas',
      titulo: '2. Niyama: Tapas (Disciplina)',
      descripcion: 'La autodisciplina, el esfuerzo ardiente o la austeridad que "quema" las impurezas y fortalece la voluntad.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-svadhyaya',
      titulo: '2. Niyama: Svadhyaya (Autoestudio)',
      descripcion: 'El estudio de los textos sagrados y, más importante, el estudio de uno mismo, la auto-observación y la introspección.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-ishvara',
      titulo: '2. Niyama: Ishvara Pranidhana (Entrega)',
      descripcion: 'La entrega o rendición a una fuerza superior, a lo divino o al universo. Es un acto de confianza y de soltar el ego.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-13',
      titulo: '3. Asana (Postura)',
      descripcion: 'Las posturas físicas del yoga. Originalmente, se refería a una "postura sentada firme y cómoda" para la meditación.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-14',
      titulo: '4. Pranayama (Control de la Respiración)',
      descripcion: 'El control y la expansión de la fuerza vital (Prana) a través de técnicas de respiración.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-15',
      titulo: '5. Pratyahara (Retiro de los Sentidos)',
      descripcion: 'La abstracción o el retiro de los sentidos del mundo exterior para dirigir la atención hacia el interior.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-16',
      titulo: '6. Dharana (Concentración)',
      descripcion: 'La práctica de enfocar la mente en un solo punto u objeto, sin distracción.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-17',
      titulo: '7. Dhyana (Meditación)',
      descripcion: 'Un estado de flujo ininterrumpido de concentración, donde el meditador se vuelve uno con el objeto de meditación.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-18',
      titulo: '8. Samadhi (Iluminación)',
      descripcion: 'El estado de éxtasis donde la conciencia individual se fusiona con la conciencia universal. El objetivo final del camino yóguico.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    
    // -- Subcategoría: Pranayama y Energía Sutil --
    {
      id: 'yoga-19',
      titulo: 'Prana',
      descripcion: 'La fuerza vital o energía universal que fluye a través de todos los seres vivos. Es el foco del Pranayama.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-21',
      titulo: 'Nadis',
      descripcion: `Los Nadis son una red de canales de energía sutil que atraviesan el cuerpo, a través de los cuales fluye el Prana (fuerza vital). La palabra sánscrita "nadi" significa "río" o "canal". No son nervios físicos, sino vías energéticas. El objetivo es purificarlos y equilibrarlos para permitir el libre flujo de energía. Los tres nadis principales son:
- **Ida:** El canal izquierdo, asociado con la energía lunar (fría, femenina, pasiva).
- **Pingala:** El canal derecho, asociado con la energía solar (caliente, masculina, activa).
- **Sushumna:** El canal central que recorre la columna vertebral. Cuando Ida y Pingala están en equilibrio, el Prana puede entrar en Sushumna, permitiendo la ascensión de la energía Kundalini y el crecimiento espiritual.`,
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-22',
      titulo: 'Kundalini',
      descripcion: 'Una forma poderosa de energía divina latente, a menudo representada como una serpiente enroscada en la base de la columna (Muladhara Chakra). El yoga busca despertarla.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-23',
      titulo: 'Bandhas (Cierres Energéticos)',
      descripcion: 'Cierres o "llaves" energéticas en el cuerpo que se utilizan para contener y dirigir el Prana. Los tres principales son Mula, Uddiyana y Jalandhara Bandha.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-24',
      titulo: 'Ujjayi Pranayama',
      descripcion: 'La "respiración victoriosa" o "respiración oceánica". Se realiza contrayendo ligeramente la parte posterior de la garganta, creando un sonido suave similar al de las olas del mar.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-25',
      titulo: 'Nadi Shodhana',
      descripcion: 'La "respiración de fosas nasales alternas". Una técnica de pranayama para equilibrar los hemisferios cerebrales y calmar el sistema nervioso.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-57',
      titulo: 'Kumbhaka (Retención de la Respiración)',
      descripcion: 'La retención de la respiración, ya sea después de la inhalación (Antara Kumbhaka) o después de la exhalación (Bahya Kumbhaka). Es una parte clave del pranayama.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    
    // -- Subcategoría: Los 7 Chakras --
    {
      id: 'yoga-chakra-intro',
      titulo: 'Chakras (Ruedas de Energía)',
      simbolo: 'Aperture',
      descripcion: 'Centros de energía sutil en el cuerpo que actúan como vórtices de Prana. Los siete chakras principales se alinean a lo largo de la columna vertebral, desde la base hasta la coronilla, y cada uno se asocia con diferentes aspectos físicos, emocionales y espirituales.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-1',
      titulo: '1. Muladhara (Chakra Raíz)',
      color: '0 84.2% 60.2%',
      simbolo: 'Anchor',
      descripcion: 'Ubicación: Base de la columna. Elemento: Tierra. Bija Mantra: LAM. Símbolo: Loto de cuatro pétalos. Significado: Supervivencia, seguridad, estabilidad, instintos básicos. Rige nuestra conexión con el mundo material y nuestras necesidades fundamentales.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-2',
      titulo: '2. Svadhisthana (Chakra Sacro)',
      color: '30 76% 47%',
      simbolo: 'Dna',
      descripcion: 'Ubicación: Abdomen bajo. Elemento: Agua. Bija Mantra: VAM. Símbolo: Loto de seis pétalos. Significado: Emociones, creatividad, sexualidad, placer y fluidez. Es el centro de nuestra capacidad para sentir y crear.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-3',
      titulo: '3. Manipura (Chakra del Plexo Solar)',
      color: '43 74% 66%',
      simbolo: 'Zap',
      descripcion: 'Ubicación: Plexo solar. Elemento: Fuego. Bija Mantra: RAM. Símbolo: Loto de diez pétalos. Significado: Poder personal, autoestima, voluntad, transformación y metabolismo. Es el motor de nuestra identidad y acción en el mundo.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-4',
      titulo: '4. Anahata (Chakra del Corazón)',
      color: '142.1 76.2% 36.3%',
      simbolo: 'Heart',
      descripcion: 'Ubicación: Centro del pecho. Elemento: Aire. Bija Mantra: YAM. Símbolo: Loto de doce pétalos con dos triángulos entrelazados. Significado: Amor, compasión, relaciones, perdón, conexión. Es el puente entre los chakras inferiores (físicos) y superiores (espirituales).',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-5',
      titulo: '5. Vishuddha (Chakra de la Garganta)',
      color: '205.1 100% 50%',
      simbolo: 'MessageCircle',
      descripcion: 'Ubicación: Garganta. Elemento: Éter/Espacio. Bija Mantra: HAM. Símbolo: Loto de dieciséis pétalos. Significado: Comunicación, expresión, verdad, autenticidad. Rige nuestra capacidad de expresar nuestra verdad interior.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-6',
      titulo: '6. Ajna (Chakra del Tercer Ojo)',
      color: '243.8 59% 40%',
      simbolo: 'Brain',
      descripcion: 'Ubicación: Entre las cejas. Elemento: Luz. Bija Mantra: OM. Símbolo: Loto de dos pétalos. Significado: Intuición, percepción, sabiduría, imaginación. Es el centro de nuestra visión más allá de lo material.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-7',
      titulo: '7. Sahasrara (Chakra de la Corona)',
      color: '272.1 79.1% 56.1%',
      simbolo: 'Crown',
      descripcion: 'Ubicación: Coronilla. Elemento: Pensamiento/Consciencia. Bija Mantra: Silencio. Símbolo: Loto de mil pétalos. Significado: Conexión con lo divino, espiritualidad, iluminación, conciencia pura. Es nuestra puerta a la trascendencia.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },

    // -- Subcategoría: Técnicas y Enfoques --
    {
      id: 'yoga-60',
      titulo: 'Bhakti Yoga (Yoga de la Devoción)',
      descripcion: 'Uno de los cuatro caminos principales del yoga. Se centra en la devoción, el amor incondicional y la entrega a lo divino a través de la oración, el canto y el ritual.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-61',
      titulo: 'Jnana Yoga (Yoga del Conocimiento)',
      descripcion: 'El camino del conocimiento y la sabiduría. Utiliza el intelecto y la introspección para discernir entre lo real (Atman) y lo irreal (Maya).',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-62',
      titulo: 'Karma Yoga (Yoga de la Acción)',
      descripcion: 'El camino de la acción desinteresada. Se practica realizando las propias tareas y deberes sin apego al resultado, como una ofrenda.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-63',
      titulo: 'Raja Yoga (Yoga Real)',
      descripcion: 'El "camino real" o el "yoga del control mental", a menudo asociado con el sistema de ocho miembros de Patanjali, que culmina en la meditación y el Samadhi.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-48',
      titulo: 'Kriya',
      descripcion: 'En Kundalini Yoga, una kriya es un conjunto específico de posturas, respiración, mantras y mudras diseñados para lograr un resultado específico.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-49',
      titulo: 'Japa',
      descripcion: 'La práctica meditativa de repetir un mantra, a menudo usando un "mala" (un rosario de 108 cuentas) para contar las repeticiones.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-58',
      titulo: 'Trataka (Fijación de la Mirada)',
      descripcion: 'Una práctica de meditación que implica fijar la mirada en un solo punto, como la llama de una vela, para calmar la mente y mejorar la concentración.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-59',
      titulo: 'Yoga Nidra (Sueño Yóguico)',
      descripcion: 'Una práctica de meditación guiada que induce a un estado de relajación profunda, similar al sueño, pero manteniendo la conciencia. Muy restaurativo.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-112',
      titulo: 'Parivrtta Trikonasana (Postura del Triángulo Invertido)',
      descripcion: 'Una torsión de pie intensa que mejora el equilibrio, fortalece las piernas y estira la columna y las caderas.'
    },
    {
      id: 'yoga-113',
      titulo: 'Parivrtta Parsvakonasana (Postura del Ángulo Lateral Invertido)',
      descripcion: 'Una torsión profunda que desintoxica los órganos, fortalece las piernas y mejora la digestión.'
    },
    {
      id: 'yoga-114',
      titulo: 'Utthita Hasta Padangusthasana (Postura de la Mano al Dedo Gordo del Pie)',
      descripcion: 'Una postura de equilibrio que estira intensamente los isquiotibiales y fortalece las piernas y los tobillos.'
    },
    {
      id: 'yoga-115',
      titulo: 'Astavakrasana (Postura de los Ocho Ángulos)',
      descripcion: 'Un equilibrio sobre los brazos avanzado que requiere fuerza, flexibilidad y concentración.'
    },
    {
      id: 'yoga-116',
      titulo: 'Eka Pada Koundinyasana I (Postura del Sabio Koundinya I)',
      descripcion: 'Un equilibrio sobre brazos con torsión que fortalece la parte superior del cuerpo y el core.'
    },
    {
      id: 'yoga-117',
      titulo: 'Eka Pada Koundinyasana II (Postura del Sabio Koundinya II)',
      descripcion: 'Una variación del equilibrio sobre brazos que se asemeja a una "split" voladora. Requiere una gran apertura de cadera.'
    },
    {
      id: 'yoga-118',
      titulo: 'Tittibhasana (Postura de la Luciérnaga)',
      descripcion: 'Un equilibrio sobre brazos que requiere una compresión profunda y fuerza en los isquiotibiales y el core.'
    },
    {
      id: 'yoga-119',
      titulo: 'Krounchasana (Postura de la Garza)',
      descripcion: 'Un estiramiento sentado intenso para el isquiotibial.'
    },
    {
      id: 'yoga-120',
      titulo: 'Marichyasana I (Postura dedicada al Sabio Marichi I)',
      descripcion: 'Una flexión hacia adelante con un enlace que abre los hombros y estira la espalda.'
    },
    {
      id: 'yoga-121',
      titulo: 'Marichyasana III (Postura dedicada al Sabio Marichi III)',
      descripcion: 'Una torsión profunda que flexibiliza la columna y masajea los órganos abdominales.'
    },
    {
      id: 'yoga-122',
      titulo: 'Salabhasana (Postura del Saltamontes)',
      descripcion: 'Fortalece toda la parte posterior del cuerpo, incluyendo la espalda, los glúteos y los isquiotibiales.'
    },
    {
      id: 'yoga-123',
      titulo: 'Purvottanasana (Postura de la Plancha Invertida)',
      descripcion: 'Fortalece los brazos, muñecas y piernas, y estira la parte frontal del cuerpo. Es una contrapostura para las flexiones hacia adelante.'
    },
    {
      id: 'yoga-124',
      titulo: 'Anjaneyasana (Postura de la Luna Creciente)',
      descripcion: 'Una zancada baja que abre profundamente los flexores de la cadera y el psoas.'
    },
    {
      id: 'yoga-125',
      titulo: 'Skandasana (Postura del Dios de la Guerra)',
      descripcion: 'Una zancada lateral profunda que abre las caderas y la ingle y estira los isquiotibiales.'
    },
    {
      id: 'yoga-126',
      titulo: 'Padmasana (Postura del Loto)',
      descripcion: 'La postura de meditación arquetípica. Requiere una gran apertura de caderas y rodillas. Fomenta la calma y la concentración.'
    }
];

export async function getConcepts(): Promise<Concept[]> {
  return Promise.resolve(allConceptsData);
}

const allAsanasData: Asana[] = [
    { id: 'tadasana', nombre_sans: 'Tadasana', nombre_es: 'Postura de la Montaña', descripcion: 'Postura fundamental de pie que mejora la postura y fortalece muslos, rodillas y tobillos.' },
    { id: 'adho_mukha_svanasana', nombre_sans: 'Adho Mukha Svanasana', nombre_es: 'Perro Boca Abajo', descripcion: 'Estira todo el cuerpo, especialmente los isquiotibiales, las pantorrillas, los hombros y la columna. Calma la mente y energiza el cuerpo.' },
    { id: 'virabhadrasana_i', nombre_sans: 'Virabhadrasana I', nombre_es: 'Guerrero I', descripcion: 'Fortalece los hombros, brazos, piernas, tobillos y espalda. Abre el pecho y las caderas.' },
    { id: 'virabhadrasana_ii', nombre_sans: 'Virabhadrasana II', nombre_es: 'Guerrero II', descripcion: 'Fortalece y estira las piernas y los tobillos. Estira la ingle, el pecho y los hombros.' },
    { id: 'trikonasana', nombre_sans: 'Trikonasana', nombre_es: 'Postura del Triángulo', descripcion: 'Estira y fortalece los muslos, rodillas y tobillos. Estira las caderas, ingle, isquiotibiales, pantorrillas, hombros, pecho y columna.' },
    { id: 'vrksasana', nombre_sans: 'Vrksasana', nombre_es: 'Postura del Árbol', descripcion: 'Mejora el equilibrio y la concentración. Fortalece los tobillos, las pantorrillas, los muslos y la columna vertebral.' },
    { id: 'balasana', nombre_sans: 'Balasana', nombre_es: 'Postura del Niño', descripcion: 'Postura de descanso que estira suavemente las caderas, muslos y tobillos. Calma la mente y alivia el estrés y la fatiga.' },
    { id: 'setu_bandhasana', nombre_sans: 'Setu Bandhasana', nombre_es: 'Postura del Puente', descripcion: 'Estira el pecho, el cuello y la columna. Calma el cerebro y ayuda a aliviar el estrés y la depresión leve.' },
    { id: 'bhujangasana', nombre_sans: 'Bhujangasana', nombre_es: 'Postura de la Cobra', descripcion: 'Aumenta la flexibilidad de la columna, fortalece los músculos de la espalda y estira el pecho, los hombros y el abdomen.' },
    { id: 'savasana', nombre_sans: 'Savasana', nombre_es: 'Postura del Cadáver', descripcion: 'Postura de relajación final. Calma la mente, reduce el estrés y la presión arterial, y ayuda a relajar el cuerpo.' }
];

export async function getAsanas(): Promise<Asana[]> {
  return Promise.resolve(allAsanasData);
}





    



