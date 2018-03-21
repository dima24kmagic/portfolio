import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  NavLink
} from 'react-router-dom';
// Styles img logos
import logo from '../logo.svg';
import '../css/bootstrap.min.css'
import '../css/index.css';
//components
import Intro from './Introduction';
import Projects from './Projects';
import About from './About';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container-fluid p-0">
          <div className="video-container px-2 pb-5">
              <nav className="navbar navbar-expand navbar-dark transparent mb-4 p-0 mt-2">
                <div className="container d-flex justify-content-center">
                  <div className="navbar-nav px-3 d-flex text-center justify-content-center">
                    <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/projects">Projects</NavLink>
                    <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                  </div>
                </div>
              </nav>

              <Route exact path="/" component={Intro}/>
              <Route path='/projects' component={Projects} />
              <Route path='/about' component={About} />
          </div>


        </div>
      </HashRouter>
    );
  }
}

export default App;
