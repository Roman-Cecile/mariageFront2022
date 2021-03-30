import { makeStyles } from "@material-ui/core/styles";
import "../../styles/App.css";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: 70,
		minWidth: 150,
		backgroundColor: "#edefec",
		height: "100%",
		textAlign: "center",
	},

	navlink: {
		textDecoration: "none",
		color: "black",
	},

	text: {
		margin: "16px auto",
	},

	image: {
		width: 150,
		height: "auto",
	},
}));

export default useStyles;
