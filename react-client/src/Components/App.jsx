import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory, Switch } from 'react-router';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Footer from './Footer';
import ClinicService from './ClinicService'; 
import About from './AboutPage';
class App extends Component {
  render() {
    return (
      <Router> 
        <NavBar />
        <Route name="home" exact path="/" component={HomePage} />
        <Footer />
      </Router>
    )
  }
}
export default App;