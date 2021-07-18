import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const SessionLink = ({ session }) => {
	return (
		<Typography variant="h5">
			Student Link:{" "}
			<Link to={`/answer/${session}`}>{`https://everyone-answers.netlify.app/answer/${session}`}</Link>
		</Typography>
	);
};

export default SessionLink;
