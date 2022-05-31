import * as React from "react";
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
import { getLocalStorage } from "../../../Helpers/Common/utils";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch } from "react-redux";
import { addComment, deletePost } from "../../../app/slice/postSlice";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { openPostModal } from "../../../app/slice/addPostModalSlice";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { v4 as uuid } from "uuid";
import { Comment } from "../Comment/Comment";

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

  //console.table(feed);

  const [expanded, setExpanded] = React.useState(false);
  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [commentActionsOpen, setCommentActionsOpen] = React.useState(false);
  const userData = getLocalStorage("userData");
  const [commentInputData, setCommentInputData] = React.useState("");

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
              <IconButton aria-label="settings">
                <BookmarkIcon />
              </IconButton>
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
          <IconButton aria-label="add to favorites" className="feed-icon-btn">
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </IconButton>
          <IconButton
            aria-label="share"
            className="feed-icon-btn"
            sx={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <ShareIcon />
          </IconButton>

          {/* COMMENT ICON */}
          <IconButton
            aria-label="comment"
            className="feed-icon-btn"
            sx={{ paddingLeft: "20px" }}
          >
            <ChatBubbleOutlineIcon />
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

