import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AuthState {
    authState: fromAuth.State
}

export const reducers : ActionReducerMap<AuthState> = {
    authState: fromAuth.authReducer
}