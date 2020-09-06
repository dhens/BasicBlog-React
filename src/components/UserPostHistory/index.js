import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

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
                <input type="text" onChange={handleChange} value={state.username} name="username" maxLength="16" required></input>
                <input type="submit" onClick={handleSubmit} />
            </form>

            {state.searchedUserResults.map((post, index) => (
                <ul key={index} className="search-results">
                    <button className="delete-post">Delete</button>
                    <li className="post-title">
                        <div className="title-timestamp">
                            <h4>{post.title} {post.timestamp} {post.post_id}</h4>
                        </div>
                    </li>
                    <li className="post-body">
                        <h5>{post.body}</h5>
                    </li>
                    <li className="post-username">
                        <h6>Author: {post.username}</h6>
                    </li>
                </ul>

            ))}

        </div>
    )
}
export default UserPostHistory;