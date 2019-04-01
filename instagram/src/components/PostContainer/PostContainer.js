import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            <div className="post-list">
                {props.posts.map(p => (
                    <Post post={p} key={p.imageUrl} />
                ))}
            </div>
        </div>
    );
}

export default PostContainer;