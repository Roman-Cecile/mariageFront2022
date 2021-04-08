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
		backgroundColor: "#b9c7a1",
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
		fontFamily: "'Prata', serif !important",
	},

	subTitle: {
		fontFamily: "'Prata', serif !important",
		fontSize: theme.typography.h5.fontSize,
		margin: 16,
	},

	date: {
		padding: "32px 0",
		fontFamily: "'Prata', serif !important",
	},

	paragraph: {
		padding: 16,
	},

	main: {
		backgroundColor: "#edefec",

		position: "relative",
		// maxWidth: 1200,
		margin: "auto",
	},

	containerPlaces: {
		backgroundColor: "#b2a49e2b",
	},

	footer: {
		padding: 16,
	},

	//..........LOGIN PAGE.............
	form: {
		margin: 16,
	},

	fontFamilyLogin: {
		fontFamily: "'Prata', serif !important",
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
