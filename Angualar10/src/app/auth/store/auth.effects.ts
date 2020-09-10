import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { tap, take, map, concatMap } from "rxjs/operators";
import { ActionType, AuthActions } from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    @Effect() authEffects$: Observable<Action> = this.actions$.pipe(
        ofType(ActionType.SIGN_UP_SUCCESS),
        take(1),
       // .map((action: AuthActions) => action.payload)
       // map(toPayload),
        tap((response) => {
            console.log(response);
            // localStorage.clear();        
            // localStorage.setItem('token',access_token);
            // localStorage.setItem('user_id',response.user.id); 
            this.router.navigate(['/home']);            
        })
    );

    constructor(
        private actions$: Actions,
        private router: Router     
    ) {}
}