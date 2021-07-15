import {
	FETCH_STUDENT_ERROR,
	FETCH_STUDENT_INPROGRESS,
	FETCH_STUDENT_SUCCESS,
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

const fetchStudentInProgress = () => ({
	type: FETCH_STUDENT_INPROGRESS,
});

const fetchStudentSuccess = (data) => ({
	type: FETCH_STUDENT_SUCCESS,
	payload: data,
});

const fetchStudentError = (error) => ({
	type: FETCH_STUDENT_ERROR,
	payload: error,
});

const writeResponseInProgress = () => ({
	type: WRITE_RESPONSE_INPROGRESS,
});

const wirteResponseSucess = (response) => ({
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

export const getStudentList = (session) => async (dispatch) => {
	try {
		dispatch(fetchStudentInProgress());

		await db
			.collection(session)
			.doc("students")
			.onSnapshot((snapshot) => {
				if (snapshot) {
					const doc = snapshot.data();
					if (doc) dispatch(fetchStudentSuccess(doc.students));
				} else {
					dispatch(fetchStudentError("No data available"));
				}
			});
	} catch (err) {
		dispatch(fetchStudentError(err.message));
	}
};

export const writeRespone = (session, name, response) => async (dispatch) => {
	try {
		dispatch(writeResponseInProgress());
		await db.collection(session).doc(name).set({ response });
		dispatch(wirteResponseSucess(response));
	} catch (err) {
		dispatch(writeResponseError(err.message));
	}
};

export const listenToResponses = (session) => async (dispatch, getState) => {
	const {
		responseState: { students },
	} = getState();

	const answers = {};
	console.log("listen to responses called", students);
	try {
		students.map((student) => {
			return db
				.collection(session)
				.doc(student)
				.onSnapshot((snapshot) => {
					if (snapshot.data()) {
						answers[student] = snapshot.data().response;
					}
					dispatch(listenToResponseSuccess(answers));
				});
		});
	} catch (err) {
		dispatch(listenToResponseError(err.message));
	}
};

export const clearAnswers = (session) => (dispatch, getState) => {
	const {
		responseState: { students },
	} = getState();

	try {
		dispatch(setStatus("Clearing answers . . ."));

		students.map((student) => {
			return db.collection(session).doc(student).set({ response: "" });
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
				if (snapshot.data() && snapshot.data().response === "") {
					dispatch(wirteResponseSucess(""));
				}
			});
	} catch (err) {
		console.error(err.message);
	}
};
