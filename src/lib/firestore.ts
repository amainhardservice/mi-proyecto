
'use server';

import type { Asana, Pose, Concept, PoseModifier, Exercise } from '@/types';
import { lBasingPoses } from '@/lib/data/l-basing';
import { icarianPoses } from '@/lib/data/icarian';
import { standingPoses } from '@/lib/data/standing';
import { thaiMassagePoses } from '@/lib/data/thai-massage';
import { allConceptsData, allAsanasData, allModifiersData } from '@/lib/data/glossary';
import { therapeuticPoses } from './data/therapeutic';
import { transitionPoses } from './data/transitions';
import { whipPoses } from './data/whips';
import { flowPoses } from './data/flows';
import { allExercisesData } from './data/warmup';

const allPosesData: Pose[] = [
  ...lBasingPoses,
  ...icarianPoses,
  ...whipPoses,
  ...standingPoses,
  ...thaiMassagePoses,
  ...therapeuticPoses,
  ...transitionPoses,
  ...flowPoses,
];

export async function getPoses(): Promise<Pose[]> {
  // We are simulating fetching data from a database by combining our data files.
  return Promise.resolve(allPosesData);
}

export async function getPoseModifiers(): Promise<PoseModifier[]> {
    return Promise.resolve(allModifiersData);
}

export async function getConcepts(): Promise<Concept[]> {
  return Promise.resolve(allConceptsData);
}

export async function getAsanas(): Promise<Asana[]> {
  return Promise.resolve(allAsanasData);
}

export async function getExercises(): Promise<Exercise[]> {
  return Promise.resolve(allExercisesData);
}
