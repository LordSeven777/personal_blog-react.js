import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Category = ({ category }) => {
	const { name, articlesNb, photoURL } = category;

	return (
		<article style={{ backgroundImage: `url(${photoURL})` }}>
			<Link to="/categories">
				<p>{articlesNb} articles</p>
				<h4>{name}</h4>
			</Link>
		</article>
	);
};

export default Category;
