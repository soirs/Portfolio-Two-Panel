import React from 'react';

const OutboundLink = props => (
  <a
    {...props}
    // className={('s', props.classname)}
    href={props.to}
    target="_blank"
    rel="noopener noreferrer"
    data-tooltip="Message"
  >
    {props.children}
  </a>
);

export default OutboundLink;
