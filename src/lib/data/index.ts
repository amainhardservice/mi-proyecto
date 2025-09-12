
import type { Pose } from '@/types';
import { lBasingLevel1Poses } from './l-basing-level-1';
import { lBasingLevel2Poses } from './l-basing-level-2';
import { lBasingLevel5Poses } from './l-basing-level-5';
import { lBasingLevel7Poses } from './l-basing-level-7';
import { icarianPoses } from './icarian';
import { standingPoses } from './standing';
import { thaiMassagePoses } from './thai-massage';
import { therapeuticPoses } from './therapeutic';
import { transitionPoses } from './transitions';
import { transitionsLevel6Poses } from './transitions-level-6';
import { whipPoses } from './whips';
import { flowPoses } from './flows';

export const allPosesData: Pose[] = [
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
