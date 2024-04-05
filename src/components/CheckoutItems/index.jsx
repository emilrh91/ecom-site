import React from "react";
import { useCart } from "../../components/CartContext";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

const CheckoutItems = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const groupedItems = cartItems.reduce((grouped, item) => {
    if (grouped[item.id]) {
      grouped[item.id].count++;
    } else {
      grouped[item.id] = { ...item, count: 1 };
    }
    return grouped;
  }, {});

  const itemsArray = Object.values(groupedItems);

  const totalPrice = itemsArray.reduce(
    (total, item) => total + item.discountedPrice * item.count,
    0
  );

  if (itemsArray.length === 0) {
    return (
      <div className="container mt-4">
        <h1>Checkout Page</h1>
        <p>Your cart is empty. Add some products first!</p>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Checkout Page</h1>
      <ul className="list-group mb-3">
        {itemsArray.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between lh-condensed"
          >
            <div>
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="img-thumbnail product-thumbnail mr-3"
              />
              <h6 className="my-0">{item.title}</h6>
              <small className="text-muted">Quantity: {item.count}</small>
            </div>
            <span className="text-muted">
              ${(item.discountedPrice * item.count).toFixed(2)}
            </span>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </li>
      </ul>
      <div className="d-flex justify-content-between">
      <button onClick={() => navigate('/')} className="btn btn-secondary">Go to Home</button>
    <button onClick={() => navigate('/checkout-success')} className="btn btn-primary">Checkout</button>

</div>
    </div>
  );
};

export default CheckoutItems;
