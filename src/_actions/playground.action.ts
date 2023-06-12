import { GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "../_constants/playground.constant"
import { getPosts } from "../_services/playground.service";
import { PostsState } from '../_interfaces/playground.interface';


export const fetchPostsSuccessAction = (posts: PostsState) => ({ type: GET_POSTS_SUCCESS, payload: posts });
export const fetchPostsErrorAction = (error: any) => ({ type: GET_POSTS_FAILURE, payload: error });

export const fetchPosts = () => async (dispacth: any) => {
    try {
        const res = await getPosts();
        dispacth(fetchPostsSuccessAction(res.data));
    } catch (error) {
        dispacth(fetchPostsErrorAction("Unable to fetch posts"));
    }
}


interface FetchPostsActionSuccess {
    type: string;
    payload: any;
}
interface FetchPostsActionFailure {
    type: string;
    payload: any;
}
export type PostAction = FetchPostsActionSuccess | FetchPostsActionFailure