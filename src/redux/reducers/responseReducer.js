import {
	FETCH_STUDENT_ERROR,
	FETCH_STUDENT_INPROGRESS,
	FETCH_STUDENT_SUCCESS,
	SELECT_NAME,
	SET_NAME,
} from "../actions";

const initialState = {
	loading: false,
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
		default:
			return state;
	}
};
