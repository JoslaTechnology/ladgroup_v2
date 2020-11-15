import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { SupplierFormSchema } from "utils/validationSchema";
import client, { uploadFileAndGenerateURL } from "lib/client";
import { supplierFormContent } from "../../utils/mailcontent";

import doAlert from "utils/doAlert";
import Button from "components/Button";
import { ButtonSpinner } from "components/loader";
import { TextInput, SelectInput, TextAreaInput, NumberInput, FileInput } from "components/Input";

import { header, required_flag, header_supplier } from "./style.module.css";
import { contact_form } from "./style.module.css";

const SupplierForm = ({ setShowSupplierModal }) => {
  const initialValues = {
    name: "",
    companyName: "",
    address: "",
    designation: "",
    phoneNumber: "",
    email: "",
    warehouseAddress: "",
    category: "",
    experience: "",
    document: null,
    turnover: "",
    messageBody: ""
  };

  const handleSubmit = async (values, setSubmitting) => {
    try {
      const documentURL = await uploadFileAndGenerateURL(values.document);
      values.document = documentURL;

      // check if file upload is successful by checking for url
      if (values.document.toString().includes("http")) {
        const body = supplierFormContent(values);
        try {
          const data = await client(body);
          if (data.success === true) {
            doAlert("Submitted successfully", "success");
            setSubmitting(false);
            setShowSupplierModal(false);
          }
        } catch (error) {
          doAlert("Unsuccessful, try again later", "error");
          setSubmitting(false);
          setShowSupplierModal(false);
        }
      }
    } catch (error) {
      doAlert("Application unsuccessful, try again", "error");
      setSubmitting(false);
    }
  };

  const selectOptions = [
    { value: "", title: "supplier category" },
    { value: "shea nut", title: "SHEA NUT" },
    { value: "diesel", title: "DIESEL" },
    { value: "spare parts", title: "SPARE PARTS" },
    { value: "logistics", title: "LOGISTICS" },
    { value: "office equipment", title: "OFFICE EQUIPMENT" }
  ];

  return (
    <Fragment>
      <header className={`${header} ${header_supplier}`}>
        <h1>Supplier Registration</h1>
      </header>

      <div className={contact_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={SupplierFormSchema}
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
              <SelectInput name="category" label="Supplier category *" options={selectOptions} selected={""} />
              <NumberInput
                name="experience"
                label="Experience *"
                placeholder="How many year(s) have you been a supplier of this product?"
              />
              <FileInput
                name="document"
                label="Upload document *"
                setFieldValue={setFieldValue}
                placeholder="Upload any relevant document(e.g farmers association documents, etc)"
              />

              <TextInput name="turnover" label="Turnover" placeholder="Enter your company/trade turnover" />
              <TextAreaInput
                name="messageBody"
                label="Reason for interest *"
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
