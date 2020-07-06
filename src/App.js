import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import NoMatch from './components/notfound/NotFound';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "components/Home";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />

          <Route component={NoMatch} />
        </Switch>
      </Router>

    </Fragment>
  );
}

export default App;
