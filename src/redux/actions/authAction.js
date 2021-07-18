import { AUTH_ERROR, AUTH_INPORGRESS, AUTH_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS } from ".";
import firebase from "../store/firebase";
import { getSession } from "./myStudentAction";

const authInprogress = () => ({
	type: AUTH_INPORGRESS,
});

const authSuccess = (data) => ({
	type: AUTH_SUCCESS,
	payload: data,
});

const authError = (error) => ({
	type: AUTH_ERROR,
	error: error,
});

export const login = () => async (dispatch) => {
	dispatch(authInprogress());

	try {
		await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
		const provider = new firebase.auth.GoogleAuthProvider();
		const result = await firebase.auth().signInWithPopup(provider);
		dispatch(authSuccess(result.user));
	} catch (err) {
		dispatch(authError(err.message));
	}
};

export const getCurrentlySignedInUser = () => (dispatch) => {
	dispatch(authInprogress());

	firebase.auth().onAuthStateChanged(async (user) => {
		if (user) {
			dispatch(getSession(user.email.replaceAll(".", "-")));

			setTimeout(() => dispatch(authSuccess(user)), 1500);
		} else {
			dispatch(authSuccess(null));
		}
	});
};

const logoutSuccess = () => ({
	type: LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
	type: LOGOUT_ERROR,
	error: error,
});

export const logout = () => (dispatch) => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			dispatch(logoutSuccess());
		})
		.catch((error) => {
			dispatch(logoutError());
		});
};
