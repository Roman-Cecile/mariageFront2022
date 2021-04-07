import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import App from "../../components/App";
import { axiosLogin, axiosCheckLog, axiosLogout } from "../../actions/family";

const mapStateToProps = (state, ownProps) => ({
	isLog: state.familyReducer.users[0].logged,
	message: state.familyReducer.message,
});

const mapDispatchToProps = (dispatch) => ({
	axiosLogin: (event, password) => {
		event.preventDefault();
		dispatch(axiosLogin(password));
	},
	axiosCheckLog: () => {
		dispatch(axiosCheckLog());
	},

	axiosLogout: () => {
		dispatch(axiosLogout());
	},
});

const container = connect(mapStateToProps, mapDispatchToProps)(App);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
