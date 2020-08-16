import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import { theme } from "../../styles/theme";

import { store } from "../../store";

import { Map } from "../Map";
import { Sidebar } from "../Sidebar";

const AppComponent = () => {
  // <<<<<<< HEAD
  //   return (
  //     <Provider store={store}>
  //       <ThemeProvider theme={theme}>
  //         <S.Container>
  //           <Sidebar />
  //           <Map />
  //         </S.Container>
  //       </ThemeProvider>
  //     </Provider>
  //   );
  // =======
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <S.Container>
          <Sidebar />
          <Map />
          <S.Logo />
        </S.Container>
      </ThemeProvider>
    </Provider>
  );
  //>>>>>>> master
};

export default AppComponent;
