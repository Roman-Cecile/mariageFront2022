import { Hotel as HotelIcon, Home as HomeIcon, Email as EmailIcon } from "@material-ui/icons";

export const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const navbarActions = [
	{
		text: "Accueil",
		link: "/",
		icon: <HomeIcon fontSize="small" style={{ paddingLeft: 4 }} />,
	},
	{
		text: "Hôtels",
		link: "/hotel",
		icon: <HotelIcon fontSize="small" style={{ paddingLeft: 4 }} />,
	},
	{
		text: "RSVP",
		link: "/rsvp",
		icon: <EmailIcon fontSize="small" style={{ paddingLeft: 4 }} />,
	},
];

export const urlAPI = "https://api-mariage.herokuapp.com";
