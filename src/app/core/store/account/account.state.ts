import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AccountRecord} from "../../services/account/models/account-record";

export interface AccountState {
  accounts: EntityState<AccountRecord>;
  hasLoaded: boolean;
}

export const accountAdapter = createEntityAdapter<AccountRecord>({
  selectId: (account) => account.accountNumber,
});

export const initialAccountState: AccountState = {
  accounts: accountAdapter.getInitialState(),
  hasLoaded: false,
};
