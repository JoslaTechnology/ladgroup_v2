export const contactForm = (values) => {
  const serverData = {
    token: process.env.REACT_APP_TOKEN,
    to: "info@ladgroup.org",
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
    to: "shea-sales@ladgroup.org",
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
    to: "info@ladgroup.org",
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
    to: "shea-sales@ladgroup.org",
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
    to: "suppliers@ladgroup.org",
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
