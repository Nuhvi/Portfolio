/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import {
  faEnvelope,
  faUser,
  faEye,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import { useTrail, animated } from 'react-spring';
import NavBtn from './NavBtn';

const Nav = styled.nav`
  position: fixed;
  z-index: 9999;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 3em;

  position: absolute;
  transform: translateX(52%);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 230px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavRedLine = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 0.35em;

  width: 0.25em;
`;

const NavBtnWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = ({ theme }) => {
  const links = ['projects', 'about', 'contact', 'darkMode'];
  const icons = [faEye, faUser, faEnvelope, faAdjust];

  const defaultStyle = {
    margin: '1em',
    width: '0em',
    height: '0em',
    border: `8px solid ${theme.colors.red}`,
  };

  const [trail, set] = useTrail(links.length, () => ({
    config: { mass: 0.8, tension: 500, friction: 26 },
    ...defaultStyle,
    from: {
      margin: '0em',
    },
  }));

  return (
    <Nav id="desktop-navbar">
      <Wrapper
        onMouseEnter={() => {
          set({
            width: '2.5em',
            height: '2.5em',
            margin: '0.25em',
            border: `2px solid ${theme.colors.red}`,
          });
        }}
        onMouseLeave={() => {
          set(defaultStyle);
        }}
      >
        <NavRedLine />
        {trail.map((style, index) => (
          <NavBtnWrapper style={{ margin: style.margin }} key={links[index]}>
            <NavBtn
              style={{ ...style, margin: 0 }}
              name={links[index]}
              icon={icons[index]}
            />
          </NavBtnWrapper>
        ))}
      </Wrapper>
    </Nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Navbar);
