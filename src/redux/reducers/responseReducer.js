import {
	LISTEN_TO_RESPONSE,
	LISTEN_TO_RESPONSE_ERROR,
	SELECT_NAME,
	SET_NAME,
	WRITE_RESPONSE_ERROR,
	WRITE_RESPONSE_INPROGRESS,
	WRITE_RESPONSE_SUCCESS,
} from "../actions";

const initialState = {
	syncing: false,
	reload: false,
	error: null,
	name: null,
	selectedName: null,
	response: null,
};

export const responseReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NAME:
			return { ...state, name: action.payload };
		case SELECT_NAME:
			return { ...state, selectedName: action.payload };
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
		case "RELOAD":
			return { ...state, reload: true };
		default:
			return state;
	}
};
