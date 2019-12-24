import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { css } from 'linaria';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialLink from './SocialLink';

const classes = {
  socialWrapper: css`
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    z-index: 50;
  `,
};

const SocialWrapper = () => {
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
    <div className={classes.socialWrapper}>
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
    </div>
  );
};

export default SocialWrapper;
