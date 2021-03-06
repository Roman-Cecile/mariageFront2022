import React from "react";

// @Material UI
import {
  Typography,
  SwipeableDrawer as DrawerComponent,
} from "@material-ui/core";

// React router
import { NavLink } from "react-router-dom";

// Style
import useStyles from "../../styles/Drawer";

// Image
import logoDrawer from "../../images/logoDrawer.svg";

// Utils
import { navbarActions } from "../../utils";

const Drawer = ({ setOpen, open, isLogged, axiosLogout }) => {
  const classes = useStyles();

  return (
    <DrawerComponent
      anchor="right"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      style={{ maxWidth: 150 }}>
      <div className={classes.container}>
        {navbarActions.map(({ text, link }) => (
          <NavLink
            key={text}
            to={link}
            className={classes.navlink}
            onClick={() => setOpen(false)}>
            <Typography variant="body1" className={`${classes.text} title`}>
              {text}
            </Typography>
          </NavLink>
        ))}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <img className={classes.image} src={logoDrawer} alt="logo" />
          <Typography
            className="title"
            variant="button"
            onClick={() => {
              axiosLogout();
              setOpen(false);
            }}>
            Déconnexion
          </Typography>
        </div>
      </div>
    </DrawerComponent>
  );
};

export default Drawer;
