import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Highlighted from './Highlighted';

const Heading = styled.h2`
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
`;

const SectionHeading = ({ children }) => {
  return (
    <Heading>
      <Highlighted>{children}</Highlighted>
    </Heading>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionHeading;
