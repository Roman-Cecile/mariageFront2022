import React from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/Card";
import mairie from "../../images/jumbo.jpg";

import { Typography, Paper, Grid } from "@material-ui/core";
const Hotels = (props) => {
	const classes = useStyles();
	return (
		<>
			<Grid container justify="space-around" className={classes.container}>
				<Grid item xs={5} style={{ marginTop: 8 }}>
					<Paper elevation={0} className={classes.paperHotels}>
						<Grid container spacing={1}>
							<Grid item>
								<img src={mairie} alt="mairie" className={classes.image} />
							</Grid>
							<Grid item>
								<Typography>FastHotel</Typography>
								<Typography
									component="a"
									style={{ textDecoration: "none", color: "black" }}
									href="tel:+33545451278">
									Tel: <span style={{ textDecoration: "underline" }}>0545451278</span>
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={5} style={{ marginTop: 8 }}>
					<Paper elevation={0} className={classes.paperHotels}>
						<Grid container spacing={1}>
							<Grid item>
								<img src={mairie} alt="eglise" className={classes.image} />
							</Grid>
							<Grid item>
								<Typography>FastHotel</Typography>
								<Typography
									component="a"
									style={{ textDecoration: "none", color: "black" }}
									href="tel:+33545451278">
									Tel: <span style={{ textDecoration: "underline" }}>0545451278</span>
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={5} style={{ marginTop: 8 }}>
					<Paper elevation={0} className={classes.paperHotels}>
						<Grid container spacing={1}>
							<Grid item>
								<img src={mairie} alt="eglise" className={classes.image} />
							</Grid>
							<Grid item>
								<Typography>FastHotel</Typography>
								<Typography
									component="a"
									style={{ textDecoration: "none", color: "black" }}
									href="tel:+33545451278">
									Tel: <span style={{ textDecoration: "underline" }}>0545451278</span>
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={5} style={{ marginTop: 8 }}>
					<Paper elevation={0} className={classes.paperHotels}>
						<Grid container spacing={1}>
							<Grid item>
								<img src={mairie} alt="eglise" className={classes.image} />
							</Grid>
							<Grid item>
								<Typography>FastHotel</Typography>
								<Typography
									component="a"
									style={{ textDecoration: "none", color: "black" }}
									href="tel:+33545451278">
									Tel: <span style={{ textDecoration: "underline" }}>0545451278</span>
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			<Typography align="right" style={{ padding: 8 }}>
				Voir plus
			</Typography>
		</>
	);
};

export default Hotels;
