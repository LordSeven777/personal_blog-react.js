import React from "react";
import "./style.scss";
import articles from "../../../../assets/data/popularArticles";

import PopularArticle from "../PopularArticle";

const PopularArticles = () => {
	return (
		<section className="popular-articles">
			<h2>Articles les plus populaires</h2>
			<div className="wrapper">
				{articles.map((article) => (
					<PopularArticle key={article.id} article={article} />
				))}
			</div>
		</section>
	);
};

export default PopularArticles;
