import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from 'linaria';
import Header from './header';
import Footer from './footer';
import theme from '../config/theme';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const classes = {
    layout: css`
      height: 100%;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};

      display: grid;
      grid-template-columns: 2fr 3fr;

      @media (max-width: ${theme.breakpoints.md}px) {
        height: auto;
        display: flex;
        flex-direction: column;
      }
    `,
  };

  return (
    <div className={classes.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main-footer-container">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
