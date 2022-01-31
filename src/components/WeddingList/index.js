import { Typography } from "@material-ui/core";
import React from "react";
import listeMariage from "../../images/liste-de-mariage.png";

const WeddingList = (props) => {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography align='center' variant='h5'>
        <a href='https://www.petit-mariage-entre-amis.fr/vinciane-et-roman/liste-de-mariage'>
          <img src={listeMariage} alt='liste de mariage' />
          Pour participer à notre liste de mariage cliquez ici !
        </a>
      </Typography>
    </div>
  );
};

WeddingList.propTypes = {};

export default WeddingList;
