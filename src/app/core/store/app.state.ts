import {AccountState} from "./account/account.state";
import {ErrorState} from "./error/error.state";
import {UserState} from "./user/user.state";

export interface AppState {
  account: AccountState;
  error: ErrorState;
  user: UserState;
}
