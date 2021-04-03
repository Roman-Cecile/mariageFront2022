import axios from "axios";
// import { urlAPI } from "../utils/genericFunctions";

import { AXIOS_UPDATE_USER } from "../actions/questionnaire";
import { stateUsers } from "../actions/family";

axios.defaults.withCredentials = true; // ! NE JAMAIS OUBLIER

const questionnaireAPI = (store) => (next) => (action) => {
	switch (action.type) {
		case AXIOS_UPDATE_USER: {
			// const data = new FormData();
			// data.set("password", action.password);
			console.log("middleware");
			axios(
				{
					method: "PATCH",
					url: `http://localhost:5050/user`,
					data: action.datas,
				},
				{
					withCredentials: true,
				}
			)
				.then((response) => {
					store.dispatch(stateUsers(response.data.users));
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

export default questionnaireAPI;
