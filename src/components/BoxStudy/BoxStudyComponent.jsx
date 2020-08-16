import React from "react";
import * as S from "./styles";
import { useSelected } from "hooks/useSelected";

const BoxStudyComponent = (props) => {
	const { title, schedule, participants } = props;
	const { onSelect, isSelected } = useSelected();
	const selected = isSelected(props);

	const renderParticipant = () => {
		return participants.map((user, idx) => (
			<S.Profile src={user} idx={idx} />
		));
	};

	return (
		<S.Container onClick={() => onSelect(props)} selected={selected}>
			<S.Scehdule>{schedule}</S.Scehdule>
			<S.Title>{title}</S.Title>
			<S.Paticipant>{renderParticipant()}</S.Paticipant>
			<S.Bookmark selected={selected} marked={props.id % 2 === 0} />
		</S.Container>
	);
};

export default BoxStudyComponent;
