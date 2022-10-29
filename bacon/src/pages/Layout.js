import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/bacon">Bacon</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;