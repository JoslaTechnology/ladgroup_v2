import * as Yup from "yup";

// reusable validation checks
const validateName = () => Yup.string().required("field is required");
const validateRandomText = () => Yup.string().max(255, "cannot exceed 255 characters");
const validateEmail = () => Yup.string().email("enter a valid email").required("email is required");
const validateMessage = () => Yup.string().trim().max(700, "cannot exceed 700 characters").required("input a message");
const validateFile = () =>
  Yup.mixed()
    .required("choose a file")
    .test("fileSize", "choose a file within the size limit", (value) => value && value.size <= 80000);
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

export const DistributorFormSchema = Yup.object().shape({
  name: validateName(),
  companyName: validateName(),
  address: validateRandomText().required("field is required"),
  designation: validateRandomText(),
  phoneNumber: validatePhone(),
  email: validateEmail(),
  warehouseAddress: validateRandomText().required("field is required"),
  warehouseSize: validateRandomText(),
  productRange: validateRandomText().required("field is required"),
  exclusive: Yup.string().required("kindly select an option"),
  quantity: Yup.string().required("kindly select an option"),
  bankReference: validateFile(),
  turnover: Yup.string().min(2, "minimum of two").max(255, "255 charccters max"),
  experience: Yup.number().required("field is required").min(0).max(100, "max: 100"),
  messageBody: validateMessage()
});

export const SupplierFormSchema = Yup.object().shape({
  name: validateName(),
  companyName: validateName(),
  address: validateRandomText().required("field is required"),
  designation: validateRandomText(),
  phoneNumber: validatePhone(),
  email: validateEmail(),
  warehouseAddress: validateRandomText().required("field is required"),
  category: Yup.string().required("kindly select an option"),
  experience: Yup.number().required("field is required").min(0).max(100, "max: 100"),
  document: Yup.mixed()
    .required("choose a file")
    .test("fileSize", "choose a file within the size limit", (value) => value && value.size <= 80000),
  turnover: Yup.string().min(2, "minimum of two").max(255, "255 charccters max"),
  messageBody: validateMessage()
});

// const validateFile = () =>
//   Yup.array()
//     .of(Yup.mixed().test("fileSize", "file is too large (max: 80kb)", (value) => value && value.size <= 80000))
//     .required("choose a file");
