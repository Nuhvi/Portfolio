import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from '../templates/projectItem';

const Projects = () => {
  const { allFile: projects } = useStaticQuery(graphql`
    query SiteProjectsQuery {
      allFile(
        sort: { fields: [dir], order: DESC }
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: {}
          relativeDirectory: { regex: "content/projects/" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                live
                source
                stack
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    }
  `);
  return (
    <>
      {projects.edges.map((item) => (
        <ProjectItem
          key={item.node.id}
          project={item.node.childMarkdownRemark}
        />
      ))}
    </>
  );
};

export default Projects;
