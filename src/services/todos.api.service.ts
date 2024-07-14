import axios, {AxiosResponse} from "axios";
import {ITodo} from "../models/ITodo";
import {useLocation, useParams} from "react-router-dom";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    }
});


const getTodos =  async ():Promise<AxiosResponse<ITodo[]>> => {
    return await axiosInstance.get('/todos').then((response) => response.data)
}

const getTodo =  async (location:ITodo):Promise<AxiosResponse<ITodo[]>> => {
    return await axiosInstance.get('/users/').then((response) => response.data)
}

export {getTodos, getTodo}