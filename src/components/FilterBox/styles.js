import styled from "styled-components";
import { ReactComponent as FilterIcon } from "../../assets/images/filter.svg";
import { ReactComponent as AddIcon } from "../../assets/images/add.svg";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 260px;
`;

export const Container = styled.div`
	position: fixed;
	/* width: 100%; */
	/* padding: 0 10px; */
	height: 52px;
	left: 1390px;
	top: 32px;

	background: #070b1e;
	box-shadow: 0px 4px 4px rgba(7, 11, 30, 0.14);

	padding: 0 10px;

	color: white;
	display: flex;
	align-items: center;
`;

export const Text = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 36px;
	/* or 225% */

	display: flex;
	align-items: center;
	letter-spacing: -0.015em;

	/* text_white */

	color: #fbfcff;

	/* Inside Auto Layout */

	flex: none;
	order: 0;
	align-self: center;
	margin: 0 10px;
`;

export const Filter = styled(FilterIcon)`
	/* margin-right: 10px; */
`;

export const Add = styled(AddIcon)`
	margin-left: auto;
	stroke: #fbfcff;
	fill: none;
	transition: all 300ms ease;

	&:hover {
		fill: #40fff4;
	}

	cursor: pointer;
`;

export const FilterList = styled.div`
	height: ${({ showList }) => (showList ? "fit-content" : "0px")};
	opacity: ${({ showList }) => (showList ? 1 : 0)};

	padding: 10px 5px;
	position: fixed;
	width: 248px;

	display: flex;
	flex-wrap: wrap;

	left: 1390px;
	top: 84px;

	background: #596072;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 2px;

	transition: all 200ms ease;
`;
