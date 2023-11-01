

import "../Styles/Navbar.css";

function Navbar() {
  return (
    <>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
