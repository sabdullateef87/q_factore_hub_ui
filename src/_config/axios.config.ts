import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../reduxStore"
import { apiConstants } from '../_constants/api.constants';

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;


const axiosInstance = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com/todos",
    baseURL: baseURL
});

const requestHandler = (request: AxiosRequestConfig): any => {
    return request;
};

const requestErrorHandler = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
};

const responseHandler = (response: AxiosResponse): any => {
    console.log("Response : ", response);
    return response;
};

const responseErrorHandler = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(requestHandler, requestErrorHandler);
axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler);

export default axiosInstance;