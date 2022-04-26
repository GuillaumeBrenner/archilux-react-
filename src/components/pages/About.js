import React from "react";
import "../../App.css";
import "./About.css";
import Footer from "../Footer";

export default function About() {
  return (
    <>
      <section>
        <h1 className="section-title">HISTORY</h1>
        <div className="about-container">
          <div className="col-left">
            <div className="about-img">
              {/* <img src="./img/img-2.png" alt="img" /> */}
            </div>
          </div>
          <div className="col-right">
            {/* <h1 className="about-title">HISTOIRE</h1> */}
            <h2>Front End Developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="section-title">TEAM</h1>
        <div className="about-container">
          <div className="col-left">
            <div className="about-img">
              {/* <img src="./img/img-2.png" alt="img" /> */}
            </div>
          </div>
          <div className="col-right">
            <h1 className="about-title">HOUNKPATI</h1>
            <h2>Front End Developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
        </div>

        <div className="about-container">
          <div className="col-left">
            <div className="about-img">
              {/* <img src="./img/img-2.png" alt="img" /> */}
            </div>
          </div>
          <div className="col-right">
            <h1 className="about-title">MENSANH</h1>
            <h2>Front End Developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
  // <h1 classNameName='about'>LIKE & SUBSCRIBE</h1>;
}
