import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { endSession } from "../redux/actions/myStudentAction";
import { clearAnswers, listenToResponses } from "../redux/actions/responseAction";
import useStyles from "../styles/dashboard";
import Header from "./Header";
import Responses from "./Responses";
import SessionLink from "./SessionLink";

const Dashboard = () => {
	const { user } = useSelector((state) => state.authState);
	const { students, session, status } = useSelector((state) => state.myStudentState);
	const { response } = useSelector((state) => state.responseState);
	const dispatch = useDispatch();
	const classes = useStyles();

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

	return (
		<Grid className={classes.maingrid}>
			<Header status={status} clickhandler={clickhandler} clearhandler={clearhandler} classes={classes} />

			<SessionLink session={session} />

			<Responses classes={classes} students={students} response={response} />
		</Grid>
	);
};

export default Dashboard;
