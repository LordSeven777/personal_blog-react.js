import React from "react";
import "./style.scss";
import mails_img from "../../../assets/images/mails.png";

import Jumbotron from "./Jumbotron";
import RecentArticles from "./RecentArticles";
import PopularArticles from "./PopularArticles";
import Categories from "./Categories";
import NewsLetter from "./NewsLetter";

const HomePage = () => {
	return (
		<section id="accueil">
			<Jumbotron />
			<div className="container">
				<RecentArticles />
			</div>
			<div style={{ backgroundColor: "#f1f1f1" }}>
				<div className="container">
					<PopularArticles />
				</div>
			</div>
			<div style={{ backgroundColor: "#e2e2e2" }}>
				<div className="container">
					<Categories />
				</div>
			</div>
			<div style={{ backgroundImage: `url(${mails_img})` }}>
				<div className="container">
					<NewsLetter />
				</div>
			</div>
		</section>
	);
};

export default HomePage;
