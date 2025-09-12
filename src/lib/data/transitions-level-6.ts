
import type { Pose } from '@/types';

export const transitionsLevel6Poses: Pose[] = [
  {
    id: 'tr-star-shoulders',
    nombre: 'Estrella → Parada de Hombros sobre Pies\n(Star → Shoulderstand on Feet)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella'],
    prerequisites: ['lb-9', 'lb-shoulderstand-on-feet'],
    originPoses: ['lb-9'],
    destinationPoses: ['lb-shoulderstand-on-feet'],
    descripcion: 'Una transición elegante que enseña el control del descenso lateral desde un equilibrio asimétrico a una inversión estable.',
    narrativa_detallada: `
**Inicio:** Comienza en una **pose:lb-9** estable.
**Desarrollo:**
* **Volador:** Comienza a rotar las caderas hacia la base, llevando la pierna libre hacia abajo y a través.
* **Base:** Siente la rotación. Libera el agarre de mano y prepárate para recibir el segundo hombro del volador con tu mano libre. Cambia el pie de apoyo desde la cadera del volador a su hombro.
* **Volador:** A medida que la base cambia el soporte, coloca el segundo hombro en el otro pie de la base, manteniendo una línea corporal fuerte.
* **Base:** Establece un agarre de manos seguro una vez que el volador está en la plataforma de los pies.
**Culminación:** Estabilización en **pose:lb-shoulderstand-on-feet**.`,
  },
  {
    id: 'tr-shoulders-star',
    nombre: 'Parada de Hombros sobre Pies → Estrella\n(Shoulderstand on Feet → Star)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella'],
    prerequisites: ['lb-shoulderstand-on-feet', 'lb-9'],
    originPoses: ['lb-shoulderstand-on-feet'],
    destinationPoses: ['lb-9'],
    url_video: 'https://www.youtube.com/watch?v=ydOM4EbhJz0&t=91s',
    descripcion: 'Una transición que enseña a pasar de una inversión vertical estable a un equilibrio lateral complejo, controlando el peso y el contrapeso.',
    narrativa_detallada: `
**Inicio:** Comienza en una **pose:lb-shoulderstand-on-feet** estable y con agarre de manos.
**Desarrollo:**
* **Volador:** Inicia el movimiento inclinando el cuerpo hacia un lado y abriendo las piernas. Transfiere peso al hombro de ese lado.
* **Base:** Siente el cambio de peso. Prepárate para soltar una pierna y una mano para cambiar al agarre de Estrella. Mueve tu pie de apoyo desde el hombro a la cadera del volador.
* **Volador:** A medida que la base ajusta, encuentra la posición de contrapeso de la Estrella, extendiendo el brazo y la pierna libres.
**Culminación:** Estabilización en la postura de **pose:lb-9**.`,
  },
  {
    id: 'tr-star-backbird',
    nombre: 'Estrella → Pájaro de Espaldas\n(Star → Back Bird)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella', 'Familia Pájaro'],
    prerequisites: ['lb-9', 'lb-back-bird'],
    originPoses: ['lb-9'],
    destinationPoses: ['lb-back-bird'],
    descripcion: 'Una transición que implica una rotación completa desde un equilibrio lateral para aterrizar en una apertura de pecho.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-9** estable.
**Desarrollo:**
* **Volador:** Inicia una rotación de cadera hacia atrás, lejos de la base, mientras mantiene el contrapeso.
* **Base:** Guía la rotación con el agarre de mano y el pie de apoyo. Prepara la otra pierna para recibir la espalda del volador.
* **Volador:** Continúa la rotación hasta quedar de espaldas a la base. Arquea el cuerpo.
* **Base:** Mueve los pies a la espalda alta del volador para recibirlo en **pose:lb-back-bird**.
**Culminación:** Estabilización en **pose:lb-back-bird**.`,
  },
  {
    id: 'tr-star-foldedleaf',
    nombre: 'Estrella → Plegaria Invertida\n(Star → Folded Leaf)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella'],
    prerequisites: ['lb-9', 'th-folded-leaf'],
    originPoses: ['lb-9'],
    destinationPoses: ['th-folded-leaf'],
    descripcion: 'Una transición creativa que lleva desde un equilibrio activo a una inversión terapéutica y pasiva.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-9** estable.
**Desarrollo:**
* **Volador:** Gira las caderas para mirar hacia la base y comienza a plegarse hacia adelante.
* **Base:** Sigue la rotación. Mueve el pie de apoyo desde la cadera lateral a la cadera frontal del volador. Prepara el otro pie.
* **Volador:** Pliega el torso completamente hacia abajo.
* **Base:** Recibe ambas caderas del volador en los pies y permite que el volador cuelgue en **pose:th-folded-leaf**.
**Culminación:** Estabilización en **pose:th-folded-leaf**.`,
  },
  {
    id: 'tr-star-tripod',
    nombre: 'Estrella → Trípode\n(Star → Tripod)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella'],
    prerequisites: ['lb-9', 'lb-21'],
    originPoses: ['lb-9'],
    destinationPoses: ['lb-21'],
    descripcion: 'Una transición que desafía el control, bajando desde un equilibrio lateral a una inversión sobre la cabeza.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-9** estable.
**Desarrollo:**
* **Volador:** Gira hacia la base y baja la cabeza para que la coronilla apunte a los pies de la base. Coloca las manos en el suelo.
* **Base:** Sigue el descenso controlado del volador. Mueve el pie de apoyo desde la cadera hasta la cabeza del volador.
* **Volador:** Una vez que la cabeza está segura en los pies de la base y las manos en el suelo, levanta las caderas a la vertical.
**Culminación:** Estabilización en **pose:lb-21**.`,
  },
  {
    id: 'tr-star-sidestar',
    nombre: 'Estrella → Estrella Lateral\n(Star → Side Star)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella'],
    prerequisites: ['lb-9', 'lb-12'],
    originPoses: ['lb-9'],
    destinationPoses: ['lb-12'],
    descripcion: 'Transición clave que conecta dos tipos diferentes de equilibrios laterales, fundamental para lavadoras como Ninja Star.',
    narrativa_detallada: `
**Inicio:** Comienza en una **pose:lb-9** estable.
**Desarrollo:**
* **Volador:** Inicia una rotación para dar la espalda a la base.
* **Base:** Sigue el movimiento. La base gira sobre su costado. El pie que sostiene al volador se mueve desde el frente de la cadera al lateral de la cadera. El agarre de manos se ajusta.
* **Volador:** Mantén una línea fuerte mientras cambias de un plano frontal a uno lateral.
**Culminación:** Estabilización en **pose:lb-12**.`,
  },
  {
    id: 'tr-revstar-throne',
    nombre: 'Estrella Invertida → Trono\n(Reverse Star → Throne)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella'],
    prerequisites: ['lb-18', 'lb-2'],
    originPoses: ['lb-18'],
    destinationPoses: ['lb-2'],
    url_video: 'https://www.youtube.com/watch?v=D7DEqqNZMyQ',
    descripcion: 'Una transición avanzada desde una postura de contrapeso invertido a una postura sentada estable.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-18** estable.
**Desarrollo:**
* **Volador:** Inicia el movimiento recogiendo el cuerpo (Tuck) y girando hacia la base.
* **Base:** Siente el giro y prepárate para recibir al volador. Suelta el contrapeso, flexiona ambas rodillas y mueve los pies desde el sacro del volador a sus glúteos.
* **Volador:** Completa el giro y aterriza suavemente en la posición sentada de Trono.
**Culminación:** Estabilización en **pose:lb-2**.`,
  },
  {
    id: 'tr-fb-revstar',
    nombre: 'Pájaro Frontal → Estrella Invertida\n(Front Bird → Reverse Star)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Pájaro', 'Familia Estrella'],
    prerequisites: ['lb-front-bird', 'lb-18'],
    originPoses: ['lb-1', 'lb-front-bird'],
    destinationPoses: ['lb-18'],
    url_video: 'https://www.youtube.com/watch?v=vccFNDI6y74',
    descripcion: 'Una transición compleja que implica una rotación completa desde un plano frontal a un equilibrio de contrapeso invertido.',
    narrativa_detallada: `
**Inicio:** Comienza en **pose:lb-front-bird** estable, preferiblemente con un agarre de manos.
**Desarrollo:**
* **Volador:** Inicia una rotación de cadera, similar a un helicóptero, pero preparándose para un agarre cruzado.
* **Base:** Guía la rotación. A medida que el volador gira, uno de los pies de la base se moverá desde la cadera frontal al sacro. Se debe cambiar a un agarre cruzado (ej. mano izquierda de la base con mano derecha del volador) y establecer un fuerte contrapeso.
* **Volador:** Mantén el cuerpo activo y arqueado. Confía en el contrapeso para encontrar la estabilidad en la posición invertida.
**Culminación:** Estabilización en **pose:lb-18**.`,
  },
  {
    id: 'tr-revstar-fb',
    nombre: 'Estrella Invertida → Pájaro Frontal\n(Reverse Star → Front Bird)',
    nivel: 6,
    type: 'Transition',
    tags: ['Transición', 'Intermedio', 'Familia Estrella', 'Familia Pájaro'],
    prerequisites: ['lb-18', 'lb-front-bird'],
    originPoses: ['lb-18'],
    destinationPoses: ['lb-1', 'lb-front-bird'],
    url_video: 'https://www.youtube.com/watch?v=vccFNDI6y74',
    descripcion: 'El camino de vuelta desde Estrella Invertida a Pájaro Frontal, requiriendo un control preciso del contrapeso y la rotación.',
    narrativa_detallada: `
**Inicio:** Comienza en una **pose:lb-18** estable.
**Desarrollo:**
* **Volador:** Usa el core para iniciar una rotación y deshacer el arco, buscando volver a una línea de pájaro frontal.
* **Base:** Sigue la rotación, liberando el contrapeso gradualmente. Mueve el pie de apoyo desde el sacro del volador a sus caderas frontales y ajusta el agarre de manos para volver a una conexión de Pájaro Frontal.
* **Volador:** Mantén el cuerpo en una línea sólida durante la transición para facilitar la recepción de la base.
**Culminación:** Estabilización en **pose:lb-front-bird** o **pose:lb-1**.`,
  },
];
