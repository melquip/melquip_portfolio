import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { loadState, saveState } from './utils';
import throttle from 'lodash/throttle';

const persistedStateKeysInLocalStorage = [
  'user',
  /*
  'about',
  'projects',
  'questions',
  */ 
  // use cookie (or other method) to refresh local storage on client
];
const store = createStore(
  // reducers
  combineReducers({
    user: reducers.userReducer,
    about: reducers.aboutReducer,
    projects: reducers.projectsReducer,
    questions: reducers.questionsReducer,
  }),
  // local storage
  loadState(persistedStateKeysInLocalStorage),
  // middleware
  compose(
    applyMiddleware(thunk),
    // redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a
  )
);

store.subscribe(throttle(() => {
	saveState(store.getState(), persistedStateKeysInLocalStorage)
}, 1000));

export default store;