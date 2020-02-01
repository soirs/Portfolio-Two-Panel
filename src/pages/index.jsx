/* eslint-disable prettier/prettier */
import React from "react";
import Layout from "../components/layout";
import ProjectsSection from "../components/project-section";

const IndexPage = () => (
  <>
    <Layout>
      <h2 className="index__greeting">
        Hi, I`m
        {' '}
        <span className="text-bold">Frank</span>
      </h2>

      <h3 className="index__introduction text-bold">
        I`m a frontend developer from Aarhus, Denmark.
        <br />
        I live for the experience.
      </h3>
      <ProjectsSection />
    </Layout>
  </>
);

export default IndexPage;
