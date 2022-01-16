import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import categories from "../../../../assets/data/categories";

import Category from "../Category";

const Categories = () => {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="wrapper">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="to-categories">
        <Link to="/categories">
          <FontAwesomeIcon icon="plus" className="ml-2" />
          Voir toutes les catégories
        </Link>
      </div>
    </section>
  );
};

export default Categories;
