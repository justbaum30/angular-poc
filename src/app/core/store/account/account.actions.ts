import { Action } from '@ngrx/store';
import {AccountRecord} from "../../services/account/models/account-record";

export enum AccountActionType {
  GetAccounts = '[Account] Get Accounts',
  GetAccountsSuccess = '[Account] Get Accounts Success',
}

export class GetAccountsAction implements Action {
  readonly type = AccountActionType.GetAccounts;

  constructor() {}
}

export class GetAccountsSuccessAction implements Action {
  readonly type = AccountActionType.GetAccountsSuccess;

  constructor(public accounts: AccountRecord[]) {}
}

export type AccountActions =
  | GetAccountsAction
  | GetAccountsSuccessAction;
