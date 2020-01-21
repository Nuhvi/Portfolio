import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const ResumeButton = styled.a`
  height: 3em;
  width: 10em;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  border-radius: 1.5em;
  background-color: ${(props) => props.theme.colors.red};
  text-transform: capitalize;
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
        <Skills>
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
          <ResumeButton href={resume} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSave} style={{ marginRight: '0.5em' }} />
            Resume
          </ResumeButton>
        </Skills>
      </Wrapper>
    </Section>
  );
};

export default Projects;
