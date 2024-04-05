import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 60px; 
`;

const Layout = ({ children }) => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <Main className="flex-fill">
      {children}
    </Main>
    <Footer />
  </div>
);

export default Layout;