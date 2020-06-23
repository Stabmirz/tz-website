import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Waitlist from './components/Waitlist';
import GifSection from './components/GifSection';
import MobileApp from './components/MobileApp';
import Cards from './components/Cards';

function App() {
  return (
    <Router>
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/#waitlist" component={Waitlist} />
          </Switch>
          <Waitlist/>
          <GifSection/>
          <Cards/>
          <MobileApp/>
        </React.Fragment>
    </Router>
  );
}

export default App;

