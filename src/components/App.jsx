import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Container, Grid } from "@material-ui/core";
import Nav from "./Nav";
import { useEffect } from "react";
import { getStudents } from "../redux/actions/myStudentAction";

const App = () => {
	const { students, error: fetchError, session } = useSelector((state) => state.myStudentState);
	const { user, error } = useSelector((state) => state.authState);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (user && session) {
			dispatch(getStudents(session));
			history.replace("/dashboard");
		}
		// eslint-disable-next-line
	}, []);

	if (error || fetchError) {
		return (
			<Container maxWidth="lg">
				<Nav />
				<Grid>
					<Alert severity="error">
						<AlertTitle>Error</AlertTitle>
						{error || fetchError}
					</Alert>
				</Grid>
			</Container>
		);
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
