import styled from "styled-components";

export const Container = styled.div`
	width: fit-content;
	height: 18px;

	padding: 4px 10px;
	background: #000000;
	border-radius: 6px;

	display: flex;
	justify-content: center;
	align-items: center;

	/* font-family: Noto Sans;
	font-style: normal; */
	font-weight: 600;
	font-size: 10px;
	line-height: 12px;

	color: #99fff2;
	text-align: center;
	text-transform: capitalize;
`;

export const Pin = styled.div`
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;

	border-top: 6px solid #000000;

	margin: 0px auto;
`;

export const Image = styled.img`
	position: fixed;
	top: -16px;
	left: -10px;

	width: 24px;
	height: 24px;

	border: 1.3px solid #000000;
	box-sizing: border-box;
	border-radius: 3px;
`;
