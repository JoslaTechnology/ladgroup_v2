import React from "react";
import styles from "components/Input/style.module.css";
import { useField } from "formik";

const { has_error, input, labeltext, selected, card } = styles;
export const TextInput = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={meta.touched && meta.error ? `${has_error} ${input}` : `${input}`}>
      <div className="row py-3">
        <div className="col-md-3">
          <label className={`text-dark ${labeltext}`}>{label}</label>
        </div>
        <div className="col-md-6">
          <input type={type} {...field} {...props} />
          {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
        </div>
      </div>
    </div>
  );
};

export const SelectDisco = ({ active, text, onClick }) => {
  return (
    <span onClick={onClick} className={active? ` ${selected} col-md-2 py-3` : `col-md-2 py-3`}>
      {<p className="cursor">{text}</p>}
    </span>
  );
};
