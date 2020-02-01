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
          <h2>Hello world.</h2>
          <p>
            <span>
              I am currently looking for my next position!
              <br />
              If you have a role that may suit, feel free to contact me
            </span>
            <p>
              I`m a Webdevelopment graduate who absoulutely loves the world of
              frontend development.
            </p>
            <p>
              Take care.
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </p>
            <br />
            <h3>Education.</h3>
            <span>
              Bachelor in Webdevelopment
              <br />
              <sup>─── 2018/2020 @ Business Academy Aarhus</sup>
            </span>
            <br />
            <span>
              Webdevelopment certificate
              <br />
              <sup>─── 2016/2017 @ Viden Djurs</sup>
            </span>
            <br />
            <span>
              AP degree in Marketing Management
              {' '}
              <small>&</small>
              {' '}
Innovation
              <br />
              <sup>─── 2013/2015 @ Business Academy Aarhus</sup>
            </span>
          </p>
        </article>
      </div>
    )}
  />
);

export default About;
