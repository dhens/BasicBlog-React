import React from 'react';
import Navbar from '../../components/Navbar';
import UserPostHistory from '../../components/UserPostHistory';
import UserPostHistoryResults from '../../components/UserPostHistoryResults';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <h1>profile</h1>
            <UserPostHistory />
            <UserPostHistoryResults />
        </div>
    )
}

export default Profile;