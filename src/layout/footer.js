import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  font-size: 1em;
  opacity: 0.5;
  text-align: center;
  padding: 1em 0;

  text-transform: uppercase;
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
      copyright © {new Date().getFullYear()}, {data.site.siteMetadata.author}
    </StyledFooter>
  );
};

export default Footer;
