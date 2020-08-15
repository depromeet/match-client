import styled from "styled-components";
import { ReactComponent as PinSVG } from "../../assets/images/pin.svg";

export const Container = styled.div`
	width: fit-content;
	height: 18px;

	padding: 4px 10px;
	background: ${(props) => (props.selected ? "#40FFF4" : "#141313")};
	color: ${(props) => (props.selected ? "#17181B" : "#FBFCFF")};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 2px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: 600;
	font-size: 10px;
	line-height: 12px;

	text-align: center;
	text-transform: capitalize;
`;

export const Pin = styled(PinSVG)`
	/* align-self: center; */
	position: fixed;
	bottom: -20px;
	left: 0;
	right: 0;
	margin: 0px auto;

	width: 24px;
	height: 24px;
`;
