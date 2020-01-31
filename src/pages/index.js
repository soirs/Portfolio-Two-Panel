import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import ProjectsSection from '../components/ProjectsSection';

const IndexPage = ({ data }) => (
  <div className="template-wrapper">
    <Layout>
      <h2>
        Hi, I'm
        {' '}
        <span className="bold">Frank</span>
      </h2>

      <h3 className="bold">
        I'm a frontend developer from Aarhus, Denmark. I live for the
        experience.
      </h3>
      <ProjectsSection />
    </Layout>
  </div>
);

IndexPage.propTypes = {
  children: PropTypes.func,
};

export default IndexPage;
