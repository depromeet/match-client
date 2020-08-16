import React from "react";
import * as S from "./styles";

import { Map } from "../../components/Map";
import { Sidebar } from "../../components/Sidebar";
import { MainTab } from "components/MainTab";
import { Route } from "react-router-dom";
import { useStudy } from "hooks/useStudy";

const Main = ({ match }) => {
	const { study } = useStudy();
	const selectedStudy = study.find(({ id }) => id === 1);

	return (
		<S.Container>
			<Sidebar />
			<Route path={match.path} component={MainTab} />
			<Map />
			<S.Logo />
		</S.Container>
	);
};

export default Main;
