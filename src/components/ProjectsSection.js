import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import ProjectUnit from './ProjectUnit';
import Section from './Section';

export default children => (
  <StaticQuery
    query={graphql`
      query ProjectsSectionQuery {
        allContentfulProject {
          totalCount
          nodes {
            title
            slug
            id
            description
            url
            github
          }
        }
      }
    `}
    render={data => (
      <Section title="Here's some of the things I've had fun with">
        <div className="row">
          {data.allContentfulProject.nodes.map(node => (
            <ProjectUnit
              id={node.id}
              title={node.title}
              description={node.description}
              url={node.url}
              slug={node.slug}
              github={node.github}
            />
          ))}
        </div>
      </Section>
    )}
  />
);
