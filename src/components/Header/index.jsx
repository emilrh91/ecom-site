import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #eee;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar /> 
    </HeaderWrapper>
  );
};

export default Header;
