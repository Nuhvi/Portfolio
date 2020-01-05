import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlighted from './Highlighted';

const Title = styled.h2`
  text-align: center;
  padding: 2em;
  font-size: 1.5em;
`;

const Subtitle = styled.p`
  margin: auto;
  margin-top: 1em;
  font-size: 0.7em;
  line-height: 1.2em;
  opacity: 0.7;
`;

const Section = ({ children, title, subtitle }) => {
  return (
    <section id={title}>
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
