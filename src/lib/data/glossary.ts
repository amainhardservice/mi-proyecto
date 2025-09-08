import type { Concept, Asana, PoseModifier } from '@/types';
import { acroyogaConcepts } from './glossary/acroyoga';
import { thaiMassageConcepts } from './glossary/thai-massage';
import { yogaConcepts } from './glossary/yoga';
import { asanas } from './glossary/asanas';
import { modifiers } from './glossary/modifiers';

export const allModifiersData: PoseModifier[] = [...modifiers];

export const allConceptsData: Concept[] = [
  ...acroyogaConcepts,
  ...thaiMassageConcepts,
  ...yogaConcepts,
];

export const allAsanasData: Asana[] = [...asanas];
