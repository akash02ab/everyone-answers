import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { myStudentReducer } from "./myStudentReducer";

const rootReducer = combineReducers({
	authState: authReducer,
	myStudentState: myStudentReducer,
});

export default rootReducer;
