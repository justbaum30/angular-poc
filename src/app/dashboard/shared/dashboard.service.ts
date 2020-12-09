import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import {GetAccountsAction} from "../../core/store/account/account.actions";
import {DeleteUserAction, GetUsersAction} from "../../core/store/user/user.actions";
import {selectDashboard} from "./dashboard.selectors";
import {Observable} from "rxjs";
import {Dashboard} from "./models/dashboard";

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(private store: Store<AppState>) {}

  loadAndGetDashboard(): Observable<Dashboard> {
    this.store.dispatch(new GetAccountsAction());
    this.store.dispatch(new GetUsersAction());

    return this.store.select(selectDashboard);
  }

  deleteUser(id: string) {
    this.store.dispatch(new DeleteUserAction(id));
  }
}
