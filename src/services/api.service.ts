import axios from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponseModel} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefreshModel} from "../models/TokenRefreshModel";
import {retriveLocalStorageData} from "../utils/utils";
import {CarPaginatedModel} from "../models/CarPaginatedModel";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

axiosInstance.interceptors.request.use(requestObj=>{

    if(localStorage.getItem('TokenPair') && (requestObj.url !== '/auth' && requestObj.url !== '/auth/refresh')) {

        requestObj.headers.set('Authorization',
            'Bearer ' + retriveLocalStorageData<TokenRefreshModel>('tokenPair').access);
    }

    return requestObj;
})

const userService = {
    saveUser: async (data:UserModel):Promise<boolean> => {
       let response = await axiosInstance.post<UserResponseModel>('/users', data);
       return !!response.data.id || false;
    }
}

const authService = {
    authenticate: async (data:TokenObtainPairModel):Promise<void> => {
        let response = await axiosInstance.post<TokenRefreshModel>('/auth', data);
        localStorage.setItem('TokenPair', JSON.stringify(response.data));
    },
    refresh: async () => {
        const refreshToken = retriveLocalStorageData<TokenRefreshModel>('TokenPair').refresh;
        const response = await axiosInstance.post<TokenRefreshModel>('/auth/refresh',
            {refresh: refreshToken});
        localStorage.setItem('TokenPair', JSON.stringify(response.data));
    }
}

const carService = {
    getCars: async (page:string='1'):Promise<CarPaginatedModel> => {
        const response = await axiosInstance.get<CarPaginatedModel>('/cars',{params:page});
        return response.data;
    }
}

export {
    userService,
    authService,
    carService
}