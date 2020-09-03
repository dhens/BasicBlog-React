import React, { useState } from 'react';
import axios from 'axios';

const UserPostHistory = () => {
    // Declare the 3 values of state to be tracked:
    // the title of the post, the body / content of the post, and the user posting it
    const [state, setState] = useState({
        searchedUsername: '',
        searchedUserResults: {}
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

    const handleSubmit = () => {
        axios.get(`localhost:8080/api/getUserPostHistory/${state.searchedUsername}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>User Post History:</h2>
            <form>
                <input type="text" onChange={handleChange} value={state.searchedUsername} maxLength="16" required></input>
                <input type="submit" onClick={handleSubmit}>Search</input>
            </form>
        </div>
    )
}
export default UserPostHistory;