// import app from "base";
import axios from "axios";
import firebase from "firebase";
import "firebase/storage";
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



const app = firebase.initializeApp({
  apiKey: "AIzaSyAsjb95GdrTvqKn2cm9CXddgNJqFPyto8U",
  authDomain: "ladgroup-take-2.firebaseapp.com",
  databaseURL: "https://ladgroup-take-2.firebaseio.com",
  projectId: "ladgroup-take-2",
  storageBucket: "ladgroup-take-2.appspot.com",
  messagingSenderId: "692209717343",
  appId: "1:692209717343:web:83bc0a3999fae627a50bea",
  measurementId: "G-EE3XWHM1BW"
});

export const uploadFileAndGenerateURL = async (file) => {
  const storageRef = app.storage().ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  return await fileRef.getDownloadURL();
};

export default client;
