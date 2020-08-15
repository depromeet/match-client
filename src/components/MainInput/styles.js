import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	width: 834px;
	height: 52px;
	left: 606px;
	top: 32px;

	background: #070b1e;
	box-shadow: 0px 4px 4px rgba(7, 11, 30, 0.14);

	border: none;
	color: white;
	outline: none;

	display: flex;
	align-items: center;
`;

export const Input = styled.input.attrs({
	placeholderTextColor: "#EEEEEE",
})`
	outline: none;
	border: none;
	background: #070b1e;
	width: 95%;
	height: 100%;
	color: white;
`;
