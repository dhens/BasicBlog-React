import React from 'react';
import axios from 'axios';
import './index.css'

const DeletePostButton = (props) => {

    const handleSubmit = event => {
        event.preventDefault();
        alert('deleting post ' + props.postId)
        axios.delete(`http://localhost:8080/api/deletePost/${props.postId}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    return (
        <button className="delete-post" type="submit" onClick={handleSubmit}>Delete Post</button>
    )
}

export default DeletePostButton;