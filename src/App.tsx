import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./models/IUser";
import IPost from "./models/IPost";
import {getUsers} from "./services/users.api.service";
import UserComponent from "./components/users/UserComponent";
import {getPostsOfUser} from "./services/posts.api.service";
import PostsComponent from "./components/posts/PostsComponent";


const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [userId, setUserId] = useState<number>(0)

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value.data);
            });
        return () => {
            console.log('end');
        }
    }, []);

    useEffect(() => {
        if (userId !== 0) {
            getPostsOfUser(userId).then(value => setPosts(value.data));
        }
    }, [userId]);


    const clickHandler = (id: number) => {
        setUserId(id);
    }


    return (
        <>
            {
                users
                    .map(({username, name, id, email}, index) =>
                        <UserComponent
                            key={index}
                            id={id}
                            name={name}
                            email={email}
                            username={username}
                            clickHandler={clickHandler}

                        />
                    )
            }

            <div>
                <PostsComponent posts={posts}/>
            </div>
        </>
    );
}

export default App;
