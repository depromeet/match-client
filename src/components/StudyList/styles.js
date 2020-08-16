import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	height: 60%;
`;
export const Title = styled.h1`
	position: sticky;
	margin: 20px 20px;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;
	text-transform: uppercase;

	color: #fbfcff;
`;

export const StudyContainer = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;

	padding: 10px 20px;
	overflow-x: scroll;
`;

export const BottomBlur = styled.div`
	position: absolute;
	bottom: -90px;
	right: 0;
	left: 0;
	height: 70px;

	background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0) 100%);
	transform: rotate(-180deg);

	z-index: 2;
`;
