/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled, { withTheme } from 'styled-components';
import {
  faHome,
  faEnvelope,
  faUser,
  faEye,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Nav = styled.nav`
  position: fixed;
  z-index: 9999;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 3em;

  #desktop-navbar {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    position: absolute;
    transform: translateX(52%);

    #mobile-navbar {
      display: none;
    }
    #desktop-navbar {
      display: flex;
    }
  }
`;

const Navbar = ({ theme }) => {
  const links = ['', 'projects', 'aboutme', 'contact', 'darkMode'];
  const icons = [faHome, faEye, faUser, faEnvelope, faAdjust];

  return (
    <Nav>
      <DesktopNavbar
        theme={theme}
        links={links.slice(1)}
        icons={icons.slice(1)}
      />
      <MobileNavbar theme={theme} links={links} icons={icons} />
    </Nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Navbar);
