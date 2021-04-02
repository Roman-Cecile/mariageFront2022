import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Questionnaire from "../../components/Questionnaire";
import { axiosUpdateUser } from "../../actions/questionnaire";

const mapStateToProps = (state, ownProps) => ({
	users: state.familyReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
	axiosUpdateUser: (datas) => {
		dispatch(axiosUpdateUser(datas));
	},
});

const container = connect(mapStateToProps, mapDispatchToProps)(Questionnaire);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
