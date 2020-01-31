import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

const ErrorPage = ({ data }) => (
  <div className="template-wrapper">
    <Layout>
      <h2>
        Hi, I'm
        {' '}
        <span className="bold">a 404 Error</span>
        {' '}
page
      </h2>
      <h3>
        This means the page you are looking for wasn't found.
        <br />
      </h3>
      <h3 className="bold">
        <Link to="/">Let's go back to the home page!</Link>
      </h3>
    </Layout>
  </div>
);

ErrorPage.propTypes = {
  children: PropTypes.func,
};

export default ErrorPage;
