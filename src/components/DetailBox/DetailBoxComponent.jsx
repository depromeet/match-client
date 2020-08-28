import React from "react";
import * as S from "./styles";
import Font from "../StudyInfoBox/FontStyle";
import { AttendeeBox } from "components/AttendeeBox";
import { useAlert } from "hooks/useAlert";

const DetailBoxComponent = ({ history }) => {
  const { toggleAlertMessage } = useAlert();
  const alert = () => {
    toggleAlertMessage();
    return;
  };
  return (
    <S.Container>
      <S.BackIcon onClick={() => history.push("/study")} />
      <S.Back onClick={() => history.push("/study")}>뒤로가기</S.Back>
      <S.ScrollBox>
        <S.Bookmark />
        <S.ContentsBox>
          <S.StudySubTitle>
            8월 22일부터 · 매주 토요일 · 오후 2:00
          </S.StudySubTitle>
          <S.StudyTitle>노션으로 일잘러되기</S.StudyTitle>
          <S.HostProfile />
          <S.StudyHost>
            Hosted By
            <br />
            <S.Strong>Jeongmin Yun</S.Strong>
          </S.StudyHost>
          <S.HR />
          <S.StudyContents>
            [디프만 8기 신입 회원 모집]
            <br />
            <br />
            디프만(디자이너와 프로그래머가 만났을 때)에서 8기 회원을 모집합니다!
            디프만은 디자이너와 프로그래머가 함께 생산적인 활동을 하자는 취지로
            설립된 연합 IT 동아리로, 주 1회 정기세션에서 스터디, 네트워킹,
            프로젝트, 세미나 등의 생산적인 활동을 하고 있습니다.
            <br />
            <br />
            👉 주요활동 8기에서는 [디프만 마피아] 라는 테마를 마탕으로 구성원
            과의 유대를 중요시 하는 활동이 예정되어 있습니다. 이를 위해 스터디,
            네트워킹, 세미나, 해커톤 등 여러 행사를 진행합니다.
            <br />
            <br />
            미디엄 : https://medium.com/@depromeet
          </S.StudyContents>
        </S.ContentsBox>

        <S.DetailTitle>DETAILS</S.DetailTitle>
        <S.FlexBox>
          <S.DateBox />
          <S.PinBox />
          <S.PersonBox />
          <S.TagBox />
        </S.FlexBox>
        <S.FlexIcon>
          <S.DateIcon />
          <S.PinIcon />
          <S.PersonIcon />
          <S.TagIcon />
        </S.FlexIcon>
        <S.Date>20년 8월 22일 (토) - 20년 9월 19일 (토)</S.Date>
        <S.Time>오후 8:00에서 오후 10:00까지</S.Time>
        <S.Pin>
          온라인 이벤트
          <br />
          링크는 참여가 확정된 분들께 따로 제공됩니다.
        </S.Pin>
        <S.Person>
          최대 10명까지 가능
          <br />
          3자리 남아있습니다.
        </S.Person>
        <S.Tag>#코딩 #직무 #목요일 #일잘러</S.Tag>
        <S.AttendeeTitle>ATTENDEE</S.AttendeeTitle>
        <AttendeeBox />
      </S.ScrollBox>
      <S.FlexBtn>
        <S.JoinBtn onClick={alert}>참여하기</S.JoinBtn>
        <S.ShareBtn>공유</S.ShareBtn>
      </S.FlexBtn>
    </S.Container>
  );
};

export default DetailBoxComponent;
