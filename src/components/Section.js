import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlighted from './Highlighted';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 50ch;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}px) {
    max-width: ${(props) => props.theme.breakpoints.xl}px;
  }
`;

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
    <Wrapper id={title.replace(/\s/g, '')}>
      <Title>
        <Highlighted>{title}</Highlighted>
        <Subtitle>{subtitle}</Subtitle>
      </Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Section;
