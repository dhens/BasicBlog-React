import React, { useState } from 'react';
import './index.css';

const ComposeForm = () => {

    // Declare the 3 values of state to be tracked:
    // the title of the post, the body / content of the post, and the user posting it
    const [state, setState] = useState({
        title: '',
        body: '',
        username: ''
    });

    // When our title or body input forms value change due to 
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
            // Ex: title: 'Why Plants are Living Beings'
        });
    }

    // Send blog post data to backend for processing
    const handleSubmit = event => {
        const data = {
            title: state.title,
            body: state.body,
            username: state.username,
            timestamp: postTimestamp(),
            post_id: getTime()
        }
        console.log(`Data submitted: ${JSON.stringify(data)}`);
        event.preventDefault();
        fetch(
            `http://localhost:8080/api/postblog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(`Server accepted submitted data!`);
            })
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
    }

    const getTime = () => {
        const date = new Date();
        const milliseconds_id = date.getTime();
        return milliseconds_id;
    }

    const postTimestamp = () => {
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = time + ' ' + date;
        return dateTime;
    }

    return (
        <div className="container">
            <form>
                <label>
                    Title
                <input onChange={handleChange} value={state.title} type="text" name="title" minLength="1" maxLength="48" required/>
                </label>
                <label>
                    Body
                <textarea onChange={handleChange} value={state.body} name="body" required />
                </label>
                <label>
                    Username
                <textarea onChange={handleChange} value={state.username} name="username" required />
                </label>
                <input onClick={handleSubmit} type="submit" name="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ComposeForm;