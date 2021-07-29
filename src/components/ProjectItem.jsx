import PropTypes from 'prop-types';
import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OutboundLink from './OutboundLink';

const ProjectItem = ({
  color, id, stack, image, url, title, description, github,
}) => (
  <div className="project-item col-xs-12 col-sm-6 col-md-3" id={id}>
    {url && (
    <OutboundLink to={url}>
      <div
        className="project-item__image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: color,
        }}
      />
    </OutboundLink>
    )}

    {title && (
    <OutboundLink to={url}>
      <div className="project-item__title text-bold">{title}</div>
    </OutboundLink>
    )}

    <div className="project-item__links">
      {url && (
        <OutboundLink to={url}>
          <FontAwesomeIcon icon={faLink} size="xs" />
        </OutboundLink>
      )}
      {github && (
        <OutboundLink to={github}>
          <FontAwesomeIcon icon={faGithub} size="xs" />
        </OutboundLink>
      )}
    </div>

    {description && (
    <div className="project-item__description">{description}</div>
    )}

    <ul className="project-item__stack">
      {stack && stack.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

ProjectItem.propTypes = {
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectItem;
