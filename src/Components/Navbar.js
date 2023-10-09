import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavBar, setExpandNavBar] = useState(false);
  const location = useLocation();

  useEffect(()=>
  {

        setExpandNavBar(false)
  },[location])
  return (
    <div className="navbar" id={expandNavBar ? "open":"close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/experience">EXPERIENCE</Link>
      </div>
    </div>
  );
}

export default Navbar;
