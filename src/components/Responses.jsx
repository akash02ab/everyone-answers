import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";

const Responses = ({ classes, students, response }) => {
	return (
		<Grid className={classes.grid}>
			{students
				.sort((a, b) => a.localeCompare(b))
				.map((name, index) => {
					return (
						<Box key={index}>
							<Typography variant="h6" color="primary">
								{name}
							</Typography>

							<Card className={classes.card}>
								<CardContent>
									<Typography variant="subtitle1">{response ? response[name] : ""}</Typography>
								</CardContent>
							</Card>
						</Box>
					);
				})}
		</Grid>
	);
};

export default Responses;
