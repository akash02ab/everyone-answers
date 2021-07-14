import { Container, Grid, TextareaAutosize, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "../styles/giveresponse";

const GiveResponse = () => {
	const { name } = useSelector((state) => state.responseState);
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<Grid className={classes.grid}>
				<Typography variant="subtitle1">{name}</Typography>
				<Typography variant="h4">My Answer</Typography>
				<Typography variant="subtitle1">
					Enter your answer below. This text is visible to the teacher.
				</Typography>
				<TextareaAutosize minRows={8} aria-label="maximum height" className={classes.input} />
			</Grid>
		</Container>
	);
};

export default GiveResponse;
