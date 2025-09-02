import { LucideIcon } from "lucide-react";

export interface PoseDetails {
  sequence_images?: string[];
  gallery_images?: string[];
}

export interface Pose {
  id: string;
  nombre: string;
  nivel: number;
  type: 'L-Basing' | 'Icarian' | 'Standing' | 'Thai-Massage' | 'Transition' | 'Therapeutic';
  descripcion: string;
  narrativa_detallada?: string;
  musculos?: {
    base: string[];
    volador: string[];
  };
  calibracion?: {
    base:string[];
    volador: string[];
    observador: string[];
  };
  prerequisites: string[];
  url_imagen?: string;
  url_video?: string;
}

export interface PoseWithImage extends Pose, PoseDetails {
    url_imagen?: string;
}


export interface Concept {
  id: string;
  titulo: string;
  descripcion: string;
  category: 'Principios Fundamentales' | 'Dinámicas y Transiciones' | 'Roles y Estilos de Práctica' | 'Comunicación y Seguridad' | 'Masaje Tailandés' | 'Yoga';
  subCategory?: 
    | 'Principios Fundamentales y Filosofía' 
    | 'Contexto Cultural y Ritual'
    | 'Anatomía Energética'
    | 'Las 10 Líneas Sen Principales'
    | 'Técnicas de Aplicación de Presión'
    | 'Técnicas de Movimiento y Estiramiento'
    | 'Posiciones del Receptor'
    | 'Los Cuatro Estados Sublimes (Bhavana)'
    | 'Herramientas y Entorno'
    | 'Filosofía y Conceptos Clave' 
    | 'El Ciclo de Samsara y la Liberación'
    | 'Los 8 Miembros del Yoga (Ashtanga)' 
    | 'Pranayama y Energía Sutil' 
    | 'Los 7 Chakras' 
    | 'Técnicas y Enfoques' 
    | 'Tipos de Yoga' 
    | 'Términos Comunes';
  color?: string;
  simbolo?: string;
}

export interface Asana {
  id: string;
  nombre_sans: string;
  nombre_es: string;
  descripcion: string;
}

export interface PoseModifier {
  id: string;
  titulo: string;
  descripcion: string;
}

// Type for items in the sequence builder
export type SequenceItem = (Pose | Concept | Asana | PoseModifier) & {
  uniqueId: string;
  itemType: 'pose' | 'concept' | 'asana' | 'modifier';
  notes: string;
};
