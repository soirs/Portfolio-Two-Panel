import PropTypes from 'prop-types';
import React from 'react';

const OutboundLink = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    data-tooltip
    data-title="Go to:"
  >
    {children}
  </a>
);

OutboundLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default OutboundLink;
