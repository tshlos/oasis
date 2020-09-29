import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './containers/Home'
import ParkContainer from './containers/ParkContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div > 
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/rooftop_parks" component={ParkContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;