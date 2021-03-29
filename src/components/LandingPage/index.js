import React from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/LandingPage";

import { Menu as BurgerMenu } from "@material-ui/icons";
import { Slide, Typography } from "@material-ui/core";
import Places from "../Places";
import Hotels from "../Hotels";
import Contact from "../Contact";

const LandingPage = (props) => {
	const classes = useStyles();
	return (
		<>
			<header>
				<div className={classes.header}>
					<BurgerMenu className={classes.burgerMenu} fontSize="large" />
					<div className={classes.containerTitle}>
						{/* h3 sur pc et h4 sur mobile */}
						<Slide direction="left" in mountOnEnter unmountOnExit timeout={1300}>
							<Typography component="h1" variant="h4" className={classes.titleName}>
								Vinciane & Roman
							</Typography>
						</Slide>
						<Slide direction="right" in mountOnEnter unmountOnExit timeout={1500}>
							<Typography className={classes.subTitle}>Se Marient</Typography>
						</Slide>
					</div>
				</div>
			</header>
			<main className={classes.main}>
				<Typography align="center" variant="h5" className={classes.date}>
					Le 2 juillet 2022
				</Typography>
				<article>
					<Typography paragraph align="justify" className={classes.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales nec ligula vitae pharetra.
						Maecenas odio metus, gravida et eros vitae, semper facilisis massa. Pellentesque commodo aliquam
						lobortis. Morbi feugiat posuere convallis. Cras interdum nunc ut nunc mattis, a ornare leo
						feugiat. Nullam tempus, sem vitae fermentum sollicitudin, lorem diam sollicitudin mi, sed
						fermentum mi leo at neque. Phasellus congue leo lacus, eget mollis enim elementum ac. Curabitur
						at nibh dignissim, euismod ipsum sed, dictum quam. Maecenas et condimentum magna, tempor
						placerat magna. In laoreet hendrerit mi. Nullam neque velit, porttitor quis elementum vel,
						lacinia in sapien. Suspendisse potenti.
					</Typography>
				</article>

				{/*.....................PLACES.....................*/}
				<article className={classes.containerPlaces}>
					<Typography align="center" variant="h5" className={classes.date}>
						Les lieux
					</Typography>
					<Places />
				</article>

				{/*.....................HOTELS.....................*/}
				<article>
					<Typography align="center" variant="h5" className={classes.date}>
						Où dormir ?
					</Typography>
					<Hotels />
				</article>

				{/*.....................CONTACT.....................*/}
				<article className={classes.containerPlaces}>
					<Typography align="center" variant="h5" className={classes.date}>
						Nous contacter
					</Typography>
					<Contact />
					<footer className={classes.footer}>
						<Typography align="center" color="textSecondary" variant="subtitle2">
							Fabriqué par Roman
						</Typography>
					</footer>
				</article>
			</main>
		</>
	);
};

export default LandingPage;
