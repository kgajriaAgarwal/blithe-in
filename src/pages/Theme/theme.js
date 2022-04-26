// import { createTheme } from '@mui/material/styles';
// import { useState } from 'react';

// // const [mode, setMode] = useState("light");

// let theme = createTheme({
//   palette: {
//     primary: {
//       main: '#e7717d',
//     },
//     secondary: {
//       main: '#edf2ff',
//     },
//     // mode: mode
//   },
// });

// theme = createTheme(theme, {
//   palette: {
//     info: {
//       main: theme.palette.secondary.main,
//     },
//   },
// });


// export default theme;

// import React, {useState} from "react";

// import { Box, createTheme, CssBaseline, Stack, styled } from "@mui/material";
// import { getLocalStorage } from "../../Helpers/Common/utils";


//  export const themeLight = createTheme({
//   palette: {
//   //   type:{mode},
//     Background: {
//       default: "#1aab2a",
//       primary: "#F5F5F5"
//     },
//     primary: {
//       main: '#A14F57',
//     },
//     secondary: {
//       main: '#ffffff',
//     },
//     text: {
//       primary: "#ffffff",
//       secondary:"#A14F57",
//       tertiary:"#000000"
//     },
//     mode: getLocalStorage("mode")
//   }
// });

// export const themeDark = createTheme({
//   palette: {
//   //   type:{mode},
//     Background: {
//       default: "#202124"
//     },
//     primary: {
//       main: '#A14F57',
//     },
//     secondary: {
//       main: '#ffffff',
//     },
//     text: {
//       primary: "#ffffff",
//       secondary: "#000000",
//     },
//     mode:getLocalStorage("mode")
//   }
// });