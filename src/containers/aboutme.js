import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../components/Section';
import ResumeButton from '../components/ResumeButton';

const Wrapper = styled.div`
  max-width: 45em;
  margin: auto;
  padding-bottom: 3em;

  text-align: justify;
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
  margin-bottom: 2em;

  h3 {
    font-size: 1em;
    font-weight: bold;
    margin: 2em 0 1em 0;
  }

  p {
    font-size: 0.9em;
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
          }
          html
        }
      }
    }
  `);

  const { frontmatter, html } = aboutMe.childMarkdownRemark;
  const { skills, technologies } = frontmatter;
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
        <ResumeButton />
      </Wrapper>
    </Section>
  );
};

export default Projects;
