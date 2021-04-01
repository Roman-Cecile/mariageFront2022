export const AXIOS_LOGIN = "AXIOS_LOGIN";
export const STATE_LOGIN = "STATE_LOGIN";
export const AXIOS_CHECK_LOG = "AXIOS_CHECK_LOG";
export const AXIOS_LOGOUT = "AXIOS_LOGOUT";
export const STATE_RESET_AFTER_LOGOUT = "STATE_RESET_AFTER_LOGOUT";

export const axiosLogin = (password) => ({
	type: AXIOS_LOGIN,
	password,
});

export const stateLogin = (users) => ({
	type: STATE_LOGIN,
	users, //array
});

export const axiosCheckLog = () => ({
	type: AXIOS_CHECK_LOG,
});

export const axiosLogout = () => ({
	type: AXIOS_LOGOUT,
});

export const stateResetAfterLogout = () => ({
	type: STATE_RESET_AFTER_LOGOUT,
});