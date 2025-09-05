
import type { Pose } from '@/types';

export const icarianPoses: Pose[] = [
  // Icarian Games: NIVEL 6 (antes 5)
  {
    id: 'ic-27',
    nombre: 'Pop: Trono a Trono\n(Throne-to-Throne Pop)',
    nivel: 6,
    type: 'Icarian',
    prerequisites: ['lb-2'],
    url_video: 'https://www.youtube.com/watch?v=NTFFY2wm77o',
    descripcion: 'El ejercicio fundamental de Icarian. La base usa solo los pies para lanzar y recibir al volador en la misma posición de Trono, sin usar las manos.',
    narrativa_detallada: `
**¡Bienvenido a Icarian! Aquí la base usa solo los pies.**

**Inicio:**
1.  **Base y Volador:** Comiencen en una postura de **pose:lb-2** muy baja, con las rodillas de la base bien flexionadas cerca de su pecho. No hay agarre de manos.
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
    id: 'ic-28',
    nombre: 'Pop: Trono a Pájaro Frontal\n(Throne-to-Front-Bird Pop)',
    nivel: 6,
    type: 'Icarian',
    prerequisites: ['ic-27'],
    url_video: 'https://www.youtube.com/watch?v=O2Fsx4aDX1s',
    descripcion: 'El volador es lanzado desde Trono y cambia de forma en el aire para ser recibido en Pájaro Frontal.',
    narrativa_detallada: `
**Este ejercicio introduce el cambio de forma en el aire.**

**Inicio:**
1.  **Base y Volador:** Igual que en **pose:ic-27**. Comiencen en un **pose:lb-2** bajo y compacto.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y la Transición):**
*   **Base:** El lanzamiento es idéntico al de **pose:ic-27**. La diferencia está en la recepción. Debes prepararte para recibir al volador en la posición de **pose:lb-front-bird**, moviendo tus pies desde debajo de sus glúteos a sus caderas.
*   **Volador:** En el punto más alto del lanzamiento, cuando sientas la ingravidez, abre rápidamente tu cuerpo desde la posición de **Tuck (Recogido/Agrupado)** a una línea de **Layout / Straight (Recto/Plancha)**. Extiende los brazos y las piernas para crear la forma de **Pájaro Frontal**.
*   **Recepción:** La base recibe los huesos de la cadera del volador en las plantas de sus pies, extendiendo las piernas a 90 grados para estabilizar la postura de **pose:lb-front-bird**.

**Culminación:**
*   Once estable en **pose:lb-front-bird**, se puede desmontar como un Pájaro Frontal normal, o la base puede flexionar las rodillas para recibir al volador de nuevo en **pose:lb-2** para la siguiente repetición.
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
    id: 'ic-29',
    nombre: 'Pop: Pájaro a Horcajadas\n(Bird-to-Straddle Pop)',
    nivel: 6,
    type: 'Icarian',
    prerequisites: ['ic-28'],
    url_video: 'https://www.youtube.com/watch?v=BqUpzbc2uxM',
    descripcion: 'Pop que enseña el control de las caderas y la apertura de piernas en el aire.',
    narrativa_detallada: `
**Este ejercicio refina el cambio de forma en el aire.**

**Inicio:**
1.  **Base y Volador:** Comiencen en una postura de **pose:lb-front-bird** baja y estable.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y la Transición):**
*   **Base:** Lanza verticalmente. Debes prepararte para recibir al volador en **pose:lb-7**, moviendo los pies desde sus caderas hasta la parte interna de sus muslos.
*   **Volador:** En el punto más alto, pasa de una línea recta a una posición sentada con las piernas abiertas (**Straddle**). Mantén el torso erguido.
*   **Recepción:** La base recibe al volador en sus pies, estabilizando la postura de **pose:lb-7**.

**Culminación:**
*   Desde **pose:lb-7**, se puede volver a **pose:lb-front-bird** o desmontar.
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
  
  // Icarian Games: NIVEL 7 (antes 6)
  {
    id: 'ic-31',
    nombre: 'Pop: Pájaro a Pájaro Invertido\n(Bird-to-Reverse-Bird Pop)',
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['ic-28'],
    url_video: 'https://www.youtube.com/watch?v=qa5iG6k3W0s',
    descripcion: 'El volador es lanzado desde Pájaro Frontal y ejecuta un giro de 180° en el aire para ser recibido en Pájaro Invertido.',
    narrativa_detallada: `
**Este es el primer pop con rotación de 180 grados.**

**Inicio:**
1.  **Base y Volador:** Comiencen en **pose:lb-front-bird** bajo y estable.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y el Giro):**
*   **Base:** El lanzamiento es similar a otros pops, pero aquí el 'timing' es aún más crítico. Debes anticipar la rotación del volador y preparar tus pies para recibirlo en la posición de **pose:lb-back-bird-acro** (en su abdomen bajo/caderas).
*   **Volador:** En el punto más alto del lanzamiento, mantén tu cuerpo en **Layout / Straight (Recto/Plancha)** y simultáneamente inicia un giro de 180 grados. Este giro se genera desde el **Core** y los hombros.
*   **Recepción:** La base recibe al volador, ahora de cara a sus pies, absorbiendo el impacto y estabilizando la postura.

**Culminación:**
*   Desde **pose:lb-back-bird-acro**, se puede transicionar a otros pops o desmontar.
`,
    musculos: {
      base: ['Precisión y timing para la recepción en un nuevo punto.'],
      volador: ['Core y oblicuos para la rotación.', 'Mantener la línea durante el giro.'],
    },
    calibracion: {
      base: ['Un buen lanzamiento vertical es clave para dar tiempo al giro.', 'Visualiza la recepción antes de lanzar.'],
      volador: ['El giro debe ser rápido y completado en el punto más alto.', 'Apunta a aterrizar con tus caderas en los pies de la base.'],
      observador: ['Observa la rotación y prepárate para guiar las caderas del volador si el giro es incompleto.', 'La seguridad en la recepción es clave.'],
    },
  },
  {
    id: 'ic-throne-shoulderstand-pop',
    nombre: 'Pop: Trono a Parada de Hombros\n(Throne-to-Shoulderstand Pop)',
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['ic-27', 'lb-shoulderstand'],
    url_video: 'https://www.youtube.com/watch?v=usu93tTl1HQ',
    descripcion: 'Una transición fundamental para controlar el eje vertical. Se lanza de Trono a Parada de Hombros y viceversa.',
    narrativa_detallada: `
**Este pop es crucial para desarrollar el control del eje vertical.**

**Inicio (Trono a Parada de Hombros):**
1. Comiencen en **pose:lb-2** bajo y compacto.
2. **Base:** Lanza al volador verticalmente. Debes mover tus pies rápidamente para recibir los hombros del volador.
3. **Volador:** En el aire, pasa de **Tuck (Recogido/Agrupado)** a una línea vertical (**Tuck** o **Pike**), preparándote para aterrizar sobre tus hombros.

**Regreso (Parada de Hombros a Trono):**
1. Desde **pose:lb-shoulderstand**, la base lanza verticalmente.
2. **Volador:** Recoge las rodillas al pecho (**Tuck**) para volver a la posición de **pose:lb-2**.
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
    id: 'ic-32',
    nombre: 'Voltereta: Hacia Atrás a Trono\n(Backflip to Throne)',
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['ic-31'],
    url_video: 'https://www.youtube.com/watch?v=UyqkvT_5Z8c',
    descripcion: 'Un movimiento icónico. El volador es lanzado desde Pájaro Invertido y realiza una voltereta hacia atrás para ser recibido en Trono.',
    narrativa_detallada: `
**Este es uno de los primeros 'flips' que se aprenden en Icarian.**

**Inicio:**
1.  **Base y Volador:** Comiencen en una posición de **pose:lb-back-bird-acro** baja y estable.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y el Flip):**
*   **Base:** El lanzamiento debe tener una ligera trayectoria hacia ti para facilitar la rotación hacia atrás del volador. Después de lanzar, prepara tus pies para recibirlo en **pose:lb-2**.
*   **Volador:** En el lanzamiento, recoge tus rodillas hacia el pecho (**Tuck (Recogido/Agrupado)**) muy rápidamente. Esta acción de 'tuck' es lo que genera la rotación hacia atrás. Mantén la mirada en la base el mayor tiempo posible.
*   **Recepción:** La base recibe al volador en sus pies en la posición de **pose:lb-2**, absorbiendo el impacto con las piernas.

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
    id: 'ic-35',
    nombre: 'Voltereta: Hacia Adelante a Trono\n(Frontflip to Throne)',
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['ic-32'],
    url_video: 'https://www.youtube.com/watch?v=Hi4xS9E-rck',
    descripcion: 'El volador es lanzado desde Trono y realiza una voltereta hacia adelante para ser recibido de nuevo en Trono.',
    narrativa_detallada: `
**Este es el reverso del Backflip y a menudo se considera más desafiante.**

**Inicio:**
1.  **Base y Volador:** Comiencen en un **pose:lb-2** bajo y compacto.
2.  **Comunicación:** "Listo", "listo", "1, 2, 3...".

**Desarrollo (El Pop y el Flip):**
*   **Base:** El lanzamiento debe tener una trayectoria ligeramente alejada de ti para dar espacio a la voltereta hacia adelante. La recepción será de nuevo en **pose:lb-2**.
*   **Volador:** En el momento del lanzamiento, el volador se abre ligeramente y luego se recoge de nuevo en un **Tuck (Recogido/Agrupado)**, pero esta vez iniciando la rotación hacia adelante. Es un movimiento de "látigo" con el cuerpo.
*   **Recepción:** La base recibe al volador en **pose:lb-2**, con cuidado de no recibir los pies del volador en su cara.

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
    id: 'ic-36',
    nombre: 'Pop: Trípode a Trono\n(Tripod-to-Throne Pop)',
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['lb-21', 'ic-throne-shoulderstand-pop'],
    url_video: 'https://www.youtube.com/watch?v=WjMLoXNkQyE',
    descripcion: 'Una transición desde un equilibrio sobre la cabeza del volador. Añade un elemento de parada de cabeza a los pops de Icarian.',
    narrativa_detallada: `
**Este pop introduce un nuevo punto de equilibrio: la cabeza.**

**Inicio:**
1.  **Base:** Acuéstate y prepara tus pies como una plataforma.
2.  **Volador:** Entra en la postura de **pose:lb-21**, con tu cabeza en los pies de la base y las manos en el suelo.
3.  **Base:** Con un movimiento controlado, levanta al volador en esta posición de trípode invertido.

**Desarrollo (El Pop):**
*   **Base:** Desde la posición de trípode, realiza un lanzamiento controlado. El movimiento es complejo porque el peso está distribuido de manera diferente.
*   **Volador:** En el lanzamiento, empuja con tus brazos y recoge tus piernas (**Tuck (Recogido/Agrupado)**) para transicionar a una posición sentada en el aire.
*   **Recepción:** La base mueve rápidamente sus pies desde la cabeza del volador hasta debajo de sus glúteos para recibirlo en la postura de **pose:lb-2**.

**Culminación:**
*   Esta es una transición avanzada que demuestra un gran control. Se suele desmontar desde **pose:lb-2**.
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
    id: 'ic-corkscrew-pop',
    nombre: 'Lavadora Pop: Sacacorchos\n(Corkscrew Pop)',
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['ic-31', 'ic-32'],
    url_video: 'https://www.youtube.com/watch?v=76m0AXh_Q5Y',
    descripcion: 'Una secuencia de Icarian que fluye de Pájaro Invertido a Trono (usando una voltereta hacia atrás) y de vuelta a Pájaro.',
    narrativa_detallada: `
**Esta lavadora icariana combina una voltereta con un pop de rotación.**

**Secuencia:**
1.  **Inicio:** Comiencen en **pose:lb-back-bird-acro**.
2.  **Flip:** La base lanza al volador a una **pose:ic-32**.
3.  **Recepción y Pop:** La base recibe en **pose:lb-2** e inmediatamente, sin pausa, lanza al volador a un **pose:ic-31**.
4.  **Recepción:** La base recibe al volador de nuevo en **pose:lb-back-bird-acro**, completando el ciclo.

**Desarrollo:**
*   Esta secuencia requiere una resistencia y un control del tempo excepcionales. La fluidez es clave.

**Culminación:**
*   Se detiene en una de las posturas estables (**pose:lb-2** o **pose:lb-back-bird-acro**) y se desmonta.
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
    id: 'ic-34',
    nombre: "Lavadora Pop: Rueda de Catalina\n(Catherine's Wheel Pop)",
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['ic-29', 'ic-31'],
    url_video: 'https://www.youtube.com/watch?v=8h2ZYO5_sYw',
    descripcion: 'La versión icariana y dinámica de la lavadora clásica. El volador es lanzado de Pájaro a Straddle y de vuelta.',
    narrativa_detallada: `
**Esta es una "lavadora" de Icarian, enlazando dos pops avanzados.**

**Secuencia:**
1.  **Inicio:** Comiencen en **pose:lb-front-bird**.
2.  **Pop 1 (a Straddle Throne):** La base lanza al volador. En el aire, el volador abre las piernas a **Straddle**. La base lo recibe en **pose:lb-7**.
3.  **Pop 2 (a Pájaro Frontal):** Sin pausa, la base lanza de nuevo al volador desde **pose:lb-7**. El volador junta las piernas y extiende el cuerpo a una línea recta. La base lo recibe de nuevo en **pose:lb-front-bird**.

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
    id: 'ic-ninja-star-pop',
    nombre: 'Lavadora Pop: Ninja Star\n(Ninja Star Pop)',
    nivel: 7,
    type: 'Icarian',
    prerequisites: ['ic-corkscrew-pop'],
    url_video: 'https://www.youtube.com/watch?v=bvkHU4raLfI',
    descripcion: 'Una lavadora Icariana muy fluida y rotacional que conecta Pájaro Invertido, Estrella Lateral y Trono.',
    narrativa_detallada: `
**Una secuencia dinámica que enseña el control de la rotación y el cambio de plano.**

**Secuencia de ejemplo:**
1.  **Inicio:** Comiencen en **pose:lb-back-bird-acro**.
2.  **Pop 1 (a Side Star):** La base lanza al volador con una ligera rotación. El volador gira 90 grados para ser recibido en una **pose:lb-12** sostenida solo por los pies de la base.
3.  **Pop 2 (a Trono):** Desde la Estrella Lateral, la base lanza al volador, quien se recoge (**Tuck**) para ser recibido en **pose:lb-2**.
4.  **Pop 3 (de vuelta a Pájaro Invertido):** Desde Trono, la base puede lanzar al volador a un **pose:ic-31** para reiniciar el ciclo.

**Desarrollo:**
*   Esta lavadora es menos sobre altura y más sobre control rotacional y precisión en la recepción.

**Culminación:**
*   Se puede detener la secuencia en **pose:lb-2** para un desmontaje seguro.
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
];
