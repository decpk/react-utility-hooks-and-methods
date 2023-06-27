/* eslint-disable @typescript-eslint/no-explicit-any */

import { TDifference } from "../types";

export function getDifference(
  oldDeps: unknown[],
  newDeps: Record<string, unknown>
): TDifference[] {
  const difference = Object.entries(newDeps).reduce(
    (acc: TDifference[], [key, value], index) => {
      if (value !== oldDeps[index]) {
        acc.push({
          key,
          oldValue: oldDeps[index],
          oldValueType: typeof oldDeps[index],
          newValue: value,
          newValueType: typeof value,
        });
      }
      return acc;
    },
    []
  );
  return difference;
}
