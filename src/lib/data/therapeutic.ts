
import type { Pose } from '@/types';

export const therapeuticPoses: Pose[] = [
  {
    id: 'th-sofa',
    nombre: 'Sofá\n(Couch)',
    nivel: 11,
    type: 'Therapeutic',
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
    id: 'th-folded-leaf',
    nombre: 'Plegaria Invertida\n(Folded Leaf)',
    nivel: 11,
    type: 'Therapeutic',
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
    id: 'th-back-bird',
    nombre: 'Pájaro Inverso Terapéutico\n(Therapeutic Back Bird)',
    nivel: 11,
    type: 'Therapeutic',
    prerequisites: ['lb-1', 'th-folded-leaf'],
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
    id: 'th-whale',
    nombre: 'Ballena\n(Whale)',
    nivel: 11,
    type: 'Therapeutic',
    prerequisites: ['th-back-bird'],
    url_video: 'https://www.youtube.com/watch?v=4WMAZ67brUc',
    url_imagen: 'https://cdn.yogajournal.com/wp-content/uploads/2015/03/acro-high-flying-whale.jpg',
    descripcion: 'Una versión más avanzada y profunda del pájaro inverso terapéutico, donde la base extiende completamente las piernas, elevando más al volador para un estiramiento máximo.',
     narrativa_detallada: `
**Inicio:**
La entrada es idéntica al **Pájaro Inverso Terapéutico (Therapeutic Back Bird)**.
1.  **Base y Volador:** Establezcan un **Pájaro Inverso Terapéutico (Therapeutic Back Bird)** estable, con las rodillas de la base flexionadas.
2.  **Base:** Comunica que vas a extender las piernas. Lentamente y con mucho control, comienza a estirar tus piernas hacia el cielo.
3.  **Volador:** Mantén la confianza y la comunicación. Sentirás que el arco se profundiza.

**Desarrollo:**
*   **Base:** Requiere más flexibilidad en los isquiotibiales. Mantén las piernas lo más rectas posible. El agarre de manos es crucial para la estabilidad.
*   **Volador:** La comunicación es vital. Indica si el estiramiento es demasiado. Mantén el cuerpo relajado pero con una ligera activación para no perder la forma. Disfruta de la sensación de volar más alto.
*   **Puntos de Contacto:** Idéntico al **Pájaro Inverso Terapéutico**, pero la dinámica de fuerzas cambia con la altura.

**Culminación:**
1.  **Base:** Para salir, flexiona las rodillas de manera controlada para volver a la altura del **Pájaro Inverso Terapéutico (Therapeutic Back Bird)** normal.
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
];
