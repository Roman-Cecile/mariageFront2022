/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

// @Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// Components
import LandingPage from "../LandingPage";
import Questionnaire from "../../containers/Questionnaire";

// Router dom
import { NavLink, Route, Switch } from "react-router-dom";

import { Menu as BurgerMenu } from "@material-ui/icons";
import useStyles from "../../styles/LandingPage";
import Drawer from "../Drawer";
import Hotel from "../Hotel";
import Login from "./login";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { navbarActions } from "../../utils";

const App = ({ axiosLogin, isLogged, axiosCheckLog, axiosLogout, message }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.up("md"));
  // TRY TO PUSH ON PROD

  React.useEffect(() => {
    axiosCheckLog();
  }, []);
  return (
    <>
      {isLogged &&
        (responsive ? (
          <nav>
            <AppBar color="transparent" elevation={0} style={{ zIndex: 0 }}>
              <Toolbar>
                <div className={classes.navbar}>
                  {navbarActions.map(({ text, link, icon }) => (
                    <NavLink key={text} className={classes.hoverLink} to={link}>
                      <Typography
                        className={`${classes.fontFamilyLink} title`}
                        align="center">
                        {text}
                      </Typography>
                      {icon}
                    </NavLink>
                  ))}
                </div>

                <Button
                  onClick={axiosLogout}
                  size="small"
                  className={`${classes.fontFamilyLink} ${classes.hoverLink} title`}>
                  Déconnexion
                </Button>
              </Toolbar>
            </AppBar>
          </nav>
        ) : (
          <BurgerMenu
            className={classes.burgerMenu}
            fontSize="large"
            onClick={() => setOpen(true)}
          />
        ))}
      <Switch>
        {window.localStorage.getItem("familyId") ? (
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
              <Login
                axiosLogin={axiosLogin}
                isLogged={isLogged}
                message={message}
              />
            </Route>
          </>
        )}
      </Switch>
      <Drawer
        open={open}
        setOpen={setOpen}
        isLogged={isLogged}
        axiosLogout={axiosLogout}
      />
    </>
  );
};

export default App;
