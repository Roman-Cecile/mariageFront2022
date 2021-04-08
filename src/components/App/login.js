import React, { useState } from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/LandingPage";

import { Button, Collapse, TextField, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const Login = ({ axiosLogin, isLog, message }) => {
	const classes = useStyles();
	const [password, setPassword] = useState("");
	return (
		<div style={{ margin: 16 }}>
			<Typography variant="h5" align="center" className={classes.fontFamily}>
				Bienvenue !
			</Typography>
			<Typography variant="body1" align="center" style={{ margin: 16 }}>
				Veuillez indiquer le code d'invitation disponible avec votre faire part
			</Typography>
			<Collapse in={message !== ""}>
				<Typography align="center" color="error">
					{message}
				</Typography>
			</Collapse>
			<div>
				<form className={classes.form} onSubmit={(event) => axiosLogin(event, password)}>
					<TextField
						value={password}
						label="Code d'invitation"
						onChange={(event) => setPassword(event.target.value)}
						required
						variant="outlined"
						fullWidth
						helperText="Si vous ne trouvez pas le code, envoyez un mail à mariage@gmail.com"
					/>

					<Button
						fullWidth
						style={{ backgroundColor: "#b9c7a1", marginTop: 16 }}
						variant="contained"
						type="submit">
						Envoyer
					</Button>
				</form>
			</div>
			{isLog && <Redirect to="/" />}
		</div>
	);
};

export default Login;
