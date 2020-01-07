/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { useTrail, animated } from 'react-spring';
import NavBtn from './NavBtn';

const Container = styled.div`
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

const DesktopNavbar = ({ theme, links, icons }) => {
  const defaultStyle = {
    margin: '1em',
    width: '16.1px',
    height: '16.1px',
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
    <Container
      id="desktop-navbar"
      onMouseEnter={(e) => {
        if (e.target.tagName === 'path') return;
        set({
          width: '40px',
          height: '40px',
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
    </Container>
  );
};

DesktopNavbar.propTypes = {
  theme: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
};

export default withTheme(DesktopNavbar);
