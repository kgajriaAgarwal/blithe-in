import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline, Stack, styled } from "@mui/material";
import react, {useEffect, useState} from 'react';
import { getLocalStorage, setLocalStorage } from "../../Helpers/Common/utils";
import FeedsPage from "../FeedsPage/FeedsPage";
import { AddPost, Feed, NavBar, RightBar, SideBar } from '../Shared';
import './MainPage.css';
import MainPageRoute from "./MainPageRoute";
// import { themeLight , themeDark } from "../Theme/theme";


const MainPageLayout = () => {

    //  const [mode, setMode] = useState(getLocalStorage("mode")=== null ? "light" : getLocalStorage("mode"));
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
          mode: "light"
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
          mode:"dark"
        }
      });

    
    
    useEffect(()=> 
      console.log("reading from local storage", localStorage.getItem("mode") )
    , [localStorage.getItem("mode")])
    
  //   function checkMode() {
  //   debugger
  //   const item = localStorage.getItem('mode')
  //     console.log("item....",item)
  //   // if (item) {
  //     setMode(item)
  //   // }
  // }
    
  // debugger
  // window.addEventListener('storage', checkMode)

    useEffect(()=> 
      console.log("reading from state..", mode )
    , [mode])

    // useEffect(()=> setLocalStorage("mode", "light"), []);

    // console.log("2222222____mode:", getLocalStorage("mode"));


    useEffect(() => {
        function checkMode() {
          const item = localStorage.getItem('mode')
            console.log("item....",item)
          if (item) {
            setMode(item)
          }
        }

        console.log("@@@@@:",window.addEventListener('storage', checkMode))
      
        checkMode();
        window.addEventListener('storage', checkMode)
      
        return () => {
          window.removeEventListener('storage', checkMode)
        }
      }, [])

    return(
        // <ThemeProvider theme={mode==="light" ?themeLight : themeDark}>
        //     <CssBaseline />
        //     <Box  bgcolor={mode==="light"? "#F5F5F5":"Background.default"}>
        //         <NavBar/>
        //         <MainPageRoute/>
        //         {/* <FeedsPage mode={mode} setMode={setMode}/> */}
               
        //     </Box>
        // </ThemeProvider>
        <ThemeProvider theme={mode==="light" ? themeLight : themeDark}>
            <CssBaseline />
            <Box  bgcolor={mode==="light"? "#F5F5F5":"Background.default"}>
                <NavBar/>
                <MainPageRoute/>
                {/* <FeedsPage mode={mode} setMode={setMode}/> */}
            </Box>
        </ThemeProvider>
    );
}

export default MainPageLayout;