import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	grid: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		padding: "calc(10px + 10vw)",
	},
	input: {
		border: "2px solid blue",
		padding: "10px",
		minWidth: "1px",
		minHeight: "1px",
	},
}));
