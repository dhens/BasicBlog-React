import React from 'react';
import Navbar from '../../components/Navbar';
import UserPostHistory from '../../components/UserPostHistory';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <h1>profile</h1>
            <UserPostHistory />
        </div>
    )
}

export default Profile;