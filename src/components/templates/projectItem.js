import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectWrapper = styled.section`
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows[1]};
  border-radius: 4px;
  margin-bottom: 3rem;
  padding: 2rem;
`;

const Image = styled(Img)`
  width: 100%;
`;

const Description = styled.div``;

const ProjectItem = ({ project }) => {
  const { title, image } = project.frontmatter;
  const description = project.html;
  return (
    <ProjectWrapper>
      <Image
        fluid={image.childImageSharp.fluid}
        alt={`${title} project screenshot`}
        imgStyle={{
          objectFit: 'contain',
        }}
      />
      <h2>{title}</h2>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </ProjectWrapper>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
