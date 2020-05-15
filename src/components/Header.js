import React from "react";
import { Typography, Avatar, Grid, Box, CssBaseline } from "@material-ui/core/";
import avatar from "../images/Boone.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { ViewColumn } from "@material-ui/icons";
// import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		// direction: "column",
		alignContent: "flex-start",
	},
	avatarContainer: {
		// width: "100%",
		// margin: "auto",
		// width: theme.spacing(12),
		height: theme.spacing(9),
		// margin:
		// backgroundColor: "white",
		margin: "30px 0px 0px 0px",
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
		textAlign: "center",
	},
	whiteFont: {
		color: "white",
		// textAlign: "flex-start",
		// backgroundColor: "blue",

		// margin: "auto",
		// backgroundColor: "grey",
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<CssBaseline>
			<Grid
				container
				spacing={2}
				className={classes.mainContainer}
				margin="dense"
			>
				<Grid
					item
					xs={12}
					sm={12}
					lg={4}
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

				<Grid item xs={12} lg={8} className={classes.typedContainer}>
					<Typography variant="h4" className={classes.whiteFont}>
						<Typed
							strings={["Hello^2", "Hi!^4 👋", "I'm Donald^5"]}
							typeSpeed={26}
							startDelay={2700}
							showCursor={false}
						/>
					</Typography>

					<Typography variant="h4" zeroMinWidth>
						<Typed
							strings={[
								"I'm a full stack developer ^11800",
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

					<Typography variant="h4">
						<Typed
							strings={["from^3"]}
							typeSpeed={18}
							startDelay={7300}
							showCursor={false}
							className={classes.whiteFont}
						/>
					</Typography>

					{/* <br /> */}

					<Typography variant="h4" zeroMinWidth>
						<Typed
							strings={[
								// "Atlanta^1800",
								"ATL^900",
								"A-Town^900",
								"the A^900",
								"Hotlanta^400...(please don't call it Hotlanta)^650",
								"Atlanta^1800",
							]}
							typeSpeed={11}
							startDelay={7750}
							backSpeed={15}
							backDelay={250}
							smartBackspace="true"
							// cursorChar=" "
							showCursor={true}
							className={classes.whiteFont}
							fadeOut="false"
							loop
							random
							// smartBackspace="true"
						/>
					</Typography>
					<Typography variant="h4">
						<Typed
							strings={["Georgia^60 🍑"]}
							typeSpeed={11}
							startDelay={16700}
							backSpeed={55}
							showCursor={false}
							className={classes.whiteFont}
						/>
					</Typography>
				</Grid>
			</Grid>
		</CssBaseline>
	);
};

export default Header;
