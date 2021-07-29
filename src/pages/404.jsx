/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const ErrorPage = () => (
  <>
    <Layout>
      <h1 className="four-oh-four__message">
        Bummer!, I'm your 404 Error pages
      </h1>
      <h3>This means the page you are looking for wasn´t found.</h3>
      <h3 className="four-oh-four__redirect text-bold">
        <Link to="/">Let´s go back to the home page!</Link>
      </h3>
    </Layout>
  </>
);

export default ErrorPage;
