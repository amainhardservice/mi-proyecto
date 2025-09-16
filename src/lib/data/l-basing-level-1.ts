
import type { Pose } from '@/types';

export const lBasingLevel1Poses: Pose[] = [
  {
    id: 'lb-15',
    nombre: 'Plancha sobre Espinillas\n(Plank on Shins)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    url_video: 'https://www.youtube.com/watch?v=O2Fsx4aDX1s',
    url_imagen: 'https://cdn.yogajournal.com/wp-content/uploads/2014/09/acro-yoga-plank-on-plank-pose-1.jpg',
    tags: ['Estática', 'Fundamental'],
    descripcion: 'El volador se equilibra en plancha sobre las espinillas de la base. Enseña la línea corporal y la activación del core.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate boca arriba, levanta las piernas y dobla las rodillas para que tus espinillas estén paralelas al suelo, creando una plataforma estable, como en **pose:th-sofa**.
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
    id: 'lb-jedi-plank',
    nombre: 'Plancha Jedi / Plancha Caja\n(Jedi Plank / Jedi Box)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    url_imagen: 'https://i.ibb.co/xqCYNz7K/Jedi-Plank.jpg',
    gallery_images: ['https://i.ibb.co/mr8dfBKK/JediBox1.jpg'],
    tags: ['Estática', 'Fundamental'],
    descripcion: 'Un ejercicio de acondicionamiento fundamental para dos personas que enseña la activación del core, la línea y la confianza mutua en una estructura apilada.',
    narrativa_detallada: `
**Esta postura tiene dos variaciones principales: la Caja (Box), ideal para empezar, y la Plancha Jedi (Jedi Plank), que es más avanzada.**

**Variación 1: Plancha Caja (Jedi Box)**
*En esta versión, el volador mantiene los pies en el suelo, creando una forma de caja.*
1.  **Base:** Colócate en una posición de plancha fuerte, con las manos directamente debajo de los hombros.
2.  **Volador:** De pie, colócate a horcajadas sobre la base. Pon tus manos en los tobillos de la base.
3.  **Volador:** Camina con tus pies hacia atrás hasta que tu cuerpo esté en una posición de plancha, manteniendo las manos en los tobillos de la base. El resultado es una estructura de caja fuerte.

**Variación 2: Plancha Jedi (Jedi Plank)**
*Esta es la versión apilada completa.*
1.  **Base:** Comienza en una posición de plancha muy sólida.
2.  **Volador:** Realiza la **Plancha Caja** primero. Una vez estables, el volador levantará un pie y lo colocará con cuidado en el hombro de la base. Luego, el otro pie en el otro hombro.
3.  **Base:** Activa todo tu cuerpo. Eres la fundación. Mantén la espalda recta y el core apretado para soportar el peso.
4.  **Volador:** Tu trabajo es ser lo más ligero y tenso posible. Mantén una **Línea** perfecta. No dejes que tus caderas caigan.

**Culminación:**
*   Para salir, reviertan el proceso. El volador baja un pie, luego el otro, volviendo a la **Plancha Caja**, y finalmente se pone de pie. La comunicación es esencial para una salida segura.`,
    musculos: {
      base: ["Core", "Hombros", "Pecho", "Serrato anterior"],
      volador: ["Core", "Hombros", "Conciencia corporal"],
    },
    calibracion: {
      base: ["Sé una roca. No te muevas.", "Mantén el core apretado para proteger tu espalda baja.", "Respira."],
      volador: ["Sé una pluma. Mantén una línea recta y tensa.", "Coloca tus pies suavemente, no los dejes caer.", "Comunica cuándo vas a subir y bajar."],
      observador: ["Vigila la espalda baja de la base.", "Ayuda al volador a colocar los pies si es necesario.", "Asegura una comunicación clara para la salida."],
    },
  },
  {
    id: 'lb-foot-to-shin',
    nombre: 'Pies sobre Espinillas\n(Foot to Shin)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['lb-15'],
    url_video: 'https://www.youtube.com/watch?v=6F9sRYTD0xU',
    url_imagen: 'https://i.ytimg.com/vi/6F9sRYTD0xU/maxresdefault.jpg',
    tags: ['Estática', 'Fundamental', 'Equilibrio'],
    descripcion: 'Una postura de equilibrio fundamental donde el volador se para sobre las espinillas de la base. Enseña confianza, alineación y conexión.',
    narrativa_detallada: `
**Inicio:**
1. **Base:** Comienza en la misma plataforma de **pose:lb-15**, con las espinillas paralelas al suelo y las manos listas para ayudar.
2. **Volador:** Párate frente a la base, de cara a ella. Coloca tus manos en las manos de la base.
3. **Volador:** Pisa con un pie en una espinilla de la base, cerca de la rodilla. Transfiere algo de peso y luego sube el otro pie a la otra espinilla.
4. **Base:** Mantén las piernas fuertes y el core activo. Usa tus manos para estabilizar al volador mientras encuentra su equilibrio.

**Desarrollo:**
* **Base:** Sé una plataforma sólida como una roca. La estabilidad es clave. Tus manos ofrecen un punto de anclaje y comunicación.
* **Volador:** Encuentra tu equilibrio. Mantén el core activo, la espalda recta y la mirada fija en los ojos de la base. Una vez estables, pueden intentar soltar una o ambas manos.

**Culminación:**
1. **Base y Volador:** Vuelvan a conectar las manos si las soltaron.
2. **Volador:** Baja un pie y luego el otro de forma controlada, con la ayuda de la base.
`,
    musculos: {
      base: ["Core", "Cuádriceps", "Estabilizadores de cadera"],
      volador: ["Core", "Piernas", "Equilibrio", "Concentración"],
    },
    calibracion: {
      base: ["Mantén las espinillas completamente paralelas al suelo.", "Usa el agarre de manos para hacer microajustes.", "Comunica constantemente."],
      volador: ["Sube y baja lentamente.", "Usa el core para controlar el equilibrio.", "Confía en la base y mantén el contacto visual."],
      observador: ["Permanece cerca para ofrecer un punto de apoyo.", "Ayuda a guiar al volador para que encuentre su centro."],
    },
  },
  {
    id: 'lb-shoulderstand-on-shins',
    nombre: 'Parada de Hombros sobre Espinillas\n(Shoulderstand on Shins)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['lb-15'],
    url_video: 'https://www.youtube.com/watch?v=kT4KNu4sDC8',
    gallery_videos: ['https://www.youtube.com/watch?v=usu93tTl1HQ'],
    url_imagen: 'https://i.ibb.co/bk0GRwj/img068.png',
    gallery_images: ['https://camillamia.com/wp-content/uploads/2020/03/shoulderstand-4-500x498.jpg'],
    tags: ['Equilibrio', 'Inversión sobre Hombros'],
    descripcion: 'Una inversión segura sobre las espinillas de la base. Enseña la alineación de caderas sobre hombros en una plataforma estable.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Comienza con la misma plataforma de **pose:lb-15**, espinillas paralelas al suelo.
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
    id: 'lb-candlestick',
    nombre: 'Candelabro / Parada de Hombros sobre Rodillas / Vela\n(Candlestick / Shoulderstand on Knees)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    url_imagen: 'https://i.ibb.co/ymvsRTq6/5457286.jpg',
    url_video: 'https://www.youtube.com/watch?v=usu93tTl1HQ',
    tags: ['Equilibrio', 'Inversión sobre Hombros', 'Terapéutico'],
    descripcion: 'Una inversión fundamental y muy segura donde el volador se apoya en las rodillas de la base, ideal para ganar confianza en las inversiones.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y dobla las rodillas hacia el pecho, creando una plataforma ancha y estable con la parte superior de tus rodillas y la parte inferior de tus muslos.
2.  **Volador:** De espaldas a la base, coloca tus hombros sobre esta plataforma de rodillas.
3.  **Base:** Sujeta los hombros del volador con tus manos para dar una conexión segura y guiar la entrada.
4.  **Volador:** Con confianza, levanta las caderas y luego las piernas (en **Tuck (Recogido/Agrupado)** o extendidas) para entrar en la inversión.

**Desarrollo:**
*   **Base:** Las rodillas ofrecen una base mucho más estable y suave que las espinillas o los pies, lo que la convierte en una postura muy segura para principiantes. Mantén el core activo.
*   **Volador:** Encuentra la alineación de las caderas sobre los hombros. Puedes jugar con diferentes posiciones de piernas (Tuck, Straddle, Pike, etc.). La sensación es de gran estabilidad y soporte.

**Culminación:**
1.  **Volador:** Baja las piernas de forma controlada.
2.  **Base:** Guía al volador para que aterrice suavemente, flexionando las caderas y rodillas según sea necesario.`,
    musculos: {
      base: ["Core", "Flexores de cadera"],
      volador: ["Core", "Confianza en la inversión"],
    },
    calibracion: {
      base: ["Ofrece una plataforma ancha y estable con tus rodillas.", "Comunica constantemente para dar seguridad."],
      volador: ["Esta es una postura de confianza. Relájate en la estabilidad que te da la base.", "Explora el equilibrio sin miedo."],
      observador: ["Aunque es segura, vigila la alineación.", "Asegura una salida suave y comunicada."],
    },
  },
  {
    id: 'lb-shin-to-hands',
    nombre: 'Espinillas a Manos\n(Shin to Hands)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['lb-15'],
    url_imagen: 'https://static.wixstatic.com/media/775065_936f29d8b88d44d086fa568f6b586939~mv2.jpg/v1/fill/w_1554,h_1554,al_c,q_90/775065_936f29d8b88d44d086fa568f6b586939~mv2.webp',
    tags: ['Terapéutico', 'Fundamental'],
    descripcion: 'Una postura terapéutica donde la base sostiene las espinillas del volador en sus manos, permitiendo una suave descompresión de la espalda baja y una apertura de cadera.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y extiende los brazos rectos hacia el cielo, como dos pilares.
2.  **Volador:** Párate de frente a la base, entre sus brazos. Coloca tus manos en los hombros de la base para estabilizarte.
3.  **Volador:** Levanta una pierna y coloca tu espinilla en la mano de la base. Luego, haz lo mismo con la otra pierna.
4.  **Base:** Sostén las espinillas del volador con un agarre firme. Asegúrate de que tus brazos estén rectos y apilados (**pose:1**).

**Desarrollo:**
*   **Base:** Mantén los brazos fuertes y estables. El volador confiará en esta plataforma. Puedes realizar un suave balanceo o masaje en las piernas del volador.
*   **Volador:** Relájate y deja que tu espalda se descomprima. Puedes doblar las rodillas para un estiramiento más suave o extender las piernas para mayor intensidad. Suelta la cabeza y el cuello si te sientes cómodo.
*   **Puntos de Contacto:** Las manos de la base en las espinillas del volador.

**Culminación:**
1.  **Volador:** Activa el core y, con la ayuda de la base, baja un pie al suelo y luego el otro.
2.  **Base:** Guía al volador para que aterrice de forma segura.
`,
    musculos: {
      base: ["Hombros", "Pecho", "Tríceps (isométrico)", "Core"],
      volador: ["Relajación de la espalda", "Estiramiento de isquiotibiales", "Apertura de cadera"],
    },
    calibracion: {
      base: ["Brazos rectos y apilados.", "Agarre firme y constante.", "Comunica tu estabilidad."],
      volador: ["Comunica tu nivel de comodidad.", "Entra y sal de la postura lentamente.", "Confía en el agarre de la base."],
      observador: ["Vigila el equilibrio de la postura.", "Asegura una salida suave y controlada.", "Presta especial atención a la espalda baja del volador."],
    },
  },
  {
    id: 'lb-1',
    nombre: 'Plancha Frontal\n(Front Plank)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['lb-15'],
    url_video: 'https://www.youtube.com/watch?v=eWu3BxMF1Bg',
    url_imagen: 'https://as1.ftcdn.net/jpg/03/11/95/30/1000_F_311953033_wzxpXOlvwTQxbux1FeRIH1ZNSTfO7NZt.jpg',
    tags: ['Estática', 'Fundamental'],
    descripcion: 'Postura fundamental con agarre de manos. El volador se equilibra sobre los pies de la base, construyendo confianza, alineación y comunicación.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate boca arriba. Levanta las piernas y flexiona las rodillas. Coloca tus pies en las caderas delanteras del volador (las crestas ilíacas). Tus pies deben estar paralelos y a la anchura de las caderas.
2.  **Volador:** Colócate de pie frente a los pies de la base. Toma las manos de la base con un agarre de "muñeca con muñeca". Transfiere tu peso hacia adelante, manteniendo los brazos rectos.
3.  **Base:** A medida que sientes el peso del volador, extiende lentamente las piernas hasta que estén rectas, a 90 grados del suelo. Los brazos del volador y los tuyos deben estar rectos, formando pilares (**pose:1**).

**Desarrollo:**
*   **Base:** Mantén las piernas verticales y activas. Tus pies son el volante; úsalos para hacer microajustes. El agarre de manos te da mucho control para estabilizar.
*   **Volador:** Mantén tu cuerpo en una línea recta y tensa (**pose:6**). El **Core** debe estar muy activo. La comunicación es constante a través de las manos.
*   Esta postura es el control rígido y la alineación necesarios antes de intentar el vuelo libre.

**Culminación:**
1.  **Base:** Dobla lentamente las rodillas, trayendo al volador hacia abajo con control.
2.  **Volador:** Mantén el cuerpo tenso y aterriza sobre tus pies de manera suave, un pie a la vez.
`,
    musculos: { base: ['Cuádriceps', 'Isquiotibiales', 'Core'], volador: ['Core', 'Glúteos', 'Espalda'] },
    calibracion: {
      base: ['Piernas a 90 grados', 'Usa los pies para dirigir', 'Comunicación a través de las manos'],
      volador: ['Cuerpo como una tabla (línea)', 'Mirada en un punto fijo', 'Brazos rectos'],
      observador: ['Cerca de las caderas del volador', 'Asegura un descenso seguro'],
    },
  },
  {
    id: 'lb-front-bird',
    nombre: 'Pájaro Frontal\n(Front Bird)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['lb-1'],
    url_video: 'https://www.youtube.com/watch?v=bmktYLuksek&t=1s',
    url_imagen: 'https://www.aloyoga.com/cdn/shop/articles/01.04.19_Alo_Blog_header1.jpg?v=1582928014&width=1440',
    tags: ['Estática', 'Fundamental', 'Familia Pájaro'],
    descripcion: 'El vuelo libre sin manos. El volador se equilibra sobre los pies de la base, abriendo el pecho y extendiendo los brazos como alas.',
    narrativa_detallada: `
**Del control rígido al vuelo libre: se transforma la tabla en pájaro.**

**Inicio:**
1.  Comiencen en una **pose:lb-1** muy estable.
2.  **Base y Volador:** Cuando ambos se sientan completamente estables y en equilibrio, comuniquen la intención de soltar las manos.
3.  **Base:** Prepara tu core y tus piernas para asumir todo el control del equilibrio.
4.  **Volador:** Suelta una mano y luego la otra, lentamente.

**Desarrollo:**
*   **Base:** El equilibrio ahora es mucho más delicado. Usa tus pies para hacer microajustes constantes. Siente el centro de tu volador.
*   **Volador:** Abre el pecho y extiende los brazos hacia los lados o hacia atrás como alas. La sensación cambia de una plancha rígida a una de expansión y vuelo. Mantén el core activo pero permite una suave curva en la espalda (lo opuesto al **Hollow Body**).
*   Esta postura trata sobre la confianza y la conexión no verbal.

**Culminación:**
1.  **Volador:** Para salir, vuelve a conectar las manos con la base, regresando a la estabilidad de la **pose:lb-1**.
2.  **Base:** Una vez que el agarre es seguro, dobla las rodillas para bajar al volador con control.
`,
    musculos: { base: ['Cuádriceps', 'Isquiotibiales', 'Core'], volador: ['Core (muy fuerte)', 'Glúteos', 'Músculos de la espalda'] },
    calibracion: {
      base: ['Piernas a 90 grados', 'Usa los pies para dirigir', 'Anticipa los movimientos del volador'],
      volador: ['Expande el pecho', 'Confianza total en la base', 'Movimientos lentos y gráciles'],
      observador: ['Cerca de las caderas del volador', 'Asegura un descenso seguro', 'La comunicación es clave aquí'],
    },
  },
  {
    id: 'lb-2',
    nombre: 'Trono\n(Throne)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    url_video: 'https://www.youtube.com/watch?v=Mz_P0UzoBbk',
    url_imagen: 'https://www.theyoganomads.com/wp-content/uploads/2023/03/image-15.jpg',
    gallery_images: ['https://as1.ftcdn.net/jpg/03/11/95/34/1000_F_311953402_6BL5VWn0JzKsxf5Ojp1BtDFB8aa8sZAp.jpg'],
    tags: ['Estática', 'Fundamental', 'Familia Trono'],
    descripcion: 'La base crea un asiento para el volador. Postura estable y cómoda para conectar.',
     narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo. Extiende los brazos hacia arriba.
2.  **Volador:** Párate de espaldas a la base, entre sus pies. Lentamente, inclínate hacia atrás y siéntate sobre los pies de la base, que estarán flexionados para crear un "asiento".
3.  **Base:** Coloca tus pies flexionados (dedos apuntando hacia arriba) justo debajo de los glúteos del volador. A medida que el volador se sienta, levanta tus pies del suelo hasta que tus espinillas estén paralelas al suelo. Toma las manos del volador para mayor estabilidad.

**Desarrollo:**
*   **Base:** Mantén tus espinillas como una plataforma estable. Puedes ajustar la altura flexionando o extendiendo un poco más las rodillas. Para un **Trono Alto**, extiende las piernas casi por completo.
*   **Volador:** Mantén la espalda recta y el **Core** activo. El peso debe estar centrado. Puedes soltar las manos y probar diferentes variaciones de brazos.
*   **Transición a Sofá:** Desde esta postura, el volador puede inclinarse hacia atrás y la base levanta más las piernas para entrar en **pose:th-sofa**, creando un mini-flujo terapéutico.

**Culminación:**
1.  **Volador:** Inclínate hacia adelante.
2.  **Base:** Baja lentamente los pies hacia el suelo mientras guías al volador con las manos para que se ponga de pie de forma segura.
`,
    musculos: { base: ['Cuádriceps', 'Core', 'Flexores de cadera'], volador: ['Core', 'Glúteos'] },
    calibracion: {
      base: ['Rodillas flexionadas para crear una "silla"', 'Ofrece tus manos para seguridad'],
      volador: ['Siéntate lentamente', 'Espalda recta y core activo'],
      observador: ['Ayuda al volador a sentarse', 'Ofrece un punto de equilibrio'],
    },
  },
  {
    id: 'lb-baby-bird',
    nombre: 'Pajarito\n(Baby Bird)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['lb-1', 'lb-2'],
    url_video: 'https://www.youtube.com/watch?v=LQacjmL6c1w',
    url_imagen: 'https://i.ibb.co/kL48nzL/image.png',
    tags: ['Estática', 'Fundamental', 'Familia Pájaro'],
    descripcion: 'Una postura de equilibrio juguetona donde el volador se equilibra en las rodillas de la base, fomentando la conexión y el juego.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Comienza en la misma posición que para un **pose:lb-2**, sentado con las rodillas dobladas y los pies en el suelo.
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
    id: 'lb-hand-bird',
    nombre: 'Pájaro sobre Manos\n(Hand Bird)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: ['lb-1'],
    url_video: 'https://www.youtube.com/watch?v=LQacjmL6c1w',
    url_imagen: 'https://media.istockphoto.com/id/636545454/es/foto/acroyoga-pajarito-pose.jpg?s=1024x1024&w=is&k=20&c=xzIatBnBFLUmhnKdBO2VSGbyLSCOmrnJk-I5QIfjy-g=',
    tags: ['Estática', 'Equilibrio', 'Familia Pájaro'],
    descripcion: 'Una variación de Pájaro donde el volador se equilibra sobre las manos de la base en lugar de los pies, preparando para Plancha sobre Manos (Free Bird).',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y extiende los brazos rectos hacia el cielo. Asegúrate de que tus hombros estén bien apoyados en el suelo.
2.  **Volador:** Colócate de pie frente a la base, entre sus brazos. Apoya tus caderas en las manos de la base.
3.  **Base y Volador:** Tomen un agarre de manos secundario (volador agarra las muñecas de la base, o viceversa) para estabilizar.
4.  **Volador:** Inclínate hacia adelante, transfiriendo tu peso a las manos de la base, y levanta los pies.

**Desarrollo:**
*   **Base:** Mantén los brazos rectos y apilados. El equilibrio es más desafiante que sobre los pies. Usa tu core para estabilizar.
*   **Volador:** Mantén una línea de **pose:lb-front-bird** activa. El equilibrio es más delicado; mantén el core muy activo y haz movimientos lentos.

**Culminación:**
1.  **Volador:** Comunica para bajar. Baja un pie y luego el otro con control.
2.  **Base:** Mantén las manos estables hasta que el volador esté seguro en el suelo.
`,
    musculos: {
      base: ["Hombros", "Pecho", "Tríceps", "Core"],
      volador: ["Core", "Glúteos", "Espalda", "Equilibrio"],
    },
    calibracion: {
      base: ["Brazos rectos y apilados.", "Usa tus manos para sentir y dirigir el equilibrio.", "Mantén el contacto con el suelo."],
      volador: ["Mantén una línea corporal fuerte.", "Confía en las manos de la base.", "Respira para mantener la calma."],
      observador: ["Cerca de las caderas del volador.", "Asegura una salida controlada."],
    },
  },
];
