import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	grid: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		width: "60%",
	},
	button: {
		width: "80px",
	},
}));
