import React from 'react';
import { css } from 'linaria';
import themes from './config/themes';

const classes = {
  header: css`
    width: 40%;
    height: 100%;
    color: ${themes.dark.fontColor.primary};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 300;
      font-size: 2rem;

      span {
        display: block;
        margin-bottom: 1.2rem;
      }

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
      margin-top: 1.2rem;

      .header__h2--bolder {
        font-weight: bold;
      }
    }
  `,
};

const Header = () => (
  <>
    <header className={classes.header}>
      <h1>
        <span>Hello, I&apos;m</span>
        <span className="header__name">Nazeh</span>
      </h1>
      <h2>
        A <span className="header__h2--bolder">self-taught</span> web developer
      </h2>
    </header>
  </>
);

export default Header;
