
import type { Pose } from '@/types';

export const lBasingPoses: Pose[] = [
  // L-BASING: NIVEL 1
  {
    id: 'lb-15',
    nombre: 'Plancha sobre Espinillas\n(Plank on Shins)',
    nivel: 1,
    type: 'L-Basing',
    prerequisites: [],
    url_video: 'https://www.youtube.com/watch?v=O2Fsx4aDX1s',
    url_imagen: 'https://cdn.yogajournal.com/wp-content/uploads/2014/09/acro-yoga-plank-on-plank-pose-1.jpg',
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
    url_imagen: 'https://i.ytimg.com/vi/kT4KNu4sDC8/sddefault.jpg',
    gallery_images: ['https://camillamia.com/wp-content/uploads/2020/03/shoulderstand-4-500x498.jpg'],
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
    url_imagen: 'https://media.istockphoto.com/id/636545454/es/foto/acroyoga-pajarito-pose.jpg?s=1024x1024&w=is&k=20&c=xzIatBnBFLUmhnKdBO2VSGbyLSCOmrnJk-I5QIfjy-g=',
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
  

  // L-BASING: NIVEL 2
  {
    id: 'lb-shoulderstand-on-feet',
    nombre: 'Parada de Hombros sobre Pies\n(Shoulderstand on Feet)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-1', 'lb-shoulderstand-on-shins'],
    url_video: 'https://www.youtube.com/watch?v=usu93tTl1HQ',
    url_imagen: 'https://camillamia.com/wp-content/uploads/2020/03/shoulderstand-4-500x498.jpg',
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
    id: 'lb-side-bird',
    nombre: 'Pájaro Lateral\n(Side Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-1'],
    url_video: 'https://www.youtube.com/watch?v=bmktYLuksek',
    url_imagen: 'https://i.ibb.co/5WV0ZJrz/pajaro-lateral.jpg',
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
    id: 'lb-back-bird',
    nombre: 'Pájaro de Espaldas\n(Back Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['th-back-bird', 'th-whale'],
    url_video: 'https://www.youtube.com/watch?v=ks-4IzTcNSk',
    url_imagen: 'https://i.ibb.co/sJct4PKr/back-bird.png',
    descripcion: 'La versión acrobática del Pájaro de Espaldas Terapéutico. El volador mantiene una línea corporal activa y arqueada, sin agarre de manos.',
    narrativa_detallada: `
**Inicio:**
1.  Entra en un **pose:th-back-bird** o **pose:th-whale** con un agarre de manos seguro.
2.  **Base y Volador:** Una vez estables, comuniquen para soltar el agarre.

**Desarrollo:**
*   **Base:** Mantén tus pies firmes en la espalda alta del volador. El control del equilibrio ahora reside completamente en tus piernas y core.
*   **Volador:** Activa la espalda, los glúteos y las piernas para mantener un arco fuerte y estable (**Arch**). Extiende los brazos hacia los lados o hacia atrás.

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
    id: 'lb-reverse-bird',
    nombre: 'Pájaro Reverso\n(Reverse Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-front-bird'],
    url_imagen: 'https://www.christiangieger.de/wp-content/uploads/2021/06/Acroyoga-Haltung-Pose006.jpg',
    gallery_images: ['https://i.ytimg.com/vi/nZk8rZ1cG8c/maxresdefault.jpg'],
    descripcion: 'Postura acrobática donde el volador se equilibra en los pies de la base, pero mirando en dirección opuesta a un Pájaro Frontal, con el torso arqueado.',
    narrativa_detallada: `
**Esta es la versión acrobática y opuesta al Pájaro Frontal, no confundir con Pájaro de Espaldas.**

**Inicio:**
1.  Una entrada común es desde **pose:th-folded-leaf**.
2.  **Base:** Desde Plegaria Invertida, guía al volador para que levante el torso.
3.  **Volador:** Arquea la espalda y busca el equilibrio mientras la base reposiciona los pies desde tus caderas a tu abdomen/caderas bajas.
4.  **Base:** Encuentra el punto de equilibrio en el torso bajo del volador.

**Desarrollo:**
*   **Base:** Las piernas estarán más extendidas que en Pájaro Frontal. El equilibrio es más delicado.
*   **Volador:** Mantén un arco activo (**Arch**), con el pecho abierto y la cabeza relajada hacia atrás. Requiere una gran confianza y control del core para no colapsar. La sensación es acrobática, no terapéutica.

**Culminación:**
1.  Se puede transicionar a **pose:lb-2** o desmontar de forma segura llevando al volador a una posición sentada en el suelo.`,
    musculos: {
      base: ["Cuádriceps", "Core", "Control de pies fino"],
      volador: ["Core", "Músculos de la espalda", "Glúteos", "Confianza"],
    },
    calibracion: {
      base: ["Sé muy preciso con la colocación de los pies.", "Usa las manos para guiar las caderas del volador.", "La comunicación es vital."],
      volador: ["Mantén la tensión en todo el arco.", "Comunica sobre el punto de presión.", "Mantén los brazos extendidos para ayudar al equilibrio."],
      observador: ["Vigila la cabeza y la espalda del volador.", "Asegura una salida controlada."],
    },
  },
  {
    id: 'lb-reverse-back-bird',
    nombre: 'Pájaro de Espaldas Invertido\n(Reverse Back Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-back-bird', 'lb-reverse-bird'],
    url_imagen: 'https://i.ibb.co/B22GYnw9/acroyoga-reverse-back-bird-0a81ebeb36.webp',
    descripcion: 'Una apertura de pecho donde el volador se arquea de espaldas, mirando en dirección opuesta a la base. Es una expresión de confianza y flexibilidad.',
    narrativa_detallada: `
**Esta postura combina la apertura de Pájaro de Espaldas con la orientación de Pájaro Reverso.**

**Inicio:**
1. Una entrada común es desde **pose:lb-reverse-throne**.
2. **Volador:** Desde Trono Invertido, se inclina hacia atrás, arqueando la espalda.
3. **Base:** Con un agarre seguro en los tobillos o pantorrillas del volador, guía el descenso y coloca los pies en la espalda alta del volador, justo debajo de los omóplatos.

**Desarrollo:**
* **Base:** Mantén una plataforma de pies sólida. El control se ejerce a través de la flexión de tus rodillas y la tensión en el agarre de manos/brazos.
* **Volador:** Es una postura de entrega. Relaja la cabeza y el cuello, permitiendo que la gravedad abra el pecho. Mantén el core ligeramente activo para la estabilidad.

**Culminación:**
1. **Volador:** Usa el core para iniciar el regreso a la posición sentada.
2. **Base:** Guía al volador de vuelta a **pose:lb-reverse-throne** flexionando las rodillas y tirando suavemente de sus piernas.`,
    musculos: {
      base: ['Isquiotibiales', 'Core', 'Fuerza de brazos'],
      volador: ['Flexibilidad de espalda y hombros', 'Confianza'],
    },
    calibracion: {
      base: ['Colocación precisa de los pies en la espalda.', 'Comunica antes de cualquier movimiento.', 'Controla el arco con tus piernas.'],
      volador: ['Comunica tu nivel de comodidad.', 'Respira profundamente para expandir el pecho.', 'Confía en el agarre de la base.'],
      observador: ['Vigila la cabeza y el cuello del volador.', 'Asegura que la transición de vuelta a sentado sea controlada.'],
    },
  },
  {
    id: 'lb-7',
    nombre: 'Trono a Horcajadas\n(Straddle Throne)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-2'],
    url_video: 'https://www.youtube.com/watch?v=BqUpzbc2uxM',
    url_imagen: 'https://media.gettyimages.com/id/636545410/photo/acroyoga-straddle-throne-pose.jpg?s=1024x1024&w=gi&k=20&c=UJ6kNCAV7waoiyQcSY56plEWtTOF60BA-iyxtaret4A=',
    descripcion: 'Variación del Trono donde el volador se sienta a horcajadas. Es una transición común a otras posturas.',
     narrativa_detallada: `
**Inicio:**
Puede iniciarse desde el suelo o como una transición desde **pose:lb-2**.
1.  **Base:** Acuéstate y levanta las piernas. Las rodillas pueden estar flexionadas.
2.  **Volador:** Párate frente a la base, mirando hacia sus pies. Tomen un agarre de manos.
3.  **Base:** Coloca tus pies en la parte interna de los muslos del volador, cerca de la ingle.
4.  **Volador:** Inclínate hacia adelante, poniendo peso en las manos de la base. Salta ligeramente para que la base pueda recibir tus muslos en sus pies.
5.  **Base:** Recibe al volador y extiende las piernas hasta que el volador esté sentado a horcajadas ("straddle") sobre tus pies, con su torso erguido.

**Desarrollo:**
*   **Base:** Mantén las piernas fuertes. Puedes jugar con el ángulo de las piernas para la comodidad de ambos. Tus pies deben estar flexionados para crear una plataforma.
*   **Volador:** Mantén las piernas activas y abiertas. La espalda recta. Es una postura muy activa. Desde aquí se puede transitar a muchas otras posturas como **pose:lb-16** o **pose:lb-reverse-throne**.
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
    id: 'lb-reverse-throne',
    nombre: 'Trono Invertido\n(Reverse Throne)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-7'],
    url_video: 'https://www.youtube.com/watch?v=HHw8B129doU',
    url_imagen: 'https://www.christiangieger.de/wp-content/uploads/2021/06/Acroyoga-Haltung-Pose020.webp',
    gallery_images: ['https://as2.ftcdn.net/jpg/02/09/95/21/1000_F_209952154_Z70YdOc791roBDUpRbE2iRCvQv73mWMB.jpg'],
    descripcion: 'Una variante del Trono donde el volador invierte su orientación. Es un puente hacia transiciones y lavadoras más complejas.',
    narrativa_detallada: `
**Inicio:**
Generalmente se llega a esta postura a través de una transición, como en la **pose:lb-13**. Una entrada directa es más avanzada.
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
    id: 'lb-reverse-straddle-throne',
    nombre: 'Trono Invertido a Horcajadas\n(Reverse Straddle Throne)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-7', 'lb-reverse-throne'],
    descripcion: 'Una postura de inversión sentada fundamental. Es el equivalente inverso de Trono a Horcajadas y una puerta de entrada a muchas lavadoras y transiciones de nivel intermedio.',
    narrativa_detallada: `
**Inicio:**
Se entra comúnmente desde **pose:lb-7**.
1. **Base y Volador:** Desde un Trono a Horcajadas estable, el volador se inclina hacia adelante, y la base lo guía en una rotación.
2. **Rotación:** El volador gira 180 grados, manteniendo las piernas en straddle, hasta quedar de espaldas a la base.
3. **Recepción:** La base recibe al volador en la misma posición de **pose:lb-7**, pero ahora el volador está mirando en la dirección opuesta. La base agarra las caderas o muslos del volador para estabilizar.

**Desarrollo:**
* **Base:** Mantén una plataforma de pies sólida. Tus manos en las caderas del volador son cruciales para prevenir que se caiga hacia atrás.
* **Volador:** Mantén el torso erguido y las piernas activas en straddle. El core es fundamental para mantener el equilibrio.

**Culminación:**
1. Para salir, se puede revertir la rotación para volver a **pose:lb-7**.
2. Otra opción es que el volador se deslice hacia adelante para aterrizar de pie frente a la base.`,
    musculos: { base: ['Cuádriceps', 'Aductores', 'Core', 'Fuerza de brazos'], volador: ['Core', 'Flexibilidad de cadera', 'Espalda'] },
    calibracion: {
      base: ['Guía la rotación con firmeza.', 'Asegura un agarre sólido en las caderas del volador al llegar.', 'Mantén la comunicación.'],
      volador: ['Mantén el straddle activo durante todo el giro.', 'Usa tu core para controlar la rotación.', 'Confía en la guía de la base.'],
      observador: ['Observa la rotación y prepárate para estabilizar las caderas del volador.', 'Una salida segura es la prioridad.'],
    },
  },
  {
    id: 'lb-16',
    nombre: 'Murciélago\n(Bat)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-7'],
    url_video: 'https://www.youtube.com/watch?v=PZ0oq-SHHnE&t=5s',
    url_imagen: 'https://i.ibb.co/JFCkr0j3/acroyoga-bat-689e58ebc1.jpg',
    descripcion: 'Postura de inversión donde el volador cuelga de las piernas de la base, sostenido por la cadera.',
     narrativa_detallada: `
**Inicio:**
Se puede entrar desde **pose:lb-7**.
1.  **Base y Volador:** En **pose:lb-7**, establezcan un agarre de manos firme.
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
2.  **Volador:** Desengancha los pies y usa el **Core** y la ayuda de la base para volver a la posición de **pose:lb-7**.
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
    id: 'lb-24',
    nombre: 'Murciélago a Horcajadas\n(Straddle Bat)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-7', 'lb-16'],
    url_video: 'https://www.youtube.com/watch?v=PZ0oq-SHHnE',
    url_imagen: 'https://media.gettyimages.com/id/638748394/photo/acroyoga-straddle-bat-pose.jpg?s=1024x1024&w=gi&k=20&c=fLN0ma6PYMoQk01ES4skjyaOeephBWvXEuZvz2nAqXk=',
    descripcion: 'Una variación de Murciélago donde el volador mantiene las piernas abiertas en straddle, colgando de los pies de la base.',
    narrativa_detallada: `
**Inicio:**
Se entra desde **pose:lb-7**.
1.  **Base y Volador:** Desde una posición estable de **pose:lb-7**, tomen un agarre de manos.
2.  **Volador:** Manteniendo las piernas abiertas, inclínate hacia atrás.
3.  **Base:** Flexiona las rodillas para recibir al volador, permitiendo que su torso cuelgue.
4.  **Volador:** Desliza tus pies por las piernas de la base hasta que tus tobillos queden enganchados en sus manos/muñecas. La base te sostiene por los tobillos.

**Desarrollo:**
*   **Base:** Mantén un agarre firme en los tobillos del volador. Tus piernas sostienen la mayor parte del peso en la parte interna de los muslos del volador, como en **pose:lb-7**.
*   **Volador:** Relájate y cuelga. Es una inversión y estiramiento de hombros. Mantén las piernas activas en **Straddle** para la estética y la estabilidad.
*   **Puntos de Contacto:** Las plantas de los pies de la base en los muslos internos del volador. Las manos de la base agarrando los tobillos del volador.

**Culminación:**
1.  **Base y Volador:** El volador usa su **Core** y la ayuda de la base para volver a la posición de **pose:lb-7**.
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
    id: 'lb-21',
    nombre: 'Inversión: Trípode\n(Tripod)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-shoulderstand-on-shins'],
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
    id: 'lb-shoulderstand',
    nombre: 'Parada de Hombros\n(Shoulderstand)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-shoulderstand-on-feet', 'lb-21'],
    url_video: 'https://www.youtube.com/watch?v=usu93tTl1HQ',
    url_imagen: 'https://i.ibb.co/bjSjdv0L/acroyoga-shoulder-stand-a3bc4fec69.webp',
    descripcion: 'Una inversión sin manos donde el volador se equilibra verticalmente sobre los pies de la base. Demuestra una gran alineación y confianza.',
    narrativa_detallada: `
**Inicio:**
Generalmente se entra desde una **pose:lb-shoulderstand-on-feet** con agarre de manos.
1.  **Base y Volador:** Establezcan una parada de hombros con manos muy sólida y comunicada.
2.  **Base:** Asegúrate de que tus pies están bien colocados en la parte carnosa de los hombros del volador.
3.  **Volador:** Encuentra tu línea vertical perfecta. El equilibrio debe sentirse casi sin esfuerzo.
4.  **Comunicación:** Ambos deben sentirse 100% estables. Comuniquen la intención de soltar las manos.

**Desarrollo:**
*   **Base:** Mantén las piernas a 90 grados, firmes como pilares. Todo el control del equilibrio está en tus pies y en tu core. Haz microajustes con los tobillos.
*   **Volador:** Mantén una línea perfectamente recta desde los hombros hasta los pies. Activa el core, los glúteos y las piernas. Los brazos pueden ir a los costados, extendidos o en oración.
*   Esta postura es de equilibrio puro y confianza.

**Culminación:**
1.  **Volador:** Para salir, vuelve a conectar las manos con la base de forma segura.
2.  **Base:** Una vez que el agarre es firme, guía al volador para que baje las piernas de forma controlada al suelo.
`,
    musculos: {
      base: ["Piernas (isométrico)", "Core muy fuerte", "Estabilizadores de tobillo"],
      volador: ["Core", "Espalda", "Glúteos", "Alineación corporal total"],
    },
    calibracion: {
      base: ["Plataforma de pies completamente nivelada.", "Sé un ancla. Absorbe cualquier movimiento.", "Tus pies son el punto de equilibrio; sé sensible."],
      volador: ["Tu cuerpo es una sola unidad, tensa y alineada.", "Confía en tu línea y en la base.", "La quietud es la clave."],
      observador: ["Observador muy atento.", "Permanece cerca de las caderas del volador.", "Asegura una salida controlada, especialmente al reconectar las manos."],
    },
  },
  {
    id: 'lb-reverse-shoulderstand',
    nombre: 'Parada de Hombros Inversa\n(Reverse Shoulderstand)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-shoulderstand', 'lb-reverse-throne'],
    url_imagen: 'https://i.ibb.co/MyZLFwLF/acroyoga-reverse-shoulder-stand-1f8881354d.webp',
    descripcion: 'Una inversión donde el volador está de espaldas a la base, equilibrándose sobre los pies de esta. Requiere gran control de la base y confianza del volador.',
    narrativa_detallada: `
**Inicio:**
Se entra comúnmente desde **pose:lb-reverse-throne**.
1.  **Base y Volador:** Desde un Trono Invertido estable, la base tiene un agarre firme en los tobillos del volador.
2.  **Base:** Guía al volador para que se incline hacia atrás, levantando sus caderas.
3.  **Volador:** Con confianza, lleva las caderas hacia la vertical mientras la base guía el movimiento.
4.  **Base:** Mueve los pies desde los muslos del volador hasta sus hombros, creando la plataforma para la parada de hombros inversa.

**Desarrollo:**
*   **Base:** Mantén las piernas firmes y a 90 grados. El agarre de las manos en los tobillos del volador es crucial para la estabilidad y el control.
*   **Volador:** Mantén el cuerpo en una línea recta. Activa el core y empuja con los hombros contra los pies de la base. La cabeza está en una posición neutral.
*   La comunicación y la confianza son primordiales en esta postura.

**Culminación:**
1.  **Base:** Dobla las rodillas para bajar al volador.
2.  **Volador:** Usa el core para controlar el descenso y volver a una posición sentada (**pose:lb-reverse-throne**).
3.  Desde allí, se desmonta de forma segura.
`,
    musculos: {
      base: ["Piernas", "Core", "Fuerza de brazos y agarre"],
      volador: ["Core", "Hombros", "Confianza en la inversión hacia atrás"],
    },
    calibracion: {
      base: ["El agarre de manos controla la postura.", "Guía las caderas del volador con claridad.", "Sé una plataforma estable."],
      volador: ["Mantén una línea recta y activa.", "Comunica cualquier incomodidad.", "Confía en que la base te sostiene."],
      observador: ["Observa la alineación del volador.", "Asegura que el cuello esté protegido.", "Asiste en el descenso de vuelta a Trono Invertido."],
    },
  },
  {
    id: 'lb-cathedral',
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


  // L-BASING: NIVEL 5 (antes 4)
  {
    id: 'lb-9',
    nombre: 'Equilibrio: Estrella\n(Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-shoulderstand-on-feet', 'lb-7', 'lb-side-bird'],
    url_video: 'https://www.youtube.com/watch?v=ydOM4EbhJz0',
    url_imagen: 'https://i.ibb.co/zWcPm0sC/estrella.jpg',
    descripcion: 'Postura avanzada de equilibrio sobre un pie y una mano de la base. Requiere alineación y fuerza de ambos.',
     narrativa_detallada: `
**Inicio:**
Se entra desde un **pose:lb-7** modificado.
1.  **Base:** Desde la posición acostada, levanta solo tu pierna derecha y tu brazo izquierdo (o viceversa). Tu pie derecho debe estar listo para recibir la cadera derecha del volador. Tu mano izquierda está lista para el agarre.
2.  **Volador:** Párate del lado izquierdo de la base. Coloca tu cadera derecha sobre el pie derecho de la base. Agarra la mano izquierda de la base con tu mano derecha.
3.  **Base y Volador:** Usando un **Contrapeso**, el volador levanta los pies del suelo. El volador colocará su mano izquierda en el hombro izquierdo de la base para estabilizarse.
4.  **Volador:** Una vez estable, extiende la pierna y el brazo libres para formar la estrella.

**Desarrollo:**
*   **Base:** Apila tu hombro sobre tu codo y muñeca (**pose:1**). La pierna de apoyo debe estar fuerte. Usa tu **Core** y tu pierna libre como contrapeso. El pie de apoyo debe estar firme en la cadera del volador, no en el glúteo.
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
    id: 'lb-12',
    nombre: 'Equilibrio: Estrella Lateral\n(Side Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-9'],
    url_video: 'https://www.youtube.com/watch?v=PwoWLI9XlG8',
    url_imagen: 'https://i.ibb.co/bgKX81jS/gettyimages-638275840-2048x2048-1.jpg',
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
    id: 'lb-inside-star',
    nombre: 'Equilibrio: Estrella Interior\n(Inside Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-12'],
    url_video: 'https://www.youtube.com/watch?v=rZkWVVZhwc4',
    url_imagen: 'https://i.ytimg.com/vi/rZkWVVZhwc4/maxresdefault.jpg',
    descripcion: 'Una variación de Estrella Lateral donde la base está boca arriba, cambiando los puntos de contacto y la dinámica del equilibrio. El volador mira hacia el interior.',
    narrativa_detallada: `
**Esta variación de Estrella se siente muy diferente y requiere una conexión interna.**

**Inicio:**
1.  **Base:** Acuéstate boca arriba. Levanta una pierna (ej. la derecha) y prepara el pie para recibir la cadera del volador. La otra pierna puede estar en el suelo o levantada para contrapeso. Agarra la mano del volador con tu mano del mismo lado (mano derecha de la base con mano derecha del volador).
2.  **Volador:** Párate al lado de la base, de cara a ella. Coloca tu cadera en el pie de la base y toma su mano.
3.  **Base y Volador:** Usando **Contrapeso**, el volador levanta los pies del suelo. El volador se apoya con su mano libre en la rodilla o muslo de la base para estabilizar.

**Desarrollo:**
*   **Base:** Tu estabilidad viene de tu conexión con el suelo. La pierna de apoyo debe estar fuerte y el pie bien colocado en la cadera del volador, no en las costillas.
*   **Volador:** Tu cuerpo está en un plano lateral, pero ahora miras hacia la base. Esto cambia la dinámica de la mirada y el equilibrio. Mantén los oblicuos activos y el cuerpo como una tabla.
*   **Puntos de Contacto:** Pie derecho de la base en la cadera derecha del volador. Mano derecha de la base en la mano derecha del volador.

**Culminación:**
1.  **Volador:** Comunica la salida y baja lentamente los pies al suelo.
2.  **Base:** Flexiona la pierna de apoyo para facilitar un aterrizaje suave.
`,
    musculos: { base: ['Core', 'Pierna de apoyo', 'Hombro', 'Estabilizadores'], volador: ['Oblicuos', 'Core', 'Estabilizadores de cadera'] },
    calibracion: {
      base: ['Coloca el pie en el hueso de la cadera, no en tejido blando.', 'Usa tu pierna libre como contrapeso activo.', 'El agarre de mano es tu principal línea de comunicación.'],
      volador: ['Mantén el cuerpo en una línea recta y lateral.', 'Empuja activamente contra el pie de la base para crear tensión.', 'Comunica cualquier deslizamiento del pie de la base.'],
      observador: ['Colócate del lado abierto del volador.', 'Tu principal función es evitar que el volador rote hacia adelante o hacia atrás.'],
    },
  },
  {
    id: 'lb-outside-side-star',
    nombre: 'Estrella Lateral Exterior\n(Outside Side Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-inside-star'],
    url_imagen: 'https://i.ibb.co/JD8Y3xp/acroyoga-outside-side-star-4cd0502384.webp',
    descripcion: 'Variación de Estrella donde el volador mira hacia afuera, creando un desafío de contrapeso y equilibrio abierto.',
    narrativa_detallada: `
**Esta postura es la contraparte de Inside Star y requiere una gran confianza y comunicación no verbal.**

**Inicio:**
1.  **Base:** Acuéstate boca arriba. Levanta una pierna (ej. la derecha) y tu mano opuesta (la izquierda).
2.  **Volador:** Párate al lado de la base, pero de espaldas a ella. Tu cadera derecha se alineará con el pie derecho de la base.
3.  **Base y Volador:** Tomen un agarre cruzado (mano izquierda de la base con mano derecha del volador).
4.  **Base:** Coloca tu pie derecho en la cadera/glúteo derecho del volador.
5.  **Volador:** Confiando en el agarre y el punto de apoyo, inclínate hacia un lado, lejos de la base, para levantar los pies del suelo usando **Contrapeso**.

**Desarrollo:**
*   **Base:** Mantén una pierna de apoyo muy fuerte. Tu brazo de agarre debe estar firme. Usa tu cuerpo como un ancla.
*   **Volador:** Mantén una línea lateral fuerte. Tu mirada se dirige hacia afuera, lo que hace el equilibrio más desafiante. Confía en la tensión del agarre.

**Culminación:**
1.  **Volador:** Comunica la salida. Baja los pies lentamente hacia el suelo.
2.  **Base:** Flexiona la pierna de apoyo y guía al volador para un aterrizaje seguro.
`,
    musculos: {
      base: ['Core', 'Oblicuos', 'Pierna de apoyo', 'Hombro'],
      volador: ['Core', 'Oblicuos', 'Confianza'],
    },
    calibracion: {
      base: ['El contrapeso es clave. Sé el ancla.', 'Un agarre firme y constante es fundamental.', 'Comunica con la presión de tu pie.'],
      volador: ['Inclínate lejos de la base para crear tensión.', 'Mantén una línea corporal fuerte y activa.', 'Confía en que la base te sostendrá.'],
      observador: ['Posiciónate del lado abierto del volador.', 'Prepárate para soportar peso si el contrapeso falla.'],
    },
  },
  {
    id: 'lb-reverse-inside-star',
    nombre: 'Estrella Interior Inversa\n(Reverse Inside Side Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-outside-side-star'],
    url_imagen: 'https://i.ibb.co/R47B2Q8X/acroyoga-reverse-inside-star-df01b7aeb9.webp',
    descripcion: 'Variación de contrapeso donde el volador da la espalda a la base, pero el agarre es del mismo lado, forzando una torsión y un equilibrio complejos.',
    narrativa_detallada: `
**Una variación muy desafiante que juega con la torsión y el contrapeso.**

**Inicio:**
1.  **Base:** Acostada boca arriba, levanta una pierna (ej. derecha) y el brazo del mismo lado (derecho).
2.  **Volador:** De espaldas a la base, alínea tu espalda baja/sacro con el pie de la base. Con tu mano derecha, busca hacia atrás para tomar la mano derecha de la base.
3.  **Entrada:** El volador se inclina hacia adelante (lejos de la base), generando tensión. La base resiste esta tensión, creando un **Contrapeso**. El volador levanta los pies.

**Desarrollo:**
*   **Base:** Eres el ancla. La pierna de apoyo debe estar muy fuerte. La clave es resistir la tracción del volador.
*   **Volador:** Tu cuerpo está en una posición de arco lateral/torsión. Extiende tu brazo y pierna libres para encontrar el equilibrio. Es una postura de gran apertura de pecho y hombro.

**Culminación:**
1.  **Volador:** Recoge las extremidades y busca el suelo con los pies.
2.  **Base:** Controla el descenso flexionando la pierna de apoyo.`,
    musculos: {
      base: ['Core', 'Piernas', 'Fuerza de agarre'],
      volador: ['Oblicuos', 'Espalda', 'Hombros', 'Core'],
    },
    calibracion: {
      base: ['Sé un ancla sólida.', 'El pie debe estar en el sacro, no en la columna.', 'Comunica sobre la tensión.'],
      volador: ['Confía en el contrapeso.', 'Encuentra la extensión en la torsión.', 'Comunica sobre la comodidad del agarre.'],
      observador: ['Observador muy atento. Colócate para detener la caída si el contrapeso falla.'],
    },
  },
  {
    id: 'lb-reverse-outside-star',
    nombre: 'Estrella Exterior Inversa\n(Reverse Outside Side Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-reverse-inside-star', 'lb-18'],
    url_imagen: 'https://i.ibb.co/T6v24Cj/acroyoga-reverse-outside-star-fdf3eef8ab.webp',
    descripcion: 'Una de las variaciones más exigentes de Estrella, que combina una orientación inversa y un agarre cruzado, demandando máxima confianza y alineación.',
    narrativa_detallada: `
**Combina la orientación de Reverse Star con la dinámica de Outside Star.**

**Inicio:**
1.  **Base:** Acostada, levanta una pierna (ej. derecha) y el brazo opuesto (izquierdo).
2.  **Volador:** De espaldas a la base, alínea tu sacro/espalda baja con el pie de la base. Con tu mano derecha, busca hacia atrás para tomar la mano izquierda de la base (agarre cruzado).
3.  **Entrada:** El volador se inclina hacia adelante, generando la tensión del **Contrapeso** para levantarse.

**Desarrollo:**
*   **Base:** Mantén una estructura de anclaje sólida con la pierna y el brazo opuestos. El equilibrio aquí es muy delicado.
*   **Volador:** Mantén una línea de arco fuerte. La torsión del agarre cruzado añade complejidad. Extiende tus extremidades libres para estabilizar.

**Culminación:**
1.  Salida controlada y comunicada, bajando los pies al suelo.
2.  La base guía el descenso flexionando la pierna de apoyo.`,
    musculos: {
      base: ['Todo el cuerpo', 'Concentración máxima'],
      volador: ['Todo el cuerpo', 'Confianza absoluta'],
    },
    calibracion: {
      base: ['Apilamiento y anclaje perfectos.', 'Comunicación constante a través del agarre.'],
      volador: ['Confianza ciega en la base.', 'Mantén una línea fuerte y predecible.', 'Respira.'],
      observador: ['Observador de nivel élite. Debe entender perfectamente la dinámica de la postura.'],
    },
  },
  {
    id: 'lb-18',
    nombre: 'Equilibrio: Estrella Invertida\n(Reverse Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-12'],
    url_video: 'https://www.youtube.com/watch?v=vccFNDI6y74',
    url_imagen: 'https://i.ibb.co/FNN3mD9/Reverse-Star.jpg',
    descripcion: 'Variación avanzada de la Estrella donde el volador mira en dirección opuesta a la base. Exige un contrapeso y confianza inmensos.',
     narrativa_detallada: `
**Inicio:**
Similar a la **pose:lb-9**, pero la conexión es espalda con espalda.
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
    id: 'lb-10',
    nombre: 'Inversión: Plancha sobre Manos\n(Free Bird)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-15', 'lb-1'],
    url_video: 'https://www.youtube.com/watch?v=LQacjmL6c1w',
    url_imagen: 'https://hydratewithcore.com/wp-content/uploads/2020/06/forblog1-1030x687_large.jpg',
    descripcion: 'Equilibrio sobre las manos de la base, también conocido como "Free Bird". Exige gran fuerza de la base y control del core del volador.',
     narrativa_detallada: `
Esta postura es también conocida como **Free Bird**.

**Inicio:**
1.  **Base:** Acuéstate y extiende los brazos rectos hacia el cielo, como dos pilares. Los hombros bien conectados al suelo.
2.  **Volador:** Párate frente a las manos de la base. Coloca tus hombros sobre sus manos. El agarre es con los dedos de la base apuntando hacia los hombros del volador.
3.  **Volador:** Transfiere tu peso hacia adelante, como si hicieras una plancha. La base te ayudará a encontrar el punto de equilibrio.
4.  **Base:** Mantén los brazos completamente rectos y bloqueados (**pose:1**). El equilibrio se maneja con microajustes de los dedos y la presión de las palmas.
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
    id: 'lb-11',
    nombre: 'Inversión: Parada de Manos sobre Pies\n(Handstand on Feet)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-shoulderstand-on-feet', 'lb-21', 'tr-cartwheel-exit'],
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
1.  **Volador:** La salida más segura es hacer una **pose:tr-cartwheel-exit**, bajando una pierna hacia un lado.
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
    id: 'lb-croc',
    nombre: 'Inversión: Cocodrilo\n(Croc)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-10', 'lb-11'],
    url_video: 'https://www.youtube.com/watch?v=IKFZ6KMWZNo',
    url_imagen: 'https://i.pinimg.com/736x/53/c2/f4/53c2f4533fc8fb7456bc510cc3de59cb.jpg',
    descripcion: 'Un ejercicio clave para desarrollar la fuerza y alineación de la parada de manos. El volador sostiene una plancha baja sobre las manos de la base.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta los brazos, como para un **pose:lb-10**.
2.  **Volador:** Coloca tus manos en las de la base, pero en lugar de tus hombros, es un agarre mano a mano.
3.  **Volador:** Salta a una posición de plancha, con los pies en el suelo.

**Desarrollo:**
*   **Base:** Coloca tus pies en las caderas o en la parte baja del abdomen del volador para darle soporte.
*   **Volador:** Baja a una posición de chaturanga (flexión baja), manteniendo los codos pegados al cuerpo y una línea recta. Esto es "Croc". Sostener esta postura es un gran entrenamiento de fuerza para **pose:lb-h2h**.
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
    id: 'lb-14',
    nombre: 'Inversión: Pies a Mano\n(Foot-to-Hand)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-11'],
    url_video: 'https://www.youtube.com/watch?v=Fj3cW9ycttY',
    url_imagen: 'https://media.istockphoto.com/id/638748450/photo/acroyoga-foot-to-hand-pose.jpg?s=1024x1024&w=is&k=20&c=_u-Oms3cNs5i3wzJz-9IUo8xNwRIS4ssv-EYFORa18Y=',
    descripcion: 'El volador se equilibra en una mano, con los pies en las manos de la base. Requiere un equilibrio y confianza excepcionales.',
     narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y extiende los brazos rectos hacia el cielo, con las palmas hacia arriba, listos para recibir los pies del volador.
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
    id: 'lb-h2h',
    nombre: 'Inversión: Parada de Manos sobre Manos\n(H2H)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-14', 'lb-croc'],
    url_video: 'https://www.youtube.com/watch?v=uqryFIDRwSA',
    url_imagen: 'https://i.ytimg.com/vi/x4IYQUewUoQ/maxresdefault.jpg',
    descripcion: 'El pináculo del equilibrio L-Basing. El volador hace una parada de manos sobre las manos de la base.',
     narrativa_detallada: `
**Inicio:**
Se puede entrar desde **pose:lb-10** extendida.
1.  **Base y Volador:** Establezcan una **pose:lb-10** muy estable.
2.  **Base:** Flexiona los codos lentamente, bajando al volador hacia ti, como una flexión de brazos.
3.  **Volador:** Mantén tu **Línea** de plancha y la confianza mientras la base te baja.
4.  **Base:** Cuando los hombros del volador están cerca de tus rodillas, este puede usar tus piernas para caminar hacia arriba.
5.  **Volador:** Camina con tus manos sobre las piernas de la base hasta que tus caderas estén sobre tus hombros, buscando la línea de parada de manos.
6.  **Base:** Extiende los brazos para levantar al volador en la parada de manos final.

**Desarrollo:**
*   **Base:** Mantén los brazos perfectamente rectos (**pose:1**). Los hombros deben estar apilados sobre los codos y muñecas. El equilibrio se controla con microajustes de los dedos y las muñecas, no doblando los codos.
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
  
  // L-BASING: NIVEL 7 (WASHING MACHINES)
  {
    id: 'wm-four-step',
    nombre: 'Cuatro Pasos\n(Four-Step)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-7', 'lb-back-bird', 'lb-shoulderstand'],
    url_video: 'https://www.youtube.com/watch?v=F_7y2H0sRIY',
    url_imagen: 'https://i.ibb.co/21QyLvPs/fourstep.jpg',
    descripcion: 'Una lavadora fundamental que combina cuatro posturas en un flujo suave: Trono a Horcajadas, Pájaro de Espaldas, Parada de Hombros y de vuelta a Trono.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-7** estable.
**Paso 1 (a Pájaro de Espaldas):**
* Desde Trono a Horcajadas, el volador se reclina hacia atrás mientras la base reposiciona los pies en la espalda alta para entrar en **pose:lb-back-bird**.
**Paso 2 (a Parada de Hombros):**
* Desde **Pájaro de Espaldas**, el volador se recoge, y la base mueve sus pies a los hombros del volador, entrando en **pose:lb-shoulderstand**.
**Paso 3 (a Trono Invertido):**
* Desde Parada de Hombros, el volador se sienta, y la base mueve los pies a los muslos internos del volador, entrando en **pose:lb-reverse-throne**.
**Paso 4 (a Trono a Horcajadas):**
* Desde Trono Invertido, el volador gira 180 grados, guiado por la base, para volver al inicio en **pose:lb-7**.`,
  },
  {
    id: 'wm-helicopter',
    nombre: 'Helicóptero\n(Helicopter)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-front-bird', 'lb-back-bird'],
    url_video: 'https://www.youtube.com/watch?v=nHuaq_xHq48',
    url_imagen: 'https://i.ytimg.com/vi/x8ipsmMEI28/maxresdefault.jpg',
    descripcion: 'Una transición rotacional clásica donde el volador gira 360 grados horizontalmente, pasando de Pájaro Frontal a Pájaro de Espaldas y de vuelta.',
    narrativa_detallada: `
**Esta lavadora es fundamental para entender la rotación en el plano horizontal.**

**Inicio:**
1. Comiencen en **pose:lb-front-bird**, sin manos.

**Desarrollo (La Lavadora):**
2. **Inicio del Giro:** El volador inicia la rotación girando la cabeza y los hombros hacia un lado. La base sigue este movimiento con los pies, permitiendo que el volador gire sobre ellos.
3. **Paso por Lateral:** El volador pasa por una posición de lado (**pose:lb-side-bird**), manteniendo la línea corporal.
4. **Pájaro de Espaldas:** El giro continúa hasta que el volador completa 180 grados y se estabiliza en **pose:lb-back-bird**.
5. **El Regreso:** Desde **pose:lb-back-bird**, la rotación continúa en la misma dirección, pasando por el otro lado en **pose:lb-side-bird**, hasta completar los 360 grados y volver a **pose:lb-front-bird**.

**Culminación:**
* El ciclo puede repetirse varias veces. Para salir, deténganse en **pose:lb-front-bird** y desmonten.`,
    musculos: {
      base: ['Control y precisión de pies', 'Core', 'Resistencia'],
      volador: ['Core', 'Oblicuos', 'Habilidad para mantener la línea durante la rotación'],
    },
    calibracion: {
      base: ['Tus pies actúan como un plato giratorio.', 'Mantén un punto de presión constante y permite que el volador gire sobre él.', 'Ajusta la posición de tus pies para seguir el centro de gravedad del volador.'],
      volador: ['Inicia el giro desde tu centro (core).', 'Mantén una línea tensa y recta durante toda la rotación.', 'Tu cuerpo es una sola pieza que gira.'],
      observador: ['Muévete alrededor de la pareja.', 'El mayor riesgo es que el volador se deslice de los pies. Prepárate para guiar sus caderas.'],
    },
  },
  {
    id: 'lb-high-barrel-roll',
    nombre: 'High Barrel Roll\n(High Barrel Roll)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-1', 'lb-back-bird', 'lb-side-bird'],
    url_video: 'https://www.youtube.com/watch?v=cepXBQyMbQI',
    url_imagen: 'https://daman.co.id/_next/image?url=https%3A%2F%2Fbackend.daman.co.id%2Fwp-content%2Fuploads%2F2018%2F07%2FFitness-0607.jpg&w=1920&q=75',
    descripcion: 'Una lavadora rotacional donde el volador "rueda" sobre el torso de la base, pasando por Pájaro Frontal y Pájaro de Espaldas.',
    narrativa_detallada: `
**Esta lavadora enseña un control de equilibrio lateral exquisito.**

**Inicio:**
1.  Comienza en **pose:lb-1**, manos conectadas.

**Desarrollo (La Lavadora):**
2.  **El Rollo:** El volador se inclina hacia un lado, por ejemplo, el izquierdo. La base baja su pierna izquierda y sube su pierna derecha, creando una "rampa".
3.  **Transición:** El volador, manteniendo su cuerpo como una unidad sólida, rueda sobre el torso de la base, pasando por una posición similar a **pose:lb-side-bird**.
4.  **Recepción:** El volador completa el giro y aterriza suavemente en **pose:lb-back-bird**, con los pies de la base ahora en su espalda.
5.  **Regreso:** El movimiento se puede revertir para volver a **pose:lb-1**, completando el "barrel roll".

**Culminación:**
*   Se detiene en **pose:lb-1** o **pose:lb-back-bird** y se desmonta de forma segura. La clave es la fluidez y una conexión de manos constante.`,
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
    id: 'lb-around-the-world',
    nombre: 'Alrededor del Mundo\n(Around the World)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-1', 'th-folded-leaf', 'lb-back-bird'],
    url_video: 'https://www.youtube.com/watch?v=8oq4eUG5TBs',
    url_imagen: 'https://i.ibb.co/4ZqZxRHt/image.png',
    descripcion: 'Una de las primeras lavadoras que se aprenden, conectando Pájaro Frontal, Plegaria Invertida y Pájaro de Espaldas en un flujo circular.',
    narrativa_detallada: `
**Secuencia:**
1.  **Inicio:** Empieza en **pose:lb-1**, con manos conectadas.
2.  **Transición a Plegaria Invertida:** La base dobla las rodillas, el volador se pliega hacia adelante hasta que sus manos tocan el suelo y la base mueve los pies a las caderas para **pose:th-folded-leaf**.
3.  **Transición a Pájaro de Espaldas:** Desde **pose:th-folded-leaf**, el volador se endereza, la base mueve los pies a la espalda alta para **pose:lb-back-bird**.
4.  **Regreso a Plancha Frontal:** Desde **pose:lb-back-bird**, se baja al suelo para reiniciar en **pose:lb-1**, o para practicantes avanzados, se puede intentar una transición directa.`,
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
    id: 'lb-corkscrew',
    nombre: 'Sacacorchos\n(Corkscrew)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-2', 'lb-back-bird', 'lb-7', 'lb-12'],
    url_video: 'https://www.youtube.com/watch?v=76m0AXh_Q5Y',
    url_imagen: 'http://basaho.com/cdn/shop/articles/Acro_yoga_1.1_1200x1200.jpg?v=1708350035',
    descripcion: 'Una lavadora clásica que implica una rotación completa del volador alrededor de las piernas de la base.',
    narrativa_detallada: `
**Inicio:**
**pose:lb-7**: El volador se estabiliza sentado sobre los pies de la base, piernas abiertas, manos conectadas para mantener control y comunicación.

**Desarrollo (La Lavadora):**
Entrada al giro: El volador se inclina hacia un lado. La base baja la pierna de ese lado y sube la otra, guiando la cadera del volador hacia la rotación.
Transición a **pose:lb-back-bird**: El volador se extiende hacia atrás, apoyado en las piernas de la base. Aquí se abre el pecho y se alinea la cadera con las piernas de la base.
Paso por **pose:lb-12**: Con control de manos y empuje de la pierna activa, la base rota al volador lateralmente. El volador mantiene tensión en el core y brazos para controlar la torsión. Este momento crea el efecto de “sacacorchos”.
Transición a **pose:lb-2**: Desde Side Star, el volador se recoge (tuck) y se coloca nuevamente sentado en los pies de la base.

**Regreso:**
Vuelta a **pose:lb-7**: Desde Trono, el volador abre piernas para volver al inicio y reiniciar la lavadora. El ciclo puede repetirse en fluidez.

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
      observador: ["Sigue el flujo de la lavadora.", "Prepárate para intervenir en los puntos de transición clave, como de invertido a sentado."],
    },
  },
  {
    id: 'lb-13',
    nombre: "Rueda de Catalina\n(Catherine's Wheel)",
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-7', 'lb-16', 'lb-reverse-throne'],
    url_video: 'https://www.youtube.com/watch?v=UyqkvT_5Z8c',
    url_imagen: 'https://i.ytimg.com/vi/8h2ZYO5_sYw/maxresdefault.jpg',
    descripcion: 'Una lavadora (washing machine) o transición fluida donde el volador gira alrededor de la base como una rueda.',
     narrativa_detallada: `
**Esta es una secuencia dinámica (**Lavadora (Washing Machine)**), no una postura estática. Comienza en **pose:lb-7** y transita por **pose:lb-16** y **pose:lb-reverse-throne**.

**Inicio:**
1.  Empieza en un **pose:lb-7** estable.
2.  **Transición 1 (a Murciélago):** Desde **pose:lb-7**, el volador se reclina hacia atrás para entrar en **pose:lb-16**, enganchando los pies en las caderas de la base.

**Desarrollo:**
3.  **Transición 2 (Giro):** Desde **pose:lb-16**, el volador suelta un pie (ej. el derecho), y la base lo guía para girar lateralmente. El volador pasa por una posición similar a una estrella lateral colgada. La base usa sus manos para guiar las caderas del volador.
4.  **Transición 3 (a Trono Invertido a Horcajadas):** El volador continúa girando hasta que queda sentado a horcajadas sobre los pies de la base, en la postura **pose:lb-reverse-throne**.
5.  **Continuación:** Desde **pose:lb-reverse-throne**, se puede revertir el movimiento para volver a **pose:lb-16** y luego a **pose:lb-7**, completando el ciclo de la "rueda".

**Culminación:**
*   La secuencia se puede detener en cualquier postura estática (**pose:lb-7**, **pose:lb-16**) y desmontar desde allí como se describe en esas posturas. La comunicación y el **Tempo** constante son claves.
`,
    musculos: { base: ['Core', 'Coordinación', 'Fuerza de piernas'], volador: ['Core', 'Confianza', 'Relajación en movimiento'] },
    calibracion: {
      base: ['Movimientos suaves y controlados', 'Mantén un ritmo constante', 'Anticipa la siguiente posición del volador'],
      volador: ['Mantén la tensión y la forma', 'Confía en el movimiento y fluye con él', 'Respira'],
      observador: ['Observa toda la secuencia', 'Prepárate para intervenir en los puntos de transición clave'],
    },
  },
  {
    id: 'wm-rotisserie',
    nombre: 'Rostisseria\n(Rotisserie)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-front-bird', 'lb-back-bird', 'lb-side-bird'],
    url_video: 'https://www.youtube.com/watch?v=P35KID6vDiM',
    url_imagen: 'https://i.ytimg.com/vi/cbbrJWsSZnY/maxresdefault.jpg',
    descripcion: 'Una lavadora continua en la que el volador gira sobre los pies de la base, pasando por todas las orientaciones (frontal, lateral, de espaldas).',
    narrativa_detallada: `
**Esta lavadora enseña un control exquisito del equilibrio en 360 grados.**

**Inicio:**
1. Comiencen en una postura estable de **pose:lb-front-bird**.

**Desarrollo (La Lavadora):**
2. **De Frontal a Lateral:** La base inicia una rotación con los pies, guiando al volador hacia una posición de **pose:lb-side-bird**. El volador debe mantener su cuerpo en una línea recta y tensa.
3. **De Lateral a Inverso:** La rotación continúa. La base ajusta sus pies desde la cadera y el torso del volador hasta su espalda, mientras el volador completa el giro de 180 grados para aterrizar en **pose:lb-back-bird**.
4. **De Inverso a Lateral (otro lado):** La base continúa la rotación en la misma dirección, llevando al volador a la posición de **pose:lb-side-bird** en el otro lado.
5. **De Lateral a Frontal:** La rotación se completa cuando la base guía al volador de vuelta a la posición inicial de **pose:lb-front-bird**.

**Culminación:**
* El ciclo puede continuar fluidamente. Para salir, deténganse en **pose:lb-front-bird** o **pose:lb-back-bird** y desmonten de la forma habitual.`,
    musculos: {
      base: ['Control preciso de los pies', 'Core', 'Resistencia'],
      volador: ['Core muy fuerte', 'Conciencia corporal completa', 'Habilidad para mantener la línea en todos los planos'],
    },
    calibracion: {
      base: ['Tus pies actúan como un plato giratorio.', 'Mantén un punto de presión constante y permite que el volador gire sobre él.', 'Ajusta la posición de tus pies para seguir el centro de gravedad del volador.'],
      volador: ['Tu cuerpo es un lápiz que gira.', 'Mantén la línea y la tensión en todo momento.', 'Confía en los pies de tu base.'],
      observador: ['Sigue el giro constantemente.', 'Vigila la cabeza y la columna del volador.', 'La fluidez es seguridad aquí.'],
    },
  },
  {
    id: 'lb-tick-tock',
    nombre: 'Tick-Tock\n(Tick-Tock)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-9', 'lb-18'],
    url_video: 'https://www.youtube.com/watch?v=zen2HDxr3-Y',
    url_imagen: 'https://skillwell-upload-production.s3.amazonaws.com/videos/247/catherines-wheel-machine.png',
    descripcion: 'Un flujo dinámico que transita entre Estrella y Estrella Invertida, enseñando el control del contrapeso y el equilibrio lateral.',
    narrativa_detallada: `
**Secuencia:**
1.  **Inicio:** Comienza en **pose:lb-9**.
2.  **Transición a Inversa:** La base y el volador rotan, el volador da la espalda a la base y cambian a **pose:lb-18**. El agarre de manos y el pie de la base pueden necesitar cambiar.
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
    id: 'lb-22',
    nombre: 'Ninja Star\n(Ninja Star)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-18', 'lb-12', 'tr-cartwheel-exit'],
    url_video: 'https://www.youtube.com/watch?v=PmP5OegaDKk',
    url_imagen: 'https://i.ytimg.com/vi/koJAiJX30_w/maxresdefault.jpg',
    descripcion: 'Una lavadora icónica y dinámica que fluye a través de diferentes posturas de estrella, requiriendo una comunicación y fluidez impecables.',
     narrativa_detallada: `
**Esta es una **Lavadora (Washing Machine)**, una secuencia fluida, no una postura estática.**

**Inicio:**
La lavadora generalmente comienza desde una **pose:lb-18** estable.
1.  **Base y Volador:** Establezcan una **pose:lb-18** sobre la pierna derecha y mano izquierda de la base.

**Desarrollo (La Lavadora):**
2.  **De Estrella Invertida a Estrella Lateral:** La base y el volador rotan sus caderas. La base baja su pierna derecha y el volador gira para enfrentar a la base, aterrizando en una **pose:lb-12**. El volador ahora se apoya en la mano izquierda y el pie izquierdo de la base. La conexión de manos no se ha soltado.
3.  **De Estrella Lateral a Estrella Invertida (otro lado):** Desde la **pose:lb-12**, el volador continúa la rotación, dando la espalda a la base. La base cambia el soporte a su pierna derecha y mano izquierda para recibir al volador en una **pose:lb-18** en el lado opuesto.
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
    id: 'lb-ninja-star-reverse',
    nombre: 'Ninja Star Inversa\n(Ninja Star Reverse)',
    nivel: 7,
    type: 'L-Basing',
    prerequisites: ['lb-22'],
    url_video: 'https://www.youtube.com/watch?v=PmP5OegaDKk',
    url_imagen: 'https://i.ytimg.com/vi/6cuD9azJ3DI/sddefault.jpg',
    descripcion: 'La versión inversa de la Ninja Star. Enseña a controlar la rotación en la dirección opuesta.',
    narrativa_detallada: `
**Secuencia:**
Esta lavadora sigue la misma trayectoria que la **pose:lb-22**, pero en la dirección opuesta.
1. **Inicio:** Comienza en una **pose:lb-12**.
2. **Transición a Estrella:** El volador continúa la rotación para llegar a una **pose:lb-9** frontal.
3. **Transición a Estrella Lateral (otro lado):** Desde la Estrella, el flujo continúa hacia la **pose:lb-12** del otro lado.
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

    

    















