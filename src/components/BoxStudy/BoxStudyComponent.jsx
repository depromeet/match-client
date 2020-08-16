import React from "react";
import * as S from "./styles";
import { useSelected } from "hooks/useSelected";
import { Link } from "react-router-dom";
import { CleanLink } from "components/CleanLink";
//TODO remove
import { participants } from "../../modules/study/reducer";

const BoxStudyComponent = (props) => {
	const {
		studyName,
		duration: { start, end },
		// participants,
	} = props;
	const { onSelect, isSelected } = useSelected();
	const selected = isSelected(props);

	const renderParticipant = () => {
		return participants.map((user, idx) => (
			<S.Profile src={user} idx={idx} key={idx} />
		));
	};

	return (
		<CleanLink to={`/stduy/${props.id}`}>
			<S.Container
				onMouseEnter={() => onSelect(props)}
				onMouseLeave={() => onSelect(props)}
				onClick={() => onSelect(props)}
				selected={selected}
			>
				<S.Scehdule>{`${start} - ${end}`}</S.Scehdule>
				<S.Title>{studyName}</S.Title>
				<S.Paticipant>{renderParticipant()}</S.Paticipant>
				<S.Bookmark selected={selected} marked={props.id % 2} />
			</S.Container>
		</CleanLink>
	);
};

export default BoxStudyComponent;
