import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {accountAdapter, AccountState} from "./account.state";
import {AccountRecord} from "../../services/account/models/account-record";

const featureSelector = createFeatureSelector<AppState, AccountState>(
  'account'
);

const selectHasAccountsLoaded = createSelector(
  featureSelector,
  (state) => state.hasLoaded
);

const selectAllAccounts = createSelector(
  featureSelector,
  (state) => accountAdapter.getSelectors().selectAll(state.accounts)
);

export const selectAccounts = createSelector(
  selectHasAccountsLoaded,
  selectAllAccounts,
  (hasAccountsLoaded: boolean, accounts: AccountRecord[]) => {
    return hasAccountsLoaded ? accounts : undefined;
  }
);
