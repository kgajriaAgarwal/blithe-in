import {
    Stack,
    Typography,
    Avatar,
    Box,
    styled,
    IconButton,
    Divider,
  } from "@mui/material";
  import react, { useEffect, useState } from "react";
  import { setLocalStorage } from "../../Helpers/Common/utils";
  import { AddPost, Feed, RightBar, SideBar } from "../Shared";
  import "./UserProfile.css";
  import EditIcon from "@mui/icons-material/Edit";
  import { color, display } from "@mui/system";
  import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
  import EqualizerIcon from "@mui/icons-material/Equalizer";
  import Stepper from "@mui/material/Stepper";
  import Step from "@mui/material/Step";
  import StepLabel from "@mui/material/StepLabel";
  import StepContent from "@mui/material/StepContent";
  import CircleIcon from "@mui/icons-material/Circle";
  import { useThemeMode } from "../../Helpers/Context";
  import { useDispatch, useSelector } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
  import { getUsers, getUserDetailsByID } from "../../app/slice/userSlice";

const LeftBoxConatiner = styled(Box)(({ theme }) => ({
    backgroundColor: "Background.default",
    width: "70%",
    maxHeight: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    // margin: '2rem'
  }));

  const EditBoxContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    float: "right",
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "67%",
    },
  }));

const ProfileData = (props) => {

    const {userDetailsData} = props;

    return(
        <LeftBoxConatiner>
          {/* USERPROFILE BOX */}
          <Box bgcolor={"Background.default"} className="left-profile-box">
            <EditBoxContainer className="btn-cover-edit-box">
              <IconButton
                aria-label="delete"
                size="large"
                className="btn-cover-edit"
              >
                <EditIcon />
              </IconButton>
            </EditBoxContainer>
            <img
              src="https://media.istockphoto.com/photos/triangular-abstract-background-picture-id624878906?k=20&m=624878906&s=612x612&w=0&h=DKUXpuMTr4jPDageP1R-_0vuRCB2cn4Sn0GiUAESHwI="
              alt="cover-img"
              className="user-cover-img"
            />
            <Avatar
              alt={userDetailsData?.firstName}
              src={userDetailsData?.profilePic}
              // sx={{ width: "30%", height: "30%" }}
              className="user-avatar"
            />

            <Box className="profile-details-box">
              {/* <Stack direction="row" spacing={2} justifyContent="space-between" p={4} bgcolor="peachpuff"> */}
              {/* <Box className="btn-edit-details-box">
                        <IconButton aria-label="delete" size="small">
                            <EditIcon />
                        </IconButton>
                    </Box> */}
              <Box>
                <Typography variant="h6" sx={{ color: "secondary" }}>
                {`${userDetailsData?.firstName} ${userDetailsData?.lastName}`}
                </Typography>
                <Typography variant="body2">{userDetailsData?.profileTitle}</Typography>
                <Typography variant="body2" sx={{ color: "darkgray" }}>
                    {userDetailsData?.location}
                </Typography>

                <Typography variant="subtitle2" mt={2} component="div">
                  3,537 followers , 500+ connections
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: "secondary" }}>
                    {userDetailsData?.workPlace}
                </Typography>
                <Typography variant="body2" mt={2}>
                  {userDetailsData?.education}
                </Typography>
              </Box>
              {/* </Stack> */}
            </Box>
          </Box>

          {/* ANALYTICS BOX */}
          <Box bgcolor={"Background.default"} className="analytics-box" p={2}>
            <Typography mb={2} variant="h6" sx={{ color: "secondary" }}>
              Analytics
            </Typography>
            <Box className="analytics-details-box" mt={2}>
              <Box className="analytics-item">
                <PeopleAltIcon />
                <Typography variant="body2">140 profile views</Typography>
              </Box>
              <Box className="analytics-item">
                <EqualizerIcon />
                <Typography variant="body2">612 post impressions</Typography>
              </Box>
              <Box className="analytics-item">
                <EqualizerIcon />
                <Typography variant="body2">124 search impressions</Typography>
              </Box>
            </Box>
          </Box>

          {/* ABOUT */}
          <Box bgcolor={"Background.default"} className="analytics-box" p={2}>
            <Typography mb={2} variant="h6" sx={{ color: "secondary" }}>
              About
            </Typography>
            <Typography variant="body2">
            {userDetailsData?.bio}
            </Typography>
            
                <Typography mt={2} variant="h6" sx={{ color: "secondary" }}>
                Profile Link 
                </Typography>
                <Link to={userDetailsData?.link? userDetailsData?.link : '#'}>
                <Typography variant="body2">{userDetailsData?.link}</Typography>
                </Link>
                <Typography mt={2} variant="h6" sx={{ color: "secondary" }}>
                Email
                </Typography>
                <Link to={userDetailsData?.username ? userDetailsData?.username : '#'}>
                <Typography variant="body2">{userDetailsData?.username}</Typography>
                </Link>
                <Stack className="see-posts" id="see-posts">
                  <Link to={`/posts/user/${userDetailsData?.username}`} >See Posts</Link>
                </Stack>
          </Box>

          {/* EXPERIENCE */}
          <Box bgcolor={"Background.default "} p={2} className="experience-box">
            <Typography variant="h6" mb={2} sx={{ color: "secondary" }}>
              Expereince
            </Typography>
            <Box className="experience-details-box">
              <Box className="experience-item">
                <PeopleAltIcon />
                <Box>
                  <Typography variant="body1">
                    {userDetailsData?.profileTitle}
                  </Typography>
                  <Typography variant="body2">
                    {userDetailsData?.workPlace}
                  </Typography>
                  {/* <Typography variant="body2">
                    Feb 2021 - Present · 1 yr 3 mos
                  </Typography> */}
                  {/* <Typography variant="body4">Indore, MP, India</Typography> */}
                  <Stepper orientation="vertical">
                    {userDetailsData?.workExperience.map((experience, index) => (
                      <Step key={index} active={false} expanded={true}>
                        <StepLabel
                          icon={<CircleIcon />}
                          className="step-label"
                          id="step-label"
                          // optional={
                          //     index === 2 ? (
                          //     <Typography variant="caption">Last step</Typography>
                          //     ) : null
                          // }
                        >
                          {experience.workplace}
                        </StepLabel>
                        <StepContent>
                          <Typography>{experience.role}</Typography>
                          <Typography>{experience.duration}</Typography>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Box>
              <Divider />
              {/* <Box className="experience-item">
                <PeopleAltIcon />
                <Typography variant="body2">
                  LMS Solutions (India) Pvt. Ltd. · Full-time
                </Typography>
                <Typography variant="body2">
                  Feb 2021 - Present · 1 yr 3 mos
                </Typography>
              </Box> */}
            </Box>
          </Box>

          {/* EDUCATION */}
          <Box bgcolor={"Background.default"} p={2} className="education-box">
            <Typography variant="h6" mb={2} sx={{ color: "secondary" }}>
              Education
            </Typography>
            <Box className="experience-details-box">
              {/* <Box className="experience-item"> */}
                {/* <PeopleAltIcon /> */}
                {/* <Box>
                  <Typography variant="body1">
                    Software Developer(react js)
                  </Typography>
                  <Typography variant="body2">
                    LMS Solutions (India) Pvt. Ltd. · Full-time
                  </Typography>
                  <Typography variant="body2">
                    Feb 2021 - Present · 1 yr 3 mos
                  </Typography>
                  <Typography variant="body4">Indore, MP, India</Typography>
                </Box> */}
              {/* </Box> */}
              {/* <Divider /> */}
              <Box className="experience-item">
              <Stepper orientation="vertical">
                    {userDetailsData?.educationHistory.map((edu, index) => (
                      <Step key={index} active={false} expanded={true}>
                        <StepLabel
                          icon={<CircleIcon />}
                          className="step-label"
                          id="step-label"
                          // optional={
                          //     index === 2 ? (
                          //     <Typography variant="caption">Last step</Typography>
                          //     ) : null
                          // }
                        >
                          {edu.education}
                        </StepLabel>
                        <StepContent>
                          <Typography>{edu.institute}</Typography>
                          <Typography>{edu.passoutYear}</Typography>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
              </Box>
            </Box>
          </Box>
        </LeftBoxConatiner>
    );
}

export default ProfileData;