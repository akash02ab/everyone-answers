import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	maingrid: {
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
	},
	grid: {
		width: "100%",
		padding: "1rem 0",
		display: "flex",
		flexWrap: "wrap",
		gap: "2.8rem",
	},
	card: {
		width: "380px",
		minHeight: "180px",
		border: "2px solid blue",
	},
	head: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	row: {
		display: "flex",
		alignItems: "center",
		gap: "10px",
	},
}));
