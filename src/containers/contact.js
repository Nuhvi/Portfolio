import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

const Wrapper = styled.div`
  margin: auto;
  width: 400px;
`;

const Email = styled.a`
  display: block;
  font-weight: normal;
  text-align: center;
  font-size: 2em;
`;

const Projects = () => {
  return (
    <Section
      title="contact"
      subtitle="If you are interested in a new project, collaboration, or discussing a new idea don't hesitate to send me an email."
    >
      <Wrapper>
        <Email href="mailto:hello@nazeh.me">hello@nazeh.me</Email>
      </Wrapper>
    </Section>
  );
};

export default Projects;
