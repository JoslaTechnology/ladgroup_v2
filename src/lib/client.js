import axios from "axios";
const qs = require("querystring");

export const postApiZero = async (url, payload) => {
  const { data } = await axios.post(url, payload);

  return data;
};

export const generateFileUrl = async (files) => {
  const url = process.env.REACT_APP_FILE_UPLOAD;

  if (files && files.length < 2) {
    const payload = new FormData();
    payload.append("image", files[0], files[0].name);
    payload.append("bucketName", "maja-bucket");
    return postApiZero(url, payload);
  } else {
    const requests = [];
    files.forEach((file) => {
      const payload = new FormData();
      payload.append("image", file, file.name);
      payload.append("bucketName", "maja-bucket");
      requests.push(postApiZero(url, payload));
    });
    const responses = await axios.all([...requests]);
    return responses;
  }
};

export const submitFormData = async (payload) => {
  const url = `${process.env.REACT_APP_API_URL}/ladgroup/contact`;
  const { data } = await axios.post(url, qs.stringify(payload), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  console.log(payload);


  return data;
};
