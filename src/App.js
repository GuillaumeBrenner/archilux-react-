import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

function App() {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 2000, easing: "ease" });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
