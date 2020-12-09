import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ErrorActionType,
  FatalErrorAction,
  SilentErrorAction,
} from './error.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorEffects {
  constructor(
    private actions$: Actions
  ) {}

  @Effect({ dispatch: false })
  handleFatalError$ = this.actions$.pipe(
    ofType<FatalErrorAction>(ErrorActionType.FatalError),
    tap((action: FatalErrorAction) => {
      console.error(action.error);
      alert('Fatal error!');
    })
  );

  @Effect({ dispatch: false })
  logSilentError$ = this.actions$.pipe(
    ofType(ErrorActionType.SilentError),
    tap((action: SilentErrorAction) => {
      console.error(action.error);
    })
  );
}
