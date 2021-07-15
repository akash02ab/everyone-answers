import { Box, Typography, Button } from "@material-ui/core";

const Header = ({ status, clickhandler, clearhandler, classes }) => {
	return (
		<Box className={classes.head}>
			<Box className={classes.row}>
				<Typography variant="h3">Dashboard</Typography>
				<Button variant="contained" color="primary" onClick={clearhandler}>
					Clear Answers
				</Button>
			</Box>

			<Box className={classes.row}>
				{status && <Typography>{status}</Typography>}
				<Button variant="contained" onClick={clickhandler}>
					End Session
				</Button>
			</Box>
		</Box>
	);
};

export default Header;
