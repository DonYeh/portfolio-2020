import React, { useState } from "react";
import "./App.css";

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
		<>
			<h1> the title of this page is: {state.title}</h1>
			<div className="App">This is my portfolio</div>;
		</>
	);
}

export default App;
