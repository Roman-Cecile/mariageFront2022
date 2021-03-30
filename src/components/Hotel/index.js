import React from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/Hotel";
import rings from "../../images/rings.svg";
import hotel from "../../images/hotel.jpg";

import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Favorite, Phone, Language } from "@material-ui/icons";
const Hotel = ({ setOpen, open }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.bandeau}>
				<NavLink to="/">
					<img src={rings} alt="rings" style={{ width: "auto" }} />
				</NavLink>
			</div>

			{/*..............CARD.............. */}

			<Grid container justify="space-around">
				<Grid item xs={5}>
					<Card className={classes.card} elevation={0}>
						<CardHeader title="Fast Hotel" subheader="Hotel" />
						<CardMedia className={classes.media} image={hotel} title="Paella dish" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Chambre de 2 personnes - Prix entre 40/70€
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<a href="https://www.google.fr">
								<Language color="primary" />
							</a>
							<IconButton aria-label="Phone">
								<Phone />
							</IconButton>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={5}>
					<Card className={classes.card} elevation={0}>
						<CardHeader title="Bellevue" subheader="Camping" />
						<CardMedia className={classes.media} image={hotel} title="Paella dish" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Bengalow de 2 à 4 personnes - Prix entre 100/150€ Place pour tente - 15€
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="web site">
								<a href="https://www.google.fr">
									<Language color="primary" />
								</a>
							</IconButton>
							<IconButton aria-label="Phone">
								<Phone />
							</IconButton>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

Hotel.propTypes = {};

export default Hotel;
