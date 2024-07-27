import axios from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponseModel} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefreshModel} from "../models/TokenRefreshModel";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

const userService = {
    saveUser: async (data:UserModel):Promise<boolean> => {
       let response = await axiosInstance.post<UserResponseModel>('/users', data);
       return !!response.data.id || false;
    }
}

const authService = {
    authenticate: async (data:TokenObtainPairModel):Promise<void> => {
        let response = await axiosInstance.post<TokenRefreshModel>('/auth', data);
        console.log(response.data.access);
        console.log(response.data.refresh);

    }
}

export {userService, authService}