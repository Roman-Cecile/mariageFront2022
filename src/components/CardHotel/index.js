import React from "react";

// Style
import useStyles from "../../styles/Card";

// Image
import mazetJean from "../../images/mazetJean.webp";

// React router
import { NavLink } from "react-router-dom";

// @Material UI
import { Typography, Paper, Grid } from "@material-ui/core";

const CardHotel = (props) => {
  const classes = useStyles();

  const hotels = [
    {
      image: mazetJean,
      name: "Le Mazet de Jean",
      link: "http://www.lemazetdejean.fr/",
      number: "33434041297",
    },
    {
      image: mazetJean,
      name: "Le Mazet de Bony",
      link: "https://www.airbnb.fr/rooms/18192620?source_impression_id=p3_1633257488_xZElLnsAaiLcVBDy&guests=1&adults=1",
      number: null,
    },
    {
      image: mazetJean,
      name: "Le Ponant",
      link: "https://www.airbnb.fr/rooms/18609419?source_impression_id=p3_1633258044_p2hJSQyrwmcH5HLx&guests=1&adults=1",
      number: "33651099173",
    },
    {
      image: mazetJean,
      name: "Fasthotel",
      link: "www.google.com",
      number: "33545451278",
    },
  ];

  return (
    <>
      <Grid container justify="space-around" className={classes.container}>
        {hotels.map(({ image, name, link, number }) => (
          <Grid key={number} item xs={5} style={{ marginTop: 8 }}>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ display: "block" }}
              href={link}>
              <Paper elevation={0} className={classes.paperHotels}>
                <Grid container spacing={1}>
                  <>
                    <Grid item>
                      <img
                        src={image}
                        alt={name}
                        className={classes.imageHotel}
                      />
                    </Grid>
                    <Grid item>
                      <Typography className="title">{name}</Typography>
                      <Typography
                        className="text"
                        component="a"
                        style={{ textDecoration: "none", color: "black" }}
                        href={number !== null && `tel:+${number}`}>
                        Tel:{" "}
                        <span
                          style={{
                            textDecoration: number !== null && "underline",
                          }}>
                          {number === null
                            ? "Contacter depuis le site"
                            : number}
                        </span>
                      </Typography>
                    </Grid>
                  </>
                </Grid>
              </Paper>
            </a>
          </Grid>
        ))}
      </Grid>
      <Typography align="right" style={{ padding: 8 }}>
        <NavLink className="text" to="/hotel">
          Voir plus
        </NavLink>
      </Typography>
    </>
  );
};

export default CardHotel;
