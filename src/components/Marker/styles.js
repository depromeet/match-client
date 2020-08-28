import styled from "styled-components";
import { ReactComponent as PinSVG } from "../../assets/images/pin.svg";
import fontNoto from "../../assets/fonts/NotoSansKRMedium.otf";

export const Container = styled.div`
  width: fit-content;
  height: ${({ zoom }) => zoom * 1.2 + "px"};

  padding: 7px 7px;
  background: ${(props) => (props.selected ? "#40FFF4" : "#141313")};
  color: ${(props) => (props.selected ? "#17181B" : "#FBFCFF")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  text-transform: capitalize;
  transform: perspective(1px) translateZ(0);

  transition: all 150ms ease;
  cursor: pointer;

  transform: ${({ selected }) => (selected ? "scale(1.1)" : "")};
  &:hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  font-weight: bold;
  font-size: ${({ zoom }) => zoom + "px"};
  line-height: ${({ zoom }) => zoom * 1.5 + "px"};

  text-align: center;
  text-transform: capitalize;
`;

export const Pin = styled(PinSVG)`
  position: fixed;
  bottom: -${({ zoom }) => zoom * 2.2 + "px"};
  left: 0;
  right: 0;
  margin: 0px auto;

  width: ${({ zoom }) => zoom * 2.5 + "px"};
  height: ${({ zoom }) => zoom * 2.5 + "px"};
`;
