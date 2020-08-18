import React from 'react';

const PostBody = () => {
    return (
        <div className="post-body">
            <label htmlFor="body">Content</label>
            <textarea
                id="body" 
                required="required"
            />
        </div>
    )
}

export default PostBody;