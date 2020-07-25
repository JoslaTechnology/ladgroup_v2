import React, { useState } from "react";
import { useField } from "formik";
import Form from "react-bootstrap/Form";
import { has_error, input, labeltext } from "components/Input/style.module.css";

const FileInput = ({ accept, label, setFieldValue, ...props }) => {
  const [field, meta] = useField(props);
  const [fileName, setFileName] = useState(null);

  const defaultFormats =
    ".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.files.length)
    let reader = new FileReader();
    let file = e.target.files;
    if (file) {
      // reader.onloadend = () => setFileName(file.name);
      reader.readAsDataURL(file);
      setFieldValue(props.name, file);
    }
  };

  return (
    <div className={meta.touched && meta.error ? `${has_error} ${input}` : `${input}`}>
      <div>
        <label className={`text-dark ${labeltext}`}>{label}</label>
        <Form.File
          id={`custom-file${props.name}`}
          name={props.name}
          onChange={handleChange}
          accept={accept ?? defaultFormats}
          label={fileName ?? props.placeholder}
          multiple={props.multiple?? false}
          custom
        />
        {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

export default FileInput;
