import { STATE_LOGIN, STATE_RESET_AFTER_LOGOUT } from "../actions/family";

export const initialState = {
	users: [
		{
			logged: false,
		},
	],
};

const familyReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case STATE_LOGIN: {
			return {
				...state,
				users: action.users,
			};
		}
		case STATE_RESET_AFTER_LOGOUT: {
			return {
				...state,
				users: initialState.users,
			};
		}

		default:
			return {
				...state,
			};
	}
};

export default familyReducer;
