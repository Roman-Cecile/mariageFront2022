import React from "react";

// @Material UI

import useStyles from "../../styles/Hotel";
import rings from "../../images/rings.svg";
import hotel from "../../images/hotel.jpg";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Phone, Language } from "@material-ui/icons";
const Hotel = ({ setOpen, open }) => {
  const classes = useStyles();

  const hotels = [
    {
      name: "Paella dish",
      image: hotel,
      description: "Chambre de 2 personnes",
      link: "https://www.google.fr",
      number: "+33645257841",
    },
    {
      name: "Paella dish",
      image: hotel,
      description: "Chambre de 2 personnes",
      link: "https://www.google.fr",
      number: "+33645257841",
    },
    {
      name: "Paella dish",
      image: hotel,
      description: "Chambre de 2 personnes",
      link: "https://www.google.fr",
      number: "+33645257841",
    },
  ];

  return (
    <>
      <div className={classes.bandeau}>
        <NavLink to="/">
          <img src={rings} alt="rings" style={{ width: "auto" }} />
        </NavLink>
      </div>

      {/*..............CARD.............. */}

      <Grid container justify="space-around">
        {hotels.map(({ name, image, description, link, number }) => (
          <Grid item>
            <Card className={classes.card} elevation={0}>
              <CardHeader title="Fast Hotel" subheader="Hotel" />
              <CardMedia className={classes.media} image={image} title={name} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a href={link}>
                  <Language color="primary" />
                </a>
                <IconButton aria-label="Phone">
                  <Phone />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Hotel;
