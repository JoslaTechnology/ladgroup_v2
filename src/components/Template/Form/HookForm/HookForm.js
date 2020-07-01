import React from 'react';
import { UseForm } from './UseForm'
import { updateSchemaData } from '../../../../store/actions/actions';

import generalCss from '../../../general.module.css';
import './hookform.css';


export const HookForm = (callback) => {
    const { validationErrMsg, formInput, redBorder, btnControl, btnLoadIcon } = generalCss;

    // use to initialiaze callback when submit button is clicked
    const handleFormResult = () => {
        callback();
    };

    const renderHInput = (placeholder = "", inputClass, labelClass = '', label = "", type = "text", name, inputs, errors, addElement = '',
        showError, errorMessage = errors[name]) => {
        return (
            <div>

                {label.length > 0 && <label className={labelClass}>{label} </label>}
                {addElement}
                <input className={`form-control ${inputClass} ${formInput}`}
                    type={type} placeholder={`${placeholder}`}
                    name={name}
                    value={inputs[name] || ''}
                    onChange={handleInputChange}
                />
                {showError && errors[name] && <div className={`${validationErrMsg}`}>{errorMessage}</div>}
            </div>
        )
    }

    const renderHInputP = (placeholder = "", inputClass = "", labelClass = '', label = "", type, name, inputs, errors, addElement = '',
        showError, errorMessage = errors[name]) => {


        return (
            <div>

                {label.length > 0 && <label className={labelClass}>{label} </label>}
                {addElement}
                <input className={`form-control ${inputClass} ${formInput}`}
                    type={type} placeholder={` ${placeholder}`}
                    name={name}
                    value={inputs[name] || ''}
                    onChange={handleInputChange}
                />
                {showError && errors[name] && <div className={` ${validationErrMsg}`}>{errorMessage}</div>}
            </div>
        )
    }


    const renderTextarea = (name, label, placeholder, rows = 4, cols = 30, formGroupClass = "", classType = '', inputs, errors, addElement = '',
        labelClass, showError, errorMessage = errors[name]) => {
        console.log("INPUTS.NAME", inputs.name, name);

        return (
            <div className={`${formGroupClass} form-group`}>
                <label className={labelClass} htmlFor={name}>{label}  {addElement}</label>
                <textarea className={`${formInput} ${classType} `} placeholder={placeholder} name={name} value={inputs[name] || ''}
                    onChange={handleInputChange} rows={rows} cols={cols} />
                {showError && errors[name] && <div className={` ${validationErrMsg}`}>{errorMessage}</div>}
            </div>

        )
    }

    /// file upload
    const renderJobUploadFile = (name, label, placeholder, type = "file", addElement = "",
        inputClass = "custom-file-input", acceptType, labelClass, inputSize = "col-md-10", inputs, errors,
        errorMessage = errors[name], showLabel = false) => {
        return (
            <div className={inputSize}>
                <div className="custom-file">
                    <input accept={acceptType} type={type} className={`form-control ${inputClass}`} name={name} id="customFile" value={inputs[name] || ''}
                        onChange={handleInputChange} />
                    {showLabel && <label className="custom-file-label" htmlFor="inputGroupFile01">{label}</label>}
                    {errors[name] && <div className="alert alert-danger">{errorMessage}</div>}
                    {/* {showError && errors[name] && <div className={` ${validationErrMsg}`}>{errorMessage}</div>} */}
                </div>
            </div>

        )
    }

    const renderMultipleUploadFile = (name, label, placeholder, type = "file", addElement = "",
        inputClass = "custom-file-input", acceptType, labelClass, inputSize = "col-md-10", inputs, errors,
        errorMessage = errors[name], showLabel = false, parentClass = '', idParent = '') => {
        return (
            <div className={inputSize}>
                <span>{label}</span> {addElement}
                <div id={idParent} className={`custom-file  ${parentClass}`}>

                    <input accept={acceptType} type={type} className={`form-control ${inputClass}`} name={name} id="customFile" value={inputs[name] || ''}
                        onChange={handleInputChange} multiple />
                    {showLabel && <label className="custom-file-label" htmlFor="inputGroupFile01">{placeholder}</label>}
                    {errors[name] && <div className="alert alert-danger">{errorMessage}</div>}
                    {/* {showError && errors[name] && <div className={` ${validationErrMsg}`}>{errorMessage}</div>} */}
                </div>
            </div>

        )
    }

    const renderHInputDisabled = (placeholder = "", inputClass = "", labelClass = '', label = "", type = "text", name, inputs,
        errors, addElement = '', errorMessage = errors[name]) => {
        return (
            <div>
                {label.length > 0 && <label className={labelClass}>{label} </label>}
                {addElement}
                <input className={`form-control ${inputClass}`}
                    type={type} placeholder={` ${placeholder}`}
                    name={name} disabled
                    value={inputs[name] || ''}
                    onChange={handleInputChange}
                />
                {errors[name] && <div className="alert alert-danger">{errorMessage}</div>}
                {/* {showError && errors[name] && <div className={` ${validationErrMsg}`}>{errorMessage}</div>} */}
            </div>
        )
    }

    const renderHInputRequired = (inputClass = "", placeholder = "", labelClass = '', label = "",
        type = "text", name, inputs, errors, errorMessage = errors[name]) => {

        return (
            <div>
                <label className={labelClass}>{label}</label>
                <input required className={`form-control ${inputClass}`} placeholder={` ${placeholder}`}
                    type={type} name={name} value={inputs[name] || ''} onChange={handleInputChange}
                />
                {(errors[name] !== null) && <div className="alert alert-danger">{errorMessage}</div>}
            </div>
        )
    }


    const renderDropdownH = (name, label, arrayList, inputs, errors, labelClass, addElement = '',
        dropTitle = '', selectClass, errorMessage = errors[name]) => {
        // const { errors } = this.state;
        return (
            <div className="form-group">
                <label className={labelClass} htmlFor={name}>{label} {addElement}</label>
                <select defaultValue={'DEFAULT'} className={`form-control  ${selectClass}`} onChange={handleInputChange} id={name} name={name} >
                    <option value="DEFAULT" disabled>{dropTitle}</option>
                    {arrayList.map((data, key) => (
                        <option value={data.title.toLowerCase()} key={key}>{data.title}</option>
                    ))}
                </select>
                {(errors[name] !== null && inputs.name === '') && <div className={` ${validationErrMsg}`}>{errorMessage}</div>}
            </div>
        )
    }

    const renderButtonH = (addIcon = "", label, classType = "", disableSubmitBtn = false, buttonType = "button", styleType = {}) => {
        return (
            <button disabled={validate() || disableSubmitBtn} type={buttonType}
                className={`${classType} `} style={styleType}>
                <span className="d-flex">
                    <span className="mr-2"><i className={addIcon}></i></span>

                    {disableSubmitBtn === true ? <span className={` ml-2 ${btnLoadIcon}`}><i className="spinner-border"></i></span> : <span>{label} </span>}
                </span>
            </button>

        );
    }


    // 2nd form start
    const renderHInputJob = (placeholder = "", inputClass = "", labelClass = '', label = "", type = "text", name, inputJob,
        errorsJob, errorMessage = errors[name]) => {
        return (
            <React.Fragment>
                <label className={labelClass}>{label} </label>
                <input className={`form-control ${inputClass}`}
                    type={type} placeholder={` ${placeholder}`}
                    name={name}
                    value={inputJob[name] || ''}
                    onChange={handleInputChangeJob}
                />
                {errorsJob[name] && <div className="alert alert-danger">{errorMessage}</div>}
            </React.Fragment>
        )
    }

    const renderButtonHJob = (addIcon = "", label, classType = "", disableSubmitBtn = false, buttonType = "button", styleType = {}) => {
        return (
            <button disabled={validateJob() || disableSubmitBtn} type={buttonType}
                className={`${classType} ${disabledButtonH}`} style={styleType}>
                <span className="d-flex">
                    <span className="mr-2">{<i className={addIcon}></i>}</span>
                    <span>{label} </span>
                    {disableSubmitBtn && <span className={` ml-2 ${btnControl} ${btnLoadIcon}`}><i className="border-spinner-border"></i></span>}
                </span>
            </button>
        );
    }

    // 2nd form end

    const { inputs, handleInputChange, handleSubmit, errors, validate, disabledButtonH, setInputs,
        validateJob, handleInputChangeJob, validateCheck, validateJobCheck,
        handleSubmitJob, inputJob, errorsJob, setInputJob } = UseForm(handleFormResult);

    return {
        renderHInputRequired, renderHInput, renderHInputP, renderHInputDisabled, handleFormResult,
        handleSubmit, inputs, errors, validateCheck, validateJobCheck, renderButtonH, renderDropdownH, setInputs,
        handleSubmitJob, inputJob, errorsJob, renderHInputJob, renderButtonHJob, setInputJob,
        renderJobUploadFile, renderMultipleUploadFile, renderTextarea

    };
};