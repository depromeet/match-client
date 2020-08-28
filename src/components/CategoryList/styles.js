import styled from "styled-components";
import font from "../../assets/fonts/MontserratMedium.ttf";

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
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const HorizontalBlur = styled.div`
  position: fixed;

  left: 482px;
  bottom: 30px;
  height: 150px;
  width: 32px;

  background: linear-gradient(90deg, #1d212c 0%, rgba(29, 33, 44, 0) 100%);
  transform: rotate(-180deg);
  z-index: 2;
`;

export const Title = styled.h1`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";
  position: absolute;
  bottom: 180px;
  margin: 20px 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #fbfcff;
`;
