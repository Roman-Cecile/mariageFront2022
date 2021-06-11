import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Questionnaire from "../../components/Questionnaire";
import { axiosUpdateUser } from "../../actions/questionnaire";
import { resetMessage } from "../../actions/genericActions";

const mapStateToProps = (state, ownProps) => ({
	users: state.familyReducer.users,
	message: state.familyReducer.message,
});

const mapDispatchToProps = (dispatch) => ({
	axiosUpdateUser: (datas) => {
		dispatch(axiosUpdateUser(datas));
	},

	resetMessage: () => {
		dispatch(resetMessage());
	},
});

const container = connect(mapStateToProps, mapDispatchToProps)(Questionnaire);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
