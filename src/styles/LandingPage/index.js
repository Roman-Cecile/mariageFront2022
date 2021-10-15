import { makeStyles } from "@material-ui/core/styles";
import "../../styles/App.css";
import jumbo from "../../images/jumbo.jpg";

const useStyles = makeStyles((theme) => ({
  maxWidth: {
    maxWidth: 1080,
    margin: "auto",
  },

  spaceBetweenArticle: {
    width: "100%",
    height: 20,
    backgroundColor: "#c2d0d46b",
    boxShadow: "inset 0px 1.4px 5px #79797987",
  },
  header: {
    width: "100%",
    height: "80vh",
    backgroundImage: `url(${jumbo})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },

  burgerMenu: {
    margin: 16,
    position: "fixed",
    right: 16,
    zIndex: 1,
  },

  containerTitle: {
    textAlign: "center",
    position: "fixed",
    top: "30%",
    right: "50%",
    transform: "translate(50%,-50%)",
    width: "fit-content",
  },

  titleName: {
    lineHeight: "normal",
  },

  subTitle: {
    fontSize: theme.typography.h5.fontSize,
    margin: 16,
  },

  date: {
    padding: "32px 0",
  },

  paragraph: {
    padding: 16,
  },

  main: {
    backgroundColor: "#d8e0e2",

    position: "relative",
    // maxWidth: 1200,
    margin: "auto",
  },

  footer: {
    padding: 16,
  },

  //..........LOGIN PAGE.............

  fontFamilyLink: {
    color: "white",
  },

  // PC version
  navbar: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    display: "flex",
  },

  hoverLink: {
    color: "inherit",
    margin: "auto ",
    transition: "0.3s",
    display: "flex",
    padding: "4px 8px",
    "&:hover": {
      backgroundColor: "#80808017",
      borderRadius: 4,
      fontWeight: "bolder",
      color: "#e58a56",
    },
  },
}));

export default useStyles;
