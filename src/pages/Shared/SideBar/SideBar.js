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
import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { MdModeNight, MdLightMode } from "react-icons/md";

export const SideBar = (props) => {
  const { mode, setMode } = props;

  return (
    <Box
      bgcolor={"Background.default"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, color: "white" }}
    >
      <Box position="fixed" width="14%">
        <Box
          bgcolor={mode === "light" ? "#A14F57" : "Background.default"}
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
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                // sx={{ width: "30%", height: "30%" }}
                className="sidebar-avatar"
              />
              <Typography variant="h6" sx={{ color: "secondary" , paddingTop:'40%'}} >
                Dr.Remy Sharp
              </Typography>
              <Typography variant="body2" mb={2}>
                Orthopedic surgeon
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box
          bgcolor={mode === "light" ? "#A14F57" : "Background.default"}
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
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
              <MdModeNight color="gray" />
            </ListItem>
          </List>
        </Box>

        <Box
          bgcolor={mode === "light" ? "#A14F57" : "Background.default"}
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
