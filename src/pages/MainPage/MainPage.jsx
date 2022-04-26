import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline, Stack, styled } from "@mui/material";
import react, {useEffect, useState} from 'react';
import { setLocalStorage } from "../../Helpers/Common/utils";
import { AddPost, Feed, NavBar, RightBar, SideBar } from '../Shared';
import './MainPage.css';
// import { themeLight , themeDark } from "../Theme/theme";


const MainPage = () => {

    const [mode, setMode] = useState("light");

    const themeLight = createTheme({
        palette: {
        //   type:{mode},
          Background: {
            default: "#1aab2a",
            primary: "#F5F5F5"
          },
          primary: {
            main: '#A14F57',
          },
          secondary: {
            main: '#ffffff',
          },
          text: {
            primary: "#ffffff",
            secondary:"#A14F57",
            tertiary:"#000000"
          },
          mode:mode
        }
      });
      
      const themeDark = createTheme({
        palette: {
        //   type:{mode},
          Background: {
            default: "#202124"
          },
          primary: {
            main: '#A14F57',
          },
          secondary: {
            main: '#ffffff',
          },
          text: {
            primary: "#ffffff",
            secondary: "#000000",
            tertiary:"#A14F57",
          },
          mode:mode
        }
      });

      useEffect(()=> setLocalStorage("mode", mode), [mode])
    

    return(
        <ThemeProvider theme={mode==="light" ?themeLight : themeDark}>
            <CssBaseline />
            <Box  bgcolor={mode==="light"? "#F5F5F5":"Background.default"}>
                <NavBar/>
                <Stack direction='row' spacing={2} justifyContent='space-between'>            
                <SideBar mode={mode} setMode={setMode}/>
                <Feed/>
                <RightBar/>
                </Stack>
                <AddPost/>
            </Box>
        </ThemeProvider>
    );
}

export default MainPage;