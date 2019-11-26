import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const store = createStore(
	// reducers
	combineReducers({
    projects: reducers.projectsReducer,
    questions: reducers.questionsReducer,
	}),
	// local storage
	// loadState(persistedStateKeysInLocalStorage),
	// middleware
	compose(
		applyMiddleware(thunk),
		// redux dev tools
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a
	)
);

export default store;