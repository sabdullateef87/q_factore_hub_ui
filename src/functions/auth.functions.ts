import { useSelector } from "react-redux";
import { State } from "../reduxStore";
import { isEmpty } from "../_util/dataUtil";

export const getAuthenticatedUserToken = (): Boolean => {
    const token = localStorage.getItem('auth_token');
    return isEmpty(token);
}

export const logOutUser = () => {
    localStorage.clear()
}