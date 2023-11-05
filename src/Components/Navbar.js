import "../Styles/Navbar.css";
import Cred from "../Components/Cred";
var iscollapsed = true;
function Navbar() {
  function collapseUnCollapseMenu(identif) {
    const screenWidth = window.screen.width;

    const menu = document.getElementById("menu-list");
    if (screenWidth < 500) {
      if (identif == "menu-list") {
        menu.style.height = 0;
        iscollapsed = true;
      }
      if (identif == "hamburger" && iscollapsed == true) {
        menu.style.height = "35vh";
        iscollapsed = false;
      } else if (identif == "hamburger" && iscollapsed == false) {
        menu.style.height = 0;
        iscollapsed = true;
      }
    }
  }
  return (
    <>
      <nav className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">Vaibhav</div>
          <Cred />
        </div>
        <div
          className="nav-btn"
          id="hamburger"
          onClick={() => {
            collapseUnCollapseMenu("hamburger");
          }}
        >
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-list" id="menu-list">
          <ul>
            <li>
              <a
                onClick={() => {
                  collapseUnCollapseMenu("menu-list");
                }}
                href="#home"
              >
                Home
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  collapseUnCollapseMenu("menu-list");
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  collapseUnCollapseMenu("menu-list");
                }}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  collapseUnCollapseMenu("menu-list");
                }}
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  collapseUnCollapseMenu("menu-list");
                }}
                href="#portfolio"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  collapseUnCollapseMenu("menu-list");
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
