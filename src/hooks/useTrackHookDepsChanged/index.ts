import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { getDifference } from './helpers/getDifference';
import { TUseTrackHookDepsChangedOptions } from './types';
import { transform } from './helpers/transform';

export const useTrackHookDepsChanged = (
  depsAsObj: Record<string, unknown>,
  options?: TUseTrackHookDepsChangedOptions,
): Array<unknown> => {
  const newDeps = Object.values(depsAsObj);
  const oldDeps = useRef(newDeps);

  useEffect(() => {
    const difference = getDifference(oldDeps.current, depsAsObj);
    const transformedDiff = transform(difference, options);
    console.table(transformedDiff);

    // UPDATED OLD VALUE
    oldDeps.current = newDeps;
  }, newDeps);

  return newDeps;
};

useTrackHookDepsChanged.PropTypes = {
  depsAsObj: PropTypes.number.isRequired,
  options: PropTypes.object,
};

useTrackHookDepsChanged.defaultProps = {
  depsAsObj: {},
  options: undefined,
};
