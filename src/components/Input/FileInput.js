import React, { useState } from "react";
import { useField } from "formik";
import Form from "react-bootstrap/Form";
import { has_error, input, labeltext } from "components/Input/style.module.css";

const FileInput = ({ accept, label, setFieldValue, ...props }) => {
  const [, meta] = useField(props);

  const [fileName, setFileName] = useState(null);

  const defaultFormats =
    ".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  const handleChange = (e) => {
    e.preventDefault();

    let file = e.target.files[0];

    let reader = new FileReader();
    if (file) {
      reader.onloadend = () => setFileName(file.name);
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
          multiple={props.multiple ?? false}
          custom
          className="form-upload"
        />
        {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

export default FileInput;


    // const fileList = e.target.files;
    // if (fileList.length > 1) {
    //   let values = [];
    //   for (let i = 0; i < fileList.length; i++) {
    //     (function (currentFile) {
    //       let reader = new FileReader();
    //       reader.readAsDataURL(currentFile);
    //       reader.onloadend = () => setFileName(currentFile.name);
    //       values.push(currentFile);
    //     })(fileList[i]);
    //     // let file = fileList[i];
    //   }
    //   setFieldValue(props.name, [...values]);
    // } else if (fileList.length === 1) {
    //   let reader = new FileReader();

    //   let file = e.target.files[0];
    //   if (file) {
    //     reader.onloadend = () => setFileName(file.name);
    //     reader.readAsDataURL(file);
    //     setFieldValue(props.name, Array.from(file));
    //   }
    // }
