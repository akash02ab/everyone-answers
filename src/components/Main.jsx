import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Answer from "./Answer";
import App from "./App";
import Dashboard from "./Dashboard";
import Login from "./Login";
import MyStudents from "./MyStudents";

const Main = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/login" component={Login} />
				<Route path="/mystudents" component={MyStudents} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/answer/:session" component={Answer} />
			</Switch>
		</Router>
	);
};

export default Main;
