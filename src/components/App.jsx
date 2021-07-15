import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getSession, getStudents } from "../redux/actions/myStudentAction";
import Error from "./Error";

const App = () => {
	const { students, error: fetchError, session } = useSelector((state) => state.myStudentState);
	const { user, error } = useSelector((state) => state.authState);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (user && !session) {
			dispatch(getSession(user.email.replaceAll(".", "-")));
		}

		if (user && session) {
			dispatch(getStudents(session));
			history.replace("/dashboard");
		}
		// eslint-disable-next-line
	}, [session, user]);

	if (error || fetchError) {
		return <Error error={error || fetchError} />;
	} else if (!user) {
		history.push("/login");
		return null;
	} else if (students && students.length) {
		history.replace("/dashboard");
		return null;
	} else {
		history.replace("/mystudents");
		return null;
	}
};

export default App;
