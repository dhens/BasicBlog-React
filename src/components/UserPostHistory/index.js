import React, { useState } from 'react';
import axios from 'axios';

const UserPostHistory = () => {
    const [userPosts, setUserPosts] = useState({});

    const getUserPostHistory = (username) => {
        axios.get('localhost:8080/api/getUserPost/:id')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>User Post History:</h2>
            <form>
                <input type="text" maxLength="16"></input>
                <input type="submit">Search</input>
            </form>
        </div>
    )
}
export default UserPostHistory;