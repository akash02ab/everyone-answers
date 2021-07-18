import { Button, Container, Grid, MenuItem, Select, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToClearResponse, selectName, setName } from "../redux/actions/responseAction";
import useStyles from "../styles/selectname";

const SelectName = ({ names, session }) => {
	const [disable, setDisable] = useState(false);
	const classes = useStyles();
	const { selectedName } = useSelector((state) => state.responseState);
	const dispatch = useDispatch();

	const changehandler = (event) => {
		dispatch(selectName(event.target.value));
	};

	const clickhandler = async (event) => {
		setDisable(true);
		dispatch(listenToClearResponse(session, selectedName));
		setTimeout(() => dispatch(setName(selectedName)), 1000);
	};

	useEffect(() => {
		dispatch(selectName(names[0]));
		// eslint-disable-next-line
	}, []);

	return (
		<Container maxWidth="lg">
			<Grid className={classes.grid}>
				<Typography variant="h4">Select Your Name</Typography>

				<Select value={selectedName || names[0]} className={classes.dropdown} onChange={changehandler}>
					{names.map((name, index) => (
						<MenuItem value={name} key={index}>
							{name}
						</MenuItem>
					))}
				</Select>

				<Button
					color="primary"
					variant="contained"
					disabled={disable}
					className={classes.button}
					onClick={clickhandler}
				>
					Continue
				</Button>
			</Grid>
		</Container>
	);
};

export default SelectName;
