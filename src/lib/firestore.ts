
'use server';

import type { Asana, Pose, Concept, PoseModifier, Exercise } from '@/types';
import { allPosesData } from '@/lib/data';
import { allConceptsData, allAsanasData, allModifiersData } from '@/lib/data/glossary';
import { allExercisesData } from './data/warmup';


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
