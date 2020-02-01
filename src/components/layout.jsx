/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import HelmetProps from "../utils/helmet";
import About from "./about";
import Links from "./social-links";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet {...HelmetProps} />
      <main className="main">{children}</main>
      <aside className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </aside>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
