import React from "react";
import * as S from "./styles";
import { AttendeeList } from "components/AttendeeList";
import { useAttendent } from "hooks/useAttendent";

const AttendeeBoxComponent = () => {
  const { attendent } = useAttendent();

  const renderAttendent = () => {
    return attendent.map((att, idx) => (
      <AttendeeList {...att} key={`att-${idx}`} />
    ));
  };
  return (
    <>
      <S.Container>{renderAttendent()}</S.Container>
      <S.HorizontalBlur />
      <S.VerticalBlur />
    </>
  );
};

export default AttendeeBoxComponent;
