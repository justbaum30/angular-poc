import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {userAdapter, UserState} from "./user.state";
import {UserRecord} from "../../services/user/models/user-record";

const featureSelector = createFeatureSelector<AppState, UserState>(
  'user'
);

const selectHasUsersLoaded = createSelector(
  featureSelector,
  (state) => state.hasLoaded
);

const selectAllUsers = createSelector(
  featureSelector,
  (state) => userAdapter.getSelectors().selectAll(state.users)
);

export const selectUsers = createSelector(
  selectHasUsersLoaded,
  selectAllUsers,
  (hasUsersLoaded: boolean, users: UserRecord[]) => {
    return hasUsersLoaded ? users : undefined;
  }
)
