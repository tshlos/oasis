import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './containers/MainPage'
import Home from './containers/Home'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
       
        <Home/>
      </div>
    );
  }
}

export default App;
