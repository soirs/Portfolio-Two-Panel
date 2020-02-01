/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { faGithub, faLinkedin, faSteam, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="sidebar-links">
      <ul className="icons-list">
        <li className="icon">
          <a
            href="https://github.com/soirs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="icon">
          <a
            href="https://www.twitter.com/HappyHoima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="icon">
          <a
            href="https://www.linkedin.com/in/frankrichardsemakula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="icon">
          <a
            href="https://steamcommunity.com/id/dizkosjokoladesnaps/"
            ta
            rget="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSteam} />
          </a>
        </li>
        <li className="icon">
          <a
            href="mailto:franksemakula@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
      <br />
      <div className="small">
        Built with
        {" "}
        <span className="animatecss animated infinite jello delay-2s" role="img" aria-label="love">
          ❤️
        </span>
        {" "}
        using
        {" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GatsbyJS
        </a>
        ,
        <br />
        full source code
        {" "}
        <a
          href="https://github.com/soirs/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          available here
        </a>
        .
      </div>
    </div>
  );
};

export default SocialLinks;
