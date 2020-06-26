// import React from "react";
import React, { Component } from "react";
import "./App.css";
import "./Animation.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Waitlist from "./components/Waitlist";
import GifSection from "./components/GifSection";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Access from "./components/Access";
import Terms from "./components/TermsOfUse";
import $ from "jquery";


class App extends Component {

  componentDidMount() {
    const doAnimations = function () {
      // Calc current offset and get all animatables
      const offset = $(window).scrollTop() + $(window).height(),
        $animatables = $(".animatable");

      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off("scroll", doAnimations);
      }

      // Check all animatables and animate them if necessary
      $animatables.each(function (i) {
        const $animatable = $(this);
        if ($animatable.offset().top + $animatable.height() - 20 < offset) {
          $animatable.removeClass("animatable").addClass("animated");
        }
      });
    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on("scroll", doAnimations);
    $(window).trigger("scroll");
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/tz-website">
              <Home />
              <Waitlist />
              <Access />
              <GifSection />
              <Cards />
              <MobileApp />
              <Footer />
            </Route>

            <Route path="/tz-website/terms">
              <Terms />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
