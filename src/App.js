import React from 'react';
import './App.css';
import ComposePostWrapper from './components/ComposeForm';
import ComposeForm from './components/ComposeForm';

function App() {
  return (
    <div className="App">
      <ComposePostWrapper>
        <ComposeForm/>
      </ComposePostWrapper>
    </div>
  );
} 

export default App;
