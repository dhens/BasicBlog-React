import React, { useState } from 'react';

const ComposeForm = props => {

    const [state, setState] = useState({
        title: '',
        body: ''
    });

    const handleChange = event => {
        const formValue = event.target.value;
        setState({
            ...state,
            [event.target.name]: formValue
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Submitting ${state.title} and ${state.body}`);
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
            <input onClick={handleSubmit} type="submit" name="submit" value="Submit"/>
        </form>
    )
}

export default ComposeForm;