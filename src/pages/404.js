import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageheader'
import PageContent from '../components/pagecontent'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Page Not Found" />
      <PageHeader title="Hmmm" subtitle="Doesn't look like Anything to Me!" />
      <PageContent>
        <p>
          Maybe you made a typo, maybe I moved some content and broke that link!
          Or maybe, just maybe, you are curious if I made a custom 404 page!
        </p>

        <p>
          Well I did! now let's get you back <a href="/">home</a>, it's not safe
          here!
        </p>
      </PageContent>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
