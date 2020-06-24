import React from "react";
import "./App.css";
import {Element} from 'react-scroll';
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Waitlist from "./components/Waitlist";
import GifSection from "./components/GifSection";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Access from "./components/Access";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Element id='home' name='home'>
            <Home />
          </Element>
        <Element id='waitlist' name='waitlist'>
            <Waitlist />
        </Element>
        <Access/>
        <GifSection />
        <Cards />
        <MobileApp />
        <Footer/>
      </React.Fragment>
    </Router>
  );
}

export default App;
