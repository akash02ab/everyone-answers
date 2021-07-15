import {
	ADD_STUDENT_ERROR,
	ADD_STUDENT_INPROGRESS,
	ADD_STUDENT_SUCCESS,
	END_SESSION,
	SET_SESSION,
	SET_STATUS,
} from ".";

import firebase from "../store/firebase";
const db = firebase.firestore();

const addStudentInProgress = () => ({
	type: ADD_STUDENT_INPROGRESS,
});

const addStudentSuccess = (data) => ({
	type: ADD_STUDENT_SUCCESS,
	payload: data,
});

const studentError = (error) => ({
	type: ADD_STUDENT_ERROR,
	error: error,
});

export const setStatus = (status) => ({
	type: SET_STATUS,
	payload: status,
});

const setSession = (session) => ({
	type: SET_SESSION,
	payload: session,
});

const endSessionSucess = () => ({
	type: END_SESSION,
});

export const addStudents = (instance, session, students) => async (dispatch) => {
	console.log(instance, session, students);
	try {
		dispatch(addStudentInProgress());

		await db.collection(instance).doc("sessions").set({ session });
		await db.collection(session).doc("students").set({ students });

		dispatch(addStudentSuccess(students));
		dispatch(setSession(session));
	} catch (err) {
		dispatch(studentError(err.message));
	}
};

export const getStudents = (session) => async (dispatch) => {
	try {
		dispatch(addStudentInProgress());

		await db
			.collection(session)
			.doc("students")
			.onSnapshot((snapshot) => {
				if (snapshot) {
					const doc = snapshot.data();
					if (doc) dispatch(addStudentSuccess(doc.students));
				} else {
					dispatch(studentError("No data available"));
				}
			});
	} catch (err) {
		dispatch(studentError(err.message));
	}
};

export const getSession = (instance) => async (dispatch) => {
	try {
		const response = await db.collection(instance).doc("sessions").get();
		const data = response.data();
		if (data) dispatch(setSession(data.session));
	} catch (err) {
		dispatch(studentError(err.message));
	}
};

export const endSession = (instance, session) => async (dispatch) => {
	try {
		dispatch(setStatus("Ending Session . . ."));

		await db.collection(instance).doc("sessions").delete();

		const ref = db.collection(session);
		ref.onSnapshot((snapshot) => {
			snapshot.docs.forEach((doc) => {
				ref.doc(doc.id).delete();
			});
		});

		window.localStorage.clear();

		dispatch(endSessionSucess());
		dispatch(setStatus(""));
	} catch (err) {
		dispatch(setStatus("Error in ending session."));
	}
};
