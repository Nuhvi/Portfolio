import React from 'react';
import Layout from '../layout';
import Projects from '../containers/projects';
import SEO from '../utils/seo';
import './main.css';
import 'typeface-montserrat';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Projects />
  </Layout>
);

export default IndexPage;
