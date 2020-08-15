import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	width: 834px;
	height: 52px;
	left: 606px;
	top: 32px;

	background: #070b1e;
	box-shadow: 0px 4px 4px rgba(7, 11, 30, 0.14);

	padding: 0 10px;

	color: white;
	display: flex;
	align-items: center;
`;

export const Input = styled.input`
	margin-left: 10px;
	outline: none;
	border: none;
	background: transparent;
	width: 95%;
	height: 100%;
	color: white;

	font-weight: 500;
	font-size: 14px;
	line-height: 36px;

	::placeholder,
	::-webkit-input-placeholder {
		color: white;
	}
`;
