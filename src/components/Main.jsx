import { LinearProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { getCurrentlySignedInUser } from "../redux/actions/authAction";
import Answer from "./Answer";
import App from "./App";
import Login from "./Login";

const Main = () => {
	const loading = useSelector((state) => state.authState.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentlySignedInUser());
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{loading ? (
				<LinearProgress />
			) : (
				<Switch>
					<PrivateRoute exact path="/">
						<App />
					</PrivateRoute>
					<Route path="/login" component={Login} />
					<Route path="/answer/:session" component={Answer} />
				</Switch>
			)}
		</>
	);
};

function PrivateRoute({ children, ...rest }) {
	let user = useSelector((state) => state.authState.user);
	return <Route {...rest} render={() => (user ? children : <Redirect to="/login" />)} />;
}

export default Main;
