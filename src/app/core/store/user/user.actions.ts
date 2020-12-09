import { Action } from '@ngrx/store';
import {UserRecord} from "../../services/user/models/user-record";

export enum UserActionType {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
}

export class GetUsersAction implements Action {
  readonly type = UserActionType.GetUsers;

  constructor() {}
}

export class GetUsersSuccessAction implements Action {
  readonly type = UserActionType.GetUsersSuccess;

  constructor(public users: UserRecord[]) {}
}

export class DeleteUserAction implements Action {
  readonly type = UserActionType.DeleteUser;

  constructor(public id: string) {}
}

export class DeleteUserSuccessAction implements Action {
  readonly type = UserActionType.DeleteUserSuccess;

  constructor(public users: UserRecord[]) {}
}

export type UserActions =
  | GetUsersAction
  | GetUsersSuccessAction
  | DeleteUserAction
  | DeleteUserSuccessAction;
