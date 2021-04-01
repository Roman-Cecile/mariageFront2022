import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Questionnaire from "../../components/Questionnaire";
import { axiosLogin, axiosCheckLog, axiosLogout } from "../../actions/family";

const mapStateToProps = (state, ownProps) => ({
	users: state.familyReducer.users,
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Questionnaire);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
