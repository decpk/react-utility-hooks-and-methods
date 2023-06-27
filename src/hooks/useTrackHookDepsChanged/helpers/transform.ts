import { TDifference, TUseTrackHookDepsChangedOptions } from '../types';

export function transform(
  diff: TDifference[],
  options?: TUseTrackHookDepsChangedOptions,
): TDifference[] {
  return diff.map((diffObj: TDifference) => {
    const clone = { ...diffObj };

    if (options?.keyPrefix) {
      clone.key = `${options.keyPrefix}${clone.key}`;
    }

    return clone;
  });
}
