import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetailsByID } from "../../app/slice/postSlice";
import { FeedCard } from "../Shared";

const FeedDetailsPage = () => {
  const postId = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetailsByID(postId));
  }, [postId]);

  return (
    <Box flex={4} p={2} bgcolor={"Background.default"}>

      { data?.postDetails?.data?.post && data?.postDetails?.status !== "loading" ? 
        <FeedCard feed={data?.postDetails?.data?.post} />
      :
        <Typography variant="h6" sx={{ color: "secondary" }}>
          Loading..
        </Typography>
      }
    </Box>
  );
};

export default FeedDetailsPage;
