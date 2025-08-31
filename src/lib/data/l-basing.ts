import type { Pose } from '@/types';

export const lBasingPoses: Pose[] = [
  // L-BASING: NIVEL 1
  {
    id: '25',
    nombre: 'Sofá\n(Couch)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    url_video: 'https://www.youtube.com/watch?v=NTFFY2wm77o',
    url_imagen: 'https://c8.alamy.com/comp/2AGWPJP/fit-young-couple-doing-acro-yoga-at-spa-retreat-on-sea-beach-active-woman-balancing-on-partner-feet-stretching-at-acroyoga-pose-healthy-lifestyle-2AGWPJP.jpg',
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
    nombre: 'Plancha Frontal sobre Espinillas\n(Front Plank on Shins)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['25'],
    url_video: 'https://www.youtube.com/watch?v=O2Fsx4aDX1s',
    url_imagen: 'https://cdn.yogajournal.com/wp-content/uploads/2014/09/acro-yoga-plank-on-plank-pose-1.jpg',
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
    nombre: 'Pez sobre Espinillas\n(Fish on Shins)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['15'],
    url_video: 'https://www.youtube.com/watch?v=6F9sRYTD0xU',
    url_imagen: 'https://www.blueosa.com/wp-content/uploads/2021/07/Seated-Forward-Fold-Fish-Pose-partner-yoga-pose.jpg',
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
    nombre: 'Parada de Hombros sobre Espinillas\n(Shoulderstand on Shins)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['15'],
    url_video: 'https://www.youtube.com/watch?v=usu93tTl1HQ',
    url_imagen: 'https://camillamia.com/wp-content/uploads/2020/03/shoulderstand-4-500x498.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=eWu3BxMF1Bg',
    url_imagen: 'https://camillamia.com/wp-content/uploads/2020/03/bird-4-500x498.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=Mz_P0UzoBbk',
    url_imagen: 'https://as1.ftcdn.net/jpg/03/11/95/34/1000_F_311953402_6BL5VWn0JzKsxf5Ojp1BtDFB8aa8sZAp.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=LQacjmL6c1w',
    url_imagen: 'https://theyogatique.com/wp-content/uploads/2023/05/front-bird-acro-yoga-pose-1024x769.jpg',
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
    nombre: 'Plegaria Invertida\n(Folded Leaf)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    url_video: 'https://www.youtube.com/watch?v=Zc-D_1htX6I',
    url_imagen: 'https://www.fitsri.com/wp-content/uploads/2021/11/Folded-Leaf-Pose-Acro-Yoga--1024x683.jpg',
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
    nombre: 'Pájaro Inverso\n(Back Bird)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['1', '3', 'fish-on-shins'],
    url_video: 'https://www.youtube.com/watch?v=qa5iG6k3W0s',
    url_imagen: 'https://camillamia.com/wp-content/uploads/2020/03/backbird-44.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=4WMAZ67brUc',
    url_imagen: 'https://cdn.yogajournal.com/wp-content/uploads/2015/03/acro-high-flying-whale.jpg',
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
    nombre: 'Parada de Hombros sobre Pies\n(Shoulderstand on Feet)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['1', 'shoulderstand-on-shins'],
    url_video: 'https://www.youtube.com/watch?v=usu93tTl1HQ',
    url_imagen: 'https://camillamia.com/wp-content/uploads/2020/03/shoulderstand-5-500x498.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=bmktYLuksek',
    url_imagen: 'https://hydratewithcore.com/wp-content/uploads/2020/06/forblog3-1030x687_large.jpg',
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
    nombre: 'Pájaro Inverso Acrobático\n(Acro Back Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['5', '17'],
    url_video: 'https://www.youtube.com/watch?v=ks-4IzTcNSk',
    url_imagen: 'https://camillamia.com/wp-content/uploads/2020/03/backbird-3-500x498.jpg',
    descripcion: 'La versión acrobática del Pájaro Inverso. El volador mantiene una línea corporal activa y arqueada, sin agarre de manos.',
    narrativa_detallada: `
**Inicio:**
1.  Entra en un **Pájaro Inverso** o **Ballena** con un agarre de manos seguro.
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
    id: '7',
    nombre: 'Trono a Horcajadas\n(Straddle Throne)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['2'],
    url_video: 'https://www.youtube.com/watch?v=BqUpzbc2uxM',
    url_imagen: 'https://media.gettyimages.com/id/636545410/photo/acroyoga-straddle-throne-pose.jpg?s=1024x1024&w=gi&k=20&c=UJ6kNCAV7waoiyQcSY56plEWtTOF60BA-iyxtaret4A=',
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
    url_video: 'https://www.youtube.com/watch?v=PZ0oq-SHHnE&t=5s',
    url_imagen: 'https://media.istockphoto.com/id/636653962/photo/acroyoga-straddle-bat-pose.jpg?s=612x612&w=0&k=20&c=LrM6So0Emv9PiWKIMoy-otGjoLB40vQr51GNTx01tBA=',
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
    url_video: 'https://www.youtube.com/watch?v=PZ0oq-SHHnE',
    url_imagen: 'https://media.gettyimages.com/id/638748394/photo/acroyoga-straddle-bat-pose.jpg?s=1024x1024&w=gi&k=20&c=fLN0ma6PYMoQk01ES4skjyaOeephBWvXEuZvz2nAqXk=',
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
    url_video: 'https://www.youtube.com/watch?v=HHw8B129doU',
    url_imagen: 'https://as2.ftcdn.net/jpg/02/09/95/21/1000_F_209952154_Z70YdOc791roBDUpRbE2iRCvQv73mWMB.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=WjMLoXNkQyE',
    url_imagen: 'https://i.ytimg.com/vi/T81646R4btk/maxresdefault.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=1EAMunmlcWE',
    url_imagen: 'https://www.thehealthjournals.com/wp-content/uploads/2017/02/2017_Feb_Fitness-1024x768.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=ALaWGbiCIZA',
    url_imagen: 'https://i.ytimg.com/vi/ALaWGbiCIZA/maxresdefault.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=ydOM4EbhJz0',
    url_imagen: 'https://i.ytimg.com/vi/6HngmitsKuQ/hqdefault.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=PwoWLI9XlG8',
    url_imagen: 'https://hydratewithcore.com/wp-content/uploads/2020/06/forblog3-1030x687_large.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=vccFNDI6y74',
    url_imagen: 'https://i.ytimg.com/vi/yS3NANY2CpI/maxresdefault.jpg',
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
    nombre: 'Inversión: Plancha sobre Manos\n(Free Bird)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['1', '15'],
    url_video: 'https://www.youtube.com/watch?v=LQacjmL6c1w',
    url_imagen: 'https://hydratewithcore.com/wp-content/uploads/2020/06/forblog1-1030x687_large.jpg',
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
    nombre: 'Inversión: Parada de Manos sobre Pies\n(Handstand on Feet)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['shoulderstand', '21', 'cartwheel-exit'],
    url_video: 'https://www.youtube.com/watch?v=z3xsHfUFXH8',
    url_imagen: 'https://as1.ftcdn.net/jpg/03/11/30/08/1000_F_311300878_uUrWjkC20Y6WxlPIs6cr1kbGoLRKgPXR.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=IKFZ6KMWZNo',
    url_imagen: 'https://i.pinimg.com/736x/53/c2/f4/53c2f4533fc8fb7456bc510cc3de59cb.jpg',
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
    url_video: 'https://www.youtube.com/watch?v=Fj3cW9ycttY',
    url_imagen: 'https://media.istockphoto.com/id/638748450/photo/acroyoga-foot-to-hand-pose.jpg?s=1024x1024&w=is&k=20&c=_u-Oms3cNs5i3wzJz-9IUo8xNwRIS4ssv-EYFORa18Y=',
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
    nombre: 'Inversión: Parada de Manos sobre Manos\n(H2H)',
    nivel: 3,
    type: 'L-Basing',
    prerequisites: ['14', 'croc'],
    url_video: 'https://www.youtube.com/watch?v=uqryFIDRwSA',
    url_imagen: 'https://i.ytimg.com/vi/x4IYQUewUoQ/maxresdefault.jpg',
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
    nombre: 'Lavadora: Alrededor del Mundo\n(Around the World)',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['1', '2', '3', '5'],
    url_video: 'https://www.youtube.com/watch?v=IUZeQcMRupk',
    url_imagen: 'https://www.fitsri.com/wp-content/uploads/2021/11/acro-yoga-class-1024x683.jpg',
    descripcion: 'Una de las primeras lavadoras que se aprenden, conectando Pájaro Frontal, Plegaria Invertida y Pájaro Invertido en un flujo circular.',
    narrativa_detallada: `
**Secuencia:**
1.  **Inicio:** Empieza en **Pájaro Frontal (Front Bird)**, con manos conectadas.
2.  **Transición a Plegaria Invertida:** La base dobla las rodillas, el volador se pliega hacia adelante hasta que sus manos tocan el suelo y la base mueve los pies a las caderas para **Plegaria Invertida (Folded Leaf)**.
3.  **Transición a Pájaro Invertido:** Desde Plegaria Invertida, el volador se endereza, la base mueve los pies a la espalda alta para **Pájaro Inverso (Back Bird)**.
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
    url_video: 'https://www.youtube.com/watch?v=Hi4xS9E-rck',
    url_imagen: 'https://i.ytimg.com/vi/W9oA6iLEeMs/maxresdefault.jpg',
    descripcion: 'Un flujo clásico que conecta Pájaro Frontal, Pájaro Invertido y Trono a Horcajadas, pasando por el suelo.',
    narrativa_detallada: `
**Secuencia:**
1.  **Inicio:** En **Pájaro Frontal (Front Bird)**, sin manos. El volador salta hacia atrás.
2.  **Paso 2:** Base y volador giran. Entran en **Pájaro Inverso Acrobático (Acro Back Bird)**.
3.  **Paso 3:** Desde Pájaro Inverso, el volador se desliza hacia abajo para sentarse en **Trono a Horcajadas (Straddle Throne)**.
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
    prerequisites: ['2', '5', '7', '12'],
    url_video: 'https://www.youtube.com/watch?v=76m0AXh_Q5Y',
    url_imagen: 'http://basaho.com/cdn/shop/articles/Acro_yoga_1.1_1200x1200.jpg?v=1708350035',
    descripcion: 'Una lavadora clásica que implica una rotación completa del volador alrededor de las piernas de la base.',
    narrativa_detallada: `
**Inicio:**
Trono a Horcajadas (Straddle Throne): El volador se estabiliza sentado sobre los pies de la base, piernas abiertas, manos conectadas para mantener control y comunicación.

**Desarrollo (La Lavadora):**
Entrada al giro: El volador se inclina hacia un lado. La base baja la pierna de ese lado y sube la otra, guiando la cadera del volador hacia la rotación.
Transición a Pájaro Inverso Terapéutico (Back Bird): El volador se extiende hacia atrás, apoyado en las piernas de la base. Aquí se abre el pecho y se alinea la cadera con las piernas de la base.
Paso por Estrella Lateral (Side Star): Con control de manos y empuje de la pierna activa, la base rota al volador lateralmente. El volador mantiene tensión en el core y brazos para controlar la torsión. Este momento crea el efecto de “sacacorchos”.
Transición a Trono (Throne): Desde Side Star, el volador se recoge (tuck) y se coloca nuevamente sentado en los pies de la base.

**Regreso:**
Vuelta a Trono a Horcajadas (Straddle Throne): Desde Trono, el volador abre piernas para volver al inicio y reiniciar la lavadora. El ciclo puede repetirse en fluidez.

**Notas de calibración:**
Volador: mantener core activo, mirada acompañando la rotación y brazos conectados con la base.
Base: trabajar con extensión controlada de piernas, sostener con firmeza desde los pies y marcar tiempos con respiración.
Clave: el paso por Side Star asegura la continuidad circular del movimiento, evitando que se vuelva solo un vaivén de Trono ↔ Back Bird.
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
    nombre: 'Lavadora: High Barrel Roll\n(High Barrel Roll)',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['1', 'back-bird-acro', 'side-bird'],
    url_video: 'https://www.youtube.com/watch?v=cepXBQyMbQI',
    url_imagen: 'https://daman.co.id/_next/image?url=https%3A%2F%2Fbackend.daman.co.id%2Fwp-content%2Fuploads%2F2018%2F07%2FFitness-0607.jpg&w=1920&q=75',
    descripcion: 'Una lavadora rotacional donde el volador "rueda" sobre el torso de la base, pasando por Pájaro Frontal y Pájaro Invertido.',
    narrativa_detallada: `
**Esta lavadora enseña un control de equilibrio lateral exquisito.**

**Inicio:**
1.  Comienza en **Pájaro Frontal (Front Bird)**, manos conectadas.

**Desarrollo (La Lavadora):**
2.  **El Rollo:** El volador se inclina hacia un lado, por ejemplo, el izquierdo. La base baja su pierna izquierda y sube su pierna derecha, creando una "rampa".
3.  **Transición:** El volador, manteniendo su cuerpo como una unidad sólida, rueda sobre el torso de la base, pasando por una posición similar a **Pájaro Lateral (Side Bird)**.
4.  **Recepción:** El volador completa el giro y aterriza suavemente en **Pájaro Inverso Acrobático (Acro Back Bird)**, con los pies de la base ahora en su espalda.
5.  **Regreso:** El movimiento se puede revertir para volver a **Pájaro Frontal**, completando el "barrel roll".

**Culminación:**
*   Se detiene en Pájaro Frontal o Pájaro Inverso y se desmonta de forma segura. La clave es la fluidez y una conexión de manos constante.`,
    musculos: {
      base: ["Core", "Control de piernas", "Fuerza de brazos"],
      volador: ["Core", "Oblicuos", "Conciencia espacial"],
    },
    calibracion: {
      base: ["Guía la rotación con las piernas y los brazos.", "Mantén un movimiento fluido y constante.", "Sé una plataforma estable para el rollo."],
      volador: ["Mantén el cuerpo como un bloque sólido y recto.", "No intentes 'ayudar' en el giro, déjate guiar por la base.", "Mantén la conexión de manos."],
      observador: ["Muévete con la rotación.", "Asegura que el volador no se deslice del torso de la base y vigila la cabeza."],
    },
  },
  {
    id: '13',
    nombre: "Lavadora: Rueda de Catalina\n(Catherine's Wheel)",
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['corkscrew', '16'],
    url_video: 'https://www.youtube.com/watch?v=UyqkvT_5Z8c',
    url_imagen: 'https://i.ytimg.com/vi/8h2ZYO5_sYw/maxresdefault.jpg',
    descripcion: 'Una lavadora (washing machine) o transición fluida donde el volador gira alrededor de la base como una rueda.',
     narrativa_detallada: `
**Esta es una secuencia dinámica (**Lavadora (Washing Machine)**), no una postura estática. Comienza en **Trono a Horcajadas (Straddle Throne)** y transita por **Murciélago (Bat)** y **Trono Invertido (Reverse Throne)**.

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
    nombre: 'Lavadora: Tick-Tock\n(Tick-Tock)',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['9', '18'],
    url_video: 'https://www.youtube.com/watch?v=zen2HDxr3-Y',
    url_imagen: 'https://skillwell-upload-production.s3.amazonaws.com/videos/247/catherines-wheel-machine.png',
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
    nombre: 'Lavadora: Ninja Star\n(Ninja Star)',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['tick-tock', 'cartwheel-exit'],
    url_video: 'https://www.youtube.com/watch?v=PmP5OegaDKk',
    url_imagen: 'https://i.ytimg.com/vi/koJAiJX30_w/maxresdefault.jpg',
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
    nombre: 'Lavadora: Ninja Star Inversa\n(Ninja Star Reverse)',
    nivel: 4,
    type: 'L-Basing',
    prerequisites: ['22'],
    url_video: 'https://www.youtube.com/watch?v=PmP5OegaDKk',
    url_imagen: 'https://i.ytimg.com/vi/6cuD9azJ3DI/sddefault.jpg',
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
];
