import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <h2>Boîte aux letters</h2>
      <p>Restez notifiés de mes futures articles. Pas de spam, purement des contenus utiles.</p>
      <form>
        <div className="input">
          <FontAwesomeIcon icon="envelope" />
          <input type="text" placeholder="Votre e-mail" />
        </div>
        <button type="button" className="button">
          <FontAwesomeIcon icon="bell" className="ml-2" />
          S'abonner
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
