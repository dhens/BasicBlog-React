import React from 'react';
import PostTitle from './components/PostTitle';
import './App.css';
import PostBody from './components/PostBody';
import SubmitButton from './components/SubmitButton';
import ComposePostWrapper from './components/ComposeForm';

function App() {
  return (
    <div className="App">
      <ComposePostWrapper>
        <PostTitle/>
        <PostBody/>
        <SubmitButton/>
      </ComposePostWrapper>
    </div>
  );
} 

export default App;
