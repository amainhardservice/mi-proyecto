
import type { Pose } from '@/types';

export const lBasingLevel2Poses: Pose[] = [
  {
    id: 'lb-shoulderstand-on-feet',
    nombre: 'Parada de Hombros sobre Pies\n(Shoulderstand on Feet)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-1', 'lb-shoulderstand-on-shins'],
    url_video: 'https://www.youtube.com/watch?v=JZ2VFYTUYHQ',
    url_imagen: 'https://acroyogabarcelona.com/wp-content/uploads/2019/10/Invertidas-Acroyoga-2-e1571128101753.jpg',
    tags: ['Equilibrio', 'Inversión sobre Hombros'],
    descripcion: 'Una inversión fundamental con agarre de manos, donde el volador se apoya en los pies de la base, desarrollando equilibrio y alineación.',
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
    tags: ['Estática', 'Equilibrio', 'Familia Pájaro'],
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
    url_imagen: 'https://i.ibb.co/VYYttHvQ/Acroyoga-Haltung-Pose042.webp',
    tags: ['Estática', 'Terapéutico', 'Familia Pájaro'],
    descripcion: 'La versión acrobática del Pájaro de Espaldas Terapéutico. El volador mantiene una línea corporal activa y arqueada, sin agarre de manos.',
    narrativa_detallada: `
**Inicio:**
1.  Entra en un **pose:th-back-bird** o **pose:th-whale** con un agarre de manos seguro.
2.  **Base y Volador:** Una vez estables, comuniquen para soltar el agarre.

**Desarrollo:**
*   **Base:** Mantén tus pies firmes en la espalda alta del volador (justo debajo de los omóplatos, nunca en la zona lumbar). El control del equilibrio ahora reside completamente en tus piernas y core.
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
    id: 'lb-back-plank',
    nombre: 'Plancha de Espaldas\n(Back Plank)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-1'],
    url_imagen: 'https://i.ibb.co/G4vhkF03/back-plank.jpg',
    tags: ['Estática', 'Acondicionamiento', 'Core'],
    descripcion: 'Postura de acondicionamiento donde el volador mantiene una plancha supina sobre los pies de la base, fortaleciendo el core y la cadena posterior.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** Acuéstate y levanta las piernas, como para un **pose:lb-1**. Toma las manos del volador.
2.  **Volador:** De espaldas a la base, coloca la parte posterior de tus hombros sobre los pies de la base.
3.  **Base:** Extiende las piernas para levantar al volador.

**Desarrollo:**
*   **Base:** Mantén una plataforma de pies estable y las piernas fuertes.
*   **Volador:** Activa toda tu cadena posterior (espalda, glúteos, isquiotibiales) para mantener una línea recta. Evita que la cadera caiga.

**Culminación:**
1.  **Base:** Dobla las rodillas para bajar al volador con control.
2.  **Volador:** Aterriza de pie.`,
    musculos: {
      base: ["Piernas", "Core"],
      volador: ["Cadena posterior (espalda, glúteos, isquiotibiales)", "Core"],
    },
    calibracion: {
      base: ["Ofrece una plataforma estable.", "Comunica sobre la alineación."],
      volador: ["Mantén el cuerpo como una tabla rígida.", "No dejes que la cadera se hunda."],
      observador: ["Vigila la línea corporal del volador."],
    },
  },
  {
    id: 'lb-reverse-bird',
    nombre: 'Pájaro Reverso\n(Reverse Bird)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-front-bird'],
    url_imagen: 'https://i.ibb.co/vWNhtcN/Acroyoga-Haltung-Pose006.webp',
    gallery_images: ['https://i.ytimg.com/vi/nZk8rZ1cG8c/maxresdefault.jpg'],
    tags: ['Estática', 'Familia Pájaro'],
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
    tags: ['Terapéutico', 'Familia Pájaro'],
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
    tags: ['Estática', 'Fundamental', 'Familia Trono'],
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
    url_imagen: 'https://i.ibb.co/nqjPYrg6/image.png',
    gallery_images: ['https://as2.ftcdn.net/jpg/02/09/95/21/1000_F_209952154_Z70YdOc791roBDUpRbE2iRCvQv73mWMB.jpg'],
    tags: ['Estática', 'Familia Trono'],
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
    url_imagen: 'https://i.ibb.co/qYFbzMr3/young-caucasian-male-female-couple-practicing-acrobatic-yoga-white-gym-mats-pose-reverse-throne-1193.jpg',
    tags: ['Estática', 'Familia Trono'],
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
    tags: ['Estática', 'Inversión', 'Familia Murciélago'],
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
    tags: ['Estática', 'Inversión', 'Familia Murciélago'],
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
    url_video: 'https://www.youtube.com/watch?v=JZ2VFYTUYHQ',
    url_imagen: 'https://i.ytimg.com/vi/T81646R4btk/maxresdefault.jpg',
    tags: ['Equilibrio', 'Inversión sobre Hombros'],
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
    nombre: 'Parada de Hombros (sin manos)\n(Shoulderstand)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-shoulderstand-on-feet'],
    url_video: 'https://www.youtube.com/watch?v=usu93tTl1HQ',
    url_imagen: 'https://i.ibb.co/bjSjdv0L/acroyoga-shoulder-stand-a3bc4fec69.webp',
    tags: ['Equilibrio', 'Inversión sobre Hombros'],
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
    tags: ['Equilibrio', 'Inversión sobre Hombros'],
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
    id: 'lb-reverse-front-plank',
    nombre: 'Plancha Frontal Inversa\n(Reverse Front Plank)',
    nivel: 2,
    type: 'L-Basing',
    prerequisites: ['lb-10'],
    tags: ['Inversión sobre Manos', 'Avanzado'],
    url_imagen: 'https://www.christiangieger.de/wp-content/uploads/2021/06/Acroyoga-Haltung-Pose007.jpg',
    descripcion: 'Una variación de parada de manos donde la base sostiene al volador en una plancha, pero el volador está orientado en dirección opuesta. Requiere una inmensa fuerza en los hombros de la base y confianza del volador.',
    narrativa_detallada: `
**Esta es una variación avanzada de la parada de manos sobre manos (H2H) que cambia la dinámica de la mirada y el equilibrio.**

**Inicio:**
Se entra comúnmente desde una **pose:lb-10** estable.
1. **Base y Volador:** Desde una parada de manos estable, el volador comienza una rotación controlada de 180 grados, como si hiciera un "pirouette" en el aire.
2. **Base:** Sigue y apoya esta rotación con microajustes en las manos y los brazos, manteniendo la estabilidad de la plataforma.

**Desarrollo:**
* **Base:** La carga en tus hombros cambia. Debes mantener una estructura de brazos increíblemente sólida para soportar al volador en esta nueva orientación. La comunicación no verbal es clave.
* **Volador:** Mantén una línea de parada de manos perfecta durante la rotación. Una vez en la posición inversa, tu mirada ya no está en la base, lo que requiere una confianza y propiocepción extremas. Mantén el core súper activo.

**Culminación:**
* La salida más segura es revertir el movimiento, rotando de vuelta a una **pose:lb-10** estándar antes de bajar.
* Una salida controlada y comunicada es esencial.
`,
    musculos: {
      base: ['Hombros', 'Pecho', 'Core', 'Estabilizadores de muñeca'],
      volador: ['Core', 'Hombros', 'Propiocepción', 'Confianza'],
    },
    calibracion: {
      base: ['Mantén los brazos como pilares de acero.', 'Anticipa el cambio de peso durante la rotación.', 'Respira y mantén la calma.'],
      volador: ['Tu línea debe ser impecable.', 'Gira desde el core, no desde los hombros.', 'Confía en el agarre y la estabilidad de tu base.'],
      observador: ['Observador de nivel élite indispensable.', 'La prioridad es proteger la cabeza y el cuello de ambos.', 'Sabe cómo guiar una salida segura de una postura H2H compleja.'],
    },
  },
];

    
