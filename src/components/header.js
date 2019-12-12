import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { css } from 'linaria';

const classes = {
  header: css`
    background: 'rebeccapurple';
    margin-bottom: '1.45rem';
  `,
};

const Header = ({ siteTitle }) => (
  <header className={classes.header}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
