import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
    </Layout>
  )
}

export default Home
