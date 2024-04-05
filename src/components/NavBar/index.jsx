import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartIcon from '../CartIcon';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <CartIcon />
    </NavWrapper>
  );
};

export default NavBar;
