import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { PlaceOrderFormSchema } from "utils/validationSchema";
import { placeOrderFormContent } from "./mailcontent";
import { submitFormData } from "lib/client";
import nigerianStates from "lib/nigerianStates";

import doAlert from "utils/doAlert";
import Button from "components/Button";
import { ButtonSpinner } from "components/loader";
import { TextInput, SelectInput, NumberInput } from "components/Input";

import { header, required_flag, header_supplier } from "./style.module.css";
import { contact_form } from "./style.module.css";

const PlaceOrderForm = ({ setPlaceOrderModal }) => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    stateOfResidence: "",
    nationality: "",
    product: "",
    quantity: ""
  };

  const quantityOptions = [
    { value: "", title: "select product quantity" },
    { value: "1.3kg sample pack", title: "1.3KG SAMPLE PACK" },
    { value: "18kg pack", title: "18KG PACK" },
    { value: "25kg carton", title: "25KG CARTON" },
    { value: "bulk purchase", title: "BULK PURCHASE" }
  ];

  const productOptions = [
    { value: "", title: "Select Product" },
    { value: "rawSheaButter", title: "Raw shea butter" },
    { value: "organicSheaButter", title: "Organic shea butter" },
    { value: "deOiledCake", title: "De oiled cake" }
  ];

  const handleSubmit = async (values, setSubmitting) => {
    setSubmitting(true);
    const body = placeOrderFormContent(values);

    try {
      const data = await submitFormData(body);
      if (data.status === "success") {
        doAlert("Order placed successfully", "success");
        setSubmitting(false);
        setPlaceOrderModal(false);
      } else if (data.includes("You are not authorised to access this API service")) {
        doAlert("Order unsuccessful, kindly try again later", "error");
        setSubmitting(false);
      }
    } catch (error) {
      doAlert("Order unsuccessful, kindly try again later", "error");
      setSubmitting(false);
    }
  };

  return (
    <Fragment>
      <header className={`${header} ${header_supplier}`}>
        <h1>Place Order</h1>
      </header>
      <div className={contact_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={PlaceOrderFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
            <p className={required_flag}>Kindly note that all input fields marked * are compulsory</p>
            <TextInput name="name" label="Full Name *" placeholder="Enter your full name" />
            <TextInput name="email" label="Email *" placeholder="Enter your email addres" />
            <NumberInput name="phoneNumber" label="Phone Number *" placeholder="Enter your phone number" />
            <TextInput name="address" label="Contact address *" placeholder="Enter your contact address" />

            <SelectInput name="stateOfResidence" label="Select state *" options={nigerianStates} selected={""} />
            <TextInput name="nationality" label="Nationality *" placeholder="Nationality" />
            <SelectInput name="product" label="Select product *" options={productOptions} selected={""} />
            <SelectInput name="quantity" label="Select quantity *" options={quantityOptions} selected={""} />

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

export default PlaceOrderForm;
