/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialLink from './SocialLink';

const StyledSocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.2em;
  z-index: 50;

  width: 100%;
  margin: 0 auto;
`;

const SocialWrapper = ({ style }) => {
  const { site } = useStaticQuery(graphql`
    query SiteSocialQuery {
      site {
        siteMetadata {
          social {
            email
            github
            linkedin
            twitter
          }
        }
      }
    }
  `);

  const socialLinks = site.siteMetadata.social;
  return (
    <StyledSocialWrapper style={style}>
      <SocialLink href={`mailto:${socialLinks.email}`} icon={faEnvelope} />
      <SocialLink href={`//github.com/${socialLinks.github}`} icon={faGithub} />
      <SocialLink
        href={`//linkedin.com/in/${socialLinks.linkedin}`}
        icon={faLinkedinIn}
      />
      <SocialLink
        href={`//twitter.com/${socialLinks.twitter}`}
        icon={faTwitter}
      />
    </StyledSocialWrapper>
  );
};

SocialWrapper.propTypes = {
  style: PropTypes.object.isRequired,
};

export default SocialWrapper;
