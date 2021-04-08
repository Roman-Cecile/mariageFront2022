import axios from "axios";
// import { urlAPI } from "../utils/genericFunctions";

import {
	AXIOS_LOGIN,
	AXIOS_CHECK_LOG,
	AXIOS_LOGOUT,
	stateUsers,
	stateResetAfterLogout,
	stateMessage,
} from "../actions/family";

axios.defaults.withCredentials = true; // ! NE JAMAIS OUBLIER
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

const familyAPI = (store) => (next) => (action) => {
	switch (action.type) {
		case AXIOS_LOGIN: {
			const data = new FormData();
			data.set("password", action.password);
			axios(
				{
					method: "POST",
					url: `http://localhost:5050/login`,
					data,
				},
				{
					withCredentials: true,
				}
			)
				.then((response) => {
					store.dispatch(stateUsers("login", response.data.family));
				})
				.catch((err) => {
					if (err.response) {
						store.dispatch(stateMessage(err.response.data.message));
					} else {
						store.dispatch(stateMessage("Le serveur ne répond pas, veuillez réessayez plus tard"));
					}
					console.log({ err });
				});
			break;
		}
		case AXIOS_CHECK_LOG: {
			axios(
				{
					method: "GET",
					url: `http://localhost:5050/check`,
				},
				{
					withCredentials: true,
				}
			)
				.then((response) => {
					store.dispatch(stateUsers("login", response.data.family));
				})
				.catch((err) => {
					console.log({ err });
				});
			break;
		}
		case AXIOS_LOGOUT: {
			const familyId = store.getState().familyReducer.users[0].family_id;
			axios(
				{
					method: "DELETE",
					url: `http://localhost:5050/logout/${familyId}`,
				},
				{
					withCredentials: true,
				}
			)
				.then((response) => {
					store.dispatch(stateResetAfterLogout());
				})
				.catch((err) => {
					console.log({ err });
				});
			break;
		}

		default:
			next(action);
	}
};

export default familyAPI;
