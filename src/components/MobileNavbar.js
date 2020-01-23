/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';
import NavBtn from './NavBtn';
import Logo from '../images/NLogo.png';

const Container = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBackground = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows[2]};

  transition: 0.2s ease-in-out;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 99999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavRedLine = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 0.25em;

  top: 0;

  background-color: ${(props) => props.theme.colors.red};
  border-radius: 0.35em;
`;

const NavBtnWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileNavToggle = styled.button`
  margin-top: 1em;
  z-index: 99999;

  padding: 1.2em;

  border-radius: 50%;
  background-image: url(${(props) => props.icon});
  background-size: 102%;
  background-position: 50%;

  border: 2px solid ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.shadows[1]};
`;

const MobileNavbar = ({ theme, links, icons }) => {
  const [toggle, setToggle] = useState(false);

  const openStyle = {
    width: toggle ? '2.5em' : '0em',
    height: toggle ? '2.5em' : '0em',
    margin: toggle ? '1.5em' : '0em',
    paddingTop: toggle ? '250%' : '0%',
    opacity: toggle ? 1 : 0,
    border: toggle
      ? `2px solid ${theme.colors.red}`
      : `0px solid ${theme.colors.primary}`,
  };

  const trail = useTrail(links.length, {
    config: { mass: 0.6, tension: 600, friction: 26 },
    ...openStyle,
    from: { margin: '0em' },
  });

  return (
    <Container id="mobile-navbar" onMouseLeave={() => setToggle(false)}>
      <MobileNavToggle
        type="button"
        onClick={() => setToggle(!toggle)}
        icon={Logo}
        aria-label="Menu Toggle"
      />
      <NavBackground style={{ opacity: openStyle.opacity }} />
      <Wrapper style={{ paddingTop: openStyle.paddingTop }}>
        <NavRedLine />
        {trail.map((style, index) => (
          <NavBtnWrapper
            style={{ margin: style.margin, opacity: style.opacity }}
            key={links[index]}
          >
            <NavBtn
              style={{
                width: style.width,
                height: style.height,
                border: style.border,
              }}
              name={links[index]}
              icon={icons[index]}
            />
          </NavBtnWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

MobileNavbar.propTypes = {
  theme: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
};

export default MobileNavbar;
