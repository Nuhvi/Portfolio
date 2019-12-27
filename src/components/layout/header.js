import React from 'react';
import styled from 'styled-components';
import SocialWrapper from '../UI/SocialWrapper';
import NLogoBG from '../../images/NLogoBG.svg';

const Wrapper = styled.header`
  height: 100%;
  position: relative;
  box-shadow: ${(props) => props.theme.shadows[1]};

  display: flex;
  flex-direction: column;

  &::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    opacity: 0.05;
    background-image: url(${NLogoBG});
    background-position: center;
    background-size: 150vh;
    background-repeat: no-repeat;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    position: fixed;
    width: inherit;
  }
`;

const HeaderContainer = styled.div`
  height: 240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {
    font-size: 2rem;
  }

  h1 {
    position: relative;
    font-weight: bold;
    font-size: 4rem;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
    color: ${(props) => props.theme.colors.light};

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      left: -8%;
      top: 1.5%;
      height: 100%;
      width: 116%;
      background-color: #f50000;
      border-radius: 2px;
      transform: rotate(-2deg);
    }
  }

  h2 {
    font-weight: normal;
    font-size: 18px;

    .header__h2--bolder {
      font-weight: bold;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <HeaderContainer>
      <span>Hello, I&apos;m</span>
      <h1>Nazeh</h1>
      <h2>
        A <span className="header__h2--bolder">self-taught</span> web developer
      </h2>
      <SocialWrapper />
    </HeaderContainer>
  </Wrapper>
);

export default Header;
