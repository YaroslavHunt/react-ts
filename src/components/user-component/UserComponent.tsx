import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser,
    getPosts: (id: number) => void
}

const UserComponent: FC<IProps> = ({user, getPosts}) => {
    return (
        <div>
            {user.id} : {user.firstName} {user.lastName} {', age: ' + user.age} - <button onClick={() => {
                getPosts(user.id);
        }}>Show posts</button>
        </div>
    );
};

export default UserComponent;