import React from "react";
import * as S from "./styles";
import { Route } from "react-router-dom";
import { StudyList } from "components/StudyList";
import { CategoryList } from "components/CategoryList";

const MainTabComponent = ({ match }) => {
	return (
		<S.Container>
			<Route
				path={"/study"}
				render={() => (
					<>
						<StudyList />
						<CategoryList />
					</>
				)}
			/>
			{/* <Route path={"/study"} component={CategoryList} /> */}
			{/* <Route path={"/study"} component={CategoryList} /> */}
			{/* <Route path={match.path} exact component={StudyList} /> */}
		</S.Container>
	);
};

export default MainTabComponent;
