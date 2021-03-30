import React from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/Questionnaire";

import rings from "../../images/rings.svg";

import { Typography, Paper, Grid, Radio, RadioGroup, FormControlLabel, FormControl, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const Questionnaire = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.bandeau}>
				<NavLink to="/">
					<img src={rings} alt="rings" style={{ width: "auto" }} />
				</NavLink>
			</div>
			<Typography align="center" variant="h6" className={classes.question}>
				Serez-vous présent le 2 juillet 2022 ?
			</Typography>

			{/*...............LIIST...............*/}

			<Paper className={classes.paper} elevation={1}>
				<Grid container className={classes.radioBox}>
					{["Odile Bois", "Didier Bois", "Léo Bois", "Faustine Bois"].map((person, index) => (
						<Grid container item alignItems={index === 0 ? "flex-end" : "center"}>
							{/* xs= 10 in pc and 6 in mobile */}
							<Grid item xs={6} md={8} sm={9}>
								<Typography style={{ marginBottom: index === 0 && 5 }}>{person}</Typography>
							</Grid>
							{/* xs= 2 in pc and 6 in mobile */}
							<Grid item xs={6} md={4} sm={3}>
								<FormControl component="fieldset">
									<RadioGroup
										aria-label="gender"
										name="gender1"
										style={{ display: "flex", flexDirection: "row" }}>
										<FormControlLabel
											labelPlacement="top"
											value="present"
											label={index === 0 && "Oui"}
											control={<Radio color="primary" />}
										/>
										<FormControlLabel
											label={index === 0 && "Non"}
											labelPlacement="top"
											value="absent"
											control={<Radio />}
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
					))}
				</Grid>
				<Button variant="contained" className={classes.button} fullWidth type="submit">
					Valider
				</Button>
			</Paper>
			<Typography align="center" variant="h6" className={classes.question}>
				Etes-vous végétarien ?
			</Typography>

			<Paper className={classes.paper} elevation={1}>
				<Grid container className={classes.radioBox}>
					{["Odile Bois", "Didier Bois", "Léo Bois", "Faustine Bois"].map((person, index) => (
						<Grid container item alignItems={index === 0 ? "flex-end" : "center"}>
							{/* xs= 10 in pc and 6 in mobile */}
							<Grid item xs={6} md={8} sm={9}>
								<Typography style={{ marginBottom: index === 0 && 5 }}>{person}</Typography>
							</Grid>
							{/* xs= 2 in pc and 6 in mobile */}
							<Grid item xs={6} md={4} sm={3}>
								<FormControl component="fieldset">
									<RadioGroup
										aria-label="gender"
										name="gender1"
										style={{ display: "flex", flexDirection: "row" }}>
										<FormControlLabel
											labelPlacement="top"
											value="present"
											label={index === 0 && "Oui"}
											control={<Radio color="primary" />}
										/>
										<FormControlLabel
											label={index === 0 && "Non"}
											labelPlacement="top"
											value="absent"
											control={<Radio />}
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
					))}
				</Grid>
				<Button variant="contained" className={classes.button} fullWidth type="submit">
					Valider
				</Button>
			</Paper>

			{/*....................TEXT UNDER LIST....................*/}
			<Typography style={{ margin: "8px auto" }} align="center" variant="body2">
				Vous pouvez donner/modifier vos réponses jusqu'au <b>xx/xx/2022</b>
			</Typography>
		</div>
	);
};

Questionnaire.propTypes = {};

export default Questionnaire;
