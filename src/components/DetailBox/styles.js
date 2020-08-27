import styled from "styled-components";
import { ReactComponent as TimeSVG } from "assets/images/time.svg";
import { ReactComponent as PinSVG } from "assets/images/pinIcon.svg";
import { ReactComponent as PersonSVG } from "assets/images/person.svg";
import { ReactComponent as TagSVG } from "assets/images/tag.svg";
import { ReactComponent as VectorSVG } from "assets/images/Vector.svg";
import { ReactComponent as ProfileSVG } from "assets/images/Profile.svg";
import { ReactComponent as BookmarkSVG } from "assets/images/bookmarkOff.svg";
import font from "../../assets/fonts/MontserratMedium.ttf";

export const Container = styled.div`
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
  position: absolute;
  width: 390px;
  height: 470px;
  left: 20px;
  top: 80px;
  background: #373c4a;
  border-radius: 2px;
`;
export const FlexBox = styled.div`
  margin: 590px 21px;
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
  position: fixed;
  top: 618px;
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
  position: absolute;
  top: 108px;
  left: 347px;
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
  position: absolute;
  left: 50px;
  top: 104px;
  font-weight: SemiBold;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #fbfcff;
`;
export const StudyTitle = styled.div`
  position: absolute;
  left: 50px;
  top: 126px;
  background: #373c4a;
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
  position: absolute;
  left: 52px;
  top: 179px;
`;
export const StudyHost = styled.div`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";
  position: absolute;
  left: 90px;
  top: 180px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;

  color: #fbfcff;
`;
export const StudyContents = styled.div`
  position: absolute;
  left: 50px;
  top: 243.42px;
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
  position: absolute;
  left: 22px;
  top: 566px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #fbfcff;
`;

export const Date = styled.div`
  position: absolute;
  left: 75px;
  top: 612px;
  font-size: 12px;
  color: #fbfcff;
`;

export const Time = styled.div`
  position: absolute;
  left: 75px;
  top: 628px;
  font-weight: normal;
  font-size: 12px;
  color: #fbfcff;
`;

export const Pin = styled.div`
  position: absolute;
  left: 75px;
  top: 667px;
  font-weight: normal;
  font-size: 12px;
  color: #fbfcff;
`;
export const Person = styled.div`
  position: absolute;
  left: 75px;
  top: 722px;
  font-size: 12px;
  color: #fbfcff;
`;

export const Tag = styled.div`
  position: absolute;
  left: 75px;
  top: 785px;
  font-size: 12px;
  color: #fbfcff;
`;

export const AttendeeTitle = styled.div`
  @font-face {
    font-family: "MontserratMedium";
    src: url(${font}) format("truetype");
  }
  font-family: "MontserratMedium";
  position: absolute;
  left: 22px;
  top: 835px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #fbfcff;
`;

export const JoinBtn = styled.button`
  position: absolute;
  width: 250px;
  height: 60px;
  left: 22px;
  top: 980px;
  background: #40fff4;
  border-radius: 2px;
  border-style: none;
  color: #17181b;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.2px;
  z-index: 5;
`;
export const ShareBtn = styled.button`
  position: absolute;
  width: 122px;
  height: 60px;
  left: 280px;
  top: 980px;
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
  position: absolute;
  top: 223px;
  left: 50px;
  width: 330px;
  border: 1px solid #596072;
  z-index: 5;
`;

export const List = styled.div`
  display: flex;
  margin-top: auto;

  padding-left: 5px;
`;
