import React from 'react';
import PostTitle from './components/PostTitle';
import './App.css';
import PostBody from './components/PostBody';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div className="App">
      <PostTitle/>
      <PostBody/>
      <SubmitButton/>
    </div>
  );
} 

export default App;
