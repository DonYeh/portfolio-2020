import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Paper, Grid, Card } from "@material-ui/core";
import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#234",
		width: "100vw",
	},
	heading: {
		color: "orange",
		// padding: "1rem 0 1rem",
		paddingBottom: "1.2rem",
		textTransform: "uppercase",
		// zIndex: "1",
	},
	heading2: {
		// color: "cadetblue",
		// padding: "1rem 0 0",
		textTransform: "uppercase",
		background: "lightgrey",
		paddingTop: ".3em",
		margin: ".5rem",
	},
	heading2Title: {
		paddingTop: ".75rem",
		color: "#234",
	},
	subHeading2: {
		color: "peachpuff",
		padding: "0",
		// textTransform: "upper"
	},
	subHeading: {
		color: "white",
		padding: "0",
		textTransform: "uppercase",
	},
	timeLine: {
		postion: "relative",
		transform: "translate(0px, 1.5rem)",
		padding: "1rem",
		margin: "0 auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "99%",
			border: "1px solid lightgrey ",
			right: "40px",
			// top: "24px",
			// top: 0,
		},
		"&:after": {
			content: "''",
			// position: "absolute",
			// top: "60px",
			// clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				transform: "translate(0px, 5rem)",
				height: "85%",
				left: "calc(50% - 1px)",
				right: "auto",
				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// 	height: "15%",
			// 	clear: "both",
			// 	// zIndex: "-1",
			// },
		},
	},
	timeLineItem: {
		padding: "1rem",
		borderBottom: "2px solid tan",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "orange orange transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent orange orange",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		background: "grey",
		color: "black",
		lineHeight: 1,
		padding: "0.5rem 0 1rem",
		// zIndex: "1",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	// technologiesGridContainer: {
	// 	display: "flex",
	// 	backgroundColor: "yellow",
	// 	justify: "space-evenly",
	// 	padding: "1em",
	// },
	paperGridContainer: {
		display: "flex",
		// justify: "space-evenly",
		padding: "2em",
		alignItems: "center",
		// backgroundColor: "purple",
		// wrap: "wrap",
		// gridItem: {
		// 	background: "black",
	},
	frontEndGridItem: {
		// display: "flex",
		// flexWrap: "wrap",

		// justify: "space-evenly",
		alignItems: "center",
		// backgroundColor: "teal",
	},
	backEndGridItem: {
		// backgroundColor: "lightgrey",
		alignItems: "center",
	},
	toolsGridItem: {
		// backgroundColor: "peachpuff",
		alignItems: "center",
	},
	paper: {
		color: "teal",
		textAlign: "center",
		padding: "theme.spacing(2.3)",
	},
}));

const Resume = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			{/* <div>Resume here - tsx</div> */}
			<Box component="header" className={classes.mainContainer}>
				<Box component="div" className={classes.timeLine}>
					<Typography
						variant="h4"
						align="center"
						className={classes.heading}
					>
						Education
					</Typography>
					<Typography
						variant="h2"
						className={`${classes.timeLineYear} ${classes.timeLineItem}`}
					>
						2019
					</Typography>

					<Box component="div" className={classes.timeLineItem}>
						<Typography
							variant="h5"
							align="center"
							className={classes.subHeading}
						>
							Digital Crafts
						</Typography>
						<Typography
							variant="h6"
							align="center"
							className={classes.subHeading2}
							// style="{{ color: "tan"}}
						>
							Web Development Bootcamp
						</Typography>
						<Typography
							variant="body1"
							align="center"
							style={{ color: "cadetblue" }}
						>
							Atlanta, GA
						</Typography>

						<Typography
							variant="subtitle1"
							align="center"
							style={{ color: "grey" }}
						>
							Certificate in Full Stack software development
						</Typography>
					</Box>
					<Typography
						variant="h2"
						className={`${classes.timeLineYear} ${classes.timeLineItem}`}
					>
						2013
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography
							variant="h5"
							align="center"
							className={classes.subHeading}
						>
							Georgia Institute of Technology
						</Typography>
						<Typography
							variant="h6"
							align="center"
							className={classes.subHeading2}
							// style="{{ color: "tan"}}
						>
							Scheller College of Business
						</Typography>
						<Typography
							variant="body1"
							align="center"
							style={{ color: "cadetblue" }}
						>
							Atlanta, GA
						</Typography>

						<Typography
							variant="subtitle1"
							align="center"
							style={{ color: "grey" }}
						>
							Master of Business Administration
						</Typography>
					</Box>
					<Typography
						variant="h2"
						className={`${classes.timeLineYear} ${classes.timeLineItem}`}
					>
						2007
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography
							variant="h5"
							align="center"
							className={classes.subHeading}
						>
							Georgia Institute of Technology
						</Typography>

						<Typography
							variant="h6"
							align="center"
							className={classes.subHeading2}
							// style="{{ color: "tan"}}
						>
							School of Electrical and Computer Engineering
						</Typography>

						<Typography
							variant="body1"
							align="center"
							style={{ color: "cadetblue" }}
						>
							Atlanta, GA
						</Typography>

						<Typography
							variant="subtitle1"
							align="center"
							style={{ color: "grey" }}
						>
							Bachelor of Science in Electrical Engineering
						</Typography>
					</Box>
				</Box>
				<Box className={classes.heading2}>
					<Typography
						variant="h4"
						align="center"
						className={classes.heading2Title}
						// display="block"
					>
						Technologies
					</Typography>

					<Grid
						container
						spacing={4}
						justify="space-evenly"
						// alignContent="space-around"
						className={classes.paperGridContainer}
						wrap="wrap"
						// style={{ backgroundColor: "purple" }}
					>
						<Grid
							item
							xs={10}
							sm={6}
							md={4}
							container
							spacing={2}
							className={classes.frontEndGridItem}
						>
							{/* <Box className="feBox"></Box> */}
							<Typography align="center">Front End</Typography>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>html</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>css</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>html5</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>css</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>html</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>css</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>html</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>css</div>
								</Paper>
							</Grid>
						</Grid>

						<Grid
							item
							xs={10}
							sm={6}
							md={4}
							container
							spacing={2}
							className={classes.backEndGridItem}
						>
							<Typography align="center">Back End</Typography>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>Node.js</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>Express</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>Python</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>PostgreSQL</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>SQL</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>html</div>
								</Paper>
							</Grid>
						</Grid>
						<Grid
							item
							xs={10}
							sm={6}
							md={4}
							container
							spacing={2}
							className={classes.toolsGridItem}
						>
							<Typography align="center">Tools</Typography>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>VS Code</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>AWS</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>html</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>Git</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>Mocha</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>css</div>
								</Paper>
							</Grid>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									<div>css</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									html
								</Paper>
							</Grid>
						</Grid>
						{/* </Grid> */}
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default Resume;
