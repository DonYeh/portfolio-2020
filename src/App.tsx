import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, AppBar } from "@material-ui/core";
import "./App.css";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<Router>
			<CssBaseline>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/resume" component={Resume} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />
			</CssBaseline>
		</Router>
	);
}

export default App;
