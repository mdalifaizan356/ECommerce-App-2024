import React from 'react'
import Layout from './../../Components/Layout/Layout/Layout';

const Home = ({ toggleTheme, theme }) => {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <div>Home</div>
    </Layout>
  );
}

export default Home;