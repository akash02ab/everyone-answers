import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	grid: {
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
		padding: "calc(1rem + 10vw)",
	},
	dropdown: {
		width: "16rem",
	},
	button: {
		width: "16rem",
	},
}));
