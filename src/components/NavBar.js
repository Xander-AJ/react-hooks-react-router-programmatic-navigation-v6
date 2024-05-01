import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default NavBar;