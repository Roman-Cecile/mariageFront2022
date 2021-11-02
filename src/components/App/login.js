import React, { useState } from "react";

// @Material UI

import useStyles from "../../styles/LandingPage";

import { Button, Collapse, TextField, Typography } from "@material-ui/core";

const Login = ({ axiosLogin, isLogged, message }) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");

  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <Typography variant="h5" align="center" className={classes.fontFamily}>
        Bienvenue !
      </Typography>
      <Typography variant="body1" align="center" style={{ margin: 16 }}>
        Veuillez indiquer le code d'invitation disponible avec votre faire part
      </Typography>
      <Collapse in={message !== ""}>
        <Typography align="center" color="error">
          {message}
        </Typography>
      </Collapse>
      <div>
        <form
          className={classes.form}
          onSubmit={(event) => axiosLogin(event, password)}>
          <TextField
            value={password}
            label="Code d'invitation"
            onChange={(event) => setPassword(event.target.value)}
            required
            variant="outlined"
            fullWidth
            helperText="Si vous ne trouvez pas le code, envoyez un mail à roman.c6lle@gmail.com"
          />

          <Button
            fullWidth
            className="text"
            style={{ backgroundColor: "#598a986b", marginTop: 16 }}
            variant="contained"
            type="submit">
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
