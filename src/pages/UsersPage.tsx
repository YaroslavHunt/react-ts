import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/api.service";
import {IUser} from "../models/IUser";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {

    const [users, setUsers] = useState<IUser[]>([])
    
    useEffect(() => {
        getUsers().then(value=> setUsers(value))
    }, []);

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;