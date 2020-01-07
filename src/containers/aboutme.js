import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../components/Section';

const Wrapper = styled.div`
  margin: auto;
  padding-bottom: 3em;

  text-align: center;
  line-height: 1.5em;
`;

const About = styled.div`
  p {
    margin: 1em 0;
  }

  span {
    font-weight: bold;
  }
`;

const Skills = styled.div`
  text-transform: uppercase;

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    margin: 2em 0 1em 0;
  }

  p {
  }
`;

const Projects = () => {
  const { aboutMe } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "aboutme.md" }) {
        childMarkdownRemark {
          frontmatter {
            skills
            technologies
          }
          html
        }
      }
    }
  `);

  const { frontmatter, html } = aboutMe.childMarkdownRemark;
  const { skills, technologies } = frontmatter;

  return (
    <Section title="about me" subtitle="Get to know me.">
      <Wrapper>
        <About dangerouslySetInnerHTML={{ __html: html }} />
        <Skills>
          <h3>Skills</h3>
          <p>{skills}</p>
          <h3>Technologies</h3>
          <p>{technologies}</p>
        </Skills>
      </Wrapper>
    </Section>
  );
};

export default Projects;
