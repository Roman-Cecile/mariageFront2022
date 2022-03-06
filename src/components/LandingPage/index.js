import React, { useState } from "react";

// @Material UI

import useStyles from "../../styles/LandingPage";
import rings from "../../images/rings.svg";

import { Fade, Modal, Slide, Typography, Backdrop } from "@material-ui/core";
import Places from "../Places";
import CardHotel from "../CardHotel";
import Contact from "../Contact";
import { useHistory } from "react-router-dom";
import WeddingList from "../WeddingList";

// import "./font.css";

const LandingPage = ({ open, setOpen, responsive }) => {
  const [day] = React.useState(
    (Date.parse("July 02, 2022 14:30:00") - Date.now()) / (1000 * 3600 * 24)
  );
  const classes = useStyles();
  const history = useHistory();

  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <header>
        <div className={classes.header}>
          <div className={classes.containerTitle}>
            {/* h3 sur pc et h4 sur mobile */}
            <Slide
              direction='left'
              in
              mountOnEnter
              unmountOnExit
              timeout={1300}>
              <Typography
                component='h1'
                variant='h3'
                className={`${classes.titleName} title`}>
                Vinciane & Roman
              </Typography>
            </Slide>
            <Slide
              direction='right'
              in
              mountOnEnter
              unmountOnExit
              timeout={1500}>
              <Typography className={`${classes.subTitle} title`}>
                Se Marient
              </Typography>
            </Slide>
            <Fade in timeout={1600}>
              <img src={rings} alt='rings' style={{ width: "30%" }} />
            </Fade>
            <div
              id='countdown'
              className='text'
              style={{
                color: "white",
                fontSize: "1.8rem",
                fontWeight: "bold",
              }}>
              {`Dans ${day.toFixed(0)} jours`}
            </div>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <Typography
          align='center'
          variant='h5'
          className={`${classes.date} title`}>
          Le 2 juillet 2022
        </Typography>
        <article className={classes.maxWidth}>
          <Typography
            paragraph
            align='justify'
            className={`${classes.paragraph} text`}>
            Bienvenue sur le site de notre mariage ! Après 10 ans d’amour, nous
            avions envie de célébrer notre union en compagnie de tous ceux qui
            nous sont chers. Nous espérons pouvoir vous compter parmi nous ! En
            naviguant sur les différentes rubriques de notre site, vous
            découvrirez tout ce qu’il faut savoir sur notre jour J ! Vous pouvez
            aussi nous faire part de votre présence{" "}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => history.push("/rsvp")}>
              ici
            </span>{" "}
            ou nous laisser un petit message dans le formulaire de contact en
            bas de page. A bientôt ! Vinciane & Roman
          </Typography>
        </article>
        <div className={classes.spaceBetweenArticle} />
        {/*.....................PLACES.....................*/}
        <article>
          <Typography
            align='center'
            variant='h5'
            className={`${classes.date} title`}>
            Les lieux
          </Typography>
          <div className={classes.maxWidth}>
            <Places />
          </div>
        </article>
        <div className={classes.spaceBetweenArticle} />
        {/*.....................WEDDING LIST.....................*/}
        <article className={classes.maxWidth}>
          <WeddingList />
        </article>
        <div className={classes.spaceBetweenArticle} />
        {/*.....................HOTELS.....................*/}
        <article className={classes.maxWidth}>
          <Typography
            align='center'
            variant='h5'
            className={`${classes.date} title`}>
            Où dormir ?
          </Typography>
          <CardHotel />
        </article>
        <div className={classes.spaceBetweenArticle} />

        {/*.....................CONTACT.....................*/}
        <article>
          <Typography
            align='center'
            variant='h5'
            className={`${classes.date} title`}>
            Nous contacter
          </Typography>
          <div className={classes.maxWidth}>
            <Contact />
            <footer className={classes.footer}>
              <Typography
                align='center'
                color='textSecondary'
                variant='subtitle2'>
                Conçu par Roman
              </Typography>
            </footer>
          </div>
        </article>
      </main>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Typography variant='h4' align='center' id='transition-modal-title'>
              Mise à jour !
            </Typography>
            <ul>
              <li style={{ fontSize: "1.4rem" }}>
                <span style={{ fontWeight: "bold" }}>
                  Nouveaux hôtels disponibles !
                </span>{" "}
              </li>
              <li style={{ fontSize: "1.4rem" }}>
                <span style={{ fontWeight: "bold" }}>
                  Navette retour soirée:
                </span>{" "}
                Besoin d'un transport pour rejoindre votre hôtel ? Contactez
                nous !
              </li>
              <li style={{ fontSize: "1.4rem" }}>
                <span style={{ fontWeight: "bold" }}>Dimanche:</span> Brunch
                autour de la piscine du domaine à partir de 11h30
              </li>
              <li style={{ fontSize: "1.4rem" }}>
                <span style={{ fontWeight: "bold" }}>Liste de mariage</span> Si
                vous souhaitez participer à notre liste de mariage, elle est
                disponible !
              </li>
              <li style={{ fontSize: "1.4rem" }}>
                <span style={{ fontWeight: "bold" }}>Date limite</span>Vous
                pouvez nous donner une réponse jusqu'au 31 mars 2022
              </li>
            </ul>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default LandingPage;
