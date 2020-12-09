import {Injectable} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AccountService} from "../../services/account/account.service";
import {Observable, of} from "rxjs";
import {AccountActionType, GetAccountsAction, GetAccountsSuccessAction} from "./account.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {FatalErrorAction} from "../error/error.actions";

@Injectable()
export class AccountEffects {

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private accountService: AccountService,
  ) {}

  @Effect()
  getAccounts$: Observable<Action> = this.actions$.pipe(
    ofType<GetAccountsAction>(AccountActionType.GetAccounts),
    switchMap(() => {
      return this.accountService.getAccounts().pipe(
        map((accountRecords) =>
          new GetAccountsSuccessAction(accountRecords)
        ),
        catchError((error) =>
          of(new FatalErrorAction(error))
        ),
      )
    })
  );
}
