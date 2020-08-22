import React from "react";
import * as S from "./styles";
import { useAlert } from "hooks/useAlert";

const AlertBoxComponent = () => {
  const { showAlert, alertMessage, toggleAlertMessage } = useAlert();

  if (!showAlert) {
    return null;
  }

  return (
    <>
      <S.Wrapper />
      <S.Container>
        <S.Text>{alertMessage}</S.Text>
        <S.Button onClick={toggleAlertMessage}>확인</S.Button>
      </S.Container>
    </>
  );
};

export default AlertBoxComponent;
