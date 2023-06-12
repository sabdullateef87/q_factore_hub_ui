import axios from "axios";
import axiosInstance from "../_config/axios.config";
import { RegisterDTO } from "../_interfaces/authorization.interface";

// TODO:  remember to add types for the forms

export const registerUserService = (host: string, form: RegisterDTO) => {
    return axiosInstance.post(host, form);
}

export const loginUserService = (host: string, form: RegisterDTO) => {
    return axiosInstance.post(host, form);
};

const getAuthUserService = () => {
    //TODO Getting the user from store or the database
};