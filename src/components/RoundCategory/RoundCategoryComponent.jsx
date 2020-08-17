import React from "react";
import * as S from "./styles";

const RoundCategoryComponent = ({ nameEng, color, onClickHandler }) => {
	return (
		<S.Container color={color} onClick={onClickHandler}>
			{nameEng}
		</S.Container>
	);
};

export default RoundCategoryComponent;
