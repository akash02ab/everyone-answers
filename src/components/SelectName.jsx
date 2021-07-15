import { Button, Container, Grid, MenuItem, Select, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectName, setName } from "../redux/actions/responseAction";
import useStyles from "../styles/selectname";

const SelectName = ({ names }) => {
	const classes = useStyles();
	const { selectedName } = useSelector((state) => state.responseState);
	const dispatch = useDispatch();

	const changehandler = (event) => {
		dispatch(selectName(event.target.value));
	};

	const clickhandler = () => {
		dispatch(setName(selectedName));
	};

	return (
		<Container maxWidth="lg">
			<Grid className={classes.grid}>
				<Typography variant="h4">Select Your Name</Typography>
				<Select value={selectName || names[0]} className={classes.dropdown} onChange={changehandler}>
					{names.map((name, index) => (
						<MenuItem value={name} key={index}>
							{name}
						</MenuItem>
					))}
				</Select>
				<Button color="primary" variant="contained" className={classes.button} onClick={clickhandler}>
					Continue
				</Button>
			</Grid>
		</Container>
	);
};

export default SelectName;
