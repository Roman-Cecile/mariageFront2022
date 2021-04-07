import { STATE_USERS, STATE_RESET_AFTER_LOGOUT, STATE_MESSAGE } from "../actions/family";
import { RESET_MESSAGE } from "../actions/genericActions";

export const initialState = {
	users: [
		{
			logged: false,
		},
	],
	message: "",
};

const familyReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case STATE_USERS: {
			return {
				...state,
				users: action.users,
				message: action.actionType === "login" ? initialState.message : "Infos mises à jours",
			};
		}
		case STATE_RESET_AFTER_LOGOUT: {
			return {
				...state,
				users: initialState.users,
			};
		}
		case STATE_MESSAGE: {
			return {
				...state,
				message: action.message,
			};
		}

		case RESET_MESSAGE: {
			return {
				...state,
				message: initialState.message,
			};
		}

		default:
			return {
				...state,
			};
	}
};

export default familyReducer;
