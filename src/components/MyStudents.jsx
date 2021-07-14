import { Container, Grid, Typography, Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addStudents } from "../redux/actions/myStudentAction";
import useStyles from "../styles/mystudents";
import Nav from "./Nav";

const MyStudents = () => {
	const { user } = useSelector((state) => state.authState);
	const { students, loading, error } = useSelector((state) => state.myStudentState);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const inputRef = useRef();

	const submithandler = () => {
		let students = inputRef.current.value;

		if (!students) {
			alert("Sudents List can't be empty.");
			return;
		}

		let studentArr = students.replaceAll(/\n/g, ",").split(",");
		let studentSet = new Set(studentArr);

		if (studentArr.length !== studentSet.size) {
			alert("Students List contains duplicate names.");
			return;
		}
		const instance = user.email.replaceAll(".", "-");
		const session = Date.now().toString();
		dispatch(addStudents(instance, session, studentArr));
	};

	if (!user) {
		history.push("/login");
		return null;
	}

	if (students && students.length) {
		history.push("/dashboard");
		return null;
	}

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Nav />
			<Grid className={classes.grid}>
				<Typography variant="h3">My Students</Typography>
				<Typography variant="h5">
					Enter the name of each person who will answer you question separated by comma or new line
				</Typography>
				<TextField
					label="Students"
					variant="outlined"
					multiline={true}
					rows={8}
					placeholder="eg: Ron, Harry, Nevil"
					required={true}
					inputRef={inputRef}
				/>
				<Button variant="contained" color="primary" className={classes.button} onClick={() => submithandler()}>
					Submit
				</Button>

				{loading && <Typography>Submitting . . .</Typography>}
				{error && <Alert severity="error">{error}</Alert>}
			</Grid>
		</Container>
	);
};

export default MyStudents;
