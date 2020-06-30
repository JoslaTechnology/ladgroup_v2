import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { FullPageSpinner } from "./components/loader/FullPageSpinner";
import ErrorBoundary from "./components/errorBoundary";
import "./App.css";
import Home from "pages/Home";
import Navigation from "components/Navigation";

const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Support = lazy(() => import("./pages/Support"));

function App() {
  return (
    <Fragment>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={FullPageSpinner}>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/support" component={Support} />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Fragment>
  );
}

export default App;
