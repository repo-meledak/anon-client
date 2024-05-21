import { useNavigate } from "react-router-dom";
import "../components/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("access_token");
    navigate("/login");
  }

  return (
    <nav className="navbar d-flex justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button
            className="btn btn-light logout-button"
            onClick={handleLogout}
          >
            Logout
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
