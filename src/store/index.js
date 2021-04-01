import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "../reducer";
import family from "../middleware/family";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(family));

// == Store
const store = createStore(
	rootReducer,
	// preloadedState,
	enhancers
);

// == Export
export default store;
