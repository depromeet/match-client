import React from "react";
import * as S from "./styles";
import { Marker } from "react-map-gl";


const MarkerComponent = ({latitude,
	longitude,
	title}) => {
	return (
		<Marker
			latitude={latitude}
			longitude={longitude}
		>
			<S.Image src="https://pds.joins.com/news/component/htmlphoto_mmdata/201501/15/htm_20150115153754c010c011.gif" />
			<S.Container>{title}</S.Container>
			<S.Pin />
		</Marker>
	);
};

export default MarkerComponent;
