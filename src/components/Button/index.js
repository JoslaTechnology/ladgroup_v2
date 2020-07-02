import React from 'react'
import { btn } from "./style.module.css";

const Button = ({ type = "button", label, ...props }) => {
  return (
    <span
      className={btn}
    >
      <button type={type} {...props}>
        <b> {label}</b>
      </button>
    </span>
  );
};

export default Button;