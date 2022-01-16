import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="main">
          <div className="logo">ToolBLOG</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/categories">Catégories</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/a-propos">A-propos</Link>
              </li>
              <li>
                <Link to="/contacter">Contacter</Link>
              </li>
            </ul>
          </nav>
          <ul className="contacts">
            <li>
              <FontAwesomeIcon icon="at" className="ml-2" />
              tolotor@yahoofr
            </li>
            <li>
              <FontAwesomeIcon icon="phone" className="ml-2" />
              +261 34 60 151 14
            </li>
          </ul>
        </div>
        <div className="author">
          <strong>© RABEFALY Tolojanahary Fenomanantsoa - IGGLIA3 - ISPM</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
