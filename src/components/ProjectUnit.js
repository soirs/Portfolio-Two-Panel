import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import OutboundLink from './outbound-link';
import './ProjectUnit.scss';

class ProjectUnit extends Component {
  render() {
    const {
      id, url, title, description, github,
    } = this.props;
    return (
      <div className="experience-unit col-xs-12 col-sm-6 col-md-3" id={id}>
        {url && (
          <OutboundLink to={url}>
            <div
              className="image"
              style={
                {
                  // backgroundImage: `url(${this.props.logo})`,
                  // backgroundColor: this.props.colour,
                }
              }
            />
          </OutboundLink>
        )}
        {title && <div className="title bold">{title}</div>}
        {description && <div className="subtitle">{description}</div>}
        {/* id={node.id}
        title={node.title}
        description={node.description}
        url={node.url}
        slug={node.slug}
        space={node.url} */}
        <div className="links">
          {url && (
            <OutboundLink to={url}>
              <FontAwesomeIcon icon={faLink} width="32" />
            </OutboundLink>
          )}
          {github && (
            <OutboundLink to={github}>
              <FontAwesomeIcon icon={faGithub} width="32" />
            </OutboundLink>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectUnit;
