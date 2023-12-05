import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductList from "./pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    /** This is a shared layout. It will render the children ( /cart, /checkout and / )
     *  via an <Outlet /> component provided by react-router-dom.
     *  Read this: https://chat.openai.com/share/10933774-360d-4269-9f36-f77ad45f8cae
     * */
    element: <MainLayout />,
    children: [
      // Props aren't passed because these are route components
      // There is no need to raise the state to the App component as in the original tutorial
      // If you raise state you could be polluting another component's state (putting state where it doesn't belong)
      { index: true, element: <ProductList /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
