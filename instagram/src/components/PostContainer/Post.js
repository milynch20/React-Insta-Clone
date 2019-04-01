import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post-border">
            <PostHeader 
                thumbnailUrl={props.post.thumbnailUrl}
                username={props.post.username} />
            <div className="post-img-wrapper">
                <img className="post-img" 
                src={props.post.imageUrl} 
                alt="IG Post" />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default Post;