type TUseTrackHookDepsChangedOptions = {
  keyPrefix?: string;
};

type TDifference = {
  key: string;
  oldValue: unknown;
  oldValueType: string;
  newValue: unknown;
  newValueType: string;
};

export type { TUseTrackHookDepsChangedOptions, TDifference };
