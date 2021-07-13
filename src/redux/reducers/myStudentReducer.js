import { ADD_STUDENT_ERROR, ADD_STUDENT_INPROGRESS, ADD_STUDENT_SUCCESS, END_SESSION, SET_STATUS } from "../actions";

const initialState = {
	loading: false,
	error: null,
	status: null,
	students: [],
};

export const myStudentReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STUDENT_INPROGRESS:
			return { ...state, loading: true };
		case ADD_STUDENT_SUCCESS:
			return { ...state, loading: false, error: null, status: null, students: action.payload };
		case ADD_STUDENT_ERROR:
			return { ...state, error: action.error };
		case SET_STATUS:
			return { ...state, status: action.payload };
		case END_SESSION:
			return { ...state, status: null, students: [] };
		default:
			return state;
	}
};
