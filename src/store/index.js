import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "../reducer";
import family from "../middleware/family";
import questionnaire from "../middleware/questionnaire";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(family, questionnaire));

// == Store
const store = createStore(
	rootReducer,
	// preloadedState,
	enhancers
);

// == Export
export default store;
