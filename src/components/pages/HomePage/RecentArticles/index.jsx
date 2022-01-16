import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import recentArticles from "../../../../assets/data/recentArticles";

import TopRecentArticle from "../TopRecentArticle";
import RecentArticle from "../RecentArticle";

const RecentArticles = () => {
  return (
    <section className="recent-articles">
      <h2>Articles les plus récents</h2>
      <div className="wrapper">
        <TopRecentArticle article={recentArticles[0]} />
        <div className="articles">
          {recentArticles.slice(1).map((article) => (
            <RecentArticle key={article.id} article={article} />
          ))}
          <div className="to-all-articles">
            <Link to="/articles">
              <FontAwesomeIcon icon="plus" className="ml-2" />
              Voir toutes les articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
