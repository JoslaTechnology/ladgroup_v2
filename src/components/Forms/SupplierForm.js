import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import doAlert from "utils/doAlert";
import { SupplierFormSchema } from "utils/validationSchema";
import { header, required_flag, header_supplier } from "./style.module.css";
import { TextInput, SelectInput, TextAreaInput, NumberInput, FileInput } from "components/Input";
import Button from "components/Button";

import { contact_form } from "./style.module.css";
import { ButtonSpinner } from "components/loader";

const SupplierForm = ({ setShowSupplierModal }) => {
  // const [loading, setLoading] = useState(false);

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

  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(true);
    // console.log(values);

    setTimeout(() => {
      setSubmitting(false);
      doAlert("Submitted successfully", "success");
      setShowSupplierModal(false);
    }, 3000);
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
