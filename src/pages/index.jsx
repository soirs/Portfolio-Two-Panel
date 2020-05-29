/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import ProjectsSection from "../components/project-section";
import Introduction from '../components/introduction';

const IndexPage = () => (
    <Layout>
      <Introduction/>
      <ProjectsSection />
    </Layout>
);

export default IndexPage;
