import React from "react";
import "./main.css";
import { AiFillPushpin } from "react-icons/ai";
import { AiOutlineQq } from "react-icons/ai";

function Info() {
  return (
    
    <section id="info">
      <div className="container">
        <div className="cards">
          <h1>
            Our Services
            <AiFillPushpin />
          </h1>
          <div className="box-1">
            <h3>
              <AiOutlineQq />
            </h3>
            <h2>Equipment installation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio optio hic autem sequi placeat, consequuntur tempora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
