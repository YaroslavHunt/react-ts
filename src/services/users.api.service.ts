import axios, {AxiosResponse} from "axios";
import IUser from "../models/IUser";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    }
});


const getUsers = ():Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance.get('/users');
    }

const getUser = async (id:number):Promise<AxiosResponse<IUser>> => {
    return await axiosInstance.get('/users/' + id);
    }


export { getUsers, getUser }