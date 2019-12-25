import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import theme from '../config/theme';

const Wrapper = styled.div`
  position: relative;
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
`;

const LoadingScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: ${theme.colors.primary};

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  animation: fade-out 0.1s ease-out 0.5s both;
`;

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

  return (
    <Wrapper>
      <LoadingScreen />
      <Div100vh className="header-container">
        <Header siteTitle={data.site.siteMetadata.title} />
      </Div100vh>
      <div className="main-footer-container">
        <main>{children}</main>
        <Footer />
      </div>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
