
import type { Asana, Pose, Concept, PoseModifier, Exercise } from '@/types';
import { lBasingLevel1Poses } from '@/lib/data/l-basing-level-1';
import { lBasingLevel2Poses } from '@/lib/data/l-basing-level-2';
import { lBasingLevel5Poses } from '@/lib/data/l-basing-level-5';
import { lBasingLevel7Poses } from '@/lib/data/l-basing-level-7';
import { icarianPoses } from '@/lib/data/icarian';
import { standingPoses } from '@/lib/data/standing';
import { thaiMassagePoses } from '@/lib/data/thai-massage';
import { allConceptsData as conceptsData, allAsanasData, allModifiersData } from '@/lib/data/glossary';
import { therapeuticPoses } from './data/therapeutic';
import { transitionPoses } from './data/transitions';
import { transitionsLevel6Poses } from './data/transitions-level-6';
import { whipPoses } from './data/whips';
import { flowPoses } from './data/flows';
import { allExercisesData as exercisesData } from './data/warmup';

const allPosesData: Pose[] = [
  ...lBasingLevel1Poses,
  ...lBasingLevel2Poses,
  ...lBasingLevel5Poses,
  ...lBasingLevel7Poses,
  ...icarianPoses,
  ...whipPoses,
  ...standingPoses,
  ...thaiMassagePoses,
  ...therapeuticPoses,
  ...transitionPoses,
  ...transitionsLevel6Poses,
  ...flowPoses,
];

const allConceptsData: Concept[] = conceptsData;
const allExercisesData: Exercise[] = exercisesData;

export { allPosesData, allConceptsData, allAsanasData, allModifiersData, allExercisesData };
