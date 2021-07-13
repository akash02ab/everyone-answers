import { AppBar, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/actions/authAction";
import useStyles from "../styles/nav";

const Nav = () => {
	const { user } = useSelector((state) => state.authState);
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();

	const clickhandler = () => {
		dispatch(logout());
	};

	if (!user) {
		history.replace("/login");
		return null;
	}

	return (
		<AppBar position="static" color="transparent" className={classes.appBar}>
			<Avatar alt={user.displayName} src={user.photoURL} className={classes.avatar} onClick={clickhandler} />
		</AppBar>
	);
};

export default Nav;
