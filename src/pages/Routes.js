import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "./Main";
import Login from "./Login";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/*" component={Main} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
