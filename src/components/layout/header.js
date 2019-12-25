import React from 'react';
import { css } from 'linaria';
import SocialWrapper from '../UI/SocialWrapper';
import NLogoBG from '../../images/NLogoBG.svg';
import theme from '../config/theme';

const classes = {
  header: css`
    height: 100%;
    position: relative;
    box-shadow: ${theme.shadows[1]};

    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.md}px) {
      position: fixed;
      width: inherit;
    }

    &::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      opacity: 0.1;
      background-image: url(${NLogoBG});
      background-position: center;
      background-size: 150vh;
      background-repeat: no-repeat;
    }

    .header__container {
      height: 240px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .header__greeting {
      font-size: 2rem;
    }

    h1 {
      font-weight: 300;
      font-size: 2rem;
      text-align: center;

      .header__name {
        position: relative;
        font-size: 2em;
        font-weight: bold;
        text-transform: uppercase;
        z-index: 1;

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
    }

    h2 {
      font-weight: normal;
      font-size: 18px;

      .header__h2--bolder {
        font-weight: bold;
      }
    }
  `,
};

const Header = () => (
  <header className={classes.header}>
    <div className="header__container">
      <span className="header__greeting">Hello, I&apos;m</span>
      <h1>
        <span className="header__name">Nazeh</span>
      </h1>
      <h2>
        A <span className="header__h2--bolder">self-taught</span> web developer
      </h2>
      <SocialWrapper />
    </div>
  </header>
);

export default Header;
