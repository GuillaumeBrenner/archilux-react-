import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best projects
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <Button >Subscribe</Button>
            </form>
          </div>
        </section>
      </div>

      <div className="footer">
        <div className="contain" data-aos="fade-right" data-aos-duration="2000">
          <div className="row">
            <div className="footer-col">
              <h2
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Link to="/" className="social-logo">
                  ARCHILUX
                </Link>
              </h2>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/about">about us</Link>
                </li>
                <li>
                  <Link to="/services">our services</Link>
                </li>
                <li>
                  <Link to="/projects">our projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Address</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Lomé,Hedzranawoe
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i> +228 92313341
                </li>
                <li>
                  <i className="fas fa-envelope"></i> hounkpatii@gmail.com
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
