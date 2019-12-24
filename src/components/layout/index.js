import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from 'linaria';
import Header from './header';
import Footer from './footer';
import themes from '../config/themes';

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
      display: grid;
      grid-template-columns: 40% 60%;

      background-color: ${themes.dark.palette.primary};
      color: ${themes.dark.palette.secondary};
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
