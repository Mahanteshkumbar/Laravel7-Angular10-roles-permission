import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ActionType {
    SIGNIN = 'SIGNIN',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGNUP = 'SIGNUP',
    LOGOUT = 'LOGOUT',
    SET_TOKEN = 'SET_TOKEN'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class SignIn implements Action {
    readonly type = ActionType.SIGNIN;
}

export class SignUp implements Action {
    readonly type = ActionType.SIGNUP;
}

export class Logout implements Action {
    readonly type = ActionType.LOGOUT;
}

export class SetToken implements Action {
    readonly type = ActionType.SET_TOKEN;
    constructor(public payLoad : string){}
}

export class SignupSuccess implements Action {
    readonly type = ActionType.SIGN_UP_SUCCESS;
    constructor(public payLoad: object){}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AuthActions = SignIn | SignUp | SetToken | Logout | SignupSuccess;
