import type { Exercise } from '@/types';

export const allExercisesData: Exercise[] = [
  // --- CALENTAMIENTO INDIVIDUAL ---

  // Movilidad Articular
  { id: 'ex-ind-01', titulo: 'Círculos de Cuello\n(Neck Circles)', descripcion: 'Gira suavemente la cabeza en círculos completos en ambas direcciones para liberar la tensión cervical.', enfasis: 'Movilidad Articular', categoria: 'Individual' },
  { id: 'ex-ind-02', titulo: 'Círculos de Hombros\n(Shoulder Circles)', descripcion: 'Realiza círculos amplios con los hombros hacia adelante y hacia atrás para lubricar la articulación del hombro.', enfasis: 'Movilidad Articular', categoria: 'Individual' },
  { id: 'ex-ind-03', titulo: 'Círculos de Brazos\n(Arm Circles)', descripcion: 'Extiende los brazos y haz círculos grandes hacia adelante y hacia atrás para calentar el manguito rotador.', enfasis: 'Movilidad Articular', categoria: 'Individual' },
  { id: 'ex-ind-04', titulo: 'Círculos de Muñeca\n(Wrist Circles)', descripcion: 'Entrelaza los dedos y gira las muñecas en ambas direcciones. Esencial para bases y voladores.', enfasis: 'Movilidad Articular', categoria: 'Individual' },
  { id: 'ex-ind-05', titulo: 'Rotaciones de Torso\n(Torso Twists)', descripcion: 'De pie o sentado, gira suavemente el torso de lado a lado para movilizar la columna torácica.', enfasis: 'Movilidad Articular', categoria: 'Individual' },
  { id: 'ex-ind-06', titulo: 'Círculos de Cadera\n(Hip Circles)', descripcion: 'Con las manos en las caderas, realiza círculos amplios como si usaras un hula hoop para lubricar la articulación de la cadera.', enfasis: 'Movilidad Articular', categoria: 'Individual' },
  { id: 'ex-ind-07', titulo: 'Círculos de Tobillo\n(Ankle Circles)', descripcion: 'De pie sobre una pierna, levanta la otra y dibuja círculos con el pie en ambas direcciones.', enfasis: 'Movilidad Articular', categoria: 'Individual' },

  // Activación del Core
  { id: 'ex-ind-08', titulo: 'Plancha Frontal\n(Plank)', descripcion: 'Mantén una línea recta desde la cabeza hasta los talones, contrayendo el abdomen y los glúteos. No dejes que la cadera caiga.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-09', titulo: 'Plancha Lateral\n(Side Plank)', descripcion: 'Apoyado en un antebrazo y el lateral del pie, levanta la cadera formando una línea recta. Activa los oblicuos.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-10', titulo: 'Bicho Muerto\n(Dead Bug)', descripcion: 'Tumbado boca arriba, extiende un brazo y la pierna opuesta simultáneamente sin arquear la espalda baja.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-11', titulo: 'Hollow Body Hold\n(Sostén de Cuerpo Hueco)', descripcion: 'Tumbado boca arriba, levanta ligeramente hombros y piernas del suelo, manteniendo la zona lumbar pegada al suelo.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-12', titulo: 'Elevaciones de Piernas\n(Leg Raises)', descripcion: 'Tumbado boca arriba, levanta y baja las piernas extendidas de forma controlada, sin arquear la espalda.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-13', titulo: 'Crunches de Bicicleta\n(Bicycle Crunches)', descripcion: 'Lleva el codo hacia la rodilla opuesta de forma alterna, trabajando los abdominales superiores y oblicuos.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-14', titulo: 'Escaladores\n(Mountain Climbers)', descripcion: 'Desde una posición de plancha, lleva las rodillas hacia el pecho de forma alterna y dinámica.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-15', titulo: 'Superman', descripcion: 'Tumbado boca abajo, levanta simultáneamente brazos y piernas del suelo, activando toda la cadena posterior.', enfasis: 'Activación de Espalda', categoria: 'Individual' },

  // Activación de Glúteos y Piernas
  { id: 'ex-ind-16', titulo: 'Sentadillas con Peso Corporal\n(Bodyweight Squats)', descripcion: 'Baja las caderas como si te sentaras en una silla, manteniendo la espalda recta y el pecho erguido.', enfasis: 'Activación de Piernas', categoria: 'Individual' },
  { id: 'ex-ind-17', titulo: 'Puente de Glúteos\n(Glute Bridge)', descripcion: 'Tumbado boca arriba con las rodillas dobladas, levanta las caderas apretando los glúteos.', enfasis: 'Activación de Glúteos', categoria: 'Individual' },
  { id: 'ex-ind-18', titulo: 'Zancadas\n(Lunges)', descripcion: 'Da un paso hacia adelante y flexiona ambas rodillas a 90 grados, manteniendo el torso vertical.', enfasis: 'Activación de Piernas', categoria: 'Individual' },
  { id: 'ex-ind-19', titulo: 'Elevaciones de Talón\n(Calf Raises)', descripcion: 'De pie, levanta los talones del suelo para activar los músculos de las pantorrillas.', enfasis: 'Activación de Piernas', categoria: 'Individual' },
  { id: 'ex-ind-20', titulo: 'Patada de Glúteo en Cuadrupedia\n(Donkey Kicks)', descripcion: 'En posición de cuatro apoyos, levanta una pierna flexionada hacia el techo, contrayendo el glúteo.', enfasis: 'Activación de Glúteos', categoria: 'Individual' },
  { id: 'ex-ind-21', titulo: 'Hidrantes de Fuego\n(Fire Hydrants)', descripcion: 'En posición de cuatro apoyos, levanta una rodilla flexionada hacia el lateral, abriendo la cadera.', enfasis: 'Activación de Glúteos', categoria: 'Individual' },
  
  // Activación de Espalda y Hombros
  { id: 'ex-ind-22', titulo: 'Elevaciones en Y-T-W-L\n(Y-T-W-L Raises)', descripcion: 'Tumbado boca abajo, levanta los brazos formando las letras Y, T, W y L para activar diferentes partes de la espalda y hombros.', enfasis: 'Activación de Espalda', categoria: 'Individual' },
  { id: 'ex-ind-23', titulo: 'Flexiones Escapulares\n(Scapular Push-ups)', descripcion: 'En posición de plancha, junta y separa los omóplatos sin doblar los codos, para activar el serrato anterior.', enfasis: 'Activación de Hombros', categoria: 'Individual' },
  { id: 'ex-ind-24', titulo: 'Ángeles de Pared\n(Wall Angels)', descripcion: 'De pie contra una pared, desliza los brazos hacia arriba y hacia abajo manteniendo el contacto de muñecas y codos.', enfasis: 'Movilidad de Hombros', categoria: 'Individual' },
  { id: 'ex-ind-25', titulo: 'Flexiones Hindúes\n(Hindu Push-ups)', descripcion: 'Un movimiento fluido que pasa de perro boca abajo a una cobra, fortaleciendo hombros y pecho.', enfasis: 'Fuerza y Movilidad', categoria: 'Individual' },

  // Estiramientos Dinámicos
  { id: 'ex-ind-26', titulo: 'El Mejor Estiramiento del Mundo\n(World\'s Greatest Stretch)', descripcion: 'Una secuencia que combina una zancada con una torsión y apertura de cadera, movilizando todo el cuerpo.', enfasis: 'Estiramiento Dinámico', categoria: 'Individual' },
  { id: 'ex-ind-27', titulo: 'Balanceo de Piernas\n(Leg Swings)', descripcion: 'De pie, apoyado en algo, balancea una pierna hacia adelante y atrás, y luego de lado a lado.', enfasis: 'Estiramiento Dinámico', categoria: 'Individual' },
  { id: 'ex-ind-28', titulo: 'Gusano\n(Inchworm)', descripcion: 'Desde una flexión hacia adelante, camina con las manos hasta una plancha y luego con los pies hacia las manos.', enfasis: 'Estiramiento Dinámico', categoria: 'Individual' },
  { id: 'ex-ind-29', titulo: 'Sentadilla Cosaca\n(Cossack Squat)', descripcion: 'Una sentadilla lateral profunda que estira la ingle y los aductores de una pierna mientras fortalece la otra.', enfasis: 'Estiramiento Dinámico', categoria: 'Individual' },
  { id: 'ex-ind-30', titulo: 'Zancada con Torsión\n(Lunge with Spinal Twist)', descripcion: 'Desde una zancada baja, gira el torso hacia la pierna delantera, abriendo el pecho.', enfasis: 'Estiramiento Dinámico', categoria: 'Individual' },

  // Cardio Ligero
  { id: 'ex-ind-31', titulo: 'Jumping Jacks', descripcion: 'Salto clásico abriendo y cerrando piernas y brazos simultáneamente.', enfasis: 'Cardio Ligero', categoria: 'Individual' },
  { id: 'ex-ind-32', titulo: 'Rodillas Arriba\n(High Knees)', descripcion: 'Corriendo en el sitio, levanta las rodillas lo más alto posible.', enfasis: 'Cardio Ligero', categoria: 'Individual' },
  { id: 'ex-ind-33', titulo: 'Talones al Glúteo\n(Butt Kicks)', descripcion: 'Corriendo en el sitio, lleva los talones hacia los glúteos.', enfasis: 'Cardio Ligero', categoria: 'Individual' },
  { id: 'ex-ind-34', titulo: 'Boxeo de Sombra\n(Shadow Boxing)', descripcion: 'Lanza puñetazos al aire mientras te mueves, activando el tren superior y elevando el ritmo cardíaco.', enfasis: 'Cardio Ligero', categoria: 'Individual' },
  { id: 'ex-ind-35', titulo: 'Respiración Diafragmática\n(Diaphragmatic Breathing)', descripcion: 'Sentado o tumbado, inhala profundamente expandiendo el abdomen para conectar con el centro y calmar el sistema nervioso antes de empezar.', enfasis: 'Conexión y Respiración', categoria: 'Individual' },

  // Otros Ejercicios de Acondicionamiento
  { id: 'ex-ind-36', titulo: 'Caminata de Pato\n(Duck Walk)', descripcion: 'Camina en una posición de sentadilla profunda, mejorando la movilidad de cadera y tobillo.', enfasis: 'Movilidad y Fuerza', categoria: 'Individual' },
  { id: 'ex-ind-37', titulo: 'Caminata de Cangrejo\n(Crab Walk)', descripcion: 'Sentado, levanta las caderas y camina usando manos y pies, activando glúteos y tríceps.', enfasis: 'Fuerza y Coordinación', categoria: 'Individual' },
  { id: 'ex-ind-38', titulo: 'Saltos a la Caja (imaginaria)\n(Box Jumps)', descripcion: 'Un salto explosivo hacia arriba, como si saltaras a una caja, para desarrollar potencia en las piernas.', enfasis: 'Potencia', categoria: 'Individual' },
  { id: 'ex-ind-39', titulo: 'Flexiones\n(Push-ups)', descripcion: 'Ejercicio clásico para fortalecer pecho, hombros y tríceps.', enfasis: 'Fuerza Tren Superior', categoria: 'Individual' },
  { id: 'ex-ind-40', titulo: 'Dominadas (con ayuda o en negativo)\n(Pull-ups)', descripcion: 'Si hay una barra disponible, es un ejercicio clave para la fuerza de la espalda.', enfasis: 'Fuerza Tren Superior', categoria: 'Individual' },
  { id: 'ex-ind-41', titulo: 'Pistol Squat (asistido)\n(Assisted Pistol Squat)', descripcion: 'Sentadilla a una pierna, usando una pared o compañero para el equilibrio. Gran fortalecedor y estabilizador.', enfasis: 'Fuerza y Equilibrio', categoria: 'Individual' },
  { id: 'ex-ind-42', titulo: 'Fondos de Tríceps\n(Tricep Dips)', descripcion: 'Usando un banco o el suelo, flexiona los codos para bajar el cuerpo y fortalecer los tríceps.', enfasis: 'Fuerza Tren Superior', categoria: 'Individual' },
  { id: 'ex-ind-43', titulo: 'Plancha Inversa\n(Reverse Plank)', descripcion: 'Sentado, coloca las manos detrás y levanta las caderas, formando una línea recta para activar toda la cadena posterior.', enfasis: 'Activación de Cadena Posterior', categoria: 'Individual' },
  { id: 'ex-ind-44', titulo: 'Rotaciones de Columna en T\n(T-Spine Rotations)', descripcion: 'En cuadrupedia, lleva una mano detrás de la cabeza y gira para abrir el pecho, mejorando la movilidad torácica.', enfasis: 'Movilidad de Columna', categoria: 'Individual' },
  { id: 'ex-ind-45', titulo: 'Paso de Obstáculo\n(Hurdle Step-overs)', descripcion: 'De pie, levanta una rodilla y muévela en un arco como si pasaras sobre una valla, para mejorar la movilidad de cadera.', enfasis: 'Movilidad de Cadera', categoria: 'Individual' },
  { id: 'ex-ind-46', titulo: 'Estiramiento del Gato y Camello\n(Cat-Cow Stretch)', descripcion: 'En cuadrupedia, alterna entre arquear y redondear la columna para una movilización espinal completa.', enfasis: 'Movilidad de Columna', categoria: 'Individual' },
  { id: 'ex-ind-47', titulo: 'Estiramiento de la Ingle de Rana\n(Frog Stretch)', descripcion: 'En cuadrupedia con las rodillas abiertas, baja las caderas para un estiramiento intenso de los aductores.', enfasis: 'Flexibilidad', categoria: 'Individual' },
  { id: 'ex-ind-48', titulo: 'Equilibrio a una Pierna\n(Single Leg Balance)', descripcion: 'Simplemente mantenerse de pie sobre una pierna, activando los estabilizadores del tobillo y la cadera.', enfasis: 'Equilibrio', categoria: 'Individual' },
  { id: 'ex-ind-49', titulo: 'Torsiones de Escorpión\n(Scorpion Twists)', descripcion: 'Tumbado boca abajo, lleva un pie hacia la mano opuesta para una torsión dinámica de la columna lumbar.', enfasis: 'Movilidad de Columna', categoria: 'Individual' },
  { id: 'ex-ind-50', titulo: 'Estiramiento del Flexor de la Cadera Arrodillado\n(Kneeling Hip Flexor Stretch)', descripcion: 'Desde una posición de zancada con la rodilla de atrás en el suelo, empuja la cadera hacia adelante.', enfasis: 'Flexibilidad', categoria: 'Individual' },
  { id: 'ex-ind-51', titulo: 'Estiramiento del Piriforme en 90/90\n(90/90 Piriformis Stretch)', descripcion: 'Sentado con ambas piernas dobladas a 90 grados, una adelante y otra atrás, para movilizar la rotación interna y externa de la cadera.', enfasis: 'Movilidad de Cadera', categoria: 'Individual' },
  { id: 'ex-ind-52', titulo: 'Preparación de Brújula\n(Compass Prep)', descripcion: 'Estira isquiotibiales intensamente mientras se mantiene equilibrio. Prepara específicamente la flexibilidad de piernas para la posición final.', enfasis: 'Flexibilidad', categoria: 'Individual' },
  { id: 'ex-ind-53', titulo: 'Puente de Glúteo a una Pierna\n(Single Leg Glute Bridge)', descripcion: 'Fortalece glúteos unilateralmente y mejora estabilidad pélvica. Desarrolla la fuerza posterior necesaria para extender las piernas.', enfasis: 'Activación de Glúteos', categoria: 'Individual' },
  { id: 'ex-ind-54', titulo: 'Plancha Lateral con Torsión\n(Twisted Side Plank)', descripcion: 'Combina fuerza lateral con rotación. Prepara el core para los movimientos complejos y multidireccionales.', enfasis: 'Activación del Core', categoria: 'Individual' },
  { id: 'ex-ind-55', titulo: 'Perro Pájaro\n(Bird Dog)', descripcion: 'Mejora coordinación y estabilidad opuesta (brazo-pierna contraria). Desarrolla el control motor fino necesario para balances complejos.', enfasis: 'Coordinación y Core', categoria: 'Individual' },
  { id: 'ex-ind-56', titulo: 'Posición Hueca\n(Hollow Hold)', descripcion: 'Fortalece profundamente el core anterior. Crea la base de fuerza abdominal necesaria para levantar el cuerpo del suelo.', enfasis: 'Activación del Core', categoria: 'Individual' },
  
  // --- CALENTAMIENTO EN PAREJA ---

  // Confianza y Conexión
  { id: 'ex-par-01', titulo: 'Respiración Espalda con Espalda\n(Back-to-Back Breathing)', descripcion: 'Sentados espalda con espalda, sincronicen la respiración para sentir el movimiento del compañero y conectar.', enfasis: 'Conexión y Respiración', categoria: 'En Pareja' },
  { id: 'ex-par-02', titulo: 'Caída de Confianza\n(Trust Fall)', descripcion: 'Una persona cae hacia atrás y la otra la atrapa. Aumenta la confianza y la comunicación.', enfasis: 'Confianza', categoria: 'En Pareja' },
  { id: 'ex-par-03', titulo: 'Masaje de Manos y Muñecas\n(Hand & Wrist Massage)', descripcion: 'Un compañero masajea suavemente las manos y muñecas del otro, preparando las articulaciones para el peso.', enfasis: 'Movilidad y Conexión', categoria: 'En Pareja' },
  { id: 'ex-par-04', titulo: 'Espejo\n(Mirroring)', descripcion: 'Uno lidera y el otro imita sus movimientos como si fuera un espejo, mejorando la atención y la sintonía.', enfasis: 'Conexión', categoria: 'En Pareja' },

  // Fuerza y Estabilidad
  { id: 'ex-par-05', titulo: 'Sentadilla Espalda con Espalda\n(Back-to-Back Squat)', descripcion: 'Apoyados espalda con espalda, bajen a una posición de sentadilla simultáneamente. Requiere comunicación y fuerza.', enfasis: 'Fuerza y Coordinación', categoria: 'En Pareja' },
  { id: 'ex-par-06', titulo: 'Plancha con Choque de Manos\n(Plank with High-Five)', descripcion: 'Ambos en posición de plancha, uno frente al otro, levantan una mano para chocarla. Trabaja el core y la estabilidad.', enfasis: 'Activación del Core', categoria: 'En Pareja' },
  { id: 'ex-par-07', titulo: 'Flexiones con Choque de Manos\n(Push-up with High-Five)', descripcion: 'Después de cada flexión, chocan las manos con el compañero. Añade un desafío de estabilidad.', enfasis: 'Fuerza y Coordinación', categoria: 'En Pareja' },
  { id: 'ex-par-08', titulo: 'Remo en Pareja\n(Partner Row)', descripcion: 'Sentados uno frente al otro, se toman de las manos y se inclinan hacia atrás, usando el peso del otro para "remar".', enfasis: 'Fuerza de Espalda', categoria: 'En Pareja' },
  { id: 'ex-par-09', titulo: 'Carretilla\n(Wheelbarrow)', descripcion: 'Uno sostiene los pies del otro mientras este camina con las manos. Fortalece el tren superior y el core.', enfasis: 'Fuerza y Confianza', categoria: 'En Pareja' },
  { id: 'ex-par-10', titulo: 'Sentadilla de Pistola Asistida\n(Assisted Pistol Squat)', descripcion: 'Uno frente al otro, se toman de las manos para ayudarse mutuamente a mantener el equilibrio en una sentadilla a una pierna.', enfasis: 'Fuerza y Equilibrio', categoria: 'En Pareja' },
  { id: 'ex-par-11', titulo: 'Levantamiento de Compañero\n(Partner Lift)', descripcion: 'Uno se agacha y el otro se sube a su espalda. El primero se levanta. Excelente para la fuerza de piernas de la base.', enfasis: 'Fuerza de Piernas', categoria: 'En Pareja' },
  { id: 'ex-par-12', titulo: 'Elevaciones de Piernas con Resistencia\n(Resisted Leg Raises)', descripcion: 'Uno tumbado levanta las piernas, el otro de pie empuja suavemente las piernas hacia abajo.', enfasis: 'Activación del Core', categoria: 'En Pareja' },
  
  // Estiramientos Asistidos
  { id: 'ex-par-13', titulo: 'Estiramiento de Isquiotibiales en Pareja\n(Partner Hamstring Stretch)', descripcion: 'Uno tumbado, el otro levanta suavemente una de sus piernas para estirar los isquiotibiales.', enfasis: 'Flexibilidad', categoria: 'En Pareja' },
  { id: 'ex-par-14', titulo: 'Estiramiento de Pecho en Pareja\n(Partner Chest Stretch)', descripcion: 'Uno entrelaza las manos detrás de la espalda, el otro tira suavemente de los brazos hacia atrás para abrir el pecho.', enfasis: 'Flexibilidad', categoria: 'En Pareja' },
  { id: 'ex-par-15', titulo: 'Torsión Espalda con Espalda\n(Back-to-Back Twist)', descripcion: 'Sentados espalda con espalda, ambos giran hacia el mismo lado, usando las rodillas del otro como palanca.', enfasis: 'Movilidad de Columna', categoria: 'En Pareja' },
  { id: 'ex-par-16', titulo: 'Flexión hacia Adelante Sentados\n(Seated Forward Fold)', descripcion: 'Sentados uno frente al otro con las plantas de los pies juntas, se toman de las manos y uno tira suavemente mientras el otro se pliega.', enfasis: 'Flexibilidad', categoria: 'En Pareja' },
  { id: 'ex-par-17', titulo: 'Estiramiento de Tríceps Asistido\n(Assisted Triceps Stretch)', descripcion: 'Uno lleva un codo por encima de la cabeza, el otro aplica una suave presión para profundizar el estiramiento del tríceps.', enfasis: 'Flexibilidad', categoria: 'En Pareja' },
  { id: 'ex-par-18', titulo: 'Estiramiento de Cuádriceps de Pie Asistido\n(Assisted Standing Quad Stretch)', descripcion: 'De pie, uno se apoya en el hombro del otro para equilibrarse mientras estira el cuádriceps.', enfasis: 'Flexibilidad y Equilibrio', categoria: 'En Pareja' },
  { id: 'ex-par-19', titulo: 'Estiramiento de la Silla en Pareja\n(Partner Chair Pose)', descripcion: 'Espalda con espalda, se deslizan hacia una posición de silla, sosteniéndose mutuamente.', enfasis: 'Fuerza y Confianza', categoria: 'En Pareja' },
  { id: 'ex-par-20', titulo: 'Apertura de Cadera del Corredor Asistida\n(Assisted Runner\'s Lunge)', descripcion: 'Uno en una zancada profunda, el otro aplica una suave presión en las caderas para profundizar el estiramiento.', enfasis: 'Flexibilidad', categoria: 'En Pareja' },
  
  // Equilibrio y Coordinación
  { id: 'ex-par-21', titulo: 'Postura del Árbol en Pareja\n(Partner Tree Pose)', descripcion: 'De pie, uno al lado del otro, se apoyan en la cadera o el hombro y realizan la postura del árbol.', enfasis: 'Equilibrio y Conexión', categoria: 'En Pareja' },
  { id: 'ex-par-22', titulo: 'Guerrero III en Pareja\n(Partner Warrior III)', descripcion: 'Uno frente al otro, se toman de las manos y extienden una pierna hacia atrás, usando el contrapeso para equilibrarse.', enfasis: 'Equilibrio y Contrapeso', categoria: 'En Pareja' },
  { id: 'ex-par-23', titulo: 'Postura del Bote en Pareja\n(Partner Boat Pose)', descripcion: 'Sentados frente a frente, unen las plantas de los pies y se toman de las manos, levantando las piernas.', enfasis: 'Activación del Core', categoria: 'En Pareja' },
  { id: 'ex-par-24', titulo: 'Lanzamiento de Pelota en Plancha\n(Plank Ball Toss)', descripcion: 'En plancha, uno frente al otro, se lanzan una pelota pequeña. Desafía la estabilidad del core.', enfasis: 'Coordinación y Core', categoria: 'En Pareja' },
  { id: 'ex-par-25', titulo: 'Salto del Compañero\n(Partner Leap Frog)', descripcion: 'Un compañero se agacha y el otro salta sobre él. Un ejercicio divertido para el cardio y la potencia.', enfasis: 'Potencia y Juego', categoria: 'En Pareja' },
  { id: 'ex-par-26', titulo: 'Contrapeso de Pie\n(Standing Counterbalance)', descripcion: 'Tomados de las manos, ambos se inclinan hacia atrás, encontrando un punto de equilibrio con los brazos extendidos.', enfasis: 'Contrapeso y Confianza', categoria: 'En Pareja' },
  { id: 'ex-par-27', titulo: 'Caminata en Contrapeso\n(Counterbalance Walk)', descripcion: 'Desde el contrapeso de pie, intentan caminar en círculo, manteniendo la tensión y la conexión.', enfasis: 'Coordinación y Contrapeso', categoria: 'En Pareja' },
  { id: 'ex-par-28', titulo: 'Elevación de Hombros en Pareja\n(Partner Shoulder Lift)', descripcion: 'El volador se apoya en la espalda de la base, quien lo levanta para una apertura de pecho pasiva.', enfasis: 'Movilidad y Confianza', categoria: 'En Pareja' },
  { id: 'ex-par-29', titulo: 'Surf en los Pies\n(Foot Surfing)', descripcion: 'La base se acuesta, el volador se para sobre los pies de la base (con asistencia de manos) y "surfea" los movimientos.', enfasis: 'Equilibrio y Juego', categoria: 'En Pareja' },
  { id: 'ex-par-30', titulo: 'Masaje de Espalda con los Pies\n(Foot Press on Back)', descripcion: 'Uno tumbado boca abajo, el otro usa sus pies para aplicar una presión suave en la espalda, preparando los músculos.', enfasis: 'Masaje y Conexión', categoria: 'En Pareja' },
];
