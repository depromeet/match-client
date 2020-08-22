import React from "react";
import * as S from "./styles";
import { Marker } from "react-map-gl";
import { useSelected } from "../../hooks/useSelected";
import { useMap } from "hooks/useMap";

const MarkerComponent = (props) => {
  const { viewport } = useMap();
  const {
    spot: { latitude, longitude },
    studyName,
  } = props;
  const { onSelect, isSelected } = useSelected();
  const selected = isSelected(props);

  return (
    <Marker latitude={latitude} longitude={longitude}>
      <S.Container
        onClick={() => onSelect(props)}
        selected={selected}
        zoom={viewport.zoom}
      >
        <S.Text zoom={viewport.zoom}>{studyName}</S.Text>
      </S.Container>
      <S.Pin zoom={viewport.zoom} />
    </Marker>
  );
};

export default MarkerComponent;

// {
// 	createdAt: 1597566450190,
// 	lastModifiedAt: 1597566450190,
// 	id: 1,
// 	studyName: "후론트 스터디",
// 	spot: {
// 	addr1: "서울시 어쩌구 저쩌구",
// 	addr2: "우리 아파트",
// 	zipCode: "11111",
// 	latitude: 37.5555764,
// 	longitude: 127.0078127
// 	},
// 	duration: {
// 	start: "2020-10-08",
// 	end: "2020-10-31"
// 	},
// 	studyConductWay: "OFFLINE",
// 	studySubject: "FR",
// 	owner: null,
// 	target: [ ]
// 	},
