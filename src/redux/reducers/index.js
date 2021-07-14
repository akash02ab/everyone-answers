import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { myStudentReducer } from "./myStudentReducer";
import { responseReducer } from "./responseReducer";

const rootReducer = combineReducers({
	authState: authReducer,
	myStudentState: myStudentReducer,
	responseState: responseReducer,
});

export default rootReducer;
