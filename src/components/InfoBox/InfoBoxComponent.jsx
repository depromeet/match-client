import React from "react";
import * as S from "./styles";
import { ReactComponent as CalendarIcon } from "img/ic_date.svg";

import DatePicker from "./DatePicker";

const InfoBoxComponent = () => {
  //const { newStudy } = useNewStudy();
  const [date, setDate] = useState(moment());

  return (
    <S.Container>
      <S.Title>스터디 내용</S.Title>
      <S.StudyTitle />
      <S.HR />
      <S.StudyContent />
      <S.CalendarIcon />
      <S.Calendar />
      <DatePicker date={date} onChange={(e) => setDate(e.target.value)} />

      <S.StartTime />
      <S.EndTime />
      <S.MaxParticipants />
      <S.Tag />
      <S.CreateBtn>스터디 열기</S.CreateBtn>
    </S.Container>
  );
};

export default InfoBoxComponent;
