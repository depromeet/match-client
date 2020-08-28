import styled from "styled-components";
import fontNoto from "../../assets/fonts/NotoSansKRMedium.otf";
import font from "../../assets/fonts/MontserratExtraBold.ttf";

export const Container = styled.div`
  height: 110px;
  width: 110px;

  margin-right: 20px;
  background: ${({ color }) => color};
  border-radius: 2px;

  padding: 12px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 135px;
  @font-face {
    font-family: "MontserratExtraBold";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratExtraBold";
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

export const SPAN = styled.span`
  background: linear-gradient(
    144.69deg,
    #000000 35.37%,
    rgba(0, 0, 0, 0.3) 79.27%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Detail = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  /* text_black */

  color: #17181b;

  margin-top: auto;
`;

export const Count = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  /* text_black */

  color: #17181b;
  /* margin-top: auto; */
`;
