import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  font-size: 0.9rem;
  opacity: 0.5;
  text-align: center;
  padding: 1rem 0;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <span>
        © {new Date().getFullYear()} {data.site.siteMetadata.author}. Made with{' '}
      </span>
      <a href="https://github.com/Nazeh/Portfolio">Gatsby</a>
    </StyledFooter>
  );
};

export default Footer;
