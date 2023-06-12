export interface RegisterInitialState {
    user: any,
    permissions: string[],
    token: string | null,
    notification: Notification
}

export interface LoginInitialState {
    token: null | string,
    notification: Notification
}
export interface Notification {
    error?: string[] | string,
    success?: string[] | string
    warning?: string[] | string
}

export interface RegisterDTO {
    email: string,
    password: string
}
export interface LoginUserDTO {
    email: string,
    password: string
}

// Action Interfaces And Types
interface RegisterSuccess {
    type: string,
    payload: any
}
interface RegisterFailure {
    type: string,
    payload: any
}

interface LoginSuccess {
    type: string,
    payload: any
}
interface LoginFailure {
    type: string,
    payload: any
}

export type AuthAction = RegisterSuccess | RegisterFailure | LoginSuccess | LoginFailure;