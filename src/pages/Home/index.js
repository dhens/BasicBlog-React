import React from 'react';
import ComposePostWrapper from '../../components/ComposeForm';
import ComposeForm from '../../components/ComposeForm';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <ComposePostWrapper>
                <ComposeForm />
            </ComposePostWrapper>
        </div>
    )
}

export default Home;