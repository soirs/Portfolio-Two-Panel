import { faGithub, faLinkedin, faSteam, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './Links.scss';

class Links extends Component {
  render() {
    return (
      <div className="sidebar-links">
        <ul className="icons-list">
          <li className="icon">
            <a
              href="https://github.com/soirs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} width="22" />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://www.twitter.com/HappyHoima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} width="22" />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://www.linkedin.com/in/frankrichardsemakula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} width="22" />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://steamcommunity.com/id/dizkosjokoladesnaps/"
              ta
              rget="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSteam} width="22" />
            </a>
          </li>
          <li className="icon">
            <a
              href="mailto:franksemakula@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} width="22" />
            </a>
          </li>
        </ul>
        {/*  <div className="small">
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          using{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>
          , full source code{" "}
          <a
            href="https://github.com/soirs/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            available here
          </a>
          .
        </div> */}
      </div>
    );
  }
}

export default Links;
