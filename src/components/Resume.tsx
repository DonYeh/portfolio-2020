import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#234",
	},
	heading: {
		color: "orange",
		padding: "3rem 0",
		textTransform: "uppercase",
	},
	subHeading2: {
		color: "antiquewhite",
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
		padding: "1rem",
		margin: "0 auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid lightgrey ",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: "''",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
				// zIndex: "-1",
			},
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
}));

const Resume = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			{/* <div>Resume here - tsx</div> */}
			<Box component="header" className={classes.mainContainer}>
				<Typography
					variant="h4"
					align="center"
					className={classes.heading}
				>
					Education
				</Typography>
				<Box component="div" className={classes.timeLine}>
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
				<Typography
					variant="h4"
					align="center"
					className={classes.heading}
				>
					Technologies
				</Typography>
			</Box>
		</>
	);
};

export default Resume;
