import type { Concept, Asana, PoseModifier } from '@/types';

export const allModifiersData: PoseModifier[] = [
    {
      id: '1',
      titulo: 'Tuck (Recogido/Agrupado)',
      descripcion: 'Una posición compacta donde las rodillas se flexionan y se llevan hacia el pecho. Esta forma crea un centro de gravedad estable y controlado, ideal para equilibrios y rotaciones.',
    },
    {
      id: '2',
      titulo: 'Straddle (A horcajadas/Abierto)',
      descripcion: 'Las piernas están rectas y separadas, formando una "V". Esta posición es fundamental para muchas transiciones y posturas sentadas. Baja el centro de gravedad y ofrece estabilidad lateral.',
    },
    {
      id: '3',
      titulo: 'Pike (Carpa)',
      descripcion: 'Las piernas están rectas y juntas, con una flexión profunda en las caderas (el cuerpo forma una "L"). Esta forma requiere una buena compresión y flexibilidad de los isquiotibiales. Es usada en muchas entradas a inversiones.',
    },
     {
      id: '6',
      titulo: 'Pike Straddle (Carpa Abierta)',
      descripcion: 'Una combinación de Pike y Straddle. Las piernas están rectas y separadas (Straddle), y hay una flexión en la cadera (Pike). Es una forma corporal muy común en muchas transiciones y flujos dinámicos.',
    },
    {
      id: '4',
      titulo: 'Layout / Straight (Recto/Plancha)',
      descripcion: 'El cuerpo se mantiene en una línea perfectamente recta desde los talones hasta la cabeza, como una tabla. Requiere una activación total del core y los glúteos. Es la base de posturas como **Pájaro Frontal (Front Bird)** y **Plancha sobre Manos (Free Bird)**.',
    },
    {
      id: '5',
      titulo: 'Open Tuck (Recogido Abierto)',
      descripcion: 'Una variación de la posición recogida donde se mantiene la flexión de las rodillas pero se permite que la espalda se arquee y el pecho se abra. Es una postura común en posturas terapéuticas y de apertura de pecho.',
    },
];


export const allConceptsData: Concept[] = [
    // --- ACROYOGA ---
    
    // -- Categoría: Comunicación y Seguridad --
    {
      id: 'ac-cs-01',
      titulo: 'Consentimiento',
      descripcion: 'Pedir permiso antes de tocar, observar o dar consejos. Es la base de una práctica respetuosa y segura.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-04',
      titulo: '"Abajo"',
      descripcion: 'La palabra de seguridad universal. Cuando alguien la dice, la postura o transición se detiene y se desmonta de la forma más segura posible, sin hacer preguntas.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '4',
      titulo: 'Observador (Spotter)',
      descripcion: 'El rol más importante para la seguridad. Previene caídas y asegura un desmontaje seguro. Su foco principal son las caderas del volador.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '48',
      titulo: 'Caída Controlada (Bail Out)',
      descripcion: 'Una forma predeterminada y segura de salir de una postura cuando se pierde el equilibrio. Es una habilidad tan importante como hacer la postura misma.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-dt-11',
      titulo: 'Entradas y Salidas',
      descripcion: 'Las técnicas para entrar (Mount) y salir (Dismount) de una postura. Dominar las salidas seguras es tan crucial como la postura misma. Una habilidad clave es la **Salida en Rueda (Cartwheel Exit)**, que consiste en salir de una inversión girando lateralmente para aterrizar de pie. Esta misma habilidad evoluciona a la **Transición: Rueda Lateral (Cartwheel)**, usada para entrar dinámicamente en posturas y lavadoras avanzadas.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-cs-08',
      titulo: 'Calentamiento (Warm-up)',
      descripcion: 'Movimientos y ejercicios realizados al inicio de la práctica para preparar el cuerpo, aumentar el flujo sanguíneo y prevenir lesiones.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '31',
      titulo: 'Comunicación Verbal',
      descripcion: 'Usar palabras claras y concisas para coordinar. Ej: "Listo", "Abajo", "Espera". Fundamental para la seguridad y el aprendizaje.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '33',
      titulo: 'Comunicación No Verbal',
      descripcion: 'Sentir y responder a los cambios de peso y presión del compañero. Es la forma de comunicación más importante una vez en la postura.',
      category: 'Comunicación y Seguridad',
    },
     {
      id: '32',
      titulo: 'Comunicación: "Más peso / Menos peso"',
      descripcion: 'Instrucciones del volador a la base para ajustar la distribución del peso, especialmente en agarres de manos. Ayuda a encontrar el punto de equilibrio.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-11',
      titulo: 'Contacto Visual',
      descripcion: 'Una poderosa herramienta de comunicación no verbal que ayuda a construir confianza y a sincronizar movimientos.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '47',
      titulo: 'Escuchar',
      descripcion: 'No solo con los oídos, sino sentir activamente los movimientos y las necesidades del compañero a través de los puntos de contacto.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-02',
      titulo: 'Límites (Boundaries)',
      descripcion: 'Reconocer y comunicar los propios límites físicos y emocionales, y respetar los límites de los demás.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '34',
      titulo: 'Confianza',
      descripcion: 'La fe en uno mismo, en el compañero y en el observador. Es la base emocional sobre la que se construye toda la práctica.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-03',
      titulo: 'Vulnerabilidad',
      descripcion: 'La cualidad de estar abierto y expuesto. La práctica de Acroyoga requiere vulnerabilidad y fomenta un espacio para gestionarla de forma segura.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '28',
      titulo: 'Propiocepción',
      descripcion: 'La conciencia de la posición y el movimiento del cuerpo en el espacio. Es una habilidad que se desarrolla intensamente con la práctica del Acroyoga.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '49',
      titulo: 'Intención',
      descripcion: 'Establecer una meta o enfoque claro antes de intentar una postura. Puede ser la diversión, la conexión, la perfección técnica o simplemente respirar.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '50',
      titulo: 'Rango de Movimiento (Range of Motion)',
      descripcion: 'La amplitud de movimiento de una articulación. Es crucial conocer y respetar los límites propios y del compañero para prevenir lesiones.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '35',
      titulo: 'Juego (Play)',
      descripcion: 'La actitud de explorar, reír y no tomarse la práctica demasiado en serio. El juego fomenta la creatividad y fortalece la conexión.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: '43',
      titulo: 'Jam',
      descripcion: 'Un encuentro informal donde la comunidad de Acroyoga se reúne para practicar, compartir y jugar juntos en un ambiente seguro y colaborativo.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-06',
      titulo: 'Ritual de Inicio y Cierre',
      descripcion: 'Una forma de comenzar y terminar la práctica de manera consciente, a menudo con una calibración de pie, estableciendo una intención o compartiendo gratitud.',
      category: 'Comunicación y Seguridad',
    },
     {
      id: 'ac-cs-07',
      titulo: 'Celebración',
      descripcion: 'El acto de reconocer y celebrar los éxitos, por pequeños que sean. Fomenta un ambiente positivo y de apoyo.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-09',
      titulo: 'Enfriamiento (Cool-down)',
      descripcion: 'Estiramientos suaves y movimientos relajantes al final de la práctica para ayudar al cuerpo a recuperarse y volver a un estado de calma.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-05',
      titulo: 'Postura de Descanso (Resting Pose)',
      descripcion: 'Una postura simple y estable (como Sofá o Pájaro) a la que se puede volver para descansar, recalibrar y comunicarse entre secuencias más difíciles.',
      category: 'Comunicación y Seguridad',
    },
    {
      id: 'ac-cs-10',
      titulo: 'Acro Comunitario',
      descripcion: 'El espíritu de colaboración, inclusión y apoyo mutuo que define a la comunidad de Acroyoga.',
      category: 'Comunicación y Seguridad',
    },
    
    // -- Categoría: Principios Fundamentales --
    {
      id: '5',
      titulo: 'Calibración',
      descripcion: 'Proceso de ajuste mutuo al inicio de una postura para encontrar el equilibrio y los puntos de contacto correctos antes de añadir peso completo.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-09',
      titulo: 'Progresiones de Carga',
      descripcion: 'Aumentar gradualmente la cantidad de peso que el volador pone sobre la base, permitiendo que ambos se acostumbren a la carga de forma segura.',
      category: 'Principios Fundamentales',
    },
    {
      id: '1',
      titulo: 'Apilamiento (Stacking)',
      descripcion: 'Técnica fundamental. Alinear las articulaciones (tobillos, rodillas, caderas, hombros) de la base y el volador para crear una estructura ósea estable y eficiente, reduciendo el esfuerzo muscular.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-01',
      titulo: 'Estructura Ósea',
      descripcion: 'Confiar en el esqueleto y el apilamiento de los huesos para soportar el peso, en lugar de la fuerza muscular. Es la clave de la eficiencia y la longevidad en la práctica.',
      category: 'Principios Fundamentales',
    },
    {
      id: '6',
      titulo: 'Línea',
      descripcion: 'Mantener el cuerpo tenso y en una línea (recta o curva) suave y predecible. Esencial para el volador. Se logra activando el core, glúteos y piernas.',
      category: 'Principios Fundamentales',
    },
    {
      id: '7',
      titulo: 'Hollow Body',
      descripcion: 'Una posición corporal con el core activo para crear una ligera curva cóncava, manteniendo el cuerpo tenso y conectado. Es una "línea" fundamental para el volador.',
      category: 'Principios Fundamentales',
    },
    {
      id: '20',
      titulo: 'Core',
      descripcion: 'El centro del cuerpo (abdominales, lumbares, pélvicos). Es la fuente de estabilidad tanto para la base como para el volador.',
      category: 'Principios Fundamentales',
    },
    {
      id: '8',
      titulo: 'Contrapeso (Counterbalance)',
      descripcion: 'Usar el propio peso para equilibrar al compañero. Ambas personas se inclinan lejos la una de la otra, creando una tensión que genera estabilidad.',
      category: 'Principios Fundamentales',
    },
    {
      id: '19',
      titulo: 'Punto de Equilibrio (Balance Point)',
      descripcion: 'El punto donde el peso del volador está perfectamente equilibrado sobre la base, requiriendo un mínimo esfuerzo para mantener la postura.',
      category: 'Principios Fundamentales',
    },
    {
      id: '29',
      titulo: 'Centro de Gravedad',
      descripcion: 'El punto imaginario donde se concentra la masa de un cuerpo. El objetivo es alinear el centro de gravedad combinado del dúo sobre la base de soporte.',
      category: 'Principios Fundamentales',
    },
    {
      id: '30',
      titulo: 'Base de Soporte',
      descripcion: 'El área formada por los puntos de contacto con el suelo. Una base de soporte más amplia ofrece más estabilidad.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-08',
      titulo: 'Punto de Contacto',
      descripcion: 'Cualquier lugar donde los cuerpos de la base y el volador se tocan. La calidad y precisión de estos puntos son cruciales para la estabilidad.',
      category: 'Principios Fundamentales',
    },
    {
      id: '26',
      titulo: 'Compresión',
      descripcion: 'La acción de juntar y apretar el cuerpo, acercando las rodillas al pecho. Aumenta la estabilidad y facilita ciertas transiciones.',
      category: 'Principios Fundamentales',
    },
    {
      id: '27',
      titulo: 'Extensión',
      descripcion: 'La acción de alargar el cuerpo, creando espacio entre las articulaciones. Es lo opuesto a la compresión.',
      category: 'Principios Fundamentales',
    },
    {
      id: '39',
      titulo: 'Pies Flex',
      descripcion: 'Posición del pie donde los dedos se tiran hacia la espinilla. La base a menudo usa pies en flex para crear una plataforma más estable.',
      category: 'Principios Fundamentales',
    },
    {
      id: '40',
      titulo: 'Pies en Punta',
      descripcion: 'Posición del pie donde se extienden los dedos y el empeine. El volador a menudo usa pies en punta para mantener una línea larga y activa.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-03',
      titulo: 'Vector de Fuerza',
      descripcion: 'La dirección en la que se aplica la fuerza. Comprender los vectores ayuda a la base a dirigir y sostener al volador con un esfuerzo mínimo.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-02',
      titulo: 'Tensegridad',
      descripcion: 'Un principio de la arquitectura que se aplica al cuerpo. Es la integridad generada por la tensión balanceada entre músculos y fascias, creando una estructura fuerte pero flexible.',
      category: 'Principios Fundamentales',
    },
     {
      id: '57',
      titulo: 'Apilamiento Inverso (Reverse Stacking)',
      descripcion: 'Principio de alineación para posturas terapéuticas como el Pájaro Inverso. La base usa sus piernas para sostener la espalda del volador, permitiendo que la gravedad abra el pecho del volador de forma segura.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-07',
      titulo: 'Conexión a Tierra (Grounding)',
      descripcion: 'La sensación de estar conectado y estable con el suelo. Es fundamental para la base, pero también para el volador antes y después de volar.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-10',
      titulo: 'Reciprocidad',
      descripcion: 'La idea de que la práctica es un intercambio mutuo. Ambos roles, base y volador, dan y reciben energía, apoyo y confianza.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-11',
      titulo: 'Inteligencia Kinestésica',
      descripcion: 'La capacidad de ser consciente del propio cuerpo en el espacio y en relación con los demás. Se desarrolla intensamente en Acroyoga.',
      category: 'Principios Fundamentales',
    },
    {
      id: 'ac-pf-04',
      titulo: 'Entrenamiento de Resistencia',
      descripcion: 'La capacidad de mantener una postura estática durante un período prolongado, desarrollando fuerza y resistencia mental.',
      category: 'Principios Fundamentales',
    },
     {
      id: '46',
      titulo: 'Respiración (Breath)',
      descripcion: 'La respiración consciente y sincronizada puede calmar el sistema nervioso y mejorar la conexión y el ritmo entre los practicantes.',
      category: 'Principios Fundamentales',
    },
   
    // -- Categoría: Dinámicas y Transiciones --
    {
      id: '44',
      titulo: 'Prerrequisitos',
      descripcion: 'Las habilidades o posturas fundamentales que se recomienda dominar antes de intentar una postura más avanzada.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '45',
      titulo: 'Progresión',
      descripcion: 'Una serie de pasos o posturas más simples que construyen la fuerza, el equilibrio y la confianza necesarios para una postura más compleja.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '12',
      titulo: 'Transición (Transition)',
      descripcion: 'El movimiento o la secuencia de movimientos que conectan una postura estática con otra.',
      category: 'Dinámicas y Transiciones',
    },
     {
      id: '10',
      titulo: 'Tempo',
      descripcion: 'La velocidad y el ritmo con que se ejecutan las transiciones. Un tempo constante y predecible es clave para la fluidez y la seguridad.',
      category: 'Dinámicas y Transiciones',
    },
     {
      id: 'ac-pf-05',
      titulo: 'Equilibrio Estático',
      descripcion: 'Mantener el equilibrio en una postura fija. Requiere microajustes constantes y una comunicación sutil.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-pf-06',
      titulo: 'Equilibrio Dinámico',
      descripcion: 'Mantener el equilibrio mientras se está en movimiento, como durante una transición o una lavadora.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '9',
      titulo: 'Lavadora (Washing Machine)',
      descripcion: 'Una secuencia de posturas que fluyen continuamente una en la otra, formando un ciclo que puede repetirse varias veces sin detenerse.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '36',
      titulo: 'Flow',
      descripcion: 'Una secuencia de movimientos y posturas que se enlazan de forma fluida y creativa, a menudo con música.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '11',
      titulo: 'Pop',
      descripcion: 'Un pequeño salto o impulso dinámico utilizado para transicionar entre posturas, donde el volador pierde brevemente el contacto con la base.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-06',
      titulo: 'Tuck Pop / Pike Pop / Straddle Pop',
      descripcion: 'Tipos de "pops" (saltos) dinámicos que se nombran según la forma que el volador adopta en el aire (recogido, carpado o a horcajadas).',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '58',
      titulo: 'Whip-Pops',
      descripcion: 'Un tipo avanzado de transición dinámica que utiliza un movimiento de "látigo" para generar impulso y rotación. Es común en transiciones que requieren un cambio rápido de dirección, como de lado a lado. Requiere una conexión y tempo precisos.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-01',
      titulo: 'Helicóptero',
      descripcion: 'Una transición donde el volador gira horizontalmente sobre la base, a menudo pasando de Pájaro Frontal a Pájaro Invertido sin perder el contacto.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-05',
      titulo: 'Spin (Giro)',
      descripcion: 'Una rotación del volador sobre un eje vertical, a menudo sostenido por un solo pie o mano de la base.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-09',
      titulo: 'Switch (Cambio)',
      descripcion: 'Cualquier movimiento que implique un cambio de agarre de manos o pies durante una transición.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-02',
      titulo: 'Freefall',
      descripcion: 'Una transición avanzada donde el volador cae controladamente desde una postura alta (como una parada de manos) a una más baja (como pájaro inverso).',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: 'ac-dt-10',
      titulo: 'Drop (Caída)',
      descripcion: 'Una transición controlada que implica un descenso rápido pero seguro de una postura a otra, a menudo usando la gravedad a favor.',
     },
     {
      id: 'ac-dt-03',
      titulo: 'Relevé',
      descripcion: 'Término de ballet que se usa para describir cuando la base se eleva sobre los omóplatos, levantando la cadera del suelo para dar más altura o rango de movimiento al volador.',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '51',
      titulo: 'Ninja Star',
      descripcion: 'Una lavadora (washing machine) avanzada y dinámica que fluye continuamente entre variaciones de Estrella Invertida (Reverse Star) y Estrella Lateral (Side Star).',
      category: 'Dinámicas y Transiciones',
    },
    {
      id: '52',
      titulo: 'Ninja Bat',
      descripcion: 'Una entrada dinámica a la postura de Murciélago (Bat), que generalmente implica un pequeño salto o "pop" desde los pies de la base.',
      category: 'Dinámicas y Transiciones',
    },
     {
      id: 'ac-dt-04',
      titulo: 'Cascade',
      descripcion: 'Una secuencia fluida de movimientos que a menudo involucra a más de dos personas, pasándose el volador de una base a otra.',
      category: 'Dinámicas y Transiciones',
    },
   
    // -- Categoría: Roles y Estilos de Práctica --
    {
      id: '2',
      titulo: 'Base',
      descripcion: 'La persona con más puntos de contacto con el suelo, proporcionando la plataforma. Requiere fuerza, estabilidad y sensibilidad.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '3',
      titulo: 'Volador (Flyer)',
      descripcion: 'La persona que es elevada del suelo. Requiere confianza, equilibrio, control del core y comunicación.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '16',
      titulo: 'Solar Acro',
      descripcion: 'La parte acrobática y dinámica de la práctica, que desarrolla fuerza, confianza y habilidad. Se asocia con la energía del Sol, activa y enérgica.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '17',
      titulo: 'Lunar Acro',
      descripcion: 'La parte terapéutica y relajante de la práctica (Vuelo Terapéutico, Masaje Tailandés). Se asocia con la energía de la Luna, calmada y receptiva.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '15',
      titulo: 'Vuelo Terapéutico (Therapeutic Flying)',
      descripcion: 'Rama del Acroyoga enfocada en la relajación y el estiramiento. El volador permanece pasivo, mientras la base lo guía a través de estiramientos y masajes en el aire.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '54',
      titulo: 'Masaje Tailandés',
      descripcion: 'Componente de la práctica lunar del Acroyoga, que implica estiramientos asistidos, acupresión y trabajo de líneas energéticas, realizado en el suelo.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '13',
      titulo: 'L-Basing',
      descripcion: 'Un tipo de Acroyoga donde la base está acostada en el suelo ("L" shape), usando tanto sus manos como sus pies para sostener al volador. Es la forma más común y accesible para empezar.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '14',
      titulo: 'Standing Acro',
      descripcion: 'Una forma más avanzada de Acroyoga donde la base está de pie, sosteniendo al volador. Requiere mucha más fuerza, equilibrio y experiencia.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '53',
      titulo: 'Icarian',
      descripcion: 'Un estilo de acrobacias en pareja donde la base usa solo sus pies para lanzar y hacer girar al volador en el aire, a menudo sin conexión de manos. Es extremadamente dinámico.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-07',
      titulo: 'Pitching',
      descripcion: 'Un estilo de acrobacia en el que una o más personas lanzan a un volador al aire para que realice una habilidad (como un salto mortal) y sea atrapado por un receptor.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '18',
      titulo: 'Agarre (Grip)',
      descripcion: 'El tipo de conexión de manos. Diferentes agarres (ej. muñeca con muñeca, palma con palma) ofrecen diferentes niveles de soporte y control.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '23',
      titulo: 'H2H (Hand-to-Hand)',
      descripcion: 'Acrónimo de "Mano a Mano". Posturas avanzadas donde las manos de la base sostienen las manos del volador en equilibrio.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '24',
      titulo: 'F2H (Foot-to-Hand)',
      descripcion: 'Acrónimo de "Pie a Mano". Posturas donde los pies del volador se equilibran sobre las manos de la base.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '55',
      titulo: 'Postura Estática (Static Pose)',
      descripcion: 'Una postura que se mantiene fija por un período de tiempo, enfocándose en el equilibrio, la alineación y la resistencia.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: '25',
      titulo: 'Inversión',
      descripcion: 'Cualquier postura donde la cabeza del volador está por debajo de su corazón.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: '37',
      titulo: 'Simétrico',
      descripcion: 'Una postura donde la forma y la distribución del peso son iguales en ambos lados del cuerpo.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: '38',
      titulo: 'Asimétrico',
      descripcion: 'Una postura donde la forma y la distribución del peso son diferentes en cada lado, lo que a menudo presenta un mayor desafío para el equilibrio.',
      category: 'Roles y Estilos de Práctica'
    },
    {
      id: 'ac-rp-05',
      titulo: 'Líneas Limpias (Clean Lines)',
      descripcion: 'Un objetivo estético en la práctica, donde las formas del cuerpo son precisas, las extremidades están extendidas y las posturas se ven nítidas y definidas.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '41',
      titulo: 'Receptor',
      descripcion: 'En el vuelo terapéutico y el masaje, se refiere a la persona que está en un estado pasivo recibiendo los beneficios del estiramiento y la manipulación.',
      category: 'Roles y Estilos de Práctica',
      },
    {
      id: '42',
      titulo: 'Dador',
      descripcion: 'En el vuelo terapéutico y el masaje, se refiere a la persona que está activamente moviendo, estirando y aplicando presión al receptor.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: '59',
      titulo: 'Sofá de Vishnu (Vishnu\'s Couch)',
      descripcion: 'Una postura de vuelo terapéutico profundamente relajante. El volador descansa de lado sobre las piernas de la base, permitiendo una suave apertura de la cadera y la caja torácica. Es el epítome del cuidado y la relajación en Acroyoga.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-01',
      titulo: 'Trío',
      descripcion: 'Una práctica con tres personas, que a menudo implica dos bases y un volador, o una base, un volador intermedio y un volador superior.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-06',
      titulo: 'Middler (Volador Intermedio)',
      descripcion: 'En una postura de trío o grupo, es la persona que está siendo sostenida por la base y, al mismo tiempo, sostiene a otro volador encima.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-02',
      titulo: 'Grupo',
      descripcion: 'Acrobacias que involucran a cuatro o más personas, a menudo formando pirámides humanas o patrones complejos.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-03',
      titulo: 'Adagio',
      descripcion: 'Un estilo de acrobacia en pareja que se enfoca en movimientos lentos, controlados y fluidos, a menudo con un componente de danza.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-04',
      titulo: 'Dance Lifts (Portés)',
      descripcion: 'Levantamientos y movimientos acrobáticos inspirados en la danza, que a menudo se realizan en una secuencia coreografiada.',
      category: 'Roles y Estilos de Práctica',
    },
    {
      id: 'ac-rp-08',
      titulo: 'Acro Danza',
      descripcion: 'Una fusión de la acrobacia con diferentes estilos de danza, creando una forma de arte expresiva que combina la fuerza con la gracia.',
      category: 'Roles y Estilos de Práctica',
    },
   
    // --- MASAJE TAILANDÉS ---
    
    // -- Subcategoría: Principios Fundamentales y Filosofía --
    {
      id: 'thai-p-01',
      titulo: 'Presencia',
      descripcion: 'La cualidad de estar completamente enfocado y consciente en el momento presente, atento a las necesidades del receptor sin distracciones mentales.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-02',
      titulo: 'Meditación en Movimiento',
      descripcion: 'Un estado mental en el que el dador practica. La mente está enfocada, presente y tranquila, convirtiendo el masaje en una práctica meditativa tanto para el dador como para el receptor.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-03',
      titulo: 'Flow (Fluidez)',
      descripcion: 'La cualidad de una continuidad armónica y sin interrupciones entre las técnicas, permitiendo que la sesión se sienta como un único movimiento largo y meditativo.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-04',
      titulo: 'Grounding (Enraizamiento)',
      descripcion: 'La práctica del dador de mantenerse conectado a la tierra, estable física y energéticamente en cada movimiento para proporcionar un toque seguro y contenido.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-p-05',
      titulo: 'Balance (Equilibrio)',
      descripcion: 'El principio de trabajar ambos lados del cuerpo del receptor de una manera que se sienta completa y equilibrada, promoviendo la simetría energética y física.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-04',
      titulo: 'No Fuerza (Effortless Effort)',
      descripcion: 'Principio clave donde el dador utiliza su propio peso corporal, la gravedad y la palanca para aplicar presión de manera eficiente y profunda, en lugar de usar fuerza muscular. Esto protege al dador y permite una presión más sostenida y relajada.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-09',
      titulo: 'Respiración Sincronizada',
      descripcion: 'El dador intenta sincronizar su respiración con la del receptor, a menudo aplicando presión durante la exhalación del receptor para profundizar la relajación.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-18',
      titulo: 'Escucha Táctil',
      descripcion: 'La habilidad de "escuchar" con las manos, sintiendo la calidad del tejido, la tensión, el ritmo respiratorio y la respuesta energética del receptor.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-14',
      titulo: 'Autoposicionamiento (Dador)',
      descripcion: 'La importancia de que el dador mantenha uma postura ergonômica e consciente (espalda recta, articulaciones apiladas) para proteger su propio cuerpo y canalizar la energía de manera efectiva.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-28',
      titulo: 'Contraindicaciones',
      descripcion: 'Condiciones o situaciones en las que ciertas técnicas de masaje no deben aplicarse o deben modificarse (ej. lesiones agudas, fiebre, embarazo, osteoporosis).',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },
    {
      id: 'thai-33',
      titulo: 'Integración',
      descripcion: 'El período de quietud al final de la sesión, donde se realizan movimientos suaves o simplemente se permite descansar, para que el cuerpo y la mente integren los beneficios del masaje.',
      category: 'Masaje Tailandés',
      subCategory: 'Principios Fundamentales y Filosofía'
    },

    // -- Subcategoría: Contexto Cultural y Ritual --
    {
      id: 'thai-01',
      titulo: 'Nuad Boran',
      descripcion: 'El término tradicional para el Masaje Tailandés, que se traduce como "masaje antiguo". Representa un linaje de sabiduría curativa transmitida a través de generaciones.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-01',
      titulo: 'Jivaka Komarabhacca',
      descripcion: 'Considerado el padre de la medicina tailandesa. Fue el médico personal del Buda y de la comunidad monástica. El Wai Khru a menudo se dirige a él.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-02',
      titulo: 'Wai Khru (Respeto al Maestro)',
      descripcion: 'Un rezo o canto tradicional en Pali que se realiza antes del masaje para mostrar respeto a los maestros del linaje y centrar la intención del dador en la compasión y la curación.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-03',
      titulo: 'Mantras',
      descripcion: 'Cantos o recitaciones sagradas, a menudo en Pali o Sánscrito, que se utilizan al inicio de una sesión para centrar la mente, invocar bendiciones y conectar con el linaje de maestros.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-04',
      titulo: 'Gestos de Mudra',
      descripcion: 'El uso de gestos simbólicos con las manos, especialmente al principio o al final del masaje, como una forma de sellar la intención, mostrar respeto u honrar el espacio sagrado de la práctica.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-05',
      titulo: 'Los 4 Elementos (Dhātu)',
      descripcion: 'Un concepto de la medicina tradicional tailandesa donde la salud es un equilibrio de los cuatro elementos en el cuerpo: Tierra (partes sólidas), Agua (fluidos), Fuego (calor/metabolismo) y Aire (movimiento/respiración).',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },
    {
      id: 'thai-cr-06',
      titulo: 'Ritual de Cierre',
      descripcion: 'Técnicas suaves y conscientes al final de la sesión para "sellar" la energía, ayudar al receptor a regresar suavemente a la plena conciencia y expresar gratitud.',
      category: 'Masaje Tailandés',
      subCategory: 'Contexto Cultural y Ritual'
    },

    // -- Subcategoría: Anatomía Energética --
    {
      id: 'thai-prana',
      titulo: 'Prana',
      descripcion: 'El concepto de "fuerza vital" o "energía vital" (Lom Pran en tailandés) que fluye a través del cuerpo. El objetivo del masaje es equilibrar el flujo de Prana.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-31',
      titulo: 'Vayus (Vientos Energéticos)',
      descripcion: 'Los "vientos" o corrientes de energía vital (Prana) que gobiernan diferentes funciones fisiológicas. El masaje tailandés busca equilibrar el flujo de estos Vayus.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-11',
      titulo: 'Hara',
      descripcion: 'El centro energético y físico del cuerpo, ubicado en el abdomen, aproximadamente tres dedos por debajo del ombligo. Considerado el origen de la energía vital.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-ae-01',
      titulo: 'Puntos de Acupresión (Marma Points)',
      descripcion: 'Puntos específicos en las líneas Sen donde la energía puede estancarse o concentrarse. La aplicación de presión en estos puntos puede liberar bloqueos.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },
    {
      id: 'thai-ae-02',
      titulo: 'Puntos de Puerta de Viento',
      descripcion: 'Puntos de acupresión importantes, a menudo ubicados en las articulaciones, que se consideran "puertas" donde el viento (Lom o Prana) puede quedar atrapado, causando dolor o rigidez.',
      category: 'Masaje Tailandés',
      subCategory: 'Anatomía Energética'
    },

    // -- Subcategoría: Las 10 Líneas Sen Principales --
    {
      id: 'thai-03',
      titulo: 'Sen Sib (Líneas de Energía)',
      descripcion: 'Las diez líneas de energía principales (similares a los Nadis del yoga) que recorren el cuerpo por donde fluye el Prana. El masaje se centra en desbloquear estas líneas. Se dice que en total existen más de 72,000 líneas Sen.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-01',
      titulo: '1. Sen Sumana',
      descripcion: 'La línea central. Comienza dos pulgadas por encima del ombligo, sube por el centro del torso hasta el esternón, recorre el cuello y termina en la punta de la lengua. Gobierna el habla y el gusto.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-02',
      titulo: '2. Sen Ittha (Izquierda) y 3. Sen Pingkhala (Derecha)',
      descripcion: 'Similares a Ida y Pingala en yoga. Ittha (lunar) comienza en la fosa nasal izquierda, recorre el lado izquierdo de la cabeza, cuello y espalda, y baja por la pierna izquierda. Pingkhala (solar) hace lo mismo en el lado derecho. Gobiernan la energía, la respiración y los sentidos.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-03',
      titulo: '4. Sen Kalathari',
      descripcion: 'Controla la circulación de la energía en los brazos, las manos y los dedos. Comienza cerca del ombligo y se ramifica hacia arriba, pasando por el pecho, los hombros y bajando por el interior de los brazos hasta los dedos. También baja por las piernas.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-04',
      titulo: '5. Sen Sahatsarangsi (Ojos) y 6. Sen Thawari (Ojos)',
      descripcion: 'Estas dos líneas controlan la energía en los ojos. Sahatsarangsi (izquierda) y Thawari (derecha) comienzan cerca del ombligo, suben por el torso y la cara hasta terminar en los ojos. Trabajar estas líneas puede aliviar dolores de cabeza y tensión ocular.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-05',
      titulo: '7. Sen Lawusang (Oídos) y 8. Sen Ulangka (Oídos)',
      descripcion: 'Controlan la energía en los oídos. Lawusang (izquierda) y Ulangka (derecha) también comienzan cerca del ombligo y ascienden por el costado del cuerpo y el cuello hasta los oídos. Están asociadas con la audición y el equilibrio.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-06',
      titulo: '9. Sen Nanthakrawat',
      descripcion: 'Gobierna la eliminación. Comienza cerca del ombligo, desciende hasta la vejiga y los órganos excretores, y luego sube por la espalda hasta el cuello. También conocido como Sen Sikhini.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },
    {
      id: 'thai-sen-07',
      titulo: '10. Sen Khitchanna',
      descripcion: 'Gobierna los órganos reproductivos. Comienza cerca del ombligo, desciende a la zona genital y luego sube por el interior de las piernas. También conocido como Sen Sukhumang.',
      category: 'Masaje Tailandés',
      subCategory: 'Las 10 Líneas Sen Principales'
    },


    // -- Subcategoría: Técnicas de Aplicación de Presión --
    {
      id: 'thai-palming',
      titulo: 'Palming (Presión Palmar)',
      descripcion: 'Una de las técnicas más básicas y versátiles. Se aplica presión con toda la palma de la mano para calentar los tejidos, trabajar áreas amplias (espalda, piernas, pies, glúteos) y evaluar la tensión general del cuerpo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-06',
      titulo: 'Thumb Pressing (Presión con Pulgar)',
      descripcion: 'Técnica para aplicar presión más específica y profunda en puntos a lo largo de las líneas Sen, utilizando la yema del pulgar. Requiere cuidado para no sobrecargar la articulación del dador.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-17',
      titulo: 'Foot Pressing (Presión con Pie)',
      descripcion: 'El dador utiliza sus pies para aplicar una presión amplia y fuerte sobre el receptor, especialmente en las piernas y la espalda. Permite un gran uso del peso corporal.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-tap-01',
      titulo: 'Knee Pressing (Presión con Rodilla)',
      descripcion: 'El dador utiliza su rodilla para aplicar una presión amplia y sostenida, a menudo en los isquiotibiales o la espalda del receptor, mientras tiene las manos libres para otras técnicas.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-16',
      titulo: 'Elbow Pressing (Presión con Codo)',
      descripcion: 'Una técnica para aplicar una presión muy profunda y específica en áreas densas como los glúteos o la espalda, utilizando la punta del codo. Permite ahorrar energía al dador.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-tap-05',
      titulo: 'Static Pressure (Presión Estática)',
      descripcion: 'Mantener una presión constante y sostenida en un punto de acupresión durante varias respiraciones para permitir que el tejido se relaje y libere profundamente.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },
    {
      id: 'thai-tap-04',
      titulo: 'Leverage (Uso de Palanca)',
      descripcion: 'El uso inteligente del propio cuerpo (brazos, piernas) como palancas para aplicar presión o facilitar un estiramiento con un mínimo esfuerzo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Aplicación de Presión'
    },

    // -- Subcategoría: Técnicas de Movimiento y Estiramiento --
    {
      id: 'thai-07',
      titulo: 'Estiramientos Asistidos',
      descripcion: 'Una característica distintiva del Masaje Tailandés, a menudo llamado "yoga para perezosos". El dador guía suavemente al receptor a través de estiramientos pasivos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-12',
      titulo: 'Movilización Articular',
      descripcion: 'Técnicas suaves de rotación y movimiento para mejorar la movilidad y lubricar las articulaciones (tobillos, muñecas, caderas, hombros).',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-13',
      titulo: 'Tracción',
      descripcion: 'La acción de tirar suavemente de una extremidad o la columna para crear espacio en las articulaciones y descomprimir los tejidos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-27',
      titulo: 'Rocking (Mecer)',
      descripcion: 'Un movimiento rítmico de mecer el cuerpo del receptor para calmar el sistema nervioso, inducir una relajación profunda y liberar la tensión superficial.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-tms-01',
      titulo: 'Shaking (Sacudir)',
      descripcion: 'Una técnica vigorizante en la que se sacuden suavemente las extremidades para liberar la tensión estancada y estimular el flujo de energía.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-01',
      titulo: 'Percusión (Tapotement)',
      descripcion: 'Golpes rítmicos y ligeros con las manos ahuecadas o los puños sueltos para estimular los músculos y la energía, a menudo al final de una sección de trabajo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-02',
      titulo: 'Apertura de la palma',
      descripcion: 'Una serie de estiramientos y presiones específicas aplicadas a la palma, los dedos y la muñeca para liberar la tensión del uso repetitivo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-03',
      titulo: 'Estiramiento de los dedos del pie',
      descripcion: 'Movimientos de flexión, extensión y rotación de cada dedo del pie para liberar la tensión y estimular las terminaciones de las líneas Sen.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-04',
      titulo: 'Balanceo de piernas',
      descripcion: 'Una técnica de movimiento pasivo en la que el dador balancea suavemente las piernas del receptor de lado a lado para relajar las caderas y la zona lumbar.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-05',
      titulo: 'Tracción de brazo en cruz',
      descripcion: 'Con el receptor en supino, se lleva un brazo cruzado sobre el pecho para estirar el deltoides posterior y los músculos alrededor del omóplato.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-06',
      titulo: 'Doble estiramiento de isquiotibiales',
      descripcion: 'El dador levanta ambas piernas del receptor juntas para un estiramiento simétrico y profundo de la parte posterior de las piernas y la espalda baja.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-07',
      titulo: 'Estiramiento del cuádriceps prono',
      descripcion: 'Con el receptor boca abajo, el dador dobla la rodilla y lleva el talón hacia el glúteo para estirar la parte frontal del muslo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-08',
      titulo: 'Apertura de cadera con pierna de loto',
      descripcion: 'Una técnica avanzada en la que se guía la pierna del receptor a una posición de medio loto para una apertura profunda de la cadera.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-09',
      titulo: 'Flexión lateral del cuello',
      descripcion: 'Un estiramiento suave en el que el dador inclina la cabeza del receptor hacia un hombro mientras estabiliza el hombro opuesto.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-10',
      titulo: 'Rotación del torso sentado',
      descripcion: 'El dador guía al receptor en una torsión espinal mientras está sentado, utilizando las piernas como anclaje.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-11',
      titulo: 'Elevación de hombros sentado',
      descripcion: 'El dador se coloca detrás del receptor sentado y levanta suavemente los hombros hacia las orejas y luego los libera para aliviar la tensión del trapecio.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-12',
      titulo: 'Estiramiento de la ingle en supino',
      descripcion: 'Con una pierna estirada, la otra se abre hacia un lado (en abducción) para estirar la cara interna del muslo.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-13',
      titulo: 'Rastrillar (Raking)',
      descripcion: 'Técnica en la que se usan los dedos juntos y ligeramente curvados para "rastrillar" o peinar los músculos, a menudo a lo largo de la espalda o las piernas.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-14',
      titulo: 'Estiramiento de la fascia plantar',
      descripcion: 'Aplicar presión y estiramiento a lo largo de la planta del pie, desde el talón hasta los dedos, para aliviar la fascitis plantar y la tensión general.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-15',
      titulo: 'Circunducción de cadera',
      descripcion: 'El dador sostiene una pierna del receptor y la mueve en círculos grandes y lentos para lubricar y liberar la articulación de la cadera.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-16',
      titulo: 'Deslizamiento del antebrazo',
      descripcion: 'Uso del antebrazo para aplicar una presión amplia y deslizante a lo largo de grandes grupos musculares como los cuádriceps, isquiotibiales o la espalda.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-17',
      titulo: 'Plegado de la hoja (Leaf Fold)',
      descripcion: 'Con el receptor sentado, el dador lo guía en una flexión hacia adelante sobre las piernas, aplicando una suave presión en la espalda.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-18',
      titulo: 'Estiramiento del Gato (Cat Stretch)',
      descripcion: 'En posición de cuatro apoyos, el dador aplica presión en la espalda del receptor mientras este arquea y redondea la columna, similar a la postura gato-vaca del yoga.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-19',
      titulo: 'Tracción de la columna vertebral prono',
      descripcion: 'Mientras el receptor está boca abajo, el dador tira suavemente de los tobillos para crear una ligera descompresión en la columna lumbar.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-20',
      titulo: 'Estiramiento del Pectoral en la pared (Asistido)',
      descripcion: 'El dador utiliza una pared o su propio cuerpo para estabilizar el brazo del receptor y facilitar un estiramiento profundo del pectoral.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-21',
      titulo: 'Masaje en los músculos intercostales',
      descripcion: 'Con el receptor de lado, se aplica una presión suave y cuidadosa entre las costillas para liberar la tensión respiratoria.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-22',
      titulo: 'Estiramiento del Piriforme en posición supina',
      descripcion: 'Una variación de la apertura de cadera en "4", enfocada específicamente en estirar el músculo piriforme, a menudo implicado en la ciática.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-23',
      titulo: 'Movilización del omóplato',
      descripcion: 'Técnicas para levantar y mover suavemente el omóplato, liberándolo de la caja torácica para mejorar la movilidad del hombro.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-24',
      titulo: 'Torsión con las piernas de águila',
      descripcion: 'Con el receptor en supino, se cruzan las piernas en la postura del águila (Garudasana) y luego se lleva a una torsión para intensificar el estiramiento en la cadera y la banda IT.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-25',
      titulo: 'Estiramiento de la pantorrilla y el tendón de Aquiles',
      descripcion: 'Aplicar presión con el pie flexionado del receptor para estirar los músculos de la pantorrilla (gastrocnemio y sóleo) y el tendón de Aquiles.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-26',
      titulo: 'Masaje del cuero cabelludo',
      descripcion: 'Técnicas de presión y masaje circular en todo el cuero cabelludo para liberar la tensión mental, a menudo realizadas al final de la sesión.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-27',
      titulo: 'Presión en el punto de la vesícula biliar 21',
      descripcion: 'Una presión específica en la parte superior del músculo trapecio, conocida por aliviar la tensión del cuello y los hombros y los dolores de cabeza.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-28',
      titulo: 'Apertura de la línea del brazo interior',
      descripcion: 'Estirar el brazo del receptor y aplicar presión con el pulgar a lo largo de la cara interna del brazo, desde la axila hasta la muñeca, para trabajar las líneas Sen del corazón y el pulmón.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-29',
      titulo: 'Pisotón en los isquiotibiales',
      descripcion: 'Con el receptor en prono, el dador utiliza su pie para aplicar una presión amplia y profunda sobre los isquiotibiales.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-30',
      titulo: 'Flexión hacia adelante con bloqueo de rodillas',
      descripcion: 'En posición sentada, el dador coloca sus pies contra la espalda baja del receptor y tira de sus manos para facilitar una flexión hacia adelante profunda y segura.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'tms-new-31',
      titulo: 'Estiramiento de la mariposa reclinada',
      descripcion: 'Una versión pasiva de Baddha Konasana donde el receptor está tumbado y el dador aplica una suave presión en los muslos internos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-24',
      titulo: 'Bloqueo (Lock)',
      descripcion: 'El uso de las piernas o los brazos del dador para estabilizar una parte del cuerpo del receptor, permitiendo un estiramiento más profundo y específico en otra parte.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-23',
      titulo: 'Elevaciones Terapéuticas',
      descripcion: 'Técnicas donde el dador levanta una parte significativa del cuerpo del receptor para aplicar tracción profunda, como en la "Elevación de Caderas".',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-22',
      titulo: 'Transiciones Dinámicas',
      descripcion: 'Mover al receptor de una posición a otra de manera fluida y consciente, como parte de una danza terapéutica.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-tms-02',
      titulo: 'Blood Stop (Parada de Sangre)',
      descripcion: 'Una técnica avanzada en la que se aplica presión a una arteria principal (generalmente la femoral o la braquial) durante un corto período de tiempo y luego se libera, creando una oleada de sangre fresca y energía en la extremidad.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },
    {
      id: 'thai-tms-03',
      titulo: 'Twisting (Torsión)',
      descripcion: 'Técnicas que aplican una torsión suave a la columna vertebral o a las caderas para liberar la tensión, mejorar la flexibilidad espinal y estimular los órganos internos.',
      category: 'Masaje Tailandés',
      subCategory: 'Técnicas de Movimiento y Estiramiento'
    },

    // -- Subcategoría: Posiciones del Receptor --
    {
      id: 'thai-10',
      titulo: 'Posición Supina',
      descripcion: 'El receptor está acostado boca arriba. Es la posición más común y permite trabajar la parte frontal del cuerpo, las piernas y los brazos.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-20',
      titulo: 'Posición Lateral',
      descripcion: 'El receptor está acostado de lado. Permite un excelente acceso a las caderas, los hombros, la espalda y la banda iliotibial.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-19',
      titulo: 'Posición Prona',
      descripcion: 'El receptor está acostado boca abajo. Esta posición es ideal para trabajar la espalda, los glúteos y la parte posterior de las piernas.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-pr-01',
      titulo: 'Posición Sentada',
      descripcion: 'El receptor está sentado, a menudo con las piernas cruzadas. Es la posición tradicional para trabajar el cuello, los hombros, la cabeza y la cara.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    {
      id: 'thai-pr-02',
      titulo: 'Secuencia (Sequence)',
      descripcion: 'Una serie predefinida de movimientos y técnicas que se aplican en una de las posiciones. Un masaje completo fluye a través de secuencias en las cuatro posiciones.',
      category: 'Masaje Tailandés',
      subCategory: 'Posiciones del Receptor'
    },
    
    // -- Subcategoría: Los Cuatro Estados Sublimes (Bhavana) --
     {
      id: 'thai-bhavana-intro',
      titulo: 'Los Cuatro Estados Sublimes (Bhavana)',
      descripcion: 'Son cuatro cualidades mentales virtuosas y el ideal de la práctica budista theravada. En el contexto del Masaje Tailandés, cultivar estos estados convierte la técnica en una práctica espiritual profunda. Se cultivan en orden: Metta es la base de Karuna y Mudita, y Upekkha es la culminación de los tres.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-metta-reordered', // Renamed id to avoid conflict
      titulo: '1. Metta (Amor Benevolente)',
      descripcion: 'El primer estado sublime. La intención incondicional de desear la felicidad y el bienestar a todos los seres. En el masaje, es el acto de tocar con una intención de cuidado puro y benevolencia, y es la base de los demás estados.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-karuna',
      titulo: '2. Karuna (Compasión)',
      descripcion: 'El segundo estado sublime. El deseo activo de aliviar el sufrimiento de los demás. Nace de Metta cuando se encuentra con el dolor.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-mudita',
      titulo: '3. Mudita (Alegría Empática)',
      descripcion: 'El tercer estado sublime. La capacidad de sentir alegría por la felicidad y la fortuna de los demás, sin envidia ni comparación. Es el antídoto contra los celos.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },
    {
      id: 'thai-bhavana-upekkha',
      titulo: '4. Upekkha (Ecuanimidad)',
      descripcion: 'El cuarto estado sublime. La capacidad de mantener la calma, la imparcialidad y la estabilidad mental ante las fluctuaciones de la vida. Es aceptar la realidad tal como es, sin apego ni aversión.',
      category: 'Masaje Tailandés',
      subCategory: 'Los Cuatro Estados Sublimes (Bhavana)'
    },

    // -- Subcategoría: Herramientas y Entorno --
    {
      id: 'thai-he-01',
      titulo: 'Futón de Masaje',
      descripcion: 'La superficie tradicional para el masaje tailandés. Es un colchón firme pero cómodo en el suelo, que permite al dador usar su peso corporal y moverse libremente alrededor del receptor.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-02',
      titulo: 'Ropa Cómoda',
      descripcion: 'A diferencia de otros masajes, el masaje tailandés se realiza con ropa. Tanto el dador como el receptor deben usar ropa suelta y cómoda que permita el movimiento y el estiramiento.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-05',
      titulo: 'Espacio Sagrado',
      descripcion: 'Crear un entorno tranquilo, limpio y respetuoso que invite a la relajación y la confianza. Esto puede incluir música suave, iluminación tenue y una temperatura agradable.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-03',
      titulo: 'Compresas Herbales (Luk Pra Kob)',
      descripcion: 'Bolsas de tela llenas de una mezcla de hierbas aromáticas y medicinales que se calientan al vapor y se aplican sobre el cuerpo para aliviar el dolor, la inflamación y relajar los músculos.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-he-04',
      titulo: 'Herramientas de Madera',
      descripcion: 'En algunas variantes, se utilizan pequeñas herramientas de madera para aplicar presión muy precisa en puntos de los pies o las manos (Reflexología Tailandesa).',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },
    {
      id: 'thai-25',
      titulo: 'Wuotai',
      descripcion: 'Un estilo derivado del masaje tailandés y la osteopatía, que introduce movimientos circulares, en espiral y ondulatorios, enfocándose en la fascia y la fluidez. Es como una danza terapéutica.',
      category: 'Masaje Tailandés',
      subCategory: 'Herramientas y Entorno'
    },

    // --- YOGA ---

    // -- Subcategoría: Filosofía y Conceptos Clave --
    {
      id: 'yoga-01',
      titulo: 'Yoga',
      descripcion: 'Del sánscrito "yuj", que significa "unión". Es una disciplina física, mental y espiritual originaria de la India. Busca la unión del cuerpo, la mente y el espíritu, y en última instancia, la unión de la conciencia individual con la conciencia universal.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-hinduism-buddhism',
        titulo: 'Hinduismo y Budismo: Orígenes Compartidos',
        descripcion: 'El Yoga tiene sus raíces en las tradiciones védicas del Hinduismo, mientras que el Masaje Tailandés está profundamente influenciado por el Budismo. Ambas tradiciones nacieron en la India y comparten conceptos fundamentales como Karma, Dharma, Samsara (el ciclo de renacimiento) y la importancia de la meditación y la liberación del sufrimiento. La principal diferencia filosófica radica en el concepto del "Ser": el Hinduismo postula la existencia de un alma eterna e individual (Atman), mientras que el Budismo enseña la doctrina del "no-ser" (Anatta). Esta conexión/distinción enriquece la práctica, viendo el Yoga como un camino hacia la unión con el Ser y el Masaje Tailandés como una práctica de compasión (Karuna) y amor benevolente (Metta) hacia todos los seres.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-shiva',
        titulo: 'Shiva (El Adi Yogi)',
        descripcion: 'En la mitología hindú, Shiva es una de las deidades principales, conocido como "el destructor" de la ignorancia y el ego. En el contexto del yoga, es venerado como el Adi Yogi, el primer yogui y el primer gurú. Representa la conciencia pura (Purusha), el principio masculino, inmutable y trascendente. En textos como el Shiva Samhita, Él transmite la sabiduría del yoga a Parvati.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-shakti-parvati',
        titulo: 'Shakti/Parvati (Energía Divina Femenina)',
        descripcion: 'Shakti es la energía cósmica, dinámica y creativa que anima el universo. Es el principio femenino (Prakriti), la contraparte de la conciencia pura (Shiva). Parvati es una de las manifestaciones más conocidas de Shakti, la consorte de Shiva. La unión de Shiva y Shakti simboliza la meta del yoga: la integración de la conciencia y la energía, lo estático y lo dinámico, para alcanzar la totalidad y la iluminación.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-05',
      titulo: 'Yoga Sutras de Patanjali',
      descripcion: 'Un texto fundamental del yoga, compuesto por 196 aforismos o "sutras" que describen el camino del yoga a través de los ocho miembros (Ashtanga).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
        id: 'yoga-shiva-samhita',
        titulo: 'Shiva Samhita',
        descripcion: 'Un texto clásico y antiguo de yoga, presentado como un diálogo entre el dios Shiva y su consorte Parvati. Detalla el conocimiento y las prácticas del yoga, incluyendo la importancia de la purificación de los nadis a través del pranayama.',
        category: 'Yoga',
        subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-52',
      titulo: 'Advaita Vedanta',
      descripcion: 'Una de las escuelas filosóficas más influyentes del hinduismo, que postula la no-dualidad: la identidad esencial del Ser individual (Atman) y la Realidad Última (Brahman).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-46',
      titulo: 'Atman',
      descripcion: 'El "Ser" individual o el alma; la esencia divina, inmutable y eterna de una persona.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-47',
      titulo: 'Brahman',
      descripcion: 'La realidad última o la conciencia universal; el principio divino que lo impregna todo en el universo. La unión de Atman con Brahman es el objetivo del yoga.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-54',
      titulo: 'Satchitananda',
      descripcion: 'Un término sánscrito que describe la naturaleza de la realidad última (Brahman): Sat (ser, existencia), Chit (consciencia) y Ananda (dicha, felicidad absoluta).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-02',
      titulo: 'Dharma',
      descripcion: 'A menudo traducido como "deber", "propósito" o "ley cósmica". Se refiere al camino correcto o al propósito de vida de un individuo, en armonía con el orden universal.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-03',
      titulo: 'Karma',
      descripcion: 'La ley de causa y efecto. Cada acción, palabra y pensamiento genera una consecuencia que moldea el futuro del individuo. No es un castigo, sino un principio de equilibrio.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-10',
      titulo: 'Maya',
      descripcion: 'La ilusión cósmica; la percepción del mundo material como la única realidad, velando la verdadera naturaleza del Ser (Atman).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-55',
      titulo: 'Purusha',
      descripcion: 'En la filosofía Samkhya (base del yoga), Purusha es la conciencia pura, el espectador inmutable y eterno.',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-56',
      titulo: 'Prakriti',
      descripcion: 'La contraparte de Purusha. Es la naturaleza primordial, la materia, la fuente de todo el mundo fenoménico y sus cualidades (las Gunas).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-09',
      titulo: 'Las Gunas (Sattva, Rajas, Tamas)',
      descripcion: 'Las tres cualidades o energías fundamentales de la naturaleza (Prakriti): Sattva (pureza, equilibrio), Rajas (actividad, pasión) y Tamas (inercia, oscuridad).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },
    {
      id: 'yoga-06',
      titulo: 'Gurú',
      descripcion: 'Un maestro espiritual que guía al estudiante en el camino del yoga, disipando la oscuridad de la ignorancia (de "gu", oscuridad, y "ru", el que la disipa).',
      category: 'Yoga',
      subCategory: 'Filosofía y Conceptos Clave'
    },

    // -- Subcategoría: El Ciclo de Samsara y la Liberación --
    {
        id: 'yoga-samsara-intro',
        titulo: 'Samsara',
        descripcion: `El ciclo de nacimiento, muerte y renacimiento, caracterizado por el sufrimiento (Dukkha), que se perpetúa por el Karma generado a partir de la Ignorancia (Avidya). El objetivo del yoga es la liberación (Moksha) de este ciclo.

**Diagrama del Ciclo:**

      ┌─────────────────┐
      │  Ignorancia (Avidya)  │
      └─────────┬─────────┘
                │ (Causa)
                ▼
      ┌─────────────────┐
      │   Acciones (Karma)  │
      └─────────┬─────────┘
                │ (Generan)
                ▼
┌───►  Ciclo de Renacimiento (Samsara)  ◄───┐
│     └─────────┬─────────┘             │
│               │ (Resulta en)            │
│               ▼                       │
│     ┌─────────────────┐             │
│     │ Sufrimiento (Dukkha)│             │
└─────└─────────────────┘─────────────┘
          (Perpetúa la Ignorancia)

**El Camino a la Liberación (Moksha):**

      ┌──────────────────┐
      │   Práctica (Abhyasa) │
      └─────────┬──────────┘
                │
                ▼
      ┌──────────────────┐
      │ Desapego (Vairagya) │
      └─────────┬──────────┘
                │ (Conducen a)
                ▼
      ┌──────────────────┐
      │   Liberación (Moksha)  │
      └──────────────────┘`,
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-avidya',
        titulo: 'Avidya (Ignorancia)',
        descripcion: 'La ignorancia metafísica, la raíz del sufrimiento. Es la incapacidad de ver la realidad tal como es, confundiendo lo impermanente con lo permanente y el no-ser con el verdadero Ser (Atman). Es la causa principal que nos mantiene atrapados en el ciclo de Samsara.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-53',
        titulo: 'Dukkha (Sufrimiento)',
        descripcion: 'Un concepto central en el budismo y el yoga que se refiere al sufrimiento, la insatisfacción o el estrés inherente a la vida no examinada, surgido de la ignorancia y el apego.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-51',
        titulo: 'Abhyasa (Práctica)',
        descripcion: 'La práctica persistente, disciplinada y dedicada a lo largo del tiempo. Es el esfuerzo consciente para alcanzar y mantener un estado de calma mental. Es uno de los dos pilares para la liberación.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-50',
        titulo: 'Vairagya (Desapego)',
        descripcion: 'El desapego o la no-adherencia a los deseos, los resultados de las acciones y los objetos materiales. Es la capacidad de permanecer ecuánime. Es el segundo pilar para la liberación.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    {
        id: 'yoga-08',
        titulo: 'Moksha (Liberación)',
        descripcion: 'La liberación final del ciclo de Samsara. Es el estado de emancipación, autorrealización e iluminación, alcanzado a través de la sabiduría que erradica la ignorancia (Avidya). Es el objetivo último del yoga.',
        category: 'Yoga',
        subCategory: 'El Ciclo de Samsara y la Liberación'
    },
    
    // -- Subcategoría: Términos Comunes --
    {
      id: 'yoga-34',
      titulo: 'Namaste',
      descripcion: 'Un saludo tradicional que significa "lo divino en mí se inclina ante lo divino en ti". A menudo se dice al principio o al final de la clase.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-35',
      titulo: 'Om (Aum)',
      descripcion: 'Se considera el sonido primordial del universo. Cantarlo al principio o al final de la práctica simboliza la conexión con todo lo que existe.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-36',
      titulo: 'Mantra',
      descripcion: 'Una palabra, sonido o frase sagrada que se repite para enfocar la mente durante la meditación.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-37',
      titulo: 'Mudra',
      descripcion: 'Un gesto simbólico o "sello" realizado con las manos y los dedos. Cada mudra tiene un propósito específico para canalizar la energía.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-38',
      titulo: 'Sánscrito',
      descripcion: 'La antigua lengua litúrgica de la India, en la que se escribieron los textos clásicos del yoga. Los nombres de las posturas suelen estar en sánscrito.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-pali-lang',
      titulo: 'Pali',
      descripcion: 'Una lengua prácrita o vernácula de la India antigua, estrechamente relacionada con el sánscrito. Es el idioma litúrgico del budismo Theravada, y muchos términos del Masaje Tailandés, como "Metta", provienen de él.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-39',
      titulo: 'Shanti',
      descripcion: 'Significa "paz" en sánscrito. A menudo se canta tres veces al final de una práctica ("Om shanti, shanti, shanti") para invocar la paz en el cuerpo, la palabra y la mente.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-40',
      titulo: 'Yogui / Yoguini',
      descripcion: 'Un practicante masculino (yogui) o femenino (yoguini) de yoga.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-41',
      titulo: 'Drishti',
      descripcion: 'Un punto de enfoque para la mirada durante la práctica de asanas. Ayuda a mejorar la concentración y el equilibrio.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-66',
      titulo: 'Asana',
      descripcion: 'Término sánscrito para una postura física de yoga. Aunque es solo uno de los 8 miembros, es el aspecto más conocido del yoga en Occidente.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-42',
      titulo: 'Savasana (Postura del Cadáver)',
      descripcion: 'La postura de relajación final. El practicante se tumba boca arriba en quietud total para integrar los beneficios de la práctica.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },
    {
      id: 'yoga-67',
      titulo: 'Props (Soportes)',
      descripcion: 'Accesorios utilizados para ayudar en la práctica de asanas, como bloques, cinturones, mantas y bolsters. Son fundamentales en estilos como Iyengar y Restaurativo.',
      category: 'Yoga',
      subCategory: 'Términos Comunes'
    },

    // -- Subcategoría: Tipos de Yoga --
    {
      id: 'yoga-26',
      titulo: 'Hatha Yoga',
      descripcion: 'A menudo se usa como un término general para el yoga físico. Tradicionalmente, se refiere a un sistema que equilibra las energías opuestas (Ha-sol, Tha-luna). Generalmente son clases de ritmo más lento, enfocadas en la alineación.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-27',
      titulo: 'Vinyasa Yoga',
      descripcion: 'Un estilo dinámico donde las posturas (asanas) se enlazan fluidamente con la respiración (pranayama), creando una secuencia continua de movimientos.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-28',
      titulo: 'Ashtanga Yoga',
      descripcion: 'Un sistema riguroso y físicamente exigente. Aunque su nombre se inspira en los "ocho miembros" de Patanjali, el término se refiere al método de Vinyasa fundado por K. Pattabhi Jois, que sigue una serie de posturas predefinidas y progresivas.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-29',
      titulo: 'Iyengar Yoga',
      descripcion: 'Un estilo que enfatiza la precisión y la alineación detallada en cada postura. Utiliza props (soportes) como bloques, cinturones y mantas para ayudar a los estudiantes a lograr la postura correcta.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-30',
      titulo: 'Bikram Yoga',
      descripcion: 'Una serie fija de 26 posturas y 2 ejercicios de respiración, practicada en una habitación calentada a unos 40°C. Fundado por Bikram Choudhury.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-31',
      titulo: 'Kundalini Yoga',
      descripcion: 'Un estilo que se enfoca en despertar la energía Kundalini a través de kriyas (conjuntos de posturas), pranayama, mantras y meditación.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-32',
      titulo: 'Yin Yoga',
      descripcion: 'Un estilo lento y meditativo donde las posturas se mantienen durante largos períodos (varios minutos) para trabajar los tejidos conectivos profundos (fascia, ligamentos).',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-33',
      titulo: 'Yoga Restaurativo',
      descripcion: 'Una práctica suave y terapéutica que utiliza props para sostener el cuerpo completamente, permitiendo una relajación profunda y la sanación del sistema nervioso.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-64',
      titulo: 'Anusara Yoga',
      descripcion: 'Un estilo moderno de Hatha Yoga que enfatiza los "Principios Universales de Alineación" y una filosofía tántrica que celebra el corazón y la bondad intrínseca.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },
    {
      id: 'yoga-65',
      titulo: 'Jivamukti Yoga',
      descripcion: 'Un estilo de Vinyasa que integra enseñanzas espirituales, canto, meditación, lecturas y música, junto con un enfoque en el veganismo y el activismo.',
      category: 'Yoga',
      subCategory: 'Tipos de Yoga'
    },

    // -- Subcategoría: Los 8 Miembros del Yoga (Ashtanga) --
    {
      id: 'yoga-11',
      titulo: 'Los 8 Miembros del Yoga (Ashtanga)',
      descripcion: 'El marco filosófico del yoga clásico, descrito por Patanjali en los Yoga Sutras. "Ashtanga" significa literalmente "ocho miembros" y es la base del Raja Yoga. No debe confundirse con el estilo de yoga físico del mismo nombre fundado por K. Pattabhi Jois.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-ahimsa',
      titulo: '1. Yama: Ahimsa (No Violencia)',
      descripcion: 'El principio de "no dañar", tanto en acción, palabra como pensamiento, hacia uno mismo y hacia todos los seres vivos.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-satya',
      titulo: '1. Yama: Satya (Veracidad)',
      descripcion: 'La honestidad y la verdad en pensamiento, palabra y obra. Comunicarse de manera auténtica y sin intención de engañar.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-asteya',
      titulo: '1. Yama: Asteya (No Robar)',
      descripcion: 'No tomar lo que no nos ha sido dado libremente, incluyendo propiedades, tiempo, ideas o energía de otros.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-brahmacharya',
      titulo: '1. Yama: Brahmacharya (Continencia)',
      descripcion: 'Originalmente interpretado como celibato, modernamente se entiende como el uso responsable y consciente de nuestra energía, especialmente la sexual.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-yama-aparigraha',
      titulo: '1. Yama: Aparigraha (No Codicia)',
      descripcion: 'La ausencia de avaricia y la capacidad de tomar solo lo que es necesario, sin acumular posesiones o aferrarse a ellas.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
     {
      id: 'yoga-niyama-saucha',
      titulo: '2. Niyama: Saucha (Limpieza)',
      descripcion: 'La pureza y limpieza del cuerpo (externa) y de la mente (interna), incluyendo pensamientos y emociones.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-santosha',
      titulo: '2. Niyama: Santosha (Contento)',
      descripcion: 'Cultivar la satisfacción y la aceptación de lo que tenemos y de nuestra situación actual, sin anhelar constantemente más.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-tapas',
      titulo: '2. Niyama: Tapas (Disciplina)',
      descripcion: 'La autodisciplina, el esfuerzo ardiente o la austeridad que "quema" las impurezas y fortalece la voluntad.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-svadhyaya',
      titulo: '2. Niyama: Svadhyaya (Autoestudio)',
      descripcion: 'El estudio de los textos sagrados y, más importante, el estudio de uno mismo, la auto-observación y la introspección.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-niyama-ishvara',
      titulo: '2. Niyama: Ishvara Pranidhana (Entrega)',
      descripcion: 'La entrega o rendición a una fuerza superior, a lo divino o al universo. Es un acto de confianza y de soltar el ego.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-13',
      titulo: '3. Asana (Postura)',
      descripcion: 'Las posturas físicas del yoga. Originalmente, se refería a una "postura sentada firme y cómoda" para la meditación.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-14',
      titulo: '4. Pranayama (Control de la Respiración)',
      descripcion: 'El control y la expansión de la fuerza vital (Prana) a través de técnicas de respiración.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-15',
      titulo: '5. Pratyahara (Retiro de los Sentidos)',
      descripcion: 'La abstracción o el retiro de los sentidos del mundo exterior para dirigir la atención hacia el interior.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-16',
      titulo: '6. Dharana (Concentración)',
      descripcion: 'La práctica de enfocar la mente en un solo punto u objeto, sin distracción.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-17',
      titulo: '7. Dhyana (Meditación)',
      descripcion: 'Un estado de flujo ininterrumpido de concentración, donde el meditador se vuelve uno con el objeto de meditación.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    {
      id: 'yoga-18',
      titulo: '8. Samadhi (Iluminación)',
      descripcion: 'El estado de éxtasis donde la conciencia individual se fusiona con la conciencia universal. El objetivo final del camino yóguico.',
      category: 'Yoga',
      subCategory: 'Los 8 Miembros del Yoga (Ashtanga)'
    },
    
    // -- Subcategoría: Pranayama y Energía Sutil --
    {
      id: 'yoga-19',
      titulo: 'Prana',
      descripcion: 'La fuerza vital o energía universal que fluye a través de todos los seres vivos. Es el foco del Pranayama.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-21',
      titulo: 'Nadis',
      descripcion: `Los Nadis son una red de canales de energía sutil que atraviesan el cuerpo, a través de los cuales fluye el Prana (fuerza vital). La palabra sánscrita "nadi" significa "río" o "canal". No son nervios físicos, sino vías energéticas. El objetivo es purificarlos y equilibrarlos para permitir el libre flujo de energía. Los tres nadis principales son:
- **Ida:** El canal izquierdo, asociado con la energía lunar (fría, femenina, pasiva).
- **Pingala:** El canal derecho, asociado con la energía solar (caliente, masculina, activa).
- **Sushumna:** El canal central que recorre la columna vertebral. Cuando Ida y Pingala están en equilibrio, el Prana puede entrar en Sushumna, permitiendo la ascensión de la energía Kundalini y el crecimiento espiritual.`,
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-22',
      titulo: 'Kundalini',
      descripcion: 'Una forma poderosa de energía divina latente, a menudo representada como una serpiente enroscada en la base de la columna (Muladhara Chakra). El yoga busca despertarla.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-23',
      titulo: 'Bandhas (Cierres Energéticos)',
      descripcion: 'Cierres o "llaves" energéticas en el cuerpo que se utilizan para contener y dirigir el Prana. Los tres principales son Mula, Uddiyana y Jalandhara Bandha.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-24',
      titulo: 'Ujjayi Pranayama',
      descripcion: 'La "respiración victoriosa" o "respiración oceánica". Se realiza contrayendo ligeramente la parte posterior de la garganta, creando un sonido suave similar al de las olas del mar.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-25',
      titulo: 'Nadi Shodhana',
      descripcion: 'La "respiración de fosas nasales alternas". Una técnica de pranayama para equilibrar los hemisferios cerebrales y calmar el sistema nervioso.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    {
      id: 'yoga-57',
      titulo: 'Kumbhaka (Retención de la Respiración)',
      descripcion: 'La retención de la respiración, ya sea después de la inhalación (Antara Kumbhaka) o después de la exhalación (Bahya Kumbhaka). Es una parte clave del pranayama.',
      category: 'Yoga',
      subCategory: 'Pranayama y Energía Sutil'
    },
    
    // -- Subcategoría: Los 7 Chakras --
    {
      id: 'yoga-chakra-intro',
      titulo: 'Chakras (Ruedas de Energía)',
      simbolo: 'Aperture',
      descripcion: 'Centros de energía sutil en el cuerpo que actúan como vórtices de Prana. Los siete chakras principales se alinean a lo largo de la columna vertebral, desde la base hasta la coronilla, y cada uno se asocia con diferentes aspectos físicos, emocionales y espirituales.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-1',
      titulo: '1. Muladhara (Chakra Raíz)',
      color: '0 84.2% 60.2%',
      simbolo: 'Anchor',
      descripcion: 'Ubicación: Base de la columna. Elemento: Tierra. Bija Mantra: LAM. Símbolo: Loto de cuatro pétalos. Significado: Supervivencia, seguridad, estabilidad, instintos básicos. Rige nuestra conexión con el mundo material y nuestras necesidades fundamentales.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-2',
      titulo: '2. Svadhisthana (Chakra Sacro)',
      color: '30 76% 47%',
      simbolo: 'Dna',
      descripcion: 'Ubicación: Abdomen bajo. Elemento: Agua. Bija Mantra: VAM. Símbolo: Loto de seis pétalos. Significado: Emociones, creatividad, sexualidad, placer y fluidez. Es el centro de nuestra capacidad para sentir y crear.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-3',
      titulo: '3. Manipura (Chakra del Plexo Solar)',
      color: '43 74% 66%',
      simbolo: 'Zap',
      descripcion: 'Ubicación: Plexo solar. Elemento: Fuego. Bija Mantra: RAM. Símbolo: Loto de diez pétalos. Significado: Poder personal, autoestima, voluntad, transformación y metabolismo. Es el motor de nuestra identidad y acción en el mundo.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-4',
      titulo: '4. Anahata (Chakra del Corazón)',
      color: '142.1 76.2% 36.3%',
      simbolo: 'Heart',
      descripcion: 'Ubicación: Centro del pecho. Elemento: Aire. Bija Mantra: YAM. Símbolo: Loto de doce pétalos con dos triángulos entrelazados. Significado: Amor, compasión, relaciones, perdón, conexión. Es el puente entre los chakras inferiores (físicos) y superiores (espirituales).',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-5',
      titulo: '5. Vishuddha (Chakra de la Garganta)',
      color: '205.1 100% 50%',
      simbolo: 'MessageCircle',
      descripcion: 'Ubicación: Garganta. Elemento: Éter/Espacio. Bija Mantra: HAM. Símbolo: Loto de dieciséis pétalos. Significado: Comunicación, expresión, verdad, autenticidad. Rige nuestra capacidad de expresar nuestra verdad interior.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-6',
      titulo: '6. Ajna (Chakra del Tercer Ojo)',
      color: '243.8 59% 40%',
      simbolo: 'Brain',
      descripcion: 'Ubicación: Entre las cejas. Elemento: Luz. Bija Mantra: OM. Símbolo: Loto de dos pétalos. Significado: Intuición, percepción, sabiduría, imaginación. Es el centro de nuestra visión más allá de lo material.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },
    {
      id: 'yoga-chakra-7',
      titulo: '7. Sahasrara (Chakra de la Corona)',
      color: '272.1 79.1% 56.1%',
      simbolo: 'Crown',
      descripcion: 'Ubicación: Coronilla. Elemento: Pensamiento/Consciencia. Bija Mantra: Silencio. Símbolo: Loto de mil pétalos. Significado: Conexión con lo divino, espiritualidad, iluminación, conciencia pura. Es nuestra puerta a la trascendencia.',
      category: 'Yoga',
      subCategory: 'Los 7 Chakras'
    },

    // -- Subcategoría: Técnicas y Enfoques --
    {
      id: 'yoga-60',
      titulo: 'Bhakti Yoga (Yoga de la Devoción)',
      descripcion: 'Uno de los cuatro caminos principales del yoga. Se centra en la devoción, el amor incondicional y la entrega a lo divino a través de la oración, el canto y el ritual.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-61',
      titulo: 'Jnana Yoga (Yoga del Conocimiento)',
      descripcion: 'El camino del conocimiento y la sabiduría. Utiliza el intelecto y la introspección para discernir entre lo real (Atman) y lo irreal (Maya).',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-62',
      titulo: 'Karma Yoga (Yoga de la Acción)',
      descripcion: 'El camino de la acción desinteresada. Se practica realizando las propias tareas y deberes sin apego al resultado, como una ofrenda.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-63',
      titulo: 'Raja Yoga (Yoga Real)',
      descripcion: 'El "camino real" o el "yoga del control mental", a menudo asociado con el sistema de ocho miembros de Patanjali, que culmina en la meditación y el Samadhi.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-48',
      titulo: 'Kriya',
      descripcion: 'En Kundalini Yoga, una kriya es un conjunto específico de posturas, respiración, mantras y mudras diseñados para lograr un resultado específico.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-49',
      titulo: 'Japa',
      descripcion: 'La práctica meditativa de repetir un mantra, a menudo usando un "mala" (un rosario de 108 cuentas) para contar las repeticiones.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-58',
      titulo: 'Trataka (Fijación de la Mirada)',
      descripcion: 'Una práctica de meditación que implica fijar la mirada en un solo punto, como la llama de una vela, para calmar la mente y mejorar la concentración.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
    {
      id: 'yoga-59',
      titulo: 'Yoga Nidra (Sueño Yóguico)',
      descripcion: 'Una práctica de meditación guiada que induce a un estado de relajación profunda, similar al sueño, pero manteniendo la conciencia. Muy restaurativo.',
      category: 'Yoga',
      subCategory: 'Técnicas y Enfoques'
    },
];

export const allAsanasData: Asana[] = [
    { id: 'tadasana', nombre_sans: 'Tadasana', nombre_es: 'Postura de la Montaña', descripcion: 'Postura fundamental de pie que mejora la postura y fortalece muslos, rodillas y tobillos.' },
    { id: 'adho_mukha_svanasana', nombre_sans: 'Adho Mukha Svanasana', nombre_es: 'Perro Boca Abajo', descripcion: 'Estira todo el cuerpo, especialmente los isquiotibiales, las pantorrillas, los hombros y la columna. Calma la mente y energiza el cuerpo.' },
    { id: 'balasana', nombre_sans: 'Balasana', nombre_es: 'Postura del Niño', descripcion: 'Postura de descanso que estira suavemente las caderas, muslos y tobillos. Calma la mente y alivia el estrés y la fatiga.' },
    { id: 'virabhadrasana_i', nombre_sans: 'Virabhadrasana I', nombre_es: 'Guerrero I', descripcion: 'Fortalece los hombros, brazos, piernas, tobillos y espalda. Abre el pecho y las caderas.' },
    { id: 'virabhadrasana_ii', nombre_sans: 'Virabhadrasana II', nombre_es: 'Guerrero II', descripcion: 'Fortalece y estira las piernas y los tobillos. Estira la ingle, el pecho y los hombros.' },
    { id: 'trikonasana', nombre_sans: 'Trikonasana', nombre_es: 'Postura del Triángulo', descripcion: 'Estira y fortalece los muslos, rodillas y tobillos. Estira las caderas, ingle, isquiotibiales, pantorrillas, hombros, pecho y columna.' },
    { id: 'vrksasana', nombre_sans: 'Vrksasana', nombre_es: 'Postura del Árbol', descripcion: 'Mejora el equilibrio y la concentración. Fortalece los tobillos, las pantorrillas, los muslos y la columna vertebral.' },
    { id: 'setu_bandhasana', nombre_sans: 'Setu Bandhasana', nombre_es: 'Postura del Puente', descripcion: 'Estira el pecho, el cuello y la columna. Calma el cerebro y ayuda a aliviar el estrés y la depresión leve.' },
    { id: 'bhujangasana', nombre_sans: 'Bhujangasana', nombre_es: 'Postura de la Cobra', descripcion: 'Aumenta la flexibilidad de la columna, fortalece los músculos de la espalda y estira el pecho, los hombros y el abdomen.' },
    { id: 'marjaryasana_bitilasana', nombre_sans: 'Marjaryasana-Bitilasana', nombre_es: 'Postura del Gato-Vaca', descripcion: 'Calienta la columna vertebral y alivia la tensión de la espalda, mientras estira suavemente el cuello y el torso.' },
    { id: 'uttanasana', nombre_sans: 'Uttanasana', nombre_es: 'Flexión hacia adelante de pie', descripcion: 'Estira los isquiotibiales y la espalda. Calma la mente y ayuda a aliviar el estrés.' },
    { id: 'paschimottanasana', nombre_sans: 'Paschimottanasana', nombre_es: 'Flexión hacia adelante sentado', descripcion: 'Estira la columna vertebral, los hombros y los isquiotibiales. Calma el cerebro y estimula los órganos internos.' },
    { id: 'savasana', nombre_sans: 'Savasana', nombre_es: 'Postura del Cadáver', descripcion: 'Postura de relajación final. Calma la mente, reduce el estrés y la presión arterial, y ayuda a relajar el cuerpo.' },
    { id: 'urdhva_mukha_svanasana', nombre_sans: 'Urdhva Mukha Svanasana', nombre_es: 'Perro Boca Arriba', descripcion: 'Fortalece la columna, los brazos y las muñecas. Estira el pecho, los hombros y el abdomen.' },
    { id: 'virabhadrasana_iii', nombre_sans: 'Virabhadrasana III', nombre_es: 'Guerrero III', descripcion: 'Mejora el equilibrio y la concentración. Fortalece los tobillos, las piernas, los hombros y los músculos de la espalda.' },
    { id: 'ardha_chandrasana', nombre_sans: 'Ardha Chandrasana', nombre_es: 'Postura de la Media Luna', descripcion: 'Fortalece el abdomen, los tobillos, los muslos, las nalgas y la columna vertebral. Estira las ingles, los isquiotibiales, las pantorrillas, los hombros y el pecho.' },
    { id: 'bakasana', nombre_sans: 'Bakasana', nombre_es: 'Postura del Cuervo', descripcion: 'Fortalece los brazos y las muñecas. Estira la parte superior de la espalda y las ingles. Mejora el equilibrio y la concentración.' },
    { id: 'sirsasana', nombre_sans: 'Sirsasana', nombre_es: 'Parada de cabeza', descripcion: 'Considerada la "reina de las asanas". Calma la mente, fortalece todo el cuerpo y mejora la circulación.' },
    { id: 'salamba_sarvangasana', nombre_sans: 'Salamba Sarvangasana', nombre_es: 'Parada de hombros con Soporte', descripcion: 'Calma el sistema nervioso, mejora la digestión, y estimula la tiroides. Fortalece piernas y glúteos.' },
    { id: 'halasana', nombre_sans: 'Halasana', nombre_es: 'Postura del Arado', descripcion: 'Estira los hombros y la columna vertebral. Calma el cerebro y estimula los órganos abdominales y la tiroides.' },
    { id: 'matsyasana', nombre_sans: 'Matsyasana', nombre_es: 'Postura del Pez', descripcion: 'Estira la parte delantera del cuello, la garganta y el pecho. Es una contrapostura para la parada de hombros.' },
    { id: 'navasana', nombre_sans: 'Navasana', nombre_es: 'Postura del Bote', descripcion: 'Fortalece los músculos abdominales, los flexores de la cadera y la columna vertebral.' },
    { id: 'ustrasana', nombre_sans: 'Ustrasana', nombre_es: 'Postura del Camello', descripcion: 'Abre todo el frente del cuerpo: tobillos, muslos, ingle, abdomen, pecho y garganta. Fortalece los músculos de la espalda.' },
    { id: 'dhanurasana', nombre_sans: 'Dhanurasana', nombre_es: 'Postura del Arco', descripcion: 'Fortalece la espalda y los músculos abdominales. Estimula los órganos reproductivos.' },
    { id: 'garudasana', nombre_sans: 'Garudasana', nombre_es: 'Postura del Águila', descripcion: 'Fortalece y estira los tobillos y las pantorrillas. Mejora la concentración y el equilibrio.' },
    { id: 'gomukhasana', nombre_sans: 'Gomukhasana', nombre_es: 'Postura de la Cara de Vaca', descripcion: 'Estira profundamente las caderas, los tobillos, los muslos, los hombros, las axilas y los tríceps.' },
    { id: 'ardha_matsyendrasana', nombre_sans: 'Ardha Matsyendrasana', nombre_es: 'Media Torsión Espinal', descripcion: 'Estimula el hígado y los riñones. Energiza la columna vertebral, estira los hombros, caderas y cuello.' },
    { id: 'malasana', nombre_sans: 'Malasana', nombre_es: 'Postura de la Guirnalda (Cuclillas)', descripcion: 'Estira los tobillos, las ingles y la espalda. Tonifica el abdomen y mejora la digestión.' },
    { id: 'eka_pada_rajakapotasana', nombre_sans: 'Eka Pada Rajakapotasana', nombre_es: 'Postura de la Paloma Real con una Pierna', descripcion: 'Abre profundamente las caderas, estira los muslos, el psoas, la ingle, el pecho, los hombros y el cuello.' },
    { id: 'hanumanasana', nombre_sans: 'Hanumanasana', nombre_es: 'Postura del Mono (Split)', descripcion: 'Estira profundamente los isquiotibiales y los flexores de la cadera (psoas). Representa el salto de fe del dios mono Hanuman.' },
    { id: 'vasisthasana', nombre_sans: 'Vasisthasana', nombre_es: 'Plancha Lateral', descripcion: 'Fortalece los brazos, las piernas y los músculos abdominales, especialmente los oblicuos. Mejora el equilibrio.' },
    { id: 'utkatasana', nombre_sans: 'Utkatasana', nombre_es: 'Postura de la Silla', descripcion: 'Fortalece los tobillos, los muslos, las pantorrillas y la columna vertebral. Estimula los órganos abdominales y el corazón.' },
    { id: 'parsvakonasana', nombre_sans: 'Parsvakonasana', nombre_es: 'Postura del Ángulo Lateral Extendido', descripcion: 'Fortalece y estira las piernas, las rodillas y los tobillos. Abre el pecho y los hombros.' },
    { id: 'prasarita_padottanasana', nombre_sans: 'Prasarita Padottanasana', nombre_es: 'Flexión hacia adelante con las piernas abiertas', descripcion: 'Estira la parte interna y posterior de las piernas. Fortalece los pies y tonifica los órganos abdominales.' },
    { id: 'upavistha_konasana', nombre_sans: 'Upavistha Konasana', nombre_es: 'Flexión sentada con las piernas abiertas', descripcion: 'Estira la parte interna y posterior de las piernas. Calma la mente.' },
    { id: 'baddha_konasana', nombre_sans: 'Baddha Konasana', nombre_es: 'Postura del Zapatero', descripcion: 'Estimula los órganos abdominales, los ovarios y la próstata. Estira las ingles y los muslos internos.' },
    { id: 'janu_sirsasana', nombre_sans: 'Janu Sirsasana', nombre_es: 'Postura de la Cabeza a la Rodilla', descripcion: 'Estira la columna, los hombros, los isquiotibiales y las ingles. Calma la mente y puede aliviar la ansiedad.' },
    { id: 'natarajasana', nombre_sans: 'Natarajasana', nombre_es: 'Postura del Señor de la Danza', descripcion: 'Mejora el equilibrio y la concentración. Estira los hombros, el pecho, los muslos, las ingles y el abdomen.' },
    { id: 'pincha_mayurasana', nombre_sans: 'Pincha Mayurasana', nombre_es: 'Parada sobre los antebrazos', descripcion: 'Fortalece los hombros, los brazos y la espalda. Mejora el sentido del equilibrio.' },
    { id: 'adho_mukha_vrksasana', nombre_sans: 'Adho Mukha Vrksasana', nombre_es: 'Parada de Manos', descripcion: 'Fortalece los hombros, los brazos y las muñecas. Mejora el equilibrio.' },
    { id: 'kapotasana', nombre_sans: 'Kapotasana', nombre_es: 'Postura de la Paloma', descripcion: 'Una apertura de espalda y pecho muy profunda que también estira toda la parte frontal del cuerpo.' },
    { id: 'ananda_balasana', nombre_sans: 'Ananda Balasana', nombre_es: 'Postura del Bebé Feliz', descripcion: 'Estira suavemente las ingles internas y la espalda baja. Calma la mente y alivia el estrés.' },
    { id: 'supta_baddha_konasana', nombre_sans: 'Supta Baddha Konasana', nombre_es: 'Postura del Zapatero Tumbado', descripcion: 'Una postura restaurativa que abre las caderas y la ingle mientras calma el sistema nervioso.' },
    { id: 'viparita_karani', nombre_sans: 'Viparita Karani', nombre_es: 'Postura de las Piernas en la Pared', descripcion: 'Alivia las piernas y los pies cansados. Estira suavemente la parte posterior de las piernas, el torso frontal y la parte posterior del cuello.' },
    { id: 'parivrtta_trikonasana', nombre_sans: 'Parivrtta Trikonasana', nombre_es: 'Postura del Triángulo Invertido', descripcion: 'Una torsión de pie intensa que mejora el equilibrio, fortalece las piernas y estira la columna y las caderas.' },
    { id: 'parivrtta_parsvakonasana', nombre_sans: 'Parivrtta Parsvakonasana', nombre_es: 'Postura del Ángulo Lateral Invertido', descripcion: 'Una torsión profunda que desintoxica los órganos, fortalece las piernas y mejora la digestión.' },
    { id: 'utthita_hasta_padangusthasana', nombre_sans: 'Utthita Hasta Padangusthasana', nombre_es: 'Postura de la Mano al Dedo Gordo del Pie', descripcion: 'Una postura de equilibrio que estira intensamente los isquiotibiales y fortalece las piernas y los tobillos.' },
    { id: 'astavakrasana', nombre_sans: 'Astavakrasana', nombre_es: 'Postura de los Ocho Ángulos', descripcion: 'Un equilibrio sobre los brazos avanzado que requiere fuerza, flexibilidad y concentración.' },
    { id: 'eka_pada_koundinyasana_i', nombre_sans: 'Eka Pada Koundinyasana I', nombre_es: 'Postura del Sabio Koundinya I', descripcion: 'Un equilibrio sobre brazos con torsión que fortalece la parte superior del cuerpo y el core.' },
    { id: 'eka_pada_koundinyasana_ii', nombre_sans: 'Eka Pada Koundinyasana II', nombre_es: 'Postura del Sabio Koundinya II', descripcion: 'Una variación del equilibrio sobre brazos que se asemeja a una "split" voladora. Requiere una gran apertura de cadera.' },
    { id: 'tittibhasana', nombre_sans: 'Tittibhasana', nombre_es: 'Postura de la Luciérnaga', descripcion: 'Un equilibrio sobre brazos que requiere una compresión profunda y fuerza en los isquiotibiales y el core.' },
    { id: 'krounchasana', nombre_sans: 'Krounchasana', nombre_es: 'Postura de la Garza', descripcion: 'Un estiramiento sentado intenso para el isquiotibial.' },
    { id: 'marichyasana_i', nombre_sans: 'Marichyasana I', nombre_es: 'Postura dedicada al Sabio Marichi I', descripcion: 'Una flexión hacia adelante con un enlace que abre los hombros y estira la espalda.' },
    { id: 'marichyasana_iii', nombre_sans: 'Marichyasana III', nombre_es: 'Postura dedicada al Sabio Marichi III', descripcion: 'Una torsión profunda que flexibiliza la columna y masajea los órganos abdominales.' },
    { id: 'salabhasana', nombre_sans: 'Salabhasana', nombre_es: 'Postura del Saltamontes', descripcion: 'Fortalece toda la parte posterior del cuerpo, incluyendo la espalda, los glúteos y los isquiotibiales.' },
    { id: 'purvottanasana', nombre_sans: 'Purvottanasana', nombre_es: 'Postura de la Plancha Invertida', descripcion: 'Fortalece los brazos, muñecas y piernas, y estira la parte frontal del cuerpo. Es una contrapostura para las flexiones hacia adelante.' },
    { id: 'anjaneyasana', nombre_sans: 'Anjaneyasana', nombre_es: 'Postura de la Luna Creciente', descripcion: 'Una zancada baja que abre profundamente los flexores de la cadera y el psoas.' },
    { id: 'skandasana', nombre_sans: 'Skandasana', nombre_es: 'Postura del Dios de la Guerra', descripcion: 'Una zancada lateral profunda que abre las caderas y la ingle y estira los isquiotibiales.' },
    { id: 'padmasana', nombre_sans: 'Padmasana', nombre_es: 'Postura del Loto', descripcion: 'La postura de meditación arquetípica. Requiere una gran apertura de caderas y rodillas. Fomenta la calma y la concentración.' }
];
