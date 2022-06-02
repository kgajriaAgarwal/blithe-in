import React, {useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./FeedCard.css";
import { Button, CssBaseline, Divider, Stack, TextField } from "@mui/material";
import { getLocalStorage, showSuccessToast } from "../../../Helpers/Common/utils";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { addComment, bookmarkingPost, deletePost,  likeAndDislikePost } from "../../../app/slice/postSlice";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { openPostModal } from "../../../app/slice/addPostModalSlice";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { v4 as uuid } from "uuid";
import { Comment } from "../Comment/Comment";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const FeedCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { feed } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [commentActionsOpen, setCommentActionsOpen] = React.useState(false);
  const userData = getLocalStorage("userData");
  const isLiked = feed?.likes?.likedBy?.some(el => userData?.username === el.username)
  const data = useSelector((state) => state.post);
  const is_bookmark = (data  && data?.bookmarks?.data?.bookmarks && data?.bookmarks?.status!=='loading') ? data?.bookmarks?.data?.bookmarks.some(el => feed?.username === el.username && feed._id === el._id): false;
  const [commentInputData, setCommentInputData] = React.useState("");

  //      useEffect(()=> {
  //   // setComment_data(dataa?.comments?.data?.comments )
  //       console.log("data is in feed card.js:", data);
  // }, [data  && data?.bookmarks?.data?.bookmarks && data?.bookmarks?.status!=='loading'])

  const handleCommentInput = () => {
    if (commentInputData.length) {
      dispatch(
        addComment({
          postId: feed?._id,
          commentData: {
            _id: uuid(),
            username: userData?.username,
            text: commentInputData,
          },
        })
      )
        .unwrap()
        .then(() => {
          setCommentInputData("");
        });
    }
  };

  const handleLikeDislikePost = (e) =>{
    dispatch(likeAndDislikePost({ postId: feed._id, isLike: isLiked ? false : true }));
  }

  const handleBookmark = () => {
    dispatch(bookmarkingPost({ postId: feed._id, isBookmark: is_bookmark ? false : true })).unwrap().then(()=>{
      showSuccessToast(is_bookmark?"Post removed from bookmarks":"Post bookmarked successfully!!")
    })
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const label = {
    inputProps: {
      "aria-label": "Checkbox demo",
    },
  };


  return (
    <>
      <CssBaseline />
      <Card sx={{ marginTop: "10px", color: "red" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <Box className="action-box">
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              checked={is_bookmark }
              onChange={ handleBookmark}
            />
          {/* </IconButton> */}
              {userData?.username === feed.username ? (
                <Box className="action-box">
                  <Button
                    aria-label="settings"
                    onClick={() => setActionsOpen(!actionsOpen)}
                  >
                    {actionsOpen ? (
                      <ChevronRightIcon />
                    ) : (
                      <MoreVertIcon className="action-btn" />
                    )}
                  </Button>
                  {actionsOpen ? (
                    <Box>
                      <Button
                        onClick={() =>
                          dispatch(
                            openPostModal({ feed: feed, is_module: "EDIT" })
                      )}>
                        Edit
                      </Button>
                      <Button onClick={() => dispatch(deletePost(feed._id))}>
                        Delete
                      </Button>
                    </Box>
                  ) : (
                    ""
                  )}
                </Box>
              ) : null}
            </Box>
          }
          title={
            <Typography variant="h6" color="text.secondary">
              {feed.username}
            </Typography>
          }
          subheader={
            <Typography color="text.primary">{feed.createdAt}</Typography>
          }
          className="card-header"
          id="card-header"
        />
        {feed?.postImage ? (
          <CardMedia
            component="img"
            image={feed?.postImage}
            alt={feed?.title}
            id="feedcard-img"
            className="feedcard-img"
            onClick={() => navigate(`/post/${feed._id}`)}
          />
        ) : (
          ""
        )}

        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {feed.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {feed.content}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              checked={isLiked }
              onChange={ handleLikeDislikePost}
            />
          <Typography variant="h6" color="text.secondary">
            {feed?.likes?.likeCount}
          </Typography>
          <IconButton
            aria-label="share"
            className="feed-icon-btn"
            sx={{ marginLeft:'1.5rem' }}
          >
            <ShareIcon />
          </IconButton>

          {/* COMMENT ICON */}
          <IconButton
            aria-label="comment"
            className="feed-icon-btn"
            sx={{  marginLeft:'1rem'}}
            onClick={handleExpandClick}
          >
            <ChatBubbleOutlineIcon />
            <Typography variant="h6" color="text.secondary" ml={2}>
              {feed?.comments?.length}
            </Typography>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box className="comment-input-box">
              <Avatar aria-label="recipe" src={userData?.profilePic} />
              <TextField
                id="outlined-textarea"
                label="Add a comment.."
                placeholder="Add a comment.."
                // id="comment-input"
                className="comment-input"
                multiline
                variant="filled"
                size="small"
                value={commentInputData}
                onChange={(e) => setCommentInputData(e.target.value)}
              />
              <Button
                className="btn-post"
                id="btn-post"
                variant="contained"
                onClick={handleCommentInput}
              >
                Post
              </Button>
            </Box>
            {/* READ ONLY COMMENT BOX */}
            <Comment 
              //comment_data = {comment} 
              post_id={feed?._id}/>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

