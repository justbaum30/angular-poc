import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {UserRecord} from "../../services/user/models/user-record";

export interface UserState {
  users: EntityState<UserRecord>;
  hasLoaded: boolean;
}

export const userAdapter = createEntityAdapter<UserRecord>({
  selectId: (user) => user.id,
});

export const initialUserState: UserState = {
  users: userAdapter.getInitialState(),
  hasLoaded: false,
};
