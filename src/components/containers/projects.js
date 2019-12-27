import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from '../templates/projectItem';
import SectionHeading from '../UI/SectionHeading';

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
    <section>
      <SectionHeading>Portfolio</SectionHeading>

      {projects.edges.map((item, index) => (
        <ProjectItem
          key={item.node.id}
          index={index}
          project={item.node.childMarkdownRemark}
        />
      ))}
    </section>
  );
};

export default Projects;
