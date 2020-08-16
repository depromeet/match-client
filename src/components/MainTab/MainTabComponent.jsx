import React from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { StudyList } from "components/StudyList";
import { BoxStudy } from "components/BoxStudy";
import { Sidebar } from "components/Sidebar";
import { useStudy } from "hooks/useStudy";

const MainTabComponent = ({ match }) => {
	return (
		<S.Container>
			<Route path={"/study"} component={StudyList} />
			{/* <Route path={match.path} exact component={StudyList} /> */}
		</S.Container>
	);
};

export default MainTabComponent;
