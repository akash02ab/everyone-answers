import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import MyStudents from "./MyStudents";

const Main = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/login" component={Login} />
				<Route path="/mystudents" component={MyStudents} />
			</Switch>
		</Router>
	);
};

export default Main;
