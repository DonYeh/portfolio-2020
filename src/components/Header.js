import React from "react";
import { Typography, Avatar, Grid, Box, CssBaseline } from "@material-ui/core/";
import avatar from "../images/Boone.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { ViewColumn } from "@material-ui/icons";
// import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		direction: "column",
		alignContent: "flex-start",
	},
	avatarContainer: {
		// width: "100%",
		// margin: "auto",
		// width: theme.spacing(12),
		height: theme.spacing(8),
		// margin:
		// backgroundColor: "white",
		margin: "15px 0px",
		// backgroundColor: "red",
		// textAlign: "center",

		// maxWidth: "100%",
	},
	avatar: {
		textAlign: "center",
		width: theme.spacing(10),
		height: theme.spacing(10),
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
	// boxContainer: {
	// 	flexDirection: "column",
	// 	alignContent: "stretch",
	// 	position: "absolute",
	// 	display: "flex",
	// 	// top: "20%",
	// 	// left: "10%",
	// 	// transform: "translate(-50%, -50%)",
	// 	width: "100%",
	// 	textAlign: "left",
	// 	zIndex: 1,
	// },
	typedContainer: {
		margin: theme.spacing(7),
	},
	whiteFont: {
		color: "black",
		// backgroundColor: "blue",

		// margin: "auto",
		// backgroundColor: "grey",
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			spacing={2}
			className={classes.mainContainer}
			margin="dense"
		>
			{/* <CssBaseline> */}
			<Grid
				item
				xs={12}
				large={4}
				container
				justify="center"
				// textAlign="center"
				className={classes.avatarContainer}
			>
				<Avatar
					src={avatar}
					alt="Doggie"
					className={classes.avatar}
					style={{}}
				/>
			</Grid>
			{/* </CssBaseline> */}

			<Grid item xs={12} className={classes.typedContainer}>
				{/* <Typography variant="h2" className={classes.whiteFont}>
					<Typed
						strings={["Hello^2", "Hi!^4 👋"]}
						typeSpeed={16}
						startDelay={2000}
						showCursor={false}
						backSpeed={24}
						fadeOut="true"

						// cursorChar={""}
					/>
				</Typography>
				<br /> */}
				<Typography variant="h3" className={classes.whiteFont}>
					<Typed
						strings={["Hello^2", "Hi!^4 👋", "I'm Donald^5"]}
						typeSpeed={26}
						startDelay={2700}
						showCursor={false}
					/>
				</Typography>

				{/* <br /> */}
				<Typography variant="h3">
					<Typed
						strings={[
							"I'm a full-stack developer ^11800",
							"I'm a software engineer ^700",
							"I'm a coder ^700",
							"I'm a techie ^700",
							"I'm a builder ^700",
							"I'm a problem solver^700",
						]}
						typeSpeed={15}
						startDelay={6500}
						backSpeed={22}
						smartBackspace="true"
						placeholder="coder"
						random
						loop
						showCursor={false}
						className={classes.whiteFont}
						// showCursor={false}
						// fadeOut="true"
					/>
				</Typography>

				<Typography variant="h3">
					<Typed
						strings={["from^3"]}
						typeSpeed={18}
						startDelay={7300}
						showCursor={false}
						className={classes.whiteFont}
					/>
				</Typography>

				{/* <br /> */}

				<Typography variant="h3">
					<Typed
						strings={[
							// "Atlanta^1800",
							"ATL,^900",
							"A-Town,^900",
							"the A,^900",
							"Hotlanta,^450<br /> (please don't ever call it Hotlanta)^650",
							"Atlanta,^1800",
						]}
						typeSpeed={15}
						startDelay={7750}
						backSpeed={15}
						backDelay={250}
						smartBackspace="true"
						showCursor={true}
						className={classes.whiteFont}
						fadeOut="false"
						loop
						random
						// smartBackspace="true"
					/>
				</Typography>
				<Typography variant="h3">
					<Typed
						strings={["Georgia^60 🍑"]}
						typeSpeed={22}
						startDelay={16700}
						backSpeed={55}
						showCursor={false}
						className={classes.whiteFont}
					/>
				</Typography>
				<br />
				<br />
				<br />
				<br />
				<br />
				{/* <Typography variant="h4">
					<Typed
						strings={["Scroll up to learn more about me"]}
						typeSpeed={22}
						startDelay={14000}
						showCursor={false}
					/>
				</Typography> */}
				<br />
			</Grid>
		</Grid>
	);
};

export default Header;
