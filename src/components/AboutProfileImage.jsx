import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const AboutImage = () => (
  <StaticQuery
    query={graphql`
      query {
        avatar: file(relativePath: { eq: "franksemakula.png" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `}
    render={(data) => {
      const images = getImage(data.avatar);
      return (
        <div className="about__image">
          <GatsbyImage
            image={images}
            title="Frank Richard Semakula"
            alt="Frank Richard Semakula"
          />
        </div>
      );
    }}
  />
);

export default AboutImage;
