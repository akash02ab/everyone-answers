import { Container, Grid, Typography, Button, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "../styles/mystudents";

const MyStudents = () => {
	const { user } = useSelector((state) => state.authState);
	const history = useHistory();
	const classes = useStyles();

	if (!user) {
		history.push("/login");
		return null;
	}

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Grid className={classes.grid}>
				<Typography variant="h1">My Students</Typography>
				<Typography variant="h5">
					Enter the name of each person who will answer you question separated by comma or new line
				</Typography>
				<TextField
					label="Students"
					variant="outlined"
					multiline={true}
					placeholder="eg: Ron, Harry, Nevil"
					required={true}
				/>
				<Button variant="contained" color="primary" className={classes.button}>
					Submit
				</Button>
			</Grid>
		</Container>
	);
};

export default MyStudents;
