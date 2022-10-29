import { Outlet, Link } from "react-router-dom";
import '/usr/share/caddy/CreativeProject3/bacon/src/App.css';


const Layout = () => {
  return (
    <>
<nav class="navbar navbar-fixed-top navbar-expand-sm bg-light">
<div class="container-fluid">
<ul class="navbar-nav">
<li class="nav-item">
<Link class="nav-link" to="/">Home</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/bacon">Bacon</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/about">About Us</Link>
</li>
</ul>
</div>
</nav>

<Outlet />
</>)
};

export default Layout;
