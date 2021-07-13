import { ADD_STUDENT_ERROR, ADD_STUDENT_INPROGRESS, ADD_STUDENT_SUCCESS } from "../actions";

const initialState = {
	loading: false,
	error: null,
	students: [],
};

export const myStudentReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STUDENT_INPROGRESS:
			return { ...state, loading: true };
		case ADD_STUDENT_SUCCESS:
			return { ...state, loading: false, error: null, students: action.payload };
		case ADD_STUDENT_ERROR:
			return { ...state, error: action.error };
		default:
			return state;
	}
};
