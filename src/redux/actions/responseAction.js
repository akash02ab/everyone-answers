import {
	SELECT_NAME,
	LISTEN_TO_RESPONSE,
	LISTEN_TO_RESPONSE_ERROR,
	SET_NAME,
	WRITE_RESPONSE_ERROR,
	WRITE_RESPONSE_INPROGRESS,
	WRITE_RESPONSE_SUCCESS,
} from ".";

import firebase from "../store/firebase";
import { setStatus } from "./myStudentAction";
const db = firebase.firestore();

export const setName = (name) => ({
	type: SET_NAME,
	payload: name,
});

export const selectName = (name) => ({
	type: SELECT_NAME,
	payload: name,
});

const writeResponseInProgress = () => ({
	type: WRITE_RESPONSE_INPROGRESS,
});

const writeResponseSucess = (response) => ({
	type: WRITE_RESPONSE_SUCCESS,
	payload: response,
});

const writeResponseError = (error) => ({
	type: WRITE_RESPONSE_ERROR,
	error: error,
});

const listenToResponseSuccess = (answers) => ({
	type: LISTEN_TO_RESPONSE,
	payload: answers,
});

const listenToResponseError = (error) => ({
	type: LISTEN_TO_RESPONSE_ERROR,
	error: error,
});

export const writeRespone = (session, name, response) => async (dispatch) => {
	try {
		dispatch(writeResponseInProgress());
		await db.collection(session).doc(name).set({ response });
		dispatch(writeResponseSucess(response));
	} catch (err) {
		dispatch(writeResponseError(err.message));
	}
};

export const listenToResponses = (session) => async (dispatch, getState) => {
	const {
		myStudentState: { students },
	} = getState();

	let answers = {};

	try {
		students.map((student) => {
			return db
				.collection(session)
				.doc(student)
				.onSnapshot((snapshot) => {
					if (snapshot.data()) {
						answers[student] = snapshot.data().response;
						dispatch(listenToResponseSuccess(answers));
					}
				});
		});
	} catch (err) {
		dispatch(listenToResponseError(err.message));
	}
};

export const clearAnswers = (session) => (dispatch, getState) => {
	const {
		myStudentState: { students },
	} = getState();

	try {
		dispatch(setStatus("Clearing answers . . ."));

		students.map((student) => {
			return db.collection(session).doc(student).set({ response: null });
		});

		dispatch(listenToResponseSuccess({}));
		setTimeout(() => dispatch(setStatus("")), 1000);
	} catch (err) {
		console.error(err.message);
	}
};

export const listenToClearResponse = (session, name) => async (dispatch) => {
	try {
		await db
			.collection(session)
			.doc(name)
			.onSnapshot((snapshot) => {
				// if (snapshot.data() && snapshot.data().response === null) {
				// 	dispatch(wirteResponseSucess(null));
				// }
				if (snapshot.data()) {
					dispatch(writeResponseSucess(snapshot.data().response));
				}
			});
	} catch (err) {
		console.error(err.message);
	}
};
