 
import { useState } from "react";

function Cart({ cartItems, removeFromCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    setOrderPlaced(true);
    alert("Order Placed Successfully!");
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <p>Qty: {item.quantity}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button onClick={placeOrder}>
            Place Order
          </button>

          {orderPlaced && (
            <p style={{ color: "green" }}>
              Order placed successfully!
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;