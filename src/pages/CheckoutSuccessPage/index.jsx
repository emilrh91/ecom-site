import React, { useEffect } from 'react';
import { useCart } from '../../components/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mt-4">
      <h1>Your order was successful!</h1>
      <p>Thank you for your purchase. Your order will be shipped to you soon.</p>
      <button onClick={() => navigate('/')} className="btn btn-primary">Back to Store</button>
    </div>
  );
};

export default CheckoutSuccessPage;