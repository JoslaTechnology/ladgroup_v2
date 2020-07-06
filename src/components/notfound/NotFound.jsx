import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

const NotFound = () => (
  <Fragment>
    <MetaTags>
      <title>404 Error Page</title>
      <meta name="description" content="URL you are trying to access within Ladgroup Web presence is not available yet. kindly visit home https://www.ladgroup.org" />
      <meta property="og:title" content="404 Error Page" />
      <meta property="keywords" content="url you are trying to view was not found on Ladgroup web presence. Kindly visit , https://www.ladgroup.org" />
    </MetaTags>
    <div className="container">
      <h2 className="text-center pt-4">404 Not found Page</h2>
    </div>
  </Fragment>
);

export default NotFound;
