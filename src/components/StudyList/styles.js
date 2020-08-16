import styled from "styled-components";

export const Container = styled.div`
	/* //TODO */
	margin-left: 120px;
	/* //TODO */
	height: 720px;
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
	height: 630px;

	display: flex;
	flex-direction: column;
	/* justify-content: center; */

	padding: 10px 20px;
	overflow-x: scroll;
`;

export const BottomBlur = styled.div`
	position: fixed;
	top: 650px;
	width: 390px;
	height: 70px;

	background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0) 100%);
	transform: rotate(-180deg);

	/* backdrop-filter: blur(2px); */
	z-index: 2;
`;
