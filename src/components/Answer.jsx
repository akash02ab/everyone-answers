import { Container, Grid, LinearProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudents } from "../redux/actions/myStudentAction";
import GiveResponse from "./GiveResponse";
import SelectName from "./SelectName";

const Answer = () => {
	const { students, loading } = useSelector((state) => state.myStudentState);
	const { name } = useSelector((state) => state.responseState);
	const dispatch = useDispatch();
	const { session } = useParams();

	useEffect(() => {
		dispatch(getStudents(session));
		// eslint-disable-next-line
	}, []);

	return (
		<Container maxWidth="lg">
			<Grid style={{ marginTop: "20px" }}>
				{loading ? (
					<LinearProgress />
				) : name ? (
					<GiveResponse session={session} />
				) : (
					<SelectName names={students} session={session} />
				)}
			</Grid>
		</Container>
	);
};

export default Answer;
