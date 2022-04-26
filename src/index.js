import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import theme from './pages/Theme/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Call make Server
makeServer();

ReactDOM.render(
  // <ThemeProvider theme={theme?.palette?.mode}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ThemeProvider>
  ,
  document.getElementById("root")
);
