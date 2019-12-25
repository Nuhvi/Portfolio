import React from 'react';
import { css } from 'linaria';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const classes = {
    footer: css`
      width: 100%;
      font-size: 0.9rem;
      opacity: 0.5;
      text-align: center;
      padding: 1rem 0;
    `,
  };

  return (
    <footer className={classes.footer}>
      <span>
        © {new Date().getFullYear()} {data.site.siteMetadata.author}. Made with{' '}
      </span>
      <a href="https://github.com/Nazeh/Portfolio">Gatsby</a>
    </footer>
  );
};

export default Footer;
