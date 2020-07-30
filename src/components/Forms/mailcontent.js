// import React from "react";

export const careerformContent = (values, fileData) => {
  const urls = fileData.map((url, i) => `<p  style="font-size: 0.8rem;" id=${i}>${url.data.createdFileURL}</p>`);

  const serverData = {
    token: 1234,
    subject: "Job Application",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Phone: ${values.phoneNumber}</p>
    <p style="font-size: 1rem;">Nationality: ${values.nationality}</p>
    <p style="font-size: 1rem;">Message: ${values.messageBody}</p>
    <p style="font-size: 1rem;">Attachments url below: </p> 
    ${urls}
    </div></html>`,
    name: values.name,
    email: "ekeziedavid1@gmail.com",
    email2: values.email
  };
  return serverData;
};

export const distributorFormContent = (values, fileData) => {
  const urls = fileData.map((url, i) => `<p  style="font-size: 0.8rem;" id=${i}>${url.data.createdFileURL}</p>`);

  const serverData = {
    token: 1234,
    subject: "Distributor Application",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Phone: ${values.phoneNumber}</p>
    <p style="font-size: 1rem;">Nationality: ${values.nationality}</p>
    <p style="font-size: 1rem;">Message: ${values.messageBody}</p>
    <p style="font-size: 1rem;">Attachments url below: </p> 
    ${urls}
    </div></html>`,
    name: values.name,
    email: "ekeziedavid1@gmail.com",
    email2: values.email
  };
  return serverData;
}
  

export const supplierFormContent = (values, fileData) => {
  const urls = fileData.map((url, i) => `<p  style="font-size: 0.8rem;" id=${i}>${url.data.createdFileURL}</p>`);

  const serverData = {
    token: 1234,
    subject: "Supplier Application",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Phone: ${values.phoneNumber}</p>
    <p style="font-size: 1rem;">Nationality: ${values.nationality}</p>
    <p style="font-size: 1rem;">Message: ${values.messageBody}</p>
    <p style="font-size: 1rem;">Attachments url below: </p> 
    ${urls}
    </div></html>`,
    name: values.name,
    email: "ekeziedavid1@gmail.com",
    email2: values.email
  };
  return serverData;
}
  