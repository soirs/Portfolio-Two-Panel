/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import About from './About';
import Links from './SocialLinks';
import helmetProps from '../utils/helmet';

const Layout = ({ children }) => (
  <>
    <Helmet {...helmetProps} />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
