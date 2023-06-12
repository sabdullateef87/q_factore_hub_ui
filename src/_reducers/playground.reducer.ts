import { PostAction } from "../_actions/playground.action";
import { GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "../_constants/playground.constant"

interface InitialSate {
    posts: any[],
    error: boolean | null | string
}
const initialState: InitialSate = {
    posts: [],
    error: null
}

export const postReducer = (state = { ...initialState }, action: any) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                error: false
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                error: action.payloadc
            }
        default:
            return state;
    }
}