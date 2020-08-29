import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from'../src/pages/Profile';
import Home from '../src/pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
} 

export default App;
