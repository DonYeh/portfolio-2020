import { Button, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as React from "react";
import Navbar from "./Navbar";

interface Values {
	firstName: string;
	lastName: string;
	email: string;
}
interface Props {
	onSubmit: (values: Values) => void;
}

const Contact: React.FC<Props> = ({ onSubmit }) => {
	return (
		<>
			<Navbar />
			<Formik
				initialValues={{ firstName: "", lastName: "", email: "" }}
				onSubmit={(values) => {
					onSubmit(values);
				}}
			>
				{
					({ values, handleChange, handleBlur }) => (
						<Form>
							<div>
								<TextField
									name="firstName"
									placeholder="first name"
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>

							<div>
								<TextField
									name="lastName"
									placeholder="last name"
									value={values.lastName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>

							<div>
								<TextField
									name="email"
									placeholder="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
							<Button type="submit">submit</Button>
							<pre>{JSON.stringify(values, null, 2)}</pre>
						</Form>
					)

					// <div>Contact me herrrrrreee</div>
				}
			</Formik>
		</>
	);
};

export default Contact;
