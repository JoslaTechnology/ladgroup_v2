const formatUrl = (fileData) => {
  let urls = [];

  if (fileData.length > 1) {
    // urls.push(`<p  style="font-size: 0.8rem;">${fileData.data.createdFileURL}</p>`);
    fileData.forEach((file) => urls.push(`<p  style="font-size: 0.8rem;">${file.data.createdFileURL}</p>`));
  } else {
    urls = Object.values(fileData).map((url, i) => `<p  style="font-size: 0.8rem;" id=${i}>${url.createdFileURL}</p>`);
  }
  return urls;
};

export const contactForm = (values) => {
  const serverData = {
    token: process.env.REACT_APP_TOKEN,
    to: "victoryasokomeh@gmail.com",
    subject: "Contact Message",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Category: ${values.category}</p>
    <p style="font-size: 1rem;">Message: ${values.messageBody}</p>
    </div></html>`
  };
  return serverData;
};

export const placeOrderFormContent = (values) => {
  const serverData = {
    token: process.env.REACT_APP_TOKEN,
    to: "victoryasokomeh@gmail.com",
    subject: "Items Order",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Phone: ${values.phoneNumber}</p>
    <p style="font-size: 1rem;">Address: ${values.address}</p>
    <p style="font-size: 1rem;">State of Residence: ${values.stateOfResidence}</p>
    <p style="font-size: 1rem;">Nationality: ${values.nationality}</p>
    <p style="font-size: 1rem;">Product: ${values.product}</p>
    <p style="font-size: 1rem;">Quantity: ${values.quantity}</p>
    </div></html>`
  };
  return serverData;
};

export const careerformContent = (values) => {
  const serverData = {
    token: process.env.REACT_APP_TOKEN,
    to: "victoryasokomeh@gmail.com",
    subject: "Job Application",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Phone: ${values.phoneNumber}</p>
    <p style="font-size: 1rem;">Nationality: ${values.nationality}</p>
    <p style="font-size: 1rem;">Message: ${values.messageBody}</p>
    <p style="font-size: 1rem;">CV: ${values.cv}</p>
    <p style="font-size: 1rem;">Cover letter: ${values.coverLetter}</p>
    </div></html>`
  };
  return serverData;
};

export const distributorFormContent = (values) => {
  const serverData = {
    token: process.env.REACT_APP_TOKEN,
    to: "victoryasokomeh@gmail.com",
    subject: "Distributor Application",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Company name: ${values.companyName}</p>
    <p style="font-size: 1rem;">Address: ${values.address}</p>
    <p style="font-size: 1rem;">Designation: ${values.designation}</p>
    <p style="font-size: 1rem;">Phone: ${values.phoneNumber}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Warehouse Address: ${values.warehouseAddress}</p>
    <p style="font-size: 1rem;">Warehouse Size: ${values.warehouseSize}</p>
    <p style="font-size: 1rem;">Product range: ${values.productRange}</p>
    <p style="font-size: 1rem;">Exclusive: ${values.exclusive}</p>
    <p style="font-size: 1rem;">Quantity: ${values.quantity}</p>
    <p style="font-size: 1rem;">Turnover: ${values.turnover}</p>
    <p style="font-size: 1rem;">Experience: ${values.experience}</p>
    <p style="font-size: 1rem;">Message: ${values.messageBody}</p>
    <p style="font-size: 1rem;">Bank reference: ${values.bankReference}</p>
    </div></html>`
  };
  return serverData;
};

export const supplierFormContent = (values) => {
  const serverData = {
    token: process.env.REACT_APP_TOKEN,
    to: "victoryasokomeh@gmail.com",
    subject: "Supplier Application",
    message: `</html><div>
    <p style="font-size: 1rem;">Full name: ${values.name}</p>
    <p style="font-size: 1rem;">Company name: ${values.companyName}</p>
    <p style="font-size: 1rem;">Address: ${values.address}</p>
    <p style="font-size: 1rem;">Designation: ${values.designation}</p>
    <p style="font-size: 1rem;">Phone: ${values.phoneNumber}</p>
    <p style="font-size: 1rem;">Email: ${values.email}</p>
    <p style="font-size: 1rem;">Warehouse Address: ${values.warehouseAddress}</p>
    <p style="font-size: 1rem;">Category: ${values.category}</p>
    <p style="font-size: 1rem;">Experience: ${values.experience}</p>
    <p style="font-size: 1rem;">Turnover: ${values.turnover}</p>
    <p style="font-size: 1rem;">Message: ${values.messageBody}</p>
    <p style="font-size: 1rem;">Document: ${values.document}</p>
    </div></html>`
  };
  return serverData;
};
