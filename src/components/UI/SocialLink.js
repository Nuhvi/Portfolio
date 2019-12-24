import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'linaria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import themes from '../config/themes';

const SocialLink = ({ href, icon }) => {
  const classes = {
    socialLink: css`
      width: 2em;
      height: 2em;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      border: 2px solid ${themes.dark.palette.highlight};
      transition: background-color 0.15s ease-out 0s;

      &:hover {
        background-color: ${themes.dark.palette.highlight};
        color: ${themes.dark.palette.primary};
      }

      svg {
        font-size: 1em;
      }
    `,
  };

  return (
    <a href={href} className={classes.socialLink}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

SocialLink.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  href: PropTypes.string.isRequired,
};

export default SocialLink;
