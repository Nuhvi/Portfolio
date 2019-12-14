import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from 'linaria';
import Header from './header';
import themes from './config/themes';

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
      background-color: ${themes.dark.palette.main};
    `,
  };

  return (
    <div className={classes.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
