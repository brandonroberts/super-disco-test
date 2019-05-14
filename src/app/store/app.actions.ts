import { Action } from '@ngrx/store';

export const GET_USERNAME = 'GET_USERNAME';
export const LOAD_USERNAME_SUCCESS = 'LOAD_USERNAME_SUCCESS';

export class GetUsernameAction implements Action {
  readonly type = GET_USERNAME;
}

export class LoadUsernameSuccessAction implements Action {
  readonly type = LOAD_USERNAME_SUCCESS;

  constructor(public payload: string) {}
}

export type AppActions = GetUsernameAction | LoadUsernameSuccessAction;