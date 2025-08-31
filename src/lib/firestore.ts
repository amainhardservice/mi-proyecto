'use server';

import type { Asana, Pose, Concept, PoseModifier } from '@/types';
import { lBasingPoses } from '@/lib/data/l-basing';
import { icarianPoses } from '@/lib/data/icarian';
import { standingPoses } from '@/lib/data/standing';
import { thaiMassagePoses } from '@/lib/data/thai-massage';
import { allConceptsData, allAsanasData, allModifiersData } from '@/lib/data/glossary';

const allPosesData: Pose[] = [
  ...lBasingPoses,
  ...icarianPoses,
  ...standingPoses,
  ...thaiMassagePoses,
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
