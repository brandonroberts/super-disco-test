import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as appActions from './app.actions';

@Injectable()
export class AppEffects {
  public url = '';

  @Effect()
  getUsername = this.actions$
    .pipe(
      ofType(appActions.GET_USERNAME),
      switchMap((action$: appActions.GetUsernameAction) => {
        return this.http.get<{ user: string }>(
          this.url,
          { responseType: 'json', observe: 'body' }
        ).pipe(
          map((data) => {
            return {
              type: appActions.LOAD_USERNAME_SUCCESS,
              payload: data.user
            }
          }),
          catchError((error) => {
            return throwError(new Error(error));
          })
        )
      })
    );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}