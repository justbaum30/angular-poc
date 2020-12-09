import { ErrorActions, ErrorActionType } from './error.actions';
import { ErrorState, initialErrorState } from './error.state';

export function errorReducer(
  state = initialErrorState,
  action: ErrorActions
): ErrorState {
  switch (action.type) {
    case ErrorActionType.FatalError: {
      return {
        ...state,
        fatalError: action.error,
      };
    }

    case ErrorActionType.SilentError: {
      return {
        ...state,
        silentError: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
