import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Joi from 'joi-browser';
import { toast } from "react-toastify";
import axios from "axios";
import { HookForm } from '../Template/Form/HookForm/HookForm';
import { updateSchemaData, updateAttachmentsData } from '../../store/actions/index';
import env from "env";
import Modal from 'components/Template/Modal';
import distributionCss from './distribution.module.css';
import generalCss from '../general.module.css';

const qs = require("querystring");
const useList = [{ id: 1, title: 'YES' }, { id: 2, title: 'NO' }];
const packageList = [{ id: 1, title: '25KG CARTON' }, { id: 2, title: '1.3KG SAMPLE PACK' },
{ id: 3, title: '18KG PACK' }, { id: 4, title: 'BULK PURCHASE' }];

const DistributorModal = (props) => {
    const { dIcon, dIcon_feedback, formSubmitButton, formInput, centerModalTitle } = generalCss;
    const { bgInput, labeltextL, removeModalPad, bgModal, paddButton } = distributionCss;
    const dispatch = useDispatch();
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
    const { selectedFiles } = useSelector(state => ({ selectedFiles: state.selectedFiles }));

    const checkData = async () => {
        console.log("inputs", inputs);
        // disable the button with disableSubmitBtn

        setDisableSubmitBtn(true);
        if (Object.keys(selectedFiles).length < 1) {
            toast.info("attachments are required before you can submit")
            setDisableSubmitBtn(false);
            return;
        }
        else { onUploadFiles(inputs); }

    }

    const onUploadFiles = (serverData) => {
        const url = `${env.file_upload}/cosimageibm/multipartupload`;
        const reqList = [];
        Object.values(selectedFiles).forEach((file, index) => {
            const fd = new FormData();
            fd.append('image', file, file.name)
            fd.append('bucketName', 'maja-bucket')
            const req = axios.post(url, fd)
            reqList.push(req);
        })
        axios.all([...reqList]).then(response => {
            const data = response.map((res, index) => {
                return ({ fileUrl: res.data.data.createdFileURL })
            });

            // setDocuments([]);
            // setSelectedFiles({});
            // setDisableAddBtn(false);
            console.log("data", data);

            if (data) {
                const fileDetail = data.map((info, index) => `<p  style="font-size: 0.8rem;" id=${index}>${info.fileUrl}</p>`)
                // const modifyData ={ ...inputs,  attachments}
                const serverData = {
                    token: 1234,
                    subject: "Customer subscription",
                    message: `</html><div>
                    <p style="font-size: 1rem;">Full name: ${inputs.fullname}</p>
                    <p style="font-size: 1rem;">Trading Name: ${inputs.tradingName}</p>
                    <p style="font-size: 1rem;">Contact Address: ${inputs.address}</p>
                    <p style="font-size: 1rem;">post: ${inputs.post}</p>
                    <p style="font-size: 1rem;">Phone: ${inputs.phone}</p>
                    <p style="font-size: 1rem;">Email: ${inputs.email}</p>
                    <p style="font-size: 1rem;">Shop Address: ${inputs.shopAddress}</p>
                    <p style="font-size: 1rem;">Shop Size: ${inputs.shopSize}</p>
                    <p style="font-size: 1rem;">Product List: ${inputs.productList}</p>
                    <p style="font-size: 1rem;">Intention: ${inputs.intention}</p>
                    <p style="font-size: 1rem;">Package Type: ${inputs.packageType}</p>
                    <p style="font-size: 1rem;">Attachments url below: </p> 
                    ${fileDetail}
                    <p style="font-size: 1rem;">Turnover: ${inputs.turnover}</p>
                    <p style="font-size: 1rem;">Sales Experience: ${inputs.salesExperience}</p>
                    <p style="font-size: 1rem;">More detail about the enquiry: ${inputs.detailReason}</p>
                    </div></html>`,
                    name: inputs.fullname,
                    email: "shea-sales@ladgroup.org",
                    email2: inputs.email
                };
                postDistInfo(serverData)
            }

        }).catch(err => {
            console.log(err);
        })

    }

    const postDistInfo = (serverData) => {
        axios
            .post(`${env.api_mail}/mail/ladgroup`, qs.stringify(serverData), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(
                (response) => {
                    if (response) {
                        toast.success(`Registration successful, ${inputs.fullname}`);
                        setInputs({
                            fullname: '', tradingName: '', address: '', post: '', phone: '', email: '',
                            shopAddress: '', shopSize: '', productList: '', intention: '', packageType: '',
                            attachments: '', turnover: '', salesExperience: '', detailReason: ''
                        });
                        dispatch(updateAttachmentsData({}));
                        setDisableSubmitBtn(false);
                        props.closeModal(false);
                    }
                },
                (error) => {
                    toast.error("Distributor Info. was not sent");
                    setDisableSubmitBtn(false);
                    console.log(error);
                }
            )
            .catch((error) => {
                // toast.error("Enquiry was not sent");
            });
    }

    const schemaH = {
        fullname: Joi.string().required().min(3).label("fullname"),
        tradingName: Joi.string().required().min(3).label("Trading Name"),
        address: Joi.string().min(6).required(),
        post: Joi.string().min(3).required(),
        phone: Joi.string().min(11).max(14).required().label("Personal Phone"),
        email: Joi.string().email({ minDomainSegments: 2 }).regex(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)).required().label("Email"),
        shopAddress: Joi.string().min(6).required(),
        shopSize: Joi.string().min(2).required(),
        productList: Joi.string().required(),
        intention: Joi.string().min(2).required(),
        packageType: Joi.string().min(2).required(),
        attachments: Joi.string().required(),
        turnover: Joi.string().optional().allow(''),
        salesExperience: Joi.string().required(),
        detailReason: Joi.string().min(40).optional().allow(''),
    }

    const { renderHInput, renderTextarea, renderHInputDisabled, handleSubmit, inputs, errors, renderButtonH, renderDropdownH,
        validateCheck, validateJobCheck, setInputs, renderJobUploadFile, renderMultipleUploadFile, useSignUpForm } = HookForm(checkData);


    useEffect(() => {
        dispatch(updateSchemaData({}));
        dispatch(updateSchemaData(schemaH));
        dispatch(updateAttachmentsData({}))
        setInputs({
            fullname: '', tradingName: '', address: '', post: '', phone: '', email: '',
            shopAddress: '', shopSize: '', productList: '', intention: '', packageType: '',
            attachments: '', turnover: '', salesExperience: '', detailReason: ''
        });
        return () => {

        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<Fragment>
        <Modal showModal={props.showModal} handleClose={() => props.closeModal(false)}>
            <div className="modal-content">
                {/* {data.map((info, index)=>(<div key={index} id={index}></div>))} */}
                <div className={`modal-header ${removeModalPad}`}>
                    <div className={`w-100 ${bgModal} d-flex`} style={{ position: 'relative' }}>
                        <div className="float-right  w-100" style={{ position: 'absolute', top: '15px' }}>
                            {/* image here */}
                            <button type="button" style={{ borderRadius: '50%' }} className="close bg-white mr-2 " data-dismiss="modal">
                                <span className="h4" onClick={() => props.closeModal(false)}><b>X</b></span>
                            </button>
                        </div>
                        <div className="clearfix"></div>
                        <div className={centerModalTitle}>
                            <div className="text-center">
                                <button disabled className={`bg-white ${paddButton}`} >Distributor Registration</button>
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
                                        {renderHInput('Enter your designation (e.g CEO)', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'post' ? 'border border-danger' : ''}`, labeltextL, 'Designation', 'text', 'post', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'position  required')}
                                    </div>


                                    {renderHInput('Contact address', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'address' ? 'border border-danger' : ''}`, labeltextL, 'Enter your contact address', 'text', 'address', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'valid contact address required')}



                                    <div className="py-5">
                                        {renderHInput('Phone number', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'phone' ? 'border border-danger' : ''}`, labeltextL, ' Enter your phone number', 'text', 'phone', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'valid mobile number required')}
                                    </div>

                                    {renderHInput('Enter your email address', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'email' ? 'border border-danger' : ''}`, labeltextL, ' Enter your email address', 'text', 'email', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'valid email address required')}


                                    <div className="py-5">
                                        {renderHInput('Shop address/warehouse location', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'shopAddress' ? 'border border-danger' : ''}`, labeltextL, 'Enter shop address/warehouse location', 'text', 'shopAddress', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'shop address required')}
                                    </div>


                                    {renderHInput('Existing shop/warehouse size', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'shopSize' ? 'border border-danger' : ''}`, labeltextL, 'Enter existing shop/warehouse size if any', 'text', 'shopSize', inputs, errors,
                                        <span className="text-danger pl-2">*</span>, true, 'warehouse size required')}


                                    <div className="py-5">
                                        {renderHInput('Range of products sold/stocked seperate with commas', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'productList' ? 'border border-danger' : ''}`, labeltextL, 'Enter the range of products you sell/stocked', 'text', 'productList', inputs, errors,
                                            <span className="text-danger pl-2">*</span>, true, 'seperate each products with a comma')}
                                    </div>

                                    {renderDropdownH("intention", "Select yes/no", useList, inputs, errors, '', '', 'Will you deal solely in LADGROUP shea products?',
                                        `${formInput} ${validateCheck() === 'intention' ? 'border border-danger' : ''}`)}

                                    <div className="py-5">
                                        {renderDropdownH("packageType", "Select your anticipated LadGroup shea product rquired monthly", packageList, inputs, errors, '', '', 'Anticipated LADGROUP shea product required monthly?',
                                            `${formInput} ${validateCheck() === 'packageType' ? 'border border-danger' : ''}`)}
                                    </div>
                                    {renderMultipleUploadFile('attachments', 'Upload your bank reference', `${Object.keys(selectedFiles).length < 1 ? 'Bankers references' : Object.keys(selectedFiles).length + 'file(s) added'}`,
                                        'file', <span className="text-danger pl-2">*</span>, 'custom-file-input', 'image/*, application/pdf', '', '', inputs, errors,
                                        'required file should be image or pdf', true, `${formInput} `, 'checkM')}

                                    <div className="py-5">
                                        {renderHInput('Turnover', `${bgInput} ${dIcon} mr - sm - 2 ${validateCheck() === 'turnover' ? 'border border-danger' : ''}`, labeltextL, 'Enter your company/trade turnover', 'text', 'turnover', inputs,
                                            errors, '', false, undefined)}
                                    </div>

                                    {renderHInput('How many years have you been trading shea butter or other commodities?', `${bgInput} ${dIcon} mr-sm-2 ${validateCheck() === 'salesExperience' ? 'border border-danger' : ''}`, labeltextL, 'Enter the number of years you have been trading shea butter or other commodities', 'text', 'salesExperience', inputs,
                                        errors, '', true, 'years of experience required')}

                                    <div className="py-5">
                                        {renderTextarea('detailReason', 'Give reasons why you want to be a LadGroup distributor', ' If new to business, why do you want to be a LADGROUP distributor?', 8, 30, '', `form-control ${validateCheck() === 'detailReason' ? 'border border-danger' : ''}`,
                                            inputs, errors, <span className="text-danger pl-2">*</span>, labeltextL, true, 'briefly explain'
                                        )}
                                    </div>

                                    <div className="text-center">{renderButtonH("", "Register", `${formSubmitButton} mb-4`, disableSubmitBtn, "submit", {})}</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Modal>
    </Fragment >);

}
export default DistributorModal;