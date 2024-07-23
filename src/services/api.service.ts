import axios, {AxiosResponse} from "axios";
import {ITodo} from "../models/ITodo";
import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

const getUsers = async ():Promise<IUser[]> => {
    return await axiosInstance.get('/users').then(response => response.data.users);
}

const getPostsOfUser = async (userId:string):Promise<IPost[]> => {
    return await axiosInstance.get('/posts'+userId).then(response => response.data.posts);
}


const getTodos =  async ():Promise<AxiosResponse<ITodo[]>> => {
    return await axiosInstance.get('/todos').then((response) => response.data.todos)
}

const getTodo =  async (id:string):Promise<AxiosResponse<ITodo>> => {
    return await axiosInstance.get('/todos/'+id).then((response) => response.data.todo)
}

export {getUsers, getPostsOfUser, getTodos, getTodo}