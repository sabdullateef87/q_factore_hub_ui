export interface RegisterUserSuccessAction {
    type: string;
    payload: any
}

export interface RegisterUserFailureAction {
    type: string;
    payload: any
}

export type AuthAction = RegisterUserFailureAction | RegisterUserSuccessAction;