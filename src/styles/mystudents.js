import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	grid: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		width: "60%",
		"@media (max-width: 750px)": {
			width: "100%",
		},
	},
	button: {
		width: "80px",
	},
}));
