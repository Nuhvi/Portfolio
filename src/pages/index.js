import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <h1>I make websites.</h1>
      <p>
        <a href="/about/">Hello, my name is Max</a>
      </p>
      <div>
        <p>
          I’m front-end developer at{' '}
          <a href="https://www.codista.com">Codista</a>, a software studio in
          Vienna.
          <br></br>I also write about the web on my <a href="/blog">Blog</a> and
          on <a href="https://twitter.com/mxbck">Twitter</a>.
        </p>
      </div>
    </Layout>
  )
}

export default Home
