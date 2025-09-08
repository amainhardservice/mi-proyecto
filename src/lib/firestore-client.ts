
import type { Asana, Pose, Concept, PoseModifier, Exercise } from '@/types';
import { lBasingPoses } from '@/lib/data/l-basing';
import { icarianPoses } from '@/lib/data/icarian';
import { standingPoses } from '@/lib/data/standing';
import { thaiMassagePoses } from '@/lib/data/thai-massage';
import { allConceptsData as conceptsData, allAsanasData, allModifiersData } from '@/lib/data/glossary';
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

const allConceptsData: Concept[] = conceptsData;

export { allPosesData, allConceptsData, allAsanasData, allModifiersData, allExercisesData };
