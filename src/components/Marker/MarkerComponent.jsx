import React from "react";
import * as S from "./styles";
import { Marker } from "react-map-gl";
import { useSelected } from "../../hooks/useSelected";

const MarkerComponent = (props) => {
	const { id, latitude, longitude, title } = props;
	const { onSelect, isSelected } = useSelected();
	const selected = isSelected(props);

	return (
		<Marker latitude={latitude} longitude={longitude}>
			<S.Container onClick={() => onSelect(props)} selected={selected}>
				<S.Text>{title}</S.Text>
			</S.Container>
			<S.Pin />
		</Marker>
	);
};

export default MarkerComponent;
