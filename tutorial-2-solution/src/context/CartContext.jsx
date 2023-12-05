import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

/**
 * A "Context" is a piece of shared data that will be shared with all it's children.
 * It's a way to avoid "prop drilling", or passing props down to components that don't need them.
 */
export const CartContext = createContext({
  cart: null,
  addToCart: (product) => void 0,
  removeFromCart: (product) => void 0,
  updateQuantity: (product, newQuantity) => void 0,
  clearCart: () => void 0,
});

// For every context, we need to create a "Provider" component.
// This component will be used to wrap all the components that need access to the context.
const CartProvider = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // We can use the "currentCart" variable to access the current value of the cart.
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((currentCart) => {
      const updatedCart = [...currentCart];
      const productIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );
      updatedCart.splice(productIndex, 1);
      return updatedCart;
    });
  };

  const updateQuantity = (product, newQuantity) => {
    setCart((currentCart) => {
      const updatedCart = [...currentCart];
      const productIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );
      updatedCart[productIndex].quantity = newQuantity;
      return updatedCart;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      // The value prop is where we define what values our context will provide.
      // We can pass any value here, but it's recommended to pass an object.
      // This way, we can easily add more values to the context in the future.
      // We can also pass functions, like we did with the "addToCart" function.
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      <Outlet />
    </CartContext.Provider>
  );
};

// This is a custom hook that will be used to consume the context.
export const useCartContext = () => {
  // useContext is a hook that will return the current values for the given context.
  const context = useContext(CartContext);

  // If the context doesn't exist, it means that the hook is being used outside of a CartProvider.
  if (!context) {
    throw new Error(
      "useCartContext must be used within a CartProvider. Wrap a parent component in <CartProvider> to fix this error."
    );
  }
  return context;
};

export default CartProvider;
