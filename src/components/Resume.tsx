import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Paper, Grid, Card } from "@material-ui/core";
// import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#234",
		width: "100vw",
		// paddingTop: "0",
	},
	heading: {
		color: "sandybrown",
		// padding: "1rem 0 1rem",
		paddingBottom: "1.2rem",
		textTransform: "uppercase",
		// zIndex: "1",
	},
	boxTechnologies: {
		// color: "cadetblue",
		// padding: "1rem 0 0",
		textTransform: "uppercase",
		background: "lightgrey",
		padding: "1.2em",
		marginTop: "1rem",
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
	timeLineBox: {
		postion: "relative",
		transform: "translate(0px, 1.5rem)",

		padding: ".5rem",
		margin: "0 auto",
		// backgroundColor: "pink",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "86%",
			border: "1px solid lightgrey ",
			right: "40px",
			// top: "24px",
			// top: 0,
			transform: "translate(0px, 3.7rem)",
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
				height: "78%",
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
		// borderBottom: "8px solid tan",
		position: "relative",
		margin: "1rem 3.3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.025rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "sandybrown sandybrown transparent transparent",
			borderWidth: ".44rem",
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
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "7rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		background: "grey",
		color: "#234",
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
	subHeading2E: {
		color: "cadetblue",
	},
	subHeadingE: {
		color: "sandybrown",
		padding: "0",
		textTransform: "uppercase",
	},
	timeLineBoxE: {
		postion: "relative",
		// transform: "translate(0px, .5rem)",

		padding: ".5rem",
		margin: "0 auto",
		// backgroundColor: "purple",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "69%",
			border: "1px solid lightgrey ",
			right: "40px",
			// top: "44px",
			// top: 0,
		},
		"&:after": {
			content: "''",
			height: "87%",
			// position: "absolute",
			// top: "60px",
			// clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			// height: "99%",

			"&:before": {
				transform: "translate(0px, 1.6rem)",
				height: "66%",
				left: "calc(50% - 1px)",
				right: "auto",
				// zIndex: "-1",
			},
			"&:after": {
				content: "''",
				// height: "98%",
				clear: "both",
			},
		},
	},
	timeLineItemE: {
		padding: "1rem",
		// borderBottom: "2px solid tan",
		position: "relative",
		margin: "1rem 3.3rem 1rem 1rem",
		clear: "both",
		// backgroundColor: "white",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.025rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "cadetblue cadetblue transparent transparent",
			borderWidth: "0.44rem",
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
				borderColor: "transparent transparent cadetblue cadetblue",
			},
		},
	},
	timeLineYearE: {
		textAlign: "center",
		maxWidth: "7rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		background: "#234",
		color: "lightgrey",
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
	papersGridContainer: {
		display: "flex",
		// justify: "space-evenly",
		width: "100vw",
		padding: "1.2em 0 1.5em",
		alignItems: "flex-start",
		// backgroundColor: "purple",
		// wrap: "wrap",
		// gridItem: {
		// background: "black",
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
		color: "cadetblue",
		fontSize: "1.2em",
		textAlign: "center",
		padding: "theme.spacing(3)",
		overflow: "hidden",
		textOverflow: "ellipsis",
		// width: "1rem",
	},
	experienceBox: {
		paddingTop: "1.2rem",
		paddingBottom: "6rem",
		backgroundColor: "white",
		textTransform: "uppercase",
		color: "#234",
		[theme.breakpoints.up("md")]: {
			paddingBottom: "19rem",

			// "&:before": {
			// 	transform: "translate(0px, 5rem)",
			// 	height: "78%",
			// 	left: "calc(50% - 1px)",
			// 	right: "auto",
			// 	// zIndex: "-1",
			// },
			// "&:after": {
			// 	content: "''",
			// 	height: "15%",
			// 	clear: "both",
			// 	// zIndex: "-1",
			// },
		},
	},
}));

const Resume = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			{/* <div>Resume here - tsx</div> */}
			<Box component="header" className={classes.mainContainer}>
				<Box component="div" className={classes.timeLineBox}>
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
				<Box
					className={classes.boxTechnologies}
					justifyContent="center"
				>
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
						// alignItems="flex-start"
						// alignContent="space-around"
						className={classes.papersGridContainer}
						wrap="wrap"
						// style={{ backgroundColor: "purple" }}
					>
						<Grid
							item
							container
							xs={12}
							sm={6}
							md={4}
							spacing={2}
							className={classes.frontEndGridItem}
						>
							{/* <Box className="feBox"></Box> */}
							<Typography align="center">Front End</Typography>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={3}
									variant="outlined"
									className={classes.paper}
									// square
								>
									html
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={3}
									variant="outlined"
									className={classes.paper}
									// square
								>
									css
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									html5
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									css
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
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									css
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
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									css
								</Paper>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
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
									Python
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									PostgreSQL
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									SQL
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
						<Grid
							item
							xs={12}
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
									VS Code
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									AWS
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
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									Git
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									Mocha
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									css
								</Paper>
							</Grid>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									css
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
				<Box className={classes.experienceBox}>
					<Typography variant="h4" align="center">
						Experience
					</Typography>
					<Box component="div" className={classes.timeLineBoxE}>
						<Typography
							variant="h2"
							className={`${classes.timeLineYearE} ${classes.timeLineItemE}`}
						>
							2020
						</Typography>

						<Box component="div" className={classes.timeLineItemE}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeadingE}
							>
								Ton Ton Ramen & Yakitori
							</Typography>
							<Typography
								variant="h6"
								align="center"
								className={classes.subHeading2E}
								// style="{{ color: "tan"}}
							>
								server
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "#234" }}
							>
								Atlanta, GA
							</Typography>

							<Typography
								variant="subtitle1"
								align="left"
								style={{ color: "grey" }}
							>
								<div>
									• Filled in as manager when needed -
									responsibilities included resolving customer
									issues, entering shift reports, and taking
									inventory
								</div>
								<div>
									• Developed valuable soft skills, which
									included communication, teamwork,
									multitasking, and working under pressure
								</div>
								<div>
									• Trained new hires and created training
									materials along with a checklist of server
									side-duties
								</div>
							</Typography>
						</Box>
						<Typography
							variant="h2"
							className={`${classes.timeLineYearE} ${classes.timeLineItemE}`}
						>
							2018
						</Typography>
						<Box component="div" className={classes.timeLineItemE}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeadingE}
							>
								Elev8 Hire Solutions{" "}
							</Typography>
							<Typography
								variant="h6"
								align="center"
								className={classes.subHeading2E}
							>
								IT Recruiter
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{
									color: "#234",
									// backgroundColor: "white",
								}}
							>
								Atlanta, GA
							</Typography>

							<Typography
								variant="subtitle1"
								align="left"
								style={{
									color: "grey",
									// backgroundColor: "yellow",
								}}
							>
								<div>
									• Performed full sles recruiting lifecycle -
									from prospecting, job selling, screening,
									offer negotiation, and onboarding
								</div>
								<div>
									• Communicated with hiring managers to
									discover project requirements and ideal
									candidates
								</div>
								<div>
									• Maintained an accurate candidate tracking
									system
								</div>
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Resume;
