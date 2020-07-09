import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Joi from 'joi-browser';
import axios from "axios";
import { toast } from "react-toastify";
import { HookForm } from '../Template/Form/HookForm/HookForm';
import { updateSchemaData } from '../../store/actions/index';
import env from "env";
import Modal from 'components/Template/Modal';
import enquiryCss from './enquiry.module.css';
import generalCss from '../general.module.css';

const useList = [{ id: 1, title: 'YES' }, { id: 2, title: 'NO' }]
const qs = require("querystring");

const EnquiryModal = (props) => {
    const { dIcon, dIcon_feedback, formSubmitButton, formInput, centerModalTitle } = generalCss;
    const { bgInput, labeltextL, removeModalPad, bgModal, paddButton } = enquiryCss;
    const dispatch = useDispatch();
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
    const checkData = async () => {
        setDisableSubmitBtn(true);
        const serverData = {
            token: 1234,
            subject: "Customer subscription",
            message: `</html><div>
            <p style="font-size: 1rem;">Full name: ${inputs.fullname}</p>
            <p style="font-size: 1rem;">Email: ${inputs.email}</p>
            <p style="font-size: 1rem;">Contact Number: ${inputs.phone}</p>
            <p style="font-size: 1rem;">Address: ${inputs.address}</p>
            <p style="font-size: 1rem;">Do you make use of our product: ${inputs.makeUse}</p>
            <p style="font-size: 1rem;">Product Name: ${inputs.productName}</p>
            <p style="font-size: 1rem;">Nature of Enquiry: ${inputs.description}</p>
            </div></html>`,
            name: inputs.fullname,
            email: "info@ladgroup.org",
            email2: inputs.email
        };
        axios
            .post(`${env.api_mail}/mail/ladgroup`, qs.stringify(serverData), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(
                (response) => {
                    if (response) {
                        toast.success(`Enquiry sent, ${inputs.fullname}`);
                        setInputs({ fullname: '', email: '', phone: '', address: '', makeUse: '', productName: '', description: '' });
                        setDisableSubmitBtn(false);
                        props.closeModal(false);
                    }
                },
                (error) => {
                    toast.error("Enquiry was not sent");
                    setDisableSubmitBtn(false);
                    console.log(error);
                }
            )
            .catch((error) => {
                // toast.error("Enquiry was not sent");
            });
        // disable the button with disableSubmitBtn
    }

    const schemaH = {
        fullname: Joi.string().required().min(3).label("fullname"),
        email: Joi.string().email({ minDomainSegments: 2 }).regex(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)).required().label("Email"),
        phone: Joi.string().min(11).max(14).required().label("Personal Phone"),
        address: Joi.string().min(4).required(),
        makeUse: Joi.string().label("makeUse"),
        productName: Joi.string().optional().allow('').label("Product Name"),
        description: Joi.string().min(10).required().label("Description"),
    }

    const { renderHInput, renderTextarea, renderHInputDisabled, handleSubmit, inputs, errors, renderButtonH, renderDropdownH,
        validateCheck, validateJobCheck, setInputs, renderJobUploadFile, useSignUpForm } = HookForm(checkData);

    useEffect(() => {
        dispatch(updateSchemaData({}));
        dispatch(updateSchemaData(schemaH));
        setInputs({ fullname: '', email: '', phone: '', address: '', makeUse: '', productName: '', description: '' });
        return () => {

        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<Fragment>
        <Modal showModal={props.showModal} handleClose={() => props.closeModal(false)}>
            <div className="modal-content">
                <div className={`modal-header ${removeModalPad}`}>
                    <div className={`w-100 ${bgModal} d-flex`} style={{ position: 'relative' }}>
                        <div className="float-right  w-100" style={{ position: 'absolute', top: '15px' }}>
                            {/* image here */}
                            <button type="button" style={{ borderRadius: '50%' }} className="close bg-white mr-2  " data-dismiss="modal">
                                <span className="h4" onClick={() => props.closeModal(false)}><b>X</b></span>
                            </button>
                        </div>
                        <div className="clearfix"></div>
                        <div className={centerModalTitle}>
                            <div className="text-center">
                                <button disabled className={`bg-white ${paddButton}`} >General Enquiry</button>
                            </div>
                        </div>

                    </div>
                    <div className="clearfix"></div>

                </div>
                <div className="modal-body ">
                    <div className="container">




                        <div className="">
                            <div className="container" id="formCareer">

                                <div className="py-2">
                                    <span className="lightText h5 ">Kindly note that all input fields marked * are compulsory</span>
                                </div>

                                <form className="mx-3" onSubmit={handleSubmit}>
                                    <div className="py-5">
                                        {renderHInput('Full name', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'fullname' ? 'border border-danger' : ''}`, labeltextL,
                                            'Enter your full name', 'text', 'fullname', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'full name required')}
                                    </div>

                                    {renderHInput('Enter your email address', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'email' ? 'border border-danger' : ''}`, labeltextL, ' Enter your email address', 'text', 'email', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'valid email address required')}

                                    <div className="py-5">
                                        {renderHInput('Phone number', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'phone' ? 'border border-danger' : ''}`, labeltextL, ' Enter your phone number', 'text', 'phone', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'valid mobile number is required')}
                                    </div>

                                    {renderHInput('Contact address', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'address' ? 'border border-danger' : ''}`, labeltextL, 'Enter your contact address', 'text', 'address', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'address is required')}

                                    <div className="py-5">
                                        {renderDropdownH('makeUse', "Select yes/no", useList, inputs, errors, '', '', 'Do you use any of our products?',
                                            `${formInput} ${validateCheck() === 'makeUse' ? 'border border-danger' : ''}`, 'valid option required')}
                                    </div>

                                    {renderHInput('Product name', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'productName' ? 'border border-danger' : ''}`, labeltextL, 'If yes, please enter the name of the product', 'text', 'productName', inputs, errors,
                                        '', true, 'product Name required')}

                                    <div className="py-5">
                                        {renderTextarea('description', 'Kindly state your enquiry type and we will get back to you', ' Nature of enquiry', 8, 30, '', `form-control ${validateCheck() === 'description' ? 'border border-danger' : ''}`,
                                            inputs, errors, <span className="text-danger pl-2">*</span>, labeltextL, true, 'kindly explain'
                                        )}
                                    </div>



                                    <div className="text-center">{renderButtonH("", "Enquire", `${formSubmitButton} mb-4`, disableSubmitBtn, "submit", {})}</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Modal>
    </Fragment>);

}
export default EnquiryModal;