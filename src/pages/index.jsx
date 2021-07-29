import React from 'react';
// import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import ProjectsSection from '../components/ProjectSection';
import Introduction from '../components/Introduction';

const IndexPage = () => (
  <Layout>
    <Introduction />
    <ProjectsSection />
  </Layout>
);

export default IndexPage;
