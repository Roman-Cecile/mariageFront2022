import React from "react";
import PropTypes from "prop-types";

// @Material UI
import { CssBaseline } from "@material-ui/core";

// Components
import LandingPage from "../LandingPage";
import Questionnaire from "../Questionnaire";

// Router dom
import { Route, Switch } from "react-router-dom";

const App = (props) => {
	return (
		<>
			<CssBaseline />
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/rsvp" exact component={Questionnaire} />
			</Switch>
		</>
	);
};

export default App;
