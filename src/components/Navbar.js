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

import {
	ArrowBack,
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import avatar from "../images/Boone.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: "#511",
		height: "30rem",
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
		listText: "Contact me",
	},
];

const Navbar = () => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.menuSliderContainer} component="div">
				<Avatar
					className={classes.avatar}
					src={avatar}
					alt="cute pitbull"
				/>
				<Divider />
				<List>
					{menuIcons.map((menuIcon, key) => (
						<ListItem button key={key}>
							<ListItemIcon style={{ color: "grey" }}>
								{menuIcon.listIcon}
							</ListItemIcon>
							<ListItemText
								primary={menuIcon.listText}
								style={{ color: "white" }}
							/>
						</ListItem>
					))}
				</List>
			</Box>
			<Box component="nav">
				<AppBar position="static" style={{ background: "#222" }}>
					<Toolbar>
						<IconButton>
							<ArrowBack style={{ color: "tomato" }} />
						</IconButton>
						<Typography variant="h5">Portfolio </Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
