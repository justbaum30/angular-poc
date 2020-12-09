import {accountAdapter, AccountState, initialAccountState} from "./account.state";
import {AccountActions, AccountActionType} from "./account.actions";

export function accountReducer(
  state = initialAccountState,
  action: AccountActions
): AccountState {
  switch (action.type) {
    case AccountActionType.GetAccountsSuccess:
      return {
        ...state,
        accounts: accountAdapter.setAll(
          action.accounts,
          state.accounts
        ),
        hasLoaded: true,
      };

    case AccountActionType.GetAccounts:
    default:
      return state;
  }
}
