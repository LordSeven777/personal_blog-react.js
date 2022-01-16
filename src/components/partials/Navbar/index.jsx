import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

import Toggle from "./Toggle";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const linksOverlayClassNames = `links-overlay${toggled ? " toggled" : ""}`;

  // Toggle click handler
  const handleToggleClick = () => setToggled(!toggled);
  console.log(linksOverlayClassNames);

  return (
    <header id="navbar">
      <nav>
        <NavLink to="/" id="logo">
          ToolBLOG
        </NavLink>
        <div className={linksOverlayClassNames}>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" activeClassName="active">
                Catégories
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" activeClassName="active">
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/a-propos" activeClassName="active">
                A-propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacter" activeClassName="active">
                Contacter
              </NavLink>
            </li>
            <li className="to-login">
              <NavLink to="/login">
                <FontAwesomeIcon icon="lock" className="ml-2" />
                Se connecter
              </NavLink>
            </li>
          </ul>
        </div>
        <Toggle toggled={toggled} onClick={handleToggleClick} />
      </nav>
    </header>
  );
};

export default Navbar;
