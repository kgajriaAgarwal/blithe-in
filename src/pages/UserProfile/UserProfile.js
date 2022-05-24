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
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, getUserDetailsByID } from "../../app/slice/userSlice";
import ProfileData from "./ProfileDetails";


//RightBoxConatiner
const RightBoxConatiner = styled(Box)(({ theme }) => ({
  backgroundColor: "Background.default",
  width: "30%",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));


const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);
  const allUsers = data?.users?.allUsers;
  const userDetailsData = data?.userDetails?.data?.user;
  let  { userId } = useParams(); 

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(()=>  {
    dispatch(getUserDetailsByID(userId))
  }
  , [userId])

 

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between" p={4}>
        {data?.status === "loading" ? 
            <Typography variant="h6" sx={{ color: "secondary" }}>
            Loading..
            </Typography>
            : <ProfileData userDetailsData = {userDetailsData}/> 
        }
        
        <RightBoxConatiner>
          <Box bgcolor={"Background.default"} className="analytics-box" p={2}>
            <Typography variant="h6" sx={{ color: "secondary" }}>
              People you may know
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              justifyContent="space-between"
            >
              {allUsers && allUsers.length
                ? allUsers.map((user) => {
                    return (
                      <>
                        <Stack
                          direction="row"
                          spacing={2}
                          gap="20px"
                          alignItems="center"
                          className="user-row"
                          onClick={() =>
                            dispatch(
                              getUserDetailsByID(user._id)
                            )
                          }
                        >
                          <Avatar
                            alt={user.firstName}
                            src={user.profilePic}
                            sx={{ width: "4rem", height: "4rem" }}
                          />
                          <Stack direction="column">
                            <Typography variant="h6">
                              {`${user.firstName} ${user.lastName}`}
                            </Typography>
                            <Typography variant="body4">
                              {user.profileTitle}
                            </Typography>
                          </Stack>
                        </Stack>
                        <Divider />
                      </>
                    );
                  })
                : "No connection recommendations"}

            </Stack>
          </Box>
        </RightBoxConatiner>
      </Stack>
    </>
  );
};

export default UserProfile;
