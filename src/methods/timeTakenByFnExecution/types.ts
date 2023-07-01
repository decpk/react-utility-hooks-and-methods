type TTimeTakenByFnExecutionOptions = {
  noConsole?: boolean;
  consolePrefix?: string;
};

type TFlow = {
  startTime: number;
  endTime: number;
  executionTime: number;
};

type TTimeTakenByFnExecutionReturnValue = {
  data: unknown;
  flow?: TFlow;
};

type TPrintOnConsoleOptions = {
  noConsole?: boolean;
  consolePrefix?: string;
  executionTime?: number;
};

export type {
  TTimeTakenByFnExecutionOptions,
  TFlow,
  TTimeTakenByFnExecutionReturnValue,
  TPrintOnConsoleOptions,
};
