import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./Loader";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 1500, easing: "ease-in-out" });
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="notification Toastify__toast-container">
        <ToastContainer />
      </div>
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
