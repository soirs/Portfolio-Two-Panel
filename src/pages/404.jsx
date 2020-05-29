import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const ErrorPage = () => (
  <>
    <Layout>
      <h2 className="four-oh-four__message">
        Hi, I'm
{' '}
<span className="text-bold">an 404 Error</span>
        page
      </h2>
      <h3>
        This means the page you are looking for wasn´t found.
        <br />
      </h3>
      <h3 className="four-oh-four__redirect text-bold">
        <Link to="/">Let´s go back to the home page!</Link>
      </h3>
    </Layout>
  </>
);

export default ErrorPage;
