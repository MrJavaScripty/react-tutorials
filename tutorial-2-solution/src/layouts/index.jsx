import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartProvider from "../context/CartContext";

const MainLayout = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ username: "exampleUser" });
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <div>
          {!isLoggedIn ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <div>
              Welcome, {user && user.username}!{" "}
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
      {/* Since all the children of the MainLayout are going to need access to the cart
       * we need to wrap them in the CartProvider.
       * This way, all the components rendered by <Outlet/> will have access to our cart context.
       */}
      <CartProvider>
        <Outlet />
      </CartProvider>
    </div>
  );
};

export default MainLayout;
