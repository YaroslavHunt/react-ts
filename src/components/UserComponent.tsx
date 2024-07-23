import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser;
}

const UserComponent:FC<IProps> = ({user}) => {

    let navigate = useNavigate();

    return (
        <div>
            {user.id}: {user.firstName} {user.lastName} - <button onClick={() => {
                navigate('/posts/'+user.id.toString());
        }}
        >show posts of user</button>
        </div>
    );
};

export default UserComponent;