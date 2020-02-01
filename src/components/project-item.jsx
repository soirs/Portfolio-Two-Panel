import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import OutboundLink from "./outbound-link";

const ProjectItem = props => {
  const { id, url, title, description, github } = props;

  return (
    <div className="project-item col-xs-12 col-sm-6 col-md-3" id={id}>
      {url && (
        <OutboundLink to={url}>
          <div
            className="project-item__image"
            style={
              {
                // backgroundImage: `url(${this.props.logo})`,
                // backgroundColor: this.props.colour,
              }
            }
          />
        </OutboundLink>
      )}
      {title && <div className="project-item__title text-bold">{title}</div>}
      {description && (
        <div className="project-item__description">{description}</div>
      )}
      {/* id={node.id}
        title={node.title}
        description={node.description}
        url={node.url}
        slug={node.slug}
        space={node.url} */}
      <div className="project-item__links">
        {url && (
          <OutboundLink to={url}>
            <FontAwesomeIcon icon={faLink} />
          </OutboundLink>
        )}
        {github && (
          <OutboundLink to={github}>
            <FontAwesomeIcon icon={faGithub} />
          </OutboundLink>
        )}
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default ProjectItem;
