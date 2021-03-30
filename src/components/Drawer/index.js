import React from "react";
import PropTypes from "prop-types";

// @Material UI

import useStyles from "../../styles/Drawer";
import logoDrawer from "../../images/logoDrawer.svg";

import { Typography, SwipeableDrawer as DrawerComponent } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const Drawer = ({ setOpen, open }) => {
	const classes = useStyles();

	return (
		<DrawerComponent
			anchor="right"
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			style={{ maxWidth: 150 }}>
			<div className={classes.container}>
				<NavLink to="/" className={classes.navlink} onClick={() => setOpen(false)}>
					<Typography variant="body1" className={classes.text}>
						Accueil
					</Typography>
				</NavLink>
				<NavLink to="/hotel" className={classes.navlink} onClick={() => setOpen(false)}>
					<Typography variant="body1" className={classes.text}>
						Hôtels
					</Typography>
				</NavLink>
				<NavLink to="/rsvp" className={classes.navlink} onClick={() => setOpen(false)}>
					<Typography variant="body1" className={classes.text}>
						RSVP
					</Typography>
				</NavLink>
				<img className={classes.image} src={logoDrawer} alt="logo" />
			</div>
		</DrawerComponent>
	);
};

Drawer.propTypes = {
	setOpen: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default Drawer;
