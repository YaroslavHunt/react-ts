import React from 'react';
import {useForm} from "react-hook-form";
import {UserModel} from "../models/UserModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {authService} from "../services/api.service";

const AuthFormComponent = () => {

    let {
        handleSubmit,
        register
    } = useForm<TokenObtainPairModel>({
        defaultValues:{
            username:'AbUser333',
            password:'8520456$SSaaa'
        }
    });

    let authenticate = (data:TokenObtainPairModel) => {
        authService.authenticate(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>auth</button>
            </form>

        </div>
    );
};

export default AuthFormComponent;