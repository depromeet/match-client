import React from "react";
import * as S from "./styles";
import Font from "../StudyInfoBox/FontStyle";
import { AttendeeBox } from "components/AttendeeBox";

const DetailBoxComponent = () => {
  return (
    <S.Container>
      <Font />
      <S.BackIcon />
      <S.Back>뒤로가기</S.Back>
      <S.Bookmark />
      <S.ContentsBox />
      <S.StudySubTitle>8월 22일부터 · 매주 토요일 · 오후 2:00</S.StudySubTitle>
      <S.StudyTitle>노션으로 일잘러되기</S.StudyTitle>
      <S.HostProfile />
      <S.StudyHost>
        Hosted By
        <br />
        Jeongmin Yun
      </S.StudyHost>
      <S.HR />
      <S.StudyContents>[디프만 8기 신입 회원 모집]</S.StudyContents>
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

      <S.Date>20년 7월 30일 (토) - 20년 9월 19일 (토)</S.Date>
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
      <S.JoinBtn>참여하기</S.JoinBtn>
      <S.ShareBtn>공유</S.ShareBtn>
    </S.Container>
  );
};

export default DetailBoxComponent;
