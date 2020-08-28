import styled from "styled-components";
import { ReactComponent as checkIcon } from "../../assets/images/check.svg";
import fontNoto from "../../assets/fonts/NotoSansKRMedium.otf";

export const Container = styled.div`
  position: fixed;
  width: 200px;
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
  /* width: 26px;
  height: 26px;
  margin-right: 10px;

  border: 2px solid #fbfcff;
  box-sizing: border-box;
  border-radius: 4px; */
  display: none;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid #bcbcbc;
  cursor: pointer;

  border: 2px solid #fbfcff;
  box-sizing: border-box;
  border-radius: 4px;

  background: ${({ checked }) => checked && "#FBFCFF"};

  transition: all 200ms ease;
`;

export const Title = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  align-items: center;
  text-transform: capitalize;

  /* text_white */

  color: #fbfcff;
`;
