import React from "react";
import "./index.css"
import img from "../../assets/images/engineers_cover.jpg"

function HomePage() {
  return (
    <section id="home">
      <div className="container">
        <div className="boxes">
          <div className="left">
            <h1>
              ELECTRICAL <br />
              SERVICE <br />
              PROVIDERS
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
             <br /> deserunt modi odit minus <br /> quam asperiores, <br /> eum cupiditate
              voluptate labore voluptatem <br />
              voluptas in cumque ut quis delectus,
              nobis similique ex!
            </p>
            <br />
            <button className="contact">Contact Us</button>
          </div>
          <div className="right">
            <img className="img" src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
