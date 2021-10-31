import React from "react";

// @Material UI
import { Typography, Paper, Grid } from "@material-ui/core";

import useStyles from "../../styles/Card";
import mairie from "../../images/mairie.jpg";
import eglise from "../../images/eglise.jpeg";
import domaine from "../../images/grandmalherbe.jpg";

const Places = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper elevation={0} className={classes.paperPlaces}>
        <Grid container>
          <Grid item xs={6} md={4}>
            <img src={mairie} alt="mairie" className={classes.imageRight} />
          </Grid>
          <Grid item xs={6} md={8} className={classes.paperText}>
            <Typography className="title" align="right">
              LA MAIRIE
            </Typography>
            <Typography className="text" align="right">
              1 Rue de la Mairie, 30420 Calvisson
            </Typography>
            <Typography className="text" align="right">
              14h30
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.paperPlaces}>
        <Grid container>
          <Grid item xs={6} md={8} className={classes.paperText}>
            <Typography className="title">L'ÉGLISE</Typography>
            <Typography className="text">
              4 Rue du Foyer, 30420 Calvisson
            </Typography>
            <Typography className="text">15h00</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={eglise} alt="eglise" className={classes.imageLeft} />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.paperPlaces}>
        <Grid container>
          <Grid item xs={6} md={4}>
            <img
              src={domaine}
              alt="La réception"
              className={classes.imageRight}
            />
          </Grid>
          <Grid item xs={6} md={8} className={classes.paperText}>
            <Typography className="title" align="right">
              LA RÉCEPTION
            </Typography>
            <Typography className="text" align="right">
              Route Des Plages 1, 30470 Aimargues
            </Typography>
            <Typography className="text" align="right">
              18h00
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Places;
