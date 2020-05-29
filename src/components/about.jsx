/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import { graphql, StaticQuery } from "gatsby";
import React from "react";
import AboutBio from "./about-bio";
import AboutImage from "./about-profile-image";

const About = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulAboutMe {
          nodes {
            header
            currentlyLookingMessage
            bioText {
              bioText
            }
            outroMessage
            emojiOutroMessage
            childContentfulAboutMeBioTextTextNode {
              bioText
            }
            contactMe
          }
        }
      }
    `}
    render={data => {
      const {
        header,
        currentlyLookingMessage,
        bioText,
        outroMessage,
        emojiOutroMessage,
        contactMe,
      } = data.allContentfulAboutMe.nodes[0];
      return (
        <div className="about">
          <AboutImage />
          <AboutBio
            header={header}
            currentlyLookingMessage={currentlyLookingMessage}
            contactMe={contactMe}
            biotext={bioText.bioText}
            outroMessage={outroMessage}
            emojiOutroMessage={emojiOutroMessage}
          />
        </div>
      );
    }}
  />
);

export default About;
