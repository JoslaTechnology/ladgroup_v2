import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { DistributorFormSchema } from "utils/validationSchema";
import client, { uploadFileAndGenerateURL } from "lib/client";
import { distributorFormContent } from "utils/mailcontent";

import doAlert from "utils/doAlert";
import Button from "components/Button";
import { ButtonSpinner } from "components/loader";
import { TextInput, SelectInput, TextAreaInput, NumberInput, FileInput } from "components/Input";

import { header, required_flag, header_distributor } from "./style.module.css";
import { contact_form } from "./style.module.css";

const DistributorForm = ({ setShowDistributorModal }) => {
  const initialValues = {
    name: "",
    companyName: "",
    address: "",
    designation: "",
    phoneNumber: "",
    email: "",
    warehouseAddress: "",
    warehouseSize: "",
    productRange: "",
    exclusive: "",
    quantity: "",
    bankReference: "",
    turnover: "",
    experience: "",
    messageBody: ""
  };

  const handleSubmit = async (values, setSubmitting) => {
    try {
      const bankReferenceURL = await uploadFileAndGenerateURL(values.bankReference);
      values.bankReference = bankReferenceURL;

      // check if file upload is successful by checking for url
      if (values.bankReference.toString().includes("http")) {
        const body = distributorFormContent(values);
        try {
          const data = await client(body);
          if (data.success === true) {
            doAlert("Submitted successfully", "success");
            setSubmitting(false);
            setShowDistributorModal(false);
          }
        } catch (error) {
          doAlert("Unsuccessful, try again later", "error");
          setSubmitting(false);
          setShowDistributorModal(false);
        }
      }
    } catch (error) {
      doAlert("Application unsuccessful, try again", "error");
      setSubmitting(false);
    }
  };

  const selectOptions1 = [
    { value: "", title: " Ladgroup exclusive" },
    { value: "yes", title: "Yes" },
    { value: "no", title: "No" }
  ];

  const selectOptions2 = [
    { value: "", title: "select product quantity" },
    { value: "1.3kg sample pack", title: "1.3KG SAMPLE PACK" },
    { value: "18kg pack", title: "18KG PACK" },
    { value: "25kg carton", title: "25KG CARTON" },
    { value: "bulk purchase", title: "BULK PURCHASE" }
  ];

  return (
    <Fragment>
      <header className={`${header} ${header_distributor}`}>
        <h1>Distributor Registration</h1>
      </header>
      <div className={contact_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={DistributorFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <p className={required_flag}>Kindly note that all input fields marked * are compulsory</p>

              <TextInput name="name" label="Full Name *" placeholder="Enter your full name" />
              <TextInput
                name="companyName"
                label="Company/trading name *"
                placeholder="Enter your company/trading name"
              />
              <TextInput name="address" label="Contact address *" placeholder="Enter your contact address" />
              <TextInput name="designation" label="Designation" placeholder="Enter your designation (e.g CEO)" />
              <NumberInput name="phoneNumber" label="Phone Number *" placeholder="Enter your phone number" />
              <TextInput name="email" label="Email *" placeholder="Enter your email addres" />
              <TextInput
                name="warehouseAddress"
                label="Shop address/warehouse location *"
                placeholder="Enter shop address/warehouse location"
              />
              <TextInput
                name="warehouseSize"
                label="Existing shop/warehouse size "
                placeholder="Enter existing shop/warehouse"
              />
              <TextInput
                name="productRange"
                label="Range of products sold/stocked *"
                placeholder="Enter the range of products you sell/stocked"
              />
              <SelectInput
                name="exclusive"
                label="Will you deal solely in LADGROUP shea products? *"
                options={selectOptions1}
                selected={""}
              />
              <SelectInput name="quantity" label="Quantity required monthly *" options={selectOptions2} selected={""} />
              <FileInput
                name="bankReference"
                label="Upload your bank reference(max: 1mb)*"
                setFieldValue={setFieldValue}
                placeholder="Bankers reference"
              />
              <TextInput name="turnover" label="Turnover" placeholder="Enter your company/trade turnover" />
              <NumberInput
                name="experience"
                label="Experience *"
                placeholder="Enter years of experience in shea butter trading"
              />
              <TextAreaInput
                name="messageBody"
                label="Reason for interest *"
                placeholder="If new to business, why do you want to be a LADGROUP distributor?"
              />

              <Button size="large" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <p>
                    <ButtonSpinner />
                  </p>
                ) : (
                  "Send"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default DistributorForm;
