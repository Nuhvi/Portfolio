import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../components/Section';

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding-bottom: 3em;

  text-align: center;
  line-height: 1.5em;
`;

const About = styled.div`
  p {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }

  strong {
    font-weight: 600;
    color: ${(props) => props.theme.colors.red};
  }
`;

const Others = styled.div`
  text-transform: uppercase;

  h3 {
    font-size: 1em;
    font-weight: bold;
    margin: 2em 0 1em 0;
  }

  p {
    font-size: 0.9em;
  }
`;

const ResumeButton = styled.a`
  height: 2em;
  width: 9em;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  border-radius: 1.5em;
  border: 2px solid ${(props) => props.theme.colors.red};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  text-transform: capitalize;

  svg {
    margin-right: 0.5em;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.red};
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
            publications
            resume
          }
          html
        }
      }
    }
  `);

  const { frontmatter, html } = aboutMe.childMarkdownRemark;
  const { skills, technologies, resume } = frontmatter;
  const publications = frontmatter.publications.split(',');

  return (
    <Section title="about me" subtitle="Get to know me.">
      <Wrapper>
        <About dangerouslySetInnerHTML={{ __html: html }} />
        <Others>
          <h3>Skills</h3>
          <p>{skills}</p>
          <h3>Technologies</h3>
          <p>{technologies}</p>
          <h3>Publications</h3>
          {publications.map((publication) => {
            const [title, link] = publication.split(':::');
            return (
              <a
                href={link}
                key={title}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'normal' }}
              >
                {title}
              </a>
            );
          })}
        </Others>
        <ResumeButton href={resume} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSave} />
          Resume
        </ResumeButton>
      </Wrapper>
    </Section>
  );
};

export default Projects;
