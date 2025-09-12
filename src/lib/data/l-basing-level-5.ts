
import type { Pose } from '@/types';

export const lBasingLevel5Poses: Pose[] = [
  {
    id: 'lb-9',
    nombre: 'Equilibrio: Estrella\n(Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-shoulderstand-on-feet', 'lb-7', 'lb-side-bird'],
    url_video: 'https://www.youtube.com/watch?v=ydOM4EbhJz0',
    url_imagen: 'https://i.ibb.co/zWcPm0sC/estrella.jpg',
    tags: ['Equilibrio', 'Familia Estrella'],
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
    id: 'lb-18',
    nombre: 'Equilibrio: Estrella Invertida\n(Reverse Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-9'],
    url_video: 'https://www.youtube.com/watch?v=vccFNDI6y74',
    url_imagen: 'https://i.ibb.co/FNN3mD9/Reverse-Star.jpg',
    tags: ['Equilibrio', 'Familia Estrella'],
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
    id: 'lb-12',
    nombre: 'Equilibrio: Estrella Lateral\n(Side Star)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-9'],
    url_video: 'https://www.youtube.com/watch?v=KUVBFrATMQM',
    url_imagen: 'https://i.ibb.co/bgKX81jS/gettyimages-638275840-2048x2048-1.jpg',
    tags: ['Equilibrio', 'Familia Estrella', 'Familia Side Star'],
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
    url_imagen: 'https://akro.dk/wp-content/uploads/2019/04/Linsidestar-1280x1280.jpg',
    gallery_images: ['https://i.ytimg.com/vi/rZkWVVZhwc4/maxresdefault.jpg'],
    tags: ['Equilibrio', 'Familia Estrella', 'Familia Side Star'],
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
    url_imagen: 'https://akro.dk/wp-content/uploads/2019/04/Loutsidestar.jpg',
    gallery_images: ['https://i.ibb.co/JD8Y3xp/acroyoga-outside-side-star-4cd0502384.webp'],
    tags: ['Equilibrio', 'Familia Estrella', 'Familia Side Star'],
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
    url_imagen: 'https://akro.dk/wp-content/uploads/2019/04/Lreverseinsidestar.jpg',
    gallery_images: ['https://i.ibb.co/R47B2Q8X/acroyoga-reverse-inside-star-df01b7aeb9.webp'],
    tags: ['Equilibrio', 'Familia Estrella', 'Familia Side Star'],
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
    prerequisites: ['lb-reverse-inside-star'],
    url_imagen: 'https://akro.dk/wp-content/uploads/2019/04/Lreverseoutsidestar.jpg',
    gallery_images: ['https://i.ibb.co/T6v24Cj/acroyoga-reverse-outside-star-fdf3eef8ab.webp'],
    tags: ['Equilibrio', 'Familia Estrella', 'Familia Side Star'],
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
    id: 'lb-10',
    nombre: 'Inversión: Plancha sobre Manos\n(Free Bird)',
    nivel: 5,
    type: 'L-Basing',
    prerequisites: ['lb-15', 'lb-1'],
    url_video: 'https://www.youtube.com/watch?v=LQacjmL6c1w',
    url_imagen: 'https://hydratewithcore.com/wp-content/uploads/2020/06/forblog1-1030x687_large.jpg',
    tags: ['Inversión sobre Manos'],
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
    tags: ['Inversión sobre Manos'],
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
    url_imagen: 'https://i.ibb.co/G3bKDg7L/Acroyoga-Haltung-Pose091.webp',
    tags: ['Inversión sobre Manos'],
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
    tags: ['Inversión sobre Manos'],
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
    tags: ['Inversión sobre Manos'],
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
];

    
