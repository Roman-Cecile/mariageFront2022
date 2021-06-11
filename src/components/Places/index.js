import React from "react";
import PropTypes from "prop-types";

// @Material UI
import { Typography, Paper, Grid } from "@material-ui/core";

import useStyles from "../../styles/Card";
import mairie from "../../images/jumbo.jpg";

const Places = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Paper elevation={0} className={classes.paperPlaces}>
				<Grid container>
					<Grid item xs={6} md={4}>
						<img src={mairie} alt="mairie" className={classes.image} />
					</Grid>
					<Grid item xs={6} md={8}>
						<Typography align="right">La mairie</Typography>
						<Typography align="right">Adresse: 45 rue des foufou</Typography>
						<Typography align="right">Heure: 14:00</Typography>
					</Grid>
				</Grid>
			</Paper>
			<Paper elevation={0} className={classes.paperPlaces}>
				<Grid container>
					<Grid item xs={6} md={8}>
						<Typography>L'Eglise</Typography>
						<Typography>Adresse: 45 rue des foufou</Typography>
						<Typography>Heure: 14:00</Typography>
					</Grid>
					<Grid item xs={6} md={4}>
						<img src={mairie} alt="eglise" className={classes.image} />
					</Grid>
				</Grid>
			</Paper>
			<Paper elevation={0} className={classes.paperPlaces}>
				<Grid container>
					<Grid item xs={6} md={4}>
						<img src={mairie} alt="La réception" className={classes.image} />
					</Grid>
					<Grid item xs={6} md={8}>
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
