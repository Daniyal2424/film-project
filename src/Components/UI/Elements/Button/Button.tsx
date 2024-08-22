import React from "react";
import "./Button.css";

interface ButtonProps {
  buttonTitle: string;
}

const Button: React.FC<ButtonProps> = ({ buttonTitle }) => {
  return <button className="button">{buttonTitle}</button>;
};

export default Button;
