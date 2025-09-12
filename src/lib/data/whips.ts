
import type { Pose } from '@/types';

export const whipPoses: Pose[] = [
  // --- WHIPS BÁSICOS: NIVEL 12 ---
  {
    id: 'wh-01',
    nombre: 'Látigo a Pájaro\n(Whip to Bird)',
    nivel: 12,
    type: 'Whip',
    tags: ['Whip', 'Familia Pájaro'],
    prerequisites: ['lb-1'],
    descripcion: 'Entrada dinámica y suave al Pájaro Frontal. El volador siente la energía del "látigo" por primera vez.',
    narrativa_detallada: `
**Esta es la introducción al mundo de los Whips. La clave es la fluidez, no la fuerza.**

**Inicio:**
1.  **Base:** Acostado, con las rodillas dobladas y los pies en el suelo.
2.  **Volador:** De pie, de cara a la base. Toman un agarre de manos de contrapeso.
3.  **El "Látigo":** El volador se inclina hacia atrás, creando tensión. La base utiliza esta tensión para guiar al volador en un movimiento circular hacia arriba y adelante.

**Desarrollo:**
*   **Base:** No levantes con los brazos. Usa la tensión del contrapeso y el movimiento de tus piernas (de flexionadas a extendidas) para generar el impulso. Guía la cadera del volador con tus pies para que aterrice suavemente en **pose:lb-front-bird**.
*   **Volador:** Mantén el cuerpo en una línea tensa y arqueada durante el "látigo". No saltes. Déjate guiar por la energía que genera la base. Aterriza en una línea de **Pájaro** fuerte.

**Culminación:**
*   Aterrizaje suave y controlado en **pose:lb-front-bird** sin manos. Desde ahí, se puede desmontar de la forma habitual.`,
    musculos: {
      base: ["Core", "Coordinación", "Control de piernas"],
      volador: ["Core", "Confianza", "Mantener la línea"],
    },
    calibracion: {
      base: ["Usa el contrapeso, no la fuerza bruta.", "El movimiento es circular, no lineal.", "Tus pies 'atrapan' las caderas del volador."],
      volador: ["Confía en la tensión.", "Mantén los brazos rectos pero no rígidos.", "Sé un péndulo, no una roca."],
      observador: ["Observa la trayectoria del volador.", "Asegura un aterrizaje suave en las caderas."],
    },
  },
  {
    id: 'wh-02',
    nombre: 'Látigo a Trono\n(Whip to Throne)',
    nivel: 12,
    type: 'Whip',
    tags: ['Whip', 'Familia Trono'],
    prerequisites: ['wh-01', 'lb-2'],
    descripcion: 'Un whip que termina en una postura sentada. Enseña timing, confianza y control de la dirección en el aterrizaje.',
    narrativa_detallada: `
**Este whip requiere que el volador cambie de forma en el aire.**

**Inicio:**
1.  Idéntico al inicio de **pose:wh-01**. Agarre de manos, tensión de contrapeso.

**Desarrollo:**
*   **Base:** El movimiento del "látigo" es similar, pero debes prepararte para recibir al volador en **pose:lb-2**. Esto significa que tus pies deben apuntar a sus glúteos, no a sus caderas.
*   **Volador:** En el punto más alto del whip, cuando sientas la ingravidez, recoge tus rodillas hacia el pecho (**Tuck (Recogido/Agrupado)**) y prepárate para una posición sentada.
*   **Aterrizaje:** La base recibe al volador en sus pies, en la postura de **pose:lb-2**.

**Culminación:**
*   Desde **pose:lb-2**, se puede desmontar de forma segura o continuar con otras transiciones.`,
    musculos: {
      base: ["Precisión en la recepción", "Control del tempo"],
      volador: ["Control del core para el cambio de forma", "Conciencia corporal"],
    },
    calibracion: {
      base: ["Anticipa el 'Tuck' del volador.", "Tus pies deben ser un blanco claro y estable."],
      volador: ["El cambio de forma es rápido y en el punto más alto.", "Apunta a sentarte suavemente, no a caer."],
      observador: ["Vigila que el aterrizaje sea en los pies de la base y no en la cara.", "Asiste si la rotación es incompleta."],
    },
  },
  {
    id: 'wh-03',
    nombre: 'Látigo a Pájaro de Espaldas\n(Whip to Back Bird)',
    nivel: 12,
    type: 'Whip',
    tags: ['Whip', 'Familia Pájaro'],
    prerequisites: ['wh-01', 'lb-back-bird'],
    descripcion: 'Un whip con rotación de 180°. Requiere mayor conciencia corporal, apertura de pecho y control en la caída.',
    narrativa_detallada: `
**El primer whip con rotación completa. La confianza es clave.**

**Inicio:**
1.  **Volador:** De espaldas a la base. Toman un agarre de manos cruzado.
2.  **El "Látigo":** El volador se inclina hacia adelante, creando tensión. La base tira suavemente para iniciar el movimiento.

**Desarrollo:**
*   **Base:** Guía al volador en un arco hacia arriba y sobre ti. Prepárate para recibir su espalda alta en tus pies.
*   **Volador:** Déjate llevar por el tirón. Arquea la espalda y abre el pecho mientras vuelas por encima de la base.
*   **Aterrizaje:** La base recibe al volador en **pose:lb-back-bird**, absorbiendo el impacto con las rodillas.

**Culminación:**
*   Desde **pose:lb-back-bird**, se puede transicionar o desmontar de la forma habitual.`,
    musculos: {
      base: ["Control de la trayectoria", "Fuerza de brazos y core"],
      volador: ["Flexibilidad de espalda", "Confianza en la inversión"],
    },
    calibracion: {
      base: ["El tirón debe ser suave y constante.", "Guía al volador en un arco claro.", "Sé una plataforma de aterrizaje sólida."],
      volador: ["No saltes, déjate llevar.", "Mantén los ojos abiertos el mayor tiempo posible.", "Respira para abrir el pecho."],
      observador: ["Vigila la cabeza del volador.", "Asegura que la espalda del volador aterrice en los pies de la base."],
    },
  },
  // --- WHIPS INTERMEDIOS: NIVEL 13 ---
  {
    id: 'wh-04',
    nombre: 'Látigo a Trono a Horcajadas\n(Whip to Straddle Throne)',
    nivel: 13,
    type: 'Whip',
    tags: ['Whip', 'Familia Trono'],
    prerequisites: ['wh-02', 'lb-7'],
    descripcion: 'Añade complejidad al Whip to Throne con una apertura de piernas y mayor control de caderas.',
    narrativa_detallada: `
**Una progresión natural del **pose:wh-02**.**

**Inicio:**
1.  Igual que **pose:wh-01**.

**Desarrollo:**
*   **Base:** El lanzamiento es similar, pero el objetivo de tus pies es la parte interna de los muslos del volador.
*   **Volador:** En el punto más alto, en lugar de un 'Tuck', abre las piernas en un **Straddle (A horcajadas/Abierto)**. Mantén el torso erguido.
*   **Aterrizaje:** La base recibe al volador en **pose:lb-7**.

**Culminación:**
*   Postura muy versátil para entrar en lavadoras o transiciones a otras posturas como **pose:lb-16**.`,
    musculos: {
      base: ["Precisión en la recepción"],
      volador: ["Flexibilidad y control de cadera", "Core"],
    },
    calibracion: {
      base: ["La plataforma de tus pies debe ser ancha y estable.", "Guía al volador para que no se siente demasiado cerca o lejos."],
      volador: ["Mantén el straddle activo.", "Usa el core para mantener el torso vertical en el aterrizaje."],
      observador: ["Vigila el equilibrio lateral en la recepción."],
    },
  },
  {
    id: 'wh-05',
    nombre: 'Látigo a Murciélago\n(Whip to Bat)',
    nivel: 13,
    type: 'Whip',
    tags: ['Whip', 'Familia Murciélago'],
    prerequisites: ['wh-04', 'lb-16'],
    descripcion: 'Un whip más invertido que exige un gran control de la base en la recepción y del volador al enganchar los pies.',
    narrativa_detallada: `
**Este whip requiere una transición fluida a una inversión colgada.**

**Inicio:**
1.  Desde un **pose:lb-7** estable.

**Desarrollo:**
*   **Base y Volador:** Toman un agarre de manos.
*   **Volador:** Se inclina hacia atrás, pasando por **pose:lb-24**.
*   **El Látigo:** La base utiliza un impulso de piernas para lanzar al volador hacia arriba.
*   **Volador:** En el aire, recoge las piernas y engancha los pies en las caderas de la base para aterrizar en **pose:lb-16**.

**Culminación:**
*   Desde Murciélago, se puede revertir el movimiento para volver a **pose:lb-7**.`,
    musculos: {
      base: ["Fuerza de piernas para el impulso", "Core para estabilizar la recepción"],
      volador: ["Fuerza y agilidad de piernas para enganchar", "Conciencia corporal invertida"],
    },
    calibracion: {
      base: ["El impulso debe ser controlado, no un lanzamiento.", "Prepárate para recibir el peso en la posición de Murciélago."],
      volador: ["El movimiento de enganche de los pies debe ser rápido y preciso.", "Confía en el agarre de manos durante la transición."],
      observador: ["Observa la cabeza del volador durante la inversión.", "Asegura que el enganche de los pies sea seguro."],
    },
  },
  {
    id: 'wh-06',
    nombre: 'Látigo a Pájaro sobre Manos\n(Whip to Handbird)',
    nivel: 13,
    type: 'Whip',
    tags: ['Whip', 'Familia Pájaro', 'Inversión sobre Manos'],
    prerequisites: ['wh-01', 'lb-10'],
    url_video: 'https://www.youtube.com/watch?v=S2XCtQrdeFQ',
    descripcion: 'Progresión clave hacia H2H dinámico. Requiere timing, confianza y una técnica de látigo muy refinada.',
    narrativa_detallada: `
**Un gran paso hacia los whips avanzados. Aquí, la base recibe con las manos.**

**Inicio:**
1.  Similar a **pose:wh-01**, pero la base prepara sus brazos rectos hacia el cielo, como pilares.

**Desarrollo:**
*   **Base:** El "látigo" se genera de la misma manera, pero en lugar de recibir con los pies, debes "atrapar" los hombros del volador con tus manos. El timing es crucial. Debes ser una plataforma sólida e inmóvil.
*   **Volador:** El movimiento del látigo es el mismo, pero debes apuntar tus hombros a las manos de la base. Aterriza en una línea de **pose:lb-10** perfecta.

**Culminación:**
*   Desde **pose:lb-10**, la base puede bajar al volador al suelo de forma controlada.`,
    musculos: {
      base: ["Fuerza de hombros y pecho", "Timing", "Apilamiento"],
      volador: ["Core muy fuerte", "Línea perfecta", "Confianza absoluta"],
    },
    calibracion: {
      base: ["Tus brazos deben estar apilados y listos.", "Absorbe el impacto con tu core, no doblando los codos.", "La conexión con el suelo es tu estabilidad."],
      volador: ["Apunta con precisión.", "Mantén tu línea de plancha desde el momento en que despegas.", "Aterriza con tensión, no relajado."],
      observador: ["Observador experimentado. Tu objetivo es la cadera del volador.", "Prepárate para una recepción imperfecta."],
    },
  },
  // --- WHIPS AVANZADOS: NIVEL 14 ---
  {
    id: 'wh-07',
    nombre: 'Látigo a Mano a Mano\n(Whip to H2H)',
    nivel: 14,
    type: 'Whip',
    tags: ['Whip', 'Inversión sobre Manos'],
    prerequisites: ['wh-06', 'lb-h2h'],
    descripcion: 'Control total del látigo. El volador es lanzado y aterriza en un equilibrio de parada de manos sobre las manos de la base.',
    narrativa_detallada: `
**El pináculo de los whips de L-Basing. Combina la dinámica del látigo con el equilibrio estático del H2H.**

**Inicio:**
1.  Desde un **pose:lb-10** estable.

**Desarrollo:**
*   **Base:** Inicia un pequeño rebote o impulso para lanzar al volador hacia arriba.
*   **Volador:** Usa el impulso para flotar hacia una parada de manos vertical.
*   **Base y Volador:** Mantienen el agarre H2H durante toda la transición. La base extiende los brazos completamente para recibir la parada de manos.

**Culminación:**
*   Desde **pose:lb-h2h**, la salida más segura es revertir el movimiento, bajando de nuevo a **pose:lb-10** y luego al suelo.`,
    musculos: {
      base: ["Fuerza y equilibrio de todo el cuerpo"],
      volador: ["Control de parada de manos", "Core", "Confianza"],
    },
    calibracion: {
      base: ["El impulso debe ser mínimo y controlado.", "Encuentra el apilamiento perfecto.", "La respiración es clave."],
      volador: ["Flota, no saltes.", "Encuentra tu línea vertical rápidamente.", "La confianza en el agarre es total."],
      observador: ["Observador de nivel élite.", "Entiende la dinámica del H2H y los whips.", "La seguridad es la máxima prioridad."],
    },
  },
  {
    id: 'wh-08',
    nombre: 'Látigo a Pie a Mano\n(Whip to Foot-to-Hand)',
    nivel: 14,
    type: 'Whip',
    tags: ['Whip', 'Inversión sobre Manos'],
    prerequisites: ['wh-07', 'lb-14'],
    descripcion: 'Una transición aún más vertical que mezcla la energía del whip con la precisión del F2H.',
    narrativa_detallada: `
**Una variación extremadamente avanzada del whip a una inversión.**

**Inicio:**
1.  La entrada suele ser desde una posición de **pose:lb-10**.

**Desarrollo:**
*   **Base:** Lanza al volador hacia arriba. En el aire, la base suelta el agarre de manos y atrapa los pies del volador.
*   **Volador:** En el punto más alto, transiciona de una parada de manos a colocar los pies en las manos de la base.
*   **Aterrizaje:** La base recibe al volador en una parada de manos de **pose:lb-14**.

**Culminación:**
*   La salida es compleja y debe ser practicada con mucho cuidado, generalmente bajando a una posición sentada o a los hombros de la base.`,
    musculos: {
      base: ["Fuerza de agarre", "Timing", "Precisión"],
      volador: ["Conciencia espacial", "Agilidad", "Control del core"],
    },
    calibracion: {
      base: ["El cambio de manos a pies debe ser instantáneo y preciso.", "Confía en tu capacidad para atrapar."],
      volador: ["Debes saber exactamente dónde colocar tus pies.", "Mantén la línea durante el cambio."],
      observador: ["Observador muy experimentado.", "Anticipa la complejidad de la transición."],
    },
  },
  {
    id: 'wh-09',
    nombre: 'Combo de Látigos\n(Whip Combo / Whip Machine)',
    nivel: 14,
    type: 'Whip',
    tags: ['Whip', 'Lavadora'],
    prerequisites: ['wh-01', 'wh-02', 'wh-03', 'wh-04'],
    descripcion: 'Secuencias fluidas que encadenan varios whips entre diferentes posturas sin detenerse.',
    narrativa_detallada: `
**Esto no es una sola postura, sino la habilidad de conectar múltiples whips en un flujo continuo.**

**Ejemplo de Combo:**
1.  **pose:wh-02**
2.  Desde **pose:lb-2**, transición a **pose:lb-7**
3.  Desde **pose:lb-7**, transición a **pose:lb-16**
4.  Desde **pose:lb-16**, un impulso para volver a **pose:lb-7**
5.  Desde **pose:lb-7**, un **pose:wh-01**
6.  Desmontar desde Pájaro.

**Desarrollo:**
*   La clave es la fluidez, el ritmo y la comunicación no verbal. Cada aterrizaje es la preparación para el siguiente lanzamiento.

**Culminación:**
*   La secuencia termina cuando ambos deciden detenerse en una postura estable.`,
    musculos: {
      base: ["Resistencia", "Ritmo", "Repertorio de transiciones"],
      volador: ["Resistencia", "Adaptabilidad", "Confianza en el flujo"],
    },
    calibracion: {
      base: ["Piensa varios movimientos por adelantado.", "Mantén la energía en movimiento.", "Tu respiración marca el ritmo."],
      volador: ["No pienses, siente.", "Confía en el ritmo de tu base.", "Disfruta del vuelo."],
      observador: ["Observa el flujo, no las posturas individuales.", "Anticipa la fatiga.", "Asegura que el espacio esté despejado."],
    },
  },
];
