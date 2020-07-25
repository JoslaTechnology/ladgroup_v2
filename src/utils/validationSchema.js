import * as Yup from "yup";

// reusable validation checks
const validateName = () => Yup.string().required("name is required");
const validateEmail = () => Yup.string().email("enter a valid email").required("email is required");
const validateUrl = () => Yup.string().url("enter a valid url").required("url is required");
const validateMessage = () => Yup.string().trim().max(700, "cannot exceed 700 characters").required("input a message");
const validateFile = () =>
  Yup.mixed()
    .required("choose a file")
    .test("fileSize", "file is too large (max: 80kb)", (value) => value && value.size <= 80000);
const validatePhone = () => {
  return Yup.string()
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
    });
};

export const contactPageForm = Yup.object().shape({
  name: validateName(),
  email: validateEmail(),
  category: Yup.string().required("choose a message category"),
  messageBody: validateMessage()
});

export const careerPageForm = Yup.object().shape({
  name: validateName(),
  email: validateEmail(),
  phoneNumber: validatePhone(),
  nationality: Yup.string().required("choose a message category"),
  cv: validateFile(),
  coverLetter: validateFile(),
  messageBody: validateMessage()
});

// export const contactFormSchema = Yup.object().shape({
//   fullname: validateName(),
//   company: Yup.string().required("kindly fill all fields"),
//   contact: Yup.string().required("kindly fill all fields"),
//   designation: Yup.string().required("kindly fill all fields"),
//   phone: validatePhone(),
//   email: validateEmail(),
//   location: Yup.string()
//     .min(5, "enter a valid location")
//     .max(255, "cannot exceed 255 characters")
//     .required("kindly fill all fields"),
//   storeSize: Yup.string().required("kindly fill all fields"),
//   rangeofProducts: Yup.string().required("kindly fill all fields"),
//   bankReference: Yup.string().required("kindly fill all fields"),
//   turnover: Yup.number("must be a number").min(0).required("kindly fill all fields"),
//   experience: Yup.number("must be a number").min(0).required("kindly fill all fields"),
//   reason: Yup.string().required("kindly fill all fields")
// });
