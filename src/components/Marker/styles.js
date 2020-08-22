import styled from "styled-components";
import { ReactComponent as PinSVG } from "../../assets/images/pin.svg";

export const Container = styled.div`
  width: fit-content;
  height: ${({ zoom }) => zoom * 0.5 + "px"};

  padding: 6px 6px;
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
  font-weight: 600;
  font-size: ${({ zoom }) => zoom + "px"};
  line-height: ${({ zoom }) => zoom * 1.5 + "px"};

  text-align: center;
  text-transform: capitalize;
`;

export const Pin = styled(PinSVG)`
  position: fixed;
  bottom: -${({ zoom }) => zoom * 1.5 + "px"};
  left: 0;
  right: 0;
  margin: 0px auto;

  width: ${({ zoom }) => zoom * 1.5 + "px"};
  height: ${({ zoom }) => zoom * 1.5 + "px"};
`;
