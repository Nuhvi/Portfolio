import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import { darkTheme, lightTheme } from '../config/themes';
import { storeDarkMode, isDarkMode } from '../utils/dark-mode-persist';

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
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
  background: ${(props) => props.theme.colors.primary};

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

  const [darkMode, setDarkMode] = useState(isDarkMode());

  const switchMode = () => {
    setDarkMode(!darkMode);
    storeDarkMode(darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <LoadingScreen />
        <Div100vh className="header-container">
          <Header siteTitle={data.site.siteMetadata.title} />
        </Div100vh>
        <div className="main-footer-container">
          <main>{children}</main>
          <Footer />
          <input type="button" onClick={switchMode} />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
