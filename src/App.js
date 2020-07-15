import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { FullPageSpinner } from "./components/loader/FullPageSpinner";
import ErrorBoundary from "./components/errorBoundary";
import Home from "pages/Home";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Support = lazy(() => import("./pages/Support"));
const Contact = lazy(() => import("./pages/Contact"));
const Media = lazy(() => import("./pages/Media"));

function App() {
  return (
    <Fragment>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<FullPageSpinner />}>
          <Navigation />
            <Switch>
              <Route exact path="/about" component={About} />
              <Route  path="/products" component={Products} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/media" component={Media} />
              <Route exact path="/" component={Home} />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </Suspense>
          <Footer />
        </ErrorBoundary>
      </Router>
    </Fragment>
  );
}

export default App;
