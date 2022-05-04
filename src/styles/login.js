import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	grid: {
		height: "60vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "1.5rem",
	},
	account: {
		fontSize: "calc(2em + 5vw)",
		opacity: "0.8",
		color: "lightgrey",
	},
}));
