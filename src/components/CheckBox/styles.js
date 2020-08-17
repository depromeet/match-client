import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	width: 210px;
	height: 52px;
	left: 600px;
	top: 32px;

	background: #070b1e;
	box-shadow: 0px 4px 4px rgba(7, 11, 30, 0.14);

	padding: 0 10px;

	color: white;
	display: flex;
	align-items: center;
`;

export const CheckBox = styled.input`
	width: 26px;
	height: 26px;
	margin-right: 10px;

	border: 2px solid #fbfcff;
	box-sizing: border-box;
	border-radius: 4px;
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;

	display: flex;
	align-items: center;
	text-transform: capitalize;

	/* text_white */

	color: #fbfcff;
`;
