import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeModeProvider } from "./Helpers/Context";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

// Call make Server
makeServer();

ReactDOM.render(
  <Provider store={store}>
    <ThemeModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeModeProvider>
  </Provider>,
  document.getElementById("root")
);
