import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// source for saveToLocalStorage and loadFromLocalStorage :-
// https://dev.to/link2twenty/react-redux-and-localstorage-2lih

// convert object to string and store in localStorage
const saveToLocalStorage = (state) => {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem("persistant", serialisedState);
	} catch (e) {
		console.warn(e);
	}
};

// load string from localStarage and convert into an Object
// invalid output must be undefined
const loadFromLocalStorage = () => {
	try {
		const serialisedState = localStorage.getItem("persistant");
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
};

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(thunk, logger));

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
