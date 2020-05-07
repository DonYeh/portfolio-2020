import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, AppBar } from "@material-ui/core";
import "./App.css";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	const [state, setState] = useState({
		title: "Donald Yeh",
		navLinks: [
			{ title: "Home", path: "/" },
			{ title: "About", path: "/about" },
			{ title: "Contact", path: "/contact" },
		],
		home: {
			title: "Wash your hands!",
			subTitle: "Welcome to my portfolio",
			text: "Checkout my projects below",
		},
		about: {
			title: "About Me",
		},
		contact: {
			title: "Let's talk",
		},
	});

	return (
		<Router>
			<CssBaseline>
				<Home />
			</CssBaseline>
		</Router>
	);
}

export default App;
