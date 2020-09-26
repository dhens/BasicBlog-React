import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import DeletePostButton from '../DeletePostButton'

const UserPostHistory = () => {
    // Declare the 2 values of state to be tracked
    const [state, setState] = useState({
        username: '',
        searchedUserResults: [{}]
    });

    // When our input form's value changes due to 
    // user input, we want to update that change in the state

    // Note: 
    // This is an agnostic handleChange function
    // As long as our html form has a name attribute, it can 
    // update the value of that form by looking at that name attribute
    const handleChange = event => {
        const submittedFormValue = event.target.value;
        setState({
            ...state,
            [event.target.name]: submittedFormValue
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.get(`http://localhost:8080/api/getUserPostHistory/${state.username}`)
            .then(res => {
                setState({
                    searchedUserResults: res.data.posts.reverse()   // reversed to always render newest posts first
                });
            })
            .catch(err => console.log(err));
    }

    // const deletePost = event => {
    //     event.preventDefault();
    //     axios.delete(`localhost:8080/api/deletePost/:id`)
    // }

    return (
        <div className="container">
            <form>
                <input className="search-user" type="text" placeholder="username" onChange={handleChange} value={state.username} name="username" maxLength="16" required />
                <input className="submit-search" type="submit" onClick={handleSubmit} />
            </form>

            {state.searchedUserResults.map((post, index) => (
                <ul key={index} className="search-results">
                    <li className="post-title">
                        <div className="title-timestamp">
                            <h1>{post.title}</h1>
                            <p>{post.timestamp}</p>
                            <p id="post-id">{post.post_id}</p>
                        </div>
                    </li>
                    <li className="post-body">
                        <h5>{post.body}</h5>
                    </li>
                    <li className="post-username">
                        <h6>Author: {post.username}</h6>
                    </li>
                    <DeletePostButton
                        postId={post.post_id}
                    />



                </ul>
            ))}
        </div>
    )
}
export default UserPostHistory;