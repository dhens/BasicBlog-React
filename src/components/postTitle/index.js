import React from 'react';

const PostTitle = () => {
    return (
        <div className="post-title">
            <label htmlFor="title">Post Title</label>
            <input type="text" 
                id="title" 
                required="required"
            />
        </div>
    )
}

export default PostTitle;