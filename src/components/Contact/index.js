import React, { useState } from "react";

import emailjs from "emailjs-com";

// @Material UI
import { Button, Snackbar, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// Styles
import useStyles from "../../styles/Contact";

// Utils
import { capitalize } from "../../utils";

const Contact = (props) => {
	const classes = useStyles();
	const [fields, setFields] = useState({ email: "", message: "" });

	const [alertMessage, setAlertMessage] = useState({
		open: false,
		severity: "",
		text: "",
	});
	const templateParams = {
		user_email: fields.email,
		message: fields.message,
	};

	const sendEmail = (event) => {
		event.preventDefault();
		emailjs.send("service_kh8hyom", "template_ykn9dwa", templateParams, "user_sE4nEN37iF9SMJMqSTqUg").then(
			() => {
				setAlertMessage({ open: true, severity: "success", text: "Votre message est envoyé !" });
				setFields({ email: "", message: "" });
			},
			// If the message hasn't been sent
			() => {
				setAlertMessage({ open: true, severity: "error", text: "Votre message n'a pu être envoyé !" });
			}
		);
	};

	return (
		<>
			{/* ........ FORM ........ */}
			<form id="contact" className={classes.form} onSubmit={(event) => sendEmail(event)}>
				{Object.keys(fields).map((field) => (
					<TextField
						key={field}
						fullWidth
						value={fields[field]}
						id={field}
						label={capitalize(field)}
						onChange={(event) => setFields((prev) => ({ ...prev, [field]: event.target.value }))}
						multiline={field === "message"}
						required
						variant={field === "message" ? "outlined" : "standard"}
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

			{/*........ALERT MESSAGE........*/}
			<Snackbar
				open={alertMessage.open}
				autoHideDuration={5000}
				onClose={() => setAlertMessage({ open: false, text: "", severity: "" })}>
				<Alert severity={alertMessage.severity || "info"}>{alertMessage.text}</Alert>
			</Snackbar>
		</>
	);
};

export default Contact;
