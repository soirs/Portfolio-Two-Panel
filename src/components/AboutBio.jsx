import PropTypes from 'prop-types';
import React from 'react';

const AboutBio = ({
  header,
  currentlyLookingMessage,
  biotext,
  outroMessage,
  emojiOutroMessage,
  contactMe,
}) => (
  <article className="about__bio">
    <h4>{header}</h4>
    <p>
      <span>
        <br />
        {currentlyLookingMessage}
        <br className="utility-linebreak" />
        {' '}
        <a href="mailto:franksemakula@gmail.dk?subject=Hello%20Frank!">
          {contactMe}
        </a>
      </span>
      <br />
      <br />
      <span>{biotext}</span>
      <br />
      <br />
      <span>
        {outroMessage}
        <br />
        <br />
        <span
          className="about__bio--emoji animated zoomIn slower"
          role="img"
          aria-label="ending emoji's"
        >
          {emojiOutroMessage}
        </span>
      </span>
    </p>
  </article>
);

AboutBio.propTypes = {
  header: PropTypes.string.isRequired,
  currentlyLookingMessage: PropTypes.string.isRequired,
  contactMe: PropTypes.string.isRequired,
  biotext: PropTypes.string.isRequired,
  outroMessage: PropTypes.string.isRequired,
  emojiOutroMessage: PropTypes.string.isRequired,
};

export default AboutBio;
