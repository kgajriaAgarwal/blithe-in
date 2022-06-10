import {
  Stack,
  Typography,
  Avatar,
  Box,
  styled,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../Helpers/Common/utils";
import "./UserProfile.css";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, getUserDetailsByID, followUser } from "../../app/slice/userSlice";
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
  const userData = getLocalStorage("userData");
  let { username } = useParams();

  useEffect(() => {
    dispatch(getUserDetailsByID(username));
  }, [username]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleFollow = (userId) => {
    if(data && data?.userDetails?.data?.user && data?.userDetails?.data?.user?.following &&data?.userDetails?.data?.user?.following?.length && data?.userDetails?.status!=='loading'){
      const isFollowed = data?.userDetails?.data?.user?.following.some(user => user._id === userId)
      dispatch(followUser({ userId: userId, isFollowed:  isFollowed }))
    }else{
      dispatch(followUser({ userId: userId, isFollowed:  false }))
    }
    
  };

  const handleFollowUser = (username) => {
    if(data && data?.userDetails?.data?.user && data?.userDetails?.data?.user?.following &&data?.userDetails?.data?.user?.following?.length && data?.userDetails?.status!=='loading'){
      const isFollowed = data?.userDetails?.data?.user?.following.some(user => user.username === username)
      return isFollowed ? 'unfollow' :'Follow'
    }else{
      return 'Follow'
    }
  }

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between" p={4}>
        {data?.status === "loading" ? (
          <Typography variant="h6" sx={{ color: "secondary" }}>
            Loading..
          </Typography>
        ) : (
          <ProfileData userDetailsData={userDetailsData} />
        )}

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
                ? allUsers.filter(user_el => user_el.username !== userData.username ).map((user) => {
                    return (
                      <>
                      <Stack
                        direction="row">
                        <Stack
                          direction="row"
                          spacing={2}
                          gap="20px"
                          alignItems="center"
                          className="user-row"
                          onClick={() =>
                            dispatch(
                              getUserDetailsByID(user?.username)
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
                        
                         <Button
                         className="btn-follow"
                         id="btn-follow"
                         onClick={()=>handleFollow(user._id)}
                       >
                         {handleFollowUser(user.username)}
                       </Button>  
                      
                       
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
