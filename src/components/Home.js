import React from "react";
import Navbar from "./Navbar";
import { Header as Home } from "./Header";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const Home = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/About" component={About} />
				</Switch>
			</div>
		</Router>
	);
};

export default Home;
