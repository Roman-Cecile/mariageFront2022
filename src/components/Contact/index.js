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
						key={field}
						fullWidth
						value={fields[field]}
						id={field}
						label={field}
						onChange={(event) => setFields((prev) => ({ ...prev, [field]: event.target.value }))}
						multiline={field === "message"}
						required
						variant={field === "message" ? "outlined" : "standard"}
						// InputProps={{
						// 	style: { height: field === "message" && 150 },
						// }}
						rows={5}
						style={{ marginBottom: field === "email" && 16 }}
					/>
				))}
				<Button
					fullWidth
					style={{ backgroundColor: "#b9c7a1", marginTop: 16 }}
					variant="contained"
					type="submit">
					Envoyer
				</Button>
			</form>
		</>
	);
};

export default Contact;
