import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledResumeButton = styled.a`
  z-index: 999;
  height: 0;
  padding: 1em 0;
  width: 9em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5em;
  border: 2px solid ${(props) => props.theme.colors.red};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  text-transform: capitalize;
  cursor: pointer;

  svg {
    margin-right: 0.5em;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.red};
  }
`;

const ResumeButton = () => {
  const { aboutMe } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "aboutme.md" }) {
        childMarkdownRemark {
          frontmatter {
            resume
          }
        }
      }
    }
  `);
  return (
    <StyledResumeButton
      href={aboutMe.childMarkdownRemark.frontmatter.resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faSave} />
      Resume
    </StyledResumeButton>
  );
};

export default ResumeButton;
