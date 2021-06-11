import React from "react";

// @Material UI

import useStyles from "../../styles/LandingPage";
import rings from "../../images/rings.svg";

import { Fade, Slide, Typography } from "@material-ui/core";
import Places from "../Places";
import CardHotel from "../CardHotel";
import Contact from "../Contact";

const LandingPage = ({ open, setOpen, responsive }) => {
	const classes = useStyles();
	return (
		<>
			<header>
				<div className={classes.header}>
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
						<Fade in timeout={1600}>
							<img src={rings} alt="rings" style={{ width: "30%" }} />
						</Fade>
					</div>
				</div>
			</header>
			<main className={classes.main}>
				<Typography align="center" variant="h5" className={classes.date}>
					Le 2 juillet 2022
				</Typography>
				<article className={classes.maxWidth}>
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
				<div className={classes.spaceBetweenArticle} />
				{/*.....................PLACES.....................*/}
				<article className={classes.containerPlaces}>
					<Typography align="center" variant="h5" className={classes.date}>
						Les lieux
					</Typography>
					<div className={classes.maxWidth}>
						<Places />
					</div>
				</article>
				<div className={classes.spaceBetweenArticle} />
				{/*.....................HOTELS.....................*/}
				<article className={classes.maxWidth}>
					<Typography align="center" variant="h5" className={classes.date}>
						Où dormir ?
					</Typography>
					<CardHotel />
				</article>
				<div className={classes.spaceBetweenArticle} />
				{/*.....................CONTACT.....................*/}
				<article className={classes.containerPlaces}>
					<Typography align="center" variant="h5" className={classes.date}>
						Nous contacter
					</Typography>
					<div className={classes.maxWidth}>
						<Contact />
						<footer className={classes.footer}>
							<Typography align="center" color="textSecondary" variant="subtitle2">
								Fabriqué par Roman
							</Typography>
						</footer>
					</div>
				</article>
			</main>
		</>
	);
};

export default LandingPage;
