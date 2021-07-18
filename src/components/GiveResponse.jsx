import { Container, Grid, TextareaAutosize, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeRespone } from "../redux/actions/responseAction";
import useStyles from "../styles/giveresponse";

const GiveResponse = ({ session }) => {
	const { name, syncing, response } = useSelector((state) => state.responseState);
	const dispatch = useDispatch();
	const classes = useStyles();
	const inputRef = useRef();

	const changehandler = () => {
		dispatch(writeRespone(session, name, inputRef.current.value));
	};

	useEffect(() => {
		inputRef.current.value = response;
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (inputRef.current && response === null) {
			inputRef.current.value = "";
		}
	}, [response]);

	return (
		<Container maxWidth="lg">
			<Grid className={classes.grid}>
				<Typography variant="subtitle1">{name}</Typography>
				<Typography variant="h4">My Answer</Typography>
				<Typography variant="subtitle1">
					Enter your answer below. This text is visible to the teacher.
				</Typography>

				<TextareaAutosize
					minRows={8}
					aria-label="maximum height"
					className={classes.input}
					ref={inputRef}
					onChange={changehandler}
				/>

				<Typography variant="subtitle1" color="primary">
					{syncing ? "Syncing . . ." : "Sync complete"}
				</Typography>
			</Grid>
		</Container>
	);
};

export default GiveResponse;
