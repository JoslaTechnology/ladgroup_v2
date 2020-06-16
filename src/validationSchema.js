import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  fullname: Yup.string().required("kindly fill all fields"),
  company: Yup.string().required("kindly fill all fields"),
  contact: Yup.string().required("kindly fill all fields"),
  designation: Yup.string().required("kindly fill all fields"),
  phone: Yup.string("must be a number")
    .min(11, "enter a valid phone number")
    .max(13, "enter a valid phone number")
    .required("kindly fill all fields"),
  email: Yup.string().email("emter a valid email").required("kindly fill all fields"),
  location: Yup.string()
    .min(5, "enter a valid location")
    .max(255, "cannot exceed 255 characters")
    .required("kindly fill all fields"),
  storeSize: Yup.string().required("kindly fill all fields"),
  rangeofProducts: Yup.string().required("kindly fill all fields"),
  bankReference: Yup.string().required("kindly fill all fields"),
  turnover: Yup.number("must be a number").min(0).required("kindly fill all fields"),
  experience: Yup.number("must be a number").min(0).required("kindly fill all fields"),
  reason: Yup.string().required("kindly fill all fields")
});
