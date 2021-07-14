import { FETCH_STUDENT_ERROR, FETCH_STUDENT_INPROGRESS, FETCH_STUDENT_SUCCESS, SET_NAME } from ".";

import firebase from "../store/firebase";
const db = firebase.firestore();

export const setName = (name) => ({
	type: SET_NAME,
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
