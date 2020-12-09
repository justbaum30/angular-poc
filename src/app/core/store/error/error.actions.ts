import { Action } from '@ngrx/store';

export enum ErrorActionType {
  FatalError = '[Error] Fatal Error',
  SilentError = '[Error] Silent Error',
}

export class FatalErrorAction implements Action {
  readonly type = ErrorActionType.FatalError;

  constructor(public error: {}) {}
}

export class SilentErrorAction implements Action {
  readonly type = ErrorActionType.SilentError;

  constructor(public error: {}) {}
}

export type ErrorActions = FatalErrorAction | SilentErrorAction;
