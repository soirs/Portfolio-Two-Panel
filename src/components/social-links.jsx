/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { faGithub, faLinkedin, faSteam, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OutboundLink from "./outbound-link";

// TODO
// !!!
//!  Add to Contetnful
const links = [
  {
    icon: faLinkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/frankrichardsemakula/",
  },
  {
    icon: faGithub,
    name: "Github",
    url: "https://github.com/soirs",
  },
  {
    icon: faEnvelope,
    name: "Mail",
    url: "mailto:franksemakula@gmail.com",
  },
  {
    icon: faTwitter,
    name: "Twitter",
    url: "https://twitter.com/HappyHoima",
  },

  {
    icon: faSteam,
    name: "Steam",
    url: "https://steamcommunity.com/id/dizkosjokoladesnaps/",
  },
];

const SocialLinks = () => {
  return (
    <div className="sidebar-links">
      <ul className="icons-list">
        {links.map(social => {
          const { icon, name, url } = social;
          return (
            <li className="icon" key={name}>
              <OutboundLink to={url}>
                <FontAwesomeIcon icon={icon} />
              </OutboundLink>
            </li>
          );
        })}
      </ul>
      <br />
      <div className="small">
        Built with
        {" "}
        <span
          className="animatecss animated infinite jello delay-2s"
          role="img"
          aria-label="love"
        >
          ❤️
        </span>
        {" "}
        using
        {' '}
        <OutboundLink to="https://gatsbyjs.org/">GatsbyJS</OutboundLink>
        ,
        <br />
        full source code
        {" "}
        <OutboundLink to="https://github.com/soirs/Portfolio-Two-Panel">
          available here
        </OutboundLink>
        .
      </div>
    </div>
  );
};

export default SocialLinks;
