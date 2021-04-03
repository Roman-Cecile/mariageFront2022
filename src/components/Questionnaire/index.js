import React, { useState } from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/Questionnaire";

import rings from "../../images/rings.svg";

import {
	Typography,
	Paper,
	Grid,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	Button,
	Collapse,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { capitalize } from "../../utils";

const Questionnaire = ({ users, axiosUpdateUser }) => {
	const classes = useStyles();
	const [checked, setChecked] = useState({});
	const [toggleUpdateRadioBox, setToggleUpdateRadioBox] = useState({ present: false, vegan: false });

	// Handle change radio box
	const onChange = (user, property, value) => {
		setChecked((prevState) => ({
			...prevState,
			[user.firstName]: {
				...checked[user.firstName],
				id: user.id,
				[property]: value === "present" || value === "vegan" ? true : false,
				familyId: user.family_id,
			},
		}));
	};

	return (
		<div>
			<div className={classes.bandeau}>
				<NavLink to="/">
					<img src={rings} alt="rings" style={{ width: "auto" }} />
				</NavLink>
			</div>

			{/*..............PRESENT..............*/}
			<Typography align="center" variant="h6" className={classes.question}>
				Serez-vous présent le 2 juillet 2022 ?
			</Typography>

			<Paper className={classes.paper} elevation={1}>
				<Grid container className={classes.radioBox}>
					{users.map((user, index) => (
						<Grid container item alignItems={index === 0 ? "flex-end" : "center"}>
							{/* xs= 10 in pc and 6 in mobile */}
							<Grid item xs={6} md={8} sm={9}>
								<Typography style={{ marginBottom: index === 0 && 5 }}>
									{capitalize(user.firstName)}
								</Typography>
							</Grid>
							{/* xs= 2 in pc and 6 in mobile */}
							<Grid item xs={6} md={4} sm={3}>
								<FormControl component="fieldset">
									<RadioGroup
										value={checked[user.firstName["present"]]}
										defaultValue={user.present ? "present" : "no-present"}
										aria-label="present"
										name="present1"
										style={{ display: "flex", flexDirection: "row" }}>
										<FormControlLabel
											disabled={!toggleUpdateRadioBox.present}
											value="present"
											labelPlacement="top"
											label={index === 0 && "Oui"}
											control={
												<Radio
													color={toggleUpdateRadioBox.present ? "primary" : "default"}
													onClick={(event) => onChange(user, "present", event.target.value)}
												/>
											}
										/>
										<FormControlLabel
											disabled={!toggleUpdateRadioBox.present}
											label={index === 0 && "Non"}
											value="no-present"
											labelPlacement="top"
											control={
												<Radio
													color={toggleUpdateRadioBox.present ? "secondary" : "default"}
													onClick={(event) => onChange(user, "present", event.target.value)}
												/>
											}
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
					))}
				</Grid>
				{toggleUpdateRadioBox.present ? (
					<Button
						variant="contained"
						className={classes.button}
						fullWidth
						onClick={() => {
							axiosUpdateUser(checked);
							setToggleUpdateRadioBox((prevState) => ({ ...prevState, present: false }));
						}}>
						Valider
					</Button>
				) : (
					<Button
						variant="contained"
						className={classes.button}
						fullWidth
						onClick={() => setToggleUpdateRadioBox((prevState) => ({ ...prevState, present: true }))}>
						Mettre à jour
					</Button>
				)}
			</Paper>

			{/*..............VEGAN..............*/}
			<Collapse in={users.some((data) => data.present === true)}>
				<Typography align="center" variant="h6" className={classes.question}>
					Etes-vous végétarien ?
				</Typography>

				<Paper className={classes.paper} elevation={1}>
					<Grid container className={classes.radioBox}>
						{users.map(
							(user, index) =>
								user.present && (
									<Grid container item alignItems={index === 0 ? "flex-end" : "center"}>
										{/* xs= 10 in pc and 6 in mobile */}
										<Grid item xs={6} md={8} sm={9}>
											<Typography style={{ marginBottom: index === 0 && 5 }}>
												{user.firstName}
											</Typography>
										</Grid>
										{/* xs= 2 in pc and 6 in mobile */}
										<Grid item xs={6} md={4} sm={3}>
											<FormControl component="fieldset">
												<RadioGroup
													value={checked[user.firstName["vegan"]]}
													defaultValue={user.vegan ? "vegan" : "no-vegan"}
													aria-label="vegan"
													name="vegan1"
													style={{ display: "flex", flexDirection: "row" }}>
													<FormControlLabel
														disabled={!toggleUpdateRadioBox.vegan}
														labelPlacement="top"
														label={index === 0 && "Oui"}
														value="vegan"
														control={
															<Radio
																color={
																	toggleUpdateRadioBox.vegan ? "primary" : "default"
																}
																onClick={(event) =>
																	onChange(user, "vegan", event.target.value)
																}
															/>
														}
													/>
													<FormControlLabel
														disabled={!toggleUpdateRadioBox.vegan}
														label={index === 0 && "Non"}
														labelPlacement="top"
														value="no-vegan"
														control={
															<Radio
																color={
																	toggleUpdateRadioBox.vegan ? "secondary" : "default"
																}
																onClick={(event) =>
																	onChange(user, "vegan", event.target.value)
																}
															/>
														}
													/>
												</RadioGroup>
											</FormControl>
										</Grid>
									</Grid>
								)
						)}
					</Grid>
					{toggleUpdateRadioBox.vegan ? (
						<Button
							variant="contained"
							className={classes.button}
							fullWidth
							onClick={() => {
								axiosUpdateUser(checked);
								setToggleUpdateRadioBox((prevState) => ({ ...prevState, vegan: false }));
							}}>
							Valider
						</Button>
					) : (
						<Button
							variant="contained"
							className={classes.button}
							fullWidth
							onClick={() => setToggleUpdateRadioBox((prevState) => ({ ...prevState, vegan: true }))}>
							Mettre à jour
						</Button>
					)}
				</Paper>
			</Collapse>

			{/*....................TEXT UNDER LIST....................*/}
			<Typography style={{ margin: "8px auto" }} align="center" variant="body2">
				Vous pouvez donner/modifier vos réponses jusqu'au <b>xx/xx/2022</b>
			</Typography>
		</div>
	);
};

Questionnaire.propTypes = {};

export default Questionnaire;
