import styled from "styled-components";
import { ReactComponent as CalendarSVG } from "assets/images/calendar.svg";

export const Container = styled.div`
  position: relative;
  height: 60%;
`;
export const Form = styled.form``;

export const Box = styled.div`
  position: absolute;
  width: 390px;
  height: 470px;
  left: 20px;
  top: 80px;
  background: #373c4a;
  border-radius: 2px;
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
export const CalBox = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  left: 20px;
  top: 564px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  z-index: 2;
`;
export const CalendarIcon = styled(CalendarSVG)`
  position: absolute;
  top: 579px;
  left: 38px;
`;

export const StartTime = styled.div``;
export const EndTime = styled.div``;
// export const MaxParticipants = styled.input``;
// export const Tag = styled.input``;
export const CreateBtn = styled.button`
  position: absolute;
  width: 260px;
  height: 60px;
  left: 30px;
  top: 980px;

  background: #40fff4;
  border-radius: 2px;
  border-style: none;
  color: black;
`;

export const HR = styled.hr`
  position: absolute;
  top: 170px;
  left: 50px;
  width: 330px;
  border: 1px dashed #596072;
`;
