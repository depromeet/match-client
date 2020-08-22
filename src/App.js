import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { store } from "./store";
import Routes from "pages/Routes";
import { AlertBox } from "components/AlertBox";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AlertBox />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
