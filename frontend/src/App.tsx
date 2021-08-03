import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
 Redirect
} from 'react-router-dom';
import Approutes from './Approutes';
function App() {
  return (
    <div className="App">   
      <Redirect to="/register" />
    </div>
  );
}

export default App;
