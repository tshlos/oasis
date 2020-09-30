import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './containers/Home'
import ParkContainer from './containers/ParkContainer'
import Login from './containers/Login'
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div > 
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/rooftop_parks" component={ParkContainer}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} /> 
        </div>
      </Router>
    );
  }
}

export default App;