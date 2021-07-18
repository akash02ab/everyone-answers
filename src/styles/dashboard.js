import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	maingrid: {
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
	},
	grid: {
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		gap: "2.8rem",
	},
	card: {
		width: "352px",
		minHeight: "180px",
		border: "2px solid blue",
	},
	head: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
	},
	row: {
		display: "flex",
		alignItems: "center",
		gap: "20px",
	},
}));
