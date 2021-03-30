import React, { useState } from "react";
import PropTypes from "prop-types";

// @Material UI
import { CssBaseline } from "@material-ui/core";

// Components
import LandingPage from "../LandingPage";
import Questionnaire from "../Questionnaire";

// Router dom
import { Route, Switch } from "react-router-dom";

import { Menu as BurgerMenu } from "@material-ui/icons";
import useStyles from "../../styles/LandingPage";
import Drawer from "../Drawer";

const App = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	console.log({ open });
	return (
		<>
			<BurgerMenu className={classes.burgerMenu} fontSize="large" onClick={() => setOpen(true)} />
			<Switch>
				<Route path="/" exact>
					<LandingPage open={open} setOpen={setOpen} />
				</Route>
				<Route path="/rsvp" exact component={Questionnaire} />
			</Switch>
			<Drawer open={open} setOpen={setOpen} />
		</>
	);
};

export default App;
