import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import doAlert from "utils/doAlert";
import { careerPageForm } from "utils/validationSchema";
import { header, required_flag, header_supplier } from "./style.module.css";
import { TextInput, SelectInput, TextAreaInput, NumberInput, FileInput } from "components/Input";
import Button from "components/Button";

import { contact_form } from "./style.module.css";
import { ButtonSpinner } from "components/loader";

const SupplierForm = ({ setShowSupplierModal }) => {
  // const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    cv: "",
    coverLetter: "",
    messageBody: ""
  };

  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(true);
    // console.log(values);

    setTimeout(() => {
      setSubmitting(false);
      doAlert("Submitted successfully", "success");
      setShowSupplierModal(false);
    }, 3000);
  };

  const selectOptions2 = [
    { value: "", title: "supplier category" },
    { value: "1.3kg sample pack", title: "1.3KG SAMPLE PACK" },
    { value: "18kg pack", title: "18KG PACK" },
    { value: "25kg carton", title: "25KG CARTON" },
    { value: "bulk purchase", title: "BULK PURCHASE" }
  ];

  return (
    <Fragment>
      <header className={`${header} ${header_supplier}`}>
        <h1>Supplier Registration</h1>
      </header>

      <div className={contact_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={careerPageForm}
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
                placeholder="Enter farm/site/shop address/warehouse location"
              />
              <SelectInput name="quantity" label="Supplier category *" options={selectOptions2} selected={""} />
              <NumberInput
                name="experience"
                label="Experience *"
                placeholder="How many year(s) have you been a supplier of this product?"
              />
              <FileInput
                name="bankReferences"
                label="Upload your bank reference CV (max: 80kb)*"
                setFieldValue={setFieldValue}
                placeholder="Bankers reference"
              />

              <TextInput name="turnover" label="Turnover" placeholder="Enter your company/trade turnover" />
              <TextAreaInput
                name="messageBody"
                label="Reason for interest"
                placeholder="Why whould you like to work with us?"
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

export default SupplierForm;
