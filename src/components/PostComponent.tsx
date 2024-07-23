import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    post: IPost;
}

const PostComponent:FC<IProps> = ({post}) => {


    return (
        <div>
            {post.title} {post.userId}
            <hr/>
            {post.body}
        </div>
    );
};

export default PostComponent;