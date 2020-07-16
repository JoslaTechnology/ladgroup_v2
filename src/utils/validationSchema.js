import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  fullname: Yup.string().required("kindly fill all fields"),
  company: Yup.string().required("kindly fill all fields"),
  contact: Yup.string().required("kindly fill all fields"),
  designation: Yup.string().required("kindly fill all fields"),
  phone: Yup.string()
    .required("Phone number is required")
    .test("length", "Must be exactly 11 characters", (val) => {
      if (val !== undefined && val.includes("-")) {
        return val !== undefined && val.toString().length === 13;
      } else if (val !== undefined) {
        return val !== undefined && val.toString().length === 11;
      }
    })
    .test("validity", "Phone number is not valid", (val) => {
      if (val !== undefined && val.includes("-")) {
        const regex = new RegExp(/^0[789][01][0-9]-[0-9]{3}-[0-9]{4}$/, "i");
        return val.match(regex);
      } else if (val !== undefined) {
        const regexx = new RegExp(/^0[789][01][0-9]{8}$/, "i");
        return val.match(regexx);
      }
    }),
  email: Yup.string().email("enter a valid email").required("kindly fill all fields"),
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


export const contactPageForm = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("enter a valid email").required("email is required"),

})