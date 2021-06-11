import React from "react";

// Style
import useStyles from "../../styles/Card";

// Image
import mairie from "../../images/jumbo.jpg";

// React router
import { NavLink } from "react-router-dom";

// @Material UI
import { Typography, Paper, Grid } from "@material-ui/core";

const CardHotel = (props) => {
	const classes = useStyles();

	const hotels = [
		{
			image: mairie,
			name: "Fasthotel",
			link: "www.google.com",
			number: "33545451278",
		},
		{
			image: mairie,
			name: "Fasthotel",
			link: "www.google.com",
			number: "33545451278",
		},
		{
			image: mairie,
			name: "Fasthotel",
			link: "www.google.com",
			number: "33545451278",
		},
		{
			image: mairie,
			name: "Fasthotel",
			link: "www.google.com",
			number: "33545451278",
		},
	];

	return (
		<>
			<Grid container justify="space-around" className={classes.container}>
				{hotels.map(({ image, name, link, number }) => (
					<Grid item xs={5} style={{ marginTop: 8 }}>
						<Paper elevation={0} className={classes.paperHotels}>
							<Grid container spacing={1}>
								<>
									<Grid item>
										<img src={image} alt={name} className={classes.image} />
									</Grid>
									<Grid item>
										<Typography>{name}</Typography>
										<Typography
											component="a"
											style={{ textDecoration: "none", color: "black" }}
											href={`tel:+${number}`}>
											Tel: <span style={{ textDecoration: "underline" }}>{number}</span>
										</Typography>
									</Grid>
								</>
							</Grid>
						</Paper>
					</Grid>
				))}
			</Grid>
			<Typography align="right" style={{ padding: 8 }}>
				<NavLink to="/hotel">Voir plus</NavLink>
			</Typography>
		</>
	);
};

export default CardHotel;
