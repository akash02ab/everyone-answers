import { Container, Grid, LinearProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { endSession } from "../redux/actions/myStudentAction";
import { clearAnswers, listenToResponses } from "../redux/actions/responseAction";
import useStyles from "../styles/dashboard";
import Header from "./Header";
import Nav from "./Nav";
import Responses from "./Responses";
import SessionLink from "./SessionLink";

const Dashboard = () => {
	const { user } = useSelector((state) => state.authState);
	const { students, session, loading, status } = useSelector((state) => state.myStudentState);
	const { response } = useSelector((state) => state.responseState);
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();

	const clickhandler = () => {
		dispatch(endSession(user.email.replaceAll(".", "-"), session));
	};

	const clearhandler = () => {
		dispatch(clearAnswers(session));
	};

	useEffect(() => {
		dispatch(listenToResponses(session));
		// eslint-disable-next-line
	}, []);

	if (students && !students.length) {
		history.replace("/mystudents");
		return null;
	}

	return (
		<Container>
			<Nav />

			{loading ? (
				<LinearProgress />
			) : (
				<Grid className={classes.maingrid}>
					<Header status={status} clickhandler={clickhandler} clearhandler={clearhandler} classes={classes} />

					<SessionLink session={session} />

					<Responses classes={classes} students={students} response={response} />
				</Grid>
			)}
		</Container>
	);
};

export default Dashboard;
