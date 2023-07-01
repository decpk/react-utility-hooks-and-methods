import {
  TFlow,
  TPrintOnConsoleOptions,
  TTimeTakenByFnExecutionOptions,
  TTimeTakenByFnExecutionReturnValue,
} from './types';

export async function calculateTimeTakenForExecutionOf(
  fn: Function,
): Promise<TFlow & { data: unknown }> {
  const startTime = performance.now();
  const data = await fn();
  const endTime = performance.now();
  return {
    startTime,
    endTime,
    executionTime: endTime - startTime,
    data,
  };
}

export function printOnConsole(options: TPrintOnConsoleOptions): void {
  const { noConsole, consolePrefix, executionTime } = options;
  if (!noConsole) {
    let str = consolePrefix || `🤞🤞🤞 ~ printOnConsole ~ value:`;
    str += ` => ${executionTime}`;
    console.log(str);
  }
}

export async function executeCommands(
  fn: Function,
  options?: TTimeTakenByFnExecutionOptions,
): Promise<TTimeTakenByFnExecutionReturnValue> {
  const { noConsole, consolePrefix } = options ?? {};
  const { data, startTime, endTime, executionTime } =
    await calculateTimeTakenForExecutionOf(fn);
  printOnConsole({
    noConsole,
    consolePrefix,
    executionTime,
  });

  return {
    data,
    flow: {
      startTime,
      endTime,
      executionTime,
    },
  };
}
