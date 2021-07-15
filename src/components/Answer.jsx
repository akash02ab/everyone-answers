import { Container, Grid, LinearProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudentList } from "../redux/actions/responseAction";
import GiveResponse from "./GiveResponse";
import SelectName from "./SelectName";

const Answer = () => {
	const { name, students, loading } = useSelector((state) => state.responseState);
	const dispatch = useDispatch();
	const { session } = useParams();

	useEffect(() => {
		dispatch(getStudentList(session));
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
					<SelectName names={students} />
				)}
			</Grid>
		</Container>
	);
};

export default Answer;
