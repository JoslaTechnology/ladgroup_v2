import React from "react";
import { modal_bg, modal, modal_close } from "./style.module.css";
import { IoIosClose } from "react-icons/io";

const Modal = ({ close, children, color="#0d6797" }) => {

  return (
    <div className={modal_bg}>
      <div className={modal}>
        <span className={modal_close} onClick={close}>
          <IoIosClose  color={color} />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
