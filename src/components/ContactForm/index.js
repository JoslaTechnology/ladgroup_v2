import React, { useState, Fragment } from "react";
import { Formik, Form } from "formik";
import { contactFormSchema } from "validationSchema";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "components/Button";
import { TextInput, SelectDisco } from "components/Input";
import { labeltext, select_disco, disco_container } from "components/Input/style.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import env from "env";
const qs = require("querystring");

const ContactForm = () => {
  const [key, setKey] = useState("home");

  const [soley, setSoley] = useState("");
  const [quantity, setQuantity] = useState("");

  const soleyArr = [
    { value: "yes", text: "Yes" },
    { value: "no", text: "No" }
  ];

  const supplyArr = [
    { value: "1.3KG SAMPLE PACK", text: "1.3KG (simple pack)" },
    { value: "25KG CARTON", text: "25KG (carton)" },
    { value: "18KG PACK", text: "18KG (pack)" },
    { value: "BULK PURCHASE", text: "Bulk Purchase" }
  ];

  const initialValues = {
    fullname: "",
    company: "",
    contact: "",
    designation: "",
    phone: "",
    email: "",
    location: "",
    storeSize: "",
    rangeofProducts: "",
    bankReference: "",
    turnover: "",
    experience: "",
    reason: ""
  };

  const handleSubmit = (data) => {
    data.exclusive = soley;
    data.quantity = quantity;


    const serverData = {
      token: 1234,
      subject: "Customer subscription",
      message: `</html><div>${{ ...data }}</div></html>`,
      name: data.fullname,
      email: "shea-sales@ladgroup.org",
      email2: data.email
    };

    console.log("serverData", serverData);
    axios
      .post(`${env.api_mail}/mail/ladgroup`, qs.stringify(serverData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(
        (response) => {
          if (response) {
            toast.success(`Enquiry submitted ${data.name} we will be in touch`);
            this.setState({
              data: { name: "", email: "", description: "", phone: "", serviceType: "" },
              enquiryModalDiv: false,
              enquirySentModal: true
            });
          }
        },
        (error) => {
          toast.error("Enquiry was not sent");
          console.log(error);
        }
      )
      .catch((error) => {
        // toast.error("Enquiry was not sent");
      });
  };

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={(value) => {
          soley && quantity && handleSubmit(value);
        }}
      >
        {() => (
          <Form>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
              <Tab eventKey="home" title="Dealer Information">
                <div className="formContainer py-5">
                  <TextInput label="Full Name" placeholder="Full name" name="fullname" />
                  <TextInput
                    label="Company/ Trading name"
                    placeholder="Company/ Trading name"
                    name="company"
                  />
                  <TextInput label="Contact address" placeholder="Contact address" name="contact" />
                  <TextInput label="Designation" placeholder="Designation" name="designation" />
                  <TextInput label="Telephone number" placeholder="Telephone number" name="phone" />
                  <TextInput label="Email address" placeholder="Email address" name="email" />
                  <TextInput
                    label="Shop address/ warehouse location"
                    placeholder="Shop address/ warehouse location"
                    name="location"
                  />
                  <TextInput
                    label="Existing shop/warehouse size"
                    placeholder="Existing shop/warehouse size"
                    name="storeSize"
                  />
                  <TextInput
                    label="Range of products sold/stocked"
                    placeholder="Range of products sold/stocked"
                    name="rangeofProducts"
                  />
                </div>
                <div className="text-center">
                  <Button label="Next" onClick={() => setKey("profile")} />
                </div>
              </Tab>
              <Tab eventKey="profile" title="Product Information">
                <div className="formContainer py-5">
                  <div className={`${select_disco} pt-3`}>
                    <h5 className={labeltext}>Will you deal solely in LADGROUP shea products?</h5>
                    <div className={`${disco_container} row`}>
                      {soleyArr.map((item, index) => {
                        return (
                          <SelectDisco
                            key={index}
                            active={item.value === soley}
                            text={item.text}
                            onClick={() => setSoley(item.value)}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className={`${select_disco} pt-3`}>
                    <h5 className={labeltext}>
                      Anticipated LADGROUP shea product required monthly
                    </h5>
                    <div className={`${disco_container} row`}>
                      {supplyArr.map((item, index) => {
                        return (
                          <SelectDisco
                            key={index}
                            active={item.value === quantity}
                            text={item.text}
                            onClick={() => setQuantity(item.value)}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <TextInput
                    label="Bankers references"
                    placeholder="Bank references"
                    name="bankReference"
                  />
                  <TextInput label="Turnover" placeholder="Turnover" name="turnover" />
                  <TextInput
                    label="How many years have you been
trading shea butter or other commodities?"
                    placeholder="years of experience"
                    name="experience"
                  />
                  <TextInput
                    label="If new to business, why do you want
to be a LADGROUP distributor?"
                    placeholder="reason for interest"
                    name="reason"
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" label="Submit" />
                </div>
              </Tab>
            </Tabs>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default ContactForm;
