import { graphql, StaticQuery } from "gatsby";
import React from "react";
import ProjectUnit from "./project-item";
import Section from "./section";

const ProjectSection = () => (
  <StaticQuery
    query={graphql`
      query ProjectsSectionQuery {
        allContentfulProject {
          totalCount
          nodes {
            color
            description
            github
            id
            image {
              file {
                url
              }
            }
            stack
            slug
            title
            url
          }
        }
      }
    `}
    render={data => (
      <Section title="Here's some of the things I've had fun with">
        <div className="row">
          {data.allContentfulProject.nodes.map(node => (
            <ProjectUnit
              color={node.color}
              description={node.description}
              github={node.github}
              id={node.id}
              image={node.image.file.url}
              key={node.id}
              slug={node.slug}
              stack={node.stack}
              title={node.title}
              url={node.url}
            />
          ))}
        </div>
      </Section>
    )}
  />
);

export default ProjectSection;
