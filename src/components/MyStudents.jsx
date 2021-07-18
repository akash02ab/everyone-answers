import Alert from "@material-ui/lab/Alert";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudents } from "../redux/actions/myStudentAction";
import useStyles from "../styles/mystudents";

const MyStudents = () => {
	const { user } = useSelector((state) => state.authState);
	const { loading, error } = useSelector((state) => state.myStudentState);
	const dispatch = useDispatch();
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

		for (let student of studentArr) {
			if (student === "") {
				alert("Student name can't be empty");
				return;
			}
		}

		const instance = user.email.replaceAll(".", "-");
		const session = Date.now().toString();
		dispatch(addStudents(instance, session, studentArr));
	};

	return (
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
			{error && <Alert severity="info">{error}</Alert>}
		</Grid>
	);
};

export default MyStudents;
