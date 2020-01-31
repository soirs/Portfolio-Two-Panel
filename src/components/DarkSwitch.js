import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../state/app';
import './DarkSwitch.scss';

const DarkSwitch = ({ isDarkMode, dispatch }) => (
  <p className="DarkSwitch">
    <button onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
      {isDarkMode && (
        <span>
          <FontAwesomeIcon icon={faMoon} width="22" />
          &nbsp; The night is dark and full of terrors
        </span>
      )}
      {!isDarkMode && (
        <span>
          <FontAwesomeIcon icon={faSun} width="22" />
          &nbsp; Hide in the dark
        </span>
      )}
    </button>
  </p>
);
export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null,
)(DarkSwitch);
