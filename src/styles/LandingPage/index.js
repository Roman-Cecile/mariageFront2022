import { makeStyles } from "@material-ui/core/styles";
import "../../styles/App.css";
import jumbo from "../../images/jumbo.jpg";

const useStyles = makeStyles((theme) => ({
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
		fontFamily: "'Prata', serif",
	},

	subTitle: {
		fontFamily: "'Prata', serif",
		fontSize: theme.typography.h5.fontSize,
		margin: 16,
	},

	date: {
		padding: "32px 0",
		fontFamily: "'Prata', serif",
	},

	paragraph: {
		padding: 16,
	},

	main: {
		backgroundColor: "#edefec",

		position: "relative",
		maxWidth: 1200,
		margin: "auto",
	},

	containerPlaces: {
		backgroundColor: "#b2a49e2b",
	},

	footer: {
		padding: 16,
	},
}));

export default useStyles;
