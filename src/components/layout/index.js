import React from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';
import styled, { ThemeProvider } from 'styled-components';
import useDarkMode from '../utils/use-dark-mode';
import Header from './header';
import Footer from './footer';
import { darkTheme, lightTheme } from '../config/themes';

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  .main-footer-container {
    background-color: ${(props) => props.theme.colors.darker};
    padding: 0 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 0.85em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    display: flex;

    .header-container {
      position: relative;
      width: 35%;
    }

    .main-footer-container {
      width: 65%;
      padding: 0 1.5rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}px) {
    font-size: 1.5em;
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
  const darkMode = useDarkMode();

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Wrapper>
        <LoadingScreen />
        <Div100vh className="header-container">
          <Header />
        </Div100vh>
        <div className="main-footer-container">
          <main>{children}</main>
          <Footer />
          <input type="button" onClick={darkMode.toggle} />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
