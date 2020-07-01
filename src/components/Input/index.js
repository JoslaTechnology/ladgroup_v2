import React from "react";
import styles from "components/Input/style.module.css";
import { useField } from "formik";

const { has_error, input, labeltext, labeltexL, selected } = styles;
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

export const TextInputTop = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={meta.touched && meta.error ? `${has_error} ${input}` : `${input}`}>
      <div className="row py-3">
        <div className="">
          <label className={`text-dark ${labeltext}`}>{label}</label> <span className="text-danger pl-2">*</span>
          <input type={type} {...field} {...props} />
          {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
        </div>
      </div>
    </div>
  );
};

export const SelectLabelTop = ({ label, addElement = "", arrayList, dropTitle, ...props }) => {
  const [field, meta, handleChange] = useField(props);
  // console.log("field", field.value, "meta", meta, "name", name);
  console.log("field.makeUse", field.name, "value", field.value);
  console.log("{field[name]}", field.name);

  return (
    <div className={meta.touched && meta.error ? `${has_error} ${input}` : `${input}`}>
      {/* <div className="row py-3">
        <div className="">
        <label className={`text-dark ${labeltextL}`}>{label}</label> <span className="text-danger pl-2">*</span>
          <input type={type} {...field} {...props} />
          {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
        </div>
      </div> */}

      <div className="form-group">
        <label className={`text-dark ${labeltext}`} htmlFor={field.name}>{label} {addElement}</label> <span className="text-danger pl-2">*</span>
        <select id={field.name} name={field.name}
          defaultValue={''}
          component="select" className={`form-control  `}  >
          <option value='' disabled >{dropTitle}</option>
          <option value="lara" >lara</option>
          {arrayList.map((data, key) => (
            <option value={data.title} key={key}>{data.title}</option>
          ))}
        </select>
        {/* {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null} */}
      </div>
    </div>
  );
};

export const SelectDisco = ({ active, text, onClick }) => {
  return (
    <span onClick={onClick} className={active ? ` ${selected} col-md-3 py-3` : `col-md-3 py-3`}>
      {<p className="cursor" tabIndex="0">{text}</p>}
    </span>
  );
};
