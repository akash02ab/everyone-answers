import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStudents, studentError } from "../redux/actions/myStudentAction";
import { Container, LinearProgress } from "@material-ui/core";
import useStyles from "../styles/app";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import MyStudents from "./MyStudents";

const App = () => {
	const { loading, students, session } = useSelector((state) => state.myStudentState);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (session) {
			setTimeout(() => dispatch(getStudents(session)), 1000);
		} else {
			setTimeout(() => dispatch(studentError("Add some student names to continue.")), 1000);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Nav />
			{loading ? <LinearProgress /> : students.length ? <Dashboard /> : <MyStudents />}
		</Container>
	);
};

export default App;
