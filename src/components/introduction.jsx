/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from "react";
import { graphql, StaticQuery } from "gatsby";

const Introduction = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulIntroduction {
          nodes {
            name
            brief {
              brief
            }
            greeting
          }
        }
      }
    `}
    render={data => {
      const {
        greeting,
        name,
        brief: { brief },
      } = data.allContentfulIntroduction.nodes[0];
      return (
        <header>
          <h2 className="index__greeting">
            {greeting}
            {' '}
            <span className="text-bold">{name}</span>
          </h2>
          <pre className="index__introduction text-bold">{brief}</pre>
        </header>
      );
    }}
  />
);

export default Introduction;
