import React from "react";
import Button from "../Elements/Button/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "../Elements/Button/Button.css";

const Navbar = () => {
  const handleAllClick = (): void => {
    localStorage.setItem("active", "false");
  };

  const handleKinoClick = (): void => {
    localStorage.setItem("active", "true");
  };

  const handleConcertsClick = (): void => {
    localStorage.setItem("active", "true");
  };

  const handleTheaterClick = (): void => {
    localStorage.setItem("active", "true");
  };

  return (
    <div className="navbar">
      <Link onClick={handleAllClick} to="./">
        <Button buttonTitle={"Все"} />
      </Link>
      <Link onClick={handleKinoClick} to="./kino">
        <Button buttonTitle={"Кино"} />
      </Link>
      <Link onClick={handleConcertsClick} to="./concerts">
        <Button buttonTitle={"Концерты"} />
      </Link>
      <Link onClick={handleTheaterClick} to="./theater">
        <Button buttonTitle={"Театр"} />
      </Link>
    </div>
  );
};

export default Navbar;
