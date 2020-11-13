import { app } from "base";
import axios from "axios";
const qs = require("querystring");

const client = async (payload) => {
  const url = process.env.REACT_APP_MAIL_SERVER;
  const { data } = await axios.post(url, qs.stringify(payload), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  return data;
};

export const uploadFileAndGenerateURL = async (file) => {
  const storageRef = app.storage().ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  return await fileRef.getDownloadURL();
};

export default client;
