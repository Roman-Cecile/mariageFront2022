import axios from "axios";
// import { urlAPI } from "../utils/genericFunctions";

import { AXIOS_UPDATE_USER } from "../actions/questionnaire";
import { stateUsers } from "../actions/family";
import { urlAPI } from "../utils";

axios.defaults.withCredentials = true; // ! NE JAMAIS OUBLIER

const questionnaireAPI = (store) => (next) => (action) => {
	switch (action.type) {
		case AXIOS_UPDATE_USER: {
			// const data = new FormData();
			// data.set("password", action.password);
			axios(
				{
					method: "PATCH",
					url: `${urlAPI}/user`,
					data: action.datas,
				},
				{
					withCredentials: true,
				}
			)
				.then((response) => {
					store.dispatch(stateUsers("userUpdate", response.data.users));
				})
				.catch((err) => {
					console.info({ err });
				});
			break;
		}

		default:
			next(action);
	}
};

export default questionnaireAPI;
