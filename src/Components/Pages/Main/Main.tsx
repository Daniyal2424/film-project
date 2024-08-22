import React from "react";
import "../../../index.css";
import "./Main.css";
import Kino from "../Kino/Kino";
import Concerts from "../Concerts/Concerts";
import Theater from "../Theater/Theater";
const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="kino">
          <div className="kino-title">
            <h1>Кино</h1>
          </div>
          <div className="kino-cards">
            <Kino />
          </div>
        </div>
        <div className="concerts">
          <div className="concerts-title">
            <h1>Концерты</h1>
          </div>
          <div className="concerts-cards">
            <Concerts />
          </div>
        </div>
        <div className="theater">
          <div className="theater-title">
            <h1>Театр</h1>
          </div>
          <div className="theater-cards">
            <Theater />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
