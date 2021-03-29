import { makeStyles } from "@material-ui/core/styles";
import "../../styles/App.css";
import jumbo from "../../images/jumbo.jpg";

const useStyles = makeStyles((theme) => ({
	// Places
	container: {
		padding: "8px 16px",
	},
	paperPlaces: {
		margin: "32px auto",
		backgroundColor: "#e3e3df",
	},

	image: {
		borderRadius: 4,
	},

	// Hotels

	paperHotels: {
		backgroundColor: "inherit",
	},
}));

export default useStyles;
