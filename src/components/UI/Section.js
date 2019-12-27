import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlighted from './Highlighted';

const Title = styled.h2`
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  padding: 1rem;
  font-size: 1rem;
`;

const Section = ({ children, title, subtitle }) => {
  return (
    <section id={`#${title}`}>
      <Title>
        <Highlighted>{title}</Highlighted>
        <Subtitle>{subtitle}</Subtitle>
      </Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Section;
