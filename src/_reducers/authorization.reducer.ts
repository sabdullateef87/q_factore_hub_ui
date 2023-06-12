import { AnyAction } from '@reduxjs/toolkit';
import { authConstants } from '../_constants/authorization.constants';
import { RegisterInitialState,LoginInitialState } from '../_interfaces/authorization.interface';

export const registerInitialState: RegisterInitialState = {
    user: {},
    permissions: [],
    token: null,
    notification: {}
};


export const authReducerSignUp = (state = { ...registerInitialState }, action: AnyAction) => {
    switch (action.type) {
        case authConstants.REGISTER_USER_SUCCESS:
            return {
                ...state,
                notification: { success: action.payload?.message } || { success: "User Created Successfully" }
            }
        case authConstants.REGISTER_USER_ERROR:
            return {
                ...state,
                notification: action.payload
            }
        case authConstants.REGISTER_USER_NOTIFICATION_RESET:
            return {
                ...state,
                notification: {}
            }
        default:
            return state;
    }
}

export const loginInitialState: LoginInitialState = {
    token: null,
    notification: {}
};
export const authReducerSignIn = (state = { ...loginInitialState }, action: AnyAction) => {
    switch (action.type) {
        case authConstants.LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.payload?.data,
                notification: { success: action.payload?.message } || { success: "User Logged In Successfully" }
            }
        case authConstants.LOGIN_USER_ERROR:
            return {
                ...state,
                notification: action.payload
            }
        case authConstants.LOGIN_USER_NOTIFICATION_RESET:
            return {
                ...state,
                notification: {}
            }
        default:
            return state;
    }
}