import React from "react";
import * as S from "./styles";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { useMap } from "hooks/useMap";

const MainInputComponent = () => {
	const { viewport, onMove } = useMap();

	return (
		<S.Container>
			<Search
				onClick={() =>
					onMove({
						longitude: -74.1,
						latitude: 40.7,
					})
				}
			/>
			<S.Input placeholder={"원하는 지역을 검색해보세요"} />
		</S.Container>
	);
};

export default MainInputComponent;
