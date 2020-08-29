import styled from "styled-components";
import { ReactComponent as TimeSVG } from "assets/images/time.svg";
import { ReactComponent as PinSVG } from "assets/images/pinIcon.svg";
import { ReactComponent as PersonSVG } from "assets/images/person.svg";
import { ReactComponent as TagSVG } from "assets/images/tag.svg";
import { ReactComponent as VectorSVG } from "assets/images/Vector.svg";
import { ReactComponent as ProfileSVG } from "assets/images/Profile.svg";
import { ReactComponent as BookmarkSVG } from "assets/images/bookmarkOff.svg";
import font from "../../assets/fonts/MontserratMedium.ttf";
import fontNoto from "../../assets/fonts/NotoSansKRMedium.otf";

export const Container = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: fixed;
  left: 120px;
  top: 0;
  bottom: 0;
  /* overflow: auto; */
  height: 100%;
  width: 440px;
  background-color: #1d212c;
  z-index: 30;
  display: flex;
  flex-direction: column;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentsBox = styled.div`
  position: relative;
  width: 390px;
  height: 470px;
  left: 20px;
  top: 50px;
  background: #373c4a;
  border-radius: 2px;
`;
export const FlexBox = styled.div`
  margin: 70px 21px;
  display: flex;
  flex-direction: column;
`;
export const DateBox = styled.div`
  margin-top: 22px;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 2;
`;

export const PinBox = styled.div`
  margin-top: 22px;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 2;
`;
export const PersonBox = styled.div`
  margin-top: 22px;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 2;
`;
export const TagBox = styled.div`
  margin-top: 22px;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 2;
`;

export const FlexIcon = styled.div`
  margin-left: 27.5px;
  position: relative;
  top: -266.5px;
  display: flex;
  flex-direction: column;
  z-index: 4;
`;

export const DateIcon = styled(TimeSVG)`
  width: 18px;
  z-index: 4;
  margin-left: 2px;
`;
export const Bookmark = styled(BookmarkSVG)`
  position: relative;
  top: 110px;
  left: 350px;
  z-index: 5;
  fill: #fbfcff;
  stroke: #fbfcff;
  stroke-width: 10;
`;

export const PinIcon = styled(PinSVG)`
  margin-top: 33px;
  width: 12px;
  margin-left: 5px;
  z-index: 4;
`;
export const PersonIcon = styled(PersonSVG)`
  margin-top: 33px;
  margin-left: 1px;
  width: 21px;
  z-index: 4;
`;
export const TagIcon = styled(TagSVG)`
  margin-top: 34px;
  margin-left: 1px;
  width: 18px;
  z-index: 4;
`;
export const BackIcon = styled(VectorSVG)`
  position: absolute;
  left: 20px;
  top: 40px;
`;
export const Back = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: absolute;
  left: 60px;
  top: 40px;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #fbfcff;
`;
export const StudySubTitle = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 30px;
  top: 25px;
  font-weight: SemiBold;
  font-size: 16px;
  align-items: center;
  color: #fbfcff;
`;
export const StudyTitle = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 30px;
  top: 25px;
  border-style: none;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #fbfcff;
`;
export const HostProfile = styled(ProfileSVG)`
  position: relative;
  left: 32px;
  top: 40px;
`;
export const StudyHost = styled.div`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";
  position: relative;
  left: 70px;
  top: 9px;
  font-size: 10px;

  color: #fbfcff;
`;
export const Strong = styled.strong`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";
  font-weight: bold;
`;
export const StudyContents = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 32px;
  top: 40px;
  width: 320px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-transform: capitalize;
  color: #fbfcff;
  background-color: #373c4a;
  border-style: none;
`;

export const DetailTitle = styled.div`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";
  position: relative;
  left: 22px;
  top: 70px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #fbfcff;
`;

export const Date = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 75px;
  top: -460px;
  font-size: 12px;
  color: #fbfcff;
`;

export const Time = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 75px;
  top: -462px;
  font-weight: normal;
  font-size: 12px;
  color: #fbfcff;
`;

export const Pin = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 75px;
  top: -440px;
  font-weight: normal;
  font-size: 12px;
  color: #fbfcff;
`;
export const Person = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 75px;
  top: -420px;
  font-size: 12px;
  color: #fbfcff;
`;

export const Tag = styled.div`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: relative;
  left: 75px;
  top: -390px;
  font-size: 12px;
  color: #fbfcff;
`;

export const AttendeeTitle = styled.div`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";
  position: relative;
  left: 22px;
  top: -350px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #fbfcff;
`;
export const FlexBtn = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  margin-left: 20px;
  margin-bottom: 30px;
`;
export const JoinBtn = styled.button`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  width: 250px;
  height: 60px;
  background: #40fff4;
  border-radius: 2px;
  border-style: none;
  color: #17181b;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.2px;
  z-index: 5;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
export const ShareBtn = styled.button`
  @font-face {
    font-family: "NotoSansKRMedium";
    src: url(${fontNoto}) format("truetype");
  }
  font-family: "NotoSansKRMedium";
  position: sticky;
  width: 122px;
  height: 60px;
  margin-left: 10px;
  background: #373c4a;
  border-radius: 2px;
  border-style: none;
  color: #fbfcff;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.2px;
  z-index: 5;
`;
export const HR = styled.hr`
  position: relative;
  top: 25px;
  left: 2px;
  width: 330px;
  border: 1px solid #596072;
  z-index: 5;
`;

export const List = styled.div`
  display: flex;
  margin-top: auto;

  padding-left: 5px;
`;
export const ScrollBox = styled.div`
  &&::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  scroll-behavior: smooth;
  display: block;
  height: 100%;
  width: 100%;
`;
