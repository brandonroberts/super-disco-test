import * as AppActions from './app.actions';
import * as handler from './app.models';

export function appReducer(
  state: handler.AppState = handler.initAppState,
  action: AppActions.AppActions
) {
  switch(action.type) {
    case AppActions.LOAD_USERNAME_SUCCESS:
      return {
        ...state,
        username: action.payload
      }

    default:
      return state
  }
}