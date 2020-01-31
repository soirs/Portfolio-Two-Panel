import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import HelmetProps from '../utils/helmet';
import About from './About';
import DarkSwitch from './DarkSwitch';
import './Layout.scss';
import Links from './Links';

const Layout = ({ children, isDarkMode, dispatch }) => (
  <>
    <Helmet {...HelmetProps} />
    <div className={('index', isDarkMode ? 'theme-dark' : 'theme-light')}>
      <div className="main">{children}</div>
      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <DarkSwitch />
          <Links />
        </div>
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null,
)(Layout);
