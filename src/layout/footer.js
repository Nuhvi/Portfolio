import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import NLogoFooter from '../images/NLogoFooter.svg';

const StyledFooter = styled.footer`
  width: 100%;
  font-size: 0.8em;
  opacity: 0.5;
  text-align: center;
  padding: 2em 0;

  text-transform: uppercase;

  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.img`
  background-color: ${(props) => props.theme.colors.secondary};
  mask: url(${(props) => props.svgSrc}) no-repeat center;
  mask-size: contain;

  height: 100px;
  margin-bottom: 1em;

  opacity: 0.5;
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
      <FooterLogo svgSrc={NLogoFooter} />
      copyright © {new Date().getFullYear()}, {data.site.siteMetadata.author}
    </StyledFooter>
  );
};

export default Footer;
