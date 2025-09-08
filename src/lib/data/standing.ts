
import type { Pose } from '@/types';

export const standingPoses: Pose[] = [
  // Standing Acro: NIVEL 14 (antes 11)
  {
    id: 'st-high-bird',
    nombre: 'Pájaro Alto\n(High Bird)',
    nivel: 14,
    type: 'Standing',
    prerequisites: ['lb-1'],
    url_video: 'https://www.youtube.com/watch?v=eWu3BxMF1Bg',
    descripcion: 'Una postura de Acro de Pie (Standing Acro) fundamental. Es una transición desde L-Basing hacia acrobacias de pie.',
    narrativa_detallada: `
**Esta postura es el puente principal hacia el Standing Acro.**

**Inicio:**
1. **Base:** De pie, con una postura sólida, pies a la anchura de los hombros.
2. **Volador:** De pie, frente a la base. Coloca tus manos en los hombros de la base.
3. **Entrada:** El volador da un pequeño salto, llevando las rodillas al pecho, mientras la base se agacha ligeramente para recibir las caderas del volador en sus manos. La base coloca sus manos como un "asiento" debajo de la cadera del volador.

**Desarrollo:**
* **Base:** Levántate usando la fuerza de tus piernas, no de tu espalda. Extiende los brazos, levantando al volador sobre tu cabeza. Encuentra el **Apilamiento (Stacking)**: las caderas del volador sobre tus hombros, y tus hombros sobre tus caderas.
* **Volador:** Mantén una línea corporal fuerte (**Hollow Body**), similar a un **pose:lb-front-bird**. Mantén el core activo para ayudar a la base a encontrar el equilibrio.

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
  
  // Standing Acro: NIVEL 15 (antes 12)
  {
    id: 'st-monkey',
    nombre: 'Mono\n(Monkey)',
    nivel: 15,
    type: 'Standing',
    prerequisites: ['st-high-bird'],
    url_video: 'https://www.youtube.com/watch?v=ALaWGbiCIZA',
    descripcion: 'Una transición clásica de standing acro donde el volador se mueve entre los hombros y los pies de la base.',
    narrativa_detallada: `
**Inicio:**
1.  **Base:** De pie, con el volador sentado en sus hombros.
2.  **Transición:** El volador se inclina hacia adelante, la base lo atrapa en **pose:st-high-bird**.
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
    id: 'st-f2h',
    nombre: 'Pie a Mano\n(Foot-to-Hand)',
    nivel: 15,
    type: 'Standing',
    prerequisites: ['st-high-bird', 'lb-14'],
    url_video: 'https://www.youtube.com/watch?v=Fj3cW9ycttY',
    descripcion: 'Una postura icónica de Acro de Pie. La base sostiene los pies del volador en una parada de manos.',
    narrativa_detallada: `
**Esta es una habilidad avanzada de Standing Acro.**

**Inicio:**
Se puede entrar desde el suelo o desde **pose:st-high-bird**.
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

  // Standing Acro: NIVEL 16 (antes 13)
  {
    id: 'st-h2h',
    nombre: 'Mano a Mano\n(H2H)',
    nivel: 16,
    type: 'Standing',
    prerequisites: ['st-f2h', 'lb-h2h', 'st-monkey'],
    url_video: 'https://www.youtube.com/watch?v=r-g6qvL8IjM',
    descripcion: 'El pináculo del Standing Acro. La base sostiene al volador en una parada de manos, mano con mano.',
    narrativa_detallada: `
**El pináculo de la confianza y el equilibrio en pareja.**

**Inicio:**
La entrada más común es desde **pose:st-high-bird**.
1. **Base y Volador:** En una posición estable de **pose:st-high-bird**, el volador baja la cabeza hacia la base.
2. **Conexión:** Base y volador conectan su agarre **Hand-to-Hand grip**.
3.  **Transición:** El volador lleva las caderas hacia arriba, entrando en una parada de manos mientras la base ajusta su equilibrio para sostener la postura.

**Desarrollo:**
* **Base:** El **Apilamiento (Stacking)** es perfecto: manos sobre codos, hombros, caderas y pies. La base debe estar inmóvil.
* **Volador:** La línea de parada de manos debe ser perfecta. El más mínimo movimiento afecta a la base.

**Culminación:**
* Se sale de la misma manera que se entró, revirtiendo el movimiento para volver a **pose:st-high-bird** y luego al suelo.
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
    id: 'st-two-high',
    nombre: 'Dos Alturas\n(Two-High)',
    nivel: 16,
    type: 'Standing',
    prerequisites: ['st-high-bird'],
    url_video: 'https://www.youtube.com/watch?v=z3xsHfUFXH8',
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
