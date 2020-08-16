import React from "react";
import * as S from "./styles";
import { BoxStudy } from "components/BoxStudy";
import { useStudy } from "hooks/useStudy";

const StudyListComponent = () => {
	const { study } = useStudy();

	const renderStudy = () => {
		return study.map((item) => <BoxStudy {...item} key={item.id} />);
	};

	return (
		<S.Container>
			<S.Title>DISCOVER</S.Title>
			<S.StudyContainer>
				<S.BottomBlur />
				{renderStudy()}
			</S.StudyContainer>
		</S.Container>
	);
};

export default StudyListComponent;
