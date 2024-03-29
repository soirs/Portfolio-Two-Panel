import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => (
  <section className="section">
    <h3 className="text-bold">{title}</h3>
    <div className="section__item">{children}</div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
