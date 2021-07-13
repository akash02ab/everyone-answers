import { Container, Grid, Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Dashboard = () => {
	return (
		<Container>
			<Nav />
			<Grid>
				<Typography variant="h1">Dashboard</Typography>
				<Typography variant="h4">
					Student Link: <Link to="#">http://localhost:3000/#/3760757836</Link>
				</Typography>
				<Box>
					<Typography variant="h6"></Typography>
				</Box>
			</Grid>
		</Container>
	);
};

export default Dashboard;
