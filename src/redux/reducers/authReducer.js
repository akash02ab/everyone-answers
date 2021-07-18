import { AUTH_ERROR, AUTH_INPORGRESS, AUTH_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS } from "../actions";

const initialState = {
	loading: true,
	error: null,
	user: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_INPORGRESS:
			return { ...state, loading: true };
		case AUTH_SUCCESS:
			return { ...state, loading: false, error: null, user: action.payload };
		case AUTH_ERROR:
			return { ...state, loading: false, error: action.error };
		case LOGOUT_SUCCESS:
			return { ...state, user: null, error: null };
		case LOGOUT_ERROR:
			return { ...state, error: action.error };
		default:
			return state;
	}
};
