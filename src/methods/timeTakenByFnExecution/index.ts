import { executeCommands } from './helpers';
import {
  TTimeTakenByFnExecutionOptions,
  TTimeTakenByFnExecutionReturnValue,
} from './types';

export async function timeTakeByFnExecution(
  fn: Function,
  options?: TTimeTakenByFnExecutionOptions,
): Promise<TTimeTakenByFnExecutionReturnValue> {
  const { data, flow } = await executeCommands(fn, options);
  return { data, flow };
}
