import React, { useState } from "react";
import * as S from "./styles";

const CheckBoxComponent = ({ checked, setChecked }) => {
	// const [checked, setChecked] = useState(false);

	return (
		<S.Container>
			<S.CheckBox
				type={"checkbox"}
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<S.Title>지도를 움직이며 검색하기</S.Title>
		</S.Container>
	);
};

export default CheckBoxComponent;
