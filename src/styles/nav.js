import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	appBar: {
		width: "100%",
		padding: "10px",
		display: "flex",
		alignItems: "flex-end",
		margin: "10px",
		boxShadow: "none",
	},
	avatar: {
		marginRight: "50px",
		width: "4rem",
		height: "4rem",
		cursor: "pointer",
	},
}));
