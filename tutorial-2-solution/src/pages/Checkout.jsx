// Checkout.js
import React from "react";
import { useCartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCartContext();

  // e is the event object, cart is the cart array
  // This function will be called when the form is submitted.
  const handleCheckout = (e, cart) => {
    e.preventDefault();

    // We can use the built-in browser FormData API to get the value of the selected date field.
    const formData = new FormData(e.target);
    const date = formData.get("selected-date");

    if (date) {
      console.log(`Checkout confirmed for ${date}!`);
      console.log("Cart: ", cart);

      clearCart();
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={(e) => handleCheckout(e, cart)}>
        <label>
          Select a date:
          <input name="selected-date" type="date" />
        </label>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
