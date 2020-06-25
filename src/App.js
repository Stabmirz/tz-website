import React from "react";
import "animate.css/animate.min.css";
import "./App.css";
import {Element} from 'react-scroll';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Waitlist from "./components/Waitlist";
import GifSection from "./components/GifSection";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Access from "./components/Access";
import Terms from "./components/TermsOfUse";

const App = () => {
  return (
    <React.Fragment>
      <Router>
      <NavBar />
        <Switch>
            <Route exact path="/tz-website">
              <Home />
              <Waitlist />
              <Access/>
              <GifSection />
              <Cards />
              <MobileApp />
              <Footer/>
            </Route>

            <Route path="/tz-website/terms">
              <Terms/>
            </Route>
        </Switch>
      </Router>
      </React.Fragment>
  );
}

export default App;
