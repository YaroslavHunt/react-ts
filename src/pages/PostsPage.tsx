import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostsOfUser} from "../services/api.service";
import {IPost} from "../models/IPost";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {

    let{id} = useParams();

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if(id){
            getPostsOfUser(id).then(value => setPosts(value));
        }
    }, []);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;