// import { graphql, StaticQuery } from "gatsby"
import { graphql, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import './About.scss';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        Avatar: file(relativePath: { eq: "franksemakula.png" }) {
          childImageSharp {
            fluid(maxWidth: 180, maxHeight: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="about">
        <div className="image">
          <GatsbyImage
            title="Frank Richard Semakula"
            alt="Frank Richard Semakula"
            fluid={data.Avatar.childImageSharp.fluid}
          />
        </div>
        <div className="bio">
          <p>-- add something --</p>
          <p>-- new section --</p>
        </div>
      </div>
    )}
  />
);

export default About;
