import React from "react";
import { btn, btn_lg} from "./style.module.css";

const Button = ({ type = "button", label, ...props }) => {


  return (
    <span className={props.large ? `${btn} ${btn_lg}` : `${btn}`}>
      <button type={type} {...props}>
        {label}
      </button>
    </span>
  );
};

export default Button;
