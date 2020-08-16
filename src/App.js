import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { theme } from "./styles/theme";
import { store } from "./store";
import { Main } from "./pages/Main";
import Login from "./pages/Login";
import Routes from "pages/Routes";

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
