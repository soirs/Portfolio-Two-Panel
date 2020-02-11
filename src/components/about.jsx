/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import { graphql, StaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

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
        <div className="about__image">
          <GatsbyImage
            title="Frank Richard Semakula"
            alt="Frank Richard Semakula"
            fluid={data.Avatar.childImageSharp.fluid}
          />
        </div>
        <article className="about__bio">
          <h4>Hello world.</h4>
          <p>
            <span>
              I am currently looking for my next position!
              <br />
              If you have a role that may suit, feel free to
              {" "}
              <br className="utility-linebreak" />
              <a href="mailto:Hello@frankrs.dk?subject=Hello%20Frank!">
                contact me
              </a>
            </span>
            <br />
            <br />
            <span>
              I'm a Webdevelopment graduate who absoulutely loves the world of
              frontend development.
            </span>
            <br />
            <br />
            <span>
              Have a great one.
              <br />
              <br />
              <span
                className="about__bio--emoji"
                role="img"
                aria-label="ending emoji's"
              >
                ⭐️🚀⭐️
              </span>
            </span>
          </p>
        </article>
      </div>
    )}
  />
);

export default About;
