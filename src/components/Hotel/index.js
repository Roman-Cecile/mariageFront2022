import React from "react";

// @Material UI

import useStyles from "../../styles/Hotel";
import rings from "../../images/rings.svg";
// Image
import mazetJean from "../../images/mazetJean.webp";
import mazetBonny from "../../images/bonny.jpg";
import ponant from "../../images/ponant.jpg";
import fast from "../../images/fast.jpg";
import isabelle from "../../images/isabelle.jpg";
import brune from "../../images/brune.jpg";

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
  window.scrollTo(0, 0);

  const hotels = [
    {
      image: mazetJean,
      name: "Le Mazet de Jean",
      link: "http://www.lemazetdejean.fr/",
      number: "33434041297",
    },
    {
      image: mazetBonny,
      name: "Le Mazet de Bony",
      link: "https://www.airbnb.fr/rooms/18192620?source_impression_id=p3_1633257488_xZElLnsAaiLcVBDy&guests=1&adults=1",
      number: null,
    },
    {
      image: ponant,
      name: "Le Ponant",
      link: "https://www.airbnb.fr/rooms/18609419?source_impression_id=p3_1633258044_p2hJSQyrwmcH5HLx&guests=1&adults=1",
      number: "33651099173",
    },
    {
      image: fast,
      name: "Fasthotel",
      link: "https://www.fasthotel.com/languedoc-roussillon/hotel-nimes-ouest-lunel",
      number: "33545451278",
    },
    {
      image: isabelle,
      name: "Le Clos d'Isabelle",
      link: "https://www.booking.com/hotel/fr/le-clos-d-39-isabelle.en-gb.html?aid=356980;label=gog235jc-1FCAsoTUIQY2hhbWJyZS1jb3RlLXN1ZEgJWANoTYgBAZgBCbgBGcgBDNgBAegBAfgBAogCAagCA7gCjcimiwbAAgHSAiQ1YjlkMTEwNC1hNzEyLTRiNjYtOGRjNi01MjczNjQ2YTlkZDXYAgXgAgE;sid=5cda3435187b7719175ec902447fb0e6;dest_id=-1449960;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1634313231;srpvid=b5da6fc76aee0014;type=total;ucfs=1;sig=v1t88wICEM&#hotelTmpl",
      number: null,
    },
    {
      image: brune,
      name: "Le Mas Des Brune",
      link: "https://www.booking.com/hotel/fr/le-mas-des-brune.en-gb.html?aid=356980;label=gog235jc-1DCAsoTUIQY2hhbWJyZS1jb3RlLXN1ZEgJWANoTYgBAZgBCbgBGcgBDNgBA-gBAfgBAogCAagCA7gCjcimiwbAAgHSAiQ1YjlkMTEwNC1hNzEyLTRiNjYtOGRjNi01MjczNjQ2YTlkZDXYAgTgAgE;sid=5cda3435187b7719175ec902447fb0e6;dest_id=-1449960;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=12;hpos=12;no_rooms=1;room1=A%2CA;sb_price_type=total;spdest=ci%2F-1449960;spdist=3.7;sr_order=popularity;srepoch=1634313557;srpvid=e6ae706aef300051;type=total;ucfs=1;sig=v1gszSiNdg&#hotelTmpl",
      number: null,
    },
  ];

  return (
    <>
      <div className={classes.bandeau}>
        <NavLink to="/">
          <img src={rings} alt="rings" style={{ width: "auto" }} />
        </NavLink>
      </div>

      <Typography variant="h6" align="center" style={{ margin: "10px auto" }}>
        Cette liste d'hotêl est non exhaustive. Il y à d'autres établissements
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
                    <a target="_blank" rel="noreferrer" href={link}>
                      <Language style={{ color: "white" }} />
                    </a>
                    {number !== null && (
                      <IconButton color="secondary" aria-label="Phone">
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
