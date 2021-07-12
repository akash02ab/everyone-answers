import { AUTH_ERROR, AUTH_INPORGRESS, AUTH_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS } from ".";
import firebase from "../store/firebase";

const provider = new firebase.auth.GoogleAuthProvider();

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
		const result = await firebase.auth().signInWithPopup(provider);
		console.log(result);
		dispatch(authSuccess(result.user));
	} catch (err) {
		dispatch(authError(err.message));
	}
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
