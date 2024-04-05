import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import './index.css'; 
import { useCart } from '../CartContext'; 
import { useNavigate } from 'react-router-dom'; 

const ItemCount = styled.span`
  font-size: 1.2em;
  vertical-align: middle; 
`;

const CartButton = ({ itemCount }) => {
  const navigate = useNavigate();
  return (
    <button 
      className="CartButton"
      onClick={() => navigate('/checkout')}
    >
      <div className="CartButtonContent"> 
        <ShoppingCartIcon />
        <ItemCount>{itemCount}</ItemCount>
      </div>
    </button>
  );
};

const CartIcon = () => {
  const { cartItems } = useCart(); 
  return (
    <CartButton itemCount={cartItems.length} />
  );
};

export default CartIcon;