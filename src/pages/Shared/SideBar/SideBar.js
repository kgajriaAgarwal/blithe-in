import {
  Box,
  Avatar,
  Typography,
  Grid,
  List,
  ListItem,
  Divider,
  Switch,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { MdModeNight, MdLightMode } from "react-icons/md";
import { useThemeMode } from "../../../Helpers/Context";
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from "../../../Helpers/Common/utils";
import { getUserDetailsByID } from "../../../app/slice/userSlice";
import logoBlue from "../../../Assets/logo/logo-blue.jpg";

export const SideBar = (props) => {
  const {themeMode, setThemeMode} = useThemeMode();
  const dispatch = useDispatch();
  const dataa = useSelector((state) => state.auth);
  const userDataa = useSelector((state) => state.user);
  const user_info = dataa?.isLoggedIn===false ? "" :userDataa?.userDetails?.data?.user

  const userInfo = dataa?.user? dataa?.user : '';
  const id = dataa?.auth?.user?._id 

  useEffect(()=>  {
    if(id){
      dispatch(getUserDetailsByID(id))
    }
  }
  , [ id && id.length ? id : '' ])


  return (
    <Box
      bgcolor={"Background.default"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, color: "white" }}
    >
      <Box position="fixed" width="14%">
        <Box
          bgcolor={themeMode === "light" ? "#A14F57" : "Background.default"}
          className="sidebar-profile-box"
        >
          <img
            src="https://media.istockphoto.com/photos/triangular-abstract-background-picture-id624878906?k=20&m=624878906&s=612x612&w=0&h=DKUXpuMTr4jPDageP1R-_0vuRCB2cn4Sn0GiUAESHwI="
            alt="cover-img"
            className="cover-img"
          />
          <Link to="#" className="sidebar-link">
            <Box className="profile-img-box" >
              <Avatar
                alt={`${user_info?.firstName} ${user_info?.lastName}`}
                src={user_info?.profilePic? user_info?.profilePic :logoBlue}
                // sx={{ width: "30%", height: "30%" }}
                id = "sidebar-avatar"
                className="sidebar-avatar"
              />
              <Typography variant="h6" sx={{ color: "secondary" , paddingTop:'40%'}} >
              {user_info?.firstName&& user_info?.lastName ? `${user_info?.firstName} ${user_info?.lastName}`: 'BlitheIn'}
              </Typography>
              <Typography variant="body2" mb={2} textAlign='center'>
              {user_info?.profileTitle? user_info?.profileTitle : 'A Proffessional networking site for healthcare proffessionals..'}
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box
          bgcolor={themeMode === "light" ? "#A14F57" : "Background.default"}
          className="sidebar-theme-box"
          mt={2}
        >
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Customise theme
          </Typography>
          <List dense={true}>
            <ListItem>
              <MdLightMode color="yellow" />
              <Switch
                color="default"
                onChange={(e) => setThemeMode(themeMode === "light" ? "dark" : "light")}
              />
              <MdModeNight color="gray" />
            </ListItem>
          </List>
        </Box>

        <Box
          bgcolor={themeMode === "light" ? "#A14F57" : "Background.default"}
          mt={2}
          className="sidebar-activities-box"
          alignItems={"center"}
        >
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Followed hashtags
            </Typography>

            <List dense={true}>
              <Link to="#" className="sidebar-link">
                <ListItem>#doctalks</ListItem>
              </Link>
              <Link to="#" className="sidebar-link">
                <ListItem>#healthcare</ListItem>
              </Link>
            </List>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
