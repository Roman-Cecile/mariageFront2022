export const AXIOS_UPDATE_USER = "AXIOS_UPDATE_USER";
export const STATE_UPDATE_USER = "STATE_UPDATE_USER";

export const axiosUpdateUser = (datas) => ({
	type: AXIOS_UPDATE_USER,
	datas,
});

export const stateUpdateUser = (datas) => ({
	type: STATE_UPDATE_USER,
	datas,
});
