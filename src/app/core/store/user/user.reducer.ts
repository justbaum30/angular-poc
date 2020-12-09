import {initialUserState, userAdapter, UserState} from "./user.state";
import {UserActions, UserActionType} from "./user.actions";

export function userReducer(
  state = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionType.GetUsersSuccess:
    case UserActionType.DeleteUserSuccess:
      return {
        ...state,
        users: userAdapter.setAll(
          action.users,
          state.users
        ),
        hasLoaded: true,
      };

    case UserActionType.GetUsers:
    case UserActionType.DeleteUser:
    default:
      return state;
  }
}
