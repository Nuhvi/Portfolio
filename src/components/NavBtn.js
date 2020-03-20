/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated } from 'react-spring';
import styled from 'styled-components';
import useDarkMode from '../utils/use-dark-mode';

const Root = styled(animated.div)`
  display: flex;
  align-items: center;

  border-radius: 50%;
  box-shadow: ${(props) => props.theme.shadows[1]};
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.primary};
  }

  a,
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 50%;
    border: none;
    background-color: inherit;
    color: inherit;
    padding: 0;
    cursor: pointer;
  }
`;

const NavBtn = ({ name, icon, style }) => {
  const darkMode = useDarkMode();

  return (
    <Root style={style}>
      {name === 'darkMode' ? (
        <button
          type="button"
          title="toggle dark mode"
          onClick={() => darkMode.toggle()}
        >
          <FontAwesomeIcon icon={icon} style={{ width: '80%' }} />
        </button>
      ) : (
        <a href={`/#${name.replace(/\s/g, '')}`} title={name}>
          <FontAwesomeIcon icon={icon} style={{ width: '80%' }} />
          <span style={{ fontSize: '0' }}>name</span>
        </a>
      )}
    </Root>
  );
};

NavBtn.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default NavBtn;
