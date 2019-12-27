import React from 'react';
import styled from 'styled-components';
import SocialWrapper from '../UI/SocialWrapper';
import NLogoBG from '../../images/NLogoBG.svg';
import Highlighted from '../UI/Highlighted';

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
  height: 15em;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1em;
  font-weight: 200;

  > span {
    font-size: 2em;
  }

  h1 {
    font-size: 4em;
    text-align: center;
  }

  h2 {
    font-size: 1.2em;
    line-height: 2em;

    .header__h2--bolder {
      font-weight: 500;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <HeaderContainer>
      <span>Hello, I&apos;m</span>
      <h1>
        <Highlighted>Nazeh</Highlighted>
      </h1>
      <h2>
        A <span className="header__h2--bolder">self-taught</span> web developer
      </h2>
      <SocialWrapper />
    </HeaderContainer>
  </Wrapper>
);

export default Header;
