import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "emotion-theming";
import store from "./store";
import interceptor from "./Utils/Interceptor";
import Dashboard from "./Views/Dashboard/Dashboard";
import "antd/dist/antd.css";

interceptor();

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
