import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from 'linaria';
import Div100vh from 'react-div-100vh';
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
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};

      @media (min-width: ${theme.breakpoints.md}px) {
        display: flex;

        .header-container {
          position: relative;
          width: 40%;
        }

        .main-footer-container {
          width: 60%;
        }
      }
    `,
  };

  return (
    <div className={classes.layout}>
      <Div100vh className="header-container">
        <Header siteTitle={data.site.siteMetadata.title} />
      </Div100vh>
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
