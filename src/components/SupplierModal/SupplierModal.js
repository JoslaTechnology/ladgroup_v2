import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Joi from 'joi-browser';
import { HookForm } from '../Template/Form/HookForm/HookForm';
import { updateSchemaData } from '../../store/actions/index';
import Modal from 'components/Template/Modal';
import supplierCss from './supplier.module.css';
import generalCss from '../general.module.css';
const useList = [{ id: 1, title: 'YES' }, { id: 2, title: 'NO' }];
const packageList = [{ id: 1, title: '25KG CARTON' }, { id: 2, title: '1.3KG SAMPLE PACK' },
{ id: 3, title: '18KG PACK' }, { id: 4, title: 'BULK PURCHASE' }];

const supplierList = [{ id: 1, title: 'SHEA NUT' }, { id: 2, title: '18KG PACK' },
{ id: 3, title: 'DIESEL' }, { id: 4, title: 'SPARE PARTS' }, { id: 5, title: 'LOGISTIC' },
{ id: 6, title: 'OFFICE EQUIPMENT' }];

const SupplierModal = (props) => {
    const { dIcon, dIcon_feedback, formSubmitButton, formInput, centerModalTitle } = generalCss;
    const { bgInput, labeltextL, removeModalPad, bgModal, paddButton } = supplierCss;
    const dispatch = useDispatch();
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
    const checkData = async () => {
        console.log("inputs", inputs);
        // disable the button with disableSubmitBtn
    }

    const schemaH = {
        fullname: Joi.string().required().min(3).label("fullname"),
        tradingName: Joi.string().required().min(3).label("Trading Name"),
        address: Joi.string().min(6).required(),
        post: Joi.string().min(3).required(),
        phone: Joi.string().min(11).max(14).required().label("Personal Phone"),
        email: Joi.string().email({ minDomainSegments: 2 }).regex(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)).required().label("Email"),
        shopAddress: Joi.string().min(6).required(),
        supplierType: Joi.string().min(3).required(),
        supplierExperience: Joi.string().required(),
        attachments: Joi.string().required(),
        turnover: Joi.string().optional().allow(''),
        detailReason: Joi.string().min(40).required(),
    }

    const { renderHInput, renderTextarea, renderHInputDisabled, handleSubmit, inputs, errors, renderButtonH, renderDropdownH,
        validateCheck, validateJobCheck, setInputs, renderJobUploadFile, renderMultipleUploadFile, useSignUpForm } = HookForm(checkData);

    useEffect(() => {
        dispatch(updateSchemaData({}))
        dispatch(updateSchemaData(schemaH))
        setInputs({
            fullname: '', tradingName: '', address: '', post: '', phone: '', email: '', shopAddress: '',
            supplierType: '', supplierExperience: '', attachments: '', turnover: '', detailReason: ''
        });
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
                            <button type="button" style={{ borderRadius: '50%' }} className="close bg-dark mr-2 " data-dismiss="modal">
                                <span className="h4 text-white" onClick={() => props.closeModal(false)}>×</span>
                            </button>
                        </div>
                        <div className="clearfix"></div>
                        <div className={centerModalTitle}>
                            <div className="text-center">
                                <button disabled className={`bg-white ${paddButton}`} >Supplier Registration</button>
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

                                <form className="mx-3" onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="py-5">
                                        {renderHInput('Full name', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'fullname' ? 'border border-danger' : ''}`, labeltextL,
                                            'Enter your full name', 'text', 'fullname', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'full name required')}
                                    </div>

                                    {renderHInput('Enter your company/trading name', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'tradingName' ? 'border border-danger' : ''}`, labeltextL,
                                        'Company/Trading name', 'text', 'tradingName', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'company name required')}

                                    <div className="py-5">
                                        {renderHInput('Contact address', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'address' ? 'border border-danger' : ''}`, labeltextL, 'Enter your contact address', 'text', 'address', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true)}
                                    </div>


                                    {renderHInput('Enter your designation (e.g CEO)', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'post' ? 'border border-danger' : ''}`, labeltextL, 'Designation', 'text', 'post', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'position  required')}

                                    <div className="py-5">
                                        {renderHInput('Phone number', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'phone' ? 'border border-danger' : ''}`, labeltextL, ' Enter your phone number', 'text', 'phone', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'valid mobile number  required')}
                                    </div>

                                    {renderHInput('Enter your email address', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'email' ? 'border border-danger' : ''}`, labeltextL, ' Enter your email address', 'text', 'email', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'valid email address required')}


                                    <div className="py-5">
                                        {renderHInput('Farm/site/shop address/warehouse location', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'shopAddress' ? 'border border-danger' : ''}`, labeltextL, 'Enter farm/site/shop address/warehouse location', 'text', 'shopAddress', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'shop address required')}
                                    </div>

                                    {renderDropdownH("supplierType", "Select your product/supply category", supplierList, inputs, errors, '', '', 'Supplier category',
                                        `${formInput} ${validateCheck() === 'intention' ? 'border border-danger' : ''}`)}


                                    <div className="py-5">
                                        {renderHInput('How many year(s) have you been a supplier of this product?', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'supplierExperience' ? 'border border-danger' : ''}`, labeltextL, 'Enter number of year(s)', 'text', 'supplierExperience', inputs,
                                            errors, '', true, 'years of experience  required')}
                                    </div>

                                    {renderMultipleUploadFile('attachments', 'Upload relevant documents (e.g farmers association documents, etc)', 'Upload document(s)',
                                        'file', <span className="text-danger pl-2">*</span>, `custom-file-input`, 'image/*, application/pdf', '', '', inputs, errors,
                                        'required file should be image or pdf', true, `${formInput} `, 'checkM')}

                                    <div className="py-5">
                                        {renderHInput('Turnover', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'turnover' ? 'border border-danger' : ''}`, labeltextL, 'Enter your company/trade turnover', 'text', 'turnover', inputs,
                                            errors, '', false, undefined)}
                                    </div>


                                    {renderTextarea('detailReason', 'Give reasons why LadGroup should pick you as one of their suppliers', 'Reason why you should supply your products for us', 8, 30, '', `form-control ${validateCheck() === 'detailReason' ? 'border border-danger' : ''}`,
                                        inputs, errors, <span className="text-danger pl-2">*</span>, labeltextL, true, 'briefly explain'
                                    )}

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
export default SupplierModal;