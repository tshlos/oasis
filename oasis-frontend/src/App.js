import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './containers/Home'
import MainPage from './containers/MainPage'
import ParkContainer from './containers/ParkContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <h1> hello from App </h1>
          {/* <NavBar /> */}
          {/* <Home/> */}
          <ParkContainer />
        </div>
      </Router>
    );
  }
}

export default App;