import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from './../../Components/Layout/Layout/Layout';
import Product from '../Product/Product'; 

const Home = () => {
  return (
    <Layout>
    <Product/>
    </Layout>
  );
}

export default Home;