import React from 'react';

import 'animate.css/animate.compat.css';
import {
  faGithub, faLinkedin, faSteam, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OutboundLink from './OutboundLink';

// TODO
// !!!
//!  Add to Contetnful
const links = [
  {
    icon: faLinkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/frankrichardsemakula/',
  },
  {
    icon: faGithub,
    name: 'Github',
    url: 'https://github.com/soirs',
  },
  {
    icon: faEnvelope,
    name: 'Mail',
    url: 'mailto:franksemakula@gmail.com',
  },
  {
    icon: faTwitter,
    name: 'Twitter',
    url: 'https://twitter.com/HappyHoima',
  },

  {
    icon: faSteam,
    name: 'Steam',
    url: 'https://steamcommunity.com/id/dizkosjokoladesnaps/',
  },
];

const SocialLinks = () => (
  <div className="sidebar-links">
    <ul className="icons-list">
      {links.map(({ icon, name, url }) => (
        <li className="icon" key={name}>
          <OutboundLink to={url}>
            <FontAwesomeIcon icon={icon} />
          </OutboundLink>
        </li>
      ))}
    </ul>

    <section className="text-small">
      Built with
      {' '}
      <span
        className="animated pulse faster infinite"
        role="img"
        aria-label="love"
      >
        ❤️
      </span>
      {' '}
      using
      {' '}
      <OutboundLink to="https://gatsbyjs.org/">GatsbyJS</OutboundLink>
      ,
      <span className="social-links__source">
        {' '}
        source code
        {' '}
        <OutboundLink to="https://github.com/soirs/Portfolio-Two-Panel">
          available here
        </OutboundLink>
        .
      </span>
    </section>
  </div>
);

export default SocialLinks;
