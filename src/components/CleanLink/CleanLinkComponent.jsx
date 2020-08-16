import React from "react";
import * as S from "./styles";

const CleanLinkComponent = ({ to, children }) => {
	return <S.Container to={to}>{children}</S.Container>;
};

export default CleanLinkComponent;
