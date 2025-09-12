
import type { Pose } from '@/types';

export const lBasingLevel7Poses: Pose[] = [
  {
    id: 'wm-four-step',
    nombre: 'Cuatro Pasos\n(Four-Step)',
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
    prerequisites: ['lb-front-bird', 'lb-back-bird', 'lb-side-bird'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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
*   La secuencia se puede detener en cualquier postura estática (**pose:lb-7**, **pose:lb-16**) y desmontar desde allí como se describe en esas posturas. El **Tempo** y la comunicación no verbal son cruciales.
`,
    musculos: { base: ['Core', 'Coordinación', 'Fuerza de piernas'], volador: ['Core', 'Confianza', 'Relajación en movimiento'] },
    calibracion: {
      base: ['Movimientos suaves y controlados', 'Mantén un ritmo constante', 'Anticipa la siguiente posición del volador'],
      volador: ['Mantén la tensión y la forma', 'Fluye con el movimiento y confía', 'Respira'],
      observador: ['Observa toda la secuencia', 'Prepárate para intervenir en los puntos de transición clave'],
    },
  },
  {
    id: 'wm-rotisserie',
    nombre: 'Rostisseria\n(Rotisserie)',
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
    prerequisites: ['lb-18', 'lb-12', 'tr-cartwheel-exit'],
    url_video: 'https://www.youtube.com/watch?v=PmP5OegaDKk',
    gallery_videos: ['https://www.youtube.com/watch?v=jVbrS9cNy7o'],
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
    nivel: 8,
    type: 'Washing Machine',
    tags: ['Lavadora'],
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

    
