import styled from "styled-components";
import { ReactComponent as CalendarSVG } from "assets/images/calendar.svg";
import { ReactComponent as TimeSVG } from "assets/images/time.svg";
import { ReactComponent as PinSVG } from "assets/images/pinIcon.svg";
import { ReactComponent as PersonSVG } from "assets/images/person.svg";
import { ReactComponent as TagSVG } from "assets/images/tag.svg";

export const Container = styled.div`
  position: relative;
  height: 60%;
`;
export const Form = styled.form``;

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
  margin: 566px 21px;
  display: flex;
  flex-direction: column;
`;
export const CalBox = styled.div`
  margin-bottom: 14px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  z-index: 2;
`;
export const TimeBox = styled.div`
  margin-bottom: 14px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  z-index: 2;
`;
export const PinBox = styled.div`
  margin-bottom: 14px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  z-index: 2;
`;
export const MaxPeopleBox = styled.div`
  margin-bottom: 14px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  z-index: 2;
`;
export const TagBox = styled.div`
  margin-bottom: 14px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  z-index: 2;
`;

export const FlexIcon = styled.div`
  margin-left: 38px;
  position: fixed;
  top: 581px;
  display: flex;
  flex-direction: column;
  z-index: 4;
`;
export const CalendarIcon = styled(CalendarSVG)`
  z-index: 4;
`;
export const TimeIcon = styled(TimeSVG)`
  margin-top: 53px;
  margin-left: 2px;
  z-index: 4;
`;
export const PinIcon = styled(PinSVG)`
  margin-top: 54px;
  margin-left: 6px;
  z-index: 4;
`;
export const MaxPeopleIcon = styled(PersonSVG)`
  margin-top: 56px;
  z-index: 4;
`;
export const TagIcon = styled(TagSVG)`
  margin-top: 57px;
  margin-left: 3px;
  z-index: 4;
`;

export const Title = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: Montserrat;
  color: #fbfcff;
`;
export const StudyTitle = styled.div`
  position: absolute;
  left: 50px;
  top: 104px;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #40fff4;
`;
export const TitleInput = styled.input`
  position: absolute;
  left: 50px;
  top: 126px;
  background: #373c4a;
  border-style: none;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #fbfcff;
`;
export const ContentInput = styled.textarea`
  position: absolute;
  width: 320px;
  height: 310px;
  left: 50px;
  top: 190px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-transform: capitalize;
  color: #fbfcff;
  background-color: #373c4a;
  border-style: none;
`;

export const StartTime = styled.div``;
export const EndTime = styled.div``;
export const CreateBtn = styled.button`
  position: absolute;
  width: 250px;
  height: 60px;
  left: 22px;
  top: 980px;
  font-weight: 500;
  background: #40fff4;
  border-radius: 2px;
  border-style: none;
  color: #17181b;
`;
export const SaveBtn = styled.button`
  position: absolute;
  width: 122px;
  height: 60px;
  left: 280px;
  top: 980px;
  background: #373c4a;
  border-radius: 2px;
  border-style: none;
  color: #fbfcff;
`;
export const HR = styled.hr`
  position: absolute;
  top: 170px;
  left: 50px;
  width: 330px;
  border: 1px dashed #596072;
`;

export const SelDiv = styled.div`
  position: absolute;
  top: 652px;
  left: 145px;
`;
export const SelDiv_Sec = styled.div`
  position: absolute;
  top: 652px;
  left: 303px;
`;

export const StartTitle = styled.div`
  position: absolute;
  top: 660px;
  left: 100px;
  color: #fbfcff;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;
export const EndTitle = styled.div`
  position: absolute;
  top: 660px;
  left: 260px;
  color: #fbfcff;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;
export const Online = styled.div`
  position: absolute;
  left: 180px;
  top: 741px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #fbfcff;
`;
export const Offline = styled.div`
  position: absolute;
  left: 258px;
  top: 741px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #fbfcff;
`;
