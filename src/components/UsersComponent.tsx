import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import UserComponent from "./UserComponent";

interface IProps {
    users:IUser[];
}

const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {
                users.map((user: IUser) => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    );
};

export default UsersComponent;