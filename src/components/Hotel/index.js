import React from "react";

// @Material UI

import useStyles from "../../styles/Hotel";
import rings from "../../images/rings.svg";
// hotels
import { hotels } from "../../utils";

import {
  Card,
  CardActions,
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
  window.scrollTo(0, 0);

  return (
    <>
      <div className={classes.bandeau}>
        <NavLink to='/'>
          <img src={rings} alt='rings' style={{ width: "auto" }} />
        </NavLink>
      </div>

      <Typography variant='h6' align='center' style={{ margin: "10px auto" }}>
        Cette liste d'hotêl est non exhaustive. il y a d'autres établissements
        disponibles
      </Typography>

      {/*..............CARD.............. */}

      <Grid
        style={{ maxWidth: 900, margin: "auto", placeContent: "center" }}
        container>
        {hotels.map(({ name, image, description, link, number }) => (
          <Grid style={{ margin: 2 }} xs={12} md={4} item key={name}>
            <Card className={classes.card} elevation={0}>
              <CardHeader title={name} />
              <CardMedia className={classes.media} image={image} title={name}>
                <div
                  style={{
                    height: "100%",
                    color: "white",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <CardActions>
                    <a target='_blank' rel='noreferrer' href={link}>
                      <Language style={{ color: "white" }} />
                    </a>
                    {number !== null && (
                      <IconButton color='secondary' aria-label='Phone'>
                        <Phone />
                      </IconButton>
                    )}
                  </CardActions>
                </div>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Hotel;
