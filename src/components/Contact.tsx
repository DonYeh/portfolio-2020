import * as React from "react";
import { TextField } from "@material-ui/core";
import Navbar from "./Navbar";
import { Formik, Form } from "formik";

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
							<TextField
								name="firstName"
								placeholder="first name"
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<TextField
								name="lastName"
								placeholder="last name"
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<TextField
								name="email"
								placeholder="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
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
