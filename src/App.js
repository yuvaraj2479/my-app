import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './Screen/login';
import Task from './Screen/task';


class App extends Component {
  render() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route exact path="/task" element={<Task/>}/>
      </Routes>
    </Router>
  );
  }
}
export default App;
