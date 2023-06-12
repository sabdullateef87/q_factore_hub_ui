import { AxiosError } from "axios";
import { authConstants } from "../_constants/authorization.constants";
import { loginUserService, registerUserService } from '../_services/authentication.service';
import { LoginUserDTO, RegisterDTO } from "../_interfaces/authorization.interface";
import { Dispatch } from "react";
import { AuthAction } from '../_action.types/auth.action.types';

export const registerUserAction = (host: string, form: RegisterDTO) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const res = await registerUserService(host, form);
            dispatch({ type: authConstants.REGISTER_USER_SUCCESS, payload: res.data });

        } catch (err) {
            if (err instanceof AxiosError) {
                const errorMessage = err.response?.data?.message;
                dispatch({ type: authConstants.REGISTER_USER_ERROR, payload: { error: errorMessage } });
            } else {
                dispatch({ type: authConstants.REGISTER_USER_ERROR, payload: { error: "Failed to register the user" } });
            }
        }
    }
}

export const loginUserAction = (host: string, form: LoginUserDTO) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const res = await loginUserService(host, form);
            dispatch({ type: authConstants.LOGIN_USER_SUCCESS, payload: res.data });
            localStorage.setItem("auth_token", res.data?.data);
        } catch (err) {
            if (err instanceof AxiosError) {
                const errorMessage = err.response?.data?.message;
                console.log(errorMessage)
                dispatch({ type: authConstants.LOGIN_USER_ERROR, payload: { error: errorMessage } });
            } else {
                dispatch({ type: authConstants.LOGIN_USER_ERROR, payload: { error: "Failed to login the user, try again" } });
            }
        }
    }
}

export const resetRegisterNotificiation = () => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({ type: authConstants.REGISTER_USER_NOTIFICATION_RESET, payload: {} });
    }
}


export const resetLoginNotificiation = () => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({ type: authConstants.LOGIN_USER_NOTIFICATION_RESET, payload: {} });
    }
}

export const getAuthenticatedUser = () => {
    
}
