import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectWrapper = styled.article`
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows[1]};
  border-radius: 4px;
  margin-bottom: 3rem;
  padding: 1.5rem;
  transition: 0.1s ease-in-out;

  font-size: 1;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.shadows[7]};
  }
`;

const Title = styled.h3`
  font-weight: 500;
  margin: 0.5em 0;
  text-transform: capitalize;
`;

const Stack = styled.h4`
  font-size: 0.7em;
`;

const Image = styled(Img)`
  width: 100%;
`;

const Description = styled.div`
  display: none;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Link = styled.a`
  font-weight: normal;

  &:hover {
    font-weight: 500;
  }
`;

const ProjectItem = ({ project, index }) => {
  const { title, stack, source, live, image } = project.frontmatter;
  const description = project.html;
  return (
    <ProjectWrapper>
      <Row>
        <span>{`.0${index + 1}`}</span>
        <Link href={source} target="_blank">
          <FontAwesomeIcon icon={faGithubAlt} /> Source
        </Link>
      </Row>
      <Image
        fluid={image.childImageSharp.fluid}
        alt={`${title} project screenshot`}
        imgStyle={{
          objectFit: 'contain',
        }}
      />
      <Row>
        <span>
          <Title>{title}</Title>
          <Stack>{stack}</Stack>
        </span>
        <Link href={live} target="_blank">
          <FontAwesomeIcon icon={faLink} /> Demo
        </Link>
      </Row>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </ProjectWrapper>
  );
};

ProjectItem.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      live: PropTypes.string.isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}).isRequired,
        }),
      }).isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
