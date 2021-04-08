/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// Components
import LandingPage from "../LandingPage";
import Questionnaire from "../../containers/Questionnaire";

// Router dom
import { NavLink, Route, Switch } from "react-router-dom";

import { Menu as BurgerMenu, Hotel as HotelIcon, Home as HomeIcon, Email as EmailIcon } from "@material-ui/icons";
import useStyles from "../../styles/LandingPage";
import Drawer from "../Drawer";
import Hotel from "../Hotel";
import Login from "./login";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const App = ({ axiosLogin, isLog, axiosCheckLog, axiosLogout, message }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const responsive = useMediaQuery(theme.breakpoints.up("md"));

	useEffect(() => {
		axiosCheckLog();
	}, []);
	return (
		<>
			{isLog &&
				(responsive ? (
					<nav>
						<AppBar color="transparent" elevation={0} style={{ zIndex: 0 }}>
							<Toolbar>
								<div className={classes.navbar}>
									<NavLink className={classes.hoverLink} to="/">
										<Typography className={classes.fontFamilyLogin} align="center">
											Accueil
										</Typography>
										<HomeIcon fontSize="small" style={{ paddingLeft: 4 }} />
									</NavLink>
									<NavLink className={classes.hoverLink} to="/hotel">
										<Typography className={classes.fontFamilyLogin} align="center">
											Hotels
										</Typography>
										<HotelIcon fontSize="small" style={{ paddingLeft: 4 }} />
									</NavLink>
									<NavLink className={classes.hoverLink} to="/rsvp">
										<Typography className={classes.fontFamilyLogin} align="center">
											RSVP
										</Typography>
										<EmailIcon fontSize="small" style={{ paddingLeft: 4 }} />
									</NavLink>
								</div>

								<Button
									onClick={axiosLogout}
									size="small"
									className={`${classes.fontFamilyLogin} ${classes.hoverLink}`}>
									Déconnexion
								</Button>
							</Toolbar>
						</AppBar>
					</nav>
				) : (
					<BurgerMenu className={classes.burgerMenu} fontSize="large" onClick={() => setOpen(true)} />
				))}
			<Switch>
				{isLog ? (
					<>
						<Route responsive={responsive} path="/" exact>
							<LandingPage open={open} setOpen={setOpen} />
						</Route>
						<Route path="/rsvp" exact component={Questionnaire} />
						<Route path="/hotel" exact component={Hotel} />
					</>
				) : (
					<>
						<Route>
							<Login axiosLogin={axiosLogin} isLog={isLog} message={message} />
						</Route>
					</>
				)}
			</Switch>
			<Drawer open={open} setOpen={setOpen} isLog={isLog} axiosLogout={axiosLogout} />
		</>
	);
};

export default App;
