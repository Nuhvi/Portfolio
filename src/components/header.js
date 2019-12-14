import React from 'react';
import { css } from 'linaria';
import themes from './config/themes';

const classes = {
  header: css`
    width: 40%;
    height: 100%;
    padding: 55px;
    color: ${themes.dark.fontColor.main};

    @media (max-width: 992px) {
      width: 100%;
      height: 750px;
    }
  `,
};

const Header = () => (
  <header className={classes.header}>
    <h1>
      <p>Hi,</p>
      <p>
        I&apos;m <span>Nazeh</span>
      </p>
      <p>web developer.</p>
    </h1>
    <p>Coming soon.</p>
    <p>
      Check out my <a href="https://github.com/nazeh">Github</a> page.
    </p>
    <p>
      Contact me at: <a href="mailto:hello@nazeh.me">hello@nazeh.me</a>.
    </p>
  </header>
);

export default Header;
