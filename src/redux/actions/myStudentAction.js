import {
	ADD_STUDENT_ERROR,
	ADD_STUDENT_INPROGRESS,
	ADD_STUDENT_SUCCESS,
	END_SESSION,
	END_SESSION_INPROGRESS,
	SET_STATUS,
} from ".";
import firebase from "../store/firebase";
const db = firebase.database();

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

const setStatus = (status) => ({
	type: SET_STATUS,
	payload: status,
});

const endSessionSucess = () => ({
	type: END_SESSION,
});

export const addStudents = (instance, studentsList) => async (dispatch) => {
	try {
		dispatch(addStudentInProgress());
		await db.ref("teacher/" + instance).set(studentsList);
		dispatch(addStudentSuccess(studentsList));
	} catch (err) {
		dispatch(studentError(err.message));
	}
};

export const getStudents = (instance) => async (dispatch) => {
	try {
		dispatch(addStudentInProgress());
		const snapshot = await db.ref("/teacher/" + instance).get();

		if (snapshot) {
			dispatch(addStudentSuccess(snapshot.val()));
		} else {
			dispatch(studentError("No data available"));
		}
	} catch (err) {
		dispatch(studentError(err.message));
	}
};

export const endSession = (instance) => async (dispatch) => {
	try {
		dispatch(setStatus("Ending Session"));
		await db.ref("/teacher/" + instance).remove();
		localStorage.removeItem("persistant");
		dispatch(endSessionSucess());
	} catch (err) {
		dispatch(setStatus("Error in ending session."));
	}
};
