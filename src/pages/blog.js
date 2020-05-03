import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageheader'
import PageContent from '../components/pagecontent'
import Postmeta from '../components/postmeta'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <PageHeader title="writing" />
      <PageContent>
        <ol start={posts.length} reversed>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <li key={node.fields.slug}>
                <header>
                  <h2>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h2>
                  <Postmeta metadata={node.frontmatter} />
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </li>
            )
          })}
        </ol>
      </PageContent>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
