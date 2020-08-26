import React, { useState } from 'react';

const ComposeForm = () => {

    // Declare the two values of state to be tracked:
    // the title of the post and the body / content of the post
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
            username: state.username
        }
        console.log(data)
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
                console.log(`Success: ${data}`);
            })
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
    }

    return (
        <form>
            <label>
                Title
                <input onChange={handleChange} value={state.title} type="text" name="title"/>
            </label>
            <label>
                Body
                <textarea onChange={handleChange} value={state.body} name="body"/>
            </label>
            <label>
                Username
                <textarea onChange={handleChange} value={state.username} name="username"/>
            </label>
            <input onClick={handleSubmit} type="submit" name="submit" value="Submit"/>
        </form>
    )
}

export default ComposeForm;