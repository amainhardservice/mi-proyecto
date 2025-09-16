import type { Pose } from '@/types';

// Sound mapping to public URL paths
const soundMap: Record<string, string> = {
  'Familia Pájaro': '/sounds/bird.mp3',
  'Familia Trono': '/sounds/throne.mp3',
  'Familia Estrella': '/sounds/star.mp3',
  'Familia Murciélago': '/sounds/bat.mp3',
  'Washing Machine': '/sounds/machine.mp3',
  'Therapeutic': '/sounds/terapeutic.mp3',
  'Terapéutico': '/sounds/terapeutic.mp3',
  'Inversión sobre Manos': '/sounds/h2h.mp3',
  'Inversión sobre Hombros': '/sounds/inversionhombro.mp3',
  'Whip': '/sounds/default.mp3',
  'Icarian': '/sounds/default.mp3',
  'Standing': '/sounds/default.mp3',
  'Flow': '/sounds/default.mp3',
  'Transition': '/sounds/default.mp3',
};

// Default sound if no specific family is found
const defaultSound = '/sounds/default.mp3';

let audio: HTMLAudioElement | null = null;
if (typeof window !== 'undefined') {
  audio = new Audio();
}

export const playSoundForPose = (pose: Pose, volume: number = 0.8) => {
  if (!audio) return;

  let soundUrl: string | null = null;
  
  // Check pose type first
  if (soundMap[pose.type]) {
    soundUrl = soundMap[pose.type];
  }

  // Then check tags, which can override the type
  if (pose.tags) {
      for (const tag of pose.tags) {
          if (soundMap[tag]) {
              soundUrl = soundMap[tag];
              break; // Found a specific sound, stop searching
          }
      }
  }

  // If no sound is assigned (e.g., therapeutic poses without a specific sound should be silent)
  if (!soundUrl) {
    if (pose.type === 'Therapeutic' || pose.tags?.includes('Terapéutico')) {
      return; // Explicitly silence therapeutic poses if no sound is mapped
    }
    soundUrl = defaultSound;
  }
  
  audio.src = soundUrl;
  audio.volume = volume;
  audio.play().catch(e => {
    // This can happen if the user interacts before the audio is loaded, etc.
    // We can ignore it to keep the console clean.
  });
};
