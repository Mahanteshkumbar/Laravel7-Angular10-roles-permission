//import * as class from '../actions/class';
import { AuthActions, ActionType } from './auth.actions';

export interface State {
    authonticated: boolean;
    authToken: string;
};

const token = localStorage.getItem('token');

//console.log("Initial state"+token);
const initialState: State = {
    authonticated: token!== null,
    authToken: token?token:null
};

export function authReducer(state = initialState, action: AuthActions): State {
    //return null;
    switch (action.type) {
        case (ActionType.SIGNIN): {
            return {
                ...state,
                authonticated:true
            };
        };
        case (ActionType.SIGNUP): {
            return {
                ...state,
                authonticated:true
            };
        };

        case (ActionType.LOGOUT): {
            return {
                authToken: null,
                authonticated:false
            };
        };

        case (ActionType.SET_TOKEN):{
            return{
                ...state,
                authToken:action.payLoad
            }
        };

        default: {
            return state;
        };
    }
}