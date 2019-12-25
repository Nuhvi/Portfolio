import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../config/theme';

const StyledSocialLink = styled.a`
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid ${theme.colors.highlight};
  transition: background-color 0.15s ease-out 0s;

  &:hover {
    background-color: ${theme.colors.highlight};
    color: ${theme.colors.primary};
  }

  svg {
    font-size: 1em;
  }
`;

const SocialLink = ({ href, icon }) => {
  return (
    <StyledSocialLink href={href}>
      <FontAwesomeIcon icon={icon} />
    </StyledSocialLink>
  );
};

SocialLink.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  href: PropTypes.string.isRequired,
};

export default SocialLink;
