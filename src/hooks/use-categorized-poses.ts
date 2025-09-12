
import { useMemo } from 'react';
import type { Pose } from '@/types';

const getItemType = (item: Pose): string => {
    if (item.tags?.includes('Whip')) return 'whip';
    if (item.tags?.includes('Icarian')) return 'icarian';
    if (item.tags?.includes('Transition')) return 'transition';
    if (item.tags?.includes('Flow')) return 'flow';
    if (item.tags?.includes('Washing Machine')) return 'washing-machine';
    if ('nivel' in item) return 'pose';
    return 'pose';
};

export const useCategorizedPoses = (poses: Pose[], filterFn: (item: Pose) => boolean) => {
  return useMemo(() => {
    const allItems = poses
      .map(p => ({ ...p, itemType: getItemType(p) }))
      .filter(filterFn);

    const fundamentals = allItems.filter(p => p.tags?.includes('Fundamental') && !p.tags?.includes('Terapéutico'));
    const therapeutic = allItems.filter(p => p.tags?.includes('Terapéutico'));
    const throneFamily = allItems.filter(p => p.tags?.includes('Familia Trono'));
    const birdFamily = allItems.filter(p => p.tags?.includes('Familia Pájaro'));
    const batFamily = allItems.filter(p => p.tags?.includes('Familia Murciélago'));
    
    const starFamily = allItems.filter(p => p.tags?.includes('Familia Estrella'));
    const shoulderstands = allItems.filter(p => p.tags?.includes('Inversión sobre Hombros'));
    const handstands = allItems.filter(p => p.tags?.includes('Inversión sobre Manos'));

    const transitions = allItems.filter(p => p.type === 'Transition');
    const washingMachines = allItems.filter(p => p.type === 'Washing Machine');
    const flows = allItems.filter(p => p.type === 'Flow');
    const whips = allItems.filter(p => p.itemType === 'whip');
    const icarian = allItems.filter(p => p.itemType === 'icarian');
    
    const standing = allItems.filter(p => p.tags?.includes('Standing'));
    
    const allFundamentals = [...new Set([...fundamentals, ...therapeutic, ...throneFamily, ...birdFamily, ...batFamily])];
    const allBalances = [...new Set([...starFamily, ...shoulderstands, ...handstands])];
    const allDynamics = [...new Set([...transitions, ...washingMachines, ...whips, ...icarian, ...flows])];

    return {
      allFundamentals,
      allBalances,
      allDynamics,
      allStanding: standing,
      staticFundamentals: fundamentals,
      throneFamily,
      birdFamily,
      batFamily,
      therapeutic,
      starFamily,
      shoulderstands,
      handstands,
      transitions,
      washingMachines,
      whips,
      icarian,
      flows,
      standing,
    };
  }, [poses, filterFn]);
};
