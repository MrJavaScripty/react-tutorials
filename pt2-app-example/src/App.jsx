import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./app/layout";
import Home from "./app/page";
import "./styles/global.css";

const router = createBrowserRouter([
 {
  path: "/",
  element: <AppLayout />,
  children: [
   {
    index: true,
    element: <Home />
   }
  ]
 }
]);

function App() {
 return <RouterProvider router={router} />;
}

export default App;
