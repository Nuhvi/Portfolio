import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from '../templates/projectItem';
import Section from '../UI/Section';

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
                    fluid(maxWidth: 1600, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
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
    <Section title="projects" subtitle="Check out my latest work">
      {projects.edges.map((item, index) => (
        <ProjectItem
          key={item.node.id}
          index={index}
          project={item.node.childMarkdownRemark}
        />
      ))}
    </Section>
  );
};

export default Projects;
