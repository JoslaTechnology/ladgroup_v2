import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "components/Home";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Home />
    </Fragment>
  );
}

export default App;
