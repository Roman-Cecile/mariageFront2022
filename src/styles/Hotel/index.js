import { makeStyles } from "@material-ui/core/styles";
import "../../styles/App.css";
import bandeau from "../../images/hotel.jpg";

const useStyles = makeStyles((theme) => ({
	bandeau: {
		width: "100%",
		height: "10vh",
		backgroundImage: `url(${bandeau})`,
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		backgroundPositionY: -545,
		backgroundPositionx: 145,
	},

	card: {
		maxWidth: 180,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		minHeight: 50,
	},
}));

export default useStyles;
