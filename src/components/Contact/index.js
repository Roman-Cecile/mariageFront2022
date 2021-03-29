import React, { useState } from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/Contact";

import { Button, TextField } from "@material-ui/core";

const Contact = (props) => {
	const classes = useStyles();
	const [fields, setFields] = useState({ email: "", message: "" });
	return (
		<>
			<form className={classes.form}>
				{Object.keys(fields).map((field) => (
					<TextField
						fullWidth
						value={fields[field]}
						id={field}
						label={field}
						onChange={(event) => setFields((prev) => ({ ...prev, [field]: event.target.value }))}
						multiline={field === "message"}
						required
					/>
				))}
				<Button
					fullWidth
					style={{ backgroundColor: "#edefec", marginTop: 16 }}
					variant="contained"
					type="submit">
					Envoyer
				</Button>
			</form>
		</>
	);
};

export default Contact;
