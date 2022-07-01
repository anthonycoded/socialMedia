import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store/Store";
import AppWrapper from "./AppWrapper";
import { LogBox } from "react-native";

const App = () => {
  LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);
  return (
    <Provider store={store}>
      <AppWrapper></AppWrapper>
    </Provider>
  );
};

export default App;
