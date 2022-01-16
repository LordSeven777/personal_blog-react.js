import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const PopularArticle = ({ article }) => {
	const { title, date, photoURL, categories } = article;

	return (
		<article>
			<Link to="/articles">
				<img src={photoURL} alt={title} />
				<h4>{title}</h4>
				<em>{date}</em>
				<p>
					{categories.map(({ id, name }, i) => (
						<strong key={id}>
							{name}
							{i !== categories.length && ", "}
						</strong>
					))}
				</p>
			</Link>
		</article>
	);
};

export default PopularArticle;
