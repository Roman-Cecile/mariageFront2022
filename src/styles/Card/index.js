import { makeStyles } from "@material-ui/core/styles";
import "../../styles/App.css";

const useStyles = makeStyles((theme) => ({
  // Places
  container: {
    padding: "8px 16px",
    maxWidth: 800,
    margin: "auto",
    borderRadius: 8,
  },
  paperPlaces: {
    margin: "32px auto",
    backgroundColor: "#c2d0d46b",
    borderRadius: 8,
  },

  paperText: {
    padding: 8,
  },

  imageHotel: {
    borderRadius: 6,
  },

  imageRight: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  imageLeft: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  // Hotels

  paperHotels: {
    backgroundColor: "inherit",
  },
}));

export default useStyles;
