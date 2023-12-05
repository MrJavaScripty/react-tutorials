// Cart.js

import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCartContext();

  if (cart.length === 0) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
        <a href="/">Continue shopping</a>
      </div>
    );
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            {item.name} - ${item.price}{" "}
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item, e.target.value)}
            />{" "}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
