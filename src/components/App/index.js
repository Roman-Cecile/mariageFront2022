/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @Material UI

// Components
import LandingPage from "../LandingPage";
import Questionnaire from "../../containers/Questionnaire";

// Router dom
import { Route, Switch } from "react-router-dom";

import { Menu as BurgerMenu } from "@material-ui/icons";
import useStyles from "../../styles/LandingPage";
import Drawer from "../Drawer";
import Hotel from "../Hotel";
import Login from "./login";

const App = ({ axiosLogin, isLog, axiosCheckLog, axiosLogout }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		axiosCheckLog();
	}, []);
	return (
		<>
			{isLog && <BurgerMenu className={classes.burgerMenu} fontSize="large" onClick={() => setOpen(true)} />}
			<Switch>
				{isLog ? (
					<>
						<Route path="/" exact>
							<LandingPage open={open} setOpen={setOpen} />
						</Route>
						<Route path="/rsvp" exact component={Questionnaire} />
						<Route path="/hotel" exact component={Hotel} />
					</>
				) : (
					<>
						<Route>
							<Login axiosLogin={axiosLogin} isLog={isLog} />
						</Route>
					</>
				)}
			</Switch>
			<Drawer open={open} setOpen={setOpen} isLog={isLog} axiosLogout={axiosLogout} />
		</>
	);
};

export default App;
