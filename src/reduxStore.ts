import { applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { postReducer } from './_reducers/playground.reducer';
import { authReducerSignUp, authReducerSignIn } from './_reducers/authorization.reducer';
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const red = combineReducers({
    post: postReducer,
    signUp: authReducerSignUp,
    login: authReducerSignIn
})
export const store = configureStore({
    reducer: {
        post: postReducer,
        signUp: authReducerSignUp,
        login: authReducerSignIn
    },
    middleware: [thunk, loggerMiddleware, ...getDefaultMiddleware()],
    devTools: true
});

export type State = ReturnType<typeof red>;