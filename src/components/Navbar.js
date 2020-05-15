import React, { useState } from "react";

import {
	AppBar,
	Toolbar,
	ListItem,
	ListItemIcon,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
} from "@material-ui/core";

import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles } from "@material-ui/core/styles";

import MenuDrawerSlider from "@material-ui/core/Drawer";

import avatar from "../images/Boone.png";
import { Link } from "react-router-dom";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: "100%",
		background: "darkgrey",
		height: "100%",
	},
	avatar: {
		display: "block",
		margin: "0.75rem auto",
		width: theme.spacing(14),
		height: theme.spacing(14),
	},
}));

const menuIcons = [
	{
		listIcon: <Home />,
		listText: "Home",
	},
	{
		listIcon: <AssignmentInd />,
		listText: "Resume",
	},
	{
		listIcon: <Apps />,
		listText: "Portfolio",
	},
	{
		listIcon: <ContactMail />,
		listText: "Contact",
	},
];

const Navbar = () => {
	const classes = useStyles();
	const [state, setState] = useState({ right: false });

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};
	const sideList = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component="div"
			onClick={toggleSlider(slider, false)}
		>
			{/* <Avatar
				className={classes.avatar}
				src={avatar}
				alt="cute pitbull"
			/>
			<Divider /> */}
			<List>
				{menuIcons.map((menuIcon, key) => (
					<ListItem button key={key}>
						<IconButton>
							<ListItemIcon style={{ color: "grey" }}>
								{menuIcon.listIcon}
							</ListItemIcon>
							<ListItemText
								primary={menuIcon.listText}
								style={{ color: "white" }}
							/>
						</IconButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<>
			<Box component="nav">
				<AppBar position="static" style={{ background: "#222" }}>
					<Toolbar>
						<IconButton onClick={toggleSlider("right", true)}>
							<MenuIcon style={{ color: "darkgrey" }} />
						</IconButton>
						<Typography variant="h5">Portfolio</Typography>
						<MenuDrawerSlider
							anchor="left"
							open={state.right}
							onClose={toggleSlider("right", false)}
						>
							{sideList("right")}
						</MenuDrawerSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
