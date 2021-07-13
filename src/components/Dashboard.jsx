import { Container, Grid, Box, Typography, Card } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "../styles/dashboard";
import Nav from "./Nav";

const Dashboard = () => {
	const { students } = useSelector((state) => state.myStudentState);
	const classes = useStyles();

	return (
		<Container>
			<Nav />
			<Grid className={classes.maingrid}>
				<Typography variant="h3">Dashboard</Typography>
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
		</Container>
	);
};

export default Dashboard;
