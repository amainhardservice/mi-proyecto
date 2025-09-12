
import type { Pose } from '@/types';

export const thaiMassagePoses: Pose[] = [
  // Masaje Tailandés: NIVEL 1 - Secuencia Supina (Boca Arriba)
  {
    id: 'tm-supine-01',
    nombre: 'Presión Palmar en los Pies\n(Foot Palming)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: [],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=z4j7XzwdmJI',
    descripcion: 'Técnica inicial para conectar con el receptor, calentar los pies y empezar a trabajar las líneas Sen de las piernas.',
    narrativa_detallada: `
**Posición:** Receptor acostado boca arriba (supino). Dador sentado a los pies.
**Técnica:**
1. El dador coloca las palmas de sus manos sobre las plantas de los pies del receptor.
2. Usando el peso corporal, aplica una presión rítmica y alternada, como si caminara en el lugar.
3. Esto establece la comunicación (Metta) y prepara al receptor para el masaje.`,
  },
  {
    id: 'tm-supine-04',
    nombre: 'Movilización de Tobillos\n(Ankle Rotations)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=QCN02TLWCeQ',
    descripcion: 'Técnica suave para liberar la tensión y mejorar la movilidad en la articulación del tobillo.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a los pies.
**Técnica:**
1. El dador sostiene el pie del receptor con una mano y el tobillo con la otra para estabilizar.
2. Realiza rotaciones lentas y controladas del pie en ambas direcciones.
3. Presta atención a cualquier chasquido o limitación en el movimiento.`,
  },
  {
    id: 'tm-supine-02',
    nombre: 'Estiramiento de Pierna Individual\n(Single Leg Stretch)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-04'],
    tags: ['Thai Massage'],
    url_video: 'https://www.youtube.com/watch?v=7hFooTKDF5c',
    descripcion: 'Técnica fundamental para liberar la tensión en los isquiotibiales y la espalda baja del receptor.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a los pies.
**Técnica:**
1. El dador levanta una pierna del receptor y coloca el pie en su hombro o pecho, usando su cuerpo como palanca.
2. Con las manos, aplica una presión suave y constante sobre el muslo del receptor para profundizar el estiramiento, manteniendo la pierna recta.
3. Se mantiene durante varias respiraciones antes de cambiar de lado.`,
  },
  {
    id: 'tm-supine-06',
    nombre: 'Apertura de Cadera en Cuatro\n(Figure Four)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=I-Vpetr9Az0',
    descripcion: 'Aísla el estiramiento en los rotadores externos de la cadera (como el piriforme) y los glúteos.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a un lado.
**Técnica:**
1. El dador dobla una rodilla del receptor y coloca el tobillo sobre la rodilla opuesta (formando un "4").
2. Con una mano en el tobillo y otra en la rodilla doblada, aplica una suave presión para abrir la cadera.
3. Se puede profundizar levantando la pierna de apoyo hacia el pecho.`,
  },
  {
    id: 'tm-supine-03',
    nombre: 'Estiramiento de la Mariposa\n(Butterfly Stretch)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-06'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=r8eRZ46Zk-c',
    descripcion: 'Abre ambas caderas y la ingle simultáneamente, aliviando la tensión en la zona pélvica.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado a los pies.
**Técnica:**
1. El dador junta las plantas de los pies del receptor y acerca los talones a la ingle.
2. Colocando las manos o antebrazos en la parte interna de los muslos, el dador aplica una presión suave y constante hacia el suelo.
3. Se puede añadir un ligero balanceo (rocking) para relajar más la zona.`,
  },
  {
    id: 'tm-supine-07',
    nombre: 'Presión Palmar en Brazos y Manos\n(Arm & Hand Palming)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=gkQTSLnii-c',
    descripcion: 'Extiende el trabajo de calentamiento y energía a las extremidades superiores.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado al lado.
**Técnica:**
1. El dador toma un brazo del receptor y lo coloca extendido a su lado.
2. Usando la presión palmar (palming), el dador camina rítmicamente desde el hombro hasta la mano.
3. Termina con una suave presión y masaje en la palma de la mano del receptor.`,
  },
  {
    id: 'tm-supine-05',
    nombre: 'Apertura de Pecho con Brazos en Cruz\n(Chest Opener with Crossed Arms)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-07'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=Jd8W3CNvKPQ',
    descripcion: 'Un estiramiento pasivo para los músculos pectorales y la parte delantera de los hombros, fomentando una respiración más profunda.',
    narrativa_detallada: `
**Posición:** Receptor supino, con los brazos extendidos en forma de cruz.
**Técnica:**
1. El dador se arrodilla o sienta junto a la cabeza del receptor.
2. Coloca las palmas de sus manos sobre los hombros o antebrazos del receptor.
3. Inclinando su peso corporal hacia adelante, el dador aplica una presión suave y sostenida, permitiendo que la gravedad abra el pecho del receptor.`,
  },
  {
    id: 'tm-supine-08',
    nombre: 'Torsión Espinal Supina\n(Supine Spinal Twist)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=eBju06G0C0o',
    descripcion: 'Una torsión suave que libera la tensión en la espalda baja, los glúteos y mejora la digestión.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador arrodillado a un lado.
**Técnica:**
1. El dador dobla una rodilla del receptor hacia el pecho y la guía cruzando el cuerpo hacia el lado opuesto.
2. Con una mano en la rodilla y otra en el hombro opuesto del receptor (para mantenerlo en el suelo), el dador profundiza suavemente la torsión.
3. El receptor gira la cabeza en dirección opuesta a la rodilla.`,
  },
  {
    id: 'tm-supine-09',
    nombre: 'Estiramiento del Psoas Asistido\n(Assisted Psoas Stretch)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=Y06OSOaiva4',
    descripcion: 'Libera la tensión en el psoas, un músculo profundo que conecta la columna con las piernas, a menudo acortado por estar sentado.',
    narrativa_detallada: `
**Posición:** Receptor supino, cerca del borde del futón.
**Técnica:**
1. El dador deja que una pierna del receptor cuelgue fuera del borde del futón.
2. La otra rodilla se lleva hacia el pecho del receptor para estabilizar la pelvis.
3. La gravedad crea un estiramiento suave en el flexor de la cadera (psoas) de la pierna que cuelga. El dador puede añadir una presión suave.`,
  },
  {
    id: 'tm-supine-10',
    nombre: 'Masaje de Cuello y Liberación Occipital\n(Neck Massage & Occipital Release)',
    nivel: 1,
    type: 'Thai-Massage',
    prerequisites: [],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=Q7wmyU9GuuY',
    descripcion: 'Técnica para aliviar la tensión en el cuello y en la base del cráneo, una zona común de dolores de cabeza tensionales.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador sentado detrás de la cabeza.
**Técnica:**
1. El dador levanta suavemente la cabeza del receptor y la apoya en su regazo.
2. Con los pulgares, aplica presión en los músculos a los lados del cuello.
3. Con los dedos, realiza una suave tracción y presión en la base del cráneo (línea occipital).`,
  },

  // Masaje Tailandés: NIVEL 2 - Secuencia Lateral y Sentada
  {
    id: 'tm-side-01',
    nombre: 'Estiramiento de Cadera Lateral\n(Side Hip Stretch)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-06', 'tm-supine-08'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=yo007D76wkY',
    descripcion: 'Técnica efectiva para estirar los glúteos y el piriforme, a menudo una fuente de dolor lumbar.',
    narrativa_detallada: `
**Posición:** Receptor acostado de lado. Dador arrodillado detrás.
**Técnica:**
1. El dador dobla la pierna superior del receptor y coloca el pie delante de la rodilla de la pierna inferior.
2. Con una mano en el hombro y otra en la cadera, el dador aplica una suave torsión, empujando el hombro hacia atrás y la cadera hacia adelante.
3. Esto crea un estiramiento profundo en la zona del glúteo.`,
  },
  {
    id: 'tm-side-02',
    nombre: 'Llave de Hombro en Posición Lateral\n(Side Shoulder Key)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-05'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=JBvlwGO3m24',
    descripcion: 'Permite un acceso profundo y seguro a la articulación del hombro, liberando la tensión en los rotadores.',
    narrativa_detallada: `
**Posición:** Receptor de lado. Dador arrodillado detrás.
**Técnica:**
1. El dador sostiene el brazo superior del receptor y lo lleva suavemente hacia atrás, doblándolo por el codo.
2. Estabilizando el omóplato con una mano, el dador usa la otra para guiar el movimiento, explorando el rango de movilidad.
3. El movimiento es lento y se detiene ante cualquier resistencia.`,
  },
  {
    id: 'tm-side-03',
    nombre: 'Estiramiento del Cuádriceps en Posición Lateral\n(Side Quad Stretch)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-09'],
    tags: ['Thai Massage'],
    url_video: 'https://www.youtube.com/watch?v=CMI2O2m0OOU',
    descripcion: 'Una forma segura y efectiva de estirar la parte frontal del muslo (cuádriceps).',
    narrativa_detallada: `
**Posición:** Receptor de lado, con la pierna inferior estirada y la superior ligeramente doblada.
**Técnica:**
1. El dador se arrodilla detrás del receptor.
2. Dobla la rodilla inferior del receptor y agarra el tobillo.
3. Tira suavemente del talón hacia el glúteo hasta que el receptor sienta un estiramiento en la parte frontal del muslo.`,
  },
  {
    id: 'tm-side-04',
    nombre: 'Trabajo en la Banda Iliotibial Lateral\n(IT Band Work)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-side-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=wCWBKX2G5nw',
    descripcion: 'Técnica para liberar la tensión en la banda iliotibial (IT), un tejido conectivo grueso en el costado de la pierna.',
    narrativa_detallada: `
**Posición:** Receptor de lado. Dador arrodillado al lado.
**Técnica:**
1. El dador apoya la pierna superior del receptor sobre su propio muslo para mayor estabilidad.
2. Usando presión palmar, antebrazo o codo, el dador aplica presión a lo largo de la banda IT, desde la cadera hasta justo por encima de la rodilla.`,
  },
  {
    id: 'tm-seated-01',
    nombre: 'Masaje de Cuello y Hombros Sentado\n(Seated Neck & Shoulder Massage)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-10'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=vymAn79zqvk',
    descripcion: 'Técnicas clásicas para aliviar la tensión acumulada en el cuello y los trapecios, una zona común de estrés.',
    narrativa_detallada: `
**Posición:** Receptor sentado con las piernas cruzadas. Dador arrodillado detrás.
**Técnica:**
1. El dador utiliza sus pulgares para aplicar presión en los puntos a lo largo de los hombros y la base del cráneo.
2. Se pueden realizar suaves estiramientos de cuello, inclinando la cabeza hacia un lado mientras se estabiliza el hombro opuesto.
3. La sesión a menudo termina con un suave masaje en la cabeza.`,
  },
  {
    id: 'tm-seated-02',
    nombre: 'Torsión Espinal Sentado\n(Seated Spinal Twist)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-side-01', 'tm-seated-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=dHfyrniGltY',
    descripcion: 'Una torsión asistida que mejora la flexibilidad de la columna vertebral y estimula los órganos internos.',
    narrativa_detallada: `
**Posición:** Receptor sentado. Dador arrodillado detrás.
**Técnica:**
1. El dador coloca una rodilla en la espalda del receptor para estabilizar.
2. El dador guía al receptor en una torsión, colocando una mano en el hombro opuesto y la otra en la cadera.
3. Se anima al receptor a exhalar mientras profundiza en la torsión.`,
  },
   {
    id: 'tm-seated-03',
    nombre: 'Apertura de Pecho Sentado\n(Seated Chest Opener)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-seated-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=qekgWZw428U',
    descripcion: 'Ayuda a liberar la tensión en los hombros y el pecho, contrarrestando los efectos de pasar mucho tiempo sentado.',
    narrativa_detallada: `
**Posición:** Receptor sentado. Dador arrodillado detrás.
**Técnica:**
1. El dador coloca sus rodillas en la espalda media-baja del receptor para dar soporte.
2. El dador toma las muñecas o antebrazos del receptor y tira suavemente hacia atrás y hacia arriba.
3. El dador puede usar su peso corporal inclinándose hacia atrás para aumentar el estiramiento.`,
  },
  {
    id: 'tm-seated-04',
    nombre: 'Masaje de Espalda con Codo Sentado\n(Seated Elbow on Back)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-seated-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=jfx33DK3aQE',
    descripcion: 'Técnica de presión profunda para liberar la tensión en los músculos alrededor de los omóplatos.',
    narrativa_detallada: `
**Posición:** Receptor sentado, a menudo inclinado hacia adelante y apoyado.
**Técnica:**
1. El dador se posiciona detrás o al lado.
2. Con cuidado, utiliza el codo para aplicar una presión lenta y profunda en los músculos trapecio y romboides.
3. Requiere mucha sensibilidad y comunicación para no ser demasiado intenso.`,
  },
  {
    id: 'tm-seated-05',
    nombre: 'Estiramiento de Hombro Sentado con Entrelazado\n(Seated Shoulder Stretch with Bind)',
    nivel: 2,
    type: 'Thai-Massage',
    prerequisites: ['tm-seated-03'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=OLvbtuYUu1U',
    descripcion: 'Una apertura de hombros y pecho que se puede realizar en la posición sentada.',
    narrativa_detallada: `
**Posición:** Receptor sentado. Dador detrás.
**Técnica:**
1. El receptor entrelaza sus manos detrás de la espalda.
2. El dador se arrodilla, coloca sus rodillas en la espalda media para dar soporte.
3. El dador toma los antebrazos entrelazados del receptor y los levanta suavemente, creando un estiramiento en la parte frontal de los hombros.`,
  },

  // Masaje Tailandés: NIVEL 3 - Secuencia Prona y Técnicas Avanzadas
  {
    id: 'tm-prone-01',
    nombre: 'Caminata en la Espalda\n(Back Walking)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-side-01', 'tm-seated-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=W7ylSrBQRP4',
    descripcion: 'Una técnica icónica y avanzada. El dador usa sus pies para aplicar una presión amplia y profunda a lo largo de la espalda del receptor.',
    narrativa_detallada: `
**Posición:** Receptor acostado boca abajo (prono). Dador de pie, a menudo usando cuerdas o una barra para mantener el equilibrio.
**Técnica:**
1. El dador camina lentamente sobre la espalda del receptor, aplicando presión con las plantas de los pies a los lados de la columna vertebral (nunca sobre ella).
2. Requiere un inmenso control, equilibrio y sensibilidad por parte del dador.`,
  },
  {
    id: 'tm-prone-06',
    nombre: 'Estiramiento de Isquiotibiales en Prono\n(Prone Hamstring Stretch)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=S94708ZLCok',
    descripcion: 'Permite estirar la parte posterior de la pierna mientras el receptor está cómodamente boca abajo.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado al lado.
**Técnica:**
1. El dador dobla la rodilla de una pierna del receptor.
2. Colocando su hombro debajo de la rodilla doblada, el dador levanta la pierna.
3. Con las manos, el dador sostiene el tobillo y aplica una suave presión para estirar el isquiotibial.`,
  },
  {
    id: 'tm-prone-07',
    nombre: 'Presión en Glúteos con Talón o Rodilla\n(Glute Press with Heel or Knee)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-side-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=r8eRZ46Zk-c',
    descripcion: 'Técnica para aplicar una presión profunda y liberadora en los músculos grandes de los glúteos.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado o de pie al lado.
**Técnica:**
1. El dador localiza el centro del músculo del glúteo.
2. Usando su talón o rodilla, aplica una presión lenta, profunda y sostenida, a menudo pidiendo al receptor que respire en la zona.
3. Se debe evitar la zona del nervio ciático.`,
  },
  {
    id: 'tm-prone-02',
    nombre: 'Transición de la Cobra\n(Cobra Transition)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-seated-03', 'tm-prone-01'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=8ZAUsoP7wbk',
    descripcion: 'Un estiramiento dinámico que abre toda la parte frontal del cuerpo del receptor, imitando la postura de la cobra en yoga.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador de pie, a horcajadas sobre las piernas del receptor.
**Técnica:**
1. El dador engancha sus pies debajo de los muslos del receptor.
2. Tomando las manos o muñecas del receptor, el dador se inclina hacia atrás, levantando el torso del receptor del suelo en un arco.
3. El movimiento debe ser fluido y requiere fuerza y confianza.`,
  },
  {
    id: 'tm-prone-08',
    nombre: 'Liberación de Omóplatos en Prono\n(Prone Scapula Release)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-side-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=kziS72DfCF4',
    descripcion: 'Trabajo detallado para liberar la tensión alrededor del omóplato, una zona común de rigidez.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado al lado.
**Técnica:**
1. El dador coloca el brazo del receptor en una posición de "escorpión" (doblado y llevado hacia la espalda).
2. Esto hace que el omóplato sobresalga.
3. El dador utiliza los pulgares para presionar y "excavar" suavemente debajo del borde del omóplato.`,
  },
  {
    id: 'tm-prone-09',
    nombre: 'Tracción de Brazo en Prono\n(Prone Arm Traction)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-prone-08'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=CGUtkU3EbAU',
    descripcion: 'Un estiramiento final para el hombro, pectoral y bíceps.',
    narrativa_detallada: `
**Posición:** Receptor prono. Dador arrodillado a la altura de la cabeza.
**Técnica:**
1. El dador extiende un brazo del receptor hacia un lado en forma de T.
2. El dador estabiliza el hombro del receptor con una mano.
3. El dador guía al receptor para que ruede ligeramente sobre ese hombro, creando un estiramiento profundo.`,
  },
  {
    id: 'tm-prone-04',
    nombre: 'Elevación de Caderas\n(Hip Lift)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-prone-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=wI6bxErHMAM',
    descripcion: 'Una elevación terapéutica que descomprime la espalda baja y estira los flexores de la cadera.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador de pie en la cabeza del receptor.
**Técnica:**
1. El dador coloca sus pies firmemente en la parte superior de los glúteos del receptor.
2. El dador toma las manos del receptor y, usando un movimiento de palanca, levanta las caderas del receptor del suelo.
3. Esto crea una tracción suave en toda la columna vertebral.`,
  },
  {
    id: 'tm-prone-03',
    nombre: 'Arado Asistido\n(Assisted Plough)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-prone-04', 'tm-supine-02'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=1pSBvmhMuF4',
    descripcion: 'Una inversión terapéutica avanzada que descomprime profundamente la columna vertebral.',
    narrativa_detallada: `
**Posición:** Receptor supino. Dador de pie sobre el receptor.
**Técnica:**
1. El dador se para sobre los muslos del receptor.
2. Levantando las piernas del receptor, el dador las guía por encima de la cabeza del receptor hasta que los pies tocan el suelo por detrás.
3. Esta postura requiere mucha flexibilidad del receptor y habilidad del dador.`,
  },
  {
    id: 'tm-prone-05',
    nombre: 'Trabajo de Abdomen\n(Abdomen Work)',
    nivel: 3,
    type: 'Thai-Massage',
    prerequisites: ['tm-supine-09'],
    tags: ['Thai Massage'],
    url_video: 'http://www.youtube.com/watch?v=gVRDJ9y0hzM',
    descripcion: 'El "Hara" es el centro energético. Esta técnica se enfoca en liberar la tensión abdominal y mejorar el flujo de energía.',
    narrativa_detallada: `
**Posición:** Receptor supino, con las rodillas dobladas. Dador al lado.
**Técnica:**
1. El dador coloca las palmas en el abdomen del receptor, debajo del ombligo.
2. Usando un movimiento rítmico y circular, aplica una presión suave pero profunda.
3. Se sincroniza la presión con la exhalación del receptor. Requiere sensibilidad y confianza.`,
  },
];
