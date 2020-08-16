import React from "react";
import * as S from "./styles";
import { StudyList } from "components/StudyList";

const SidebarComponent = () => {
	return (
		<S.Container>
			<S.Menu />
			<S.HomeBtn />
			<S.PlusBtn />
			<S.CalBtn />
			<S.MsgBtn />
			<S.CommentBtn />
			<S.SetBtn />

			<StudyList />
		</S.Container>
	);
};

export default SidebarComponent;
