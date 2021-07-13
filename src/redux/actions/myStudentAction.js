import { ADD_STUDENT_ERROR, ADD_STUDENT_INPROGRESS, ADD_STUDENT_SUCCESS } from ".";
import firebase from "../store/firebase";
const db = firebase.database();

const addStudentInProgress = () => ({
	type: ADD_STUDENT_INPROGRESS,
});

const addStudentSuccess = (data) => ({
	type: ADD_STUDENT_SUCCESS,
	payload: data,
});

const addStudentError = (error) => ({
	type: ADD_STUDENT_ERROR,
	error: error,
});

export const addStudents = (instance, studentsList) => async (dispatch) => {
	try {
		dispatch(addStudentInProgress());
		await db.ref("teacher/" + instance).set(studentsList);
		dispatch(addStudentSuccess(studentsList));
	} catch (err) {
		dispatch(addStudentError(err.message));
	}
};
