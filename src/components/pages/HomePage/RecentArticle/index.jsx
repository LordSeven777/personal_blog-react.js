import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const RecentArticle = ({ article }) => {
	const { title, photoURL, date, categories } = article;

	return (
		<article className="article">
			<Link to="/articles">
				<img src={photoURL} alt={title} />
				<div className="content">
					<h4>{title}</h4>
					<em>{date}</em>
					<p>
						<strong>{categories.map(({ name }) => name).join(", ")}</strong>
					</p>
				</div>
			</Link>
		</article>
	);
};

export default RecentArticle;
