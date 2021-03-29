import React from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/Card";
import mairie from "../../images/jumbo.jpg";

import { Menu as BurgerMenu } from "@material-ui/icons";
import { Slide, Typography, Paper, Grid } from "@material-ui/core";
const Places = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Paper elevation={0} className={classes.paperPlaces}>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<img src={mairie} alt="mairie" className={classes.image} />
					</Grid>
					<Grid item xs={6}>
						<Typography align="right">La mairie</Typography>
						<Typography align="right">Adresse: 45 rue des foufou</Typography>
						<Typography align="right">Heure: 14:00</Typography>
					</Grid>
				</Grid>
			</Paper>
			<Paper elevation={0} className={classes.paperPlaces}>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<Typography>L'Eglise</Typography>
						<Typography>Adresse: 45 rue des foufou</Typography>
						<Typography>Heure: 14:00</Typography>
					</Grid>
					<Grid item xs={6}>
						<img src={mairie} alt="eglise" className={classes.image} />
					</Grid>
				</Grid>
			</Paper>
			<Paper elevation={0} className={classes.paperPlaces}>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<img src={mairie} alt="La réception" className={classes.image} />
					</Grid>
					<Grid item xs={6}>
						<Typography align="right">La réception</Typography>
						<Typography align="right">Adresse: 45 rue des foufou</Typography>
						<Typography align="right">Heure: 14:00</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Places;
