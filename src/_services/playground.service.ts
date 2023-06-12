import axios from "axios"
import axiosInstance from "../_config/axios.config";


export const getPosts = () => {
    return axiosInstance.get("https://jsonplaceholder.typicode.com/todos");
};