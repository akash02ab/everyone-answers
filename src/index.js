import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import store from "./redux/store/store";
import useTheme from "./styles/theme";
import Main from "./components/Main";
import "./index.css";

const theme = useTheme;

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		</Router>
	</Provider>,
	document.getElementById("root")
);
