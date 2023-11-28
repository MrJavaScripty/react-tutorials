import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const AppLayout = () => {
 return (
  <main>
   <nav className="main-navigation">
    <Link to="/" className="logo">
     What-Todo
    </Link>
    <div>
     {/* <Link to="/create-todo">
      <PlusIcon />
      <span>New Todo</span>
     </Link> */}
    </div>
   </nav>
   <div className="content">
    <Outlet />
   </div>
  </main>
 );
};

export default AppLayout;
