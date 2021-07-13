import { useHistory } from "react-router-dom";

const App = () => {
	const history = useHistory();
	history.replace("/login");
	return (
		<div className="container">
			<h1>This is App</h1>
		</div>
	);
};

export default App;
