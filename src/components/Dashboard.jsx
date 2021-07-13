import { Container, Grid, Box, Typography, Card, LinearProgress, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { endSession } from "../redux/actions/myStudentAction";
import useStyles from "../styles/dashboard";
import Nav from "./Nav";

const Dashboard = () => {
	const { user } = useSelector((state) => state.authState);
	const { students, loading, status } = useSelector((state) => state.myStudentState);
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();

	const clickhandler = () => {
		dispatch(endSession(user.email.replaceAll(".", "-")));
	};

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
					<Box className={classes.head}>
						<Typography variant="h3">Dashboard</Typography>
						<Box className={classes.row}>
							{status && <Typography>{status}</Typography>}
							<Button variant="contained" onClick={clickhandler}>
								End Session
							</Button>
						</Box>
					</Box>

					<Typography variant="h5">
						Student Link: <Link to="#">http://localhost:3000/#/3760757836</Link>
					</Typography>

					<Grid className={classes.grid}>
						{students
							.sort((a, b) => a.localeCompare(b))
							.map((name, index) => {
								return (
									<Box key={index}>
										<Typography variant="h6" color="primary">
											{name}
										</Typography>
										<Card className={classes.card} />
									</Box>
								);
							})}
					</Grid>
				</Grid>
			)}
		</Container>
	);
};

export default Dashboard;
