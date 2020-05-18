import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Paper, Grid, Avatar, Card } from "@material-ui/core";
import avatar from "../images/Boone.png";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		backgroundColor: "white",
		padding: "1.2rem",
	},
	gridContainer: {
		display: "flex",
		// justify: "center",
		alignItems: "center",
	},
	gridItems: {
		padding: "5rem",
	},
	gridItems1: {},
	paper: {
		padding: "1rem",
	},
	avatarContainer: {
		// width: "100%",
		// margin: "auto",
		// width: theme.spacing(12),
		height: "20vh",
		// margin:
		// backgroundColor: "white",
		// margin: "30px 0px 0px 0px",
		// backgroundColor: "red",
		// textAlign: "center",

		// maxWidth: "100%",
	},
	avatar: {
		textAlign: "center",
		width: theme.spacing(14),
		height: theme.spacing(14),
		// margin: theme.spacing(6),
		// textAlign: "center",
		// border: "black",
		// maxWidth: "50%",
		// margin: theme.spacing(2),
		// alignItems: "center",
		// justifyContent: "center",
		// backgroundColor: "purple",
		// margin: "auto",
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			<Box className={classes.mainContainer}>
				<Grid container className={classes.gridContainer} spacing={2}>
					<Grid
						item
						container
						className={classes.gridItems1}
						spacing={2}
					>
						<Grid item>
							<Paper elevation={5} className={classes.paper}>
								<Typography variant="h4">About Me</Typography>
							</Paper>
						</Grid>
						<Grid>
							<Avatar
								src={avatar}
								alt="Doggie"
								className={classes.avatar}
								// style={{ paddingTop: ".5em" }}
							/>
						</Grid>
					</Grid>

					<Grid item className={classes.gridItems}>
						<Paper elevation={3} className={classes.paper}>
							<Typography>
								{" "}
								Hello. I’m a full-stack developer who is
								passionate about writing clean, efficient code
								and solving real world problems - making the
								world a better place, one line of code at a
								time.
							</Typography>
						</Paper>
					</Grid>

					<Grid item className={classes.gridItems}>
						<Paper elevation={3} className={classes.paper}>
							<Typography>
								When Im not at the computer, you can find me in
								the garden, or out walking my dogs.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default About;
