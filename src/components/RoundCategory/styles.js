import styled from "styled-components";

export const Container = styled.div`
	border: 1.4px solid ${({ color }) => color};
	box-sizing: border-box;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 20px;

	width: fit-content;
	padding: 2px 5px;

	font-style: normal;
	font-weight: bold;
	font-size: 12px;

	text-transform: uppercase;

	color: ${({ color }) => color};

	margin: 5px 10px;

	cursor: pointer;
`;
