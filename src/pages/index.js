import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/containers/projects';
import SEO from '../components/utils/seo';
import './main.css';
import 'typeface-montserrat';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Projects />
  </Layout>
);

export default IndexPage;
