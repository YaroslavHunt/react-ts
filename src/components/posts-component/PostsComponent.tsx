import {FC} from "react";
import {IPost} from "../../models/IPost";

interface IProps {
    posts: IPost[];
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(value => <div key={value.id}>
                    <h6>{'Post id: ' + value.id}</h6>
                    <p>{value.title}</p>
                    <p>{value.body}</p>
                </div>)
            }
        </div>
    );
}

export default PostsComponent;