const { makeStyles, createMuiTheme } = require("@material-ui/core");

const font = "'Redressed', cursive";

const useStyles = makeStyles((theme) => ({
	app: {
		textAlign: "center",
	},

	fontTitle: {
		fontFamily: font,
	},
}));

export default useStyles;
