import React from 'react'
import Header from '../Header/Header'

const Layout = ({ children, toggleTheme, theme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main style={{ minHeight: '90vh', marginTop: '100px' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;