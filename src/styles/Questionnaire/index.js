import { makeStyles } from "@material-ui/core/styles";
import "../../styles/App.css";
import bandeau from "../../images/bandeau.jpg";

const useStyles = makeStyles((theme) => ({
	bandeau: {
		width: "100%",
		height: "10vh",
		backgroundImage: `url(${bandeau})`,
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		backgroundPositionY: -145,
	},

	radioBox: {
		padding: 16,
		maxWidth: 1200,
		margin: "auto auto 24px auto",
	},

	paper: {
		padding: 8,
		margin: "auto 8px",
		position: "relative",
	},

	button: {
		backgroundColor: "#b9c7a1",
		color: "white",
		fontWeight: "bold",
	},

	question: {
		margin: 16,
		fontFamily: "'Prata', serif",
	},
}));

export default useStyles;
