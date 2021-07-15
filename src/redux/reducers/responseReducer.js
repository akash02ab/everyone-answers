import {
	FETCH_STUDENT_ERROR,
	FETCH_STUDENT_INPROGRESS,
	FETCH_STUDENT_SUCCESS,
	LISTEN_TO_RESPONSE,
	LISTEN_TO_RESPONSE_ERROR,
	SELECT_NAME,
	SET_NAME,
	WRITE_RESPONSE_ERROR,
	WRITE_RESPONSE_INPROGRESS,
	WRITE_RESPONSE_SUCCESS,
} from "../actions";

const initialState = {
	loading: false,
	syncing: false,
	error: null,
	name: null,
	selectedName: null,
	response: null,
	students: [],
};

export const responseReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NAME:
			return { ...state, name: action.payload };
		case SELECT_NAME:
			return { ...state, selectedName: action.payload };
		case FETCH_STUDENT_INPROGRESS:
			return { ...state, loading: true };
		case FETCH_STUDENT_SUCCESS:
			return { ...state, loading: false, students: action.payload };
		case FETCH_STUDENT_ERROR:
			return { ...state, loading: false, error: action.error };
		case WRITE_RESPONSE_INPROGRESS:
			return { ...state, syncing: true };
		case WRITE_RESPONSE_SUCCESS:
			return { ...state, syncing: false, response: action.payload };
		case WRITE_RESPONSE_ERROR:
			return { ...state, syncing: false, error: action.error };
		case LISTEN_TO_RESPONSE:
			return { ...state, response: action.payload };
		case LISTEN_TO_RESPONSE_ERROR:
			return { ...state, error: action.error };
		default:
			return state;
	}
};
