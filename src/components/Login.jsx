import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";
import useStyles from "../styles/login";

const Login = () => {
	const { user, error } = useSelector((state) => state.authState);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	if (user) {
		history.push("/");
	}

	return (
		<Container maxWidth="lg">
			<Grid className={classes.grid}>
				<Typography variant="h3">Everyone Answers</Typography>
				<Typography variant="h5">Welcome, Please SignIn.</Typography>
				<AccountCircleIcon className={classes.account} />
				<Button variant="contained" color="primary" size="medium" onClick={() => dispatch(login())}>
					Sign-In With Google
				</Button>
				{error && (
					<Alert severity="error">
						<AlertTitle>Error</AlertTitle>
						{error}
					</Alert>
				)}
			</Grid>
		</Container>
	);
};

export default Login;
