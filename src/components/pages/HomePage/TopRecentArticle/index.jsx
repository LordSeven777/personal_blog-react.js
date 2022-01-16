import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const TopRecentArticle = ({ article }) => {
	const categories = article.categories.map(({ name }) => name);

	return (
		<article className="top-recent">
			<img src={article.photoURL} alt={article.title} />
			<Link to="/articles">
				<h3>{article.title}</h3>
				<em>{article.date}</em>
				<strong>{categories.join(", ")}</strong>
			</Link>
		</article>
	);
};

export default TopRecentArticle;
