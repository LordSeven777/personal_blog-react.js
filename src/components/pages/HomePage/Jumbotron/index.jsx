import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import mandinika from "../../../../assets/images/mandinika.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${mandinika})` }}>
      <div className="overlay">
        <article>
          <h1>Bienvenue dans mon blog personnel</h1>
          <p>Tech, Carrière, Nature, et plain d'autres sujets passionnants à aborder.</p>
          <Link to="/a-propos" className="button">
            <FontAwesomeIcon icon="info-circle" className="ml-2" />
            En savoir plus sur moi
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Jumbotron;
