import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';
import * as AppActions from './app.actions';

describe(`App Effects`, () => {
    let actions: Observable<any>;
    let effects: AppEffects;
    let http: HttpClient;

    const API_URL = 'localhost:8080';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                AppEffects,
                provideMockActions(() => actions),
                HttpClient,
            ]
        });

        effects = TestBed.get(AppEffects);
        http = TestBed.get(HttpClient);
    });


    it('should be defined', () => {
        expect(effects).toBeDefined();
        expect(http).toBeDefined();
    });

    it('should get InitConfig', () => {
        const action = new AppActions.GetUsernameAction();
        const completion = new AppActions.LoadUsernameSuccessAction('bob');

        actions = hot('--a', { a: action });
        const response = cold('--b', { b: { user: 'bob' } })
        const expected = cold('----c', { c: completion });
        http.get = jest.fn().mockReturnValue(response);

        expect(effects.getUsername).toBeObservable(expected);
    })
});