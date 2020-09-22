import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

const DeletePostButton = () => {

    const [state, setState] = useState({
        postId: ''
    });

    const handleSubmit = event => {
        event.preventDefault();
        axios.delete(`http://localhost:8080/api/getUserPostHistory/${state.username}`)
            .then(res => {
                setState({
                    searchedUserResults: res.data.posts.reverse()   // reversed to always render newest posts first
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <input className="submit-search" type="submit" onClick={handleSubmit} />
    )
}

export default DeletePostButton;