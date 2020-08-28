import styled from "styled-components";
import font from "../../assets/fonts/MontserratMedium.ttf";
import fontNoto from "../../assets/fonts/NotoSansKRMedium.otf";

export const Container = styled.div`
  position: relative;
  height: 60%;
`;
export const Title = styled.h1`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";

  position: sticky;
  margin: 40px 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #fbfcff;
`;

export const StudyContainer = styled.div`
  height: 100%;
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";

  display: flex;
  flex-direction: column;

  padding: 0px 20px;
  overflow-x: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomBlur = styled.div`
  position: absolute;
  bottom: -105px;
  right: 0;
  left: 0;
  height: 70px;

  background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0) 100%);
  transform: rotate(-180deg);

  z-index: 2;
`;
