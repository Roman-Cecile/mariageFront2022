import React from "react";
import PropTypes from "prop-types";

// @Material UI
import { AppBar, Toolbar, Typography, CssBaseline, Container, Grid } from "@material-ui/core";

// Components
import LandingPage from "../LandingPage";

// Router dom
import { NavLink, Route, Switch } from "react-router-dom";

// style
import useStyles from "../../styles/App";

const App = (props) => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Switch>
				<Route path="/" extact component={LandingPage} />
			</Switch>
		</>
	);
};

export default App;
