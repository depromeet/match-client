import styled from "styled-components";

export const Container = styled.div`
	/* margin-top: 200px; */
	display: flex;
	width: 80%;
	/* overflow: hidden; */
	overflow-x: scroll;

	padding: 10px 20px;
	/* overflow-x: scroll; */
	position: absolute;
	bottom: 30px;
`;

export const HorizontalBlur = styled.div`
	position: fixed;

	left: 482px;
	bottom: 30px;
	height: 150px;
	width: 30px;

	background: linear-gradient(90deg, #1d212c 0%, rgba(29, 33, 44, 0) 100%);
	transform: rotate(-180deg);
	z-index: 2;
`;
