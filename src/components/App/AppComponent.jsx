import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import { theme } from "../../styles/theme";

import { store } from "../../store";

import { Map } from "../Map";
import { Sidebar } from "../Sidebar";
import { MainInput } from "../MainInput";

const AppComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <S.Container>
          <Sidebar />
          <Map />
          <MainInput />
        </S.Container>
      </ThemeProvider>
    </Provider>
  );
};

export default AppComponent;
