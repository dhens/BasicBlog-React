import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const UserPostHistory = () => {
    // Declare the 3 values of state to be tracked:
    // the title of the post, the body / content of the post, and the user posting it
    const [state, setState] = useState({
        username: '',
        searchedUserResults: []
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
                    searchedUserResults: res.data.posts
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form>
                <input type="text" onChange={handleChange} value={state.username} name="username" maxLength="16" required></input>
                <input type="submit" onClick={handleSubmit} />
                {state.searchedUserResults.map((post, index) => (
                    <ul key={index} className="search-results">
                        <li>
                            <h4>{post.title}</h4>
                        </li>
                        <li>
                            <h5>{post.body}</h5>
                        </li>
                        <li>
                            <h6>Author: {post.username}</h6>
                        </li>
                    </ul>

                ))}
            </form>
        </div>
    )
}
export default UserPostHistory;