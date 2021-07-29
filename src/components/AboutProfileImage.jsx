import { graphql, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';

const AboutImage = () => (
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
    render={(data) => (
      <div className="about__image">
        <GatsbyImage
          title="Frank Richard Semakula"
          alt="Frank Richard Semakula"
          fluid={data.Avatar.childImageSharp.fluid}
        />
      </div>
    )}
  />
);

export default AboutImage;
