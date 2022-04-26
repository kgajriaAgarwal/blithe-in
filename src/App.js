import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline } from "@mui/material";

import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {

  // const [mode, setMode] = useState("dark");

  // // const darkTheme = createTheme({
  // //   palette:{
  // //     mode:mode,
  // //     primary: {
  // //       main: '#e7717d',
  // //     },
  // //     secondary: {
  // //       main: '#1aab2a',
  // //     },
  // //   }
  // // })

  // const themeLight = createTheme({
  //   palette: {
  //     type:{mode},
  //     Background: {
  //       default: "#1aab2a"
  //     },
  //     primary: {
  //       main: '#A14F57',
  //     },
  //     secondary: {
  //       main: '#ffffff',
  //     },
  //     text: {
  //       primary: "#ffffff"
  //     },
  //   }
  // });
  
  // const themeDark = createTheme({
  //   palette: {
  //     type:{mode},
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
  //       primary: "#ffffff"
  //     },
  //   }
  // });

  // const customTheme = createTheme({
  //   palette: {
  //     primary: {
  //       light: "#112233",
  //       main: "#e7717d",
  //       dark: "#778899",
  //       contrastText: "#fff"
  //     },
  //     secondary: {
  //       light: "#f0e6e6",
  //       main: "#c93434",
  //       dark: "#3c3c3c",
  //       contrastText: "#000"
  //     },
  //     Background: {
  //       default: "#202124"
  //     }
  //   }
  // });
  

  return (
    // <ThemeProvider theme={themeLight}>
    //   <CssBaseline />
      <Box className="App" bgcolor={"Background.default"}>
      <MainPage/>
      {/* <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>mockBee!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header> */}
    </Box>
    // </ThemeProvider>
  );
}

export default App;
