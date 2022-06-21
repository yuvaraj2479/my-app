import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './Screen/login';
import Task from './Screen/task';
import Newuser from './Screen/newuser';
//import Taskdata from './Screen/taskdata';


class App extends Component {
  render() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Newuser/>}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/login/task" element={<Task/>}/>
      {/* <Route exact path="/login/taskdata" element={<Taskdata/>}/> */}
      </Routes>
    </Router>
  );
  }
}
export default App;
