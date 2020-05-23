import {
	Button,
	TextField,
	Box,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import Navbar from "./Navbar";
import { MyField } from "./MyField";
import { makeStyles } from "@material-ui/core/styles";

interface Values {
	firstName: string;
	lastName: string;
	email: string;
}
interface Props {
	onSubmit: (values: Values) => void;
}

const useStyles = makeStyles({
	// root: {
	// 	// borderBlock: "2px dotted",
	// 	border: "2px",
	// },

	gridContainer: {
		justify: "center",
		alignContent: "center",
		// width: "100vw",
		height: "100vh",
		background: "aliceblue",
		// padding: "1rem",
		// margin: "1rem",
	},
	gridItem: {
		background: "white",
		// padding: "2.5rem",
		// margin: "2.5rem",
	},
	paper: {
		background: "white",
		padding: "1.75rem",
		margin: "1rem",
	},
});

const Contact: React.FC<Props> = ({ onSubmit }) => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			{/* <Box> */}
			<Grid
				container
				// alignItems="center"
				spacing={3}
				className={classes.gridContainer}
			>
				<Grid item xs={12} className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Typography>Let's build together</Typography>
						<Typography>
							Have a project you're looking to get off the ground?
							I'd love to hear from you. Send a message to
							email.com to get the ball rolling.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Formik
							initialValues={{
								firstName: "",
								lastName: "",
								email: "",
							}}
							onSubmit={(values) => {
								onSubmit(values);
							}}
						>
							{
								({ values }) => (
									<Form>
										<div>
											<Field
												name="firstName"
												// placeholder="first name"
												component={MyField}
												label="first name"
											/>

											{/* <TextField
									name="firstName"
									placeholder="first name"
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
								/> */}
										</div>

										<div>
											<Field
												name="lastName"
												// placeholder="last name"
												component={MyField}
												label="last name"
											/>
											{/* <TextField
									name="lastName"
									placeholder="last name"
									value={values.lastName}
									onChange={handleChange}
									onBlur={handleBlur}
								/> */}
										</div>

										<div>
											<Field
												name="email"
												// placeholder="email"
												component={MyField}
												label="email"
											/>
											{/* <TextField
									name="email"
									placeholder="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/> */}
										</div>
										<Button type="submit">submit</Button>
										{/* <pre>
												{JSON.stringify(
													values,
													null,
													2
												)}
											</pre> */}
									</Form>
								)

								// <div>Contact me herrrrrreee</div>
							}
						</Formik>
					</Paper>
				</Grid>
			</Grid>
			{/* </Box> */}
		</>
	);
};

export default Contact;
