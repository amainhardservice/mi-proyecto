import { LucideIcon } from "lucide-react";

export interface PoseDetails {
  sequence_images?: string[];
  gallery_images?: string[];
}

export interface Pose {
  id: string;
  nombre: string;
  nivel: number;
  type: 'L-Basing' | 'Icarian' | 'Standing' | 'Thai-Massage' | 'Transition' | 'Therapeutic' | 'Flow' | 'Whip' | 'Washing Machine';
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
  originPoses?: string[];
  destinationPoses?: string[];
  url_imagen?: string;
  url_video?: string;
  gallery_images?: string[];
  gallery_videos?: string[];
  tags?: string[];
}

export interface PoseWithImage extends Pose {
    url_imagen?: string;
    gallery_images?: string[];
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
  url_imagen?: string;
  url_video?: string;
}

export interface PoseModifier {
  id: string;
  titulo: string;
  descripcion: string;
}

export interface Exercise {
  id: string;
  titulo: string; // "Nombre en Español\n(English Name)"
  descripcion: string;
  enfasis: string; // 'Core', 'Movilidad Articular', 'Cardio', 'Piernas', etc.
  categoria: 'Individual' | 'En Pareja';
}

export type DurationMode = 'seconds' | 'quantity';

// Base type for duration properties
interface DurationBase {
    durationMode: DurationMode;
}

// Properties for 'seconds' mode
interface DurationSeconds extends DurationBase {
    durationMode: 'seconds';
    duration: number;
    quantity?: never;
    secondsPerRep?: never;
}

// Properties for 'quantity' mode
interface DurationQuantity extends DurationBase {
    durationMode: 'quantity';
    duration?: never;
    quantity: number;
    secondsPerRep: number;
}

// Union type for duration
export type SequenceDuration = DurationSeconds | DurationQuantity;


// Type for items in the sequence builder
export type SequenceItem = Omit<Pose | Concept | Asana | PoseModifier | Exercise, 'duration'> & {
  uniqueId: string;
  itemType: 'pose' | 'concept' | 'asana' | 'modifier' | 'exercise' | 'transition' | 'flow' | 'whip' | 'icarian' | 'l-basing' | 'standing' | 'thai-massage' | 'therapeutic' | 'washing-machine';
  notes: string;
} & SequenceDuration;
