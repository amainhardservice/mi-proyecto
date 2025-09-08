
import type { PoseModifier } from '@/types';

export const modifiers: PoseModifier[] = [
    {
      id: '1',
      titulo: 'Tuck (Recogido/Agrupado)',
      descripcion: 'Una posición compacta donde las rodillas se flexionan y se llevan hacia el pecho. Esta forma crea un centro de gravedad estable y controlado, ideal para equilibrios y rotaciones. La calidad puede ser **Comprimido** (activamente apretado) o relajado.',
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
      descripcion: 'El cuerpo se mantiene en una línea perfectamente recta desde los talones hasta la cabeza, como una tabla. Requiere una activación total del core y los glúteos. Es la base de posturas como **pose:lb-front-bird** y **pose:lb-10**.',
    },
    {
      id: '5',
      titulo: 'Open Tuck (Recogido Abierto)',
      descripcion: 'Una variación de la posición recogida donde se mantiene la flexión de las rodillas pero se permite que la espalda se arquee y el pecho se abra. Es una postura común en posturas terapéuticas y de apertura de pecho.',
    },
    {
        id: 'mod-07a',
        titulo: 'Compressed (Comprimido)',
        descripcion: 'La cualidad de activar los músculos para hacer el cuerpo lo más denso y pequeño posible (ej. en un **Tuck** apretado). Es crucial para generar velocidad en rotaciones, facilitar "pops" y mantener la estabilidad en movimientos rápidos.',
    },
    {
        id: 'mod-07b',
        titulo: 'Extended (Extendido)',
        descripcion: 'La cualidad de alcanzar activamente a través de las extremidades y el torso, creando una línea larga y tensa. Genera una estructura predecible y estable, fundamental para posturas como **pose:lb-front-bird** o **pose:lb-h2h**.',
    },
    {
        id: 'mod-09a',
        titulo: 'Stacked (Apilado)',
        descripcion: 'Describe un equilibrio logrado principalmente a través de la alineación de la estructura ósea verticalmente sobre la base de soporte. Es el método más eficiente energéticamente, dependiendo de los huesos en lugar de la fuerza muscular, como en **pose:lb-h2h**.',
    },
    {
        id: 'mod-09b',
        titulo: 'Counterbalanced (Contrapesado)',
        descripcion: 'Describe un equilibrio logrado a través de la tensión. Base y volador se inclinan activamente lejos el uno del otro, usando sus pesos corporales para crear una fuerza opuesta que los estabiliza. Es fundamental en posturas asimétricas como **pose:lb-9**.',
    },
    {
        id: 'mod-10a',
        titulo: 'Open (Abierto)',
        descripcion: 'Describe una forma corporal con una extensión de espalda o arco, abriendo activamente el pecho y la parte frontal del cuerpo. Es característico de posturas como **pose:lb-back-bird** y expresa expansión y receptividad.',
    },
    {
        id: 'mod-10b',
        titulo: 'Closed (Cerrado)',
        descripcion: 'Describe una forma corporal con flexión de la columna o redondeo de la espalda, activando el core en una posición de **Hollow Body**. Esta forma cerrada crea estabilidad, control y es fundamental para muchas inversiones y transiciones dinámicas.',
    },
     {
      id: 'hollow-body',
      titulo: 'Hollow Body (Cuerpo Hueco)',
      descripcion: 'El tronco está redondeado, el core activo y la espalda baja conectada. Es una posición fundamental de control para el volador.'
    },
    {
      id: 'arch-body',
      titulo: 'Arch Body (Cuerpo Arqueado)',
      descripcion: 'Extensión activa de la columna y apertura del pecho, creando una forma de arco. Es lo opuesto a Hollow Body y es clave en posturas como **pose:lb-back-bird**.',
    },
    {
      id: 'stag',
      titulo: 'Stag (Ciervo)',
      descripcion: 'Una forma de pierna donde una está doblada (flexionada) y la otra extendida. Es una variación estética y de control.'
    },
    {
      id: 'lotus',
      titulo: 'Lotus / Padmasana',
      descripcion: 'Forma de piernas avanzada donde cada pie se coloca en el muslo opuesto. Requiere gran flexibilidad de cadera.'
    },
    {
      id: 'diamond',
      titulo: 'Diamond (Diamante)',
      descripcion: 'Las plantas de los pies están juntas y las rodillas abiertas, creando una forma de rombo. Similar a Baddha Konasana en yoga.'
    },
    {
      id: 'mod-11',
      titulo: 'Same-side Grip (Agarre del Mismo Lado)',
      descripcion: 'Describe una conexión donde la mano derecha de la base se conecta con la mano derecha del volador (y la izquierda con la izquierda). Este agarre es intuitivo y proporciona una gran estabilidad para posturas estáticas y movimientos lineales. Es fundamental para la seguridad en posturas como **pose:lb-1**.',
    },
    {
      id: 'mod-12',
      titulo: 'Cross-body Grip (Agarre Cruzado)',
      descripcion: 'Describe una conexión donde la mano derecha de la base se conecta con la mano izquierda del volador (y viceversa). Este agarre es esencial para facilitar rotaciones, giros y transiciones donde los cuerpos necesitan cruzarse, como en muchas lavadoras (ej. **pose:lb-22**).',
    },
];
