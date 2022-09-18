
import React from "react";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import store from "./src/store/index";
import { Provider } from "react-redux";
import AppNavigator from "./AppNavigator";
Amplify.configure(config);
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;