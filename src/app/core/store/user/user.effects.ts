import {Injectable} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {FatalErrorAction} from "../error/error.actions";
import {
  DeleteUserAction,
  DeleteUserSuccessAction,
  GetUsersAction,
  GetUsersSuccessAction,
  UserActionType
} from "./user.actions";
import {UserService} from "../../services/user/user.service";

@Injectable()
export class UserEffects {

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private userService: UserService,
  ) {}

  @Effect()
  getUsers$: Observable<Action> = this.actions$.pipe(
    ofType<GetUsersAction>(UserActionType.GetUsers),
    switchMap(() => {
      return this.userService.getUsers().pipe(
        map((userRecords) =>
          new GetUsersSuccessAction(userRecords)
        ),
        catchError((error) =>
          of(new FatalErrorAction(error))
        ),
      )
    })
  );

  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteUserAction>(UserActionType.DeleteUser),
    switchMap((action) => {
      return this.userService.deleteUser(action.id).pipe(
        map((userRecords) =>
          new DeleteUserSuccessAction(userRecords)
        ),
        catchError((error) =>
          of(new FatalErrorAction(error))
        ),
      )
    })
  );
}
