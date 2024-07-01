import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {IPost} from "../../models/IPost";
import {getAllUsers, getPostsOfUserByID} from "../../services/api.service";
import PostsComponent from "../posts-component/PostsComponent";
import UserComponent from "../user-component/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllUsers().then((value: IUser[]) => {
            setUsers(value);
        });
    }, []);

    const getPosts = (id:number) => {
        getPostsOfUserByID(id).then(posts => setPosts(posts));
    }

    return (
        <div>
            <div>
                {
                    users.map((user) =>
                        <UserComponent
                            key={user.id}
                            user={user}
                            getPosts={getPosts}
                        />)
                }
            </div>
            <hr/>

            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;

