import { Alert, AlertTitle } from "@material-ui/lab";
import { Container, Grid } from "@material-ui/core";
import Nav from "./Nav";

const Error = ({ error }) => {
	return (
		<Container maxWidth="lg">
			<Nav />
			<Grid>
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					{error}
				</Alert>
			</Grid>
		</Container>
	);
};

export default Error;
